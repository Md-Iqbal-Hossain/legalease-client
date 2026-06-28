// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { authClient } from '@/lib/auth-client'; // Adjust this path to your exact folder structure
// import { User, Mail, Lock, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';

// export default function SignUpPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     // Reset message bars on fresh keystrokes
//     if (error) setError('');
//   };

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess('');

//     // Quick client-side sanity validation checks
//     if (!formData.name.trim() || !formData.email.trim() || !formData.password.trim()) {
//       setError('All fields are required.');
//       setLoading(false);
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters long.');
//       setLoading(false);
//       return;
//     }

//     try {
//       const { data, error: authError } = await authClient.signUp.email({
//         email: formData.email.trim(),
//         password: formData.password,
//         name: formData.name.trim(),
//         callbackURL: '/my-bookings' // Redirects on completed validation flows
//       });

//       if (authError) {
//         setError(authError.message || 'An error occurred during registration.');
//         return;
//       }

//       setSuccess('Account created successfully! Redirecting to secure profile...');
      
//       // Delays navigation slightly so user can view the success banner state cleanly
//       setTimeout(() => {
//         router.push('/my-bookings');
//       }, 1500);

//     } catch (err) {
//       console.error('Registration pipeline crash:', err);
//       setError('Something went wrong. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto w-full max-w-md">
//         <h2 className="text-center text-3xl font-extrabold text-gray-900 tracking-tight">
//           Create your SportNest Account
//         </h2>
//         <p className="mt-2 text-center text-sm text-gray-600">
//           Or{' '}
//           <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
//             sign in to your existing account
//           </Link>
//         </p>
//       </div>

//       <div className="mt-8 sm:mx-auto w-full max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-xl sm:px-10 border border-gray-100">
          
//           {/* Dynamic Error Status Banner Box */}
//           {error && (
//             <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4 rounded-md flex items-start gap-3 animate-fade-in">
//               <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
//               <div className="text-sm text-red-700 font-medium">{error}</div>
//             </div>
//           )}

//           {/* Dynamic Success Status Banner Box */}
//           {success && (
//             <div className="mb-4 bg-green-50 border-l-4 border-green-500 p-4 rounded-md flex items-start gap-3 animate-fade-in">
//               <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
//               <div className="text-sm text-green-700 font-medium">{success}</div>
//             </div>
//           )}

//           <form className="space-y-6" onSubmit={handleSignUp}>
//             {/* Full Name Input Box */}
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                 Full Name
//               </label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <User className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                   disabled={loading}
//                   className="block w-full pl-10 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all sm:text-sm"
//                   placeholder="John Doe"
//                 />
//               </div>
//             </div>

//             {/* Email Address Input Box */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email Address
//               </label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Mail className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   disabled={loading}
//                   className="block w-full pl-10 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all sm:text-sm"
//                   placeholder="you@example.com"
//                 />
//               </div>
//             </div>

//             {/* Password Security Input Box */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Lock className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   required
//                   value={formData.password}
//                   onChange={handleChange}
//                   disabled={loading}
//                   className="block w-full pl-10 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all sm:text-sm"
//                   placeholder="••••••••"
//                 />
//               </div>
//             </div>

//             {/* Form Submission Button */}
//             <div>
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
//               >
//                 {loading ? (
//                   <>
//                     <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" />
//                     Registering Account...
//                   </>
//                 ) : (
//                   'Sign Up'
//                 )}
//               </button>
//             </div>
//           </form>

//           {/* Navigation Go-Back Segment footer */}
//           <div className="mt-6 border-t border-gray-100 pt-4 text-center">
//             <Link 
//               href="/login" 
//               className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
//             >
//               ← Back to Sign In
//             </Link>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }


// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { authClient } from '@/lib/auth-client';
// import { User, Mail, Lock, AlertCircle, CheckCircle2, Loader2, Scale, Shield } from 'lucide-react';

// export default function SignUpPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     role: 'user'
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     if (error) setError('');
//   };

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess('');

//     if (!formData.name.trim() || !formData.email.trim() || !formData.password || !formData.confirmPassword) {
//       setError('All security and profile fields are required.');
//       setLoading(false);
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters long.');
//       setLoading(false);
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match.');
//       setLoading(false);
//       return;
//     }

//     try {
//       const { data, error: authError } = await authClient.signUp.email({
//         email: formData.email.trim().toLowerCase(),
//         password: formData.password,
//         name: formData.name.trim(),
//         data: { role: formData.role },
//         callbackURL: '/'
//       });

//       if (authError) {
//         setError(authError.message || 'Registration failed. The email might already be taken.');
//         setLoading(false);
//         return;
//       }

//       setSuccess('Account created successfully! Redirecting you to Home...');
//       setTimeout(() => router.push('/'), 1500);

//     } catch (err) {
//       console.error('Registration pipeline error:', err);
//       setError('An unexpected error occurred. Please try again.');
//       setLoading(false);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       setError('');
//       await authClient.signIn.social({
//         provider: 'google',
//         callbackURL: '/'
//       });
//     } catch (err) {
//       setError('Google Authentication failed.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
//       {/* Subtle legal grid texture background layer */}
//       <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
//       <div className="sm:mx-auto w-full max-w-md relative z-10 text-center">
//         {/* Branding Icon */}
//         <div className="inline-flex items-center justify-center p-3 bg-slate-900 border border-slate-800 rounded-xl shadow-inner mb-4">
//           <Scale className="w-8 h-8 text-amber-500" />
//         </div>
//         <h2 className="text-center text-3xl font-serif tracking-wide font-bold text-gray-100">
//           Create Your Account
//         </h2>
//         <p className="mt-2 text-center text-sm text-slate-400">
//           Already have a professional account?{' '}
//           <Link href="/login" className="font-medium text-amber-500 hover:text-amber-400 transition-colors underline underline-offset-4">
//             Sign In here
//           </Link>
//         </p>
//       </div>

//       <div className="mt-8 sm:mx-auto w-full max-w-md relative z-10">
//         <div className="bg-slate-900/80 backdrop-blur-md py-8 px-4 shadow-2xl sm:rounded-xl sm:px-10 border border-slate-800/60">
          
//           {/* Error Message Feedback Banner */}
//           {error && (
//             <div className="mb-5 bg-red-950/40 border-l-4 border-red-500 p-4 rounded-md flex items-start gap-3">
//               <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
//               <div className="text-sm text-red-200 font-medium">{error}</div>
//             </div>
//           )}

//           {/* Success Message Feedback Banner */}
//           {success && (
//             <div className="mb-5 bg-emerald-950/40 border-l-4 border-emerald-500 p-4 rounded-md flex items-start gap-3">
//               <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
//               <div className="text-sm text-emerald-200 font-medium">{success}</div>
//             </div>
//           )}

//           <form className="space-y-5" onSubmit={handleSignUp}>
//             {/* Full Name */}
//             <div>
//               <label className="block text-sm font-medium text-slate-300">Full Name</label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <User className="h-4 w-4 text-slate-500" />
//                 </div>
//                 <input
//                   name="name"
//                   type="text"
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="block w-full pl-10 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all sm:text-sm"
//                   placeholder="Alex Mercer"
//                 />
//               </div>
//             </div>

//             {/* Email Address */}
//             <div>
//               <label className="block text-sm font-medium text-slate-300">Email Address</label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Mail className="h-4 w-4 text-slate-500" />
//                 </div>
//                 <input
//                   name="email"
//                   type="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="block w-full pl-10 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all sm:text-sm"
//                   placeholder="alex@example.com"
//                 />
//               </div>
//             </div>

//             {/* Role Assignment Segment */}
//             <div>
//               <label className="block text-sm font-medium text-slate-300 mb-1.5">Select Account Type Role</label>
//               <div className="grid grid-cols-2 gap-3">
//                 <label className={`flex items-center justify-center p-3 rounded-lg border cursor-pointer text-sm font-medium select-none transition-all ${
//                   formData.role === 'user' 
//                     ? 'border-amber-500 bg-amber-500/10 text-amber-400 font-semibold shadow-md' 
//                     : 'border-slate-800 bg-slate-950 text-slate-400 hover:bg-slate-800/50'
//                 }`}>
//                   <input
//                     type="radio"
//                     name="role"
//                     value="user"
//                     checked={formData.role === 'user'}
//                     onChange={handleChange}
//                     className="sr-only"
//                   />
//                   User (Client)
//                 </label>

//                 <label className={`flex items-center justify-center p-3 rounded-lg border cursor-pointer text-sm font-medium select-none transition-all ${
//                   formData.role === 'lawyer' 
//                     ? 'border-amber-500 bg-amber-500/10 text-amber-400 font-semibold shadow-md' 
//                     : 'border-slate-800 bg-slate-950 text-slate-400 hover:bg-slate-800/50'
//                 }`}>
//                   <input
//                     type="radio"
//                     name="role"
//                     value="lawyer"
//                     checked={formData.role === 'lawyer'}
//                     onChange={handleChange}
//                     className="sr-only"
//                   />
//                   Lawyer
//                 </label>
//               </div>
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-sm font-medium text-slate-300">Password</label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Lock className="h-4 w-4 text-slate-500" />
//                 </div>
//                 <input
//                   name="password"
//                   type="password"
//                   required
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="block w-full pl-10 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all sm:text-sm"
//                   placeholder="••••••••"
//                 />
//               </div>
//             </div>

//             {/* Confirm Password */}
//             <div>
//               <label className="block text-sm font-medium text-slate-300">Confirm Password</label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Lock className="h-4 w-4 text-slate-500" />
//                 </div>
//                 <input
//                   name="confirmPassword"
//                   type="password"
//                   required
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   className="block w-full pl-10 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all sm:text-sm"
//                   placeholder="••••••••"
//                 />
//               </div>
//             </div>

//             {/* Submit Action Button */}
//             <div className="pt-2">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full flex justify-center items-center py-2.5 px-4 rounded-lg shadow-lg text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 focus:outline-none transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-[0.99]"
//               >
//                 {loading ? (
//                   <>
//                     <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5 text-slate-950" />
//                     Registering...
//                   </>
//                 ) : (
//                   'Register Account'
//                 )}
//               </button>
//             </div>
//           </form>

//           {/* Social Sign-On Divider */}
//           <div className="mt-6 relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-slate-800" />
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-3 bg-slate-900 text-slate-500">Or sign up with</span>
//             </div>
//           </div>

//           {/* Google Register Button */}
//           <div className="mt-4">
//             <button
//               type="button"
//               onClick={handleGoogleLogin}
//               className="w-full flex justify-center items-center py-2.5 px-4 border border-slate-800 rounded-lg bg-slate-950 text-sm font-medium text-slate-300 hover:bg-slate-800/60 shadow-sm transition-colors cursor-pointer"
//             >
//               <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
//                 <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
//                 <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
//                 <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" />
//                 <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" />
//               </svg>
//               Sign Up with Google
//             </button>
//           </div>

//           {/* Go Back Link */}
//           <div className="mt-6 border-t border-slate-800/80 pt-4 text-center">
//             <Link 
//               href="/auth/signin" 
//               className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-amber-500 transition-colors"
//             >
//               ← Back to Sign In
//             </Link>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// **********************************************************************************************


// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { authClient } from '@/lib/auth-client';
// import { User, Mail, Lock, AlertCircle, CheckCircle2, Loader2, Scale, Eye, EyeOff } from 'lucide-react';

// export default function SignUpPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     role: 'user'
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
  
//   // States to handle visibility toggles
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     if (error) setError('');
//   };

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess('');

//     if (!formData.name.trim() || !formData.email.trim() || !formData.password || !formData.confirmPassword) {
//       setError('All security and profile fields are required.');
//       setLoading(false);
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters long.');
//       setLoading(false);
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match.');
//       setLoading(false);
//       return;
//     }

//     try {
//       const { data, error: authError } = await authClient.signUp.email({
//         email: formData.email.trim().toLowerCase(),
//         password: formData.password,
//         name: formData.name.trim(),
//         data: { role: formData.role },
//         callbackURL: '/'
//       });

//       if (authError) {
//         setError(authError.message || 'Registration failed. The email might already be taken.');
//         setLoading(false);
//         return;
//       }

//       setSuccess('Account created successfully! Redirecting you to Home...');
//       setTimeout(() => router.push('/'), 1500);

//     } catch (err) {
//       console.error('Registration pipeline error:', err);
//       setError('An unexpected error occurred. Please try again.');
//       setLoading(false);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       setError('');
//       await authClient.signIn.social({
//         provider: 'google',
//         callbackURL: '/'
//       });
//     } catch (err) {
//       setError('Google Authentication failed.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
//       {/* Subtle legal grid texture background layer */}
//       <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
//       <div className="sm:mx-auto w-full max-w-md relative z-10 text-center">
//         {/* Branding Icon */}
//         <div className="inline-flex items-center justify-center p-3 bg-slate-900 border border-slate-800 rounded-xl shadow-inner mb-4">
//           <Scale className="w-8 h-8 text-amber-500" />
//         </div>
//         <h2 className="text-center text-3xl font-serif tracking-wide font-bold text-gray-100">
//           Create Your Account
//         </h2>
//         <p className="mt-2 text-center text-sm text-slate-400">
//           Already have a professional account?{' '}
//           <Link href="/login" className="font-medium text-amber-500 hover:text-amber-400 transition-colors underline underline-offset-4">
//             Sign In here
//           </Link>
//         </p>
//       </div>

//       <div className="mt-8 sm:mx-auto w-full max-w-md relative z-10">
//         <div className="bg-slate-900/80 backdrop-blur-md py-8 px-4 shadow-2xl sm:rounded-xl sm:px-10 border border-slate-800/60">
          
//           {/* Error Message Feedback Banner */}
//           {error && (
//             <div className="mb-5 bg-red-950/40 border-l-4 border-red-500 p-4 rounded-md flex items-start gap-3">
//               <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
//               <div className="text-sm text-red-200 font-medium">{error}</div>
//             </div>
//           )}

//           {/* Success Message Feedback Banner */}
//           {success && (
//             <div className="mb-5 bg-emerald-950/40 border-l-4 border-emerald-500 p-4 rounded-md flex items-start gap-3">
//               <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
//               <div className="text-sm text-emerald-200 font-medium">{success}</div>
//             </div>
//           )}

//           <form className="space-y-5" onSubmit={handleSignUp}>
//             {/* Full Name */}
//             <div>
//               <label className="block text-sm font-medium text-slate-300">Full Name</label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <User className="h-4 w-4 text-slate-500" />
//                 </div>
//                 <input
//                   name="name"
//                   type="text"
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="block w-full pl-10 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all sm:text-sm"
//                   placeholder="Alex Mercer"
//                 />
//               </div>
//             </div>

//             {/* Email Address */}
//             <div>
//               <label className="block text-sm font-medium text-slate-300">Email Address</label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Mail className="h-4 w-4 text-slate-500" />
//                 </div>
//                 <input
//                   name="email"
//                   type="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="block w-full pl-10 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all sm:text-sm"
//                   placeholder="alex@example.com"
//                 />
//               </div>
//             </div>

//             {/* Role Assignment Segment */}
//             <div>
//               <label className="block text-sm font-medium text-slate-300 mb-1.5">Select Account Type Role</label>
//               <div className="grid grid-cols-2 gap-3">
//                 <label className={`flex items-center justify-center p-3 rounded-lg border cursor-pointer text-sm font-medium select-none transition-all ${
//                   formData.role === 'user' 
//                     ? 'border-amber-500 bg-amber-500/10 text-amber-400 font-semibold shadow-md' 
//                     : 'border-slate-800 bg-slate-950 text-slate-400 hover:bg-slate-800/50'
//                 }`}>
//                   <input
//                     type="radio"
//                     name="role"
//                     value="user"
//                     checked={formData.role === 'user'}
//                     onChange={handleChange}
//                     className="sr-only"
//                   />
//                   User (Client)
//                 </label>

//                 <label className={`flex items-center justify-center p-3 rounded-lg border cursor-pointer text-sm font-medium select-none transition-all ${
//                   formData.role === 'lawyer' 
//                     ? 'border-amber-500 bg-amber-500/10 text-amber-400 font-semibold shadow-md' 
//                     : 'border-slate-800 bg-slate-950 text-slate-400 hover:bg-slate-800/50'
//                 }`}>
//                   <input
//                     type="radio"
//                     name="role"
//                     value="lawyer"
//                     checked={formData.role === 'lawyer'}
//                     onChange={handleChange}
//                     className="sr-only"
//                   />
//                   Lawyer
//                 </label>
//               </div>
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-sm font-medium text-slate-300">Password</label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Lock className="h-4 w-4 text-slate-500" />
//                 </div>
//                 <input
//                   name="password"
//                   type={showPassword ? 'text' : 'password'}
//                   required
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="block w-full pl-10 pr-10 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all sm:text-sm"
//                   placeholder="••••••••"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300 transition-colors focus:outline-none"
//                 >
//                   {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                 </button>
//               </div>
//             </div>

//             {/* Confirm Password */}
//             <div>
//               <label className="block text-sm font-medium text-slate-300">Confirm Password</label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Lock className="h-4 w-4 text-slate-500" />
//                 </div>
//                 <input
//                   name="confirmPassword"
//                   type={showConfirmPassword ? 'text' : 'password'}
//                   required
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   className="block w-full pl-10 pr-10 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all sm:text-sm"
//                   placeholder="••••••••"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300 transition-colors focus:outline-none"
//                 >
//                   {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                 </button>
//               </div>
//             </div>

//             {/* Submit Action Button */}
//             <div className="pt-2">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full flex justify-center items-center py-2.5 px-4 rounded-lg shadow-lg text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 focus:outline-none transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-[0.99]"
//               >
//                 {loading ? (
//                   <>
//                     <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5 text-slate-950" />
//                     Registering...
//                   </>
//                 ) : (
//                   'Register Account'
//                 )}
//               </button>
//             </div>
//           </form>

//           {/* Social Sign-On Divider */}
//           <div className="mt-6 relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-slate-800" />
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-3 bg-slate-900 text-slate-500">Or sign up with</span>
//             </div>
//           </div>

//           {/* Google Register Button */}
//           <div className="mt-4">
//             <button
//               type="button"
//               onClick={handleGoogleLogin}
//               className="w-full flex justify-center items-center py-2.5 px-4 border border-slate-800 rounded-lg bg-slate-950 text-sm font-medium text-slate-300 hover:bg-slate-800/60 shadow-sm transition-colors cursor-pointer"
//             >
//               <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
//                 <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
//                 <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
//                 <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" />
//                 <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" />
//               </svg>
//               Sign Up with Google
//             </button>
//           </div>

//           {/* Go Back Link */}
//           <div className="mt-6 border-t border-slate-800/80 pt-4 text-center">
//             <Link 
//               href="/auth/signin" 
//               className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-amber-500 transition-colors"
//             >
//               ← Back to Sign In
//             </Link>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// ***************************************************************************


// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { authClient } from '@/lib/auth-client';
// import { User, Mail, Lock, AlertCircle, CheckCircle2, Loader2, Scale, Eye, EyeOff } from 'lucide-react';

// export default function SignUpPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     role: 'client' // Changed from 'user' to align perfectly with your strict auth schema
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
  
//   // States to handle visibility toggles
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     if (error) setError('');
//   };

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess('');

//     if (!formData.name.trim() || !formData.email.trim() || !formData.password || !formData.confirmPassword) {
//       setError('All security and profile fields are required.');
//       setLoading(false);
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters long.');
//       setLoading(false);
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match.');
//       setLoading(false);
//       return;
//     }

//     try {
//       const { data, error: authError } = await authClient.signUp.email({
//         email: formData.email.trim().toLowerCase(),
//         password: formData.password,
//         name: formData.name.trim(),
//         data: { role: formData.role }, // Sends either 'client' or 'lawyer'
//         callbackURL: '/auth/signin'
//       });

//       if (authError) {
//         setError(authError.message || 'Registration failed. The email might already be taken.');
//         setLoading(false);
//         return;
//       }

//       setSuccess('Account created successfully! Redirecting you to Home...');
//       setTimeout(() => router.push('/auth/signin'), 1500);

//     } catch (err) {
//       console.error('Registration pipeline error:', err);
//       setError('An unexpected error occurred. Please try again.');
//       setLoading(false);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       setError('');
//       await authClient.signIn.social({
//         provider: 'google',
//         callbackURL: '/'
//       });
//     } catch (err) {
//       setError('Google Authentication failed.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
//       {/* Subtle legal grid texture background layer */}
//       <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
//       <div className="sm:mx-auto w-full max-w-md relative z-10 text-center">
//         {/* Branding Icon */}
//         <div className="inline-flex items-center justify-center p-3 bg-slate-900 border border-slate-800 rounded-xl shadow-inner mb-4">
//           <Scale className="w-8 h-8 text-amber-500" />
//         </div>
//         <h2 className="text-center text-3xl font-serif tracking-wide font-bold text-gray-100">
//           Create Your Account
//         </h2>
//         <p className="mt-2 text-center text-sm text-slate-400">
//           Already have a professional account?{' '}
//           <Link href="/auth/signin" className="font-medium text-amber-500 hover:text-amber-400 transition-colors underline underline-offset-4">
//             Sign In here
//           </Link>
//         </p>
//       </div>

//       <div className="mt-8 sm:mx-auto w-full max-w-md relative z-10">
//         <div className="bg-slate-900/80 backdrop-blur-md py-8 px-4 shadow-2xl sm:rounded-xl sm:px-10 border border-slate-800/60">
          
//           {/* Error Message Feedback Banner */}
//           {error && (
//             <div className="mb-5 bg-red-950/40 border-l-4 border-red-500 p-4 rounded-md flex items-start gap-3">
//               <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
//               <div className="text-sm text-red-200 font-medium">{error}</div>
//             </div>
//           )}

//           {/* Success Message Feedback Banner */}
//           {success && (
//             <div className="mb-5 bg-emerald-950/40 border-l-4 border-emerald-500 p-4 rounded-md flex items-start gap-3">
//               <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
//               <div className="text-sm text-emerald-200 font-medium">{success}</div>
//             </div>
//           )}

//           <form className="space-y-5" onSubmit={handleSignUp}>
//             {/* Full Name */}
//             <div>
//               <label className="block text-sm font-medium text-slate-300">Full Name</label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <User className="h-4 w-4 text-slate-500" />
//                 </div>
//                 <input
//                   name="name"
//                   type="text"
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="block w-full pl-10 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all sm:text-sm"
//                   placeholder="Alex Mercer"
//                 />
//               </div>
//             </div>

//             {/* Email Address */}
//             <div>
//               <label className="block text-sm font-medium text-slate-300">Email Address</label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Mail className="h-4 w-4 text-slate-500" />
//                 </div>
//                 <input
//                   name="email"
//                   type="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="block w-full pl-10 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all sm:text-sm"
//                   placeholder="alex@example.com"
//                 />
//               </div>
//             </div>

//             {/* Role Assignment Segment */}
//             <div>
//               <label className="block text-sm font-medium text-slate-300 mb-1.5">Select Account Type Role</label>
//               <div className="grid grid-cols-2 gap-3">
//                 <label className={`flex items-center justify-center p-3 rounded-lg border cursor-pointer text-sm font-medium select-none transition-all ${
//                   formData.role === 'client' 
//                     ? 'border-amber-500 bg-amber-500/10 text-amber-400 font-semibold shadow-md' 
//                     : 'border-slate-800 bg-slate-950 text-slate-400 hover:bg-slate-800/50'
//                 }`}>
//                   <input
//                     type="radio"
//                     name="role"
//                     value="client"
//                     checked={formData.role === 'client'}
//                     onChange={handleChange}
//                     className="sr-only"
//                   />
//                   Client
//                 </label>

//                 <label className={`flex items-center justify-center p-3 rounded-lg border cursor-pointer text-sm font-medium select-none transition-all ${
//                   formData.role === 'lawyer' 
//                     ? 'border-amber-500 bg-amber-500/10 text-amber-400 font-semibold shadow-md' 
//                     : 'border-slate-800 bg-slate-950 text-slate-400 hover:bg-slate-800/50'
//                 }`}>
//                   <input
//                     type="radio"
//                     name="role"
//                     value="lawyer"
//                     checked={formData.role === 'lawyer'}
//                     onChange={handleChange}
//                     className="sr-only"
//                   />
//                   Lawyer
//                 </label>
//               </div>
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-sm font-medium text-slate-300">Password</label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Lock className="h-4 w-4 text-slate-500" />
//                 </div>
//                 <input
//                   name="password"
//                   type={showPassword ? 'text' : 'password'}
//                   required
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="block w-full pl-10 pr-10 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all sm:text-sm"
//                   placeholder="••••••••"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300 transition-colors focus:outline-none"
//                 >
//                   {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                 </button>
//               </div>
//             </div>

//             {/* Confirm Password */}
//             <div>
//               <label className="block text-sm font-medium text-slate-300">Confirm Password</label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Lock className="h-4 w-4 text-slate-500" />
//                 </div>
//                 <input
//                   name="confirmPassword"
//                   type={showConfirmPassword ? 'text' : 'password'}
//                   required
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   className="block w-full pl-10 pr-10 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all sm:text-sm"
//                   placeholder="••••••••"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300 transition-colors focus:outline-none"
//                 >
//                   {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                 </button>
//               </div>
//             </div>

//             {/* Submit Action Button */}
//             <div className="pt-2">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full flex justify-center items-center py-2.5 px-4 rounded-lg shadow-lg text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 focus:outline-none transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-[0.99]"
//               >
//                 {loading ? (
//                   <>
//                     <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5 text-slate-950" />
//                     Registering...
//                   </>
//                 ) : (
//                   'Register Account'
//                 )}
//               </button>
//             </div>
//           </form>

//           {/* Social Sign-On Divider */}
//           <div className="mt-6 relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-slate-800" />
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-3 bg-slate-900 text-slate-500">Or sign up with</span>
//             </div>
//           </div>

//           {/* Google Register Button */}
//           <div className="mt-4">
//             <button
//               type="button"
//               onClick={handleGoogleLogin}
//               className="w-full flex justify-center items-center py-2.5 px-4 border border-slate-800 rounded-lg bg-slate-950 text-sm font-medium text-slate-300 hover:bg-slate-800/60 shadow-sm transition-colors cursor-pointer"
//             >
//               <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
//                 <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
//                 <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
//                 <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" />
//                 <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" />
//               </svg>
//               Sign Up with Google
//             </button>
//           </div>

//           {/* Go Back Link */}
//           <div className="mt-6 border-t border-slate-800/80 pt-4 text-center">
//             <Link 
//               href="/auth/signin" 
//               className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-amber-500 transition-colors"
//             >
//               &larr; Back to Sign In
//             </Link>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// ******************************************************************

// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { authClient } from '@/lib/auth-client';
// import { User, Mail, Lock, AlertCircle, CheckCircle2, Loader2, Scale, Eye, EyeOff } from 'lucide-react';

// export default function SignUpPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     role: 'client' // Core role switch for Legalease ('client' or 'lawyer')
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
  
//   // Visibility toggles
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     if (error) setError('');
//   };

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess('');

//     if (!formData.name.trim() || !formData.email.trim() || !formData.password || !formData.confirmPassword) {
//       setError('All profile and security fields are required.');
//       setLoading(false);
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters long.');
//       setLoading(false);
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match.');
//       setLoading(false);
//       return;
//     }

//     try {
//       // Better-Auth standard for handling custom fields like roles requires them inside the request payload
//       const { data, error: authError } = await authClient.signUp.email({
//         email: formData.email.trim().toLowerCase(),
//         password: formData.password,
//         name: formData.name.trim(),
//         role: formData.role, // Passed directly or via data object depending on your server config
//         callbackURL: '/auth/signin'
//       });

//       if (authError) {
//         setError(authError.message || 'Registration failed. The email might already be taken.');
//         setLoading(false);
//         return;
//       }

//       setSuccess('Account created successfully! Redirecting to login...');
//       setTimeout(() => router.push('/auth/signin'), 1500);

//     } catch (err) {
//       console.error('Registration pipeline error:', err);
//       setError('An unexpected error occurred. Please try again.');
//       setLoading(false);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       setError('');
//       await authClient.signIn.social({
//         provider: 'google',
//         callbackURL: '/'
//       });
//     } catch (err) {
//       setError('Google Authentication failed.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//       {/* Subtle legal grid texture background layer */}
//       <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
//       <div className="sm:mx-auto w-full max-w-md relative z-10 text-center">
//         <div className="inline-flex items-center justify-center p-3 bg-slate-900 border border-slate-800 rounded-xl shadow-inner mb-4">
//           <Scale className="w-8 h-8 text-amber-500" />
//         </div>
//         <h2 className="text-center text-3xl font-serif tracking-wide font-bold text-gray-100">
//           Create Your Account
//         </h2>
//         <p className="mt-2 text-center text-sm text-slate-400">
//           Already have a professional account?{' '}
//           <Link href="/auth/signin" className="font-medium text-amber-500 hover:text-amber-400 transition-colors underline underline-offset-4">
//             Sign In here
//           </Link>
//         </p>
//       </div>

//       <div className="mt-8 sm:mx-auto w-full max-w-md relative z-10">
//         <div className="bg-slate-900/80 backdrop-blur-md py-8 px-4 shadow-2xl sm:rounded-xl sm:px-10 border border-slate-800/60">
          
//           {error && (
//             <div className="mb-5 bg-red-950/40 border-l-4 border-red-500 p-4 rounded-md flex items-start gap-3">
//               <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
//               <div className="text-sm text-red-200 font-medium">{error}</div>
//             </div>
//           )}

//           {success && (
//             <div className="mb-5 bg-emerald-950/40 border-l-4 border-emerald-500 p-4 rounded-md flex items-start gap-3">
//               <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
//               <div className="text-sm text-emerald-200 font-medium">{success}</div>
//             </div>
//           )}

//           <form className="space-y-5" onSubmit={handleSignUp}>
//             {/* Full Name */}
//             <div>
//               <label className="block text-sm font-medium text-slate-300">Full Name</label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <User className="h-4 w-4 text-slate-500" />
//                 </div>
//                 <input
//                   name="name"
//                   type="text"
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="block w-full pl-10 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all sm:text-sm"
//                   placeholder="Alex Mercer"
//                 />
//               </div>
//             </div>

//             {/* Email Address */}
//             <div>
//               <label className="block text-sm font-medium text-slate-300">Email Address</label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Mail className="h-4 w-4 text-slate-500" />
//                 </div>
//                 <input
//                   name="email"
//                   type="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="block w-full pl-10 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all sm:text-sm"
//                   placeholder="alex@example.com"
//                 />
//               </div>
//             </div>

//             {/* Role Assignment Segment */}
//             <div>
//               <label className="block text-sm font-medium text-slate-300 mb-1.5">Select Account Type Role</label>
//               <div className="grid grid-cols-2 gap-3">
//                 <label className={`flex items-center justify-center p-3 rounded-lg border cursor-pointer text-sm font-medium select-none transition-all ${
//                   formData.role === 'client' 
//                     ? 'border-amber-500 bg-amber-500/10 text-amber-400 font-semibold shadow-md' 
//                     : 'border-slate-800 bg-slate-950 text-slate-400 hover:bg-slate-800/50'
//                 }`}>
//                   <input
//                     type="radio"
//                     name="role"
//                     value="client"
//                     checked={formData.role === 'client'}
//                     onChange={handleChange}
//                     className="sr-only"
//                   />
//                   Client Account
//                 </label>

//                 <label className={`flex items-center justify-center p-3 rounded-lg border cursor-pointer text-sm font-medium select-none transition-all ${
//                   formData.role === 'lawyer' 
//                     ? 'border-amber-500 bg-amber-500/10 text-amber-400 font-semibold shadow-md' 
//                     : 'border-slate-800 bg-slate-950 text-slate-400 hover:bg-slate-800/50'
//                 }`}>
//                   <input
//                     type="radio"
//                     name="role"
//                     value="lawyer"
//                     checked={formData.role === 'lawyer'}
//                     onChange={handleChange}
//                     className="sr-only"
//                   />
//                   Lawyer / Attorney
//                 </label>
//               </div>
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-sm font-medium text-slate-300">Password</label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Lock className="h-4 w-4 text-slate-500" />
//                 </div>
//                 <input
//                   name="password"
//                   type={showPassword ? 'text' : 'password'}
//                   required
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="block w-full pl-10 pr-10 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all sm:text-sm"
//                   placeholder="••••••••"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300 transition-colors focus:outline-none"
//                 >
//                   {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                 </button>
//               </div>
//             </div>

//             {/* Confirm Password */}
//             <div>
//               <label className="block text-sm font-medium text-slate-300">Confirm Password</label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Lock className="h-4 w-4 text-slate-500" />
//                 </div>
//                 <input
//                   name="confirmPassword"
//                   type={showConfirmPassword ? 'text' : 'password'}
//                   required
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   className="block w-full pl-10 pr-10 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all sm:text-sm"
//                   placeholder="••••••••"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300 transition-colors focus:outline-none"
//                 >
//                   {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                 </button>
//               </div>
//             </div>

//             {/* Submit Action Button */}
//             <div className="pt-2">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full flex justify-center items-center py-2.5 px-4 rounded-lg shadow-lg text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 focus:outline-none transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-[0.99]"
//               >
//                 {loading ? (
//                   <>
//                     <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5 text-slate-950" />
//                     Registering Pipeline...
//                   </>
//                 ) : (
//                   'Register Account'
//                 )}
//               </button>
//             </div>
//           </form>

//           {/* Social Sign-On Divider */}
//           <div className="mt-6 relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-slate-800" />
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-3 bg-slate-900 text-slate-500">Or sign up with</span>
//             </div>
//           </div>

//           {/* Google Register Button */}
//           <div className="mt-4">
//             <button
//               type="button"
//               onClick={handleGoogleLogin}
//               className="w-full flex justify-center items-center py-2.5 px-4 border border-slate-800 rounded-lg bg-slate-950 text-sm font-medium text-slate-300 hover:bg-slate-800/60 shadow-sm transition-colors cursor-pointer"
//             >
//               <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
//                 <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
//                 <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
//                 <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" />
//                 <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" />
//               </svg>
//               Sign Up with Google
//             </button>
//           </div>

//           <div className="mt-6 border-t border-slate-800/80 pt-4 text-center">
//             <Link 
//               href="/auth/signin" 
//               className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-amber-500 transition-colors"
//             >
//               &larr; Back to Sign In
//             </Link>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// ****************************************************

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { User, Mail, Lock, AlertCircle, CheckCircle2, Loader2, Scale, Eye, EyeOff } from 'lucide-react';

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'client' // Core role switch for Legalease ('client' or 'lawyer')
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  // Visibility toggles
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // ১. ফর্ম ভ্যালিডেশন
    if (!formData.name.trim() || !formData.email.trim() || !formData.password || !formData.confirmPassword) {
      setError('All profile and security fields are required.');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    // ২. রোল অনুযায়ী ডাইনামিক প্ল্যান ডিটারমিনেশন (Better-Auth Catalog Flow)
    const plan = formData.role === 'lawyer' ? 'lawyer_unverified' : 'client_free';

    try {
      // ৩. Better-Auth রেজিস্ট্রেশন পাইপলাইন এক্সিকিউশন
      const { data, error: authError } = await authClient.signUp.email({
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
        name: formData.name.trim(),
        role: formData.role, // 'lawyer' অথবা 'client'
        plan: plan,          // 'lawyer_unverified' অথবা 'client_free'
        callbackURL: '/auth/signin'
      });

      if (authError) {
        setError(authError.message || 'Registration failed. The email might already be taken.');
        setLoading(false);
        return;
      }

      setSuccess('Account created successfully! Redirecting to login...');
      setTimeout(() => router.push('/auth/signin'), 1500);

    } catch (err) {
      console.error('Registration pipeline error:', err);
      setError('An unexpected error occurred. Please try again.');
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setError('');
      await authClient.signIn.social({
        provider: 'google',
        callbackURL: '/'
      });
    } catch (err) {
      setError('Google Authentication failed.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle legal grid texture background layer */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      <div className="sm:mx-auto w-full max-w-md relative z-10 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-slate-900 border border-slate-800 rounded-xl shadow-inner mb-4">
          <Scale className="w-8 h-8 text-amber-500" />
        </div>
        <h2 className="text-center text-3xl font-serif tracking-wide font-bold text-gray-100">
          Create Your Account
        </h2>
        <p className="mt-2 text-center text-sm text-slate-400">
          Already have a professional account?{' '}
          <Link href="/auth/signin" className="font-medium text-amber-500 hover:text-amber-400 transition-colors underline underline-offset-4">
            Sign In here
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto w-full max-w-md relative z-10">
        <div className="bg-slate-900/80 backdrop-blur-md py-8 px-4 shadow-2xl sm:rounded-xl sm:px-10 border border-slate-800/60">
          
          {error && (
            <div className="mb-5 bg-red-950/40 border-l-4 border-red-500 p-4 rounded-md flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-red-200 font-medium">{error}</div>
            </div>
          )}

          {success && (
            <div className="mb-5 bg-emerald-950/40 border-l-4 border-emerald-500 p-4 rounded-md flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-emerald-200 font-medium">{success}</div>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSignUp}>
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-slate-300">Full Name</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-4 w-4 text-slate-500" />
                </div>
                <input
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all sm:text-sm"
                  placeholder="Alex Mercer"
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-medium text-slate-300">Email Address</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-slate-500" />
                </div>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all sm:text-sm"
                  placeholder="alex@example.com"
                />
              </div>
            </div>

            {/* Role Assignment Segment */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Select Account Type Role</label>
              <div className="grid grid-cols-2 gap-3">
                <label className={`flex items-center justify-center p-3 rounded-lg border cursor-pointer text-sm font-medium select-none transition-all ${
                  formData.role === 'client' 
                    ? 'border-amber-500 bg-amber-500/10 text-amber-400 font-semibold shadow-md' 
                    : 'border-slate-800 bg-slate-950 text-slate-400 hover:bg-slate-800/50'
                }`}>
                  <input
                    type="radio"
                    name="role"
                    value="client"
                    checked={formData.role === 'client'}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  Client Account
                </label>

                <label className={`flex items-center justify-center p-3 rounded-lg border cursor-pointer text-sm font-medium select-none transition-all ${
                  formData.role === 'lawyer' 
                    ? 'border-amber-500 bg-amber-500/10 text-amber-400 font-semibold shadow-md' 
                    : 'border-slate-800 bg-slate-950 text-slate-400 hover:bg-slate-800/50'
                }`}>
                  <input
                    type="radio"
                    name="role"
                    value="lawyer"
                    checked={formData.role === 'lawyer'}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  Lawyer / Attorney
                </label>
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-300">Password</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-slate-500" />
                </div>
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-10 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all sm:text-sm"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300 transition-colors focus:outline-none"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-slate-300">Confirm Password</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-slate-500" />
                </div>
                <input
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-10 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-gray-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all sm:text-sm"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300 transition-colors focus:outline-none"
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Submit Action Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center py-2.5 px-4 rounded-lg shadow-lg text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 focus:outline-none transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-[0.99]"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5 text-slate-950" />
                    Registering Pipeline...
                  </>
                ) : (
                  'Register Account'
                )}
              </button>
            </div>
          </form>

          {/* Social Sign-On Divider */}
          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-800" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-slate-900 text-slate-500">Or sign up with</span>
            </div>
          </div>

          {/* Google Register Button */}
          <div className="mt-4">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full flex justify-center items-center py-2.5 px-4 border border-slate-800 rounded-lg bg-slate-950 text-sm font-medium text-slate-300 hover:bg-slate-800/60 shadow-sm transition-colors cursor-pointer"
            >
              <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Sign Up with Google
            </button>
          </div>

          <div className="mt-6 border-t border-slate-800/80 pt-4 text-center">
            <Link 
              href="/auth/signin" 
              className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-amber-500 transition-colors"
            >
              &larr; Back to Sign In
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}