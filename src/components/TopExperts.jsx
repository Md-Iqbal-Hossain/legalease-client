// "use client";

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { getLawyers } from "@/lib/api/lawyers";

// export default function TopExperts() {
//   const [topExperts, setTopExperts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function loadExperts() {
//       try {
//         const allLawyers = await getLawyers();
//         if (Array.isArray(allLawyers)) {
//           // এক্সট্রা সেকশন: টপ ৩ জন আইনজীবী
//           setTopExperts(allLawyers.slice(0, 3));
//         }
//       } catch (err) {
//         console.error("Failed to load top experts:", err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     loadExperts();
//   }, []);

//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 w-full">
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
//         className="text-center md:text-left mb-10 border-b border-slate-800 pb-4"
//       >
//         <h2 className="text-2xl font-serif font-bold text-gray-100">Top Legal Experts</h2>
//         <p className="text-sm text-slate-400 mt-1">Highly experienced elite counsels with highest client conversion rates.</p>
//       </motion.div>

//       {loading ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {[...Array(3)].map((_, i) => (
//             <div key={i} className="animate-pulse bg-slate-900/60 h-20 rounded-xl border border-slate-800"></div>
//           ))}
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {topExperts.map((lawyer, index) => (
//             <div key={lawyer._id || index} className="bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 p-4 rounded-xl flex items-center gap-4 shadow-lg">
//               <div className="w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-bold text-amber-500 text-sm">
//                 #{index + 1}
//               </div>
//               <img 
//                 src={lawyer.image || "https://i.ibb.co/placeholder.jpg"} 
//                 alt={lawyer.name} 
//                 className="w-12 h-12 rounded-full object-cover border border-slate-800"
//               />
//               <div>
//                 <h4 className="font-semibold text-gray-200 text-sm">{lawyer.name}</h4>
//                 <p className="text-xs text-slate-400">{lawyer.specialty || "Senior Advocate"}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }

// ****************************************

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getLawyers } from "@/lib/api/lawyers";

export default function TopExperts() {
  const [topExperts, setTopExperts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadExperts() {
      try {
        const allLawyers = await getLawyers();
        if (Array.isArray(allLawyers)) {
          // এক্সট্রা সেকশন: ডাটাবেজ থেকে প্রথম ৩ জন আইনজীবী নেওয়া হলো
          setTopExperts(allLawyers.slice(0, 3));
        }
      } catch (err) {
        console.error("Failed to load top experts:", err);
      } finally {
        setLoading(false);
      }
    }
    loadExperts();
  }, []);

  // 🧠 নামের উপর ভিত্তি করে জেন্ডার ডিটেক্ট করার জন্য কাস্টম হেল্পার ফাংশন
  const detectGenderByName = (name = "") => {
    const lowerName = name.toLowerCase();
    const femaleIndicators = ["ms.", "mrs.", "miss", "begum", "sultana", "fatima", "aisha", "khatun"];
    const maleIndicators = ["md.", "mr.", "mohammad", "muhammad", "hossain", "ahmed", "iqbal", "rahman"];

    if (femaleIndicators.some(indicator => lowerName.includes(indicator))) {
      return "female";
    }
    if (maleIndicators.some(indicator => lowerName.includes(indicator))) {
      return "male";
    }
    return "neutral";
  };

  // প্রফেশনাল আনস্প্ল্যাশ ইমেজের কালেকশন পুল
  const maleImages = [
    "photo-1560250097-0b93528c311a", 
    "photo-1519085360753-af0119f7cbe7", 
    "photo-1507003211169-0a1dd7228f2d", 
  ];

  const femaleImages = [
    "photo-1573496359142-b8d87734a5a2", 
    "photo-1580489944761-15a19d654956", 
    "photo-1567532939604-b6b5b0db2604", 
  ];

  return (
    <section id="top-experts" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="text-center md:text-left mb-10 border-b border-slate-800 pb-4"
      >
        <h2 className="text-2xl font-serif font-bold text-gray-100">Top Legal Experts</h2>
        <p className="text-sm text-slate-400 mt-1">Highly experienced elite counsels with highest client conversion rates.</p>
      </motion.div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="animate-pulse bg-slate-900/60 h-20 rounded-xl border border-slate-800"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topExperts.map((lawyer, index) => {
            // ১. জেন্ডার ডিটেক্ট করা
            const gender = detectGenderByName(lawyer.name);
            let selectedImageId = "";

            if (gender === "female") {
              selectedImageId = femaleImages[index % femaleImages.length];
            } else if (gender === "male") {
              selectedImageId = maleImages[index % maleImages.length];
            } else {
              selectedImageId = index % 2 === 0 ? maleImages[index % maleImages.length] : femaleImages[index % femaleImages.length];
            }

            const fallbackRandomImg = `https://images.unsplash.com/${selectedImageId}?auto=format&fit=crop&q=80&w=150&h=150`;
            
            // ২. ইমেজ প্রপস সিলেকশন
            const lawyerImg = lawyer.image || lawyer.imageUrl || fallbackRandomImg;

            return (
              <div key={lawyer._id || index} className="bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 p-4 rounded-xl flex items-center gap-4 shadow-lg hover:border-amber-500/30 transition-all">
                <div className="w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-bold text-amber-500 text-sm shrink-0">
                  #{index + 1}
                </div>
                <img 
                  src={lawyerImg} 
                  alt={lawyer.name} 
                  className="w-14 h-14 rounded-full object-cover border border-slate-800 bg-slate-950 shrink-0"
                  onError={(e) => {
                    e.target.src = fallbackRandomImg;
                  }}
                />
                <div>
                  <h4 className="font-semibold text-gray-200 text-sm">{lawyer.name}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{lawyer.specialty || "Senior Advocate"}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}