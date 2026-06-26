// src/app/dashboard/lawyer/hiring-history/HiringHistoryTable.jsx
'use client';

import React, { useState } from 'react';
import { Calendar, Check, X, Loader2 } from 'lucide-react';
import { updateHiringRequestStatus } from '@/lib/api/hirings';

export default function HiringHistoryTable({ initialRequests }) {
  const [requests, setRequests] = useState(initialRequests);
  const [processingId, setProcessingId] = useState(null);

  const handleAction = async (id, newStatus) => {
    setProcessingId(id);
    try {
      // আমাদের তৈরি করা গ্লোবাল হেল্পার এপিআই কল করা হচ্ছে
      await updateHiringRequestStatus(id, newStatus);
      
      // সফল হলে ইউজার ইন্টারফেসে স্টেট আপডেট হবে
      setRequests(prev => prev.map(req => req._id === id ? { ...req, status: newStatus } : req));
    } catch (error) {
      console.error("Failed to update booking state:", error);
    } finally {
      setProcessingId(null);
    }
  };

  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden shadow-xl backdrop-blur-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-950 border-b border-slate-800 text-slate-400 text-xs font-semibold uppercase tracking-wider">
              <th className="px-6 py-4">Client Name</th>
              <th className="px-6 py-4">Request Date</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-sm text-gray-200">
            {requests.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-12 text-slate-500">No hiring requests found.</td>
              </tr>
            ) : (
              requests.map((request) => (
                <tr key={request._id} className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-4 font-medium flex items-center gap-2">
                    <div className="w-7 h-7 bg-slate-800 rounded-full flex items-center justify-center text-amber-500 font-bold text-xs border border-slate-700">
                      {request.clientName ? request.clientName.charAt(0) : 'C'}
                    </div>
                    {request.clientName}
                  </td>
                  <td className="px-6 py-4 text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-slate-500" />
                      {request.requestDate}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${
                      request.status === 'accepted' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                      request.status === 'rejected' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                      'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    }`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {request.status === 'pending' ? (
                      <div className="inline-flex items-center gap-2">
                        <button
                          onClick={() => handleAction(request._id, 'accepted')}
                          disabled={processingId !== null}
                          className="inline-flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-semibold px-3 py-1.5 rounded-lg text-xs transition-all active:scale-95 disabled:opacity-40 cursor-pointer"
                        >
                          {processingId === request._id ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Check className="w-3.5 h-3.5 stroke-[3]" />} Accept
                        </button>
                        <button
                          onClick={() => handleAction(request._id, 'rejected')}
                          disabled={processingId !== null}
                          className="inline-flex items-center gap-1 bg-slate-950 border border-slate-800 hover:border-red-500/50 hover:text-red-400 text-slate-400 px-3 py-1.5 rounded-lg text-xs transition-all active:scale-95 disabled:opacity-40 cursor-pointer"
                        >
                          <X className="w-3.5 h-3.5" /> Reject
                        </button>
                      </div>
                    ) : (
                      <span className="text-xs text-slate-500 italic">Action Completed</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}