import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { prisma } from '@/lib/prisma';
import fs from 'fs';
import path from 'path';

const isLive = process.env.NEXT_PUBLIC_STRIPE_MODE === 'live';
const secretKey = isLive 
  ? process.env.STRIPE_LIVE_SECRET_KEY 
  : process.env.STRIPE_TEST_SECRET_KEY;

const stripe = new Stripe(secretKey || 'sk_test_dummy', {
  apiVersion: '2026-02-25.clover' as any,
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get('session_id');

  if (!sessionId) {
    return NextResponse.json({ error: 'Missing session_id' }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== 'paid') {
      return NextResponse.json({ error: 'Payment not completed' }, { status: 403 });
    }

    // Optional: Verify in DB
    const purchase = await prisma.purchase.findUnique({
      where: { stripeSessionId: sessionId }
    });

    if (!purchase) {
      // In a real app we might retry or wait for webhook, but here we can just allow it if Stripe says paid
      console.warn(`[DOWNLOAD] Payment verified via Stripe, but DB record not yet present for session: ${sessionId}`);
    }

    // Serve the eBook PDF (assumes it's in public/ebook.pdf)
    const filePath = path.join(process.cwd(), 'public', 'ebook.pdf');
    
    // Check if file exists, if not, create a dummy one for testing
    if (!fs.existsSync(filePath)) {
      return new NextResponse('eBook file not found on server.', { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="The_Zero_Cost_Agency.pdf"',
      },
    });

  } catch (error: any) {
    console.error(`[DOWNLOAD] Error:`, error.message);
    return NextResponse.json({ error: 'Invalid session or server error' }, { status: 500 });
  }
}
