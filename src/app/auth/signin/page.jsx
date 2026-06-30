// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { authClient } from '@/lib/auth-client';
// import { Mail, Lock, AlertCircle, CheckCircle2, Loader2, Scale } from 'lucide-react';

// export default function SignInPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     if (error) setError('');
//   };

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess('');

//     if (!formData.email.trim() || !formData.password) {
//       setError('Please enter both your email address and password.');
//       setLoading(false);
//       return;
//     }

//     try {
//       // BetterAuth email/password sign-in signature
//       const { data, error: authError } = await authClient.signIn.email({
//         email: formData.email.trim().toLowerCase(),
//         password: formData.password,
//         // The token persistence config (7 days) is typically managed globally 
//         // in your BetterAuth server-side initialization options.
//       });

//       if (authError) {
//         setError(authError.message || 'Invalid email or password. Please try again.');
//         setLoading(false);
//         return;
//       }

//       setSuccess('Authentication successful! Redirecting...');

//       // Dynamic role-based redirection logic based on user token payload metadata
//       setTimeout(() => {
//         const userRole = data?.user?.data?.role || 'user'; 
//         if (userRole === 'lawyer' || userRole === 'admin') {
//           router.push(`/dashboard/${userRole}`);
//         } else {
//           router.push('/');
//         }
//       }, 1200);

//     } catch (err) {
//       console.error('Login pipeline failure:', err);
//       setError('An unexpected error occurred during sign in.');
//       setLoading(false);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       setError('');
//       await authClient.signIn.social({
//         provider: 'google',
//         callbackURL: '/' // Google authentication defaults to home, role routing occurs on session load
//       });
//     } catch (err) {
//       console.error('Google OAuth redirect error:', err);
//       setError('Google Authentication initialization failed.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

//       {/* Subtle legal grid texture background layer matching registration UI */}
//       <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

//       <div className="sm:mx-auto w-full max-w-md relative z-10 text-center">
//         {/* Branding Icon */}
//         <div className="inline-flex items-center justify-center p-3 bg-slate-900 border border-slate-800 rounded-xl shadow-inner mb-4">
//           <Scale className="w-8 h-8 text-amber-500" />
//         </div>
//         <h2 className="text-center text-3xl font-serif tracking-wide font-bold text-gray-100">
//           Welcome Back
//         </h2>
//         <p className="mt-2 text-center text-sm text-slate-400">
//           New to the platform?{' '}
//           <Link href="/auth/signup" className="font-medium text-amber-500 hover:text-amber-400 transition-colors underline underline-offset-4">
//             Create an account here
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

//           <form className="space-y-5" onSubmit={handleSignIn}>
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

//             {/* Password */}
//             <div>
//               <div className="flex justify-between items-center">
//                 <label className="block text-sm font-medium text-slate-300">Password</label>
//                 <Link href="/forgot-password" className="text-xs text-slate-500 hover:text-amber-400 transition-colors">
//                   Forgot password?
//                 </Link>
//               </div>
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
//                     Verifying Identity...
//                   </>
//                 ) : (
//                   'Sign In to LegalEase'
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
//               <span className="px-3 bg-slate-900 text-slate-500">Or sign in with</span>
//             </div>
//           </div>

//           {/* Google Login Button */}
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
//               Sign In with Google
//             </button>
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
// import { Mail, Lock, AlertCircle, CheckCircle2, Loader2, Scale, Eye, EyeOff } from 'lucide-react';

// export default function SignInPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   // State to manage password text visibility toggle
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     if (error) setError('');
//   };

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess('');

//     if (!formData.email.trim() || !formData.password) {
//       setError('Please enter both your email address and password.');
//       setLoading(false);
//       return;
//     }

//     try {
//       // BetterAuth email/password sign-in signature
//       const { data, error: authError } = await authClient.signIn.email({
//         email: formData.email.trim().toLowerCase(),
//         password: formData.password,
//         // The token persistence config (7 days) is typically managed globally 
//         // in your BetterAuth server-side initialization options.
//       });

//       if (authError) {
//         setError(authError.message || 'Invalid email or password. Please try again.');
//         setLoading(false);
//         return;
//       }

//       setSuccess('Authentication successful! Redirecting...');

//       // Dynamic role-based redirection logic based on user token payload metadata
//       setTimeout(() => {
//         const userRole = data?.user?.data?.role || 'user'; 
//         if (userRole === 'lawyer' || userRole === 'admin') {
//           router.push(`/dashboard/${userRole}`);
//         } else {
//           router.push('/');
//         }
//       }, 1200);

//     } catch (err) {
//       console.error('Login pipeline failure:', err);
//       setError('An unexpected error occurred during sign in.');
//       setLoading(false);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       setError('');
//       await authClient.signIn.social({
//         provider: 'google',
//         callbackURL: '/' // Google authentication defaults to home, role routing occurs on session load
//       });
//     } catch (err) {
//       console.error('Google OAuth redirect error:', err);
//       setError('Google Authentication initialization failed.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

//       {/* Subtle legal grid texture background layer matching registration UI */}
//       <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

//       <div className="sm:mx-auto w-full max-w-md relative z-10 text-center">
//         {/* Branding Icon */}
//         <div className="inline-flex items-center justify-center p-3 bg-slate-900 border border-slate-800 rounded-xl shadow-inner mb-4">
//           <Scale className="w-8 h-8 text-amber-500" />
//         </div>
//         <h2 className="text-center text-3xl font-serif tracking-wide font-bold text-gray-100">
//           Welcome Back
//         </h2>
//         <p className="mt-2 text-center text-sm text-slate-400">
//           New to the platform?{' '}
//           <Link href="/auth/signup" className="font-medium text-amber-500 hover:text-amber-400 transition-colors underline underline-offset-4">
//             Create an account here
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

//           <form className="space-y-5" onSubmit={handleSignIn}>
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

//             {/* Password */}
//             <div>
//               <div className="flex justify-between items-center">
//                 <label className="block text-sm font-medium text-slate-300">Password</label>
//                 <Link href="/forgot-password" className="text-xs text-slate-500 hover:text-amber-400 transition-colors">
//                   Forgot password?
//                 </Link>
//               </div>
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
//                     Verifying Identity...
//                   </>
//                 ) : (
//                   'Sign In to LegalEase'
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
//               <span className="px-3 bg-slate-900 text-slate-500">Or sign in with</span>
//             </div>
//           </div>

//           {/* Google Login Button */}
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
//               Sign In with Google
//             </button>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// ********************************************************************************

// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { authClient } from '@/lib/auth-client';
// import { Mail, Lock, AlertCircle, CheckCircle2, Loader2, Scale, Eye, EyeOff } from 'lucide-react';

// export default function SignInPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   // State to manage password text visibility toggle
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     if (error) setError('');
//   };

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess('');

//     if (!formData.email.trim() || !formData.password) {
//       setError('Please enter both your email address and password.');
//       setLoading(false);
//       return;
//     }

//     try {
//       // BetterAuth email/password sign-in execution
//       const { data, error: authError } = await authClient.signIn.email({
//         email: formData.email.trim().toLowerCase(),
//         password: formData.password,
//       });

//       if (authError) {
//         setError(authError.message || 'Invalid email or password. Please try again.');
//         setLoading(false);
//         return;
//       }

//       setSuccess('Authentication successful! Redirecting...');

//       // Fixed extraction pipeline: Better-Auth maps fields directly to data.user
//       setTimeout(() => {
//         const userRole = data?.user?.role || 'client'; 

//         if (userRole === 'lawyer' || userRole === 'admin') {
//           router.push(`/dashboard/${userRole}`);
//         } else {
//           router.push('/');
//         }
//       }, 1200);

//     } catch (err) {
//       console.error('Login pipeline failure:', err);
//       setError('An unexpected error occurred during sign in.');
//       setLoading(false);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       setError('');
//       await authClient.signIn.social({
//         provider: 'google',
//         callbackURL: '/' // Redirect target after OAuth handshakes
//       });
//     } catch (err) {
//       console.error('Google OAuth redirect error:', err);
//       setError('Google Authentication initialization failed.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

//       {/* Subtle legal grid texture background layer matching registration UI */}
//       <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

//       <div className="sm:mx-auto w-full max-w-md relative z-10 text-center">
//         {/* Branding Icon */}
//         <div className="inline-flex items-center justify-center p-3 bg-slate-900 border border-slate-800 rounded-xl shadow-inner mb-4">
//           <Scale className="w-8 h-8 text-amber-500" />
//         </div>
//         <h2 className="text-center text-3xl font-serif tracking-wide font-bold text-gray-100">
//           Welcome Back
//         </h2>
//         <p className="mt-2 text-center text-sm text-slate-400">
//           New to the platform?{' '}
//           <Link href="/auth/signup" className="font-medium text-amber-500 hover:text-amber-400 transition-colors underline underline-offset-4">
//             Create an account here
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

//           <form className="space-y-5" onSubmit={handleSignIn}>
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

//             {/* Password */}
//             <div>
//               <div className="flex justify-between items-center">
//                 <label className="block text-sm font-medium text-slate-300">Password</label>
//                 <Link href="/auth/forgot-password" className="text-xs text-slate-500 hover:text-amber-400 transition-colors">
//                   Forgot password?
//                 </Link>
//               </div>
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
//                     Verifying Identity...
//                   </>
//                 ) : (
//                   'Sign In to LegalEase'
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
//               <span className="px-3 bg-slate-900 text-slate-500">Or sign in with</span>
//             </div>
//           </div>

//           {/* Google Login Button */}
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
//               Sign In with Google
//             </button>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// **********************************************************

// 'use client';

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { useRouter, useSearchParams } from 'next/navigation';
// import { authClient } from '@/lib/auth-client';
// import { Mail, Lock, AlertCircle, CheckCircle2, Loader2, Scale, Eye, EyeOff } from 'lucide-react';

// export default function SignInPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   // ইউজার লগইন করার আগে যে পেজে ছিল, সেই পেজের পাথ ক্যাচ করা (ডিফল্ট হিসেবে হোমপেজ '/')
//   // const callbackUrl = searchParams.get('callbackUrl') || '/';

//   //  নতুন আপডেটেড কোড ( redirect অথবা callbackUrl যেকোনো একটি পেলেই সেটিকে ধরবে):
//   const callbackUrl = searchParams.get('redirect') || searchParams.get('callbackUrl') || '/';

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     if (error) setError('');
//   };

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess('');

//     if (!formData.email.trim() || !formData.password) {
//       setError('Please enter both your email address and password.');
//       setLoading(false);
//       return;
//     }

//     try {
//       const { data, error: authError } = await authClient.signIn.email({
//         email: formData.email.trim().toLowerCase(),
//         password: formData.password,
//       });

//       if (authError) {
//         setError(authError.message || 'Invalid email or password. Please try again.');
//         setLoading(false);
//         return;
//       }

//       // setSuccess('Authentication successful! Redirecting...');

//       // setTimeout(() => {
//       //   const userRole = data?.user?.role || 'client';

//       //   // যদি ইউজার কোনো নির্দিষ্ট পেজ থেকে (যেমন হায়ার পেজ) এসে থাকে, তবে তাকে সেখানেই ফেরত পাঠানো হবে
//       //   if (callbackUrl !== '/') {
//       //     router.push(callbackUrl);
//       //   } else if (userRole === 'lawyer' || userRole === 'admin') {
//       //     router.push(`/dashboard/${userRole}`);
//       //   } else {
//       //     router.push('/');
//       //   }
//       // }, 1200);

//       setSuccess('Authentication successful! Redirecting...');

//       setTimeout(() => {
//         const userRole = data?.user?.role || 'client';

//         // 💡 ক্লায়েন্ট-সাইড পুশ এর পরিবর্তে window.location.href ব্যবহার করে হার্ড রিডাইরেক্ট করা হলো
//         // এটি সেশন ক্যাশিং ইস্যু এবং সাইন-ইন লুপ সম্পূর্ণ দূর করবে
//         if (callbackUrl !== '/') {
//           window.location.href = callbackUrl;
//         } else if (userRole === 'lawyer' || userRole === 'admin') {
//           window.location.href = `/dashboard/${userRole}`;
//         } else {
//           window.location.href = '/';
//         }
//       }, 1200);

//     } catch (err) {
//       console.error('Login pipeline failure:', err);
//       setError('An unexpected error occurred during sign in.');
//       setLoading(false);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       setError('');
//       await authClient.signIn.social({
//         provider: 'google',
//         // গুগল লগইনের জন্যও আগের পেজের ইউআরএল পাস করা হলো
//         callbackURL: callbackUrl
//       });
//     } catch (err) {
//       console.error('Google OAuth redirect error:', err);
//       setError('Google Authentication initialization failed.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//       <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

//       <div className="sm:mx-auto w-full max-w-md relative z-10 text-center">
//         <div className="inline-flex items-center justify-center p-3 bg-slate-900 border border-slate-800 rounded-xl shadow-inner mb-4">
//           <Scale className="w-8 h-8 text-amber-500" />
//         </div>
//         <h2 className="text-center text-3xl font-serif tracking-wide font-bold text-gray-100">
//           Welcome Back
//         </h2>
//         <p className="mt-2 text-center text-sm text-slate-400">
//           New to the platform?{' '}
//           <Link href={`/auth/signup?callbackUrl=${encodeURIComponent(callbackUrl)}`} className="font-medium text-amber-500 hover:text-amber-400 transition-colors underline underline-offset-4">
//             Create an account here
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

//           <form className="space-y-5" onSubmit={handleSignIn}>
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

//             <div>
//               <div className="flex justify-between items-center">
//                 <label className="block text-sm font-medium text-slate-300">Password</label>
//                 <Link href="/auth/forgot-password" className="text-xs text-slate-500 hover:text-amber-400 transition-colors">
//                   Forgot password?
//                 </Link>
//               </div>
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

//             <div className="pt-2">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full flex justify-center items-center py-2.5 px-4 rounded-lg shadow-lg text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 focus:outline-none transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-[0.99]"
//               >
//                 {loading ? (
//                   <>
//                     <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5 text-slate-950" />
//                     Verifying Identity...
//                   </>
//                 ) : (
//                   'Sign In to LegalEase'
//                 )}
//               </button>
//             </div>
//           </form>

//           <div className="mt-6 relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-slate-800" />
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-3 bg-slate-900 text-slate-500">Or sign in with</span>
//             </div>
//           </div>

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
//               Sign In with Google
//             </button>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// *****************************************************************

// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useSearchParams } from 'next/navigation';
// import { authClient } from '@/lib/auth-client';
// import { Mail, Lock, AlertCircle, CheckCircle2, Loader2, Scale, Eye, EyeOff } from 'lucide-react';

// export default function SignInPage() {
//   const searchParams = useSearchParams();

//   // ইউজার লগইন করার আগে যে পেজে ছিল, সেই পেজের পাথ ক্যাচ করা (redirect বা callbackUrl যেকোনো একটি পেলেই ধরবে)
//   const callbackUrl = searchParams.get('redirect') || searchParams.get('callbackUrl') || '/';

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     if (error) setError('');
//   };

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess('');

//     if (!formData.email.trim() || !formData.password) {
//       setError('Please enter both your email address and password.');
//       setLoading(false);
//       return;
//     }

//     try {
//       // Better-Auth এর মাধ্যমে সেশন এবং কুকি ম্যানেজমেন্ট লাইফসাইকেল সিঙ্ক
//       await authClient.signIn.email({
//         email: formData.email.trim().toLowerCase(),
//         password: formData.password,
//       }, {
//         // ১. সাকসেস হুক: সেশন পুরোপুরি ব্রাউজারে রাইট হওয়ার পর রান করবে
//         onSuccess: (ctx) => {
//           setSuccess('Authentication successful! Redirecting...');
          
//           setTimeout(() => {
//             // window.location.replace পুরো পেজ এবং ক্যাশ রিফ্রেশ করে রিডাইরেক্ট করে, ফলে লুপ ব্রেক হবে
//             if (callbackUrl !== '/') {
//               window.location.replace(callbackUrl);
//             } else {
//               const userRole = ctx?.data?.user?.role || 'client';
//               if (userRole === 'lawyer' || userRole === 'admin') {
//                 window.location.replace(`/dashboard/${userRole}`);
//               } else {
//                 window.location.replace('/');
//               }
//             }
//           }, 1000);
//         },
//         // ২. এরর হুক: কোনো ভুল ক্রেডেনশিয়াল দিলে বা ব্যাকএন্ড রিজেক্ট করলে হ্যান্ডেল করবে
//         onError: (ctx) => {
//           setError(ctx.error.message || 'Invalid email or password. Please try again.');
//           setLoading(false);
//         }
//       });

//     } catch (err) {
//       console.error('Login pipeline failure:', err);
//       setError('An unexpected error occurred during sign in.');
//       setLoading(false);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       setError('');
//       await authClient.signIn.social({
//         provider: 'google',
//         callbackURL: callbackUrl
//       });
//     } catch (err) {
//       console.error('Google OAuth redirect error:', err);
//       setError('Google Authentication initialization failed.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//       <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

//       <div className="sm:mx-auto w-full max-w-md relative z-10 text-center">
//         <div className="inline-flex items-center justify-center p-3 bg-slate-900 border border-slate-800 rounded-xl shadow-inner mb-4">
//           <Scale className="w-8 h-8 text-amber-500" />
//         </div>
//         <h2 className="text-center text-3xl font-serif tracking-wide font-bold text-gray-100">
//           Welcome Back
//         </h2>
//         <p className="mt-2 text-center text-sm text-slate-400">
//           New to the platform?{' '}
//           <Link href={`/auth/signup?callbackUrl=${encodeURIComponent(callbackUrl)}`} className="font-medium text-amber-500 hover:text-amber-400 transition-colors underline underline-offset-4">
//             Create an account here
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

//           <form className="space-y-5" onSubmit={handleSignIn}>
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

//             <div>
//               <div className="flex justify-between items-center">
//                 <label className="block text-sm font-medium text-slate-300">Password</label>
//                 <Link href="/auth/forgot-password" className="text-xs text-slate-500 hover:text-amber-400 transition-colors">
//                   Forgot password?
//                 </Link>
//               </div>
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

//             <div className="pt-2">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full flex justify-center items-center py-2.5 px-4 rounded-lg shadow-lg text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 focus:outline-none transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-[0.99]"
//               >
//                 {loading ? (
//                   <>
//                     <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5 text-slate-950" />
//                     Verifying Identity...
//                   </>
//                 ) : (
//                   'Sign In to LegalEase'
//                 )}
//               </button>
//             </div>
//           </form>

//           <div className="mt-6 relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-slate-800" />
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-3 bg-slate-900 text-slate-500">Or sign in with</span>
//             </div>
//           </div>

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
//               Sign In with Google
//             </button>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// ********************************************************************

'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { Mail, Lock, AlertCircle, CheckCircle2, Loader2, Scale, Eye, EyeOff } from 'lucide-react';

// 1. Move the sign-in form logic into a sub-component
function SignInForm() {
  const searchParams = useSearchParams();

  // ইউজার লগইন করার আগে যে পেজে ছিল, সেই পেজের পাথ ক্যাচ করা
  const callbackUrl = searchParams.get('redirect') || searchParams.get('callbackUrl') || '/';

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (!formData.email.trim() || !formData.password) {
      setError('Please enter both your email address and password.');
      setLoading(false);
      return;
    }

    try {
      await authClient.signIn.email({
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
      }, {
        onSuccess: (ctx) => {
          setSuccess('Authentication successful! Redirecting...');
          
          setTimeout(() => {
            if (callbackUrl !== '/') {
              window.location.replace(callbackUrl);
            } else {
              const userRole = ctx?.data?.user?.role || 'client';
              if (userRole === 'lawyer' || userRole === 'admin') {
                window.location.replace(`/dashboard/${userRole}`);
              } else {
                window.location.replace('/');
              }
            }
          }, 1000);
        },
        onError: (ctx) => {
          setError(ctx.error.message || 'Invalid email or password. Please try again.');
          setLoading(false);
        }
      });

    } catch (err) {
      console.error('Login pipeline failure:', err);
      setError('An unexpected error occurred during sign in.');
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setError('');
      await authClient.signIn.social({
        provider: 'google',
        callbackURL: callbackUrl
      });
    } catch (err) {
      console.error('Google OAuth redirect error:', err);
      setError('Google Authentication initialization failed.');
    }
  };

  return (
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

      <form className="space-y-5" onSubmit={handleSignIn}>
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

        <div>
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-slate-300">Password</label>
            <Link href="/auth/forgot-password" className="text-xs text-slate-500 hover:text-amber-400 transition-colors">
              Forgot password?
            </Link>
          </div>
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

        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center py-2.5 px-4 rounded-lg shadow-lg text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 focus:outline-none transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-[0.99]"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5 text-slate-950" />
                Verifying Identity...
              </>
            ) : (
              'Sign In to LegalEase'
            )}
          </button>
        </div>
      </form>

      <div className="mt-6 relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-800" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-3 bg-slate-900 text-slate-500">Or sign in with</span>
        </div>
      </div>

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
          Sign In with Google
        </button>
      </div>
    </div>
  );
}

// 2. The main page component wraps the form in Suspense
export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="sm:mx-auto w-full max-w-md relative z-10 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-slate-900 border border-slate-800 rounded-xl shadow-inner mb-4">
          <Scale className="w-8 h-8 text-amber-500" />
        </div>
        <h2 className="text-center text-3xl font-serif tracking-wide font-bold text-gray-100">
          Welcome Back
        </h2>
        <p className="mt-2 text-center text-sm text-slate-400">
          New to the platform?{' '}
          {/* Defaulting fallback link logic if outside context */}
          <Link href="/auth/signup" className="font-medium text-amber-500 hover:text-amber-400 transition-colors underline underline-offset-4">
            Create an account here
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto w-full max-w-md relative z-10">
        <Suspense fallback={
          <div className="bg-slate-900/80 backdrop-blur-md py-8 px-4 shadow-2xl sm:rounded-xl sm:px-10 border border-slate-800/60 flex flex-col items-center justify-center min-h-[300px]">
            <Loader2 className="animate-spin h-8 w-8 text-amber-500 mb-2" />
            <span className="text-slate-400 text-sm">Loading authenticators...</span>
          </div>
        }>
          <SignInForm />
        </Suspense>
      </div>
    </div>
  );
}