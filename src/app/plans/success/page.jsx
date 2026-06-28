import { stripe } from '@/lib/stripe';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { CircleCheckFill, Envelope, ArrowLeft } from '@gravity-ui/icons';

export default async function Success({ searchParams }) {
    const { session_id } = await searchParams;

    if (!session_id) {
        throw new Error('Please provide a valid session_id (`cs_test_...`)');
    }

    // স্ট্রাইপ থেকে সেশন ডেটা আনা
    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (session.status === 'open') {
        return redirect('/');
    }

    if (session.status === 'complete') {
        const customerEmail = session.customer_details?.email || session.metadata?.email;
        const planId = session.metadata?.planId || 'lawyer_premium';

        const subsInfo = {
            email: customerEmail,
            planId: planId,
            transactionId: session.id,
            amount: session.amount_total / 100, // সেন্ট থেকে ডলারে কনভার্ট
        };

        // এক্সপ্রেস ব্যাকএন্ড সার্ভারে পেমেন্ট ও প্ল্যান আপডেটের ডাটা পাঠানো হচ্ছে
        try {
            await fetch(`${process.env.NEXT_PUBLIC_SERVER_API_URL}/api/subscriptions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(subsInfo),
            });
        } catch (error) {
            console.error('Failed to sync payment with Express Server:', error);
        }

        return (
            <div className="w-full min-h-screen bg-zinc-950 text-zinc-50 flex flex-col justify-center items-center p-6 select-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

                <section className="relative max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl text-center overflow-hidden">
                    <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20 shadow-[0_0_24px_rgba(16,185,129,0.1)]">
                        <CircleCheckFill className="w-8 h-8 text-emerald-500" />
                    </div>

                    <h1 className="text-2xl font-extrabold text-zinc-50 tracking-tight mb-2">
                        License Activated!
                    </h1>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        Thank you! Your one-time publishing license is now active. Your profile is unlocked permanently.
                    </p>

                    <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-4 text-left space-y-3.5 text-xs mb-8">
                        <div className="flex items-start gap-2.5">
                            <Envelope className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                            <div>
                                <span className="block font-semibold text-zinc-400 mb-0.5">Account Registered Email</span>
                                <span className="text-zinc-200 break-all">{customerEmail}</span>
                            </div>
                        </div>

                        <div className="border-t border-zinc-800/60 pt-3 flex flex-col gap-1 text-zinc-500">
                            <span>Have licensing or setup configuration support questions?</span>
                            <a href="mailto:support@legalease.com" className="text-amber-400 hover:text-amber-300 font-medium inline-flex items-center transition">
                                support@legalease.com
                            </a>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <Link href="/dashboard" className="block w-full text-center text-xs font-semibold px-4 py-3 bg-amber-500 hover:bg-amber-400 text-zinc-950 rounded-xl shadow-lg transition duration-200">
                            Go to Lawyer Dashboard
                        </Link>

                        <Link href="/" className="inline-flex items-center justify-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-200 py-1 transition">
                            <ArrowLeft className="w-3.5 h-3.5" />
                            Return to Homepage
                        </Link>
                    </div>
                </section>
            </div>
        );
    }
}