// import { requireRole } from '@/lib/core/session';
// import React from 'react';

// const ClientLayout = async ({ children }) => {
//     // 🔒 নিশ্চিত করবে শুধুমাত্র 'client' রোলের ইউজাররাই এই সেগমেন্টে ঢুকতে পারবে
//     await requireRole('client');
    
//     return <>{children}</>;
// };

// export default ClientLayout;

// *******************************************

import { requireRole } from '@/lib/core/serverSession'; // 🔐 সুরক্ষিত সার্ভার সেশন ফাইল থেকে ইম্পোর্ট করা হলো
import React from 'react';

const ClientLayout = async ({ children }) => {
    // 🔒 নিশ্চিত করবে শুধুমাত্র 'client' রোলের ইউজাররাই এই সেগমেন্টে ঢুকতে পারবে
    await requireRole('client');
    
    return <>{children}</>;
};

export default ClientLayout;