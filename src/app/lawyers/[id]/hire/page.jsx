// import { getLawyerById } from '@/lib/api/lawyers';
// import { getUserSession } from '@/lib/core/session';
// import { redirect } from 'next/navigation';
// import React from 'react';
// import HireForm from './HireForm';
// import { getConsultationsByClient } from '@/lib/api/consultations';
// import Link from 'next/link';
// import { ShieldExclamation, CircleInfo, Rocket } from '@gravity-ui/icons';
// import { getClientPlanById } from '@/lib/api/plans';

// const LegalHirePage = async ({ params }) => {
//     const { id } = await params;

//     // ১. ইউজার সেশন চেক
//     const user = await getUserSession();
//     if (!user) {
//         // সাইন ইন করার পর যেন আবার এই হায়ার পেজেই ব্যাক আসে তার জন্য রিডাইরেক্ট ব্যাক লিংক
//         redirect(`/auth/signin?redirect=/lawyers/${id}/hire`);
//     }

//     // ২. ক্লায়েন্ট রোল গার্ড (শুধুমাত্র মক্কেলরা হায়ার করতে পারবে)
//     if (user.role !== 'client') {
//         return (
//             <div className="w-full min-h-[80vh] flex flex-col justify-center items-center text-white p-6">
//                 <div className="max-w-md w-full text-center p-8 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl">
//                     <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                         <ShieldExclamation className="w-6 h-6" />
//                     </div>
//                     <h3 className="text-xl font-bold text-zinc-100 mb-2">Access Restricted</h3>
//                     <p className="text-zinc-400 text-sm leading-relaxed mb-6">
//                         Only registered clients can retain legal counsel. Please switch to a client account to proceed.
//                     </p>
//                     <Link 
//                         href="/auth/signin" 
//                         className="inline-block w-full px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg text-sm font-medium transition text-center"
//                     >
//                         Switch Account
//                     </Link>
//                 </div>
//             </div>
//         );
//     }

//     // ৩. ডাটা ফেচিং এবং কোটা ক্যালকুলেশন
//     const consultations = await getConsultationsByClient(user.id);
//     const plan = await getClientPlanById(user?.plan || 'client_free');
//     const lawyer = await getLawyerById(id);

//     const consultationCount = consultations?.length || 0;
//     const hasReachedLimit = consultationCount >= plan.maxConsultationsPerMonth;
    
//     // প্রগ্রেস বারের পার্সেন্টেজ
//     const usagePercentage = Math.min((consultationCount / plan.maxConsultationsPerMonth) * 100, 100);

//     return (
//         <div className="w-full min-h-screen bg-zinc-950 text-zinc-50 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-3xl mx-auto space-y-8">
                
//                 {/* কোটা ও প্রিমিয়াম আপগ্রেড ট্র্যাকার কার্ড */}
//                 <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-lg">
//                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
//                         <div>
//                             <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">
//                                 Monthly Legal Consultation Status
//                             </span>
//                             <h2 className="text-lg font-bold text-zinc-100 mt-0.5">
//                                 Used <span className="text-amber-400">{consultationCount}</span> out of <span className="text-zinc-400">{plan.maxConsultationsPerMonth}</span> standard requests
//                             </h2>
//                         </div>
//                         <span className="self-start sm:self-center px-2.5 py-1 text-xs font-medium rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
//                             Tier: <strong className="text-amber-400 font-semibold">{plan.name}</strong>
//                         </span>
//                     </div>

//                     {/* ডায়নামিক প্রগ্রেস বার */}
//                     <div className="w-full bg-zinc-800 h-2.5 rounded-full overflow-hidden mb-5">
//                         <div 
//                             className={`h-full transition-all duration-500 rounded-full ${
//                                 hasReachedLimit ? 'bg-red-500' : usagePercentage > 75 ? 'bg-amber-500' : 'bg-amber-400'
//                             }`}
//                             style={{ width: `${usagePercentage}%` }}
//                         />
//                     </div>

//                     {/* আপসেল ব্লক */}
//                     <div className="flex items-start gap-3 bg-amber-950/20 border border-amber-900/40 rounded-xl p-4 text-sm text-amber-300/90">
//                         <Rocket className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
//                         <div className="flex-1 sm:flex sm:items-center sm:justify-between gap-4">
//                             <p>Need urgent legal assistance beyond your limit? Upgrade to Premium Tier for priority response.</p>
//                             <Link 
//                                 href="/membership" 
//                                 className="inline-block mt-2 sm:mt-0 whitespace-nowrap text-xs font-bold bg-amber-500 hover:bg-amber-600 text-zinc-950 px-3 py-1.5 rounded-lg transition"
//                             >
//                                 Upgrade Tier
//                             </Link>
//                         </div>
//                     </div>
//                 </div>

//                 {/* ফর্ম রেন্ডারিং অথবা লকআউট স্টেট */}
//                 {hasReachedLimit ? (
//                     <div className="bg-zinc-900/50 border border-dashed border-zinc-800 rounded-2xl p-8 text-center flex flex-col items-center justify-center">
//                         <div className="w-10 h-10 bg-zinc-800 text-zinc-400 rounded-full flex items-center justify-center mb-3">
//                             <CircleInfo className="w-5 h-5 text-red-400" />
//                         </div>
//                         <h4 className="text-base font-semibold text-zinc-200">Consultation Quota Exhausted</h4>
//                         <p className="text-sm text-zinc-500 max-w-sm mt-1">
//                             You have reached your limit for this cycle. Upgrade your membership plan to resume retaining lawyers instantly.
//                         </p>
//                     </div>
//                 ) : (
//                     <div className="animate-in fade-in-50 duration-300">
//                         <HireForm client={user} lawyer={lawyer} />
//                     </div>
//                 )}
                
//             </div>
//         </div>
//     );
// };

// export default LegalHirePage;

// *********************************************************************************

import { getLawyerById } from '@/lib/api/lawyers';
import { getUserSession } from '@/lib/core/session';
import { redirect } from 'next/navigation';
import React from 'react';
import HireForm from './HireForm';
import { getConsultationsByClient } from '@/lib/api/consultations';
import Link from 'next/link';
import { ShieldExclamation, CircleInfo, Rocket } from '@gravity-ui/icons';
import { getClientPlanById } from '@/lib/api/plans';

// 💡 এই দুই লাইন নেক্সট-জেএস কে বাধ্য করবে প্রতিবার লাইভ সেশন ও কুকি চেক করতে
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const LegalHirePage = async ({ params }) => {
    const { id } = await params;

    // ১. ইউজার সেশন চেক
    const user = await getUserSession();
    if (!user) {
        // সাইন ইন করার পর যেন আবার এই হায়ার পেজেই ব্যাক আসে তার জন্য রিডাইরেক্ট ব্যাক লিংক
        redirect(`/auth/signin?redirect=/lawyers/${id}/hire`);
    }

    // ২. ক্লায়েন্ট রোল গার্ড (শুধুমাত্র মক্কেলরা হায়ার করতে পারবে)
    if (user.role !== 'client') {
        return (
            <div className="w-full min-h-[80vh] flex flex-col justify-center items-center text-white p-6">
                <div className="max-w-md w-full text-center p-8 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl">
                    <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShieldExclamation className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-100 mb-2">Access Restricted</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        Only registered clients can retain legal counsel. Please switch to a client account to proceed.
                    </p>
                    <Link 
                        href="/auth/signin" 
                        className="inline-block w-full px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg text-sm font-medium transition text-center"
                    >
                        Switch Account
                    </Link>
                </div>
            </div>
        );
    }

    // ৩. ডাটা ফেচিং এবং কোটা ক্যালকুলেশন
    const consultations = await getConsultationsByClient(user.id);
    const plan = await getClientPlanById(user?.plan || 'client_free');
    const lawyer = await getLawyerById(id);

    const consultationCount = consultations?.length || 0;
    const hasReachedLimit = consultationCount >= plan.maxConsultationsPerMonth;
    
    // প্রগ্রেস বারের পার্সেন্টেজ
    const usagePercentage = Math.min((consultationCount / plan.maxConsultationsPerMonth) * 100, 100);

    return (
        <div className="w-full min-h-screen bg-zinc-950 text-zinc-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-8">
                
                {/* কোটা ও প্রিমিয়াম আপগ্রেড ট্র্যাকার কার্ড */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">
                                Monthly Legal Consultation Status
                            </span>
                            <h2 className="text-lg font-bold text-zinc-100 mt-0.5">
                                Used <span className="text-amber-400">{consultationCount}</span> out of <span className="text-zinc-400">{plan.maxConsultationsPerMonth}</span> standard requests
                            </h2>
                        </div>
                        <span className="self-start sm:self-center px-2.5 py-1 text-xs font-medium rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                            Tier: <strong className="text-amber-400 font-semibold">{plan.name}</strong>
                        </span>
                    </div>

                    {/* ডায়নামিক প্রগ্রেস বার */}
                    <div className="w-full bg-zinc-800 h-2.5 rounded-full overflow-hidden mb-5">
                        <div 
                            className={`h-full transition-all duration-500 rounded-full ${
                                hasReachedLimit ? 'bg-red-500' : usagePercentage > 75 ? 'bg-amber-500' : 'bg-amber-400'
                            }`}
                            style={{ width: `${usagePercentage}%` }}
                        />
                    </div>

                    {/* আপসেল ব্লক */}
                    <div className="flex items-start gap-3 bg-amber-950/20 border border-amber-900/40 rounded-xl p-4 text-sm text-amber-300/90">
                        <Rocket className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                        <div className="flex-1 sm:flex sm:items-center sm:justify-between gap-4">
                            <p>Need urgent legal assistance beyond your limit? Upgrade to Premium Tier for priority response.</p>
                            <Link 
                                href="/membership" 
                                className="inline-block mt-2 sm:mt-0 whitespace-nowrap text-xs font-bold bg-amber-500 hover:bg-amber-600 text-zinc-950 px-3 py-1.5 rounded-lg transition"
                            >
                                Upgrade Tier
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ফর্ম রেন্ডারিং অথবা লকআউট স্টেট */}
                {hasReachedLimit ? (
                    <div className="bg-zinc-900/50 border border-dashed border-zinc-800 rounded-2xl p-8 text-center flex flex-col items-center justify-center">
                        <div className="w-10 h-10 bg-zinc-800 text-zinc-400 rounded-full flex items-center justify-center mb-3">
                            <CircleInfo className="w-5 h-5 text-red-400" />
                        </div>
                        <h4 className="text-base font-semibold text-zinc-200">Consultation Quota Exhausted</h4>
                        <p className="text-sm text-zinc-500 max-w-sm mt-1">
                            You have reached your limit for this cycle. Upgrade your membership plan to resume retaining lawyers instantly.
                        </p>
                    </div>
                ) : (
                    <div className="animate-in fade-in-50 duration-300">
                        {/* এখানে client প্রপ্সে user-কে পাঠানো নিশ্চিত করা হলো যাতে HireForm-এর মেটাডেটা ঠিক থাকে */}
                        <HireForm client={user} lawyer={lawyer} />
                    </div>
                )}
                
            </div>
        </div>
    );
};

export default LegalHirePage;