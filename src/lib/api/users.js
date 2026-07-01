// import { serverFetch } from "../core/server";

// /**
//  * সিস্টেমের সমস্ত রেজিস্টার্ড ইউজার ও লইয়ারদের তালিকা ব্যাকএন্ড থেকে ফেচ করার অ্যাকশন (Admin Only)
//  */
// export const getAllSystemUsers = async () => {
//   try {
//     // আপনার ব্যাকএন্ড এপিআই এন্ডপয়েন্ট (যেমন: /api/admin/users)
//     return await serverFetch('/api/admin/users'); 
//   } catch (error) {
//     console.error("Error fetching core system users directory:", error);
//     return [];
//   }
// };

// *************************************

/**
 * সিস্টেমের সমস্ত রেজিস্টার্ড ইউজার ও লইয়ারদের তালিকা ব্যাকএন্ড থেকে ফেচ করার অ্যাকশন (Admin Only)
 */
// export const getAllSystemUsers = async () => {
//   try {
//     // .env থেকে লোকাল বা লাইভ ব্যাকএন্ড ইউআরএল নেওয়া হচ্ছে
//     // const backendUrl = process.env.NEXT_PUBLIC_SERVER_API_URL || "https://legalease-server-snowy.vercel.app";
//     const backendUrl = "http://localhost:5000"; // সাময়িক হার্ডকোড লোকালহোস্ট টেস্ট
    
//     console.log(`Fetching users from: ${backendUrl}/api/admin/users`); // ফ্রন্টএন্ড টার্মিনালে চেক করার জন্য লগার

//     const response = await fetch(`${backendUrl}/api/admin/users`, {
//         cache: 'no-store' // নেক্সটজেস যেন ডাটা ক্যাশ করে না রাখে (সবসময় লেটেস্ট ডাটা আসবে)
//     });

//     if (!response.ok) {
//         throw new Error(`Server responded with status: ${response.status}`);
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching core system users directory:", error);
//     return [];
//   }
// };

// *********************************

import { serverFetch } from "../core/server";

/**
 * 🔒 ডাটাবেজ থেকে সমস্ত সিস্টেম ইউজারের ডাটা অ্যাডমিন প্যানেলের জন্য নিয়ে আসা
 */
export const getAllSystemUsers = async () => {
  try {
    // 🔐 serverFetch ব্যবহার করা হয়েছে এবং ২য় প্যারামিটার true দিয়ে অ্যাডমিন টোকেন পাস নিশ্চিত করা হয়েছে
    // এটি ক্যাশিং ডাইনামিকালি হ্যান্ডেল করবে এবং .env থেকে ইউআরএল রীড করবে
    return await serverFetch('/api/admin/users', true);
  } catch (error) {
    console.error("Error fetching core system users directory:", error);
    return [];
  }
};