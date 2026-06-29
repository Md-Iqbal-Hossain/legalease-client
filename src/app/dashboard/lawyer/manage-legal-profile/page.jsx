// 'use client';

// import React, { useState } from 'react';
// import { Shield, Upload, DollarSign, BookOpen, FileText, Loader2, Save, User } from 'lucide-react';

// export default function ManageLegalProfile() {
//   const [profileData, setProfileData] = useState({
//     name: 'Attorney Alex Mercer',
//     specialization: 'Corporate',
//     fee: '250',
//     bio: 'Dedicated corporate strategist with a decade of expertise managing tech mergers, compliance structures, and seed-round equity acquisitions.',
//     imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400'
//   });

//   const [uploading, setUploading] = useState(false);
//   const [saving, setSaving] = useState(false);
//   const [message, setMessage] = useState({ type: '', text: '' });

//   const handleChange = (e) => {
//     setProfileData({ ...profileData, [e.target.name]: e.target.value });
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setUploading(true);
//     setMessage({ type: '', text: '' });

//     const imgBBKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY; // Pulled cleanly from your safe frontend environment configurations
//     const formData = new FormData();
//     formData.append('image', file);

//     try {
//       const response = await fetch(`https://api.imgbb.com/1/upload?key=${imgBBKey}`, {
//         method: 'POST',
//         body: formData,
//       });
//       const result = await response.json();

//       if (result.success) {
//         setProfileData(prev => ({ ...prev, imageUrl: result.data.url }));
//         setMessage({ type: 'success', text: 'Image uploaded successfully to server infrastructure!' });
//       } else {
//         setMessage({ type: 'error', text: 'Image placement pipeline failed. Check API configurations.' });
//       }
//     } catch (error) {
//       setMessage({ type: 'error', text: 'Network exception during asset dispatch.' });
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleProfileSubmit = async (e) => {
//     e.preventDefault();
//     setSaving(true);
//     setMessage({ type: '', text: '' });

//     try {
//       // Secure Backend API Call matching your JWT configuration requirements:
//       // await fetch('/api/lawyer/profile', {
//       //   method: 'PUT',
//       //   headers: { 'Content-Type': 'application/json' },
//       //   body: JSON.stringify(profileData)
//       // });
      
//       setMessage({ type: 'success', text: 'Your legal profile assets have been updated successfully!' });
//     } catch (err) {
//       setMessage({ type: 'error', text: 'Could not push profile transformations.' });
//     } finally {
//       setSaving(false);
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto space-y-6">
//       <div>
//         <h1 className="text-2xl font-serif font-bold text-gray-100 tracking-wide flex items-center gap-2">
//           <Shield className="text-amber-500 w-6 h-6" /> Manage Legal Profile
//         </h1>
//         <p className="text-sm text-slate-400 mt-1">Configure your legal consultation pricing structure, biography, and professional imagery.</p>
//       </div>

//       {message.text && (
//         <div className={`p-4 rounded-lg border text-sm font-medium ${
//           message.type === 'success' ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-400' : 'bg-red-950/30 border-red-500/30 text-red-400'
//         }`}>
//           {message.text}
//         </div>
//       )}

//       <form onSubmit={handleProfileSubmit} className="bg-slate-900/80 border border-slate-800/80 rounded-xl p-6 space-y-6 backdrop-blur-md">
        
//         {/* Profile Image Upload Row */}
//         <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-slate-800/60">
//           <div className="relative w-28 h-28 rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-inner">
//             <img src={profileData.imageUrl} alt="Lawyer Profile Preview" className="w-full h-full object-cover" />
//             {uploading && (
//               <div className="absolute inset-0 bg-slate-950/80 flex items-center justify-center">
//                 <Loader2 className="w-5 h-5 text-amber-500 animate-spin" />
//               </div>
//             )}
//           </div>
//           <div className="space-y-2 text-center sm:text-left">
//             <label className="block text-sm font-medium text-slate-300">Professional Photo</label>
//             <div className="relative">
//               <input 
//                 type="file" 
//                 accept="image/*" 
//                 onChange={handleImageUpload} 
//                 id="file-upload"
//                 className="hidden" 
//               />
//               <label 
//                 htmlFor="file-upload"
//                 className="inline-flex items-center gap-2 bg-slate-950 border border-slate-800 hover:border-amber-500/50 text-slate-300 hover:text-amber-400 px-4 py-2 rounded-lg text-sm transition-all cursor-pointer shadow-sm select-none"
//               >
//                 <Upload className="w-4 h-4" /> Upload via imgBB
//               </label>
//             </div>
//             <p className="text-xs text-slate-500">Supported formats: JPG, PNG. Optimal aspect ratio: 1:1.</p>
//           </div>
//         </div>

//         {/* Form Inputs Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-sm font-medium text-slate-300 flex items-center gap-1.5"><User className="w-4 h-4 text-slate-500" /> Full Name</label>
//             <input 
//               type="text" name="name" required value={profileData.name} onChange={handleChange}
//               className="mt-1.5 block w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 placeholder-slate-700 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 text-sm transition-all"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-slate-300 flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-slate-500" /> Legal Specialization</label>
//             <select 
//               name="specialization" value={profileData.specialization} onChange={handleChange}
//               className="mt-1.5 block w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-gray-300 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 text-sm transition-all"
//             >
//               <option value="Corporate">Corporate Law</option>
//               <option value="Criminal">Criminal Defense</option>
//               <option value="Family">Family & Divorce</option>
//               <option value="Intellectual Property">Intellectual Property</option>
//             </select>
//           </div>

//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-slate-300 flex items-center gap-1.5"><DollarSign className="w-4 h-4 text-slate-500" /> Hourly Consultation Fee ($ USD)</label>
//             <input 
//               type="number" name="fee" required min="1" value={profileData.fee} onChange={handleChange}
//               className="mt-1.5 block w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 text-sm transition-all"
//             />
//           </div>

//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-slate-300 flex items-center gap-1.5"><FileText className="w-4 h-4 text-slate-500" /> Professional Biography Summary</label>
//             <textarea 
//               name="bio" rows="4" required value={profileData.bio} onChange={handleChange}
//               className="mt-1.5 block w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 text-sm transition-all resize-none"
//               placeholder="Provide information regarding your legal accolades..."
//             />
//           </div>
//         </div>

//         {/* Submit Container */}
//         <div className="pt-4 border-t border-slate-800/60 flex justify-end">
//           <button
//             type="submit"
//             disabled={saving || uploading}
//             className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm shadow-lg transition-all active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
//           >
//             {saving ? (
//               <>
//                 <Loader2 className="w-4 h-4 animate-spin" /> Saving...
//               </>
//             ) : (
//               <>
//                 <Save className="w-4 h-4" /> Save Profile Configurations
//               </>
//             )}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// *************************************************************************


// 'use client';

// import React, { useState, useEffect } from 'react';
// import { useSession } from '@/lib/auth-client'; // Using your project's Better Auth client hook
// import { Shield, Upload, DollarSign, BookOpen, FileText, Loader2, Save, User, Trash2, Edit3, Plus, X } from 'lucide-react';

// export default function ManageLegalProfile() {
//   const { data: session, isPending: sessionLoading } = useSession();
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   // 1. Initialize Form State without hardcoded values
//   const [formData, setFormData] = useState({
//     _id: '', // MongoDB uses _id natively
//     name: '',
//     specialization: 'Corporate',
//     fee: '',
//     bio: '',
//     imageUrl: ''
//   });

//   const [isEditing, setIsEditing] = useState(false);
//   const [showForm, setShowForm] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const [saving, setSaving] = useState(false);
//   const [message, setMessage] = useState({ type: '', text: '' });

//   // 2. Set the logged-in lawyer's name automatically when the session loads
//   useEffect(() => {
//     if (session?.user) {
//       setFormData(prev => ({ ...prev, name: session.user.name || '' }));
//     }
//   }, [session]);

//   // 3. READ: Fetch active services belonging to this lawyer from MongoDB
//   useEffect(() => {
//     const fetchLawyerServices = async () => {
//       try {
//         const response = await fetch('/api/lawyer/services'); // Better Auth forwards session cookies automatically
//         if (response.ok) {
//           const data = await response.json();
//           setServices(data);
//         }
//       } catch (err) {
//         console.error("Could not fetch database records:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (session?.user) {
//       fetchLawyerServices();
//     }
//   }, [session]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // imgBB Upload Pipeline
//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setUploading(true);
//     setMessage({ type: '', text: '' });

//     const imgBBKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY; 
//     const data = new FormData();
//     data.append('image', file);

//     try {
//       const response = await fetch(`https://api.imgbb.com/1/upload?key=${imgBBKey}`, {
//         method: 'POST',
//         body: data,
//       });
//       const result = await response.json();

//       if (result.success) {
//         setFormData(prev => ({ ...prev, imageUrl: result.data.url }));
//         setMessage({ type: 'success', text: 'Asset uploaded to imgBB successfully!' });
//       } else {
//         setMessage({ type: 'error', text: 'Image upload failed. Verify your environment keys.' });
//       }
//     } catch (error) {
//       setMessage({ type: 'error', text: 'Network exception during asset dispatch.' });
//     } finally {
//       setUploading(false);
//     }
//   };

//   const startEdit = (service) => {
//     setFormData(service);
//     setIsEditing(true);
//     setShowForm(true);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // 4. DELETE: Remove the item from MongoDB and update the UI list
//   const handleDelete = async (id) => {
//     if (!confirm("Are you sure you want to remove this service option?")) return;
    
//     try {
//       const response = await fetch(`/api/lawyer/services/${id}`, {
//         method: 'DELETE'
//       });

//       if (response.ok) {
//         setServices(prev => prev.filter(item => item._id !== id));
//         setMessage({ type: 'success', text: 'Legal service successfully deleted.' });
//       } else {
//         setMessage({ type: 'error', text: 'Failed to delete data from server.' });
//       }
//     } catch (err) {
//       setMessage({ type: 'error', text: 'Network connection failure.' });
//     }
//   };

//   // 5. CREATE & UPDATE: Handle full database synchronization
//   const handleProfileSubmit = async (e) => {
//     e.preventDefault();
//     setSaving(true);
//     setMessage({ type: '', text: '' });

//     const endpoint = isEditing ? `/api/lawyer/services/${formData._id}` : '/api/lawyer/services';
//     const method = isEditing ? 'PUT' : 'POST';

//     try {
//       const response = await fetch(endpoint, {
//         method: method,
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const updatedOrNewData = await response.json();

//         if (isEditing) {
//           setServices(prev => prev.map(item => item._id === formData._id ? updatedOrNewData : item));
//           setMessage({ type: 'success', text: 'Service details updated successfully!' });
//         } else {
//           setServices(prev => [updatedOrNewData, ...prev]);
//           setMessage({ type: 'success', text: 'New legal service added successfully!' });
//         }

//         setShowForm(false);
//         setIsEditing(false);
//         setFormData({
//           _id: '',
//           name: session?.user?.name || '',
//           specialization: 'Corporate',
//           fee: '',
//           bio: '',
//           imageUrl: ''
//         });
//       } else {
//         setMessage({ type: 'error', text: 'Server rejected data modifications.' });
//       }
//     } catch (err) {
//       setMessage({ type: 'error', text: 'Error executing profile actions.' });
//     } finally {
//       setSaving(false);
//     }
//   };

//   if (sessionLoading || loading) {
//     return (
//       <div className="flex items-center justify-center min-h-[400px]">
//         <Loader2 className="w-8 h-8 text-amber-500 animate-spin" />
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 max-w-5xl mx-auto space-y-6">
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//         <div>
//           <h1 className="text-2xl font-serif font-bold text-gray-100 tracking-wide flex items-center gap-2">
//             <Shield className="text-amber-500 w-6 h-6" /> Manage Legal Services
//           </h1>
//           <p className="text-sm text-slate-400 mt-1">Configure, catalog, modify or delete your available consulting listings.</p>
//         </div>
//         {!showForm && (
//           <button
//             onClick={() => { setShowForm(true); setIsEditing(false); }}
//             className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-4 py-2.5 rounded-lg text-sm transition-all cursor-pointer shadow-lg"
//           >
//             <Plus className="w-4 h-4 stroke-[3]" /> Add New Service
//           </button>
//         )}
//       </div>

//       {message.text && (
//         <div className={`p-4 rounded-lg border text-sm font-medium ${
//           message.type === 'success' ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-400' : 'bg-red-950/30 border-red-500/30 text-red-400'
//         }`}>
//           {message.text}
//         </div>
//       )}

//       {showForm && (
//         <form onSubmit={handleProfileSubmit} className="bg-slate-900/80 border border-slate-800/80 rounded-xl p-6 space-y-6 backdrop-blur-md relative animate-in fade-in duration-200">
//           <button 
//             type="button" 
//             onClick={() => setShowForm(false)}
//             className="absolute top-4 right-4 text-slate-500 hover:text-slate-300 transition-colors"
//           >
//             <X className="w-5 h-5" />
//           </button>

//           <h3 className="text-lg font-medium text-gray-200">
//             {isEditing ? 'Modify Service Segment' : 'Create New Service Offering'}
//           </h3>
          
//           <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-slate-800/60">
//             <div className="relative w-24 h-24 rounded-xl overflow-hidden border border-slate-700 bg-slate-950">
//               {formData.imageUrl ? (
//                 <img src={formData.imageUrl} alt="Upload Preview" className="w-full h-full object-cover" />
//               ) : (
//                 <div className="w-full h-full flex items-center justify-center text-slate-600 bg-slate-950">No Image</div>
//               )}
//               {uploading && (
//                 <div className="absolute inset-0 bg-slate-950/80 flex items-center justify-center">
//                   <Loader2 className="w-5 h-5 text-amber-500 animate-spin" />
//                 </div>
//               )}
//             </div>
//             <div className="space-y-2 text-center sm:text-left">
//               <label className="block text-sm font-medium text-slate-300">Profile Asset Representation</label>
//               <input type="file" accept="image/*" onChange={handleImageUpload} id="file-upload" className="hidden" />
//               <label htmlFor="file-upload" className="inline-flex items-center gap-2 bg-slate-950 border border-slate-800 hover:border-amber-500/50 text-slate-300 hover:text-amber-400 px-4 py-2 rounded-lg text-xs transition-all cursor-pointer shadow-sm select-none">
//                 <Upload className="w-3.5 h-3.5" /> Upload via imgBB
//               </label>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-slate-300 flex items-center gap-1.5"><User className="w-4 h-4 text-slate-500" /> Professional Identity Name</label>
//               <input type="text" name="name" required value={formData.name} onChange={handleChange} className="mt-1.5 block w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all" />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-slate-300 flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-slate-500" /> Categorical Specialization</label>
//               <select name="specialization" value={formData.specialization} onChange={handleChange} className="mt-1.5 block w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all">
//                 <option value="Corporate">Corporate Law</option>
//                 <option value="Criminal">Criminal Defense</option>
//                 <option value="Family">Family & Divorce</option>
//                 <option value="Intellectual Property">Intellectual Property</option>
//               </select>
//             </div>

//             <div className="md:col-span-2">
//               <label className="block text-sm font-medium text-slate-300 flex items-center gap-1.5"><DollarSign className="w-4 h-4 text-slate-500" /> Hourly Rate Consultation Fee ($ USD)</label>
//               <input type="number" name="fee" required min="1" value={formData.fee} onChange={handleChange} className="mt-1.5 block w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all" />
//             </div>

//             <div className="md:col-span-2">
//               <label className="block text-sm font-medium text-slate-300 flex items-center gap-1.5"><FileText className="w-4 h-4 text-slate-500" /> Service Summary Detail / Bio</label>
//               <textarea name="bio" rows="3" required value={formData.bio} onChange={handleChange} className="mt-1.5 block w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all resize-none" placeholder="Elaborate on localized legal experience metrics..." />
//             </div>
//           </div>

//           <div className="pt-4 border-t border-slate-800/60 flex justify-end gap-3">
//             <button type="button" onClick={() => setShowForm(false)} className="bg-slate-950 border border-slate-800 px-4 py-2 text-slate-400 text-sm font-medium rounded-lg hover:bg-slate-900 transition-colors cursor-pointer">Cancel</button>
//             <button type="submit" disabled={saving || uploading} className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm transition-all cursor-pointer disabled:opacity-50">
//               {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />} {isEditing ? 'Update Service' : 'Save Service'}
//             </button>
//           </div>
//         </form>
//       )}

//       <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden shadow-xl backdrop-blur-sm">
//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-slate-950 border-b border-slate-800 text-slate-400 text-xs font-semibold uppercase tracking-wider">
//                 <th className="px-6 py-4">Image & Provider Name</th>
//                 <th className="px-6 py-4">Specialization</th>
//                 <th className="px-6 py-4">Hourly Fee</th>
//                 <th className="px-6 py-4 text-right">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-800/60 text-sm text-gray-200">
//               {services.length === 0 ? (
//                 <tr>
//                   <td colSpan="4" className="text-center py-12 text-slate-500">No active legal service provisions mapped. Click add to register a line.</td>
//                 </tr>
//               ) : (
//                 services.map((service) => (
//                   <tr key={service._id} className="hover:bg-slate-800/10 transition-colors">
//                     <td className="px-6 py-4 flex items-center gap-3">
//                       {service.imageUrl ? (
//                         <img src={service.imageUrl} alt="" className="w-9 h-9 rounded-lg object-cover border border-slate-700" />
//                       ) : (
//                         <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-xs text-slate-500 border border-slate-700">No Image</div>
//                       )}
//                       <div>
//                         <div className="font-medium text-gray-200">{service.name}</div>
//                         <div className="text-xs text-slate-400 line-clamp-1 max-w-xs mt-0.5">{service.bio}</div>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4">
//                       <span className="bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium px-2.5 py-1 rounded-full uppercase tracking-wider">
//                         {service.specialization}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-slate-300 font-semibold">${service.fee} / hr</td>
//                     <td className="px-6 py-4 text-right">
//                       <div className="inline-flex gap-2">
//                         <button 
//                           onClick={() => startEdit(service)}
//                           className="p-2 text-slate-400 hover:text-amber-400 hover:bg-slate-800/50 rounded-lg transition-colors cursor-pointer"
//                           title="Edit Service"
//                         >
//                           <Edit3 className="w-4 h-4" />
//                         </button>
//                         <button 
//                           onClick={() => handleDelete(service._id)}
//                           className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-800/50 rounded-lg transition-colors cursor-pointer"
//                           title="Delete Service"
//                         >
//                           <Trash2 className="w-4 h-4" />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// ***********************************************************************************


// 'use client';

// import React, { useState, useEffect } from 'react';
// import { useSession } from '@/lib/auth-client'; // Better Auth client hook
// import { Shield, Upload, DollarSign, BookOpen, FileText, Loader2, Save, User, Trash2, Edit3, Plus, X } from 'lucide-react';

// export default function ManageLegalProfile() {
//   const { data: session, isPending: sessionLoading } = useSession();
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   // Initialize form state
//   const [formData, setFormData] = useState({
//     _id: '', // MongoDB native identifier
//     name: '',
//     specialization: 'Corporate',
//     fee: '',
//     bio: '',
//     imageUrl: ''
//   });

//   const [isEditing, setIsEditing] = useState(false);
//   const [showForm, setShowForm] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const [saving, setSaving] = useState(false);
//   const [message, setMessage] = useState({ type: '', text: '' });

//   // Sync user name from session when loaded
//   useEffect(() => {
//     if (session?.user) {
//       setFormData(prev => ({ ...prev, name: session.user.name || '' }));
//     }
//   }, [session]);

//   // READ: Fetch active services with a fallback system to prevent infinite loading spinners
//   useEffect(() => {
//     const fetchLawyerServices = async () => {
//       try {
//         const response = await fetch('/api/lawyer/services');
        
//         if (response.ok) {
//           const data = await response.json();
//           setServices(Array.isArray(data) ? data : []);
//         } else {
//           console.warn("Backend route returned an error or is unconfigured. Defaulting to local view.");
//           setServices([]); 
//         }
//       } catch (err) {
//         console.error("Could not reach backend infrastructure, using safe fallback array:", err);
//         setServices([]); 
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (!sessionLoading) {
//       if (session?.user) {
//         fetchLawyerServices();
//       } else {
//         setLoading(false); // If no session found, unlock screen to let user see empty states or login states
//       }
//     }
//   }, [session, sessionLoading]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // imgBB Upload Pipeline
//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setUploading(true);
//     setMessage({ type: '', text: '' });

//     const imgBBKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY; 
//     const data = new FormData();
//     data.append('image', file);

//     try {
//       const response = await fetch(`https://api.imgbb.com/1/upload?key=${imgBBKey}`, {
//         method: 'POST',
//         body: data,
//       });
//       const result = await response.json();

//       if (result.success) {
//         setFormData(prev => ({ ...prev, imageUrl: result.data.url }));
//         setMessage({ type: 'success', text: 'Asset uploaded to imgBB successfully!' });
//       } else {
//         setMessage({ type: 'error', text: 'Image upload failed. Verify your environment keys.' });
//       }
//     } catch (error) {
//       setMessage({ type: 'error', text: 'Network exception during asset dispatch.' });
//     } finally {
//       setUploading(false);
//     }
//   };

//   const startEdit = (service) => {
//     setFormData(service);
//     setIsEditing(true);
//     setShowForm(true);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // DELETE: Dynamic backend delete with frontend synchronization
//   const handleDelete = async (id) => {
//     if (!confirm("Are you sure you want to remove this service option?")) return;
    
//     try {
//       const response = await fetch(`/api/lawyer/services/${id}`, {
//         method: 'DELETE'
//       });

//       if (response.ok) {
//         setServices(prev => prev.filter(item => item._id !== id));
//         setMessage({ type: 'success', text: 'Legal service successfully deleted.' });
//       } else {
//         // Local state execution fallback if backend is not finished yet
//         setServices(prev => prev.filter(item => item._id !== id));
//         setMessage({ type: 'success', text: 'Removed from local view (Backend route pending).' });
//       }
//     } catch (err) {
//       // Local state fallback for seamless prototyping
//       setServices(prev => prev.filter(item => item._id !== id));
//       setMessage({ type: 'success', text: 'Removed option from structural preview state.' });
//     }
//   };

//   // CREATE & UPDATE: Handle database sync or client state fallbacks seamlessly
//   const handleProfileSubmit = async (e) => {
//     e.preventDefault();
//     setSaving(true);
//     setMessage({ type: '', text: '' });

//     const endpoint = isEditing ? `/api/lawyer/services/${formData._id}` : '/api/lawyer/services';
//     const method = isEditing ? 'PUT' : 'POST';

//     try {
//       const response = await fetch(endpoint, {
//         method: method,
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const updatedOrNewData = await response.json();

//         if (isEditing) {
//           setServices(prev => prev.map(item => item._id === formData._id ? updatedOrNewData : item));
//           setMessage({ type: 'success', text: 'Service details updated successfully in DB!' });
//         } else {
//           setServices(prev => [updatedOrNewData, ...prev]);
//           setMessage({ type: 'success', text: 'New legal service registered into DB!' });
//         }
//       } else {
//         // Fallback Client Action Logic if backend routes aren't built yet
//         handleFallbackSubmit();
//       }
//     } catch (err) {
//       // Fallback Client Action Logic if backend server is unreachable
//       handleFallbackSubmit();
//     } finally {
//       setShowForm(false);
//       setIsEditing(false);
//       setSaving(false);
//     }
//   };

//   // Client prototyping layout handler
//   const handleFallbackSubmit = () => {
//     if (isEditing) {
//       setServices(prev => prev.map(item => item._id === formData._id ? formData : item));
//       setMessage({ type: 'success', text: 'Service modified dynamically (Preview Mode).' });
//     } else {
//       const mockNewService = { ...formData, _id: Date.now().toString() };
//       setServices(prev => [mockNewService, ...prev]);
//       setMessage({ type: 'success', text: 'New legal service added dynamically (Preview Mode).' });
//     }

//     setFormData({
//       _id: '',
//       name: session?.user?.name || '',
//       specialization: 'Corporate',
//       fee: '',
//       bio: '',
//       imageUrl: ''
//     });
//   };

//   // Spinner logic triggered ONLY while verifying auth context blocks
//   if (sessionLoading || (loading && services.length === 0 && session?.user)) {
//     return (
//       <div className="flex items-center justify-center min-h-[400px]">
//         <Loader2 className="w-8 h-8 text-amber-500 animate-spin" />
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 max-w-5xl mx-auto space-y-6">
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//         <div>
//           <h1 className="text-2xl font-serif font-bold text-gray-100 tracking-wide flex items-center gap-2">
//             <Shield className="text-amber-500 w-6 h-6" /> Manage Legal Services
//           </h1>
//           <p className="text-sm text-slate-400 mt-1">Configure, catalog, modify or delete your available consulting listings.</p>
//         </div>
//         {!showForm && (
//           <button
//             onClick={() => { setShowForm(true); setIsEditing(false); }}
//             className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-4 py-2.5 rounded-lg text-sm transition-all cursor-pointer shadow-lg"
//           >
//             <Plus className="w-4 h-4 stroke-[3]" /> Add New Service
//           </button>
//         )}
//       </div>

//       {message.text && (
//         <div className={`p-4 rounded-lg border text-sm font-medium ${
//           message.type === 'success' ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-400' : 'bg-red-950/30 border-red-500/30 text-red-400'
//         }`}>
//           {message.text}
//         </div>
//       )}

//       {/* Entry & Management UI Form Container */}
//       {showForm && (
//         <form onSubmit={handleProfileSubmit} className="bg-slate-900/80 border border-slate-800/80 rounded-xl p-6 space-y-6 backdrop-blur-md relative animate-in fade-in duration-200">
//           <button 
//             type="button" 
//             onClick={() => setShowForm(false)}
//             className="absolute top-4 right-4 text-slate-500 hover:text-slate-300 transition-colors"
//           >
//             <X className="w-5 h-5" />
//           </button>

//           <h3 className="text-lg font-medium text-gray-200">
//             {isEditing ? 'Modify Service Segment' : 'Create New Service Offering'}
//           </h3>
          
//           <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-slate-800/60">
//             <div className="relative w-24 h-24 rounded-xl overflow-hidden border border-slate-700 bg-slate-950">
//               {formData.imageUrl ? (
//                 <img src={formData.imageUrl} alt="Upload Preview" className="w-full h-full object-cover" />
//               ) : (
//                 <div className="w-full h-full flex items-center justify-center text-xs text-slate-600 bg-slate-950">No Image</div>
//               )}
//               {uploading && (
//                 <div className="absolute inset-0 bg-slate-950/80 flex items-center justify-center">
//                   <Loader2 className="w-5 h-5 text-amber-500 animate-spin" />
//                 </div>
//               )}
//             </div>
//             <div className="space-y-2 text-center sm:text-left">
//               <label className="block text-sm font-medium text-slate-300">Profile Asset Representation</label>
//               <input type="file" accept="image/*" onChange={handleImageUpload} id="file-upload" className="hidden" />
//               <label htmlFor="file-upload" className="inline-flex items-center gap-2 bg-slate-950 border border-slate-800 hover:border-amber-500/50 text-slate-300 hover:text-amber-400 px-4 py-2 rounded-lg text-xs transition-all cursor-pointer shadow-sm select-none">
//                 <Upload className="w-3.5 h-3.5" /> Upload via imgBB
//               </label>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-slate-300 flex items-center gap-1.5"><User className="w-4 h-4 text-slate-500" /> Professional Identity Name</label>
//               <input type="text" name="name" required value={formData.name} onChange={handleChange} className="mt-1.5 block w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all" />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-slate-300 flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-slate-500" /> Categorical Specialization</label>
//               <select name="specialization" value={formData.specialization} onChange={handleChange} className="mt-1.5 block w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all">
//                 <option value="Corporate">Corporate Law</option>
//                 <option value="Criminal">Criminal Defense</option>
//                 <option value="Family">Family & Divorce</option>
//                 <option value="Intellectual Property">Intellectual Property</option>
//               </select>
//             </div>

//             <div className="md:col-span-2">
//               <label className="block text-sm font-medium text-slate-300 flex items-center gap-1.5"><DollarSign className="w-4 h-4 text-slate-500" /> Hourly Rate Consultation Fee ($ USD)</label>
//               <input type="number" name="fee" required min="1" value={formData.fee} onChange={handleChange} className="mt-1.5 block w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all" />
//             </div>

//             <div className="md:col-span-2">
//               <label className="block text-sm font-medium text-slate-300 flex items-center gap-1.5"><FileText className="w-4 h-4 text-slate-500" /> Service Summary Detail / Bio</label>
//               <textarea name="bio" rows="3" required value={formData.bio} onChange={handleChange} className="mt-1.5 block w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all resize-none" placeholder="Elaborate on localized legal experience metrics..." />
//             </div>
//           </div>

//           <div className="pt-4 border-t border-slate-800/60 flex justify-end gap-3">
//             <button type="button" onClick={() => setShowForm(false)} className="bg-slate-950 border border-slate-800 px-4 py-2 text-slate-400 text-sm font-medium rounded-lg hover:bg-slate-900 transition-colors cursor-pointer">Cancel</button>
//             <button type="submit" disabled={saving || uploading} className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm transition-all cursor-pointer disabled:opacity-50">
//               {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />} {isEditing ? 'Update Service' : 'Save Service'}
//             </button>
//           </div>
//         </form>
//       )}

//       {/* Services Listings Management Data Table Row Section */}
//       <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden shadow-xl backdrop-blur-sm">
//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-slate-950 border-b border-slate-800 text-slate-400 text-xs font-semibold uppercase tracking-wider">
//                 <th className="px-6 py-4">Image & Provider Name</th>
//                 <th className="px-6 py-4">Specialization</th>
//                 <th className="px-6 py-4">Hourly Fee</th>
//                 <th className="px-6 py-4 text-right">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-800/60 text-sm text-gray-200">
//               {services.length === 0 ? (
//                 <tr>
//                   <td colSpan="4" className="text-center py-12 text-slate-500">No active legal service provisions mapped. Click add to register a line.</td>
//                 </tr>
//               ) : (
//                 services.map((service) => (
//                   <tr key={service._id} className="hover:bg-slate-800/10 transition-colors">
//                     <td className="px-6 py-4 flex items-center gap-3">
//                       {service.imageUrl ? (
//                         <img src={service.imageUrl} alt="" className="w-9 h-9 rounded-lg object-cover border border-slate-700" />
//                       ) : (
//                         <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-xs text-slate-500 border border-slate-700">No Image</div>
//                       )}
//                       <div>
//                         <div className="font-medium text-gray-200">{service.name}</div>
//                         <div className="text-xs text-slate-400 line-clamp-1 max-w-xs mt-0.5">{service.bio}</div>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4">
//                       <span className="bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium px-2.5 py-1 rounded-full uppercase tracking-wider">
//                         {service.specialization}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-slate-300 font-semibold">${service.fee} / hr</td>
//                     <td className="px-6 py-4 text-right">
//                       <div className="inline-flex gap-2">
//                         <button 
//                           onClick={() => startEdit(service)}
//                           className="p-2 text-slate-400 hover:text-amber-400 hover:bg-slate-800/50 rounded-lg transition-colors cursor-pointer"
//                           title="Edit Service"
//                         >
//                           <Edit3 className="w-4 h-4" />
//                         </button>
//                         <button 
//                           onClick={() => handleDelete(service._id)}
//                           className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-800/50 rounded-lg transition-colors cursor-pointer"
//                           title="Delete Service"
//                         >
//                           <Trash2 className="w-4 h-4" />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// ****************************************************************************


// 'use client';

// import React, { useState, useEffect } from 'react';
// import { useSession } from '@/lib/auth-client'; // Better Auth hook
// import { 
//   createLegalService, 
//   getAllLegalServices, 
//   updateLegalService, 
//   deleteLegalService 
// } from '@/lib/actions/services';
// import { Shield, Upload, DollarSign, BookOpen, FileText, Loader2, Save, User, Trash2, Edit3, Plus, X } from 'lucide-react';

// export default function ManageLegalProfile() {
//   const { data: session, isPending: sessionLoading } = useSession();
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   // Initialize dynamic form state
//   const [formData, setFormData] = useState({
//     _id: '',
//     name: '',
//     specialization: 'Corporate',
//     fee: '',
//     bio: '',
//     imageUrl: ''
//   });

//   const [isEditing, setIsEditing] = useState(false);
//   const [showForm, setShowForm] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const [saving, setSaving] = useState(false);
//   const [message, setMessage] = useState({ type: '', text: '' });

//   // Sync user name from authenticated session context
//   useEffect(() => {
//     if (session?.user) {
//       setFormData(prev => ({ ...prev, name: session.user.name || '' }));
//     }
//   }, [session]);

//   // READ: Load lawyer specific services on component mount
//   useEffect(() => {
//     const loadServices = async () => {
//       try {
//         const data = await getAllLegalServices();
//         setServices(data);
//       } catch (err) {
//         setMessage({ type: 'error', text: 'Could not synchronize with backend stream.' });
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadServices();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // imgBB Upload Pipeline
//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setUploading(true);
//     setMessage({ type: '', text: '' });

//     const imgBBKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY; 
//     const data = new FormData();
//     data.append('image', file);

//     try {
//       const response = await fetch(`https://api.imgbb.com/1/upload?key=${imgBBKey}`, {
//         method: 'POST',
//         body: data,
//       });
//       const result = await response.json();

//       if (result.success) {
//         setFormData(prev => ({ ...prev, imageUrl: result.data.url }));
//         setMessage({ type: 'success', text: 'Asset uploaded to imgBB successfully!' });
//       } else {
//         setMessage({ type: 'error', text: 'Image upload failed. Verify API configurations.' });
//       }
//     } catch (error) {
//       setMessage({ type: 'error', text: 'Network exception during asset dispatch.' });
//     } finally {
//       setUploading(false);
//     }
//   };

//   const startEdit = (service) => {
//     setFormData(service);
//     setIsEditing(true);
//     setShowForm(true);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // DELETE: Triggered from data table row
//   const handleDelete = async (id) => {
//     if (!confirm("Are you sure you want to remove this service option?")) return;
    
//     try {
//       await deleteLegalService(id);
//       setServices(prev => prev.filter(item => item._id !== id));
//       setMessage({ type: 'success', text: 'Legal service successfully wiped from database.' });
//     } catch (err) {
//       setMessage({ type: 'error', text: 'Failed to delete service option.' });
//     }
//   };

//   // CREATE & UPDATE form submission route handler
//   const handleProfileSubmit = async (e) => {
//     e.preventDefault();
//     setSaving(true);
//     setMessage({ type: '', text: '' });

//     try {
//       if (isEditing) {
//         const updated = await updateLegalService(formData._id, formData);
//         setServices(prev => prev.map(item => item._id === formData._id ? updated : item));
//         setMessage({ type: 'success', text: 'Service details updated successfully!' });
//       } else {
//         const created = await createLegalService(formData);
//         setServices(prev => [created, ...prev]);
//         setMessage({ type: 'success', text: 'New legal service registered successfully!' });
//       }
      
//       // Reset State
//       setShowForm(false);
//       setIsEditing(false);
//       setFormData({
//         _id: '',
//         name: session?.user?.name || '',
//         specialization: 'Corporate',
//         fee: '',
//         bio: '',
//         imageUrl: ''
//       });
//     } catch (err) {
//       setMessage({ type: 'error', text: 'Error executing pipeline operations.' });
//     } finally {
//       setSaving(false);
//     }
//   };

//   if (sessionLoading || loading) {
//     return (
//       <div className="flex items-center justify-center min-h-[400px]">
//         <Loader2 className="w-8 h-8 text-amber-500 animate-spin" />
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 max-w-5xl mx-auto space-y-6">
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//         <div>
//           <h1 className="text-2xl font-serif font-bold text-gray-100 tracking-wide flex items-center gap-2">
//             <Shield className="text-amber-500 w-6 h-6" /> Manage Legal Services
//           </h1>
//           <p className="text-sm text-slate-400 mt-1">Configure, catalog, modify or delete your available consulting listings.</p>
//         </div>
//         {!showForm && (
//           <button
//             onClick={() => { setShowForm(true); setIsEditing(false); }}
//             className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-4 py-2.5 rounded-lg text-sm transition-all cursor-pointer shadow-lg"
//           >
//             <Plus className="w-4 h-4 stroke-[3]" /> Add New Service
//           </button>
//         )}
//       </div>

//       {message.text && (
//         <div className={`p-4 rounded-lg border text-sm font-medium ${
//           message.type === 'success' ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-400' : 'bg-red-950/30 border-red-500/30 text-red-400'
//         }`}>
//           {message.text}
//         </div>
//       )}

//       {/* Dynamic Slide-down input Form */}
//       {showForm && (
//         <form onSubmit={handleProfileSubmit} className="bg-slate-900/80 border border-slate-800/80 rounded-xl p-6 space-y-6 backdrop-blur-md relative animate-in fade-in duration-200">
//           <button 
//             type="button" 
//             onClick={() => setShowForm(false)}
//             className="absolute top-4 right-4 text-slate-500 hover:text-slate-300 transition-colors"
//           >
//             <X className="w-5 h-5" />
//           </button>

//           <h3 className="text-lg font-medium text-gray-200">
//             {isEditing ? 'Modify Service Segment' : 'Create New Service Offering'}
//           </h3>
          
//           <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-slate-800/60">
//             <div className="relative w-24 h-24 rounded-xl overflow-hidden border border-slate-700 bg-slate-950">
//               {formData.imageUrl ? (
//                 <img src={formData.imageUrl} alt="Upload Preview" className="w-full h-full object-cover" />
//               ) : (
//                 <div className="w-full h-full flex items-center justify-center text-xs text-slate-600 bg-slate-950">No Image</div>
//               )}
//               {uploading && (
//                 <div className="absolute inset-0 bg-slate-950/80 flex items-center justify-center">
//                   <Loader2 className="w-5 h-5 text-amber-500 animate-spin" />
//                 </div>
//               )}
//             </div>
//             <div className="space-y-2 text-center sm:text-left">
//               <label className="block text-sm font-medium text-slate-300">Profile Asset Representation</label>
//               <input type="file" accept="image/*" onChange={handleImageUpload} id="file-upload" className="hidden" />
//               <label htmlFor="file-upload" className="inline-flex items-center gap-2 bg-slate-950 border border-slate-800 hover:border-amber-500/50 text-slate-300 hover:text-amber-400 px-4 py-2 rounded-lg text-xs transition-all cursor-pointer shadow-sm select-none">
//                 <Upload className="w-3.5 h-3.5" /> Upload via imgBB
//               </label>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-slate-300 flex items-center gap-1.5"><User className="w-4 h-4 text-slate-500" /> Professional Identity Name</label>
//               <input type="text" name="name" required value={formData.name} onChange={handleChange} className="mt-1.5 block w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all" />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-slate-300 flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-slate-500" /> Categorical Specialization</label>
//               <select name="specialization" value={formData.specialization} onChange={handleChange} className="mt-1.5 block w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all">
//                 <option value="Corporate">Corporate Law</option>
//                 <option value="Criminal">Criminal Defense</option>
//                 <option value="Family">Family & Divorce</option>
//                 <option value="Intellectual Property">Intellectual Property</option>
//               </select>
//             </div>

//             <div className="md:col-span-2">
//               <label className="block text-sm font-medium text-slate-300 flex items-center gap-1.5"><DollarSign className="w-4 h-4 text-slate-500" /> Hourly Rate Consultation Fee ($ USD)</label>
//               <input type="number" name="fee" required min="1" value={formData.fee} onChange={handleChange} className="mt-1.5 block w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all" />
//             </div>

//             <div className="md:col-span-2">
//               <label className="block text-sm font-medium text-slate-300 flex items-center gap-1.5"><FileText className="w-4 h-4 text-slate-500" /> Service Summary Detail / Bio</label>
//               <textarea name="bio" rows="3" required value={formData.bio} onChange={handleChange} className="mt-1.5 block w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all resize-none" placeholder="Elaborate on localized legal experience metrics..." />
//             </div>
//           </div>

//           <div className="pt-4 border-t border-slate-800/60 flex justify-end gap-3">
//             <button type="button" onClick={() => setShowForm(false)} className="bg-slate-950 border border-slate-800 px-4 py-2 text-slate-400 text-sm font-medium rounded-lg hover:bg-slate-900 transition-colors cursor-pointer">Cancel</button>
//             <button type="submit" disabled={saving || uploading} className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm transition-all cursor-pointer disabled:opacity-50">
//               {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />} {isEditing ? 'Update Service' : 'Save Service'}
//             </button>
//           </div>
//         </form>
//       )}

//       {/* Main Services Table */}
//       <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden shadow-xl backdrop-blur-sm">
//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-slate-950 border-b border-slate-800 text-slate-400 text-xs font-semibold uppercase tracking-wider">
//                 <th className="px-6 py-4">Image & Provider Name</th>
//                 <th className="px-6 py-4">Specialization</th>
//                 <th className="px-6 py-4">Hourly Fee</th>
//                 <th className="px-6 py-4 text-right">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-800/60 text-sm text-gray-200">
//               {services.length === 0 ? (
//                 <tr>
//                   <td colSpan="4" className="text-center py-12 text-slate-500">No active legal service provisions mapped. Click add to register a line.</td>
//                 </tr>
//               ) : (
//                 services.map((service) => (
//                   <tr key={service._id} className="hover:bg-slate-800/10 transition-colors">
//                     <td className="px-6 py-4 flex items-center gap-3">
//                       {service.imageUrl ? (
//                         <img src={service.imageUrl} alt="" className="w-9 h-9 rounded-lg object-cover border border-slate-700" />
//                       ) : (
//                         <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-xs text-slate-500 border border-slate-700">No Image</div>
//                       )}
//                       <div>
//                         <div className="font-medium text-gray-200">{service.name}</div>
//                         <div className="text-xs text-slate-400 line-clamp-1 max-w-xs mt-0.5">{service.bio}</div>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4">
//                       <span className="bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium px-2.5 py-1 rounded-full uppercase tracking-wider">
//                         {service.specialization}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-slate-300 font-semibold">${service.fee} / hr</td>
//                     <td className="px-6 py-4 text-right">
//                       <div className="inline-flex gap-2">
//                         <button 
//                           onClick={() => startEdit(service)}
//                           className="p-2 text-slate-400 hover:text-amber-400 hover:bg-slate-800/50 rounded-lg transition-colors cursor-pointer"
//                           title="Edit Service"
//                         >
//                           <Edit3 className="w-4 h-4" />
//                         </button>
//                         <button 
//                           onClick={() => handleDelete(service._id)}
//                           className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-800/50 rounded-lg transition-colors cursor-pointer"
//                           title="Delete Service"
//                         >
//                           <Trash2 className="w-4 h-4" />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// *********************************************************************

// import { getPlanById } from '@/lib/api/plans';
// import { getUserSession } from '@/lib/core/session';
// import { redirect } from 'next/navigation';
// import React from 'react';
// import Link from 'next/link';
// // Gravity UI Icons (As used in your context reference)
// import { ShieldExclamation, CircleInfo, Rocket } from '@gravity-ui/icons';

// const ManageLegalProfilePage = async () => {
//     const user = await getUserSession();
    
//     if (!user) {
//         redirect('/auth/signin?redirect=/dashboard/lawyer/manage-legal-profile');
//     }

//     if (user.role !== 'lawyer') {
//         return (
//             <div className="w-full min-h-[80vh] flex flex-col justify-center items-center text-white p-6">
//                 <div className="max-w-md w-full text-center p-8 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl">
//                     <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                         <ShieldExclamation className="w-6 h-6" />
//                     </div>
//                     <h3 className="text-xl font-bold text-zinc-100 mb-2">Access Restricted</h3>
//                     <p className="text-zinc-400 text-sm leading-relaxed mb-6">
//                         Only verified lawyers can access profile management configurations.
//                     </p>
//                 </div>
//             </div>
//         );
//     }

//     // লইয়ারের বর্তমান প্ল্যান চেক করা (Default: lawyer_unverified)
//     const plan = await getPlanById(user?.plan || 'lawyer_unverified');
    
//     // ধরি আনভেরিফাইড লইয়ারের সার্ভিস কাউন্ট ০, প্রিমিয়াম হলে ১০টি করা যাবে
//     const currentServiceCount = 0; 
//     const hasReachedLimit = plan.maxServices === 0;
//     const usagePercentage = plan.maxServices > 0 ? (currentServiceCount / plan.maxServices) * 100 : 0;

//     return (
//         <div className="w-full min-h-screen bg-zinc-950 text-zinc-50 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-3xl mx-auto space-y-8">
                
//                 {/* 1. Subscription & One-time Publishing Fee Quota Tracker Card */}
//                 <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-lg">
//                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
//                         <div>
//                             <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
//                                 Verification & Publishing Status
//                             </span>
//                             <h2 className="text-lg font-bold text-zinc-100 mt-0.5">
//                                 Profile Status: <span className={hasReachedLimit ? "text-amber-400" : "text-emerald-400"}>{plan.name}</span>
//                             </h2>
//                         </div>
//                         <span className="self-start sm:self-center px-2.5 py-1 text-xs font-medium rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
//                             Active Tier: <strong className="text-white font-semibold">{plan.name}</strong>
//                         </span>
//                     </div>

//                     {/* Progress Bar (0% for Unverified, 100% for Verified) */}
//                     <div className="w-full bg-zinc-800 h-2.5 rounded-full overflow-hidden mb-5">
//                         <div 
//                             className={`h-full transition-all duration-500 rounded-full ${
//                                 hasReachedLimit ? 'bg-amber-500' : 'bg-emerald-500'
//                             }`}
//                             style={{ width: `${hasReachedLimit ? 10 : 100}%` }}
//                         />
//                     </div>

//                     {/* Upsell Paywall Message */}
//                     <div className="flex items-start gap-3 bg-amber-950/30 border border-amber-900/50 rounded-xl p-4 text-sm text-amber-300/90">
//                         <Rocket className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
//                         <div className="flex-1 sm:flex sm:items-center sm:justify-between gap-4">
//                             <p>Pay your one-time professional publishing fee to list your card on the "Browse Lawyers" catalog.</p>
//                             <Link 
//                                 href="/dashboard/lawyer/pay-verification" 
//                                 className="inline-block mt-2 sm:mt-0 whitespace-nowrap text-xs font-bold bg-amber-600 hover:bg-amber-500 text-zinc-950 px-3 py-1.5 rounded-lg transition"
//                             >
//                                 Pay Verification Fee ($49)
//                             </Link>
//                         </div>
//                     </div>
//                 </div>

//                 {/* 2. Content Control Block */}
//                 {hasReachedLimit ? (
//                     <div className="bg-zinc-900/50 border border-dashed border-zinc-800 rounded-2xl p-8 text-center flex flex-col items-center justify-center">
//                         <div className="w-10 h-10 bg-zinc-800 text-zinc-400 rounded-full flex items-center justify-center mb-3">
//                             <CircleInfo className="w-5 h-5" />
//                         </div>
//                         <h4 className="text-base font-semibold text-zinc-200">Publishing License Required</h4>
//                         <p className="text-sm text-zinc-500 max-w-sm mt-1">
//                             Your legal directory listing is currently hidden from clients. Complete the baseline activation payment above to unlock profile management.
//                         </p>
//                     </div>
//                 ) : (
//                     <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
//                         <h3 className="text-lg font-bold">Manage Services Form (Active View)</h3>
//                         <p className="text-zinc-400 text-sm mt-1">Add or update the legal specializations you provide.</p>
//                         {/* আপনার বাকি CRUD ফর্ম বা টেবিল এখানে বসবে */}
//                     </div>
//                 )}
                
//             </div>
//         </div>
//     );
// };

// export default ManageLegalProfilePage;

// *******************************************************

import { getPlanById } from '@/lib/api/plans';
import { getUserSession } from '@/lib/core/session';
import { redirect } from 'next/navigation';
import React from 'react';
import { ShieldExclamation, CircleInfo, Rocket } from '@gravity-ui/icons';

// ফোর্স ডাইনামিক রেন্ডারিং যাতে লাইভ প্ল্যান সিঙ্ক হয়
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const ManageLegalProfilePage = async () => {
    const user = await getUserSession();
    
    if (!user) {
        redirect('/auth/signin?redirect=/dashboard/lawyer/manage-legal-profile');
    }

    if (user.role !== 'lawyer') {
        return (
            <div className="w-full min-h-[80vh] flex flex-col justify-center items-center text-white p-6">
                <div className="max-w-md w-full text-center p-8 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl">
                    <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShieldExclamation className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-100 mb-2">Access Restricted</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        Only verified lawyers can access profile management configurations.
                    </p>
                </div>
            </div>
        );
    }

    // লইয়ারের বর্তমান প্ল্যান চেক করা (Default: lawyer_unverified)
    const plan = await getPlanById(user?.plan || 'lawyer_unverified');
    
    // ধরি আনভেরিফাইড লইয়ারের সার্ভিস কাউন্ট ০, প্রিমিয়াম হলে ১০টি করা যাবে
    const currentServiceCount = 0; 
    const hasReachedLimit = plan.maxServices === 0;

    // 🚀 NEXT.JS SERVER ACTION: সরাসরি স্ট্রাইপ পেমেন্ট সেশন হ্যান্ডলার
    async function handleVerification() {
        'use server';

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API_URL}/api/create-checkout-session`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: user.email,
                    paymentType: 'verification',
                    amount: 49,
                    planId: 'lawyer_premium'
                }),
            });

            const data = await response.json();
            
            if (data?.url) {
                // 🎯 কোনো ইন্টারমিডিয়েট পেজ ছাড়াই সরাসরি স্ট্রাইপ অফিশিয়াল চেকআউটে রিডাইরেক্ট
                redirect(data.url);
            }
        } catch (error) {
            console.error("❌ Stripe initiation failed:", error);
        }
    }

    return (
        <div className="w-full min-h-screen bg-zinc-950 text-zinc-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-8">
                
                {/* 1. Subscription & One-time Publishing Fee Quota Tracker Card */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                                Verification & Publishing Status
                            </span>
                            <h2 className="text-lg font-bold text-zinc-100 mt-0.5">
                                Profile Status: <span className={hasReachedLimit ? "text-amber-400" : "text-emerald-400"}>{plan.name}</span>
                            </h2>
                        </div>
                        <span className="self-start sm:self-center px-2.5 py-1 text-xs font-medium rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                            Active Tier: <strong className="text-white font-semibold">{plan.name}</strong>
                        </span>
                    </div>

                    {/* Progress Bar (10% for Unverified, 100% for Verified) */}
                    <div className="w-full bg-zinc-800 h-2.5 rounded-full overflow-hidden mb-5">
                        <div 
                            className={`h-full transition-all duration-500 rounded-full ${
                                hasReachedLimit ? 'bg-amber-500' : 'bg-emerald-500'
                            }`}
                            style={{ width: `${hasReachedLimit ? 10 : 100}%` }}
                        />
                    </div>

                    {/* Upsell Paywall Message with Native Server Action Form */}
                    <div className="flex items-start gap-3 bg-amber-950/30 border border-amber-900/50 rounded-xl p-4 text-sm text-amber-300/90">
                        <Rocket className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                        <div className="flex-1 sm:flex sm:items-center sm:justify-between gap-4">
                            <p>Pay your one-time professional publishing fee to list your card on the "Browse Lawyers" catalog.</p>
                            
                            {/* 🛠️ ফর্ম সাবমিটের মাধ্যমে সরাসরি স্ট্রাইপে হিট করবে */}
                            <form action={handleVerification}>
                                <button 
                                    type="submit"
                                    className="inline-block mt-2 sm:mt-0 whitespace-nowrap text-xs font-bold bg-amber-600 hover:bg-amber-500 text-zinc-950 px-4 py-2 rounded-lg transition shadow-md cursor-pointer"
                                >
                                    Pay Verification Fee ($49)
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* 2. Content Control Block */}
                {hasReachedLimit ? (
                    <div className="bg-zinc-900/50 border border-dashed border-zinc-800 rounded-2xl p-8 text-center flex flex-col items-center justify-center">
                        <div className="w-10 h-10 bg-zinc-800 text-zinc-400 rounded-full flex items-center justify-center mb-3">
                            <CircleInfo className="w-5 h-5" />
                        </div>
                        <h4 className="text-base font-semibold text-zinc-200">Publishing License Required</h4>
                        <p className="text-sm text-zinc-500 max-w-sm mt-1">
                            Your legal directory listing is currently hidden from clients. Complete the baseline activation payment above to unlock profile management.
                        </p>
                    </div>
                ) : (
                    <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
                        <h3 className="text-lg font-bold">Manage Services Form (Active View)</h3>
                        <p className="text-zinc-400 text-sm mt-1">Add or update the legal specializations you provide.</p>
                    </div>
                )}
                
            </div>
        </div>
    );
};

export default ManageLegalProfilePage;