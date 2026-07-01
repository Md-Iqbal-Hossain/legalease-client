// // locale configuration pointing to your Node backend port
// const BASE_URL = process.env.NEXT_PUBLIC_SERVER_API_URL || 'http://localhost:5000';

// /**
//  * ACTION: Create a brand new legal service entry
//  */
// export async function createLegalService(serviceData) {
//   try {
//     const response = await fetch(`${BASE_URL}/services`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(serviceData),
//     });
//     if (!response.ok) throw new Error('Failed to dispatch service asset creation.');
//     return await response.json();
//   } catch (error) {
//     console.error("Action Error (createLegalService):", error);
//     throw error;
//   }
// }

// /**
//  * ACTION: Fetch all registered legal services from the database cluster
//  */
// export async function getAllLegalServices() {
//   try {
//     const response = await fetch(`${BASE_URL}/services`, {
//       method: 'GET',
//       cache: 'no-store' // Forces Next.js to bypass caching for dynamic real-time data
//     });
//     if (!response.ok) throw new Error('Database streaming read failure.');
//     return await response.json();
//   } catch (error) {
//     console.error("Action Error (getAllLegalServices):", error);
//     return [];
//   }
// }

// /**
//  * ACTION: Modify an existing service outline by its unique database ID
//  */
// export async function updateLegalService(id, updatedFields) {
//   try {
//     const response = await fetch(`${BASE_URL}/services/${id}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(updatedFields),
//     });
//     if (!response.ok) throw new Error('Target updates rejected by server pipeline.');
//     return await response.json();
//   } catch (error) {
//     console.error("Action Error (updateLegalService):", error);
//     throw error;
//   }
// }

// /**
//  * ACTION: Remove a legal service option completely from the collections
//  */
// export async function deleteLegalService(id) {
//   try {
//     const response = await fetch(`${BASE_URL}/services/${id}`, {
//       method: 'DELETE',
//     });
//     if (!response.ok) throw new Error('Resource removal exception.');
//     return await response.json();
//   } catch (error) {
//     console.error("Action Error (deleteLegalService):", error);
//     throw error;
//   }
// }

// ********************************************************************************

// import { serverFetch, serverMutation } from '../core/server';

// /**
//  * ACTION: Create a brand new legal service entry
//  */
// export async function createLegalService(serviceData) {
//   return serverMutation('/services', 'POST', serviceData);
// }

// /**
//  * ACTION: Fetch all registered legal services
//  */
// export async function getAllLegalServices() {
//   try {
//     return await serverFetch('/services');
//   } catch (error) {
//     return []; 
//   }
// }

// /**
//  * ACTION: Modify an existing service outline by its unique database ID
//  */
// export async function updateLegalService(id, updatedFields) {
//   return serverMutation(`/services/${id}`, 'PUT', updatedFields);
// }

// /**
//  * ACTION: Remove a legal service option completely
//  */
// export async function deleteLegalService(id) {
//   return serverMutation(`/services/${id}`, 'DELETE');
// }

// *************************************************************

// import { serverFetch } from "../core/server";

// /**
//  * ডাটাবেজ থেকে সমস্ত লিগ্যাল সার্ভিস রিয়েল-টাইমে নিয়ে আসার অ্যাকশন
//  */
// export async function getAllLegalServices() {
//   try {
//     return await serverFetch('/api/services');
//   } catch (error) {
//     console.error("Fetch Error on path /api/services:", error);
//     return [];
//   }
// }

// /**
//  * নতুন লিগ্যাল সার্ভিস প্রফেশনাল ডাটাবেজে যুক্ত করার অ্যাকশন
//  */
// export async function createLegalService(serviceData) {
//   try {
//     return await serverFetch('/api/services', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(serviceData),
//     });
//   } catch (error) {
//     console.error("Error creating legal service:", error);
//     throw error;
//   }
// }

// /**
//  * সুনির্দিষ্ট সার্ভিস আইডি ধরে ডেটা আপডেট বা ম্যুটেশন করার অ্যাকশন
//  */
// export async function updateLegalService(id, updatedData) {
//   try {
//     return await serverFetch(`/api/services/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updatedData),
//     });
//   } catch (error) {
//     console.error(`Error updating legal service with ID ${id}:`, error);
//     throw error;
//   }
// }

// /**
//  * সুনির্দিষ্ট লিগ্যাল সার্ভিস কালেকশন থেকে ডিলিট করার অ্যাকশন
//  */
// export async function deleteLegalService(id) {
//   try {
//     return await serverFetch(`/api/services/${id}`, {
//       method: 'DELETE',
//     });
//   } catch (error) {
//     console.error(`Error deleting legal service with ID ${id}:`, error);
//     throw error;
//   }
// }

// ***********************

import { serverFetch, serverMutation } from "../core/server";

/**
 * 📋 ডাটাবেজ থেকে সমস্ত লিগ্যাল সার্ভিস রিয়েল-টাইমে নিয়ে আসার অ্যাকশন
 * (যদি ব্যাকএন্ডে এই রুটটি প্রোটেক্টেড থাকে তবে ২য় প্যারামিটার true পাস করুন)
 */
export async function getAllLegalServices() {
  try {
    return await serverFetch('/api/services');
  } catch (error) {
    console.error("Fetch Error on path /api/services:", error);
    return [];
  }
}

/**
 * ➕ নতুন লিগ্যাল সার্ভিস প্রফেশনাল ডাটাবেজে যুক্ত করার অ্যাকশন
 */
export async function createLegalService(serviceData) {
  try {
    // 🔐 serverMutation স্বয়ংক্রিয়ভাবে POST মেথড, হেডার এবং সেশন টোকেন ইনজেক্ট করবে
    return await serverMutation('/api/services', 'POST', serviceData);
  } catch (error) {
    console.error("Error creating legal service:", error);
    throw error;
  }
}

/**
 * 🔄 সুনির্দিষ্ট সার্ভিস আইডি ধরে ডেটা আপডেট বা ম্যুটেশন করার অ্যাকশন
 */
export async function updateLegalService(id, updatedData) {
  try {
    // 🔐 PUT মেথডের মাধ্যমে ডেটা আপডেট ও সেশন ভেরিফিকেশন
    return await serverMutation(`/api/services/${id}`, 'PUT', updatedData);
  } catch (error) {
    console.error(`Error updating legal service with ID ${id}:`, error);
    throw error;
  }
}

/**
 * 🗑️ সুনির্দিষ্ট লিগ্যাল সার্ভিস কালেকশন থেকে ডিলিট করার অ্যাকশন
 */
export async function deleteLegalService(id) {
  try {
    // 🔐 DELETE মেথডের মাধ্যমে সার্ভিস রিমুভ ও সেশন ভেরিফিকেশন
    return await serverMutation(`/api/services/${id}`, 'DELETE');
  } catch (error) {
    console.error(`Error deleting legal service with ID ${id}:`, error);
    throw error;
  }
}