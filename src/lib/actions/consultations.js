// import { serverFetch } from "../core/server";

// /**
//  * ক্লায়েন্ট যখন কোনো আইনজীবীকে হায়ার বা কনসালটেশনের জন্য রিকোয়েস্ট পাঠাবে
//  */
// export async function submitConsultationRequest(hiringData) {
//   try {
//     // এটি আমাদের ব্যাকএন্ডের /api/hirings এপিআই-তে ডেটা পোস্ট করবে
//     return await serverFetch('/api/hirings', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(hiringData),
//     });
//   } catch (error) {
//     console.error("Error submitting consultation/hiring request:", error);
//     throw error;
//   }
// }

// ************************************************************************************

'use server';

import { serverFetch } from "../core/server";

/**
 * ক্লায়েন্ট যখন কোনো আইনজীবীকে হায়ার বা কনসালটেশনের জন্য রিকোয়েস্ট পাঠাবে
 */
export const submitConsultationRequest = async (hiringData) => {
  try {
    return await serverFetch('/api/hirings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(hiringData),
    });
  } catch (error) {
    console.error("Error submitting consultation request:", error);
    throw error;
  }
};