'use server'

import { serverFetch } from "../core/server";

// ১. সমস্ত আইনজীবীদের তালিকা নিয়ে আসা (ফিল্টারিং সহ)
export const getLawyers = async (specialty = '') => {
  const url = specialty ? `/api/lawyers?specialty=${specialty}` : '/api/lawyers';
  return serverFetch(url);
};

// ২. নির্দিষ্ট একজন আইনজীবীর বিস্তারিত তথ্য আইডি দিয়ে বের করা
export const getLawyerById = async (id) => {
  return serverFetch(`/api/lawyers/${id}`);
};