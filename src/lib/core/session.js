
// import { auth } from "../auth"; 

// import { headers } from "next/headers";

// export const getUserSession = async () => {
//   const session = await auth.api.getSession({
//     headers: await headers()
//   });

//   return session?.user || null;
// };

// **************************************************

// src/lib/core/session.js
// import { auth } from "../auth";

// export const getUserSession = async () => {
//   try {
//     // headers() পাস না করে নরমাল এপিআই কল করুন
//     const session = await auth.api.getSession();
//     return session?.user || null;
//   } catch (error) {
//     console.error("Session fetch blocked:", error);
//     return null;
//   }
// };

// ***********************************************

// src/lib/core/session.js
// import { auth } from "../auth";

// export const getUserSession = async () => {
//   try {
//     // একটি টাইমআউট সেট করা যাতে ৫ সেকেন্ডের বেশি আটকে না থাকে
//     const sessionPromise = auth.api.getSession();
//     const timeoutPromise = new Promise((_, reject) =>
//       setTimeout(() => reject(new Error("Better-Auth Timeout")), 4000)
//     );

//     const session = await Promise.race([sessionPromise, timeoutPromise]);
//     return session?.user || null;
//   } catch (error) {
//     console.error("⚠️ Session bypassed or timed out:", error.message);
//     // ডাটাবেজ কানেকশন লক হয়ে গেলে সাময়িকভাবে একটি মক ইউজার রিটার্ন করবে যেন পেজ লোড হয়
//     return {
//       id: "mock_user_123",
//       email: "test.lawyer@example.com", // টেস্ট করার জন্য আপনার ডাটাবেজে থাকা একটি ইমেইল দিতে পারেন
//       name: "Test Lawyer"
//     };
//   }
// };

// ***********************************************

// src/lib/core/session.js
// import { auth } from "../auth";

// export const getUserSession = async () => {
//   try {
//     // ২ সেকেন্ডের একটি রেস ট্র্যাকার, যাতে Better-Auth আটকে গেলে পুরো অ্যাপ আটকে না যায়
//     const sessionPromise = auth.api.getSession();
//     const timeoutPromise = new Promise((_, reject) =>
//       setTimeout(() => reject(new Error("Timeout")), 2000)
//     );

//     const session = await Promise.race([sessionPromise, timeoutPromise]);
//     return session?.user || null;
//   } catch (error) {
//     console.error("Session fetch bypassed to prevent blocking:", error);
//     return null; // আটকে গেলে সরাসরি null রিটার্ন করবে, লুপ করবে না
//   }
// };

// *************************************************

// import { auth } from "../auth";
// import { headers } from "next/headers"; // 💡 এটি অবশ্যই লাগবে হেডার্স রিড করার জন্য

// export const getUserSession = async () => {
//   try {
//     // Better-Auth কে সার্ভার-সাইড হেডার পাস করা হলো যাতে সে কুকি/সেশন ডিটেক্ট করতে পারে
//     const sessionPromise = auth.api.getSession({
//       headers: await headers(), // 👈 এই জাদুকরী লাইনটিই মিসিং ছিল
//     });

//     // ২ সেকেন্ডের রেস ট্র্যাকার
//     const timeoutPromise = new Promise((_, reject) =>
//       setTimeout(() => reject(new Error("Timeout")), 2000)
//     );

//     const session = await Promise.race([sessionPromise, timeoutPromise]);
//     return session?.user || null;
//   } catch (error) {
//     console.error("Session fetch bypassed to prevent blocking:", error);
//     return null; 
//   }
// };

// *****************************************************

// import { auth } from "../auth";
// import { headers } from "next/headers"; 
// import { redirect } from "next/navigation"; // 👈 রিডাইরেক্ট ইম্পোর্ট করা হলো

// export const getUserSession = async () => {
//   try {
//     const sessionPromise = auth.api.getSession({
//       headers: await headers(), 
//     });

//     const timeoutPromise = new Promise((_, reject) =>
//       setTimeout(() => reject(new Error("Timeout")), 2000)
//     );

//     const session = await Promise.race([sessionPromise, timeoutPromise]);
//     return session?.user || null;
//   } catch (error) {
//     console.error("Session fetch bypassed to prevent blocking:", error);
//     return null; 
//   }
// };

// /* =========================================================================
//     🛡️ LEGALEASE SERVER-SIDE ROLE VALIDATOR
//    ========================================================================= */
// export const requireRole = async (role) => {
//   const user = await getUserSession();
  
//   // ১. সেশন না থাকলে সরাসরি সাইন-ইন পেজে পুশ করবে
//   if (!user) {
//     redirect('/auth/signin');
//   }
  
//   // ২. রোল না মিললে আন-অথোরাইজড প্রোটেকশন পেজে নিয়ে যাবে
//   if (user?.role !== role) {
//     redirect('/unauthorized');
//   }
  
//   return user;
// };

// ******************************************

// import { auth } from "../auth";
// import { headers } from "next/headers"; 
// import { redirect } from "next/navigation";

// export const getUserSession = async () => {
//   try {
//     const sessionPromise = auth.api.getSession({
//       headers: await headers(), 
//     });

//     // ২ সেকেন্ডের টাইমআউট প্রমিস
//     const timeoutPromise = new Promise((_, reject) =>
//       setTimeout(() => reject(new Error("Timeout")), 2000)
//     );

//     // সেশন এবং টাইমআউটের মধ্যে রেস
//     const session = await Promise.race([sessionPromise, timeoutPromise]);
//     return session?.user || null;
//   } catch (error) {
//     console.error("Session fetch bypassed to prevent blocking:", error);
//     return null; 
//   }
// };

// /* =========================================================================
//    🛡️ LEGALEASE SERVER-SIDE ROLE VALIDATOR (Optimized for Next.js)
//    ========================================================================= */
// export const requireRole = async (role) => {
//   const user = await getUserSession();
  
//   // ১. সেশন না থাকলে সরাসরি সাইন-ইন পেজে পুশ করবে
//   if (!user) {
//     redirect('/auth/signin');
//   }
  
//   // ২. রোল না মিললে আন-অথোরাইজড প্রোটেকশন পেজে নিয়ে যাবে
//   if (user?.role !== role) {
//     redirect('/unauthorized');
//   }
  
//   return user;
// };

// ******************************************

// import { auth } from "../auth";
// import { headers } from "next/headers"; 
// import { redirect } from "next/navigation";

// /**
//  * 🖥️ সার্ভার কম্পোনেন্ট বা সার্ভার অ্যাকশন থেকে বর্তমান ইউজার সেশন ডাটা বের করার হেল্পার (টাইমআউট সেফগার্ড সহ)
//  */
// export const getUserSession = async () => {
//   try {
//     const sessionPromise = auth.api.getSession({
//       headers: await headers(), 
//     });

//     // ২ সেকেন্ডের টাইমআউট প্রমিস
//     const timeoutPromise = new Promise((_, reject) =>
//       setTimeout(() => reject(new Error("Timeout")), 2000)
//     );

//     // সেশন এবং টাইমআউটের মধ্যে রেস
//     const session = await Promise.race([sessionPromise, timeoutPromise]);
//     return session?.user || null;
//   } catch (error) {
//     console.error("Session fetch bypassed to prevent blocking:", error);
//     return null; 
//   }
// };

// /* =========================================================================
//    🛡️ LEGALEASE SERVER-SIDE ROLE VALIDATOR (Optimized for Next.js)
//    ========================================================================= */
// export const requireRole = async (role) => {
//   const user = await getUserSession();
  
//   // ১. সেশন না থাকলে সরাসরি সাইন-ইন পেজে পুশ করবে
//   if (!user) {
//     redirect('/auth/signin');
//   }
  
//   // ২. রোল না মিললে আন-অথোরাইজড প্রোটেকশন পেজে নিয়ে যাবে
//   if (user?.role !== role) {
//     redirect('/unauthorized');
//   }
  
//   return user;
// };

// *********************************************

import { getSession } from "@/lib/auth-client"; // Better-Auth ক্লায়েন্ট হুক

/**
 * 🌐 ক্লায়েন্ট সাইড (Client Component) থেকে সেশন ডাটা বের করার হেল্পার
 */
export const getUserSession = async () => {
  if (typeof window !== "undefined") {
    const session = await getSession();
    return session?.user || null;
  }
  return null;
};