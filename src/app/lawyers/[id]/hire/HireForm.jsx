// 'use client';
// import React, { useState } from 'react';
// import { Form, Button, TextField, Label, Input, Description, FieldError } from '@heroui/react';
// import { ArrowRight, Link, FileText, LayoutHeaderCells } from '@gravity-ui/icons';
// import { submitConsultationRequest } from '@/lib/actions/consultations';

// const HireForm = ({ lawyer, client }) => {
//     const [formData, setFormData] = useState({
//         caseBrief: '',
//         documentLink: '',
//         incidentDate: ''
//     });
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             ...prev,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         const submissionData = {
//             lawyerId: lawyer?._id,
//             lawyerName: lawyer?.name,
//             lawyerSpecialty: lawyer?.specialty,
//             clientId: client?.id,
//             clientName: client?.name,
//             clientEmail: client?.email,
//             status: 'pending',
//             ...formData
//         };

//         try {
//             console.log('Sending Legal Request:', submissionData);
//             const res = await submitConsultationRequest(submissionData);
            
//             if (res?.insertedId) {
//                 alert('Legal counsel consultation request submitted successfully!');
//                 setFormData({ caseBrief: '', documentLink: '', incidentDate: '' });
//             }
//         } catch (error) {
//             alert('Failed to submit request. Please check connection.');
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <div className="max-w-xl mx-auto p-6 bg-zinc-900 rounded-xl shadow-sm border border-zinc-800">
//             {/* হেডার */}
//             <div className="mb-6">
//                 <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">
//                     Retainer Engagement Form
//                 </span>
//                 <h2 className="text-2xl font-bold text-zinc-50 mt-1">
//                     Retain {lawyer?.name || 'Legal Counsel'}
//                 </h2>
//                 {client?.name && (
//                     <p className="text-sm text-zinc-400 mt-1">
//                         Submitting as: <span className="font-medium text-zinc-200">{client.name}</span> ({client.email})
//                     </p>
//                 )}
//             </div>

//             <hr className="border-zinc-800 mb-6" />

//             {/* Hero UI Form Wrapper */}
//             <Form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">

//                 {/* ১. কেস ব্রিফ বা আইনি বিবরণ (Required) */}
//                 <TextField isRequired name="caseBrief" className="w-full">
//                     <Label className="text-sm font-medium text-zinc-300 flex items-center gap-1.5 mb-1.5">
//                         <LayoutHeaderCells className="w-4 h-4 text-zinc-500" />
//                         Case Brief & Core Legal Dispute
//                     </Label>
//                     <textarea
//                         name="caseBrief"
//                         rows={5}
//                         required
//                         placeholder="Describe the nature of your dispute, legal issues faced, and specific demands from the counsel..."
//                         value={formData.caseBrief}
//                         onChange={handleChange}
//                         className="w-full px-3 py-2 rounded-lg border border-zinc-700 bg-zinc-950 text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition resize-none"
//                     />
//                     <Description className="text-xs text-zinc-500 mt-1">
//                         Provide a clear chronological overview of your situation.
//                     </Description>
//                 </TextField>

//                 {/* ২. ইনসিডেন্ট ডেট / ঘটনার তারিখ (Optional) */}
//                 <TextField name="incidentDate" className="w-full">
//                     <Label className="text-sm font-medium text-zinc-300 flex items-center gap-1.5 mb-1.5">
//                         <FileText className="w-4 h-4 text-zinc-500" />
//                         Date of Incident / Cause of Action
//                     </Label>
//                     <Input
//                         type="date"
//                         name="incidentDate"
//                         value={formData.incidentDate}
//                         onChange={handleChange}
//                         className="w-full px-3 py-2 rounded-lg border border-zinc-700 bg-zinc-950 text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
//                     />
//                 </TextField>

//                 {/* ৩. ডকুমেন্ট বা এভিডেন্স লিংক (Optional) */}
//                 <TextField name="documentLink" className="w-full">
//                     <Label className="text-sm font-medium text-zinc-300 flex items-center gap-1.5 mb-1.5">
//                         <Link className="w-4 h-4 text-zinc-500" />
//                         Supporting Documents Link <span className="text-xs text-zinc-500 font-normal">(Optional)</span>
//                     </Label>
//                     <Input
//                         type="url"
//                         name="documentLink"
//                         placeholder="https://drive.google.com/... (GDrive, Dropbox, OneDrive)"
//                         value={formData.documentLink}
//                         onChange={handleChange}
//                         className="w-full px-3 py-2 rounded-lg border border-zinc-700 bg-zinc-950 text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
//                     />
//                     <Description className="text-xs text-zinc-500 mt-1">
//                         Attach any legal notices, FIR copies, or contracts relative to this issue (Ensure link is shareable).
//                     </Description>
//                 </TextField>

//                 {/* বাটন অ্যাকশন */}
//                 <div className="flex items-center justify-end gap-3 mt-4 pt-4 border-t border-zinc-800">
//                     <Button
//                         type="reset"
//                         onClick={() => setFormData({ caseBrief: '', documentLink: '', incidentDate: '' })}
//                         className="px-4 py-2 text-sm font-medium text-zinc-400 hover:bg-zinc-800 rounded-lg transition"
//                     >
//                         Clear Form
//                     </Button>
//                     <Button
//                         type="submit"
//                         isLoading={isSubmitting}
//                         disabled={isSubmitting}
//                         className="px-5 py-2 text-sm font-medium text-zinc-950 bg-amber-500 hover:bg-amber-600 rounded-lg shadow-sm flex items-center gap-2 transition"
//                     >
//                         Request Consultation
//                         <ArrowRight className="w-4 h-4 stroke-[2.5]" />
//                     </Button>
//                 </div>
//             </Form>
//         </div>
//     );
// };

// export default HireForm;

// **********************************************************************************

// 'use client';

// import React, { useState } from 'react';
// // Hero UI Components (v3.1.0 atomic anatomy)
// import { Form, Button, TextField, Label, Input, Description, FieldError } from '@heroui/react';
// // Gravity UI Icons for a polished look
// import { ArrowRight, Link, FileText, LayoutHeaderCells } from '@gravity-ui/icons';
// import { submitConsultationRequest } from '@/lib/actions/consultations';

// const HireForm = ({ lawyer, client }) => {
//     const [formData, setFormData] = useState({
//         documentLink: '',
//         caseSummary: '',
//         urgencyLevel: 'Standard'
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // আইনজীবী এবং ক্লায়েন্টের মেটাডেটার সাথে ফর্মের ডেটা মার্জ করা হচ্ছে
//         const submissionData = {
//             lawyerId: lawyer?._id,
//             lawyerName: lawyer?.name,
//             lawyerEmail: lawyer?.lawyerEmail || lawyer?.email,
//             clientId: client?.id,
//             clientName: client?.name,
//             clientEmail: client?.email,
//             status: 'pending',
//             ...formData
//         };

//         console.log('Submitting Case Engagement:', submissionData);
        
//         try {
//             const res = await submitConsultationRequest(submissionData);
//             if (res.insertedId) {
//                 alert('Legal counsel engagement request submitted successfully!');
//                 setFormData({ documentLink: '', caseSummary: '', urgencyLevel: 'Standard' });
//             }
//         } catch (error) {
//             alert('Failed to submit application. Please try again.');
//         }
//     };

//     return (
//         <div className="max-w-xl mx-auto p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800">
//             {/* Header Section */}
//             <div className="mb-6">
//                 <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
//                     Counsel Retention Form
//                 </span>
//                 <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-1">
//                     Retain {lawyer?.name || 'Legal Counsel'}
//                 </h2>
//                 {client?.name && (
//                     <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
//                         Acting Client: <span className="font-medium text-zinc-700 dark:text-zinc-300">{client.name}</span> ({client.email})
//                     </p>
//                 )}
//             </div>

//             <hr className="border-zinc-200 dark:border-zinc-800 mb-6" />

//             {/* Hero UI Form wrapper */}
//             <Form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">

//                 {/* ১. Case Summary / Brief (Required) */}
//                 <TextField isRequired name="caseSummary" className="w-full">
//                     <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5 mb-1.5">
//                         <LayoutHeaderCells className="w-4 h-4 text-zinc-400" />
//                         Case Summary / Legal Matter Description
//                     </Label>
//                     <textarea
//                         name="caseSummary"
//                         rows={4}
//                         required
//                         placeholder="Provide a brief summary of your legal matter, disputes, or documentation requirements..."
//                         value={formData.caseSummary}
//                         onChange={handleChange}
//                         className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition resize-none"
//                     />
//                     <Description className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">
//                         Briefly describe the context so the legal expert can evaluate the workload baseline.
//                     </Description>
//                 </TextField>

//                 {/* ২. Supporting Legal Documents Link (Optional) */}
//                 <TextField name="documentLink" className="w-full">
//                     <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5 mb-1.5">
//                         <FileText className="w-4 h-4 text-zinc-400" />
//                         Supporting Documents / Case Brief Link <span className="text-xs text-zinc-400 font-normal">(Optional)</span>
//                     </Label>
//                     <Input
//                         type="url"
//                         name="documentLink"
//                         placeholder="https://drive.google.com/... (Ensure access is public)"
//                         value={formData.documentLink}
//                         onChange={handleChange}
//                         className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition"
//                     />
//                     <Description className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">
//                         Link to case materials, scanned briefs, or contracts requiring review.
//                     </Description>
//                 </TextField>

//                 {/* ৩. Urgency Context Level */}
//                 <TextField name="urgencyLevel" className="w-full">
//                     <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5 mb-1.5">
//                         <Link className="w-4 h-4 text-zinc-400" />
//                         Priority Level
//                     </Label>
//                     <select
//                         name="urgencyLevel"
//                         value={formData.urgencyLevel}
//                         onChange={handleChange}
//                         className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition cursor-pointer"
//                     >
//                         <option value="Standard">Standard (Normal Consultation)</option>
//                         <option value="Urgent">Urgent (Upcoming Hearing/Deadline)</option>
//                         <option value="Critical">Critical (Immediate Representation Required)</option>
//                     </select>
//                 </TextField>

//                 {/* Form Actions */}
//                 <div className="flex items-center justify-end gap-3 mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/50">
//                     <Button
//                         type="reset"
//                         onClick={() => setFormData({ documentLink: '', caseSummary: '', urgencyLevel: 'Standard' })}
//                         className="px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition"
//                     >
//                         Clear Form
//                     </Button>
//                     <Button
//                         type="submit"
//                         className="px-5 py-2 text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-sm flex items-center gap-2 transition cursor-pointer"
//                     >
//                         Submit Engagement Request
//                         <ArrowRight className="w-4 h-4" />
//                     </Button>
//                 </div>
//             </Form>
//         </div>
//     );
// };

// export default HireForm;

// *****************************************************

'use client';

import React, { useState } from 'react';
import { Loader2, Scale, Link2, AlertCircle } from 'lucide-react';

export default function HireForm({ lawyer, client }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    caseSummary: '',
    documentLink: '',
    urgencyLevel: 'Standard',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!formData.caseSummary.trim()) {
      setError('Please provide a brief summary of your legal matter.');
      setLoading(false);
      return;
    }

    // ব্যাকএন্ডে পাঠানোর জন্য কমপ্লিট পেলোড তৈরি
    const payload = {
      lawyerId: lawyer?._id,
      lawyerName: lawyer?.name,
      lawyerEmail: lawyer?.email,
      clientId: client?.id,
      clientName: client?.name,
      clientEmail: client?.email,
      caseSummary: formData.caseSummary.trim(),
      documentLink: formData.documentLink.trim(),
      urgencyLevel: formData.urgencyLevel,
      status: 'pending',
    };

    try {
      // 💡 NEXT_PUBLIC_APP_URL বা আপনার প্রজেক্টের বেস ইউআরএল কনফিগ অনুযায়ী /api/hirings এ পোস্ট করা হলো
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/hirings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      
      if (data.insertedId) {
        setSuccess(true);
        alert('Legal counsel engagement request submitted successfully!');
        // ফর্ম রিসেট
        setFormData({ caseSummary: '', documentLink: '', urgencyLevel: 'Standard' });
      } else {
        setError('Failed to submit application. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting hiring form:', err);
      setError('Failed to submit application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-zinc-900 border border-emerald-800/40 rounded-2xl p-8 text-center max-w-xl mx-auto">
        <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <Scale className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-zinc-100 mb-2">Application Submitted!</h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
          Your engagement request has been successfully recorded. Advocate <strong>{lawyer?.name}</strong> will review your case baseline shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl">
      <div className="mb-6 pb-6 border-b border-zinc-800">
        <h3 className="text-lg font-bold text-zinc-100">Counsel Retention Form</h3>
        <p className="text-sm text-zinc-400 mt-1">
          Retain Advocate: <span className="text-amber-400 font-medium">{lawyer?.name || 'Legal Expert'}</span>
        </p>
        <p className="text-xs text-zinc-500 mt-0.5">
          Acting Client: {client?.name} ({client?.email})
        </p>
      </div>

      {error && (
        <div className="mb-5 bg-red-950/30 border border-red-900/50 p-4 rounded-xl flex items-start gap-3 text-red-400">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span className="text-sm font-medium">{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            Case Summary / Legal Matter Description
          </label>
          <textarea
            name="caseSummary"
            rows={4}
            value={formData.caseSummary}
            onChange={handleChange}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 text-sm transition-all resize-none"
            placeholder="Briefly describe the context so the legal expert can evaluate the workload baseline..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            Supporting Documents / Case Brief Link (Optional)
          </label>
          <div className="relative rounded-xl shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Link2 className="h-4 w-4 text-zinc-600" />
            </div>
            <input
              type="url"
              name="documentLink"
              value={formData.documentLink}
              onChange={handleChange}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 text-sm transition-all"
              placeholder="https://drive.google.com/your-case-file"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-3">Priority Level</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {['Standard', 'Urgent', 'Critical'].map((level) => (
              <label
                key={level}
                className={`flex items-center justify-center px-4 py-3 rounded-xl border text-sm font-medium cursor-pointer transition-all select-none ${
                  formData.urgencyLevel === level
                    ? 'bg-amber-500/10 border-amber-500 text-amber-400'
                    : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:bg-zinc-900'
                }`}
              >
                <input
                  type="radio"
                  name="urgencyLevel"
                  value={level}
                  checked={formData.urgencyLevel === level}
                  onChange={handleChange}
                  className="sr-only"
                />
                {level}
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center items-center py-3 px-4 rounded-xl shadow-lg text-sm font-semibold text-zinc-950 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 focus:outline-none transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5 text-zinc-950" />
              Processing Request...
            </>
          ) : (
            `Confirm Retention Request`
          )}
        </button>
      </form>
    </div>
  );
}