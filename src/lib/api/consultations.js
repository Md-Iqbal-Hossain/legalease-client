import { serverFetch } from "../core/server";

/**
 * ক্লায়েন্টের ইমেইল অ্যাড্রেস দিয়ে তার পূর্ববর্তী সমস্ত হায়ার বা কনসালটেশন হিস্ট্রি নিয়ে আসার এপিআই
 */
export async function getConsultationsByClient(clientEmail) {
  try {
    if (!clientEmail) return [];
    
    // আমাদের ব্যাকএন্ডের /api/lawyer/hirings/:email পাথের সাথে এটি কানেক্ট করবে
    // (যদি আপনার ব্যাকএন্ডে ক্লায়েন্ট এবং লইয়ার উভয়ের জন্যই এই সেম এপিআই কাজ করে)
    return await serverFetch(`/api/lawyer/hirings/${clientEmail.toLowerCase().trim()}`);
  } catch (error) {
    console.error(`Error fetching consultations for client ${clientEmail}:`, error);
    return [];
  }
}