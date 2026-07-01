// "use client";

// import React, { useState } from "react";
// import { Avatar, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
// import { TrashBin, ChevronDown } from "@gravity-ui/icons";

// export default function UsersListGrid({ initialUsers }) {
//     const [users, setUsers] = useState(initialUsers);
//     const [isMutating, setIsMutating] = useState(false);

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
//             alert(`User role updated to ${newRole} successfully!`);
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
//             alert("User successfully deleted.");
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

//     return (
//         <div className={`w-full space-y-3 transition-opacity ${isMutating ? 'opacity-60 pointer-events-none' : ''}`}>
//             {/* কলাম হেডার্স */}
//             <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider font-mono">
//                 <div className="col-span-4">Name / Identity</div>
//                 <div className="col-span-4">Email System</div>
//                 <div className="col-span-2">Authorization</div>
//                 <div className="col-span-2 text-right">Actions</div>
//             </div>

//             {users.length === 0 ? (
//                 <div className="w-full bg-[#111113] border border-zinc-900 rounded-xl p-12 text-center text-sm text-zinc-500">
//                     No user records found in the core registry.
//                 </div>
//             ) : (
//                 users.map((user) => (
//                     <div key={user._id} className="w-full bg-[#111113] border border-zinc-900 rounded-xl p-4 md:px-6 md:py-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:border-zinc-800 transition-all">

//                         {/* ১. অ্যাভাটার ও নাম */}
//                         <div className="col-span-1 md:col-span-4 flex items-center gap-3">
//                             <Avatar
//                                 src={user.image || ""}
//                                 name={user.name?.charAt(0) || "U"}
//                                 className="bg-amber-500/10 text-amber-500 font-bold border border-amber-500/20 size-10 text-sm"
//                             />
//                             <div className="flex flex-col min-w-0">
//                                 <span className="text-sm font-semibold text-zinc-100 truncate">{user.name}</span>
//                                 <span className="text-[10px] text-zinc-500 font-mono truncate">ID: {user._id}</span>
//                             </div>
//                         </div>

//                         {/* ২. ইমেইল */}
//                         <div className="col-span-1 md:col-span-4 min-w-0">
//                             <span className="text-sm text-zinc-400 font-mono truncate block">{user.email}</span>
//                         </div>

//                         {/* ৩. ড্রপডাউন রোল অ্যাকশন */}
//                         <div className="col-span-1 md:col-span-2">
//                             <Dropdown className="bg-[#161619] border border-zinc-800 text-white rounded-xl">
//                                 <DropdownTrigger>
//                                     <Button 
//                                         size="sm" 
//                                         variant="flat" 
//                                         color={roleColors[user.role || 'client']}
//                                         className="capitalize font-medium text-xs gap-2 rounded-lg w-full md:w-auto"
//                                         endContent={<ChevronDown className="size-3" />}
//                                     >
//                                         {user.role || "client"}
//                                     </Button>
//                                 </DropdownTrigger>
//                                 <DropdownMenu aria-label="Roles" onAction={(key) => handleRoleChange(user._id, key)}>
//                                     <DropdownItem key="client" className="text-zinc-200">Client Role</DropdownItem>
//                                     <DropdownItem key="lawyer" className="text-zinc-200">Lawyer Role</DropdownItem>
//                                     <DropdownItem key="admin" className="text-rose-400">Admin Elevation</DropdownItem>
//                                 </DropdownMenu>
//                             </Dropdown>
//                         </div>

//                         {/* ৪. ডিলিট বাটন */}
//                         <div className="col-span-1 md:col-span-2 text-left md:text-right">
//                             <Button
//                                 isIconOnly
//                                 size="sm"
//                                 variant="light"
//                                 className="text-zinc-500 hover:text-rose-500 hover:bg-rose-950/20 rounded-lg"
//                                 onClick={() => handleDeleteUser(user._id)}
//                             >
//                                 <TrashBin className="size-4" />
//                             </Button>
//                         </div>

//                     </div>
//                 ))
//             )}
//         </div>
//     );
// }

// **************************************

// "use client";

// import React, { useState } from "react";
// import { Avatar, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
// import { TrashBin, ChevronDown } from "@gravity-ui/icons";

// export default function UsersListGrid({ initialUsers }) {
//     const [users, setUsers] = useState(initialUsers);
//     const [isMutating, setIsMutating] = useState(false);

//     // 🛠️ রোল পরিবর্তন করার হ্যান্ডলার (নেক্সটজেস ইন্টারনাল রুট)
//     const handleRoleChange = async (userId, newRole) => {
//         setIsMutating(true);
//         try {
//             const response = await fetch(`/api/admin/users?id=${userId}`, {
//                 method: "PATCH",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ role: newRole })
//             });
//             if (!response.ok) throw new Error("Server rejected mutation");

//             setUsers(prev => prev.map(user => 
//                 user._id === userId ? { ...user, role: newRole } : user
//             ));
//             alert(`User role updated to ${newRole} successfully!`);
//         } catch (error) {
//             console.error(error);
//             alert("Could not update role in database.");
//         } finally {
//             setIsMutating(false);
//         }
//     };

//     // 🗑️ ইউজার ডিলিট করার হ্যান্ডলার (নেক্সটজেস ইন্টারনাল রুট)
//     const handleDeleteUser = async (userId) => {
//         if (!confirm("Are you absolutely sure you want to revoke this user's registry token?")) return;
//         setIsMutating(true);
//         try {
//             const response = await fetch(`/api/admin/users?id=${userId}`, {
//                 method: "DELETE"
//             });
//             if (!response.ok) throw new Error("Server rejected deletion");

//             setUsers(prev => prev.filter(user => user._id !== userId));
//             alert("User successfully deleted.");
//         } catch (error) {
//             console.error(error);
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

//     return (
//         <div className={`w-full space-y-3 transition-opacity ${isMutating ? 'opacity-60 pointer-events-none' : ''}`}>

//             {/* কলাম হেডার্স (ডেস্কটপ স্ক্রিনের জন্য) */}
//             <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider font-mono">
//                 <div className="col-span-4">Name / Identity</div>
//                 <div className="col-span-4">Email System</div>
//                 <div className="col-span-2">Authorization</div>
//                 <div className="col-span-2 text-right">Actions</div>
//             </div>

//             {/* ইউজার লিস্ট রেন্ডারিং লুপ */}
//             {users.length === 0 ? (
//                 <div className="w-full bg-[#111113] border border-zinc-900 rounded-xl p-12 text-center text-sm text-zinc-500">
//                     No user records found in the core registry.
//                 </div>
//             ) : (
//                 users.map((user) => (
//                     <div 
//                         key={user._id} 
//                         className="w-full bg-[#111113] border border-zinc-900 rounded-xl p-4 md:px-6 md:py-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:border-zinc-800 transition-all shadow-sm"
//                     >
//                         {/* ১. অ্যাভাটার ও নাম */}
//                         <div className="col-span-1 md:col-span-4 flex items-center gap-3">
//                             <Avatar
//                                 src={user.image || ""}
//                                 name={user.name?.charAt(0) || "U"}
//                                 className="bg-amber-500/10 text-amber-500 font-bold border border-amber-500/20 size-10 text-sm flex-shrink-0"
//                             />
//                             <div className="flex flex-col min-w-0">
//                                 <span className="text-sm font-semibold text-zinc-100 truncate">{user.name}</span>
//                                 <span className="text-[10px] text-zinc-500 font-mono truncate">ID: {user._id}</span>
//                             </div>
//                         </div>

//                         {/* ২. ইমেইল */}
//                         <div className="col-span-1 md:col-span-4 min-w-0">
//                             <span className="text-sm text-zinc-400 font-mono truncate block">{user.email}</span>
//                         </div>

//                         {/* ৩. ড্রপডাউন রোল অ্যাকশন */}
//                         <div className="col-span-1 md:col-span-2">
//                             <Dropdown className="bg-[#161619] border border-zinc-800 text-white rounded-xl">
//                                 <DropdownTrigger>
//                                     <Button 
//                                         size="sm" 
//                                         variant="flat" 
//                                         color={roleColors[user.role || 'client']}
//                                         className="capitalize font-medium text-xs gap-2 rounded-lg w-full md:w-auto justify-between md:justify-center"
//                                         endContent={<ChevronDown className="size-3" />}
//                                     >
//                                         {user.role || "client"}
//                                     </Button>
//                                 </DropdownTrigger>
//                                 <DropdownMenu aria-label="Roles" onAction={(key) => handleRoleChange(user._id, key)}>
//                                     <DropdownItem key="client" className="text-zinc-200">Client Role</DropdownItem>
//                                     <DropdownItem key="lawyer" className="text-zinc-200">Lawyer Role</DropdownItem>
//                                     <DropdownItem key="admin" className="text-rose-400">Admin Elevation</DropdownItem>
//                                 </DropdownMenu>
//                             </Dropdown>
//                         </div>

//                         {/* ৪. ডিলিট বাটন */}
//                         <div className="col-span-1 md:col-span-2 text-left md:text-right">
//                             <Button
//                                 isIconOnly
//                                 size="sm"
//                                 variant="light"
//                                 className="text-zinc-500 hover:text-rose-500 hover:bg-rose-950/20 rounded-lg"
//                                 onClick={() => handleDeleteUser(user._id)}
//                             >
//                                 <TrashBin className="size-4" />
//                             </Button>
//                         </div>

//                     </div>
//                 ))
//             )}
//         </div>
//     );
// }

// ********************************************

// "use client";

// import React, { useState } from "react";
// import { Avatar, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
// import { TrashBin, ChevronDown } from "@gravity-ui/icons";

// export default function UsersListGrid({ initialUsers }) {
//     const [users, setUsers] = useState(initialUsers);
//     const [isMutating, setIsMutating] = useState(false);

//     // .env থেকে লাইভ বা লোকাল সার্ভার ইউআরএল রিড করা হচ্ছে
//     const backendUrl = process.env.NEXT_PUBLIC_SERVER_API_URL || "https://legalease-server-snowy.vercel.app";

//     // 🛠️ রোল পরিবর্তন করার হ্যান্ডলার (সরাসরি ব্যাকএন্ড কল)
//     const handleRoleChange = async (userId, newRole) => {
//         setIsMutating(true);
//         try {
//             const response = await fetch(`${backendUrl}/api/admin/users?id=${userId}`, {
//                 method: "PATCH",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ role: newRole })
//             });
//             if (!response.ok) throw new Error("Server rejected mutation");

//             setUsers(prev => prev.map(user =>
//                 user._id === userId ? { ...user, role: newRole } : user
//             ));
//             alert(`User role updated to ${newRole} successfully!`);
//         } catch (error) {
//             console.error(error);
//             alert("Could not update role in database.");
//         } finally {
//             setIsMutating(false);
//         }
//     };

//     // 🗑️ ইউজার ডিলিট করার হ্যান্ডলার (সরাসরি ব্যাকএন্ড কল)
//     const handleDeleteUser = async (userId) => {
//         if (!confirm("Are you absolutely sure you want to revoke this user's registry token?")) return;
//         setIsMutating(true);
//         try {
//             const response = await fetch(`${backendUrl}/api/admin/users?id=${userId}`, {
//                 method: "DELETE"
//             });
//             if (!response.ok) throw new Error("Server rejected deletion");

//             setUsers(prev => prev.filter(user => user._id !== userId));
//             alert("User successfully deleted.");
//         } catch (error) {
//             console.error(error);
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

//     return (
//         <div className={`w-full space-y-3 transition-opacity ${isMutating ? 'opacity-60 pointer-events-none' : ''}`}>

//             {/* কলাম হেডার্স (ডেস্কটপ স্ক্রিনের জন্য) */}
//             <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider font-mono">
//                 <div className="col-span-4">Name / Identity</div>
//                 <div className="col-span-4">Email System</div>
//                 <div className="col-span-2">Authorization</div>
//                 <div className="col-span-2 text-right">Actions</div>
//             </div>

//             {/* ইউজার লিস্ট রেন্ডারিং লুপ */}
//             {users.length === 0 ? (
//                 <div className="w-full bg-[#111113] border border-zinc-900 rounded-xl p-12 text-center text-sm text-zinc-500">
//                     No user records found in the core registry.
//                 </div>
//             ) : (
//                 users.map((user) => (
//                     <div
//                         key={user._id}
//                         className="w-full bg-[#111113] border border-zinc-900 rounded-xl p-4 md:px-6 md:py-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:border-zinc-800 transition-all shadow-sm"
//                     >
//                         {/* ১. অ্যাভাটার ও নাম */}
//                         <div className="col-span-1 md:col-span-4 flex items-center gap-3">
//                             {/* <Avatar
//                                 src={user.image || ""}
//                                 name={user.name?.charAt(0) || "U"}
//                                 className="bg-amber-500/10 text-amber-500 font-bold border border-amber-500/20 size-10 text-sm flex-shrink-0"
//                             /> */}
//                             <Avatar
//                                 src={user.image ? user.image : undefined}
//                                 name={user.name?.charAt(0) || "U"}
//                                 className="bg-amber-500/10 text-amber-500 font-bold border border-amber-500/20 size-10 text-sm flex-shrink-0"
//                             />
//                             <div className="flex flex-col min-w-0">
//                                 <span className="text-sm font-semibold text-zinc-100 truncate">{user.name}</span>
//                                 <span className="text-[10px] text-zinc-500 font-mono truncate">ID: {user._id}</span>
//                             </div>
//                         </div>

//                         {/* ২. ইমেইল */}
//                         <div className="col-span-1 md:col-span-4 min-w-0">
//                             <span className="text-sm text-zinc-400 font-mono truncate block">{user.email}</span>
//                         </div>

//                         {/* ৩. ড্রপডাউন রোল অ্যাকশন */}
//                         <div className="col-span-1 md:col-span-2">
//                             <Dropdown className="bg-[#161619] border border-zinc-800 text-white rounded-xl">
//                                 {/* <DropdownTrigger>
//                                     <Button
//                                         size="sm"
//                                         variant="flat"
//                                         color={roleColors[user.role || 'client']}
//                                         className="capitalize font-medium text-xs gap-2 rounded-lg w-full md:w-auto justify-between md:justify-center"
//                                         endContent={<ChevronDown className="size-3" />}
//                                     >
//                                         {user.role || "client"}
//                                     </Button>
//                                 </DropdownTrigger> */}
//                                 <DropdownTrigger>
//                                     <div
//                                         className={`inline-flex cursor-pointer items-center justify-between gap-2 rounded-lg px-3 py-2 text-xs font-medium capitalize w-full md:w-auto
//         ${user.role === "admin"
//                                                 ? "bg-red-100 text-red-600"
//                                                 : user.role === "lawyer"
//                                                     ? "bg-amber-100 text-amber-700"
//                                                     : "bg-blue-100 text-blue-700"
//                                             }`}
//                                     >
//                                         <span>{user.role || "client"}</span>
//                                         <ChevronDown className="size-3" />
//                                     </div>
//                                 </DropdownTrigger>
//                                 {/* <DropdownMenu aria-label="Roles" onAction={(key) => handleRoleChange(user._id, key)}>
//                                     <DropdownItem key="client" className="text-zinc-200">Client Role</DropdownItem>
//                                     <DropdownItem key="lawyer" className="text-zinc-200">Lawyer Role</DropdownItem>
//                                     <DropdownItem key="admin" className="text-rose-400">Admin Elevation</DropdownItem>
//                                 </DropdownMenu> */}
//                                 <DropdownMenu aria-label="Roles">
//     <DropdownItem
//         key="client"
//         className="text-zinc-200"
//         onPress={() => handleRoleChange(user._id, "client")}
//     >
//         Client Role
//     </DropdownItem>

//     <DropdownItem
//         key="lawyer"
//         className="text-zinc-200"
//         onPress={() => handleRoleChange(user._id, "lawyer")}
//     >
//         Lawyer Role
//     </DropdownItem>

//     <DropdownItem
//         key="admin"
//         className="text-rose-400"
//         onPress={() => handleRoleChange(user._id, "admin")}
//     >
//         Admin Elevation
//     </DropdownItem>
// </DropdownMenu>
//                             </Dropdown>
//                         </div>

//                         {/* ৪. ডিলিট বাটন */}
//                         <div className="col-span-1 md:col-span-2 text-left md:text-right">
//                             <Button
//                                 isIconOnly
//                                 size="sm"
//                                 variant="light"
//                                 className="text-zinc-500 hover:text-rose-500 hover:bg-rose-950/20 rounded-lg"
//                                 onClick={() => handleDeleteUser(user._id)}
//                             >
//                                 <TrashBin className="size-4" />
//                             </Button>
//                         </div>

//                     </div>
//                 ))
//             )}
//         </div>
//     );
// }

// **********************************

"use client";

import React, { useTransition } from "react";
import { Avatar, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { TrashBin, ChevronDown } from "@gravity-ui/icons";
// সার্ভার অ্যাকশন ইম্পোর্ট করা হলো
import { updateUserRoleAction, deleteUserAction } from "@/lib/actions/users";

export default function UsersListGrid({ initialUsers }) {
    // Next.js Server Actions এবং revalidatePath ব্যবহারের ফলে initialUsers প্রপ্সটি নিজেই রিয়েল-টাইমে আপডেট হয়।
    // তাই আলাদা করে [users, setUsers] লোকাল স্টেটের আর কোনো প্রয়োজন নেই।
    const [isPending, startTransition] = useTransition();

    // 🛠️ রোল পরিবর্তন করার হ্যান্ডলার (সার্ভার অ্যাকশন কল)
    const handleRoleChange = (userId, newRole) => {
        startTransition(async () => {
            try {
                const result = await updateUserRoleAction(userId, newRole);
                if (result?.modifiedCount > 0) {
                    alert(`User role updated to ${newRole} successfully!`);
                } else {
                    alert("Role updated, or no change detected.");
                }
            } catch (error) {
                console.error("Failed to update role:", error);
                alert("Could not update role in database.");
            }
        });
    };

    // 🗑️ ইউজার ডিলিট করার হ্যান্ডলার (সার্ভার অ্যাকশন কল)
    const handleDeleteUser = (userId) => {
        if (!confirm("Are you absolutely sure you want to revoke this user's registry token?")) return;
        
        startTransition(async () => {
            try {
                const result = await deleteUserAction(userId);
                if (result?.deletedCount > 0) {
                    alert("User successfully deleted.");
                } else {
                    alert("User registry could not be wiped.");
                }
            } catch (error) {
                console.error("Failed to delete user:", error);
                alert("Could not delete user from database.");
            }
        });
    };

    return (
        <div className={`w-full space-y-3 transition-opacity duration-200 ${isPending ? 'opacity-50 pointer-events-none' : ''}`}>

            {/* কলাম হেডার্স (ডেস্কটপ স্ক্রিনের জন্য) */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider font-mono">
                <div className="col-span-4">Name / Identity</div>
                <div className="col-span-4">Email System</div>
                <div className="col-span-2">Authorization</div>
                <div className="col-span-2 text-right">Actions</div>
            </div>

            {/* ইউজার লিস্ট রেন্ডারিং লুপ */}
            {initialUsers.length === 0 ? (
                <div className="w-full bg-[#111113] border border-zinc-900 rounded-xl p-12 text-center text-sm text-zinc-500">
                    No user records found in the core registry.
                </div>
            ) : (
                initialUsers.map((user) => (
                    <div
                        key={user._id}
                        className="w-full bg-[#111113] border border-zinc-900 rounded-xl p-4 md:px-6 md:py-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:border-zinc-800 transition-all shadow-sm"
                    >
                        {/* ১. অ্যাভাটার ও নাম */}
                        <div className="col-span-1 md:col-span-4 flex items-center gap-3">
                            <Avatar
                                src={user.image ? user.image : undefined}
                                name={user.name?.charAt(0) || "U"}
                                className="bg-amber-500/10 text-amber-500 font-bold border border-amber-500/20 size-10 text-sm flex-shrink-0"
                            />
                            <div className="flex flex-col min-w-0">
                                <span className="text-sm font-semibold text-zinc-100 truncate">{user.name}</span>
                                <span className="text-[10px] text-zinc-500 font-mono truncate">ID: {user._id}</span>
                            </div>
                        </div>

                        {/* ২. ইমেইল */}
                        <div className="col-span-1 md:col-span-4 min-w-0">
                            <span className="text-sm text-zinc-400 font-mono truncate block">{user.email}</span>
                        </div>

                        {/* ৩. ড্রপডাউন রোল অ্যাকশন */}
                        <div className="col-span-1 md:col-span-2">
                            <Dropdown className="bg-[#161619] border border-zinc-800 text-white rounded-xl">
                                <DropdownTrigger>
                                    <div
                                        className={`inline-flex cursor-pointer items-center justify-between gap-2 rounded-lg px-3 py-2 text-xs font-medium capitalize w-full md:w-auto
                                        ${user.role === "admin"
                                                ? "bg-red-100 text-red-600"
                                                : user.role === "lawyer"
                                                    ? "bg-amber-100 text-amber-700"
                                                    : "bg-blue-100 text-blue-700"
                                        }`}
                                    >
                                        <span>{user.role || "client"}</span>
                                        <ChevronDown className="size-3" />
                                    </div>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Roles">
                                    <DropdownItem
                                        key="client"
                                        className="text-zinc-200"
                                        onPress={() => handleRoleChange(user._id, "client")}
                                    >
                                        Client Role
                                    </DropdownItem>

                                    <DropdownItem
                                        key="lawyer"
                                        className="text-zinc-200"
                                        onPress={() => handleRoleChange(user._id, "lawyer")}
                                    >
                                        Lawyer Role
                                    </DropdownItem>

                                    <DropdownItem
                                        key="admin"
                                        className="text-rose-400"
                                        onPress={() => handleRoleChange(user._id, "admin")}
                                    >
                                        Admin Elevation
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>

                        {/* ৪. ডিলিট বাটন */}
                        <div className="col-span-1 md:col-span-2 text-left md:text-right">
                            <Button
                                isIconOnly
                                size="sm"
                                variant="light"
                                className="text-zinc-500 hover:text-rose-500 hover:bg-rose-950/20 rounded-lg"
                                onClick={() => handleDeleteUser(user._id)}
                            >
                                <TrashBin className="size-4" />
                            </Button>
                        </div>

                    </div>
                ))
            )}
        </div>
    );
}