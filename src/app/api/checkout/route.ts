import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const isLive = process.env.NEXT_PUBLIC_STRIPE_MODE === 'live';
const secretKey = isLive 
  ? process.env.STRIPE_LIVE_SECRET_KEY 
  : process.env.STRIPE_TEST_SECRET_KEY;

const stripe = new Stripe(secretKey || 'sk_test_dummy', {
  apiVersion: '2026-02-25.clover',
});

export async function POST(req: Request) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      allow_promotion_codes: true,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'The Zero-Cost Agency',
              description: 'Digital eBook',
            },
            unit_amount: 4900, // $49.00
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://ebook-saas-agency.vercel.app'}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://ebook-saas-agency.vercel.app'}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
