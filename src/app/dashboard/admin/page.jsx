// import React from 'react';
// import { Shield, Users, CardBanya, ChartPie } from '@gravity-ui/icons';
// import Link from 'next/link';

// const AdminDashboardHomePage = () => {
//     return (
//         <div className="max-w-6xl mx-auto space-y-8">
//             {/* Top Heading */}
//             <div className="border-b border-slate-800 pb-5">
//                 <h1 className="text-3xl font-serif font-bold text-white flex items-center gap-3">
//                     <Shield className="text-amber-500 size-8" /> LegalEase Core Registry (Admin Panel)
//                 </h1>
//                 <p className="text-sm text-slate-400 mt-2">
//                     System-wide governance module for user synchronization, monetary transactions, and operational metrics.
//                 </p>
//             </div>

//             {/* Quick Access Grid Buttons */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {/* Manage Users Card */}
//                 <Link href="/dashboard/admin/manage-users" className="p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all group">
//                     <Users className="size-8 text-amber-500 mb-4" />
//                     <h2 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">Manage System Users</h2>
//                     <p className="text-xs text-slate-400 mt-1">Alter permissions, manage user roles (client/lawyer), or revoke credentials dynamically.</p>
//                 </Link>

//                 {/* All Transactions Card */}
//                 <Link href="/dashboard/admin/all-transactions" className="p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all group">
//                     <CardBanya className="size-8 text-amber-500 mb-4" />
//                     <h2 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">Financial Ledger</h2>
//                     <p className="text-xs text-slate-400 mt-1">Audit escrow accounts, view retainer fee collections, and track transaction IDs.</p>
//                 </Link>

//                 {/* Analytics Card */}
//                 <Link href="/dashboard/admin/analytics" className="p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all group">
//                     <ChartPie className="size-8 text-amber-500 mb-4" />
//                     <h2 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">Analytics & Metrics</h2>
//                     <p className="text-xs text-slate-400 mt-1">Monitor total lawyers, absolute revenue generated, and system-wide hire volume.</p>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default AdminDashboardHomePage;

// ********************************

import React from 'react';
// 💡 Users পরিবর্তন করে সঠিক আইকন Persons ইম্পোর্ট করা হলো
import { Shield, Persons, CreditCard, ChartPie } from '@gravity-ui/icons';
import Link from 'next/link';

const AdminDashboardHomePage = () => {
    return (
        <div className="max-w-6xl mx-auto space-y-8">
            {/* Top Heading */}
            <div className="border-b border-slate-800 pb-5">
                <h1 className="text-3xl font-serif font-bold text-white flex items-center gap-3">
                    <Shield className="text-amber-500 size-8" /> LegalEase Core Registry (Admin Panel)
                </h1>
                <p className="text-sm text-slate-400 mt-2">
                    System-wide governance module for user synchronization, monetary transactions, and operational metrics.
                </p>
            </div>

            {/* Quick Access Grid Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Manage Users Card */}
                <Link href="/dashboard/admin/manage-users" className="p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all group">
                    {/* 🚀 এখানে Persons আইকন ব্যবহার করা হলো */}
                    <Persons className="size-8 text-amber-500 mb-4" />
                    <h2 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">Manage System Users</h2>
                    <p className="text-xs text-slate-400 mt-1">Alter permissions, manage user roles (client/lawyer), or revoke credentials dynamically.</p>
                </Link>

                {/* All Transactions Card */}
                <Link href="/dashboard/admin/all-transactions" className="p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all group">
                    <CreditCard className="size-8 text-amber-500 mb-4" />
                    <h2 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">Financial Ledger</h2>
                    <p className="text-xs text-slate-400 mt-1">Audit escrow accounts, view retainer fee collections, and track transaction IDs.</p>
                </Link>

                {/* Analytics Card */}
                <Link href="/dashboard/admin/analytics" className="p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all group">
                    <ChartPie className="size-8 text-amber-500 mb-4" />
                    <h2 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">Analytics & Metrics</h2>
                    <p className="text-xs text-slate-400 mt-1">Monitor total lawyers, absolute revenue generated, and system-wide hire volume.</p>
                </Link>
            </div>
        </div>
    );
};

export default AdminDashboardHomePage;