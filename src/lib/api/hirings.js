
// import { serverFetch, serverMutation } from "../core/server";
// import { getUserSession } from "../core/session";


// export const getLawyerHirings = async (lawyerEmail) => {
//   return serverFetch(`/lawyer/hirings/${lawyerEmail}`);
// };


// export const getLoggedInLawyerHirings = async () => {
//   const user = await getUserSession();
//   if (!user || !user.email) return [];
//   return getLawyerHirings(user.email);
// };


// export const updateHiringRequestStatus = async (id, status) => {
//   return serverMutation(`/hirings/${id}`, 'PATCH', { status });
// };

// *******************************************************

// 'use server' // এটি নিশ্চিত করবে যে ফাইলটি শুধু সার্ভারেই রান হবে

// import { serverFetch, serverMutation } from "../core/server";
// import { getUserSession } from "../core/session";

// // ১. নির্দিষ্ট ইমেইলের রিকোয়েস্টগুলো ব্যাকএন্ড থেকে আনা
// export const getLawyerHirings = async (lawyerEmail) => {
//   return serverFetch(`/lawyer/hirings/${lawyerEmail}`);
// };

// // ২. সেশনে থাকা বর্তমান লগইন করা আইনজীবীর রিকোয়েস্টগুলো আনা
// export const getLoggedInLawyerHirings = async () => {
//   try {
//     const user = await getUserSession();
//     if (!user || !user.email) return [];
//     return await getLawyerHirings(user.email);
//   } catch (error) {
//     console.error("Error in getLoggedInLawyerHirings Server Action:", error);
//     return [];
//   }
// };

// // ৩. রিকোয়েস্ট Accept বা Reject করার অ্যাকশন (PATCH Mutation)
// export const updateHiringRequestStatus = async (id, status) => {
//   return serverMutation(`/hirings/${id}`, 'PATCH', { status });
// };

// **********************************************

'use server' // এটি নিশ্চিত করবে যে ফাইলটি শুধু সার্ভারেই রান হবে

import { serverFetch, serverMutation } from "../core/server";
import { getUserSession } from "../core/session";

// ১. নির্দিষ্ট ইমেইলের রিকোয়েস্টগুলো ব্যাকএন্ড থেকে আনা
export const getLawyerHirings = async (lawyerEmail) => {
  // 💡 ব্যাকএন্ডের ইউনিফর্ম পাথ অনুযায়ী পাথের শুরুতে '/api' যুক্ত করা হলো
  return serverFetch(`/api/lawyer/hirings/${encodeURIComponent(lawyerEmail.toLowerCase().trim())}`);
};

// ২. সেশনে থাকা বর্তমান লগইন করা আইনজীবীর রিকোয়েস্টগুলো আনা
export const getLoggedInLawyerHirings = async () => {
  try {
    const user = await getUserSession();
    if (!user || !user.email) return [];
    return await getLawyerHirings(user.email);
  } catch (error) {
    console.error("Error in getLoggedInLawyerHirings Server Action:", error);
    return [];
  }
};

// ৩. রিকোয়েস্ট Accept বা Reject করার অ্যাকশন (PATCH Mutation)
export const updateHiringRequestStatus = async (id, status) => {
  // 💡 এখানেও ব্যাকএন্ড রাউটের সাথে মিলিয়ে '/api/hirings/' ব্যবহার করা হলো
  return serverMutation(`/api/hirings/${id}`, 'PATCH', { status });
};