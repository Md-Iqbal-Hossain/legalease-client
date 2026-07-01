// import Banner from "@/components/Banner";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <Banner></Banner>
//     </div>
//   );
// }


// ***********************************

import Banner from "@/components/Banner";
import FeaturedLawyers from "@/components/FeaturedLawyers";
import TopExperts from "@/components/TopExperts";
import LegalCategories from "@/components/LegalCategories";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-[#121212] text-slate-200 pb-20">
      {/* ১. স্লাইডার ব্যানার */}
      <Banner />

      {/* ২. ডাইনামিক ফিচারড লইয়ার্স */}
      <FeaturedLawyers />

      {/* ৩. টপ লিগ্যাল এক্সপার্টস (Extra Section 1) */}
      <TopExperts />

      {/* ৪. ক্যাটাগরি গ্রিড (Extra Section 2) */}
      <LegalCategories />
    </div>
  );
}