import Stripe from 'stripe'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: 'Stripe not configured' }, { status: 503 })
  }
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  const { name, email } = await req.json() as { name: string; email: string }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: '30-Day Keto Reset',
            description: 'Complete PDF guide by Olena Marchenko — instant download after payment',
            images: [],
          },
          unit_amount: 2700,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    customer_email: email,
    metadata: { customer_name: name },
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/buy/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/buy?cancelled=1`,
    custom_text: {
      submit: { message: "You'll receive an instant download link after payment." },
    },
  })

  return NextResponse.json({ url: session.url })
}
