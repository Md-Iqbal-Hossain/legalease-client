import React from 'react';
import { getLawyerById } from '@/lib/api/lawyers';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { MapPin, Briefcase, DollarSign, Star, Scale, Languages, Mail, ArrowUpRight } from 'lucide-react';

export default async function LawyerProfilePage({ params }) {
    const { id } = await params;
    const lawyer = await getLawyerById(id);

    // Guard clause: আইনজীবী খুঁজে না পাওয়া গেলে
    if (!lawyer) {
        return (
            <div className="w-full min-h-screen bg-zinc-950 flex flex-col justify-center items-center text-white p-6">
                <p className="text-zinc-400 text-lg">The requested legal counsel profile could not be found.</p>
                <Link href="/lawyers" className="text-amber-500 hover:underline mt-4 text-sm">Return to Directory</Link>
            </div>
        );
    }

    return (
        <main className="w-full min-h-screen bg-zinc-950 text-zinc-100 p-6 md:p-12 lg:p-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

                {/* LEFT BLOCK: Profile Info, Bio & Experience (Spans 2 columns) */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Header Identity Group */}
                    <div className="space-y-4 border-b border-zinc-800/60 pb-6">
                        <div className="flex items-center gap-5">
                            <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-2xl flex items-center justify-center font-bold text-2xl shadow-inner">
                                {lawyer.name ? lawyer.name.charAt(0) : "L"}
                            </div>
                            <div>
                                <h1 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight">
                                    {lawyer.name}
                                </h1>
                                <p className="text-amber-500 text-sm font-medium mt-1 flex items-center gap-1.5">
                                    <Scale className="w-4 h-4" /> {lawyer.specialty || "General Legal Practitioner"}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section: Biography / Professional Statement */}
                    <section className="space-y-3">
                        <h3 className="text-xl font-semibold text-white">Professional Statement</h3>
                        <p className="text-zinc-300 text-base leading-relaxed whitespace-pre-line bg-zinc-900/30 p-6 rounded-[24px] border border-zinc-900">
                            {lawyer.bio || "No biography provided by the legal practitioner."}
                        </p>
                    </section>

                    {/* Section: Credentials & Areas of Practice */}
                    <section className="space-y-3">
                        <h3 className="text-xl font-semibold text-white">Areas of Focus & Practice</h3>
                        <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <span className="text-zinc-500 text-xs uppercase font-semibold">Primary Focus</span>
                                <p className="text-zinc-200 text-sm font-medium">{lawyer.specialty}</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-zinc-500 text-xs uppercase font-semibold">Jurisdiction & Courts</span>
                                <p className="text-zinc-200 text-sm font-medium">{lawyer.location || "Supreme Court of Bangladesh"}</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* RIGHT BLOCK: Case Metadata Sidebar Widget */}
                <aside className="bg-zinc-900 border border-zinc-800/80 rounded-[32px] p-6 lg:sticky lg:top-8 space-y-6 shadow-xl backdrop-blur-md">
                    <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
                        <h3 className="text-lg font-semibold text-white">Counsel Overview</h3>
                        {lawyer.rating && (
                            <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                                <span className="text-xs font-semibold text-amber-400">{lawyer.rating}</span>
                            </div>
                        )}
                    </div>

                    <div className="space-y-4">
                        {/* Location */}
                        <div className="flex items-start gap-3">
                            <MapPin className="text-amber-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                            <div>
                                <span className="text-xs text-zinc-500 block">Chamber Location</span>
                                <span className="text-sm font-medium text-zinc-200">{lawyer.location}</span>
                            </div>
                        </div>

                        {/* Experience */}
                        <div className="flex items-start gap-3">
                            <Briefcase className="text-amber-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                            <div>
                                <span className="text-xs text-zinc-500 block">Experience Standing</span>
                                <span className="text-sm font-medium text-zinc-200">{lawyer.experience} Active Practice</span>
                            </div>
                        </div>

                        {/* Hourly Rate */}
                        <div className="flex items-start gap-3">
                            <DollarSign className="text-amber-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                            <div>
                                <span className="text-xs text-zinc-500 block">Consultation Rate</span>
                                <span className="text-sm font-medium text-zinc-200">${lawyer.hourlyRate} / hour</span>
                            </div>
                        </div>

                        {/* Languages */}
                        {lawyer.languages && (
                            <div className="flex items-start gap-3">
                                <Languages className="text-amber-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                                <div>
                                    <span className="text-xs text-zinc-500 block">Languages Fluency</span>
                                    <span className="text-sm font-medium text-zinc-200">{lawyer.languages.join(", ")}</span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Action Button: Hire/Consult Link (Pure Next.js Link with Tailwind Button Styles) */}
                    <Link
                        href={`/lawyers/${id}/hire`}
                        className="w-full bg-amber-500 hover:bg-amber-600 text-zinc-950 font-semibold py-3.5 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 text-center text-sm"
                    >
                        Retain Legal Counsel
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </Link>
                </aside>

            </div>
        </main>
    );
}