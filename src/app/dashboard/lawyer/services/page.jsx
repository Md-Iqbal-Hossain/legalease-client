// // src/app/dashboard/lawyer/services/page.jsx
// 'use client';

// import React, { useEffect, useState } from 'react';
// import { getLawyerUsage } from '@/lib/api/plans'; // আপডেটেড ইম্পোর্ট পাথ
// import { useSession } from '@/lib/auth-client'; // Better-auth সেশন হুক
// import { AlertTriangle, PlusCircle } from 'lucide-react';
// import Link from 'next/link';

// export default function LawyerServicesPage() {
//   const { data: session } = useSession();
//   const [usage, setUsage] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (session?.user?.email) {
//       getLawyerUsage(session.user.email).then((data) => {
//         setUsage(data);
//         setLoading(false);
//       });
//     }
//   }, [session]);

//   if (loading) return <p className="text-slate-400 p-6">Loading pipeline stats...</p>;

//   const maxServices = usage?.maxServices || 0;
//   const currentCount = usage?.currentServiceCount || 0;
//   const usagePercentage = maxServices > 0 ? Math.min((currentCount / maxServices) * 100, 100) : 100;

//   return (
//     <div className="p-6 bg-slate-950 text-gray-100 min-h-screen">
//       <div className="max-w-4xl mx-auto space-y-6">
        
//         {/* লিমিট ট্র্যাকিং কার্ড */}
//         <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-lg">
//           <div className="flex justify-between items-center mb-2">
//             <div>
//               <h3 className="text-lg font-semibold text-gray-200">Service Creation Limit</h3>
//               <p className="text-sm text-slate-400">Current Plan: <span className="text-amber-500 font-medium">{usage?.planName}</span></p>
//             </div>
//             <span className="text-sm font-semibold text-slate-300">
//               {currentCount} / {maxServices} Active Listings
//             </span>
//           </div>

//           {/* প্রোগ্রেস বার */}
//           <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
//             <div 
//               className={`h-full transition-all duration-500 ${usagePercentage >= 100 ? 'bg-red-500' : usagePercentage >= 80 ? 'bg-amber-500' : 'bg-emerald-500'}`}
//               style={{ width: `${usagePercentage}%` }}
//             />
//           </div>

//           {/* লিমিট শেষ হয়ে গেলে ওয়ার্নিং */}
//           {usage?.isLimitReached && (
//             <div className="mt-4 p-4 bg-red-950/30 border border-red-900/50 rounded-lg flex items-start gap-3">
//               <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
//               <div className="flex-1 sm:flex sm:justify-between sm:items-center">
//                 <p className="text-sm text-red-200 font-medium">
//                   You have reached the maximum limit of services allowed in your current plan.
//                 </p>
//                 <Link href="/pricing" className="mt-2 sm:mt-0 inline-block bg-amber-500 text-slate-950 px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-amber-400 transition-all text-center">
//                   Upgrade Plan
//                 </Link>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* অ্যাকশন বাটন */}
//         <div className="flex justify-between items-center">
//           <h2 className="text-xl font-bold font-serif">Your Services</h2>
//           <Link 
//             href={usage?.isLimitReached ? "#" : "/dashboard/lawyer/services/new"}
//             onClick={(e) => usage?.isLimitReached && e.preventDefault()}
//             className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
//               usage?.isLimitReached 
//                 ? 'bg-slate-800 text-slate-500 cursor-not-allowed opacity-60' 
//                 : 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 hover:from-amber-400'
//             }`}
//           >
//             <PlusCircle className="w-4 h-4" />
//             Create New Service
//           </Link>
//         </div>

//       </div>
//     </div>
//   );
// }

// **************************************************************

// src/app/dashboard/lawyer/services/page.jsx
// 'use client';

// import React, { useEffect, useState } from 'react';
// import { getLawyerUsage } from '@/lib/api/plans'; 
// import { useSession } from '@/lib/auth-client'; // Better-auth সেশন হুক
// import { AlertTriangle, PlusCircle } from 'lucide-react';
// import Link from 'next/link';
// import { serverMutation } from '@/lib/core/server'; // এক্সপ্রেস ব্যাকএন্ডে ডেটা পুশ করার হেল্পার

// export default function LawyerServicesPage() {
//   const { data: session } = useSession();
//   const [usage, setUsage] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function initializeLawyerPipeline() {
//       if (session?.user?.email) {
//         try {
//           // ১. ব্যাকএন্ড ডাটাবেজে লইয়ারের অ্যাকাউন্ট সিঙ্ক করা (লগইন ভেরিফিকেশন ও ডিফল্ট প্ল্যান ক্রিয়েশন)
//           await serverMutation('/api/users/sync', 'POST', {
//             email: session.user.email,
//             name: session.user.name,
//             role: 'lawyer',
//             image: session.user.image
//           });

//           // ২. সিঙ্ক কমপ্লিট হওয়ার পর লইয়ারের লাইভ ইউজ ও লিমিট ডাটা ফেচ করা
//           const data = await getLawyerUsage(session.user.email);
//           setUsage(data);
//         } catch (error) {
//           console.error("❌ Failed to initialize lawyer service pipeline:", error);
//         } finally {
//           setLoading(false);
//         }
//       }
//     }

//     initializeLawyerPipeline();
//   }, [session]);

//   if (loading) return <p className="text-slate-400 p-6">Loading pipeline stats...</p>;

//   const maxServices = usage?.maxServices || 0;
//   const currentCount = usage?.currentServiceCount || 0;
//   // ০ দিয়ে ভাগ হওয়া (Division by zero) আটকাতে এই কন্ডিশন
//   const usagePercentage = maxServices > 0 ? Math.min((currentCount / maxServices) * 100, 100) : 100;

//   return (
//     <div className="p-6 bg-slate-950 text-gray-100 min-h-screen">
//       <div className="max-w-4xl mx-auto space-y-6">
        
//         {/* লিমিট ট্র্যাকিং প্রফেশনাল কার্ড */}
//         <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-lg">
//           <div className="flex justify-between items-center mb-2">
//             <div>
//               <h3 className="text-lg font-semibold text-gray-200">Service Creation Limit</h3>
//               <p className="text-sm text-slate-400">Current Plan: <span className="text-amber-500 font-medium">{usage?.planName || 'Unverified Tier'}</span></p>
//             </div>
//             <span className="text-sm font-semibold text-slate-300">
//               {currentCount} / {maxServices} Active Listings
//             </span>
//           </div>

//           {/* ডায়নামিক প্রোগ্রেস বার */}
//           <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
//             <div 
//               className={`h-full transition-all duration-500 ${usagePercentage >= 100 ? 'bg-red-500' : usagePercentage >= 80 ? 'bg-amber-500' : 'bg-emerald-500'}`}
//               style={{ width: `${usagePercentage}%` }}
//             />
//           </div>

//           {/* লিমিট লকড বা রিচড হয়ে গেলে ওয়ার্নিং অ্যালার্ট */}
//           {usage?.isLimitReached && (
//             <div className="mt-4 p-4 bg-red-950/30 border border-red-900/50 rounded-lg flex items-start gap-3">
//               <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
//               <div className="flex-1 sm:flex sm:justify-between sm:items-center">
//                 <p className="text-sm text-red-200 font-medium">
//                   You have reached the maximum limit of services allowed in your current plan. Please upgrade your license to publish more.
//                 </p>
//                 <Link href="/dashboard/lawyer/manage-legal-profile" className="mt-2 sm:mt-0 inline-block bg-amber-500 text-slate-950 px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-amber-400 transition-all text-center shrink-0">
//                   Upgrade Plan
//                 </Link>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* সার্ভিস হেডার এবং অ্যাকশন বাটন */}
//         <div className="flex justify-between items-center">
//           <h2 className="text-xl font-bold font-serif">Your Services</h2>
//           <Link 
//             href={usage?.isLimitReached ? "#" : "/dashboard/lawyer/services/new"}
//             onClick={(e) => usage?.isLimitReached && e.preventDefault()}
//             className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
//               usage?.isLimitReached 
//                 ? 'bg-slate-800 text-slate-500 cursor-not-allowed opacity-60' 
//                 : 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 hover:from-amber-400'
//             }`}
//           >
//             <PlusCircle className="w-4 h-4" />
//             Create New Service
//           </Link>
//         </div>

//         {/* এখানে আপনার এক্সিস্টিং সার্ভিস লিস্ট রেন্ডারিং কোডটি (যেমন: Grid/Table) বসাতে পারেন */}

//       </div>
//     </div>
//   );
// }


// *******************************************

'use client';

import React, { useEffect, useState } from 'react';
import { getLawyerUsage } from '@/lib/api/plans'; 
import { useSession } from '@/lib/auth-client'; // Better-auth সেশন হুক
import { AlertTriangle, PlusCircle } from 'lucide-react';
import Link from 'next/link';
import { serverMutation } from '@/lib/core/server'; // এক্সপ্রেস ব্যাকএন্ডে ডেটা পুশ করার হেল্পার

export default function LawyerServicesPage() {
  const { data: session } = useSession();
  const [usage, setUsage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function initializeLawyerPipeline() {
      if (session?.user?.email) {
        try {
          // 🔐 ১. ব্যাকএন্ড ডাটাবেজে লইয়ারের অ্যাকাউন্ট সিঙ্ক করা (টোকেন অটোমেটিক ইনজেক্ট হবে)
          await serverMutation('/api/users/sync', 'POST', {
            email: session.user.email,
            name: session.user.name,
            role: 'lawyer',
            image: session.user.image
          });

          // 🔐 ২. সিঙ্ক কমপ্লিট হওয়ার পর লইয়ারের লাইভ ইউজ ও লিমিট ডাটা ফেচ করা
          const data = await getLawyerUsage(session.user.email);
          setUsage(data);
        } catch (error) {
          console.error("❌ Failed to initialize lawyer service pipeline:", error);
        } finally {
          setLoading(false);
        }
      }
    }

    initializeLawyerPipeline();
  }, [session]);

  if (loading) return <p className="text-slate-400 p-6">Loading pipeline stats...</p>;

  const maxServices = usage?.maxServices || 0;
  const currentCount = usage?.currentServiceCount || 0;
  // ০ দিয়ে ভাগ হওয়া (Division by zero) আটকাতে এই কন্ডিশন
  const usagePercentage = maxServices > 0 ? Math.min((currentCount / maxServices) * 100, 100) : 100;

  return (
    <div className="p-6 bg-slate-950 text-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* লিমিট ট্র্যাকিং প্রফেশনালカード */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-lg">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-200">Service Creation Limit</h3>
              <p className="text-sm text-slate-400">Current Plan: <span className="text-amber-500 font-medium">{usage?.planName || 'Unverified Tier'}</span></p>
            </div>
            <span className="text-sm font-semibold text-slate-300">
              {currentCount} / {maxServices} Active Listings
            </span>
          </div>

          {/* ডায়নামিক প্রোগ্রেস বার */}
          <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
            <div 
              className={`h-full transition-all duration-500 ${usagePercentage >= 100 ? 'bg-red-500' : usagePercentage >= 80 ? 'bg-amber-500' : 'bg-emerald-500'}`}
              style={{ width: `${usagePercentage}%` }}
            />
          </div>

          {/* লিমিট লকড বা রিচড হয়ে গেলে ওয়ার্নিং অ্যালার্ট */}
          {usage?.isLimitReached && (
            <div className="mt-4 p-4 bg-red-950/30 border border-red-900/50 rounded-lg flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div className="flex-1 sm:flex sm:justify-between sm:items-center">
                <p className="text-sm text-red-200 font-medium">
                  You have reached the maximum limit of services allowed in your current plan. Please upgrade your license to publish more.
                </p>
                <Link href="/dashboard/lawyer/manage-legal-profile" className="mt-2 sm:mt-0 inline-block bg-amber-500 text-slate-950 px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-amber-400 transition-all text-center shrink-0">
                  Upgrade Plan
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* সার্ভিস হেডার এবং অ্যাকশন বাটন */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold font-serif">Your Services</h2>
          <Link 
            href={usage?.isLimitReached ? "#" : "/dashboard/lawyer/services/new"}
            onClick={(e) => usage?.isLimitReached && e.preventDefault()}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              usage?.isLimitReached 
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed opacity-60' 
                : 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 hover:from-amber-400'
            }`}
          >
            <PlusCircle className="w-4 h-4" />
            Create New Service
          </Link>
        </div>

        {/* এখানে আপনার এক্সিস্টিং সার্ভিস লিস্ট রেন্ডারিং কোডটি বসাতে পারেন */}

      </div>
    </div>
  );
}