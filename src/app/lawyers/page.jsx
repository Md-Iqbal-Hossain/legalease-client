import React from "react";
import { getLawyers } from "@/lib/api/lawyers";
import LawyerCard from "@/components/lawyers/LawyerCard";
import { Scale } from "lucide-react";

export default async function BrowseLawyersPage() {
  // সার্ভার সাইড থেকে সরাসরি আমাদের লাইভ ডাটা জেনারেট হয়ে আসবে
  const lawyers = await getLawyers();

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header section */}
        <div className="border-b border-zinc-800 pb-6">
          <h1 className="text-4xl font-serif font-bold text-gray-100 flex items-center gap-3">
            <Scale className="text-amber-500 w-9 h-9" /> Find Professional Legal Counsel
          </h1>
          <p className="text-zinc-400 mt-2 max-w-2xl">
            Browse through verified and top-rated attorneys, advocates, and legal advisors tailored to your case requirements.
          </p>
        </div>

        {/* Lawyer Cards Responsive Grid */}
        {lawyers.length === 0 ? (
          <div className="text-center py-20 text-zinc-500">
            No registered legal experts found at the moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lawyers.map((lawyer) => (
              <LawyerCard key={lawyer._id} lawyer={lawyer} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}