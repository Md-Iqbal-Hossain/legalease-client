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

import { serverFetch } from "../core/server"; 
// দ্রষ্টব্য: যদি আপনার প্রোজেক্টে serverFetch না থেকে সাধারণ fetch থাকে, তবে সেভাবে লিখতে পারেন

export const getLawyers = async () => {
  return serverFetch('/api/lawyers');
};

// সুনির্দিষ্ট আইনজীবীর আইডি দিয়ে ডাটা নিয়ে আসার নতুন ফাংশন
export const getLawyerById = async (lawyerId) => {
  return serverFetch(`/api/lawyers/${lawyerId}`);
};