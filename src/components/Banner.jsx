// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Scale, ShieldCheck, Briefcase, FileText, ChevronLeft, ChevronRight } from 'lucide-react';

// const bannerSlides = [
//   {
//     id: 1,
//     icon: <Scale className="w-16 h-16 text-gold-500 text-amber-500 mb-4" />,
//     title: "Precision in Legal Excellence",
//     subtitle: "Navigating complex corporate, financial, and civil law landscapes with elite strategic mastery.",
//     cta: "Schedule a Consultation",
//     bgGradient: "from-slate-900 via-indigo-950 to-slate-900"
//   },
//   {
//     id: 2,
//     icon: <ShieldCheck className="w-16 h-16 text-amber-500 mb-4" />,
//     title: "Uncompromising Asset Protection",
//     subtitle: "Securing corporate foundations, proprietary intellectual property, and high-stakes investments.",
//     cta: "Explore Our Solutions",
//     bgGradient: "from-neutral-900 via-slate-950 to-neutral-900"
//   },
//   {
//     id: 3,
//     icon: <Briefcase className="w-16 h-16 text-amber-500 mb-4" />,
//     title: "Strategic Corporate Counsel",
//     subtitle: "Advancing commercial breakthroughs with comprehensive compliance risk mitigation framework designs.",
//     cta: "Meet Our Partners",
//     bgGradient: "from-blue-950 via-slate-900 to-indigo-950"
//   }
// ];

// export default function Banner() {
//   const [current, setCurrent] = useState(0);

//   // Automatic rotation mechanism (Swaps slide every 6 seconds)
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1));
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   const nextSlide = () => setCurrent((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1));
//   const prevSlide = () => setCurrent((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1));

//   return (
//     <section className="relative w-full h-[600px] overflow-hidden bg-slate-950 text-white">
      
//       {/* Slides Container Wrapper */}
//       <div className="relative w-full h-full">
//         {bannerSlides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`absolute inset-0 w-full h-full bg-gradient-to-r ${slide.bgGradient} flex items-center justify-center transition-all duration-1000 ease-in-out ${
//               index === current ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-4 -z-10'
//             }`}
//           >
//             {/* Subtle Overlay Grid Vector texture pattern for legal premium tone */}
//             <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
            
//             {/* Slide Content Layout */}
//             <div className="relative z-20 max-w-4xl mx-auto text-center px-6 flex flex-col items-center">
//               <div className="animate-fade-in-down transition-transform duration-700">
//                 {slide.icon}
//               </div>
//               <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-wide font-bold mb-4 drop-shadow-md text-gray-100">
//                 {slide.title}
//               </h1>
//               <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-light mb-8 leading-relaxed">
//                 {slide.subtitle}
//               </p>
//               <button className="px-8 py-3.5 text-sm uppercase tracking-widest font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded shadow-lg transform active:scale-95 transition-all text-slate-950">
//                 {slide.cta}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Manual Left/Right Nav Arrows */}
//       <button 
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full border border-slate-700 bg-slate-900/60 text-slate-400 hover:text-amber-500 hover:bg-slate-900 transition-all focus:outline-none"
//       >
//         <ChevronLeft className="w-6 h-6" />
//       </button>
//       <button 
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full border border-slate-700 bg-slate-900/60 text-slate-400 hover:text-amber-500 hover:bg-slate-900 transition-all focus:outline-none"
//       >
//         <ChevronRight className="w-6 h-6" />
//       </button>

//       {/* Slide Navigation Pagination Indicators dots */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
//         {bannerSlides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
//               index === current ? 'w-8 bg-amber-500' : 'w-2 bg-slate-600 hover:bg-slate-500'
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// ***************************

// 'use client';

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Scale, ShieldCheck, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';

// const bannerSlides = [
//   {
//     id: 1,
//     icon: <Scale className="w-16 h-16 text-amber-500 mb-4" />,
//     title: "Find & Hire Expert Legal Counsel",
//     subtitle: "Navigating complex corporate, financial, and civil law landscapes with elite strategic mastery.",
//     cta: "Browse Lawyers",
//     link: "/browse-lawyers",
//     bgGradient: "from-slate-900 via-indigo-950 to-slate-900"
//   },
//   {
//     id: 2,
//     icon: <ShieldCheck className="w-16 h-16 text-amber-500 mb-4" />,
//     title: "Uncompromising Asset Protection",
//     subtitle: "Securing corporate foundations, proprietary intellectual property, and high-stakes investments.",
//     cta: "Explore Our Solutions",
//     link: "/browse-lawyers",
//     bgGradient: "from-neutral-900 via-slate-950 to-neutral-900"
//   },
//   {
//     id: 3,
//     icon: <Briefcase className="w-16 h-16 text-amber-500 mb-4" />,
//     title: "Strategic Corporate Counsel",
//     subtitle: "Advancing commercial breakthroughs with comprehensive compliance risk mitigation framework designs.",
//     cta: "Meet Our Partners",
//     link: "/browse-lawyers",
//     bgGradient: "from-blue-950 via-slate-900 to-indigo-950"
//   }
// ];

// export default function Banner() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1));
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   const nextSlide = () => setCurrent((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1));
//   const prevSlide = () => setCurrent((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1));

//   return (
//     <section className="relative w-full h-[600px] overflow-hidden bg-slate-950 text-white">
//       <div className="relative w-full h-full">
//         {bannerSlides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`absolute inset-0 w-full h-full bg-gradient-to-r ${slide.bgGradient} flex items-center justify-center transition-all duration-1000 ease-in-out ${
//               index === current ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-4 -z-10'
//             }`}
//           >
//             <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
            
//             <div className="relative z-20 max-w-4xl mx-auto text-center px-6 flex flex-col items-center">
//               <div className="animate-fade-in-down transition-transform duration-700">
//                 {slide.icon}
//               </div>
//               <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-wide font-bold mb-4 drop-shadow-md text-gray-100">
//                 {slide.title}
//               </h1>
//               <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-light mb-8 leading-relaxed">
//                 {slide.subtitle}
//               </p>
//               <Link href={slide.link}>
//                 <button className="px-8 py-3.5 text-sm uppercase tracking-widest font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded shadow-lg transform active:scale-95 transition-all text-slate-950">
//                   {slide.cta}
//                 </button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>

//       <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full border border-slate-700 bg-slate-900/60 text-slate-400 hover:text-amber-500 hover:bg-slate-900 transition-all focus:outline-none">
//         <ChevronLeft className="w-6 h-6" />
//       </button>
//       <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full border border-slate-700 bg-slate-900/60 text-slate-400 hover:text-amber-500 hover:bg-slate-900 transition-all focus:outline-none">
//         <ChevronRight className="w-6 h-6" />
//       </button>

//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
//         {bannerSlides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
//               index === current ? 'w-8 bg-amber-500' : 'w-2 bg-slate-600 hover:bg-slate-500'
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// ***************************************

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Scale, ShieldCheck, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';

const bannerSlides = [
  {
    id: 1,
    icon: <Scale className="w-16 h-16 text-amber-500 mb-4" />,
    title: "Find & Hire Expert Legal Counsel",
    subtitle: "Navigating complex corporate, financial, and civil law landscapes with elite strategic mastery.",
    cta: "Browse Lawyers",
    type: "link",
    link: "/browse-lawyers",
    bgGradient: "from-slate-900 via-indigo-950 to-slate-900"
  },
  {
    id: 2,
    icon: <ShieldCheck className="w-16 h-16 text-amber-500 mb-4" />,
    title: "Uncompromising Asset Protection",
    subtitle: "Securing corporate foundations, proprietary intellectual property, and high-stakes investments.",
    cta: "Explore Our Solutions",
    type: "scroll",
    targetId: "legal-categories",
    bgGradient: "from-neutral-900 via-slate-950 to-neutral-900"
  },
  {
    id: 3,
    icon: <Briefcase className="w-16 h-16 text-amber-500 mb-4" />,
    title: "Strategic Corporate Counsel",
    subtitle: "Advancing commercial breakthroughs with comprehensive compliance risk mitigation framework designs.",
    cta: "Meet Our Partners",
    type: "scroll",
    targetId: "top-experts",
    bgGradient: "from-blue-950 via-slate-900 to-indigo-950"
  }
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1));

  // 🖱️ স্মুথ স্ক্রলিং হ্যান্ডলার ফাংশন
  const handleScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-slate-950 text-white">
      <div className="relative w-full h-full">
        {bannerSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full bg-gradient-to-r ${slide.bgGradient} flex items-center justify-center transition-all duration-1000 ease-in-out ${
              index === current ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-4 -z-10'
            }`}
          >
            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
            
            <div className="relative z-20 max-w-4xl mx-auto text-center px-6 flex flex-col items-center">
              <div className="animate-fade-in-down transition-transform duration-700">
                {slide.icon}
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-wide font-bold mb-4 drop-shadow-md text-gray-100">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-light mb-8 leading-relaxed">
                {slide.subtitle}
              </p>

              {/* 🎯 কন্ডিশনাল বাটন রেন্ডারিং */}
              {slide.type === "link" ? (
                <Link href={slide.link}>
                  <button className="px-8 py-3.5 text-sm uppercase tracking-widest font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded shadow-lg transform active:scale-95 transition-all text-slate-950">
                    {slide.cta}
                  </button>
                </Link>
              ) : (
                <button 
                  onClick={() => handleScroll(slide.targetId)}
                  className="px-8 py-3.5 text-sm uppercase tracking-widest font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded shadow-lg transform active:scale-95 transition-all text-slate-950"
                >
                  {slide.cta}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full border border-slate-700 bg-slate-900/60 text-slate-400 hover:text-amber-500 hover:bg-slate-900 transition-all focus:outline-none">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full border border-slate-700 bg-slate-900/60 text-slate-400 hover:text-amber-500 hover:bg-slate-900 transition-all focus:outline-none">
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
              index === current ? 'w-8 bg-amber-500' : 'w-2 bg-slate-600 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>
    </section>
  );
}