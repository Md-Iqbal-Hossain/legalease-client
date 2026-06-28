// import { NextResponse } from 'next/server'
// import { headers } from 'next/headers'

// import { stripe } from '../../../lib/stripe'

// export async function POST() {
//   try {
//     const headersList = await headers()
//     const origin = headersList.get('origin')

//     // Create Checkout Sessions from body params.
//     const session = await stripe.checkout.sessions.create({
//       line_items: [
//         {
//           // Provide the exact Price ID (for example, price_1234) of the product you want to sell
//           price: '{{PRICE_ID}}',
//           quantity: 1,
//         },
//       ],
//       mode: 'payment',
//       success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
//     });
//     return NextResponse.redirect(session.url, 303)
//   } catch (err) {
//     return NextResponse.json(
//       { error: err.message },
//       { status: err.statusCode || 500 }
//     )
//   }
// }

// ********************************************************

// import { NextResponse } from 'next/server';
// import { headers } from 'next/headers';
// import Stripe from 'stripe';

// // .env ফাইল থেকে সিক্রেট কি দিয়ে স্ট্রাইপ ইনিশিয়েট করা
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export async function POST(req) {
//   try {
//     const headersList = await headers();
//     const origin = headersList.get('origin');
    
//     // ফ্রন্টএন্ড ফর্ম থেকে পাঠানো ডেটা নেওয়া (যেমন: plan_id)
//     const formData = await req.formData();
//     const planId = formData.get('plan_id');

//     // Stripe Checkout Session তৈরি করা
//     const session = await stripe.checkout.sessions.create({
//       line_items: [
//         {
//           // এখানে Stripe ড্যাশবোর্ড থেকে পাওয়া ওয়ান-টাইম $49-এর আসল PRICE_ID বসাবেন
//           price: 'YOUR_STRIPE_PRICE_ID_HERE', 
//           quantity: 1,
//         },
//       ],
//       mode: 'payment', // ওয়ান-টাইম পেমেন্টের জন্য মোড সবসময় 'payment' হবে
//       success_url: `${origin}/dashboard/lawyer/manage-legal-profile?payment_success=true&session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: `${origin}/plans?payment_canceled=true`,
//     });

//     // ব্যবহারকারীকে স্ট্রাইপের সিকিউর পেমেন্ট পেজে রিডাইরেক্ট করা
//     return NextResponse.redirect(session.url, 303);
//   } catch (err) {
//     console.error('Stripe Session Generation Error:', err);
//     return NextResponse.json(
//       { error: err.message },
//       { status: 500 }
//     );
//   }
// }

// ***********************************************************

import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { stripe, PLAN_PRICE_ID } from '@/lib/stripe';

export async function POST(request) {
    try {
        const headersList = await headers();
        const origin = headersList.get('origin');

        const formData = await request.formData();
        const planId = formData.get('plan_id'); // 'lawyer_premium'
        const email = formData.get('user_email') || ''; // ফর্ম অথবা সেশন থেকে নেওয়া ইমেইল
        
        const priceId = PLAN_PRICE_ID[planId];

        if (!priceId) {
            return NextResponse.json({ error: 'Invalid Plan/Price Configuration' }, { status: 400 });
        }

        // ওয়ান-টাইম পেমেন্টের জন্য সেশন তৈরি
        const session = await stripe.checkout.sessions.create({
            customer_email: email || undefined,
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            mode: 'payment', // ওয়ান-টাইম পেমেন্ট মোড
            metadata: { planId, email },
            success_url: `${origin}/plans/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/plans`,
        });

        return NextResponse.redirect(session.url, 303);
    } catch (err) {
        return NextResponse.json(
            { error: err.message },
            { status: err.statusCode || 500 }
        );
    }
}