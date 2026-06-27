// import { serverFetch } from "../core/server";

// /**
//  * প্ল্যান আইডি দিয়ে নির্দিষ্ট সাবস্ক্রিপশন বা ক্লায়েন্ট প্ল্যানের ডিটেইলস নিয়ে আসার এপিআই
//  */
// export async function getClientPlanById(planId) {
//   try {
//     if (!planId) return null;
    
//     // ব্যাকএন্ডের /api/plans?plan_id=id পাথের সাথে এটি কানেক্ট করবে
//     return await serverFetch(`/api/plans?plan_id=${planId}`);
//   } catch (error) {
//     console.error(`Error fetching client plan for ID ${planId}:`, error);
//     return null;
//   }
// }

// ****************************************************************

// import { serverFetch } from "../core/server";

// /**
//  * প্ল্যান আইডি দিয়ে নির্দিষ্ট সাবস্ক্রিপশন বা ক্লায়েন্ট প্ল্যানের ডিটেইলস নিয়ে আসার এপিআই
//  */
// export async function getClientPlanById(planId) {
//   try {
//     const targetId = planId || 'client_free';
    
//     // ব্যাকএন্ডের /api/plans পাথের সাথে কুয়েরি প্যারামিটার যুক্ত করে কল করা হলো
//     return await serverFetch(`/api/plans?plan_id=${targetId}`);
//   } catch (error) {
//     console.error(`Error fetching client plan for ID ${planId}:`, error);
    
//     // কোনো কারণে ব্যাকএন্ড ফেইল করলে ক্র্যাশ এড়াতে ডিফল্ট ফলব্যাক অবজেক্ট
//     return {
//       name: 'Free Tier',
//       maxConsultationsPerMonth: 3,
//       price: 0
//     };
//   }
// }

// ****************************************************************************

import { serverFetch } from "../core/server";

/**
 * প্ল্যান আইডি দিয়ে নির্দিষ্ট সাবস্ক্রিপশন, ক্লায়েন্ট বা লইয়ার প্ল্যানের ডিটেইলস নিয়ে আসা
 */
export async function getPlanById(planId) {
  try {
    // যদি কোনো আইডি না পাঠানো হয়, তবে ডিফল্ট হিসেবে 'client_free' ধরবে
    const targetId = planId || 'client_free';
    
    // ব্যাকএন্ডের /api/plans পাথের সাথে কুয়েরি প্যারামিটার যুক্ত করে কল করা হলো
    return await serverFetch(`/api/plans?plan_id=${targetId}`);
  } catch (error) {
    console.error(`Error fetching plan for ID ${planId}:`, error);
    
    // কোনো কারণে ব্যাকএন্ড ফেইল করলে ক্র্যাশ এড়াতে ডাইনামিক ফলব্যাক অবজেক্ট
    if (planId && planId.startsWith('lawyer')) {
      return {
        id: 'lawyer_unverified',
        name: 'Unverified Tier',
        maxServices: 0,
        price: 0
      };
    }
    
    return {
      id: 'client_free',
      name: 'Free Tier',
      maxConsultationsPerMonth: 3,
      price: 0
    };
  }
}