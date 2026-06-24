'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, User, Check, X, Loader2, Briefcase } from 'lucide-react';

export default function LawyerHiringHistory() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState(null);

  // Simulated data fetch - replace with your secure JWT/Better-Auth fetch wrapper
  useEffect(() => {
    const fetchHiringRequests = async () => {
      try {
        // const res = await fetch('/api/lawyer/hiring-requests');
        // const data = await res.json();
        // setRequests(data);
        
        // Mock data structure matching your spec requirements
        setRequests([
          { _id: '1', clientName: 'Sarah Jenkins', requestDate: '2026-06-20', status: 'pending' },
          { _id: '2', clientName: 'Michael Chang', requestDate: '2026-06-18', status: 'accepted' },
          { _id: '3', clientName: 'Emma Watson', requestDate: '2026-06-15', status: 'rejected' },
        ]);
      } catch (err) {
        console.error("Error loading hiring data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchHiringRequests();
  }, []);

  const handleAction = async (id, newStatus) => {
    setProcessingId(id);
    try {
      // Secure API Call Example:
      // await fetch(`/api/bookings/${id}/status`, {
      //   method: 'PATCH',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ status: newStatus })
      // });

      // Optimistic state update across the UI array
      setRequests(prev => prev.map(req => req._id === id ? { ...req, status: newStatus } : req));
    } catch (error) {
      console.error("Failed to update booking state:", error);
    } finally {
      setProcessingId(null);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 text-amber-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-serif font-bold text-gray-100 tracking-wide flex items-center gap-2">
          <Briefcase className="text-amber-500 w-6 h-6" /> Inbound Case Requests
        </h1>
        <p className="text-sm text-slate-400 mt-1">Review, accept, or reject legal consultation requests from potential clients.</p>
      </div>

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
                        {request.clientName.charAt(0)}
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
                            <Check className="w-3.5 h-3.5 stroke-[3]" /> Accept
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
    </div>
  );
}