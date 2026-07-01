
// "use client";

// import React, { useState, useEffect } from 'react';
// import { Avatar, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
// import { Shield, TrashBin, ChevronDown } from '@gravity-ui/icons';

// export default function AdminManageUsersPage() {
//     const [users, setUsers] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [isMutating, setIsMutating] = useState(false);

//     // 🔄 পেজ লোড হওয়ার সময় ব্যাকএন্ড থেকে ডাটা আনা হচ্ছে
//     useEffect(() => {
//         async function loadUsers() {
//             try {
//                 const res = await fetch('http://localhost:5000/api/admin/users');
//                 if (!res.ok) throw new Error("Failed to fetch");
//                 const data = await res.json();
//                 setUsers(data || []);
//             } catch (err) {
//                 console.error("Error loading registry users:", err);
//             } finally {
//                 setIsLoading(false);
//             }
//         }
//         loadUsers();
//     }, []);

//     // 🛠️ রোল পরিবর্তন করার হ্যান্ডলার
//     const handleRoleChange = async (userId, newRole) => {
//         setIsMutating(true);
//         try {
//             const response = await fetch(`http://localhost:5000/api/admin/users/role/${userId}`, {
//                 method: "PATCH",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ role: newRole })
//             });
//             if (!response.ok) throw new Error("Server rejected mutation");

//             setUsers(prev => prev.map(user => 
//                 user._id === userId ? { ...user, role: newRole } : user
//             ));
//         } catch (error) {
//             alert("Could not update role in database.");
//         } finally {
//             setIsMutating(false);
//         }
//     };

//     // 🗑️ ইউজার ডিলিট করার হ্যান্ডলার
//     const handleDeleteUser = async (userId) => {
//         if (!confirm("Are you absolutely sure you want to revoke this user's registry token?")) return;
//         setIsMutating(true);
//         try {
//             const response = await fetch(`http://localhost:5000/api/admin/users/${userId}`, {
//                 method: "DELETE"
//             });
//             if (!response.ok) throw new Error("Server rejected deletion");

//             setUsers(prev => prev.filter(user => user._id !== userId));
//         } catch (error) {
//             alert("Could not delete user from database.");
//         } finally {
//             setIsMutating(false);
//         }
//     };

//     const roleColors = {
//         admin: "danger",
//         lawyer: "warning",
//         client: "primary"
//     };

//     if (isLoading) {
//         return (
//             <div className="min-h-screen bg-[#09090b] flex items-center justify-center text-zinc-400 font-mono text-sm">
//                 Streaming Core Registry Records...
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-[calc(100vh-4rem)] bg-[#09090b] p-6 md:p-10 text-slate-100">
//             <div className="max-w-7xl mx-auto space-y-8">
                
//                 {/* 🎯 হেডার অংশ */}
//                 <div className="border-b border-zinc-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
//                     <div>
//                         <h2 className="text-2xl font-serif font-bold tracking-tight text-white flex items-center gap-2">
//                             <Shield className="text-amber-500 size-6" /> User Authorization Matrix
//                         </h2>
//                         <p className="text-xs text-zinc-400 mt-1">
//                             System administrative cockpit to update clearance levels, verify legal retainers, or revoke identity registry tokens.
//                         </p>
//                     </div>
//                     <div className="bg-zinc-900 border border-zinc-800 px-4 py-2.5 rounded-xl text-xs text-zinc-400">
//                         Total Registry Records: <span className="font-mono text-amber-400 font-bold">{users.length}</span>
//                     </div>
//                 </div>

//                 {/* 📋 ডাইনামিক লিস্ট ইন্টারফেস */}
//                 <div className={`w-full space-y-3 transition-opacity ${isMutating ? 'opacity-60 pointer-events-none' : ''}`}>
//                     <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider font-mono">
//                         <div className="col-span-4">Name / Identity</div>
//                         <div className="col-span-4">Email System</div>
//                         <div className="col-span-2">Authorization</div>
//                         <div className="col-span-2 text-right">Actions</div>
//                     </div>

//                     {users.length === 0 ? (
//                         <div className="w-full bg-[#111113] border border-zinc-900 rounded-xl p-12 text-center text-sm text-zinc-500">
//                             No user records found in the core registry.
//                         </div>
//                     ) : (
//                         users.map((user) => (
//                             <div key={user._id} className="w-full bg-[#111113] border border-zinc-900 rounded-xl p-4 md:px-6 md:py-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:border-zinc-800 transition-all">
                                
//                                 <div className="col-span-1 md:col-span-4 flex items-center gap-3">
//                                     <Avatar
//                                         src={user.image || ""}
//                                         name={user.name?.charAt(0) || "U"}
//                                         className="bg-amber-500/10 text-amber-500 font-bold border border-amber-500/20 size-10 text-sm"
//                                     />
//                                     <div className="flex flex-col min-w-0">
//                                         <span className="text-sm font-semibold text-zinc-100 truncate">{user.name}</span>
//                                         <span className="text-[10px] text-zinc-500 font-mono truncate">ID: {user._id}</span>
//                                     </div>
//                                 </div>

//                                 <div className="col-span-1 md:col-span-4 min-w-0">
//                                     <span className="text-sm text-zinc-400 font-mono truncate block">{user.email}</span>
//                                 </div>

//                                 <div className="col-span-1 md:col-span-2">
//                                     <Dropdown className="bg-[#161619] border border-zinc-800 text-white rounded-xl">
//                                         <DropdownTrigger>
//                                             <Button 
//                                                 size="sm" 
//                                                 variant="flat" 
//                                                 color={roleColors[user.role || 'client']}
//                                                 className="capitalize font-medium text-xs gap-2 rounded-lg w-full md:w-auto"
//                                                 endContent={<ChevronDown className="size-3" />}
//                                             >
//                                                 {user.role || "client"}
//                                             </Button>
//                                         </DropdownTrigger>
//                                         <DropdownMenu aria-label="Roles" onAction={(key) => handleRoleChange(user._id, key)}>
//                                             <DropdownItem key="client" className="text-zinc-200">Client Role</DropdownItem>
//                                             <DropdownItem key="lawyer" className="text-zinc-200">Lawyer Role</DropdownItem>
//                                             <DropdownItem key="admin" className="text-rose-400">Admin Elevation</DropdownItem>
//                                         </DropdownMenu>
//                                     </Dropdown>
//                                 </div>

//                                 <div className="col-span-1 md:col-span-2 text-left md:text-right">
//                                     <Button
//                                         isIconOnly
//                                         size="sm"
//                                         variant="light"
//                                         className="text-zinc-500 hover:text-rose-500 hover:bg-rose-950/20 rounded-lg"
//                                         onClick={() => handleDeleteUser(user._id)}
//                                     >
//                                         <TrashBin className="size-4" />
//                                     </Button>
//                                 </div>

//                             </div>
//                         ))
//                     )}
//                 </div>

//             </div>
//         </div>
//     );
// }

// *****************************

// import React from 'react';
// import { Shield } from '@gravity-ui/icons';
// import { getAllSystemUsers } from '@/lib/api/users';
// import UsersListGrid from '@/components/dashboard/UsersListGrid';

// export const dynamic = "force-dynamic";

// const AdminManageUsersPage = async () => {
//     // এপিআই কল করার ট্রাই-ক্যাচ ব্লক
//     let usersData = [];
//     try {
//         usersData = await getAllSystemUsers();
//     } catch (error) {
//         console.error("Failed to load registry database rows:", error);
//     }
    
//     // ডাটাবেজের অবজেক্ট স্ট্রাকচার সেফগার্ড ভেরিফিকেশন
//     const users = Array.isArray(usersData) 
//         ? usersData 
//         : (usersData?.data || usersData?.users || []);
    
//     return (
//         <div className="min-h-[calc(100vh-4rem)] bg-[#09090b] p-6 md:p-10 text-slate-100">
//             <div className="max-w-7xl mx-auto space-y-8">
                
//                 {/* হেডার ম্যাট্রিক্স */}
//                 <div className="border-b border-zinc-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
//                     <div>
//                         <h2 className="text-2xl font-serif font-bold tracking-tight text-white flex items-center gap-2">
//                             <Shield className="text-amber-500 size-6" /> User Authorization Matrix
//                         </h2>
//                         <p className="text-xs text-zinc-400 mt-1">
//                             System administrative cockpit to update clearance levels, verify legal retainers, or revoke identity registry tokens.
//                         </p>
//                     </div>
                    
//                     <div className="bg-zinc-900 border border-zinc-800 px-4 py-2.5 rounded-xl text-xs text-zinc-400">
//                         Total Registry Records: <span className="font-mono text-amber-400 font-bold">{users.length}</span>
//                     </div>
//                 </div>
                
//                 {/* কাস্টম গ্রিড লিস্ট */}
//                 <UsersListGrid initialUsers={users} />
//             </div>
//         </div>
//     );
// };

// export default AdminManageUsersPage;

// ******************************************

// import React from 'react';
// import { Shield } from '@gravity-ui/icons';
// import { getAllSystemUsers } from '@/lib/api/users';
// import UsersListGrid from '@/components/dashboard/UsersListGrid';

// export const dynamic = "force-dynamic";

// const AdminManageUsersPage = async () => {
//     // এপিআই কল করার ট্রাই-ক্যাচ ব্লক
//     let usersData = [];
//     try {
//         // 🔐 এই ইন্টারনাল ফাংশনটির ভেতরেই আমরা সেশন টোকেন পাসের ব্যবস্থা করব
//         usersData = await getAllSystemUsers();
//     } catch (error) {
//         console.error("Failed to load registry database rows:", error);
//     }
    
//     // ডাটাবেজের অবজেক্ট স্ট্রাকচার সেফগার্ড ভেরিফিকেশন
//     const users = Array.isArray(usersData) 
//         ? usersData 
//         : (usersData?.data || usersData?.users || []);
    
//     return (
//         <div className="min-h-[calc(100vh-4rem)] bg-[#09090b] p-6 md:p-10 text-slate-100">
//             <div className="max-w-7xl mx-auto space-y-8">
                
//                 {/* হেডার ম্যাট্রিক্স */}
//                 <div className="border-b border-zinc-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
//                     <div>
//                         <h2 className="text-2xl font-serif font-bold tracking-tight text-white flex items-center gap-2">
//                             <Shield className="text-amber-500 size-6" /> User Authorization Matrix
//                         </h2>
//                         <p className="text-xs text-zinc-400 mt-1">
//                             System administrative cockpit to update clearance levels, verify legal retainers, or revoke identity registry tokens.
//                         </p>
//                     </div>
                    
//                     <div className="bg-zinc-900 border border-zinc-800 px-4 py-2.5 rounded-xl text-xs text-zinc-400">
//                         Total Registry Records: <span className="font-mono text-amber-400 font-bold">{users.length}</span>
//                     </div>
//                 </div>
                
//                 {/* কাস্টম গ্রিড লিস্ট */}
//                 <UsersListGrid initialUsers={users} />
//             </div>
//         </div>
//     );
// };

// export default AdminManageUsersPage;

// ************************************

'use client'; // 👈 পেজটিকে ক্লায়েন্ট সাইড কম্পোনেন্ট করা হলো যাতে ব্রাউজার থেকে সরাসরি সেফ এপিআই কল হয়

import React, { useEffect, useState } from 'react';
import { Shield } from '@gravity-ui/icons';
import { getAllSystemUsers } from '@/lib/api/users';
import UsersListGrid from '@/components/dashboard/UsersListGrid';

const AdminManageUsersPage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);

    // 🌐 ক্লায়েন্ট সাইড ডাটা ফেচিং
    useEffect(() => {
        async function fetchUsers() {
            try {
                setLoading(true);
                const usersData = await getAllSystemUsers();
                
                console.log("--- BACKEND RAW RESPONSE ---", usersData); // 🔍 ব্রাউজারের কনসোলে ডাটা চেক করার জন্য

                // 🛡️ এক্সপ্রেস ব্যাকএন্ডের বিভিন্ন সম্ভাব্য অবজেক্ট স্ট্রাকচার সেফগার্ড ভেরিফিকেশন
                let validatedUsers = [];
                if (Array.isArray(usersData)) {
                    validatedUsers = usersData;
                } else if (usersData && Array.isArray(usersData.data)) {
                    validatedUsers = usersData.data;
                } else if (usersData && Array.isArray(usersData.users)) {
                    validatedUsers = usersData.users;
                } else if (usersData && typeof usersData === 'object') {
                    // যদি অবজেক্টের ভেতরে অন্য কোনো কি-তে অ্যারে থাকে (যেমন: usersData.allUsers)
                    const fallbackKey = Object.keys(usersData).find(key => Array.isArray(usersData[key]));
                    if (fallbackKey) {
                        validatedUsers = usersData[fallbackKey];
                    }
                }
                
                setUsers(validatedUsers);
            } catch (error) {
                console.error("Failed to load registry database rows:", error);
                setErrorMsg("Failed to retrieve user registry records.");
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
    }, []);

    return (
        <div className="min-h-[calc(100vh-4rem)] bg-[#09090b] p-6 md:p-10 text-slate-100">
            <div className="max-w-7xl mx-auto space-y-8">
                
                {/* হেডার ম্যাট্রিক্স */}
                <div className="border-b border-zinc-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-serif font-bold tracking-tight text-white flex items-center gap-2">
                            <Shield className="text-amber-500 size-6" /> User Authorization Matrix
                        </h2>
                        <p className="text-xs text-zinc-400 mt-1">
                            System administrative cockpit to update clearance levels, verify legal retainers, or revoke identity registry tokens.
                        </p>
                    </div>
                    
                    <div className="bg-zinc-900 border border-zinc-800 px-4 py-2.5 rounded-xl text-xs text-zinc-400">
                        {loading ? (
                            "Loading records..."
                        ) : (
                            <>Total Registry Records: <span className="font-mono text-amber-400 font-bold">{users.length}</span></>
                        )}
                    </div>
                </div>
                
                {/* ⏳ লোডিং এবং এরর স্টেট হ্যান্ডলিং */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 space-y-4">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500"></div>
                        <p className="text-sm text-zinc-400 font-mono">Syncing system authorization database...</p>
                    </div>
                ) : errorMsg ? (
                    <div className="bg-red-950/20 border border-red-900/50 p-4 rounded-xl text-center text-sm text-red-400 font-mono">
                        {errorMsg}
                    </div>
                ) : users.length === 0 ? (
                    <div className="bg-zinc-900/50 border border-zinc-800 p-12 rounded-xl text-center space-y-2">
                        <p className="text-zinc-400 text-sm">No user records found in the core registry.</p>
                        <p className="text-zinc-600 text-xs font-mono">Tip: Check if your Express backend is running and connected to MongoDB Atlas.</p>
                    </div>
                ) : (
                    /* কাস্টম গ্রিড লিস্ট */
                    <UsersListGrid initialUsers={users} />
                )}
            </div>
        </div>
    );
};

export default AdminManageUsersPage;