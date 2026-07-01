// import { auth } from "../auth";
// import { headers } from "next/headers"; 
// import { redirect } from "next/navigation";

// /**
//  * 🖥️ পিওর সার্ভার কম্পোনেন্ট বা সার্ভার অ্যাকশন থেকে সেশন ডাটা বের করার হেল্পার (টাইমআউট সেফগার্ড সহ)
//  */
// export const getServerSession = async () => {
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
//     console.error("Server session fetch bypassed to prevent blocking:", error);
//     return null; 
//   }
// };

// /**
//  * 🛡️ LEGALEASE SERVER-SIDE ROLE VALIDATOR
//  */
// export const requireRole = async (role) => {
//   const user = await getServerSession();
  
//   if (!user) {
//     redirect('/auth/signin');
//   }
  
//   if (user?.role !== role) {
//     redirect('/unauthorized');
//   }
  
//   return user;
// };

// **********************************

// import { auth } from "../auth";
// import { redirect } from "next/navigation";

// /**
//  * 🖥️ পিওর সার্ভার কম্পোনেন্ট বা সার্ভার অ্যাকশন থেকে সেশন ডাটা বের করার হেল্পার (টাইমআউট সেফগার্ড সহ)
//  */
// export const getServerSession = async () => {
//   try {
//     // 🔐 Turbopack/Next.js বিল্ড এরর আটকাতে সরাসরি ফাংশনের ভেতর ডাইনামিকালি headers ইম্পোর্ট করা হলো
//     const { headers } = await import("next/headers");
//     const reqHeaders = await headers();

//     const sessionPromise = auth.api.getSession({
//       headers: reqHeaders, 
//     });

//     // ২ সেকেন্ডের টাইমআউট প্রমিস
//     const timeoutPromise = new Promise((_, reject) =>
//       setTimeout(() => reject(new Error("Timeout")), 2000)
//     );

//     // সেশন এবং টাইমআউটের মধ্যে রেস
//     const session = await Promise.race([sessionPromise, timeoutPromise]);
//     return session?.user || null;
//   } catch (error) {
//     console.error("Server session fetch bypassed to prevent blocking:", error);
//     return null; 
//   }
// };

// /**
//  * 🛡️ LEGALEASE SERVER-SIDE ROLE VALIDATOR
//  */
// export const requireRole = async (role) => {
//   const user = await getServerSession();
  
//   if (!user) {
//     redirect('/auth/signin');
//   }
  
//   if (user?.role !== role) {
//     redirect('/unauthorized');
//   }
  
//   return user;
// };

// ************************************************

// import { auth } from "../auth";
// import { redirect } from "next/navigation";

// /**
//  * 🖥️ পিওর সার্ভার কম্পোনেন্ট বা সার্ভার অ্যাকশন থেকে সেশন ডাটা বের করার হেল্পার
//  */
// export const getServerSession = async () => {
//   try {
//     // 🔐 Next.js বিল্ড সেফগার্ডের জন্য ফাংশনের ভেতরে ডাইনামিকালি headers ইম্পোর্ট করা হলো
//     const { headers } = await import("next/headers");
//     const reqHeaders = await headers();

//     // Better-Auth এর জন্য সমস্ত কুকি এবং অথরাইজেশন হেডার্স ফরওয়ার্ড করা নিশ্চিত করা হচ্ছে
//     const session = await auth.api.getSession({
//       headers: reqHeaders,
//     });

//     return session?.user || null;
//   } catch (error) {
//     console.error("Server session fetch bypassed to prevent blocking:", error);
//     return null; 
//   }
// };

/**
 * 🛡️ LEGALEASE SERVER-SIDE ROLE VALIDATOR
 */
// export const requireRole = async (role) => {
//   const user = await getServerSession();
  
//   if (!user) {
//     redirect('/auth/signin');
//   }
  
//   if (user?.role !== role) {
//     redirect('/unauthorized');
//   }
  
//   return user;
// };

// ***********************************************

import { auth } from "../auth";
import { redirect } from "next/navigation";

/**
 * 🖥️ পিওর সার্ভার কম্পোনেন্ট বা সার্ভার অ্যাকশন থেকে সেশন ডাটা বের করার হেল্পার
 */
export const getServerSession = async () => {
  try {
    const { headers } = await import("next/headers");
    const reqHeaders = await headers();

    const session = await auth.api.getSession({
      headers: reqHeaders,
    });

    return session?.user || null;
  } catch (error) {
    console.error("Server session fetch bypassed to prevent blocking:", error);
    return null; 
  }
};

/**
 * 🔑 সার্ভার সাইড থেকে সরাসরি Better-Auth সেশন আইডি বা টোকেন এক্সট্রাক্ট করার হেল্পার
 */
export const getServerSessionToken = async () => {
  try {
    const { headers } = await import("next/headers");
    const reqHeaders = await headers();

    const session = await auth.api.getSession({
      headers: reqHeaders,
    });

    // Better-Auth এর মেইন সেশন টোকেন অথবা আইডি যা এক্সপ্রেসের sessionCollection এ খুঁজে পাওয়া যাবে
    return session?.session?.token || session?.session?.id || "";
  } catch (error) {
    console.error("Error capturing server session token:", error);
    return "";
  }
};

/**
 * 🛡️ LEGALEASE SERVER-SIDE ROLE VALIDATOR
 */
export const requireRole = async (role) => {
  const user = await getServerSession();
  
  if (!user) {
    redirect('/auth/signin');
  }
  
  if (user?.role !== role) {
    redirect('/unauthorized');
  }
  
  return user;
};