// 'use server'

// import { revalidatePath } from "next/cache";
// import { serverMutation } from "../core/server";

// /**
//  * ইউজারের রোল পরিবর্তন করার সার্ভার অ্যাকশন
//  */
// export const updateUserRoleAction = async (userId, newRole) => {
//     // serverMutation(path, method, data) সিকোয়েন্স অনুযায়ী কল করা হয়েছে
//     const result = await serverMutation(`/api/admin/users?id=${userId}`, 'PATCH', { role: newRole });
    
//     // ডাটাবেজে আপডেট হওয়ার পর ফ্রন্টএন্ড অ্যাডমিন পেজ অটো-রিফ্রেশ করবে
//     revalidatePath('/dashboard/admin/manage-users');
//     return result;
// };

// /**
//  * ইউজার অ্যাকাউন্ট ডিলিট করার সার্ভার অ্যাকশন
//  */
// export const deleteUserAction = async (userId) => {
//     const result = await serverMutation(`/api/admin/users?id=${userId}`, 'DELETE', {});
    
//     // ডিলিট হওয়ার পর ফ্রন্টএন্ড অ্যাডমিন পেজ অটো-রিফ্রেশ করবে
//     revalidatePath('/dashboard/admin/manage-users');
//     return result;
// };

// *******************************

'use server'

import { revalidatePath } from "next/cache";
import { serverMutation } from "../core/server";

/**
 * 👑 ইউজারের রোল পরিবর্তন করার সার্ভার অ্যাকশন (Admin Protected)
 */
export const updateUserRoleAction = async (userId, newRole) => {
    try {
        // 🔐 serverMutation স্বয়ংক্রিয়ভাবে PATCH মেথড, হেডার এবং অ্যাডমিন সেশন টোকেন ইনজেক্ট করবে
        const result = await serverMutation(`/api/admin/users?id=${userId}`, 'PATCH', { role: newRole });
        
        // ডাটাবেজে আপডেট হওয়ার পর ফ্রন্টএন্ড অ্যাডমিন পেজ অটো-রিফ্রেশ করবে
        revalidatePath('/dashboard/admin/manage-users');
        return result;
    } catch (error) {
        console.error(`Error updating role for user ID ${userId}:`, error);
        throw error;
    }
};

/**
 * 🗑️ ইউজার অ্যাকাউন্ট ডিলিট করার সার্ভার অ্যাকশন (Admin Protected)
 */
export const deleteUserAction = async (userId) => {
    try {
        // 🔐 serverMutation স্বয়ংক্রিয়ভাবে DELETE মেথড এবং অ্যাডমিন সেশন টোকেন হ্যান্ডেল করবে
        const result = await serverMutation(`/api/admin/users?id=${userId}`, 'DELETE', {});
        
        // ডিলিট হওয়ার পর ফ্রন্টএন্ড অ্যাডমিন পেজ অটো-রিফ্রেশ করবে
        revalidatePath('/dashboard/admin/manage-users');
        return result;
    } catch (error) {
        console.error(`Error deleting user ID ${userId}:`, error);
        throw error;
    }
};