"use client";

import React, { useState } from "react";
import { Form, Fieldset, TextField, Label, Input, TextArea, FieldError, Button } from "@heroui/react";
import { Shield, Hammer } from "@gravity-ui/icons";
import { updateLawyerProfile } from "@/lib/actions/lawyer"; // আপনার সার্ভার অ্যাকশন পাথ
import { toast } from "sonner"; // অথবা আপনার প্রজেক্টের টোস্ট নোটিফিকেশন প্যাকেজ

export default function ProfileForm({ lawyerProfile }) {
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // ফ্রন্টএন্ড ভ্যালিডেশন
        const newErrors = {};
        if (!data.bio) newErrors.bio = "Professional bio is required";
        if (!data.fee) newErrors.fee = "Consultation fee is required";
        if (!data.specialization) newErrors.specialization = "Specialization category is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        setLoading(true);

        try {
            const payload = {
                bio: data.bio,
                fee: Number(data.fee),
                specialization: data.specialization,
            };
            
            const res = await updateLawyerProfile(payload);
            if (res?.success) {
                toast.success("Legal profile updated successfully!");
            } else {
                toast.error(res?.message || "Something went wrong.");
            }
        } catch (err) {
            toast.error("Failed to connect to the server.");
        } finally {
            setLoading(false);
        }
    };

    // Gobindo Design পরিহার করে প্রিমিয়াম ডার্ক থিম স্টাইল
    const textInputClass = "w-full text-white bg-[#111113] border border-zinc-800 hover:bg-[#161619] focus:border-amber-500 rounded-lg h-12 px-3 text-sm placeholder:text-zinc-600 outline-none transition-all";
    const textAreaClass = "w-full text-white bg-[#111113] border border-zinc-800 hover:bg-[#161619] focus:border-amber-500 rounded-lg p-3 text-sm placeholder:text-zinc-600 outline-none transition-all";

    return (
        <div className="max-w-3xl mx-auto bg-[#09090b] border border-zinc-900 rounded-2xl p-8 shadow-2xl">
            {/* Header section */}
            <div className="border-b border-zinc-800 pb-6 mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-serif font-bold text-white tracking-tight">Manage Legal Profile</h1>
                    <p className="text-zinc-500 text-xs mt-1">Configure your consultation rates, specialization, and public legal biography.</p>
                </div>

                {/* Live verification status badge */}
                <div className="inline-flex items-center gap-2 bg-zinc-900/40 border border-zinc-800 rounded-xl px-4 py-2 text-xs">
                    <Shield className="size-4 text-amber-500" />
                    <span className="text-zinc-400">Status:</span>
                    {lawyerProfile.status === "Approved" ? (
                        <span className="text-emerald-400 font-semibold bg-emerald-950/30 border border-emerald-900/50 px-2 py-0.5 rounded-md">Verified Account</span>
                    ) : (
                        <span className="text-amber-500 font-semibold bg-amber-950/30 border border-amber-900/50 px-2 py-0.5 rounded-md">Pending Verification Payment</span>
                    )}
                </div>
            </div>

            {/* 🛑 শর্ত: একাউন্ট এপ্রুভড না হলে ফর্ম ব্লক থাকবে এবং নোটিশ শো করবে */}
            {lawyerProfile.status !== "Approved" ? (
                <div className="p-8 border border-dashed border-amber-500/20 bg-amber-500/5 rounded-xl text-center space-y-4">
                    <Hammer className="size-12 text-amber-500 mx-auto animate-pulse" />
                    <h3 className="text-lg font-serif font-medium text-amber-400">One-Time Verification Required</h3>
                    <p className="text-zinc-400 text-sm max-w-md mx-auto">
                        Traditional system validation is required to secure global clients. Please process your one-time publishing payment or wait for administrative clearance.
                    </p>
                    <Button className="bg-amber-500 text-black font-semibold rounded-lg px-6 shadow-lg shadow-amber-500/10">
                        Proceed to Stripe Payment
                    </Button>
                </div>
            ) : (
                /* 🚀 অ্যাকাউন্ট Approved হলে মূল Hero UI Form রেন্ডার হবে */
                <Form onSubmit={handleSubmit} className="space-y-6" validationErrors={errors} validationBehavior="aria">
                    <Fieldset className="space-y-5 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TextField name="specialization" isInvalid={!!errors.specialization} className="flex flex-col gap-1.5">
                                <Label className="text-zinc-400 font-medium text-xs uppercase tracking-wider">Legal Specialization</Label>
                                <Input defaultValue={lawyerProfile.specialization || ""} placeholder="e.g. Corporate Law, Criminal Defense" className={textInputClass} />
                                {errors.specialization && <FieldError className="text-xs text-rose-500 mt-1">{errors.specialization}</FieldError>}
                            </TextField>

                            <TextField name="fee" type="number" isInvalid={!!errors.fee} className="flex flex-col gap-1.5">
                                <Label className="text-zinc-400 font-medium text-xs uppercase tracking-wider">Consultation Fee ($ / Hour)</Label>
                                <Input defaultValue={lawyerProfile.fee || ""} placeholder="e.g. 150" className={textInputClass} />
                                {errors.fee && <FieldError className="text-xs text-rose-500 mt-1">{errors.fee}</FieldError>}
                            </TextField>
                        </div>

                        <TextField name="bio" isInvalid={!!errors.bio} className="flex flex-col gap-1.5 w-full">
                            <Label className="text-zinc-400 font-medium text-xs uppercase tracking-wider">Professional Bio & Credentials</Label>
                            <TextArea defaultValue={lawyerProfile.bio || ""} placeholder="Describe your landmark cases, expertise, and educational pedigree..." rows={5} className={textAreaClass} />
                            {errors.bio && <FieldError className="text-xs text-rose-500 mt-1">{errors.bio}</FieldError>}
                        </TextField>
                    </Fieldset>

                    <div className="flex justify-end pt-4 border-t border-zinc-900">
                        <Button type="submit" isLoading={loading} className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-8 rounded-xl h-12 transition-all">
                            Save & Sync Profile
                        </Button>
                    </div>
                </Form>
            )}
        </div>
    );
}