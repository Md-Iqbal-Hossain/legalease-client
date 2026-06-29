// 'use client';
// import React from 'react';
// import { useSession} from '@/lib/auth-client';

// const LawyerDashboardHomePage = () => {

//     const {data: session, isPending} = useSession();

//     if(isPending){
//         return <div>Loading...</div>
//     }

//     const user = session?.user;

//     return (
//         <div>
//             <h2 className='text-4xl'>Welcome back, {user?.name}</h2>
//         </div>
//     );
// };

// export default LawyerDashboardHomePage;

// ******************************

import React from 'react';

const LawyerDashboardHome = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800">Lawyer Dashboard Home Page</h2>
      <p className="text-gray-500 mt-2">Manage your professional legal profile, check client requests, and track premium status.</p>
    </div>
  );
};

export default LawyerDashboardHome;