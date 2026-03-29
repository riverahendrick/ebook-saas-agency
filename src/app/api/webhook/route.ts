import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { prisma } from '@/lib/prisma';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_dummy', {
  apiVersion: '2026-02-25.clover' as any,
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: Request) {
  const payload = await req.text();
  const sig = req.headers.get('stripe-signature') as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(payload, sig, endpointSecret || '');
  } catch (err: any) {
    console.error(`Webhook signature verification failed:`, err.message);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const customerEmail = session.customer_details?.email;
    const customerName = session.customer_details?.name;
    const amountTotal = session.amount_total || 0;
    const stripeSessionId = session.id;

    if (customerEmail) {
      try {
        // Find or create user
        let user = await prisma.user.findUnique({
          where: { email: customerEmail }
        });

        if (!user) {
          user = await prisma.user.create({
            data: {
              email: customerEmail,
              name: customerName,
            }
          });
        }

        // We assume a single product for now
        let product = await prisma.product.findFirst();
        
        if (!product) {
          product = await prisma.product.create({
            data: {
              name: 'The Zero-Cost Agency',
              price: 4900,
              filePath: '/ebook.pdf',
            }
          });
        }

        // Record purchase
        await prisma.purchase.create({
          data: {
            userId: user.id,
            productId: product.id,
            stripeSessionId,
            amount: amountTotal,
          }
        });
        
        console.log(`[WEBHOOK] Purchase recorded for: ${customerEmail}`);
      } catch (dbError: any) {
        console.error(`[WEBHOOK] Database error:`, dbError.message);
        return NextResponse.json({ error: 'Database error while saving purchase' }, { status: 500 });
      }
    }
  }

  return NextResponse.json({ received: true });
}
