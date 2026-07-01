"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, MapPin, DollarSign, Star, Briefcase } from "lucide-react";
import { getLawyers } from "@/lib/api/lawyers";

export default function BrowseLawyersPage() {
  const [lawyers, setLawyers] = useState([]);
  const [filteredLawyers, setFilteredLawyers] = useState([]);
  const [loading, setLoading] = useState(true);

  // ফিল্টারিং এবং সার্চিং স্টেটস
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    async function fetchLawyersData() {
      try {
        const data = await getLawyers();
        if (Array.isArray(data)) {
          setLawyers(data);
          setFilteredLawyers(data);
        }
      } catch (err) {
        console.error("Error fetching lawyers:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchLawyersData();
  }, []);

  // 🔍 সার্চ, ফিল্টার এবং সর্ট লজিক কম্বাইনড ইফেক্ট
  useEffect(() => {
    let result = [...lawyers];

    // ১. সার্চ ফিল্টার (নাম বা স্পেশাল্টি দিয়ে)
    if (searchTerm.trim() !== "") {
      result = result.filter(
        (lawyer) =>
          lawyer.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lawyer.specialty?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // ২. স্পেশাল্টি ক্যাটাগরি ফিল্টার
    if (selectedSpecialty !== "All") {
      result = result.filter((lawyer) =>
        lawyer.specialty?.toLowerCase().includes(selectedSpecialty.toLowerCase())
      );
    }

    // ৩. লোকেশন ফিল্টার
    if (selectedLocation !== "All") {
      result = result.filter((lawyer) =>
        lawyer.location?.toLowerCase().includes(selectedLocation.toLowerCase())
      );
    }

    // ৪. সর্টিং লজিক (Hourly Rate & Rating)
    if (sortBy === "rate-low") {
      result.sort((a, b) => (a.hourlyRate || 0) - (b.hourlyRate || 0));
    } else if (sortBy === "rate-high") {
      result.sort((a, b) => (b.hourlyRate || 0) - (a.hourlyRate || 0));
    } else if (sortBy === "rating") {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    setFilteredLawyers(result);
  }, [searchTerm, selectedSpecialty, selectedLocation, sortBy, lawyers]);

  // ডাইনামিক ফিল্টার অপশনের জন্য ইউনিক ডেটা বের করা
  const specialties = ["All", ...new Set(lawyers.map((l) => l.specialty?.split(" & ")[0] || l.specialty).filter(Boolean))];
  const locations = ["All", ...new Set(lawyers.map((l) => l.location?.split(",")[0]).filter(Boolean))];

  // 🧠 জেন্ডার অনুযায়ী ইন্টেলিজেন্ট ইমেজ ডিটেকশন হেল্পার
  const getGenderAvatar = (name = "", index) => {
    const lowerName = name.toLowerCase();
    const femaleIndicators = ["ms.", "mrs.", "miss", "begum", "sultana", "fatima", "aisha", "khatun", "israt", "jahan", "sadia", "fariha", "ayesha"];
    
    const maleImages = ["photo-1560250097-0b93528c311a", "photo-1519085360753-af0119f7cbe7", "photo-1507003211169-0a1dd7228f2d"];
    const femaleImages = ["photo-1573496359142-b8d87734a5a2", "photo-1580489944761-15a19d654956", "photo-1567532939604-b6b5b0db2604"];

    const isFemale = femaleIndicators.some((indicator) => lowerName.includes(indicator));
    const pool = isFemale ? femaleImages : maleImages;
    return `https://images.unsplash.com/${pool[index % pool.length]}?auto=format&fit=crop&q=80&w=150&h=150`;
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* 🏢 হেডার সেকশন */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-wide text-gray-100">
            Explore Available <span className="text-amber-500">Legal Counsels</span>
          </h1>
          <p className="text-slate-400 text-sm mt-2">
            Search, filter, and instantly connect with verified corporate, criminal, and civil law practitioners.
          </p>
        </div>

        {/* 🔍 সার্চ ও ফিল্টার প্যানেল গ্রিড */}
        <div className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-2xl mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center shadow-2xl backdrop-blur-md">
          {/* সার্চ ইনপুট */}
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search by name, expertise..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:border-amber-500 focus:outline-none transition-colors placeholder-slate-500"
            />
          </div>

          {/* স্পেশাল্টি ড্রপডাউন */}
          <div className="w-full">
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm focus:border-amber-500 focus:outline-none transition-colors text-slate-300 cursor-pointer"
            >
              <option value="All">All Specializations</option>
              {specialties.filter(s => s !== "All").map((spec, i) => (
                <option key={i} value={spec}>{spec}</option>
              ))}
            </select>
          </div>

          {/* লোকেশন ড্রপডাউন */}
          <div className="w-full">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm focus:border-amber-500 focus:outline-none transition-colors text-slate-300 cursor-pointer"
            >
              <option value="All">All Locations</option>
              {locations.filter(l => l !== "All").map((loc, i) => (
                <option key={i} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          {/* সর্টিং ড্রপডাউন */}
          <div className="w-full">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm focus:border-amber-500 focus:outline-none transition-colors text-slate-300 cursor-pointer"
            >
              <option value="default">Sort By: Default</option>
              <option value="rate-low">Hourly Rate: Low to High</option>
              <option value="rate-high">Hourly Rate: High to Low</option>
              <option value="rating">Top Rated (Highest Stars)</option>
            </select>
          </div>
        </div>

        {/* 🗂️ লইয়ার্স গ্রিড লেআউট */}
        {loading ? (
          // ⏳ Loading State (Skeleton Cards) - 2cols mobile, 3cols tablet, 4cols desktop
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse bg-slate-900/40 border border-slate-800/60 h-72 rounded-2xl p-5 flex flex-col items-center justify-between">
                <div className="w-16 h-16 bg-slate-800 rounded-full mb-3" />
                <div className="h-4 bg-slate-800 rounded w-3/4 mb-2" />
                <div className="h-3 bg-slate-800 rounded w-1/2 mb-4" />
                <div className="h-8 bg-slate-800 rounded w-full mt-auto" />
              </div>
            ))}
          </div>
        ) : filteredLawyers.length === 0 ? (
          // ❌ Error / Friendly Empty State
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="text-center py-20 bg-slate-900/10 border border-dashed border-slate-800 rounded-2xl max-w-xl mx-auto px-6"
          >
            <SlidersHorizontal className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-300">No Legal Experts Match Your Search</h3>
            <p className="text-slate-500 text-xs mt-2 max-w-sm mx-auto">
              Try adjusting your specialization keyword, expanding your target location radius, or resetting filters.
            </p>
            <button 
              onClick={() => { setSearchTerm(""); setSelectedSpecialty("All"); setSelectedLocation("All"); setSortBy("default"); }}
              className="mt-5 text-xs bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg hover:border-amber-500/50 text-amber-500 transition-all font-medium"
            >
              Reset All Filters
            </button>
          </motion.div>
        ) : (
          // 🚀 Main Layout (2 Columns on Mobile, 3 on Tablet, 4 on Desktop)
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ staggerChildren: 0.05 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {filteredLawyers.map((lawyer, index) => {
              const fallbackAvatar = getGenderAvatar(lawyer.name, index);
              const isBusy = lawyer.status?.toLowerCase() === "busy" || (index % 5 === 0); // ডাইনামিক বা মক বুকিং ফ্ল্যাগ

              return (
                <Link key={lawyer._id || index} href={`/browse-lawyers/${lawyer._id}`}>
                  <motion.div 
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group bg-slate-900/30 border border-slate-800/80 hover:border-amber-500/40 p-4 sm:p-5 rounded-2xl flex flex-col justify-between h-full transition-all relative overflow-hidden cursor-pointer shadow-lg hover:shadow-amber-500/5"
                  >
                    {/* 🔴 Busy Badge (Requirement) */}
                    {isBusy && (
                      <span className="absolute top-3 right-3 text-[10px] uppercase font-bold tracking-wider bg-red-500/10 border border-red-500/30 text-red-400 px-2 py-0.5 rounded-full z-10">
                        Busy
                      </span>
                    )}

                    {/* অবতার ও মূল কন্টেন্ট */}
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-3 sm:mb-4">
                        <img
                          src={lawyer.image || lawyer.imageUrl || fallbackAvatar}
                          alt={lawyer.name}
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-slate-800 group-hover:border-amber-500/40 transition-colors shadow-md bg-slate-950"
                          onError={(e) => { e.target.src = fallbackAvatar; }}
                        />
                      </div>

                      <h3 className="font-bold text-slate-200 text-sm sm:text-base group-hover:text-amber-400 transition-colors line-clamp-1 w-full px-1">
                        {lawyer.name}
                      </h3>
                      
                      <p className="text-[11px] sm:text-xs text-amber-500 font-medium mt-0.5 flex items-center gap-1 justify-center">
                        <Briefcase className="w-3 h-3 shrink-0" />
                        <span className="line-clamp-1">{lawyer.specialty || "Legal Practitioner"}</span>
                      </p>

                      <p className="text-[11px] text-slate-400 mt-2 line-clamp-2 font-light hidden sm:block">
                        {lawyer.bio || "Available for consultations and litigation representation."}
                      </p>
                    </div>

                    {/* নিচের রেট এবং মেটা কন্টেন্ট */}
                    <div className="mt-4 pt-3 border-t border-slate-800/60 flex flex-col sm:flex-row justify-between items-center text-xs gap-2">
                      <div className="flex items-center text-slate-400 text-[11px] sm:text-xs">
                        <DollarSign className="w-3.5 h-3.5 text-slate-500 -mr-0.5" />
                        <span className="text-slate-200 font-semibold">{lawyer.hourlyRate || "150"}</span>/hr
                      </div>
                      <div className="flex items-center gap-1 text-[11px] sm:text-xs text-amber-500 bg-amber-500/5 px-2 py-0.5 rounded-md border border-amber-500/10">
                        <Star className="w-3 h-3 fill-amber-500" />
                        <span className="font-bold text-gray-200">{lawyer.rating || "4.8"}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        )}
      </div>
    </div>
  );
}