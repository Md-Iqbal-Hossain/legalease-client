// import React from 'react';
// import { getLawyerById } from '@/lib/api/lawyers';
// import { Button } from '@heroui/react';
// import Link from 'next/link';
// import { MapPin, Briefcase, DollarSign, Star, Scale, Languages, Mail, ArrowUpRight } from 'lucide-react';

// export default async function LawyerProfilePage({ params }) {
//     const { id } = await params;
//     const lawyer = await getLawyerById(id);

//     // Guard clause: আইনজীবী খুঁজে না পাওয়া গেলে
//     if (!lawyer) {
//         return (
//             <div className="w-full min-h-screen bg-zinc-950 flex flex-col justify-center items-center text-white p-6">
//                 <p className="text-zinc-400 text-lg">The requested legal counsel profile could not be found.</p>
//                 <Link href="/lawyers" className="text-amber-500 hover:underline mt-4 text-sm">Return to Directory</Link>
//             </div>
//         );
//     }

//     return (
//         <main className="w-full min-h-screen bg-zinc-950 text-zinc-100 p-6 md:p-12 lg:p-16">
//             <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

//                 {/* LEFT BLOCK: Profile Info, Bio & Experience (Spans 2 columns) */}
//                 <div className="lg:col-span-2 space-y-8">

//                     {/* Header Identity Group */}
//                     <div className="space-y-4 border-b border-zinc-800/60 pb-6">
//                         <div className="flex items-center gap-5">
//                             <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-2xl flex items-center justify-center font-bold text-2xl shadow-inner">
//                                 {lawyer.name ? lawyer.name.charAt(0) : "L"}
//                             </div>
//                             <div>
//                                 <h1 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight">
//                                     {lawyer.name}
//                                 </h1>
//                                 <p className="text-amber-500 text-sm font-medium mt-1 flex items-center gap-1.5">
//                                     <Scale className="w-4 h-4" /> {lawyer.specialty || "General Legal Practitioner"}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Section: Biography / Professional Statement */}
//                     <section className="space-y-3">
//                         <h3 className="text-xl font-semibold text-white">Professional Statement</h3>
//                         <p className="text-zinc-300 text-base leading-relaxed whitespace-pre-line bg-zinc-900/30 p-6 rounded-[24px] border border-zinc-900">
//                             {lawyer.bio || "No biography provided by the legal practitioner."}
//                         </p>
//                     </section>

//                     {/* Section: Credentials & Areas of Practice */}
//                     <section className="space-y-3">
//                         <h3 className="text-xl font-semibold text-white">Areas of Focus & Practice</h3>
//                         <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div className="space-y-1">
//                                 <span className="text-zinc-500 text-xs uppercase font-semibold">Primary Focus</span>
//                                 <p className="text-zinc-200 text-sm font-medium">{lawyer.specialty}</p>
//                             </div>
//                             <div className="space-y-1">
//                                 <span className="text-zinc-500 text-xs uppercase font-semibold">Jurisdiction & Courts</span>
//                                 <p className="text-zinc-200 text-sm font-medium">{lawyer.location || "Supreme Court of Bangladesh"}</p>
//                             </div>
//                         </div>
//                     </section>
//                 </div>

//                 {/* RIGHT BLOCK: Case Metadata Sidebar Widget */}
//                 <aside className="bg-zinc-900 border border-zinc-800/80 rounded-[32px] p-6 lg:sticky lg:top-8 space-y-6 shadow-xl backdrop-blur-md">
//                     <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
//                         <h3 className="text-lg font-semibold text-white">Counsel Overview</h3>
//                         {lawyer.rating && (
//                             <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
//                                 <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
//                                 <span className="text-xs font-semibold text-amber-400">{lawyer.rating}</span>
//                             </div>
//                         )}
//                     </div>

//                     <div className="space-y-4">
//                         {/* Location */}
//                         <div className="flex items-start gap-3">
//                             <MapPin className="text-amber-500 w-5 h-5 mt-0.5 flex-shrink-0" />
//                             <div>
//                                 <span className="text-xs text-zinc-500 block">Chamber Location</span>
//                                 <span className="text-sm font-medium text-zinc-200">{lawyer.location}</span>
//                             </div>
//                         </div>

//                         {/* Experience */}
//                         <div className="flex items-start gap-3">
//                             <Briefcase className="text-amber-500 w-5 h-5 mt-0.5 flex-shrink-0" />
//                             <div>
//                                 <span className="text-xs text-zinc-500 block">Experience Standing</span>
//                                 <span className="text-sm font-medium text-zinc-200">{lawyer.experience} Active Practice</span>
//                             </div>
//                         </div>

//                         {/* Hourly Rate */}
//                         <div className="flex items-start gap-3">
//                             <DollarSign className="text-amber-500 w-5 h-5 mt-0.5 flex-shrink-0" />
//                             <div>
//                                 <span className="text-xs text-zinc-500 block">Consultation Rate</span>
//                                 <span className="text-sm font-medium text-zinc-200">${lawyer.hourlyRate} / hour</span>
//                             </div>
//                         </div>

//                         {/* Languages */}
//                         {lawyer.languages && (
//                             <div className="flex items-start gap-3">
//                                 <Languages className="text-amber-500 w-5 h-5 mt-0.5 flex-shrink-0" />
//                                 <div>
//                                     <span className="text-xs text-zinc-500 block">Languages Fluency</span>
//                                     <span className="text-sm font-medium text-zinc-200">{lawyer.languages.join(", ")}</span>
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     {/* Action Button: Hire/Consult Link (Pure Next.js Link with Tailwind Button Styles) */}
//                     <Link
//                         href={`/lawyers/${id}/hire`}
//                         className="w-full bg-amber-500 hover:bg-amber-600 text-zinc-950 font-semibold py-3.5 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 text-center text-sm"
//                     >
//                         Retain Legal Counsel
//                         <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
//                     </Link>
//                 </aside>

//             </div>
//         </main>
//     );
// }

// *****************************************************

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLawyerById } from '@/lib/api/lawyers';
import { auth } from '@/lib/auth'; // আপনার Better-Auth বা সেশন হ্যান্ডলার ইম্পোর্ট করুন
import { headers } from 'next/headers';
import { Scale, ShieldCheck, Award, MapPin, Calendar, ArrowRight } from 'lucide-react';

export default async function LawyerProfilePage({ params }) {
  const { id } = await params;
  
  // ১. ডাটাবেজ থেকে নির্দিষ্ট আইনজীবীর প্রোফাইল নিয়ে আসা
  const lawyer = await getLawyerById(id);
  if (!lawyer) {
    notFound();
  }

  // ২. আপনার সার্ভার সাইড Better-Auth সেশন বা ইউজার চেক করা
  // (সেশন চেকিং এর স্ট্রাকচার আপনার প্রোজেক্ট অনুযায়ী auth.getSession বা authClient দিয়েও হতে পারে)
  const session = await auth.api.getSession({
    headers: await headers()
  });
  const isLoggedIn = !!session?.user;

  // ৩. ইউজার যদি লগইন না থাকে, তবে তাকে সাইন-ইন পেজে পাঠানোর জন্য callbackUrl তৈরি করা
  // এখানে বর্তমান পেজের পাথ হচ্ছে: /lawyers/6a3e298fb67fc5feae10ad66
  const currentPath = `/lawyers/${id}`;
  const targetHirePath = `/lawyers/${id}/hire`;
  
  // লগইন না থাকলে সাইন-ইন পেজে পাঠানোর লিংক (উইথ কলব্যাক ইউআরএল)
  const signInWithCallback = `/auth/signin?callbackUrl=${encodeURIComponent(targetHirePath)}`;

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 md:p-8 shadow-2xl">
        
        {/* প্রোফাইল হেডার সেকশন */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between pb-6 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl text-amber-500">
              <Scale className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-100 flex items-center gap-2">
                {lawyer.name || 'Legal Professional'}
                <ShieldCheck className="w-5 h-5 text-emerald-500 inline" />
              </h1>
              <p className="text-amber-500 font-medium mt-1">{lawyer.specialty || 'General Practice'}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-slate-400 bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-800/40">
            <MapPin className="w-4 h-4 text-slate-500" />
            <span>{lawyer.location || 'Dhaka, Bangladesh'}</span>
          </div>
        </div>

        {/* প্রোফাইল ডিটেইলস বডি */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-200 mb-2">Professional Biography</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {lawyer.bio || 'This legal professional has not provided a detailed biography yet. Please reach out via the counseling window for baseline dynamic processing requirements.'}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800/60">
                <div className="text-slate-500 text-xs flex items-center gap-1.5 mb-1">
                  <Award className="w-3.5 h-3.5 text-amber-500" /> Experience
                </div>
                <div className="text-sm font-semibold text-slate-200">{lawyer.experience || '5+ Years'}</div>
              </div>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800/60">
                <div className="text-slate-500 text-xs flex items-center gap-1.5 mb-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-500" /> Availability
                </div>
                <div className="text-sm font-semibold text-slate-200">Mon - Fri (Standard Hours)</div>
              </div>
            </div>
          </div>

          {/* অ্যাকশন বাটন সেকশন (যেখানে কন্ডিশনাল কলব্যাক কাজ করছে) */}
          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 flex flex-col justify-between h-fit">
            <div>
              <h4 className="text-sm font-medium text-slate-400">Consultation Structure</h4>
              <div className="mt-2 text-2xl font-serif font-bold text-gray-100">
                ৳ {lawyer.hourlyRate || '5,000'}<span className="text-xs text-slate-500 font-sans font-normal"> / hr</span>
              </div>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Retain counsel explicitly triggers formal data initialization sync.
              </p>
            </div>

            <div className="mt-6">
              {isLoggedIn ? (
                // কন্ডিশন ১: ইউজার লগইন থাকলে সরাসরি হায়ার পেজে নিয়ে যাবে
                <Link 
                  href={targetHirePath}
                  className="w-full flex justify-center items-center py-2.5 px-4 rounded-lg shadow-lg text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 transition-all transform active:scale-[0.99]"
                >
                  Retain Legal Counsel
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              ) : (
                // কন্ডিশন ২: ইউজার লগইন না থাকলে তাকে callbackUrl-সহ সাইন-ইন পেজে পাঠাবে
                <Link 
                  href={signInWithCallback}
                  className="w-full flex justify-center items-center py-2.5 px-4 rounded-lg shadow-lg text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 transition-all transform active:scale-[0.99]"
                >
                  Sign In to Retain Counsel
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}