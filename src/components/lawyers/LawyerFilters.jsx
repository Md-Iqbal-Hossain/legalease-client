import React from "react";
import { Search, ChevronDown, Award } from "lucide-react";

export default function LawyerFilters({ 
  searchQuery, 
  setSearchQuery, 
  selectedSpecialty, 
  setSelectedSpecialty, 
  selectedLocation, 
  setSelectedLocation,
  minRating,
  setMinRating
}) {
  return (
    <div className="flex flex-col gap-4 bg-zinc-900/50 p-6 rounded-[24px] border border-zinc-800/80 max-w-7xl mx-auto mb-10 backdrop-blur-md">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
        
        {/* ১. Search Field (Span 4) */}
        <div className="md:col-span-4">
          <span className="text-sm font-medium text-zinc-400 block mb-2">Search Lawyers</span>
          <div className="relative flex items-center bg-zinc-800 border border-zinc-700 focus-within:border-amber-500 rounded-xl transition-all">
            <Search className="absolute left-4 w-4 h-4 text-zinc-500" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Name, bio, or legal keywords..." 
              className="bg-transparent text-white placeholder-zinc-500 text-sm py-3 pl-11 pr-4 outline-none w-full rounded-xl"
            />
          </div>
        </div>

        {/* ২. Specialty Select Filter (Span 3) */}
        <div className="md:col-span-3">
          <span className="text-sm font-medium text-zinc-400 block mb-2">Legal Specialty</span>
          <div className="relative">
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="w-full bg-zinc-800 text-white border border-zinc-700 hover:border-zinc-600 rounded-xl py-3 px-4 text-sm font-normal appearance-none outline-none focus:border-amber-500 transition-all cursor-pointer"
            >
              <option value="all">All Specialties</option>
              <option value="Criminal Defense">Criminal Defense</option>
              <option value="Corporate Law">Corporate Law</option>
              <option value="Family Law">Family Law</option>
              <option value="Constitutional Law">Constitutional Law</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
          </div>
        </div>

        {/* ৩. Location Select Filter (Span 3) */}
        <div className="md:col-span-3">
          <span className="text-sm font-medium text-zinc-400 block mb-2">Location / Region</span>
          <div className="relative">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full bg-zinc-800 text-white border border-zinc-700 hover:border-zinc-600 rounded-xl py-3 px-4 text-sm font-normal appearance-none outline-none focus:border-amber-500 transition-all cursor-pointer"
            >
              <option value="all">All Locations</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Sylhet">Sylhet</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
          </div>
        </div>

        {/* ৪. Rating Select Filter (Span 2) */}
        <div className="md:col-span-2">
          <span className="text-sm font-medium text-zinc-400 block mb-2">Minimum Rating</span>
          <div className="relative">
            <select
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
              className="w-full bg-zinc-800 text-white border border-zinc-700 hover:border-zinc-600 rounded-xl py-3 px-4 text-sm font-normal appearance-none outline-none focus:border-amber-500 transition-all cursor-pointer"
            >
              <option value={0}>Any Rating</option>
              <option value={4.5}>4.5+ ⭐</option>
              <option value={4.8}>4.8+ ⭐</option>
              <option value={5.0}>5.0 ⭐ Only</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
          </div>
        </div>

      </div>
    </div>
  );
}