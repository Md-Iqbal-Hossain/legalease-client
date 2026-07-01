// import { requireRole } from '@/lib/core/session';
// import React from 'react';

// const LawyerLayout = async ({ children }) => {
//     // 🔒 নিশ্চিত করবে শুধুমাত্র 'lawyer' রোলের ইউজাররাই এই সেগমেন্টে ঢুকতে পারবে
//     await requireRole('lawyer');
    
//     return <>{children}</>;
// };

// export default LawyerLayout;

// ********************************************

import { requireRole } from '@/lib/core/serverSession'; // 🔐 নতুন এবং সঠিক সুরক্ষিত ফাইল থেকে ইম্পোর্ট করা হলো
import React from 'react';

const LawyerLayout = async ({ children }) => {
  // 🛡️ সার্ভার-সাইড সিকিউরিটি গার্ড: নিশ্চিত করবে ইউজার শুধুমাত্র 'lawyer' রোলধারী
  await requireRole('lawyer');

  return <>{children}</>;
};

export default LawyerLayout;