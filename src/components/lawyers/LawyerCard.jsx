// import React from "react";
// import { Card, Button } from "@heroui/react"; // আপনার হিরোইউআই ইমপোর্ট
// import { MapPin, Briefcase, DollarSign, Star, ArrowRight } from "lucide-react";
// import Link from "next/link";

// export default function LawyerCard({ lawyer }) {
//   if (!lawyer) return null;

//   // MongoDB ObjectId হ্যান্ডেল করার জন্য সেফ আইডি এক্সট্র্যাকশন
//   const lawyerId = lawyer._id?.$oid || lawyer._id;

//   return (
//     <Card className="p-6 w-full max-w-[440px] border-none bg-zinc-900 text-zinc-100 rounded-[32px] shadow-2xl backdrop-blur-md">
      
//       {/* Header: আইনজীবী প্রোফাইল ছবি, নাম ও রেটিং */}
//       <Card.Header className="flex flex-col items-start gap-4 p-0 pb-3">
//         <div className="flex justify-between items-center w-full">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-full flex items-center justify-center font-bold text-sm">
//               {lawyer.name ? lawyer.name.charAt(0) : "L"}
//             </div>
//             <span className="text-sm font-medium text-zinc-400">Verified Legal Expert</span>
//           </div>
          
//           {/* Rating Badge */}
//           {lawyer.rating && (
//             <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
//               <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
//               <span className="text-xs font-semibold text-amber-400">{lawyer.rating}</span>
//             </div>
//           )}
//         </div>
        
//         <div>
//           <h3 className="text-2xl font-serif font-semibold tracking-tight text-white leading-tight">
//             {lawyer.name}
//           </h3>
//           <p className="text-amber-500 text-sm font-medium mt-0.5">{lawyer.specialty || "General Practice"}</p>
//         </div>
        
//         {lawyer.bio && (
//           <p className="text-sm text-zinc-400 line-clamp-2 mt-1">
//             {lawyer.bio}
//           </p>
//         )}
//       </Card.Header>

//       {/* Content: ব্যাজ ও প্রফেশনাল মেটেরিয়ালস */}
//       <Card.Body className="flex flex-col gap-4 p-0 py-4">
//         <div className="flex flex-wrap gap-2">
//           {/* Location Badge */}
//           {lawyer.location && (
//             <div className="flex items-center gap-2 bg-zinc-800/60 px-4 py-2 rounded-full border border-zinc-800">
//               <MapPin className="text-amber-500 w-4 h-4" />
//               <span className="text-sm font-medium text-zinc-200">{lawyer.location}</span>
//             </div>
//           )}

//           {/* Experience Badge */}
//           {lawyer.experience && (
//             <div className="flex items-center gap-2 bg-zinc-800/60 px-4 py-2 rounded-full border border-zinc-800">
//               <Briefcase className="text-amber-500 w-4 h-4" />
//               <span className="text-sm font-medium text-zinc-200">{lawyer.experience} Exp</span>
//             </div>
//           )}

//           {/* Hourly Rate Badge */}
//           {lawyer.hourlyRate && (
//             <div className="flex items-center gap-1.5 bg-zinc-800/60 px-4 py-2 rounded-full border border-zinc-800">
//               <div className="bg-amber-500/20 rounded-full w-5 h-5 flex items-center justify-center">
//                 <DollarSign className="text-amber-500 w-3 h-3" />
//               </div>
//               <span className="text-sm font-medium text-zinc-200">${lawyer.hourlyRate} / hr</span>
//             </div>
//           )}
//         </div>

//         {/* Requirements / Core Skills */}
//         {lawyer.languages && (
//           <div className="text-xs text-zinc-500 border-t border-zinc-800/60 pt-3">
//             <p><strong className="text-zinc-400">Languages:</strong> {lawyer.languages.join(", ")}</p>
//           </div>
//         )}
//       </Card.Body>

//       {/* Footer: অ্যাকশন বাটন */}
//       <Card.Footer className="p-0 pt-2">
//         <Link
//           href={`/lawyers/${lawyerId}`}
//           className="group flex justify-start items-center gap-2 text-sm font-medium text-white hover:text-amber-400 transition-colors duration-200"
//         >
//           View Full Profile
//           <ArrowRight className="group-hover:translate-x-1 text-zinc-500 group-hover:text-amber-400 w-4 h-4 transition-transform duration-200" />
//         </Link>
//       </Card.Footer>

//     </Card>
//   );
// }

// ************************************************************************


// import React from "react";
// // HeroUI এর সঠিক কম্পোনেন্ট ইম্পোর্ট মেথড
// import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react"; 
// import { MapPin, Briefcase, DollarSign, Star, ArrowRight } from "lucide-react";
// import Link from "next/link";

// export default function LawyerCard({ lawyer }) {
//   if (!lawyer) return null;

//   // MongoDB ObjectId হ্যান্ডেল করার জন্য সেফ আইডি এক্সট্র্যাকশন
//   const lawyerId = lawyer._id?.$oid || lawyer._id;

//   return (
//     <Card className="p-6 w-full max-w-[440px] border-none bg-zinc-900 text-zinc-100 rounded-[32px] shadow-2xl backdrop-blur-md">
      
//       {/* Header: প্রোফাইল ট্র্যাকার, নাম ও রেটিং */}
//       <CardHeader className="flex flex-col items-start gap-4 p-0 pb-3">
//         <div className="flex justify-between items-center w-full">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-full flex items-center justify-center font-bold text-sm">
//               {lawyer.name ? lawyer.name.charAt(0) : "L"}
//             </div>
//             <span className="text-sm font-medium text-zinc-400">Verified Legal Expert</span>
//           </div>
          
//           {/* Rating Badge */}
//           {lawyer.rating && (
//             <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
//               <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
//               <span className="text-xs font-semibold text-amber-400">{lawyer.rating}</span>
//             </div>
//           )}
//         </div>
        
//         <div className="w-full">
//           <h3 className="text-2xl font-serif font-semibold tracking-tight text-white leading-tight">
//             {lawyer.name}
//           </h3>
//           <p className="text-amber-500 text-sm font-medium mt-0.5">{lawyer.specialty || "General Practice"}</p>
//         </div>
        
//         {lawyer.bio && (
//           <p className="text-sm text-zinc-400 line-clamp-2 mt-1">
//             {lawyer.bio}
//           </p>
//         )}
//       </CardHeader>

//       {/* Body: ব্যাজ ও প্রফেশনাল মেটেরিয়ালস */}
//       <CardBody className="flex flex-col gap-4 p-0 py-4 overflow-visible">
//         <div className="flex flex-wrap gap-2">
//           {/* Location Badge */}
//           {lawyer.location && (
//             <div className="flex items-center gap-2 bg-zinc-800/60 px-4 py-2 rounded-full border border-zinc-800">
//               <MapPin className="text-amber-500 w-4 h-4" />
//               <span className="text-sm font-medium text-zinc-200">{lawyer.location}</span>
//             </div>
//           )}

//           {/* Experience Badge */}
//           {lawyer.experience && (
//             <div className="flex items-center gap-2 bg-zinc-800/60 px-4 py-2 rounded-full border border-zinc-800">
//               <Briefcase className="text-amber-500 w-4 h-4" />
//               <span className="text-sm font-medium text-zinc-200">{lawyer.experience} Exp</span>
//             </div>
//           )}

//           {/* Hourly Rate Badge */}
//           {lawyer.hourlyRate && (
//             <div className="flex items-center gap-1.5 bg-zinc-800/60 px-4 py-2 rounded-full border border-zinc-800">
//               <div className="bg-amber-500/20 rounded-full w-5 h-5 flex items-center justify-center">
//                 <DollarSign className="text-amber-500 w-3 h-3" />
//               </div>
//               <span className="text-sm font-medium text-zinc-200">${lawyer.hourlyRate} / hr</span>
//             </div>
//           )}
//         </div>

//         {/* Languages Core Skills */}
//         {lawyer.languages && (
//           <div className="text-xs text-zinc-500 border-t border-zinc-800/60 pt-3">
//             <p><strong className="text-zinc-400">Languages:</strong> {lawyer.languages.join(", ")}</p>
//           </div>
//         )}
//       </CardBody>

//       {/* Footer: অ্যাকশন বাটন */}
//       <CardFooter className="p-0 pt-2">
//         <Link
//           href={`/lawyers/${lawyerId}`}
//           className="group flex justify-start items-center gap-2 text-sm font-medium text-white hover:text-amber-400 transition-colors duration-200"
//         >
//           View Full Profile
//           <ArrowRight className="group-hover:translate-x-1 text-zinc-500 group-hover:text-amber-400 w-4 h-4 transition-transform duration-200" />
//         </Link>
//       </CardFooter>

//     </Card>
//   );
// }

// **************************************************************

import React from "react";
import { Card } from "@heroui/react"; // শুধুমাত্র মূল Card কম্পোনেন্ট ইম্পোর্ট করছি
import { MapPin, Briefcase, DollarSign, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LawyerCard({ lawyer }) {
  if (!lawyer) return null;

  // MongoDB ObjectId হ্যান্ডেল করার জন্য সেফ আইডি এক্সট্র্যাকশন
  const lawyerId = lawyer._id?.$oid || lawyer._id;

  return (
    <Card className="p-6 w-full max-w-[440px] border-none bg-zinc-900 text-zinc-100 rounded-[32px] shadow-2xl backdrop-blur-md">
      
      {/* Header Area (Pure Tailwind `div` layout instead of HeroUI Sub-components) */}
      <div className="flex flex-col items-start gap-4 pb-3 border-b border-zinc-800/50">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-full flex items-center justify-center font-bold text-sm">
              {lawyer.name ? lawyer.name.charAt(0) : "L"}
            </div>
            <span className="text-sm font-medium text-zinc-400">Verified Legal Expert</span>
          </div>
          
          {/* Rating Badge */}
          {lawyer.rating && (
            <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span className="text-xs font-semibold text-amber-400">{lawyer.rating}</span>
            </div>
          )}
        </div>
        
        <div className="w-full">
          <h3 className="text-2xl font-serif font-semibold tracking-tight text-white leading-tight">
            {lawyer.name}
          </h3>
          <p className="text-amber-500 text-sm font-medium mt-0.5">{lawyer.specialty || "General Practice"}</p>
        </div>
        
        {lawyer.bio && (
          <p className="text-sm text-zinc-400 line-clamp-2 mt-1">
            {lawyer.bio}
          </p>
        )}
      </div>

      {/* Body Area */}
      <div className="flex flex-col gap-4 py-4">
        <div className="flex flex-wrap gap-2">
          {/* Location Badge */}
          {lawyer.location && (
            <div className="flex items-center gap-2 bg-zinc-800/60 px-4 py-2 rounded-full border border-zinc-800">
              <MapPin className="text-amber-500 w-4 h-4" />
              <span className="text-sm font-medium text-zinc-200">{lawyer.location}</span>
            </div>
          )}

          {/* Experience Badge */}
          {lawyer.experience && (
            <div className="flex items-center gap-2 bg-zinc-800/60 px-4 py-2 rounded-full border border-zinc-800">
              <Briefcase className="text-amber-500 w-4 h-4" />
              <span className="text-sm font-medium text-zinc-200">{lawyer.experience} Exp</span>
            </div>
          )}

          {/* Hourly Rate Badge */}
          {lawyer.hourlyRate && (
            <div className="flex items-center gap-1.5 bg-zinc-800/60 px-4 py-2 rounded-full border border-zinc-800">
              <div className="bg-amber-500/20 rounded-full w-5 h-5 flex items-center justify-center">
                <DollarSign className="text-amber-500 w-3 h-3" />
              </div>
              <span className="text-sm font-medium text-zinc-200">${lawyer.hourlyRate} / hr</span>
            </div>
          )}
        </div>

        {/* Languages & Core Skills */}
        {lawyer.languages && (
          <div className="text-xs text-zinc-500 border-t border-zinc-800/60 pt-3">
            <p><strong className="text-zinc-400">Languages:</strong> {lawyer.languages.join(", ")}</p>
          </div>
        )}
      </div>

      {/* Footer Area */}
      <div className="pt-2 flex items-center">
        <Link
          href={`/lawyers/${lawyerId}`}
          className="group flex justify-start items-center gap-2 text-sm font-medium text-white hover:text-amber-400 transition-colors duration-200"
        >
          View Full Profile
          <ArrowRight className="group-hover:translate-x-1 text-zinc-500 group-hover:text-amber-400 w-4 h-4 transition-transform duration-200" />
        </Link>
      </div>

    </Card>
  );
}