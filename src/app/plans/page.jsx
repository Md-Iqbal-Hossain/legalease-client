// 'use client';
// import React, { useState } from 'react';
// import Link from 'next/link';
// import {
//     Check,
//     CircleQuestion,
//     ChevronDown,
//     ShieldExclamation,
//     Rocket,
//     Star
// } from '@gravity-ui/icons';

// const PricingPage = () => {
//     // State to track opened accordion items in the FAQ section
//     const [openFaq, setOpenFaq] = useState(null);

//     const toggleFaq = (index) => {
//         setOpenFaq(openFaq === index ? null : index);
//     };

//     // Aligned explicitly with LegalEase flat-fee activation baseline requirement
//     const verificationPlan = {
//         name: 'Professional Verification & Publishing License',
//         id: 'lawyer_premium',
//         price: '$49',
//         period: ' / one-time activation',
//         description: 'Get fully verified, unlock your dashboard features, and list your card permanently on the public "Browse Lawyers" catalog.',
//         icon: <Rocket className="w-5 h-5 text-blue-400" />,
//         features: [
//             'Instant lifetime placement on the Browse Lawyers public directory',
//             'Full profile building (Bio, Specialization, Contact Info)',
//             'Remove all profile visibility limits and restriction blocks',
//             'Authentic Verified Professional badge on customer feeds',
//             'Direct consultation booking pipeline activation'
//         ],
//         cta: 'Pay Activation Fee ($49)'
//     };

//     const faqs = [
//         {
//             question: 'Is this a monthly subscription or a one-time payment?',
//             answer: 'This is strictly a one-time activation fee. LegalEase does not charge any recurring monthly or annual costs. Once paid, your verified publishing license is permanent.'
//         },
//         {
//             question: 'What happens after I complete the payment?',
//             answer: 'Your account status instantly switches from "Unverified Tier" to "Verified Professional". This automatically unlocks your profile dashboard, allowing you to update your legal specialization and show up on the public client search engine.'
//         },
//         {
//             question: 'Are there any commission splits or hidden fees on client hires?',
//             answer: 'None at all. LegalEase is an open-access platform. Every dollar you charge a client through your independent consultation structure belongs entirely to you.'
//         },
//         {
//             question: 'Can I request a refund if my profile activation stalls?',
//             answer: 'If you experience any deployment bottlenecks or choose to retract your publishing request within 14 days, our priority support desk will facilitate a full refund.'
//         }
//     ];

//     return (
//         <div className="w-full min-h-screen bg-zinc-950 text-zinc-50 py-16 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-6xl mx-auto">

//                 {/* Header Typography */}
//                 <div className="text-center max-w-3xl mx-auto mb-12">
//                     <span className="text-xs font-semibold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
//                         Verification Pipeline
//                     </span>
//                     <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 mt-4 tracking-tight">
//                         Activate Your Legal Publishing License
//                     </h1>
//                     <p className="text-zinc-400 mt-3 text-sm sm:text-base leading-relaxed">
//                         Complete your baseline verification to build public trust, showcase your credentials, and start connecting with clients globally.
//                     </p>
//                 </div>

//                 {/* Single Premium Focus Layout Card */}
//                 <div className="max-w-md mx-auto mb-24">
//                     <div className="relative bg-zinc-900 border border-amber-500/40 rounded-2xl p-6 shadow-2xl flex flex-col justify-between min-h-[500px] ring-4 ring-amber-500/5">
                        
//                         <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-[10px] font-bold text-black bg-amber-500 rounded-full uppercase tracking-wider shadow-md">
//                             Required for Activation
//                         </span>

//                         <div>
//                             <div className="flex items-center justify-between gap-2 mb-3 mt-2">
//                                 <h3 className="text-lg font-bold text-zinc-100 leading-tight">{verificationPlan.name}</h3>
//                                 <div className="p-2 bg-zinc-950/60 rounded-lg border border-zinc-800/80 shrink-0">
//                                     {verificationPlan.icon}
//                                 </div>
//                             </div>
//                             <p className="text-xs text-zinc-400 leading-relaxed min-h-[36px] mb-4">
//                                 {verificationPlan.description}
//                             </p>

//                             {/* Flat Pricing Indicator */}
//                             <div className="my-6 flex items-baseline gap-1">
//                                 <span className="text-5xl font-black text-zinc-50 tracking-tight">{verificationPlan.price}</span>
//                                 <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">{verificationPlan.period}</span>
//                             </div>

//                             <hr className="border-zinc-800/80 mb-6" />

//                             {/* Features Mapping */}
//                             <ul className="space-y-3.5">
//                                 {verificationPlan.features.map((feature, fIdx) => (
//                                     <li key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
//                                         <div className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
//                                             <Check className="w-3 h-3" />
//                                         </div>
//                                         <span className="leading-normal">{feature}</span>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>

//                         {/* Payment Action Router Form */}
//                         <div className="mt-8">
//                             <form action="/api/checkout_sessions" method="POST">
//                                 <input type="hidden" name="plan_id" value={verificationPlan.id} />
//                                 <button 
//                                     type="submit"
//                                     className="block w-full text-center text-xs font-bold bg-amber-500 hover:bg-amber-400 text-zinc-950 px-4 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/10 transform hover:-translate-y-0.5"
//                                 >
//                                     {verificationPlan.cta}
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>

//                 {/* FAQ Accordion Section */}
//                 <div className="max-w-3xl mx-auto border-t border-zinc-800 pt-16">
//                     <div className="text-center mb-10">
//                         <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 mb-3">
//                             <CircleQuestion className="w-5 h-5" />
//                         </div>
//                         <h2 className="text-xl sm:text-2xl font-bold text-zinc-100">Verification & Billing FAQ</h2>
//                         <p className="text-xs text-zinc-500 mt-1">Clear answers regarding our secure single-tier baseline activation process.</p>
//                     </div>

//                     <div className="space-y-3">
//                         {faqs.map((faq, idx) => {
//                             const isOpen = openFaq === idx;
//                             return (
//                                 <div
//                                     key={idx}
//                                     className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden transition-colors duration-200"
//                                 >
//                                     <button
//                                         onClick={() => toggleFaq(idx)}
//                                         className="w-full flex items-center justify-between text-left p-4 gap-4 text-zinc-200 hover:text-white transition"
//                                     >
//                                         <span className="text-sm font-semibold">{faq.question}</span>
//                                         <ChevronDown
//                                             className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-amber-500' : ''}`}
//                                         />
//                                     </button>

//                                     <div
//                                         className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 border-t border-zinc-800/60' : 'max-h-0'}`}
//                                     >
//                                         <div className="p-4 text-xs text-zinc-400 leading-relaxed bg-zinc-900/50">
//                                             {faq.answer}
//                                         </div>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default PricingPage;

// *******************************************************

// 'use client';
// import React, { useState } from 'react';
// import Link from 'next/link';
// // এখানে আপনার প্রজেক্টের BetterAuth ক্লায়েন্ট অথ ইন্সট্যান্সটি ইম্পোর্ট করুন (যেমন: authClient বা custom useSession hook)
// // উদাহরণস্বরূপ: import { authClient } from '@/lib/auth-client';
// import {
//     Check,
//     CircleQuestion,
//     ChevronDown,
//     Rocket
// } from '@gravity-ui/icons';

// const PricingPage = () => {
//     // সেশন থেকে ইউজার ডেটা নেওয়ার জন্য (BetterAuth বা আপনার কাস্টম সেশন মেকানিজম এখানে বসবে)
//     // উদাহরণ: const { data: session } = authClient.useSession();
//     // const loggedUser = session?.user;
    
//     // আপাতত ডামি বা আপনার কাস্টম সেশন স্টেট ম্যাপ করার জন্য (প্রয়োজন অনুযায়ী রিয়েল সেশন ভেরিয়েবল দিয়ে রিপ্লেস করুন)
//     const [loggedUser] = useState({ email: 'user@example.com' }); 

//     const [openFaq, setOpenFaq] = useState(null);

//     const toggleFaq = (index) => {
//         setOpenFaq(openFaq === index ? null : index);
//     };

//     const verificationPlan = {
//         name: 'Professional Verification & Publishing License',
//         id: 'lawyer_premium',
//         price: '$49',
//         period: ' / one-time activation',
//         description: 'Get fully verified, unlock your dashboard features, and list your card permanently on the public "Browse Lawyers" catalog.',
//         icon: <Rocket className="w-5 h-5 text-blue-400" />,
//         features: [
//             'Instant lifetime placement on the Browse Lawyers public directory',
//             'Full profile building (Bio, Specialization, Contact Info)',
//             'Remove all profile visibility limits and restriction blocks',
//             'Authentic Verified Professional badge on customer feeds',
//             'Direct consultation booking pipeline activation'
//         ],
//         cta: 'Pay Activation Fee ($49)'
//     };

//     const faqs = [
//         {
//             question: 'Is this a monthly subscription or a one-time payment?',
//             answer: 'This is strictly a one-time activation fee. LegalEase does not charge any recurring monthly or annual costs. Once paid, your verified publishing license is permanent.'
//         },
//         {
//             question: 'What happens after I complete the payment?',
//             answer: 'Your account status instantly switches from "Unverified Tier" to "Verified Professional". This automatically unlocks your profile dashboard, allowing you to update your legal specialization and show up on the public client search engine.'
//         },
//         {
//             question: 'Are there any commission splits or hidden fees on client hires?',
//             answer: 'None at all. LegalEase is an open-access platform. Every dollar you charge a client through your independent consultation structure belongs entirely to you.'
//         },
//         {
//             question: 'Can I request a refund if my profile activation stalls?',
//             answer: 'If you experience any deployment bottlenecks or choose to retract your publishing request within 14 days, our priority support desk will facilitate a full refund.'
//         }
//     ];

//     return (
//         <div className="w-full min-h-screen bg-zinc-950 text-zinc-50 py-16 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-6xl mx-auto">

//                 {/* Header Typography */}
//                 <div className="text-center max-w-3xl mx-auto mb-12">
//                     <span className="text-xs font-semibold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
//                         Verification Pipeline
//                     </span>
//                     <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 mt-4 tracking-tight">
//                         Activate Your Legal Publishing License
//                     </h1>
//                     <p className="text-zinc-400 mt-3 text-sm sm:text-base leading-relaxed">
//                         Complete your baseline verification to build public trust, showcase your credentials, and start connecting with clients globally.
//                     </p>
//                 </div>

//                 {/* Single Premium Focus Layout Card */}
//                 <div className="max-w-md mx-auto mb-24">
//                     <div className="relative bg-zinc-900 border border-amber-500/40 rounded-2xl p-6 shadow-2xl flex flex-col justify-between min-h-[500px] ring-4 ring-amber-500/5">
                        
//                         <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-[10px] font-bold text-black bg-amber-500 rounded-full uppercase tracking-wider shadow-md">
//                             Required for Activation
//                         </span>

//                         <div>
//                             <div className="flex items-center justify-between gap-2 mb-3 mt-2">
//                                 <h3 className="text-lg font-bold text-zinc-100 leading-tight">{verificationPlan.name}</h3>
//                                 <div className="p-2 bg-zinc-950/60 rounded-lg border border-zinc-800/80 shrink-0">
//                                     {verificationPlan.icon}
//                                 </div>
//                             </div>
//                             <p className="text-xs text-zinc-400 leading-relaxed min-h-[36px] mb-4">
//                                 {verificationPlan.description}
//                             </p>

//                             {/* Flat Pricing Indicator */}
//                             <div className="my-6 flex items-baseline gap-1">
//                                 <span className="text-5xl font-black text-zinc-50 tracking-tight">{verificationPlan.price}</span>
//                                 <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">{verificationPlan.period}</span>
//                             </div>

//                             <hr className="border-zinc-800/80 mb-6" />

//                             {/* Features Mapping */}
//                             <ul className="space-y-3.5">
//                                 {verificationPlan.features.map((feature, fIdx) => (
//                                     <li key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
//                                         <div className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
//                                             <Check className="w-3 h-3" />
//                                         </div>
//                                         <span className="leading-normal">{feature}</span>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>

//                         {/* Payment Action Router Form */}
//                         <div className="mt-8">
//                             <form action="/api/checkout_sessions" method="POST">
//                                 <input type="hidden" name="plan_id" value={verificationPlan.id} />
//                                 {/* ইমেইল ফিল্ডটি এখানে হিডেন ইনপুট হিসেবে সংযুক্ত করা হয়েছে */}
//                                 <input type="hidden" name="user_email" value={loggedUser?.email || ''} />
                                
//                                 <button 
//                                     type="submit"
//                                     className="block w-full text-center text-xs font-bold bg-amber-500 hover:bg-amber-400 text-zinc-950 px-4 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/10 transform hover:-translate-y-0.5"
//                                 >
//                                     {verificationPlan.cta}
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>

//                 {/* FAQ Accordion Section */}
//                 <div className="max-w-3xl mx-auto border-t border-zinc-800 pt-16">
//                     <div className="text-center mb-10">
//                         <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 mb-3">
//                             <CircleQuestion className="w-5 h-5" />
//                         </div>
//                         <h2 className="text-xl sm:text-2xl font-bold text-zinc-100">Verification & Billing FAQ</h2>
//                         <p className="text-xs text-zinc-500 mt-1">Clear answers regarding our secure single-tier baseline activation process.</p>
//                     </div>

//                     <div className="space-y-3">
//                         {faqs.map((faq, idx) => {
//                             const isOpen = openFaq === idx;
//                             return (
//                                 <div
//                                     key={idx}
//                                     className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden transition-colors duration-200"
//                                 >
//                                     <button
//                                         onClick={() => toggleFaq(idx)}
//                                         className="w-full flex items-center justify-between text-left p-4 gap-4 text-zinc-200 hover:text-white transition"
//                                     >
//                                         <span className="text-sm font-semibold">{faq.question}</span>
//                                         <ChevronDown
//                                             className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-amber-500' : ''}`}
//                                         />
//                                     </button>

//                                     <div
//                                         className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 border-t border-zinc-800/60' : 'max-h-0'}`}
//                                     >
//                                         <div className="p-4 text-xs text-zinc-400 leading-relaxed bg-zinc-900/50">
//                                             {faq.answer}
//                                         </div>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default PricingPage;

// ***********************************************

'use client';
import React, { useState } from 'react';
import Link from 'next/link';
// BetterAuth ক্লায়েন্ট ইন্সট্যান্স ইম্পোর্ট (আপনার প্রজেক্টের পাথ অনুযায়ী প্রয়োজনে ম্যাচ করে নিন)
import { authClient } from '@/lib/auth-client'; 
import {
    Check,
    CircleQuestion,
    ChevronDown,
    Rocket
} from '@gravity-ui/icons';

const PricingPage = () => {
    // BetterAuth সেশন থেকে রিয়েল-টাইম লগড-ইন ইউজার ডেটা রিড করা
    const { data: session } = authClient.useSession();
    const loggedUser = session?.user; 

    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const verificationPlan = {
        name: 'Professional Verification & Publishing License',
        id: 'lawyer_premium',
        price: '$49',
        period: ' / one-time activation',
        description: 'Get fully verified, unlock your dashboard features, and list your card permanently on the public "Browse Lawyers" catalog.',
        icon: <Rocket className="w-5 h-5 text-blue-400" />,
        features: [
            'Instant lifetime placement on the Browse Lawyers public directory',
            'Full profile building (Bio, Specialization, Contact Info)',
            'Remove all profile visibility limits and restriction blocks',
            'Authentic Verified Professional badge on customer feeds',
            'Direct consultation booking pipeline activation'
        ],
        cta: 'Pay Activation Fee ($49)'
    };

    const faqs = [
        {
            question: 'Is this a monthly subscription or a one-time payment?',
            answer: 'This is strictly a one-time activation fee. LegalEase does not charge any recurring monthly or annual costs. Once paid, your verified publishing license is permanent.'
        },
        {
            question: 'What happens after I complete the payment?',
            answer: 'Your account status instantly switches from "Unverified Tier" to "Verified Professional". This automatically unlocks your profile dashboard, allowing you to update your legal specialization and show up on the public client search engine.'
        },
        {
            question: 'Are there any commission splits or hidden fees on client hires?',
            answer: 'None at all. LegalEase is an open-access platform. Every dollar you charge a client through your independent consultation structure belongs entirely to you.'
        },
        {
            question: 'Can I request a refund if my profile activation stalls?',
            answer: 'If you experience any deployment bottlenecks or choose to retract your publishing request within 14 days, our priority support desk will facilitate a full refund.'
        }
    ];

    return (
        <div className="w-full min-h-screen bg-zinc-950 text-zinc-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

                {/* Header Typography */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-xs font-semibold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                        Verification Pipeline
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 mt-4 tracking-tight">
                        Activate Your Legal Publishing License
                    </h1>
                    <p className="text-zinc-400 mt-3 text-sm sm:text-base leading-relaxed">
                        Complete your baseline verification to build public trust, showcase your credentials, and start connecting with clients globally.
                    </p>
                </div>

                {/* Single Premium Focus Layout Card */}
                <div className="max-w-md mx-auto mb-24">
                    <div className="relative bg-zinc-900 border border-amber-500/40 rounded-2xl p-6 shadow-2xl flex flex-col justify-between min-h-[500px] ring-4 ring-amber-500/5">
                        
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-[10px] font-bold text-black bg-amber-500 rounded-full uppercase tracking-wider shadow-md">
                            Required for Activation
                        </span>

                        <div>
                            <div className="flex items-center justify-between gap-2 mb-3 mt-2">
                                <h3 className="text-lg font-bold text-zinc-100 leading-tight">{verificationPlan.name}</h3>
                                <div className="p-2 bg-zinc-950/60 rounded-lg border border-zinc-800/80 shrink-0">
                                    {verificationPlan.icon}
                                </div>
                            </div>
                            <p className="text-xs text-zinc-400 leading-relaxed min-h-[36px] mb-4">
                                {verificationPlan.description}
                            </p>

                            {/* Flat Pricing Indicator */}
                            <div className="my-6 flex items-baseline gap-1">
                                <span className="text-5xl font-black text-zinc-50 tracking-tight">{verificationPlan.price}</span>
                                <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">{verificationPlan.period}</span>
                            </div>

                            <hr className="border-zinc-800/80 mb-6" />

                            {/* Features Mapping */}
                            <ul className="space-y-3.5">
                                {verificationPlan.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                                        <div className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className="leading-normal">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Payment Action Router Form */}
                        <div className="mt-8">
                            <form action="/api/checkout_sessions" method="POST">
                                <input type="hidden" name="plan_id" value={verificationPlan.id} />
                                
                                {/* ডাইনামিক সেশন থেকে প্রাপ্ত রিয়েল ইমেইল ভ্যালু পাঠানো হচ্ছে */}
                                <input type="hidden" name="user_email" value={loggedUser?.email || ''} />
                                
                                <button 
                                    type="submit"
                                    className="block w-full text-center text-xs font-bold bg-amber-500 hover:bg-amber-400 text-zinc-950 px-4 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/10 transform hover:-translate-y-0.5"
                                >
                                    {verificationPlan.cta}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* FAQ Accordion Section */}
                <div className="max-w-3xl mx-auto border-t border-zinc-800 pt-16">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 mb-3">
                            <CircleQuestion className="w-5 h-5" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-zinc-100">Verification & Billing FAQ</h2>
                        <p className="text-xs text-zinc-500 mt-1">Clear answers regarding our secure single-tier baseline activation process.</p>
                    </div>

                    <div className="space-y-3">
                        {faqs.map((faq, idx) => {
                            const isOpen = openFaq === idx;
                            return (
                                <div
                                    key={idx}
                                    className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden transition-colors duration-200"
                                >
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full flex items-center justify-between text-left p-4 gap-4 text-zinc-200 hover:text-white transition"
                                    >
                                        <span className="text-sm font-semibold">{faq.question}</span>
                                        <ChevronDown
                                            className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-amber-500' : ''}`}
                                        />
                                    </button>

                                    <div
                                        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 border-t border-zinc-800/60' : 'max-h-0'}`}
                                    >
                                        <div className="p-4 text-xs text-zinc-400 leading-relaxed bg-zinc-900/50">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PricingPage;