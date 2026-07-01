// "use client";

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { getLawyers } from "@/lib/api/lawyers";

// export default function FeaturedLawyers() {
//   const [featuredLawyers, setFeaturedLawyers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function loadFeatured() {
//       try {
//         const allLawyers = await getLawyers();
//         if (Array.isArray(allLawyers)) {
//           // ডাটাবেজ থেকে লেটেস্ট ৬ জন আইনজীবী ফিল্টার
//           setFeaturedLawyers(allLawyers.slice(0, 6));
//         }
//       } catch (err) {
//         console.error("Failed to load featured lawyers:", err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     loadFeatured();
//   }, []);

//   const fadeInVariant = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
//   };

//   const containerStagger = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
//   };

//   const cardReveal = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
//   };

//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 w-full">
//       <motion.div 
//         initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariant}
//         className="text-center md:text-left mb-10 border-b border-slate-800 pb-4"
//       >
//         <h2 className="text-3xl font-serif font-bold text-gray-100">
//           Featured <span className="text-amber-500">Lawyers</span>
//         </h2>
//         <p className="text-sm text-slate-400 mt-2">Our newly onboarded legal advisors ready to represent you.</p>
//       </motion.div>

//       {loading ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {[...Array(6)].map((_, i) => (
//             <div key={i} className="animate-pulse bg-slate-900/60 border border-slate-800 h-64 rounded-xl"></div>
//           ))}
//         </div>
//       ) : (
//         <motion.div 
//           variants={containerStagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
//         >
//           {featuredLawyers.map((lawyer) => (
//             <motion.div 
//               key={lawyer._id} variants={cardReveal} whileHover={{ scale: 1.02, y: -4 }}
//               className="bg-slate-900/40 border border-slate-800 p-5 rounded-xl flex flex-col justify-between hover:border-amber-500/40 transition-colors group"
//             >
//               <div className="flex items-start gap-4">
//                 <img 
//                   src={lawyer.image || "https://i.ibb.co/placeholder.jpg"} 
//                   alt={lawyer.name} 
//                   className="w-16 h-16 rounded-full object-cover border border-slate-700 shadow-md"
//                 />
//                 <div>
//                   <h3 className="font-bold text-gray-100 text-lg group-hover:text-amber-400 transition-colors">{lawyer.name}</h3>
//                   <p className="text-xs text-amber-500 font-medium mt-0.5">{lawyer.specialty || "Legal Practitioner"}</p>
//                   <p className="text-xs text-slate-400 mt-2 line-clamp-2 font-light">{lawyer.bio || "No description compiled yet."}</p>
//                 </div>
//               </div>
//               <div className="mt-6 pt-4 border-t border-slate-800/80 flex justify-between items-center text-sm">
//                 <span className="text-slate-400">Rate: <strong className="text-gray-200">${lawyer.hourlyRate || "120"}</strong>/hr</span>
//                 <Link href={`/browse-lawyers/${lawyer._id}`} className="text-amber-500 font-semibold hover:underline flex items-center gap-1">
//                   View Profile <span>→</span>
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       )}
//     </section>
//   );
// }

// **********************************

// "use client";

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { getLawyers } from "@/lib/api/lawyers";

// export default function FeaturedLawyers() {
//   const [featuredLawyers, setFeaturedLawyers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function loadFeatured() {
//       try {
//         const allLawyers = await getLawyers();
//         if (Array.isArray(allLawyers)) {
//           // 🔄 পেজ রিলোড দিলে লইয়ারদের অর্ডার র‍্যান্ডমাইজ (Shuffle) হবে
//           const randomized = [...allLawyers].sort(() => 0.5 - Math.random());
          
//           // সর্বোচ্চ ৬ জন লইয়ার ফিল্টার করে নেওয়া হলো
//           setFeaturedLawyers(randomized.slice(0, 6));
//         }
//       } catch (err) {
//         console.error("Failed to load featured lawyers:", err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     loadFeatured();
//   }, []);

//   const fadeInVariant = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
//   };

//   const containerStagger = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
//   };

//   const cardReveal = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
//   };

//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 w-full">
//       <motion.div 
//         initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariant}
//         className="text-center md:text-left mb-10 border-b border-slate-800 pb-4"
//       >
//         <h2 className="text-3xl font-serif font-bold text-gray-100">
//           Featured <span className="text-amber-500">Lawyers</span>
//         </h2>
//         <p className="text-sm text-slate-400 mt-2">Our newly onboarded legal advisors ready to represent you. (Auto-refreshes on reload)</p>
//       </motion.div>

//       {loading ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {[...Array(6)].map((_, i) => (
//             <div key={i} className="animate-pulse bg-slate-900/60 border border-slate-800 h-64 rounded-xl"></div>
//           ))}
//         </div>
//       ) : (
//         <motion.div 
//           variants={containerStagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
//         >
//           {featuredLawyers.map((lawyer, index) => {
//             // 📸 ডাইনামিক প্রফেশনাল র‍্যান্ডম ইমেজ সোর্স (Unsplash Corporate/Lawyer portrait IDs)
//             // ইনডেক্স বা লইয়ার আইডি অনুযায়ী একেকজন একেকটি চমৎকার ইউনিক ছবি পাবেন
//             const randomImageIds = [
//               "photo-1560250097-0b93528c311a", // Professional Man 1
//               "photo-1573496359142-b8d87734a5a2", // Professional Woman 1
//               "photo-1519085360753-af0119f7cbe7", // Professional Man 2
//               "photo-1580489944761-15a19d654956", // Professional Woman 2
//               "photo-1507003211169-0a1dd7228f2d", // Professional Man 3
//               "photo-1567532939604-b6b5b0db2604"  // Professional Woman 3
//             ];
            
//             const imageIndex = index % randomImageIds.length;
//             const fallbackRandomImg = `https://images.unsplash.com/${randomImageIds[imageIndex]}?auto=format&fit=crop&q=80&w=200&h=200`;

//             // যদি ডাটাবেজে ইমেজ ফিল্ড খালি থাকে, তবে এই চমৎকার প্রফেশনাল ছবিটি শো করবে
//             const lawyerImg = lawyer.image || lawyer.imageUrl || fallbackRandomImg;

//             return (
//               <motion.div 
//                 key={lawyer._id} variants={cardReveal} whileHover={{ scale: 1.02, y: -4 }}
//                 className="bg-slate-900/40 border border-slate-800 p-5 rounded-xl flex flex-col justify-between hover:border-amber-500/40 transition-colors group"
//               >
//                 <div className="flex items-start gap-4">
//                   <img 
//                     src={lawyerImg} 
//                     alt={lawyer.name} 
//                     className="w-16 h-16 rounded-full object-cover border border-slate-700 shadow-md bg-slate-950"
//                     onError={(e) => {
//                       // ইমেজ ইউআরএল কোনো কারণে ব্রোকেন হলে হ্যান্ডেল করার সেফটি মেকানিজম
//                       e.target.src = fallbackRandomImg;
//                     }}
//                   />
//                   <div>
//                     <h3 className="font-bold text-gray-100 text-lg group-hover:text-amber-400 transition-colors">{lawyer.name}</h3>
//                     <p className="text-xs text-amber-500 font-medium mt-0.5">{lawyer.specialty || "Legal Practitioner"}</p>
//                     <p className="text-xs text-slate-400 mt-2 line-clamp-2 font-light">{lawyer.bio || "No description compiled yet."}</p>
//                   </div>
//                 </div>
//                 <div className="mt-6 pt-4 border-t border-slate-800/80 flex justify-between items-center text-sm">
//                   <span className="text-slate-400">Rate: <strong className="text-gray-200">${lawyer.hourlyRate || "120"}</strong>/hr</span>
//                   <Link href={`/browse-lawyers/${lawyer._id}`} className="text-amber-500 font-semibold hover:underline flex items-center gap-1">
//                     View Profile <span>→</span>
//                   </Link>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       )}
//     </section>
//   );
// }


// **********************************************


// "use client";

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { getLawyers } from "@/lib/api/lawyers";

// export default function FeaturedLawyers() {
//   const [featuredLawyers, setFeaturedLawyers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function loadFeatured() {
//       try {
//         const allLawyers = await getLawyers();
//         if (Array.isArray(allLawyers)) {
//           // 🔄 পেজ রিলোড দিলে লইয়ারদের অর্ডার র‍্যান্ডমাইজ (Shuffle) হবে
//           const randomized = [...allLawyers].sort(() => 0.5 - Math.random());
          
//           // সর্বোচ্চ ৬ জন লইয়ার ফিল্টার করে নেওয়া হলো
//           setFeaturedLawyers(randomized.slice(0, 6));
//         }
//       } catch (err) {
//         console.error("Failed to load featured lawyers:", err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     loadFeatured();
//   }, []);

//   // 🧠 নামের উপর ভিত্তি করে জেন্ডার ডিটেক্ট করার জন্য কাস্টম হেল্পার ফাংশন
//   const detectGenderByName = (name = "") => {
//     const lowerName = name.toLowerCase();
    
//     // ফিমেল ইন্ডিকেটর কি-ওয়ার্ডস
//     const femaleIndicators = ["ms.", "mrs.", "miss", "begum", "sultana", "fatima", "aisha", "khatun"];
//     // মেল ইন্ডিকেটর কি-ওয়ার্ডস
//     const maleIndicators = ["md.", "mr.", "mohammad", "muhammad", "hossain", "ahmed", "iqbal", "rahman"];

//     if (femaleIndicators.some(indicator => lowerName.includes(indicator))) {
//       return "female";
//     }
//     if (maleIndicators.some(indicator => lowerName.includes(indicator))) {
//       return "male";
//     }
    
//     // কোনো কি-ওয়ার্ড ম্যাচ না করলে নিউট্রাল বা মিক্সড প্যাটার্ন রিটার্ন করবে
//     return "neutral";
//   };

//   const fadeInVariant = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
//   };

//   const containerStagger = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
//   };

//   const cardReveal = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
//   };

//   // প্রফেশনাল আনস্প্ল্যাশ ইমেজের কালেকশন পুল
//   const maleImages = [
//     "photo-1560250097-0b93528c311a", // Professional Man 1
//     "photo-1519085360753-af0119f7cbe7", // Professional Man 2
//     "photo-1507003211169-0a1dd7228f2d", // Professional Man 3
//   ];

//   const femaleImages = [
//     "photo-1573496359142-b8d87734a5a2", // Professional Woman 1
//     "photo-1580489944761-15a19d654956", // Professional Woman 2
//     "photo-1567532939604-b6b5b0db2604", // Professional Woman 3
//   ];

//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 w-full">
//       <motion.div 
//         initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariant}
//         className="text-center md:text-left mb-10 border-b border-slate-800 pb-4"
//       >
//         <h2 className="text-3xl font-serif font-bold text-gray-100">
//           Featured <span className="text-amber-500">Lawyers</span>
//         </h2>
//         <p className="text-sm text-slate-400 mt-2">Our newly onboarded legal advisors ready to represent you. (Gender-optimized layout)</p>
//       </motion.div>

//       {loading ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {[...Array(6)].map((_, i) => (
//             <div key={i} className="animate-pulse bg-slate-900/60 border border-slate-800 h-64 rounded-xl"></div>
//           ))}
//         </div>
//       ) : (
//         <motion.div 
//           variants={containerStagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
//         >
//           {featuredLawyers.map((lawyer, index) => {
//             // ১. জেন্ডার ডিটেক্ট করা
//             const gender = detectGenderByName(lawyer.name);
//             let selectedImageId = "";

//             // ২. জেন্ডার অনুযায়ী ইমেজ পুল থেকে ইনডেক্সিং করা
//             if (gender === "female") {
//               selectedImageId = femaleImages[index % femaleImages.length];
//             } else if (gender === "male") {
//               selectedImageId = maleImages[index % maleImages.length];
//             } else {
//               // যদি জেন্ডার ডিটেক্ট না করা যায়, তবে ইভেন/অড ইনডেক্স অনুযায়ী মিক্সড ছবি দিবে
//               selectedImageId = index % 2 === 0 ? maleImages[index % maleImages.length] : femaleImages[index % femaleImages.length];
//             }

//             const fallbackRandomImg = `https://images.unsplash.com/${selectedImageId}?auto=format&fit=crop&q=80&w=200&h=200`;
            
//             // ৩. ডাটাবেজে ইমেজ ফিল্ড ব্ল্যাঙ্ক থাকলে কন্ডিশনাল জেন্ডার ইমেজটি সেট হবে
//             const lawyerImg = lawyer.image || lawyer.imageUrl || fallbackRandomImg;

//             return (
//               <motion.div 
//                 key={lawyer._id} variants={cardReveal} whileHover={{ scale: 1.02, y: -4 }}
//                 className="bg-slate-900/40 border border-slate-800 p-5 rounded-xl flex flex-col justify-between hover:border-amber-500/40 transition-colors group"
//               >
//                 <div className="flex items-start gap-4">
//                   <img 
//                     src={lawyerImg} 
//                     alt={lawyer.name} 
//                     className="w-16 h-16 rounded-full object-cover border border-slate-700 shadow-md bg-slate-950"
//                     onError={(e) => {
//                       e.target.src = fallbackRandomImg;
//                     }}
//                   />
//                   <div>
//                     <h3 className="font-bold text-gray-100 text-lg group-hover:text-amber-400 transition-colors">{lawyer.name}</h3>
//                     <p className="text-xs text-amber-500 font-medium mt-0.5">{lawyer.specialty || "Legal Practitioner"}</p>
//                     <p className="text-xs text-slate-400 mt-2 line-clamp-2 font-light">{lawyer.bio || "No description compiled yet."}</p>
//                   </div>
//                 </div>
//                 <div className="mt-6 pt-4 border-t border-slate-800/80 flex justify-between items-center text-sm">
//                   <span className="text-slate-400">Rate: <strong className="text-gray-200">${lawyer.hourlyRate || "120"}</strong>/hr</span>
//                   <Link href={`/browse-lawyers/${lawyer._id}`} className="text-amber-500 font-semibold hover:underline flex items-center gap-1">
//                     View Profile <span>→</span>
//                   </Link>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       )}
//     </section>
//   );
// }

// ****************************************

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { getLawyers } from "@/lib/api/lawyers";

export default function FeaturedLawyers() {
  const [featuredLawyers, setFeaturedLawyers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFeatured() {
      try {
        const allLawyers = await getLawyers();
        if (Array.isArray(allLawyers) && allLawyers.length > 0) {
          // 🔄 পেজ রিলোড দিলে ১৬ জন লইয়ারের মধ্য থেকে ডেটা র‍্যান্ডমাইজ (Shuffle) হবে
          const randomized = [...allLawyers].sort(() => 0.5 - Math.random());
          
          // 🎯 Requirement: ঠিক ৬ জন আইনজীবীকে ফিল্টার করে নেওয়া হলো
          setFeaturedLawyers(randomized.slice(0, 6));
        }
      } catch (err) {
        console.error("Failed to load featured lawyers:", err);
      } finally {
        setLoading(false);
      }
    }
    loadFeatured();
  }, []);

  // 🧠 নামের উপর ভিত্তি করে জেন্ডার ডিটেক্ট করার আপগ্রেডেড হেল্পার ফাংশন
  const detectGenderByName = (name = "") => {
    const lowerName = name.toLowerCase();
    
    // আপনার ডাটাবেজের নামের প্যাটার্ন অনুযায়ী ফিমেল ও মেল ইন্ডিকেটর
    const femaleIndicators = ["ms.", "mrs.", "miss", "begum", "sultana", "fatima", "aisha", "khatun", "israt", "jahan"];
    const maleIndicators = ["md.", "mr.", "mohammad", "muhammad", "hossain", "ahmed", "iqbal", "rahman", "asif", "nazrul", "kazi", "rafiq"];

    if (femaleIndicators.some(indicator => lowerName.includes(indicator))) {
      return "female";
    }
    if (maleIndicators.some(indicator => lowerName.includes(indicator))) {
      return "male";
    }
    
    return "neutral";
  };

  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const containerStagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const cardReveal = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 w-full">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariant}
        className="text-center md:text-left mb-10 border-b border-slate-800 pb-4"
      >
        <h2 className="text-3xl font-serif font-bold text-gray-100">
          Featured <span className="text-amber-500">Lawyers</span>
        </h2>
        <p className="text-sm text-slate-400 mt-2">Our newly onboarded legal advisors ready to represent you. (Auto-refreshes 6 dynamic profiles on reload)</p>
      </motion.div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse bg-slate-900/60 border border-slate-800 h-64 rounded-xl"></div>
          ))}
        </div>
      ) : featuredLawyers.length === 0 ? (
        <div className="text-center py-10 bg-slate-900/20 border border-slate-800 rounded-xl text-slate-400 text-sm">
          No lawyers found. Please check backend connection endpoint configuration.
        </div>
      ) : (
        <motion.div 
          variants={containerStagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {featuredLawyers.map((lawyer, index) => {
            const gender = detectGenderByName(lawyer.name);
            let selectedImageId = "";

            if (gender === "female") {
              selectedImageId = femaleImages[index % femaleImages.length];
            } else if (gender === "male") {
              selectedImageId = maleImages[index % maleImages.length];
            } else {
              selectedImageId = index % 2 === 0 ? maleImages[index % maleImages.length] : femaleImages[index % femaleImages.length];
            }

            const fallbackRandomImg = `https://images.unsplash.com/${selectedImageId}?auto=format&fit=crop&q=80&w=200&h=200`;
            const lawyerImg = lawyer.image || lawyer.imageUrl || fallbackRandomImg;

            return (
              <motion.div 
                key={lawyer._id} variants={cardReveal} whileHover={{ scale: 1.02, y: -4 }}
                className="bg-slate-900/40 border border-slate-800 p-5 rounded-xl flex flex-col justify-between hover:border-amber-500/40 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <img 
                    src={lawyerImg} 
                    alt={lawyer.name} 
                    className="w-16 h-16 rounded-full object-cover border border-slate-700 shadow-md bg-slate-950"
                    onError={(e) => {
                      e.target.src = fallbackRandomImg;
                    }}
                  />
                  <div>
                    <h3 className="font-bold text-gray-100 text-lg group-hover:text-amber-400 transition-colors">{lawyer.name}</h3>
                    <p className="text-xs text-amber-500 font-medium mt-0.5">{lawyer.specialty || "Legal Practitioner"}</p>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-2 font-light">{lawyer.bio || "No description compiled yet."}</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex justify-between items-center text-sm">
                  <span className="text-slate-400">Rate: <strong className="text-gray-200">${lawyer.hourlyRate || "120"}</strong>/hr</span>
                  <Link href={`/browse-lawyers/${lawyer._id}`} className="text-amber-500 font-semibold hover:underline flex items-center gap-1">
                    View Profile <span>→</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </section>
  );
}