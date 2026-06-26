"use client";

import React, { useState, useMemo } from "react";
import LawyerCard from "./LawyerCard";
import LawyerFilters from "./LawyerFilters";

export default function LawyerListingContainer({ initialLawyers }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [minRating, setMinRating] = useState(0);

  // useMemo দিয়ে ইনস্ট্যান্টলি ফিল্টারিং ক্যালকুলেট করা হচ্ছে
  const filteredLawyers = useMemo(() => {
    return initialLawyers.filter((lawyer) => {
      const matchesSearch =
        lawyer.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lawyer.bio?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lawyer.specialty?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSpecialty =
        selectedSpecialty === "all" || 
        lawyer.specialty?.toLowerCase().includes(selectedSpecialty.toLowerCase());

      const matchesLocation =
        selectedLocation === "all" || 
        lawyer.location?.toLowerCase().includes(selectedLocation.toLowerCase());

      const matchesRating = (lawyer.rating || 0) >= minRating;

      return matchesSearch && matchesSpecialty && matchesLocation && matchesRating;
    });
  }, [searchQuery, selectedSpecialty, selectedLocation, minRating, initialLawyers]);

  return (
    <>
      {/* ফিল্টার কন্ট্রোলার স্টেট পাস করা হচ্ছে */}
      <LawyerFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedSpecialty={selectedSpecialty}
        setSelectedSpecialty={setSelectedSpecialty}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        minRating={minRating}
        setMinRating={setMinRating}
      />

      {/* ফলাফল কাউন্টার */}
      <div className="max-w-7xl mx-auto mb-6 text-sm text-zinc-500 px-2">
        Showing {filteredLawyers.length} legal expert{filteredLawyers.length !== 1 && "s"} available
      </div>

      {/* গ্রিড রেন্ডারিং */}
      {filteredLawyers.length > 0 ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {filteredLawyers.map((lawyerItem) => (
            <LawyerCard 
              key={lawyerItem._id?.$oid || lawyerItem._id} 
              lawyer={lawyerItem} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed border-zinc-800 rounded-[32px] max-w-7xl mx-auto">
          <p className="text-zinc-500 text-lg">No legal counsel matches your specific filters.</p>
        </div>
      )}
    </>
  );
}