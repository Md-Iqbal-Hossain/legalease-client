import { requireRole } from '@/lib/core/session';
import React from 'react';

const LawyerLayout = async ({ children }) => {
    // 🔒 নিশ্চিত করবে শুধুমাত্র 'lawyer' রোলের ইউজাররাই এই সেগমেন্টে ঢুকতে পারবে
    await requireRole('lawyer');
    
    return <>{children}</>;
};

export default LawyerLayout;