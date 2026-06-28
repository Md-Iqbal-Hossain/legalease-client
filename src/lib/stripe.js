import 'server-only';
import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// আপনার অরিজিনাল লিগ্যাল-ইজ ওয়ান-টাইম প্রাইস আইডি ম্যাপিং
export const PLAN_PRICE_ID = {
    'lawyer_premium': 'price_1TnC9m2ZOy9m1M2yQM4H2jnB'
};