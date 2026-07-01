// 'use server'

// import { serverFetch } from "../core/server";

// // ১. সমস্ত আইনজীবীদের তালিকা নিয়ে আসা (ফিল্টারিং সহ)
// export const getLawyers = async (specialty = '') => {
//   const url = specialty ? `/api/lawyers?specialty=${specialty}` : '/api/lawyers';
//   return serverFetch(url);
// };

// // ২. নির্দিষ্ট একজন আইনজীবীর বিস্তারিত তথ্য আইডি দিয়ে বের করা
// export const getLawyerById = async (id) => {
//   return serverFetch(`/api/lawyers/${id}`);
// };

// ***************************************************************

// import { serverFetch } from "../core/server"; 
// // দ্রষ্টব্য: যদি আপনার প্রোজেক্টে serverFetch না থেকে সাধারণ fetch থাকে, তবে সেভাবে লিখতে পারেন

// export const getLawyers = async () => {
//   return serverFetch('/api/lawyers');
// };

// // সুনির্দিষ্ট আইনজীবীর আইডি দিয়ে ডাটা নিয়ে আসার নতুন ফাংশন
// export const getLawyerById = async (lawyerId) => {
//   return serverFetch(`/api/lawyers/${lawyerId}`);
// };

// *************************************************************************

// import { serverFetch } from "../core/server";

// /**
//  * সমস্ত আইনজীবীর প্রোফাইল ব্যাকএন্ড থেকে ফেচ করার অ্যাকশন
//  */
// export const getLawyers = async () => {
//   try {
//     return await serverFetch('/api/lawyers');
//   } catch (error) {
//     console.error("Error fetching lawyer profiles directory:", error);
//     return [];
//   }
// };

// /**
//  * সুনির্দিষ্ট আইডি দিয়ে একজন আইনজীবীর বিস্তারিত তথ্য নিয়ে আসার অ্যাকশন
//  */
// export const getLawyerById = async (lawyerId) => {
//   try {
//     return await serverFetch(`/api/lawyers/${lawyerId}`);
//   } catch (error) {
//     console.error(`Error fetching lawyer profile for ID ${lawyerId}:`, error);
//     return null;
//   }
// };

// ********************************8

import { serverFetch } from "../core/server";

/**
 * সমস্ত আইনজীবীর প্রোফাইল ব্যাকএন্ড থেকে ফেচ করার অ্যাকশন (সার্চ সাপোর্টসহ)
 * @param {string} searchQuery - নাম বা স্পেশালিস্ট দিয়ে খোঁজার জন্য অপশনাল কুয়েরি
 */
export const getLawyers = async (searchQuery = "") => {
  try {
    // যদি সার্চ কোয়েরি থাকে তবে সেটি এনকোড করে এপিআই পাথের সাথে জুড়ে দেওয়া হবে
    const path = searchQuery 
      ? `/api/lawyers?search=${encodeURIComponent(searchQuery)}` 
      : '/api/lawyers';
      
    return await serverFetch(path);
  } catch (error) {
    console.error("Error fetching lawyer profiles directory:", error);
    return [];
  }
};

/**
 * সুনির্দিষ্ট আইডি দিয়ে একজন আইনজীবীর বিস্তারিত তথ্য নিয়ে আসার অ্যাকশন
 * @param {string} lawyerId - আইনজীবীর অনন্য মঙ্গোডিবি আইডি
 */
export const getLawyerById = async (lawyerId) => {
  try {
    return await serverFetch(`/api/lawyers/${lawyerId}`);
  } catch (error) {
    console.error(`Error fetching lawyer profile for ID ${lawyerId}:`, error);
    return null;
  }
};