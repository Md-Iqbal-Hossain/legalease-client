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

// import { NextResponse } from 'next/server';
// import { headers } from 'next/headers';
// import { stripe, PLAN_PRICE_ID } from '@/lib/stripe';

// export async function POST(request) {
//     try {
//         const headersList = await headers();
//         const origin = headersList.get('origin');

//         const formData = await request.formData();
//         const planId = formData.get('plan_id'); // 'lawyer_premium'
//         const email = formData.get('user_email') || ''; // ফর্ম অথবা সেশন থেকে নেওয়া ইমেইল
        
//         const priceId = PLAN_PRICE_ID[planId];

//         if (!priceId) {
//             return NextResponse.json({ error: 'Invalid Plan/Price Configuration' }, { status: 400 });
//         }

//         // ওয়ান-টাইম পেমেন্টের জন্য সেশন তৈরি
//         const session = await stripe.checkout.sessions.create({
//             customer_email: email || undefined,
//             line_items: [
//                 {
//                     price: priceId,
//                     quantity: 1,
//                 },
//             ],
//             mode: 'payment', // ওয়ান-টাইম পেমেন্ট মোড
//             metadata: { planId, email },
//             success_url: `${origin}/plans/success?session_id={CHECKOUT_SESSION_ID}`,
//             cancel_url: `${origin}/plans`,
//         });

//         return NextResponse.redirect(session.url, 303);
//     } catch (err) {
//         return NextResponse.json(
//             { error: err.message },
//             { status: err.statusCode || 500 }
//         );
//     }
// }

// ***********************************************************

// import { NextResponse } from 'next/server';
// import { headers } from 'next/headers';
// import { stripe, PLAN_PRICE_ID } from '@/lib/stripe';

// export async function POST(request) {
//     try {
//         const headersList = await headers();
//         const origin = headersList.get('origin');

//         const formData = await request.formData();
//         const paymentType = formData.get('payment_type') || 'verification'; // 'verification' or 'hiring'
//         const email = formData.get('user_email') || ''; 
        
//         let line_items = [];
//         let metadata = { paymentType, email };

//         // সিনারিও ১: লয়ার ওয়ান-টাইম ভেরিফিকেশন (আপনার কারেন্ট লজিক)
//         if (paymentType === 'verification') {
//             const planId = formData.get('plan_id'); // 'lawyer_premium'
//             const priceId = PLAN_PRICE_ID[planId];

//             if (!priceId) {
//                 return NextResponse.json({ error: 'Invalid Plan Configuration' }, { status: 400 });
//             }

//             line_items = [{ price: priceId, quantity: 1 }];
//             metadata.planId = planId;
//         } 
        
//         // সিনারিও ২: ক্লায়েন্ট কর্তৃক লয়ার হায়ারিং পেমেন্ট (চ্যালেঞ্জ রিকোয়ারমেন্টের জন্য ডাইনামিক ফি)
//         else if (paymentType === 'hiring') {
//             const hiringId = formData.get('hiring_id');
//             const lawyerName = formData.get('lawyer_name');
//             const fee = parseFloat(formData.get('fee')); // লয়ারের নির্দিষ্ট আওয়ারলি রেট

//             line_items = [{
//                 price_data: {
//                     currency: 'usd',
//                     product_data: {
//                         name: `Legal Consultation with ${lawyerName}`,
//                         description: `Hiring ID Ref: ${hiringId}`,
//                     },
//                     unit_amount: Math.round(fee * 100), // সেন্টে কনভার্ট
//                 },
//                 quantity: 1,
//             }];
//             metadata.hiringId = hiringId;
//         }

//         const session = await stripe.checkout.sessions.create({
//             customer_email: email || undefined,
//             line_items,
//             mode: 'payment',
//             metadata,
//             success_url: `${origin}/plans/success?session_id={CHECKOUT_SESSION_ID}`,
//             cancel_url: paymentType === 'hiring' ? `${origin}/dashboard/user/hiring-history` : `${origin}/plans`,
//         });

//         return NextResponse.redirect(session.url, 303);
//     } catch (err) {
//         return NextResponse.json({ error: err.message }, { status: 500 });
//     }
// }

// ********************************************************************

import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { stripe, PLAN_PRICE_ID } from '@/lib/stripe';

export async function POST(request) {
    try {
        const headersList = await headers();
        const origin = headersList.get('origin');

        const formData = await request.formData();
        const paymentType = formData.get('payment_type') || 'verification'; // 'verification' or 'hiring'
        
        // ফর্ম থেকে ক্লায়েন্ট বা ইউজার ইমেইল ডিটেক্ট করা
        const email = formData.get('client_email') || formData.get('user_email') || ''; 
        
        let line_items = [];
        let metadata = { paymentType, email };

        // সিনারিও ১: লয়ার ওয়ান-টাইম ভেরিফিকেশন
        if (paymentType === 'verification') {
            const planId = formData.get('plan_id'); // 'lawyer_premium'
            const priceId = PLAN_PRICE_ID[planId];

            if (!priceId) {
                return NextResponse.json({ error: 'Invalid Plan Configuration' }, { status: 400 });
            }

            line_items = [{ price: priceId, quantity: 1 }];
            metadata.planId = planId;
        } 
        
        // সিনারিও ২: ক্লায়েন্ট কর্তৃক লয়ার হায়ারিং পেমেন্ট (ডাইনামিক ফি)
        else if (paymentType === 'hiring') {
            const hiringId = formData.get('hiring_id');
            const lawyerName = formData.get('lawyer_name') || 'Selected Legal Counsel';
            
            // ফি না থাকলে একটি সেফ ডিফল্ট অ্যামাউন্ট (যেমন ৫০ ডলার) ধরা হচ্ছে যেন ক্র্যাশ না করে
            const rawFee = formData.get('amount') || formData.get('fee') || '50';
            const fee = parseFloat(rawFee); 

            if (!hiringId) {
                return NextResponse.json({ error: 'Missing Hiring Reference ID' }, { status: 400 });
            }

            line_items = [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: `Legal Consultation with ${lawyerName}`,
                        description: `Hiring Reference ID: ${hiringId}`,
                    },
                    unit_amount: Math.round(fee * 100), // সেন্টে কনভার্ট ($50 -> 5000 cents)
                },
                quantity: 1,
            }];
            
            metadata.hiringId = hiringId;
            metadata.amount = fee.toString();
        }

        // স্ট্রাইপ চেকআউট সেশন ক্রিয়েট
        const session = await stripe.checkout.sessions.create({
            customer_email: email || undefined,
            line_items,
            mode: 'payment',
            metadata,
            // আপনার প্রজেক্ট রুট অনুযায়ী সাকসেস এবং ক্যানসেল ইউআরএল সেট করা হলো
            success_url: `${origin}/plans/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: paymentType === 'hiring' 
                ? `${origin}/dashboard/client/hirings` 
                : `${origin}/plans`,
        });

        // স্ট্রাইপ পেমেন্ট পেজে রিডাইরেক্ট
        return NextResponse.redirect(session.url, 303);
    } catch (err) {
        console.error('Stripe Session Error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}