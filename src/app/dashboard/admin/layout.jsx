// import { requireRole } from '@/lib/core/session'; // অথবা আপনার প্রজেক্টের সেশন হ্যান্ডলার পাথ
// import React from 'react';

// // 🔒 এই লেআউটটির ভেতরের সমস্ত সাব-রুট (/manage-users, /all-transactions, /analytics) প্রটেক্টেড থাকবে
// const AdminDashboardLayout = async ({ children }) => {
//     // সেশন চেক করে যদি ইউজার 'admin' না হয়, তবে এটি তাকে অটোমেটিক রিডাইরেক্ট বা ব্লক করবে
//     await requireRole('admin'); 
    
//     return (
//         <div className="min-h-screen bg-slate-950 text-slate-200 p-6">
//             {children}
//         </div>
//     );
// };

// export default AdminDashboardLayout;

// ********************************************

import { requireRole } from '@/lib/core/serverSession'; // 🔐 নতুন এবং সঠিক সুরক্ষিত ফাইল থেকে ইম্পোর্ট করা হলো
import React from 'react';

const AdminLayout = async ({ children }) => {
  // 🛡️ সার্ভার-সাইড সিকিউরিটি গার্ড: নিশ্চিত করবে ইউজার শুধুমাত্র 'admin' রোলধারী
  await requireRole('admin');

  return <>{children}</>;
};

export default AdminLayout;