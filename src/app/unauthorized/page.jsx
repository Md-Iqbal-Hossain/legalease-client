"use client";

import Link from "next/link";
// 💡 ShieldAlert পরিবর্তন করে Shield করা হয়েছে
import { Shield, ArrowLeft, ArrowRightToSquare } from "@gravity-ui/icons"; 

export default function UnauthorizedPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center bg-slate-950 px-4 text-center text-slate-200">
      <div className="max-w-md w-full space-y-6 bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
        
        {/* Icon & Error Code */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <div className="rounded-full bg-red-500/10 p-4 text-red-500 border border-red-500/20">
            {/* 🚀 আপডেটেড আইকন কম্পোনেন্ট */}
            <Shield className="size-12" />
          </div>
          <h1 className="text-6xl font-serif font-extrabold tracking-tight text-white">
            401
          </h1>
          <h2 className="text-xl font-bold tracking-tight text-slate-100">
            Access Restrained
          </h2>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed">
          Your credentials do not possess the clearance level mandated for this workspace registry. Please sign in with an authorized account profile.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link
            href="/auth/signin"
            className="flex items-center justify-center gap-2 rounded-lg bg-amber-500 hover:bg-amber-600 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all font-medium shadow-md active:scale-[0.98]"
          >
            <ArrowRightToSquare className="size-4" />
            Sign In Account
          </Link>
          
          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-5 py-2.5 text-sm font-semibold text-slate-300 hover:bg-slate-900 hover:text-white transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to Safety
          </Link>
        </div>
      </div>
    </div>
  );
}