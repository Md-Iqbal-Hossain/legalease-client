// "use client";

// import Link from "next/link";
// import { Button, Input } from "@heroui/react";
// import {
//   Icon,
//   LogoFacebook,
//   LogoLinkedin,
//   LogoInstagram,
//   LogoTwitter,
// } from "@gravity-ui/icons";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
//       <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
//         <div className="grid gap-10 md:grid-cols-3">
//           {/* Brand */}
//           <div>
//             <h2 className="text-xl font-bold tracking-widest text-amber-400">
//               LEGAL EASE
//             </h2>

//             <p className="mt-4 text-sm leading-6 text-slate-400">
//               LegalEase connects clients with qualified lawyers through a
//               secure and easy-to-use online platform. Find legal experts,
//               manage consultations, and hire professionals confidently.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="mb-4 text-lg font-semibold text-white">
//               Quick Links
//             </h3>

//             <ul className="space-y-3">
//               <li>
//                 <Link
//                   href="/about"
//                   className="transition hover:text-amber-400"
//                 >
//                   About Us
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="/contact"
//                   className="transition hover:text-amber-400"
//                 >
//                   Contact
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="/privacy-policy"
//                   className="transition hover:text-amber-400"
//                 >
//                   Privacy Policy
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h3 className="mb-4 text-lg font-semibold text-white">
//               Newsletter
//             </h3>

//             <p className="mb-4 text-sm text-slate-400">
//               Stay updated with legal insights, platform news, and expert
//               guidance.
//             </p>

//             <div className="flex flex-col gap-3 sm:flex-row">
//               <Input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1"
//               />

//               <Button
//                 className="bg-amber-500 font-semibold text-slate-950 hover:bg-amber-400"
//               >
//                 Subscribe
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="mt-10 flex flex-col gap-5 border-t border-slate-800 pt-6 md:flex-row md:items-center md:justify-between">
//           <p className="text-sm text-slate-500">
//             © {currentYear} LegalEase. All rights reserved.
//           </p>

//           {/* Social Icons */}
//           <div className="flex items-center gap-5">
//             <a
//               href="#"
//               aria-label="Facebook"
//               className="text-slate-400 transition hover:text-amber-400"
//             >
//               <Icon data={LogoFacebook} size={20} />
//             </a>

//             <a
//               href="#"
//               aria-label="Twitter"
//               className="text-slate-400 transition hover:text-amber-400"
//             >
//               <Icon data={LogoTwitter} size={20} />
//             </a>

//             <a
//               href="#"
//               aria-label="LinkedIn"
//               className="text-slate-400 transition hover:text-amber-400"
//             >
//               <Icon data={LogoLinkedin} size={20} />
//             </a>

//             <a
//               href="#"
//               aria-label="Instagram"
//               className="text-slate-400 transition hover:text-amber-400"
//             >
//               <Icon data={LogoInstagram} size={20} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }



// *****************************************************************************
// **********************************************************************************

// "use client";

// import Link from "next/link";
// import { Button, Input } from "@heroui/react";
// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   Twitter,
// } from "lucide-react";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
//       <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
//         {/* Top Section */}
//         <div className="grid gap-10 md:grid-cols-3">
          
//           {/* Brand */}
//           <div>
//             <h2 className="text-xl font-bold tracking-widest text-amber-400">
//               LEGAL EASE
//             </h2>

//             <p className="mt-4 text-sm leading-6 text-slate-400">
//               LegalEase connects clients with experienced lawyers through a
//               secure and user-friendly platform. Find legal experts,
//               schedule consultations, and hire professionals with confidence.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="mb-4 text-lg font-semibold text-white">
//               Quick Links
//             </h3>

//             <ul className="space-y-3">
//               <li>
//                 <Link
//                   href="/about"
//                   className="transition hover:text-amber-400"
//                 >
//                   About Us
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="/contact"
//                   className="transition hover:text-amber-400"
//                 >
//                   Contact
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="/privacy-policy"
//                   className="transition hover:text-amber-400"
//                 >
//                   Privacy Policy
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h3 className="mb-4 text-lg font-semibold text-white">
//               Newsletter
//             </h3>

//             <p className="mb-4 text-sm text-slate-400">
//               Subscribe to receive legal insights, updates, and platform news.
//             </p>

//             <div className="flex flex-col gap-3 sm:flex-row">
//               <Input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1"
//               />

//               <Button
//                 className="bg-amber-500 font-semibold text-slate-950 hover:bg-amber-400"
//               >
//                 Subscribe
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="mt-10 flex flex-col gap-5 border-t border-slate-800 pt-6 md:flex-row md:items-center md:justify-between">
          
//           <p className="text-sm text-slate-500">
//             © {currentYear} LegalEase. All rights reserved.
//           </p>

//           {/* Social Media Icons */}
//           <div className="flex items-center gap-5">
//             <a
//               href="#"
//               aria-label="Facebook"
//               className="text-slate-400 transition hover:text-amber-400"
//             >
//               <Facebook size={20} />
//             </a>

//             <a
//               href="#"
//               aria-label="Twitter"
//               className="text-slate-400 transition hover:text-amber-400"
//             >
//               <Twitter size={20} />
//             </a>

//             <a
//               href="#"
//               aria-label="LinkedIn"
//               className="text-slate-400 transition hover:text-amber-400"
//             >
//               <Linkedin size={20} />
//             </a>

//             <a
//               href="#"
//               aria-label="Instagram"
//               className="text-slate-400 transition hover:text-amber-400"
//             >
//               <Instagram size={20} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// *******************************************************************************


// "use client";

// import Link from "next/link";
// import { useState } from "react";

// export default function Footer() {
//   const [email, setEmail] = useState("");

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     // Frontend-only placeholder logic
//     if (email) {
//       alert(`Thank you for subscribing with: ${email}`);
//       setEmail("");
//     }
//   };

//   return (
//     <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
//       <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
//         {/* Main Grid Content */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
//           {/* Column 1: Brand & About Placeholder */}
//           <div className="md:col-span-1">
//             <Link href="/" className="text-xl font-bold text-white tracking-wide">
//               Legal<span className="text-blue-500">Ease</span>
//             </Link>
//             <p className="mt-4 text-sm text-slate-400 leading-relaxed">
//               Connecting you with trusted legal professionals instantly. Simplifying legal access for everyone, everywhere.
//             </p>
//           </div>

//           {/* Column 2: Quick Links */}
//           <div>
//             <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
//               Quick Links
//             </h3>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link href="/about" className="hover:text-blue-400 transition-colors">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="hover:text-blue-400 transition-colors">
//                   Contact
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/privacy" className="hover:text-blue-400 transition-colors">
//                   Privacy Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/terms" className="hover:text-blue-400 transition-colors">
//                   Terms of Service
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Column 3: Social Media */}
//           <div>
//             <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
//               Follow Us
//             </h3>
//             <div className="flex space-x-4">
//               {/* Facebook */}
//               <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-all" aria-label="Facebook">
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
//               </a>
//               {/* Twitter/X */}
//               <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-white transition-all" aria-label="Twitter">
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
//               </a>
//               {/* LinkedIn */}
//               <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-700 hover:text-white transition-all" aria-label="LinkedIn">
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
//               </a>
//             </div>
//           </div>

//           {/* Column 4: Newsletter Signup */}
//           <div>
//             <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
//               Stay Updated
//             </h3>
//             <p className="text-sm text-slate-400 mb-4">
//               Subscribe to our newsletter for legal insights and updates.
//             </p>
//             <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
//               <input
//                 type="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 className="w-full px-4 py-2 text-sm bg-slate-800 text-white rounded-md border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-slate-500"
//               />
//               <button
//                 type="submit"
//                 className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-md transition-colors whitespace-nowrap"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>

//         </div>

//         {/* Bottom Bar: Copyright */}
//         <div className="pt-8 border-t border-slate-800 text-center md:flex md:justify-between md:items-center">
//           <p className="text-xs text-slate-500">
//             &copy; {new Date().getFullYear()} LegalEase. All rights reserved.
//           </p>
//           <p className="text-xs text-slate-600 mt-2 md:mt-0">
//             Built for modern legal assistance.
//           </p>
//         </div>

//       </div>
//     </footer>
//   );
// }


// *****************************************************************************************


"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Frontend-only placeholder logic
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail("");
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Brand & About */}
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-serif tracking-wide font-bold text-gray-100 select-none">
              Legal<span className="text-amber-500">Ease</span>
            </Link>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Connecting you with trusted legal professionals instantly. Simplifying legal access for everyone, everywhere.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-amber-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-amber-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a href="#" className="p-2 bg-slate-950 border border-slate-800 rounded-full hover:bg-amber-500 hover:text-slate-950 transition-all" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              {/* Twitter/X */}
              <a href="#" className="p-2 bg-slate-950 border border-slate-800 rounded-full hover:bg-amber-500 hover:text-slate-950 transition-all" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="p-2 bg-slate-950 border border-slate-800 rounded-full hover:bg-amber-500 hover:text-slate-950 transition-all" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 4: Newsletter Signup */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Stay Updated
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              Subscribe to our newsletter for legal insights and updates.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-sm bg-slate-950 text-white rounded-md border border-slate-800 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all placeholder-slate-600"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-4 py-2 text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 rounded-md transition-all whitespace-nowrap shadow-md active:scale-[0.98]"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 border-t border-slate-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} LegalEase. All rights reserved.
          </p>
          <p className="text-xs text-slate-600 mt-2 md:mt-0">
            Built for modern legal assistance.
          </p>
        </div>

      </div>
    </footer>
  );
}