// src/app/dashboard/client/hirings/page.jsx
// 'use client';

// import React, { useEffect, useState } from 'react';
// import { useSession } from '@/lib/auth-client';
// import { serverFetch } from '@/lib/core/server';
// import { CreditCard, CheckCircle2, Hourglass } from 'lucide-react';

// export default function ClientHiringsPage() {
//   const { data: session } = useSession();
//   const [hirings, setHirings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (session?.user?.email) {
//       // ব্যাকএন্ড থেকে এই ক্লায়েন্টের ইমেইল অনুযায়ী সব হায়ার রিকোয়েস্ট নিয়ে আসা
//       // (আপনার ব্যাকএন্ড রাউট: /api/lawyer/hirings/:emailOrId কিন্তু ক্লায়েন্ট ইমেইলও হ্যান্ডেল করতে পারে)
//       serverFetch(`/api/lawyer/hirings/${session.user.email}`)
//         .then((data) => {
//           setHirings(data || []);
//           setLoading(false);
//         })
//         .catch((err) => {
//           console.error(err);
//           setLoading(false);
//         });
//     }
//   }, [session]);

//   if (loading) return <p className="text-slate-400 p-6">Loading hiring pipeline...</p>;

//   return (
//     <div className="p-6 bg-slate-950 text-gray-100 min-h-screen">
//       <div className="max-w-4xl mx-auto space-y-6">
//         <h2 className="text-2xl font-bold font-serif mb-4">Your Legal Engagements</h2>
        
//         {hirings.length === 0 ? (
//           <p className="text-slate-500">No case records found. Hire a counsel to begin.</p>
//         ) : (
//           <div className="space-y-4">
//             {hirings.map((item) => (
//               <div key={item._id} className="p-5 bg-slate-900 border border-slate-800 rounded-xl flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-200">{item.caseTitle || 'Legal Consultation'}</h3>
//                   <p className="text-sm text-slate-400">Counsel: <span className="text-amber-500">{item.lawyerName || item.lawyerEmail}</span></p>
//                   <p className="text-xs text-slate-500 mt-1">Submitted on: {new Date(item.createdAt).toLocaleDateString()}</p>
//                 </div>

//                 <div className="flex items-center gap-4 self-end sm:self-center">
//                   {/* পেমেন্ট স্ট্যাটাস কন্ডিশনাল রেন্ডারিং */}
//                   {item.paymentStatus === 'Unpaid' ? (
//                     <form action="/api/checkout_sessions" method="POST">
//                       {/* স্ট্রাইপের জন্য প্রয়োজনীয় হিট প্যামিটার্স */}
//                       <input type="hidden" name="payment_type" value="hiring" />
//                       <input type="hidden" name="hiring_id" value={item._id} />
//                       <input type="hidden" name="client_email" value={session?.user?.email} />
//                       <input type="hidden" name="amount" value={item.lawyerFee || 50} /> {/* লইয়ার ফিস */}
                      
//                       <button type="submit" className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 px-4 py-2 rounded-lg text-xs font-bold hover:from-amber-400 transition-all shadow-md">
//                         <CreditCard className="w-3.5 h-3.5" />
//                         Pay Retainer Fee
//                       </button>
//                     </form>
//                   ) : (
//                     <span className="flex items-center gap-1.5 text-xs bg-emerald-950/80 text-emerald-400 border border-emerald-900/50 px-3 py-1.5 rounded-full font-medium">
//                       <CheckCircle2 className="w-3.5 h-3.5" />
//                       Secured & Paid
//                     </span>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


// *************************************

'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from '@/lib/auth-client';
import { serverFetch } from '@/lib/core/server';
import { CreditCard, CheckCircle2 } from 'lucide-react';

export default function ClientHiringsPage() {
  const { data: session } = useSession();
  const [hirings, setHirings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session?.user?.email) {
      // 🔐 দ্বিতীয় প্যারামিটার `true` পাস করা হয়েছে টোকেন অথরাইজেশনের জন্য
      serverFetch(`/api/lawyer/hirings/${session.user.email}`, true)
        .then((data) => {
          setHirings(data || []);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [session]);

  if (loading) return <p className="text-slate-400 p-6">Loading hiring pipeline...</p>;

  return (
    <div className="p-6 bg-slate-950 text-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold font-serif mb-4">Your Legal Engagements</h2>
        
        {hirings.length === 0 ? (
          <p className="text-slate-500">No case records found. Hire a counsel to begin.</p>
        ) : (
          <div className="space-y-4">
            {hirings.map((item) => (
              <div key={item._id} className="p-5 bg-slate-900 border border-slate-800 rounded-xl flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-200">{item.caseTitle || 'Legal Consultation'}</h3>
                  <p className="text-sm text-slate-400">Counsel: <span className="text-amber-500">{item.lawyerName || item.lawyerEmail}</span></p>
                  <p className="text-xs text-slate-500 mt-1">Submitted on: {new Date(item.createdAt).toLocaleDateString()}</p>
                </div>

                <div className="flex items-center gap-4 self-end sm:self-center">
                  {/* পেমেন্ট স্ট্যাটাস কন্ডিশনাল রেন্ডারিং */}
                  {item.paymentStatus === 'Unpaid' ? (
                    <form action="/api/checkout_sessions" method="POST">
                      {/* স্ট্রাইপের জন্য প্রয়োজনীয় হিট প্যারামিটার্স */}
                      <input type="hidden" name="payment_type" value="hiring" />
                      <input type="hidden" name="hiring_id" value={item._id} />
                      <input type="hidden" name="client_email" value={session?.user?.email} />
                      <input type="hidden" name="amount" value={item.lawyerFee || 50} /> {/* লইয়ার ফিস */}
                      
                      <button type="submit" className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 px-4 py-2 rounded-lg text-xs font-bold hover:from-amber-400 transition-all shadow-md">
                        <CreditCard className="w-3.5 h-3.5" />
                        Pay Retainer Fee
                      </button>
                    </form>
                  ) : (
                    <span className="flex items-center gap-1.5 text-xs bg-emerald-950/80 text-emerald-400 border border-emerald-900/50 px-3 py-1.5 rounded-full font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Secured & Paid
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}