"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LegalCategories() {
  const categories = [
    { name: "Criminal Law", slug: "Criminal", icon: "⚖️" },
    { name: "Corporate Law", slug: "Corporate", icon: "🏢" },
    { name: "Family Law", slug: "Family", icon: "🏠" },
    { name: "Civil Litigation", slug: "Civil", icon: "📜" },
    { name: "Labor Law", slug: "Labor", icon: "🛠️" },
    { name: "Tax Law", slug: "Tax", icon: "💰" }
  ];

  return (
    <section id="legal-categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="text-center md:text-left mb-10 border-b border-slate-800 pb-4"
      >
        <h2 className="text-2xl font-serif font-bold text-gray-100">Explore Legal Fields</h2>
        <p className="text-sm text-slate-400 mt-1">Select a core specialization to filter customized judicial support.</p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat, index) => (
          <Link key={index} href={`/browse-lawyers?category=${cat.slug}`}>
            <div className="bg-slate-900/50 border border-slate-800 hover:border-amber-500 p-5 rounded-xl text-center transition-all cursor-pointer group flex flex-col items-center justify-center h-32">
              <span className="text-3xl block mb-2 group-hover:scale-110 transition-transform">{cat.icon}</span>
              <span className="text-xs font-semibold tracking-wide text-slate-300 group-hover:text-amber-500 transition-colors uppercase">{cat.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}