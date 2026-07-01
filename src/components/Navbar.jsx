// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Button } from "@heroui/react";
// import { useSession, signOut } from "@/lib/auth-client";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { data: session, isPending } = useSession();
//   // console.log("Session data in Navbar:", session, "Is pending:", isPending);
//   const user = session?.user;

//   const handleSignOut = async () => {
//     await signOut();

//   }

//   const navLinks = [
//     {
//       label: "Browse Jobs",
//       href: "/jobs",
//     },
//     {
//       label: "Company",
//       href: "/company",
//     },
//     {
//       label: "Pricing",
//       href: "/pricing",
//     },
//   ];

//   return (
//     <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0B0F]/80 backdrop-blur-xl">
//       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
//         {/* LOGO */}
//         <Link href="/" className="flex items-center gap-3">
//           <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 shadow-lg">
//             <span className="text-xl font-bold text-white">P</span>
//           </div>

//           <div className="hidden leading-none sm:block">
//             <h1 className="text-lg font-bold text-white">
//               Hire Loop
//             </h1>
//           </div>
//         </Link>

//         {/* RIGHT SIDE */}
//         <div className="flex items-center gap-4">
//           {/* Desktop Menu */}
//           <div className="hidden items-center gap-6 md:flex">
//             {/* Nav Links */}
//             <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-2">
//               {navLinks.map((link) => (
//                 <li key={link.href}>
//                   <Link
//                     href={link.href}
//                     className="rounded-full px-4 py-2 text-sm font-medium text-gray-300 transition hover:bg-white/10 hover:text-white"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>

//             {/* Vertical Divider */}
//             <div className="h-6 w-px bg-white/20" />

//             {/* Auth Links */}
//             <div className="flex items-center gap-4">
//               {
//                 user ?
//                   <>
//                     Hi, {user.name}!
//                     <Button onClick={handleSignOut}
//                       variant="ghost">Sign Out</Button>
//                   </>
//                   :
//                   <Link
//                     href="/auth/signin"
//                     className="text-sm font-medium text-violet-400 transition hover:text-violet-300"
//                   >
//                     Sign In
//                   </Link>}

//               <Button
//                 as={Link}
//                 href="/register"
//                 radius="lg"
//                 className="h-11 bg-white px-6 text-sm font-semibold text-black hover:bg-gray-200"
//               >
//                 Get Started
//               </Button>
//             </div>
//           </div>

//           {/* MOBILE MENU BUTTON */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="flex items-center justify-center rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
//             aria-label="Toggle Menu"
//           >
//             {isMenuOpen ? (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       {isMenuOpen && (
//         <div className="border-t border-white/10 bg-[#0B0B0F] md:hidden">
//           <div className="space-y-3 px-4 py-6">
//             {/* Nav Links */}
//             <ul className="space-y-2">
//               {navLinks.map((link) => (
//                 <li key={link.href}>
//                   <Link
//                     href={link.href}
//                     className="block rounded-xl px-4 py-3 text-base font-medium text-gray-300 transition hover:bg-white/5 hover:text-white"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>

//             {/* Divider */}
//             <div className="border-t border-white/10 pt-4">
//               <div className="flex flex-col gap-3">
//                 <Link
//                   href="/login"
//                   className="rounded-xl px-4 py-3 text-base font-medium text-violet-400 transition hover:bg-white/5"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Sign In
//                 </Link>

//                 <Button
//                   as={Link}
//                   href="/register"
//                   className="bg-white font-semibold text-black"
//                   radius="lg"
//                 >
//                   Get Started
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }


// ------------------------------------------------******************************-------------------------------------

// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { Button, Input } from "@heroui/react";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { label: "Home", href: "/" },
//     { label: "Browse Lawyers", href: "/lawyers" },
//     { label: "Success Stories", href: "/success-stories" },
//     { label: "About Us", href: "/about" },
//   ];

//   return (
//     <nav className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md">
//       <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        
//         {/* Logo */}
//         <Link
//           href="/"
//           className="flex items-center gap-2 text-xl font-bold"
//         >
//           <span className="text-2xl">⚖️</span>
//           <span>LegalEase</span>
//         </Link>

//         {/* Desktop Navigation */}
//         <ul className="hidden items-center gap-8 md:flex">
//           {navItems.map((item) => (
//             <li key={item.href}>
//               <Link
//                 href={item.href}
//                 className="font-medium transition hover:text-primary"
//               >
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Desktop Right Side */}
//         <div className="hidden items-center gap-3 md:flex">
//           <Input
//             size="sm"
//             placeholder="Search lawyers..."
//             className="w-60"
//           />

//           <Button
//             as={Link}
//             href="/login"
//             variant="light"
//           >
//             Login
//           </Button>

//           <Button
//             as={Link}
//             href="/register"
//             color="primary"
//           >
//             Join Now
//           </Button>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="md:hidden"
//           aria-label="Toggle menu"
//         >
//           <svg
//             className="h-7 w-7"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             {isMenuOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="border-t md:hidden">
//           <div className="space-y-3 p-4">
//             <Input
//               size="sm"
//               placeholder="Search lawyers..."
//             />

//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="block py-2"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.label}
//               </Link>
//             ))}

//             <div className="flex flex-col gap-2 pt-3">
//               <Button
//                 as={Link}
//                 href="/login"
//                 variant="light"
//               >
//                 Login
//               </Button>

//               <Button
//                 as={Link}
//                 href="/register"
//                 color="primary"
//               >
//                 Join Now
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }


// *******************************************************************************

// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { Button, Input } from "@heroui/react";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { label: "Home", href: "/" },
//     { label: "Browse Lawyers", href: "/lawyers" },
//     { label: "Success Stories", href: "/success-stories" },
//     { label: "About Us", href: "/about" },
//   ];

//   return (
//     <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950 text-white shadow-lg">
//       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
        
//         {/* Logo */}
//         <Link href="/" className="flex flex-col">
//           <span className="text-xl font-bold tracking-wider text-amber-400">
//             LEGAL EASE
//           </span>
//           <span className="text-[10px] uppercase tracking-[3px] text-slate-400">
//             Legal Services Marketplace
//           </span>
//         </Link>

//         {/* Desktop Navigation */}
//         <ul className="hidden items-center gap-8 md:flex">
//           {navItems.map((item) => (
//             <li key={item.href}>
//               <Link
//                 href={item.href}
//                 className="font-medium text-slate-300 transition-all duration-200 hover:text-amber-400"
//               >
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Desktop Right Side */}
//         <div className="hidden items-center gap-3 md:flex">
//           <Input
//             size="sm"
//             placeholder="Search lawyers..."
//             className="w-64"
//             classNames={{
//               inputWrapper:
//                 "bg-slate-900 border border-slate-700 hover:border-amber-400",
//               input: "text-white",
//             }}
//           />

//           <Button
//             as={Link}
//             href="/login"
//             variant="light"
//             className="text-slate-200 hover:text-amber-400"
//           >
//             Login
//           </Button>

//           <Button
//             as={Link}
//             href="/register"
//             className="bg-amber-500 font-semibold text-slate-950 hover:bg-amber-400"
//           >
//             Join Now
//           </Button>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="text-slate-200 md:hidden"
//           aria-label="Toggle Menu"
//         >
//           <svg
//             className="h-7 w-7"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             {isMenuOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="border-t border-slate-800 bg-slate-950 md:hidden">
//           <div className="space-y-4 p-4">
//             <Input
//               size="sm"
//               placeholder="Search lawyers..."
//               classNames={{
//                 inputWrapper:
//                   "bg-slate-900 border border-slate-700 hover:border-amber-400",
//                 input: "text-white",
//               }}
//             />

//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 onClick={() => setIsMenuOpen(false)}
//                 className="block py-2 text-slate-300 transition hover:text-amber-400"
//               >
//                 {item.label}
//               </Link>
//             ))}

//             <div className="flex flex-col gap-2 pt-3">
//               <Button
//                 as={Link}
//                 href="/login"
//                 variant="light"
//                 className="justify-center text-slate-200"
//               >
//                 Login
//               </Button>

//               <Button
//                 as={Link}
//                 href="/register"
//                 className="bg-amber-500 font-semibold text-slate-950 hover:bg-amber-400"
//               >
//                 Join Now
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// ****************************************************************

// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { Button, Input } from "@heroui/react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const navItems = [
//     { label: "Home", href: "/" },
//     { label: "Browse Lawyers", href: "/lawyers" },
//     { label: "Success Stories", href: "/success-stories" },
//     { label: "About", href: "/about" },
//   ];

//   return (
//     <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950 text-white">
//       <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">

//         {/* LOGO */}
//         <Link href="/" className="flex flex-col leading-tight">
//           <span className="text-lg font-bold tracking-widest text-amber-400">
//             LEGAL EASE
//           </span>
//           <span className="text-[10px] tracking-[3px] text-slate-400">
//             Lawyer Hiring Platform
//           </span>
//         </Link>

//         {/* DESKTOP NAV */}
//         <nav className="hidden items-center gap-8 md:flex">
//           {navItems.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className="text-sm font-medium text-slate-300 transition hover:text-amber-400"
//             >
//               {item.label}
//             </Link>
//           ))}
//         </nav>

//         {/* RIGHT SIDE (DESKTOP) */}
//         <div className="hidden items-center gap-3 md:flex">
          
//           {/* SEARCH */}
//           <div className="w-64">
//             <Input
//               size="sm"
//               placeholder="Search lawyers..."
//             />
//           </div>

//           {/* LOGIN */}
//           <Button
//             as={Link}
//             href="/login"
//             variant="light"
//             className="text-slate-300 hover:text-amber-400"
//           >
//             Login
//           </Button>

//           {/* CTA */}
//           <Button
//             as={Link}
//             href="/lawyers"
//             className="bg-amber-500 font-semibold text-slate-950 hover:bg-amber-400"
//           >
//             Find Lawyer
//           </Button>
//         </div>

//         {/* MOBILE BUTTON */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden text-slate-300"
//         >
//           {open ? "✕" : "☰"}
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       {open && (
//         <div className="border-t border-slate-800 bg-slate-950 md:hidden">
//           <div className="space-y-4 p-4">

//             {/* SEARCH */}
//             <Input placeholder="Search lawyers..." />

//             {/* LINKS */}
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 onClick={() => setOpen(false)}
//                 className="block text-slate-300 hover:text-amber-400"
//               >
//                 {item.label}
//               </Link>
//             ))}

//             {/* ACTIONS */}
//             <div className="flex flex-col gap-2 pt-2">
//               <Button
//                 as={Link}
//                 href="/login"
//                 variant="light"
//                 className="text-slate-300"
//               >
//                 Login
//               </Button>

//               <Button
//                 as={Link}
//                 href="/lawyers"
//                 className="bg-amber-500 text-slate-950 font-semibold"
//               >
//                 Find Lawyer
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }


// ************************************************************************************

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";

// export default function Navbar() {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   // Mock authentication & role state (Swap with your actual auth state/context later)
//   const [isLoggedIn, setIsLoggedIn] = useState(true); 
//   const [userRole, setUserRole] = useState("lawyer"); // 'client', 'lawyer', or 'admin'

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       alert(`Searching globally for: "${searchQuery}"`);
//     }
//   };

//   const isActive = (path) => pathname === path;

//   return (
//     <nav className="bg-slate-900 border-b border-slate-800 text-slate-200 sticky top-0 z-50 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 gap-4">
          
//           {/* 1. Logo / Site Name with Subtitle */}
//           <div className="flex-shrink-0">
//             <Link href="/" className="flex flex-col group select-none">
//               <span className="text-xl font-bold text-white tracking-wide leading-none transition-colors group-hover:text-blue-400">
//                 Legal<span className="text-blue-500 group-hover:text-white">Ease</span>
//               </span>
//               <span className="text-[10px] text-slate-400 tracking-wider uppercase font-medium mt-1 leading-none">
//                 Lawyer Hiring Platform
//               </span>
//             </Link>
//           </div>

//           {/* 2. Global Search Bar */}
//           <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-4 relative">
//             <input
//               type="text"
//               placeholder="Search lawyers by specialization or name..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-10 pr-4 py-1.5 text-sm bg-slate-800 text-white rounded-md border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-slate-500"
//             />
//             <div className="absolute left-3 top-2.5 text-slate-500">
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
//               </svg>
//             </div>
//           </form>

//           {/* 3. Desktop Navigation Links */}
//           <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
//             <Link 
//               href="/" 
//               className={`transition-colors ${isActive("/") ? "text-blue-400 font-semibold" : "text-slate-300 hover:text-white"}`}
//             >
//               Home
//             </Link>
//             <Link 
//               href="/browse" 
//               className={`transition-colors ${isActive("/browse") ? "text-blue-400 font-semibold" : "text-slate-300 hover:text-white"}`}
//             >
//               Browse Lawyers
//             </Link>

//             {/* Dashboard Dropdown */}
//             {isLoggedIn && (
//               <div className="relative">
//                 <button
//                   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                   onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
//                   className="flex items-center gap-1 text-slate-300 hover:text-white focus:outline-none transition-colors"
//                 >
//                   Dashboard
//                   <svg className={`w-4 h-4 transform transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
//                   </svg>
//                 </button>

//                 {/* Dropdown Menu */}
//                 {isDropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-md shadow-lg py-1 z-50">
//                     <div className="px-4 py-1.5 text-xs text-slate-500 border-b border-slate-700 uppercase tracking-wider">
//                       Role: {userRole}
//                     </div>
//                     <Link href={`/dashboard/${userRole}`} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white">
//                       My Profile
//                     </Link>
//                     <Link href={`/dashboard/${userRole}/cases`} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white">
//                       Manage Cases
//                     </Link>
//                     <Link href={`/dashboard/${userRole}/settings`} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white">
//                       Settings
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Login / Logout Button */}
//             {isLoggedIn ? (
//               <button 
//                 onClick={() => setIsLoggedIn(false)} 
//                 className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-md border border-slate-700 text-sm font-medium transition-all"
//               >
//                 Logout
//               </button>
//             ) : (
//               <button 
//                 onClick={() => setIsLoggedIn(true)} 
//                 className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-md text-sm font-medium transition-all"
//               >
//                 Login
//               </button>
//             )}
//           </div>

//           {/* 4. Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
//               aria-label="Toggle Menu"
//             >
//               {isOpen ? (
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               )}
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* Mobile Menu Panel */}
//       {isOpen && (
//         <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 pt-2 pb-4 space-y-3">
//           <form onSubmit={handleSearch} className="relative w-full mb-4">
//             <input
//               type="text"
//               placeholder="Search lawyers..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 text-sm bg-slate-800 text-white rounded-md border border-slate-700 focus:outline-none placeholder-slate-500"
//             />
//             <div className="absolute left-3 top-3 text-slate-500">
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
//               </svg>
//             </div>
//           </form>

//           <Link
//             href="/"
//             onClick={() => setIsOpen(false)}
//             className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/") ? "bg-slate-800 text-blue-400" : "hover:bg-slate-800"}`}
//           >
//             Home
//           </Link>
//           <Link
//             href="/browse"
//             onClick={() => setIsOpen(false)}
//             className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/browse") ? "bg-slate-800 text-blue-400" : "hover:bg-slate-800"}`}
//           >
//             Browse Lawyers
//           </Link>

//           {isLoggedIn && (
//             <div className="border-t border-slate-800 pt-2">
//               <div className="px-3 py-1 text-xs uppercase tracking-wider text-slate-500">
//                 Dashboard ({userRole})
//               </div>
//               <Link
//                 href={`/dashboard/${userRole}`}
//                 onClick={() => setIsOpen(false)}
//                 className="block px-3 py-2 rounded-md text-base font-medium text-slate-400 hover:bg-slate-800 hover:text-white"
//               >
//                 My Profile
//               </Link>
//               <Link
//                 href={`/dashboard/${userRole}/cases`}
//                 onClick={() => setIsOpen(false)}
//                 className="block px-3 py-2 rounded-md text-base font-medium text-slate-400 hover:bg-slate-800 hover:text-white"
//               >
//                 Manage Cases
//               </Link>
//             </div>
//           )}

//           <div className="pt-2 border-t border-slate-800">
//             {isLoggedIn ? (
//               <button
//                 onClick={() => { setIsLoggedIn(false); setIsOpen(false); }}
//                 className="w-full text-center px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-md text-sm font-medium transition-all"
//               >
//                 Logout
//               </button>
//             ) : (
//               <button
//                 onClick={() => { setIsLoggedIn(true); setIsOpen(false); }}
//                 className="w-full text-center px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md text-sm font-medium transition-all"
//               >
//                 Login
//               </button>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";

// export default function Navbar() {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   // Mock authentication & role state (Kept true so dropdown shows immediately)
//   const [isLoggedIn, setIsLoggedIn] = useState(true); 
//   const [userRole, setUserRole] = useState("lawyer"); // 'client', 'lawyer', or 'admin'

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       alert(`Searching globally for: "${searchQuery}"`);
//     }
//   };

//   const isActive = (path) => pathname === path;

//   return (
//     <nav className="bg-slate-900 border-b border-slate-800 text-slate-200 sticky top-0 z-50 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 gap-4">
          
//           {/* 1. Logo / Site Name with Subtitle */}
//           <div className="flex-shrink-0">
//             <Link href="/" className="flex flex-col group select-none">
//               <span className="text-xl font-bold text-white tracking-wide leading-none transition-colors group-hover:text-blue-400">
//                 Legal<span className="text-blue-500 group-hover:text-white">Ease</span>
//               </span>
//               <span className="text-[10px] text-slate-400 tracking-wider uppercase font-medium mt-1 leading-none">
//                 Lawyer Hiring Platform
//               </span>
//             </Link>
//           </div>

//           {/* 2. Global Search Bar */}
//           <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-4 relative">
//             <input
//               type="text"
//               placeholder="Search lawyers by specialization or name..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-10 pr-4 py-1.5 text-sm bg-slate-800 text-white rounded-md border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-slate-500"
//             />
//             <div className="absolute left-3 top-2.5 text-slate-500">
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
//               </svg>
//             </div>
//           </form>

//           {/* 3. Desktop Navigation Links */}
//           <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
//             <Link 
//               href="/" 
//               className={`transition-colors ${isActive("/") ? "text-blue-400 font-semibold" : "text-slate-300 hover:text-white"}`}
//             >
//               Home
//             </Link>
//             <Link 
//               href="/browse" 
//               className={`transition-colors ${isActive("/browse") ? "text-blue-400 font-semibold" : "text-slate-300 hover:text-white"}`}
//             >
//               Browse Lawyers
//             </Link>

//             {/* Dashboard Dropdown */}
//             {isLoggedIn && (
//               <div className="relative">
//                 <button
//                   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                   onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
//                   className="flex items-center gap-1 text-slate-300 hover:text-white focus:outline-none transition-colors"
//                 >
//                   Dashboard
//                   <svg className={`w-4 h-4 transform transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
//                   </svg>
//                 </button>

//                 {/* Dropdown Menu */}
//                 {isDropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-md shadow-lg py-1 z-50">
//                     <div className="px-4 py-1.5 text-xs text-slate-500 border-b border-slate-700 uppercase tracking-wider">
//                       Role: {userRole}
//                     </div>
//                     <Link href={`/dashboard/${userRole}`} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white">
//                       My Profile
//                     </Link>
//                     <Link href={`/dashboard/${userRole}/cases`} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white">
//                       Manage Cases
//                     </Link>
//                     <Link href={`/dashboard/${userRole}/settings`} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white">
//                       Settings
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Desktop Auth Button Configuration */}
//             {isLoggedIn ? (
//               <button 
//                 onClick={() => setIsLoggedIn(false)} 
//                 className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-md border border-slate-700 text-sm font-medium transition-all"
//               >
//                 Logout
//               </button>
//             ) : (
//               <Link 
//                 href="/auth/signin" 
//                 className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-md text-sm font-medium transition-all text-center"
//               >
//                 Login
//               </Link>
//             )}
//           </div>

//           {/* 4. Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
//               aria-label="Toggle Menu"
//             >
//               {isOpen ? (
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               )}
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* Mobile Menu Panel */}
//       {isOpen && (
//         <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 pt-2 pb-4 space-y-3">
//           <form onSubmit={handleSearch} className="relative w-full mb-4">
//             <input
//               type="text"
//               placeholder="Search lawyers..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 text-sm bg-slate-800 text-white rounded-md border border-slate-700 focus:outline-none placeholder-slate-500"
//             />
//             <div className="absolute left-3 top-3 text-slate-500">
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
//               </svg>
//             </div>
//           </form>

//           <Link
//             href="/"
//             onClick={() => setIsOpen(false)}
//             className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/") ? "bg-slate-800 text-blue-400" : "hover:bg-slate-800"}`}
//           >
//             Home
//           </Link>
//           <Link
//             href="/browse"
//             onClick={() => setIsOpen(false)}
//             className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/browse") ? "bg-slate-800 text-blue-400" : "hover:bg-slate-800"}`}
//           >
//             Browse Lawyers
//           </Link>

//           {isLoggedIn && (
//             <div className="border-t border-slate-800 pt-2">
//               <div className="px-3 py-1 text-xs uppercase tracking-wider text-slate-500">
//                 Dashboard ({userRole})
//               </div>
//               <Link
//                 href={`/dashboard/${userRole}`}
//                 onClick={() => setIsOpen(false)}
//                 className="block px-3 py-2 rounded-md text-base font-medium text-slate-400 hover:bg-slate-800 hover:text-white"
//               >
//                 My Profile
//               </Link>
//               <Link
//                 href={`/dashboard/${userRole}/cases`}
//                 onClick={() => setIsOpen(false)}
//                 className="block px-3 py-2 rounded-md text-base font-medium text-slate-400 hover:bg-slate-800 hover:text-white"
//               >
//                 Manage Cases
//               </Link>
//             </div>
//           )}

//           {/* Mobile Auth Link Layout */}
//           <div className="pt-2 border-t border-slate-800">
//             {isLoggedIn ? (
//               <button
//                 onClick={() => { setIsLoggedIn(false); setIsOpen(false); }}
//                 className="w-full text-center px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-md text-sm font-medium transition-all"
//               >
//                 Logout
//               </button>
//             ) : (
//               <Link
//                 href="/auth/signin"
//                 onClick={() => setIsOpen(false)}
//                 className="block w-full text-center px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md text-sm font-medium transition-all"
//               >
//                 Login
//               </Link>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// *******************************************************************************************************


// "use client";

// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { useState } from "react";
// // 1. Import your authClient instance 
// import { authClient } from "@/lib/auth-client"; 

// export default function Navbar() {
//   const pathname = usePathname();
//   const router = useRouter();
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   // 2. Hook into Better-Auth session state
//   const { data: session, isPending } = authClient.useSession();

//   // 3. Derive variables instead of local state
//   const isLoggedIn = !!session;
//   // Fallback to "client" if no role is explicit in your MongoDB user document metadata
//   const userRole = session?.user?.role || "client"; 

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       alert(`Searching globally for: "${searchQuery}"`);
//     }
//   };

//   // 4. Trigger Better-Auth signOut method
//   const handleSignOut = async () => {
//     await authClient.signOut({
//       fetchOptions: {
//         onSuccess: () => {
//           router.push("/"); // Redirect home after successful logout
//           setIsOpen(false);
//         },
//       },
//     });
//   };

//   const isActive = (path) => pathname === path;

//   // Optional: Prevent flash of unauthenticated layout while loading session status
//   if (isPending) {
//     return (
//       <nav className="bg-slate-900 border-b border-slate-800 text-slate-200 h-16 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
//           <div className="text-xl font-bold text-white">LegalEase</div>
//           <div className="w-6 h-6 border-2 border-t-transparent border-blue-500 rounded-full animate-spin" />
//         </div>
//       </nav>
//     );
//   }

//   return (
//     <nav className="bg-slate-900 border-b border-slate-800 text-slate-200 sticky top-0 z-50 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 gap-4">
          
//           {/* 1. Logo / Site Name with Subtitle */}
//           <div className="flex-shrink-0">
//             <Link href="/" className="flex flex-col group select-none">
//               <span className="text-xl font-bold text-white tracking-wide leading-none transition-colors group-hover:text-blue-400">
//                 Legal<span className="text-blue-500 group-hover:text-white">Ease</span>
//               </span>
//               <span className="text-[10px] text-slate-400 tracking-wider uppercase font-medium mt-1 leading-none">
//                 Lawyer Hiring Platform
//               </span>
//             </Link>
//           </div>

//           {/* 2. Global Search Bar */}
//           <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-4 relative">
//             <input
//               type="text"
//               placeholder="Search lawyers by specialization or name..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-10 pr-4 py-1.5 text-sm bg-slate-800 text-white rounded-md border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-slate-500"
//             />
//             <div className="absolute left-3 top-2.5 text-slate-500">
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
//               </svg>
//             </div>
//           </form>

//           {/* 3. Desktop Navigation Links */}
//           <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
//             <Link 
//               href="/" 
//               className={`transition-colors ${isActive("/") ? "text-blue-400 font-semibold" : "text-slate-300 hover:text-white"}`}
//             >
//               Home
//             </Link>
//             <Link 
//               href="/browse" 
//               className={`transition-colors ${isActive("/browse") ? "text-blue-400 font-semibold" : "text-slate-300 hover:text-white"}`}
//             >
//               Browse Lawyers
//             </Link>

//             {/* Dashboard Dropdown */}
//             {isLoggedIn && (
//               <div className="relative">
//                 <button
//                   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                   onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
//                   className="flex items-center gap-1 text-slate-300 hover:text-white focus:outline-none transition-colors"
//                 >
//                   Dashboard
//                   <svg className={`w-4 h-4 transform transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
//                   </svg>
//                 </button>

//                 {/* Dropdown Menu */}
//                 {isDropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-md shadow-lg py-1 z-50">
//                     <div className="px-4 py-1.5 text-xs text-slate-500 border-b border-slate-700 uppercase tracking-wider">
//                       Role: {userRole}
//                     </div>
//                     <Link href={`/dashboard/${userRole}`} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white">
//                       My Profile
//                     </Link>
//                     <Link href={`/dashboard/${userRole}/cases`} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white">
//                       Manage Cases
//                     </Link>
//                     <Link href={`/dashboard/${userRole}/settings`} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white">
//                       Settings
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Desktop Auth Button Configuration */}
//             {isLoggedIn ? (
//               <button 
//                 onClick={handleSignOut} 
//                 className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-md border border-slate-700 text-sm font-medium transition-all"
//               >
//                 Logout
//               </button>
//             ) : (
//               <Link 
//                 href="/auth/signin" 
//                 className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-md text-sm font-medium transition-all text-center"
//               >
//                 Login
//               </Link>
//             )}
//           </div>

//           {/* 4. Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
//               aria-label="Toggle Menu"
//             >
//               {isOpen ? (
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               )}
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* Mobile Menu Panel */}
//       {isOpen && (
//         <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 pt-2 pb-4 space-y-3">
//           <form onSubmit={handleSearch} className="relative w-full mb-4">
//             <input
//               type="text"
//               placeholder="Search lawyers..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 text-sm bg-slate-800 text-white rounded-md border border-slate-700 focus:outline-none placeholder-slate-500"
//             />
//             <div className="absolute left-3 top-3 text-slate-500">
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
//               </svg>
//             </div>
//           </form>

//           <Link
//             href="/"
//             onClick={() => setIsOpen(false)}
//             className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/") ? "bg-slate-800 text-blue-400" : "hover:bg-slate-800"}`}
//           >
//             Home
//           </Link>
//           <Link
//             href="/browse"
//             onClick={() => setIsOpen(false)}
//             className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/browse") ? "bg-slate-800 text-blue-400" : "hover:bg-slate-800"}`}
//           >
//             Browse Lawyers
//           </Link>

//           {isLoggedIn && (
//             <div className="border-t border-slate-800 pt-2">
//               <div className="px-3 py-1 text-xs uppercase tracking-wider text-slate-500">
//                 Dashboard ({userRole})
//               </div>
//               <Link
//                 href={`/dashboard/${userRole}`}
//                 onClick={() => setIsOpen(false)}
//                 className="block px-3 py-2 rounded-md text-base font-medium text-slate-400 hover:bg-slate-800 hover:text-white"
//               >
//                 My Profile
//               </Link>
//               <Link
//                 href={`/dashboard/${userRole}/cases`}
//                 onClick={() => setIsOpen(false)}
//                 className="block px-3 py-2 rounded-md text-base font-medium text-slate-400 hover:bg-slate-800 hover:text-white"
//               >
//                 Manage Cases
//               </Link>
//             </div>
//           )}

//           {/* Mobile Auth Link Layout */}
//           <div className="pt-2 border-t border-slate-800">
//             {isLoggedIn ? (
//               <button
//                 onClick={handleSignOut}
//                 className="w-full text-center px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-md text-sm font-medium transition-all"
//               >
//                 Logout
//               </button>
//             ) : (
//               <Link
//                 href="/auth/signin"
//                 onClick={() => setIsOpen(false)}
//                 className="block w-full text-center px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md text-sm font-medium transition-all"
//               >
//                 Login
//               </Link>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }


// **************************************************************************************************


// "use client";

// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { useState } from "react";
// // Import your Better-Auth client instance 
// import { authClient } from "@/lib/auth-client"; 

// export default function Navbar() {
//   const pathname = usePathname();
//   const router = useRouter();
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   // Hook into Better-Auth session state
//   const { data: session, isPending } = authClient.useSession();

//   // Derive authentication and role attributes from the live session
//   const isLoggedIn = !!session;
//   const userRole = session?.user?.role || "client"; 

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       alert(`Searching globally for: "${searchQuery}"`);
//     }
//   };

//   // Trigger Better-Auth signOut method
//   const handleSignOut = async () => {
//     await authClient.signOut({
//       fetchOptions: {
//         onSuccess: () => {
//           router.push("/"); // Redirect home after successful logout
//           setIsOpen(false);
//         },
//       },
//     });
//   };

//   const isActive = (path) => pathname === path;

//   // Prevent flash of unauthenticated layout while loading session status
//   if (isPending) {
//     return (
//       <nav className="bg-slate-900 border-b border-slate-800 text-slate-200 h-16 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
//           <div className="text-xl font-bold text-white">LegalEase</div>
//           <div className="w-6 h-6 border-2 border-t-transparent border-blue-500 rounded-full animate-spin" />
//         </div>
//       </nav>
//     );
//   }

//   return (
//     <nav className="bg-slate-900 border-b border-slate-800 text-slate-200 sticky top-0 z-50 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 gap-4">
          
//           {/* 1. Logo / Site Name with Subtitle */}
//           <div className="flex-shrink-0">
//             <Link href="/" className="flex flex-col group select-none">
//               <span className="text-xl font-bold text-white tracking-wide leading-none transition-colors group-hover:text-blue-400">
//                 Legal<span className="text-blue-500 group-hover:text-white">Ease</span>
//               </span>
//               <span className="text-[10px] text-slate-400 tracking-wider uppercase font-medium mt-1 leading-none">
//                 Lawyer Hiring Platform
//               </span>
//             </Link>
//           </div>

//           {/* 2. Global Search Bar */}
//           <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-4 relative">
//             <input
//               type="text"
//               placeholder="Search lawyers by specialization or name..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-10 pr-4 py-1.5 text-sm bg-slate-800 text-white rounded-md border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-slate-500"
//             />
//             <div className="absolute left-3 top-2.5 text-slate-500">
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
//               </svg>
//             </div>
//           </form>

//           {/* 3. Desktop Navigation Links */}
//           <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
//             <Link 
//               href="/" 
//               className={`transition-colors ${isActive("/") ? "text-blue-400 font-semibold" : "text-slate-300 hover:text-white"}`}
//             >
//               Home
//             </Link>
//             <Link 
//               href="/browse" 
//               className={`transition-colors ${isActive("/browse") ? "text-blue-400 font-semibold" : "text-slate-300 hover:text-white"}`}
//             >
//               Browse Lawyers
//             </Link>

//             {/* Dashboard Dropdown */}
//             {isLoggedIn && (
//               <div className="relative">
//                 <button
//                   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                   onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
//                   className="flex items-center gap-1 text-slate-300 hover:text-white focus:outline-none transition-colors"
//                 >
//                   Dashboard
//                   <svg className={`w-4 h-4 transform transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
//                   </svg>
//                 </button>

//                 {/* Dropdown Menu */}
//                 {isDropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-md shadow-lg py-1 z-50">
//                     <div className="px-4 py-1.5 text-xs text-slate-500 border-b border-slate-700 uppercase tracking-wider">
//                       Role: {userRole}
//                     </div>
//                     <Link href={`/dashboard/${userRole}`} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white">
//                       My Profile
//                     </Link>
//                     <Link href={`/dashboard/${userRole}/cases`} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white">
//                       Manage Cases
//                     </Link>
//                     <Link href={`/dashboard/${userRole}/settings`} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white">
//                       Settings
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Desktop Dynamic Username Greeting */}
//             {isLoggedIn && (
//               <span className="text-slate-400 text-sm select-none">
//                 Hi, <span className="text-white font-medium">{session?.user?.name}</span>
//               </span>
//             )}

//             {/* Desktop Auth Button Configuration */}
//             {isLoggedIn ? (
//               <button 
//                 onClick={handleSignOut} 
//                 className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-md border border-slate-700 text-sm font-medium transition-all"
//               >
//                 Logout
//               </button>
//             ) : (
//               <Link 
//                 href="/auth/signin" 
//                 className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-md text-sm font-medium transition-all text-center"
//               >
//                 Login
//               </Link>
//             )}
//           </div>

//           {/* 4. Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
//               aria-label="Toggle Menu"
//             >
//               {isOpen ? (
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               )}
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* Mobile Menu Panel */}
//       {isOpen && (
//         <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 pt-2 pb-4 space-y-3">
//           <form onSubmit={handleSearch} className="relative w-full mb-4">
//             <input
//               type="text"
//               placeholder="Search lawyers..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 text-sm bg-slate-800 text-white rounded-md border border-slate-700 focus:outline-none placeholder-slate-500"
//             />
//             <div className="absolute left-3 top-3 text-slate-500">
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
//               </svg>
//             </div>
//           </form>

//           <Link
//             href="/"
//             onClick={() => setIsOpen(false)}
//             className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/") ? "bg-slate-800 text-blue-400" : "hover:bg-slate-800"}`}
//           >
//             Home
//           </Link>
//           <Link
//             href="/browse"
//             onClick={() => setIsOpen(false)}
//             className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/browse") ? "bg-slate-800 text-blue-400" : "hover:bg-slate-800"}`}
//           >
//             Browse Lawyers
//           </Link>

//           {isLoggedIn && (
//             <div className="border-t border-slate-800 pt-2">
//               <div className="px-3 py-1 text-xs uppercase tracking-wider text-slate-500">
//                 Dashboard ({userRole})
//               </div>
//               <Link
//                 href={`/dashboard/${userRole}`}
//                 onClick={() => setIsOpen(false)}
//                 className="block px-3 py-2 rounded-md text-base font-medium text-slate-400 hover:bg-slate-800 hover:text-white"
//               >
//                 My Profile
//               </Link>
//               <Link
//                 href={`/dashboard/${userRole}/cases`}
//                 onClick={() => setIsOpen(false)}
//                 className="block px-3 py-2 rounded-md text-base font-medium text-slate-400 hover:bg-slate-800 hover:text-white"
//               >
//                 Manage Cases
//               </Link>
//             </div>
//           )}

//           {/* Mobile Auth Link Layout */}
//           <div className="pt-2 border-t border-slate-800 space-y-3">
//             {/* Mobile Dynamic Username Greeting */}
//             {isLoggedIn && (
//               <div className="px-3 text-sm text-slate-400 select-none">
//                 Hi, <span className="text-white font-medium">{session?.user?.name}</span>
//               </div>
//             )}

//             {isLoggedIn ? (
//               <button
//                 onClick={handleSignOut}
//                 className="w-full text-center px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-md text-sm font-medium transition-all"
//               >
//                 Logout
//               </button>
//             ) : (
//               <Link
//                 href="/auth/signin"
//                 onClick={() => setIsOpen(false)}
//                 className="block w-full text-center px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md text-sm font-medium transition-all"
//               >
//                 Login
//               </Link>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }


// *****************************************************************************


// "use client";

// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { useState } from "react";
// // Import your Better-Auth client instance 
// import { authClient } from "@/lib/auth-client"; 

// export default function Navbar() {
//   const pathname = usePathname();
//   const router = useRouter();
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   // Hook into Better-Auth session state
//   const { data: session, isPending } = authClient.useSession();

//   // Derive authentication and role attributes from the live session
//   const isLoggedIn = !!session;
//   const userRole = session?.user?.role || "client"; 

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       alert(`Searching globally for: "${searchQuery}"`);
//     }
//   };

//   // Trigger Better-Auth signOut method
//   const handleSignOut = async () => {
//     await authClient.signOut({
//       fetchOptions: {
//         onSuccess: () => {
//           router.push("/"); // Redirect home after successful logout
//           setIsOpen(false);
//         },
//       },
//     });
//   };

//   const isActive = (path) => pathname === path;

//   // Prevent flash of unauthenticated layout while loading session status
//   if (isPending) {
//     return (
//       <nav className="bg-slate-900 border-b border-slate-800 text-slate-200 h-16 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
//           <div className="text-xl font-bold text-white">LegalEase</div>
//           <div className="w-6 h-6 border-2 border-t-transparent border-amber-500 rounded-full animate-spin" />
//         </div>
//       </nav>
//     );
//   }

//   return (
//     <nav className="bg-slate-900 border-b border-slate-800 text-slate-200 sticky top-0 z-50 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 gap-4">
          
//           {/* 1. Logo / Site Name with Subtitle */}
//           <div className="flex-shrink-0">
//             <Link href="/" className="flex flex-col group select-none">
//               <span className="text-xl font-serif tracking-wide font-bold text-gray-100 leading-none transition-colors group-hover:text-amber-400">
//                 Legal<span className="text-amber-500 group-hover:text-gray-100">Ease</span>
//               </span>
//               <span className="text-[10px] text-slate-400 tracking-wider uppercase font-medium mt-1 leading-none">
//                 Lawyer Hiring Platform
//               </span>
//             </Link>
//           </div>

//           {/* 2. Global Search Bar */}
//           <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-4 relative">
//             <input
//               type="text"
//               placeholder="Search lawyers by specialization or name..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-10 pr-4 py-1.5 text-sm bg-slate-950 text-white rounded-md border border-slate-800 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all placeholder-slate-600"
//             />
//             <div className="absolute left-3 top-2.5 text-slate-500">
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
//               </svg>
//             </div>
//           </form>

//           {/* 3. Desktop Navigation Links */}
//           <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
//             <Link 
//               href="/" 
//               className={`transition-colors ${isActive("/") ? "text-amber-500 font-semibold" : "text-slate-300 hover:text-white"}`}
//             >
//               Home
//             </Link>
//             <Link 
//               href="/browse" 
//               className={`transition-colors ${isActive("/browse") ? "text-amber-500 font-semibold" : "text-slate-300 hover:text-white"}`}
//             >
//               Browse Lawyers
//             </Link>

//             {/* Dashboard Dropdown */}
//             {isLoggedIn && (
//               <div className="relative">
//                 <button
//                   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                   onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
//                   className="flex items-center gap-1 text-slate-300 hover:text-white focus:outline-none transition-colors"
//                 >
//                   Dashboard
//                   <svg className={`w-4 h-4 transform transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
//                   </svg>
//                 </button>

//                 {/* Dropdown Menu */}
//                 {isDropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-slate-950 border border-slate-800 rounded-md shadow-lg py-1 z-50">
//                     <div className="px-4 py-1.5 text-xs text-slate-500 border-b border-slate-800 uppercase tracking-wider">
//                       Role: {userRole}
//                     </div>
//                     <Link href={`/dashboard/${userRole}`} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-900 hover:text-amber-400">
//                       My Profile
//                     </Link>
//                     <Link href={`/dashboard/${userRole}/cases`} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-900 hover:text-amber-400">
//                       Manage Cases
//                     </Link>
//                     <Link href={`/dashboard/${userRole}/settings`} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-900 hover:text-amber-400">
//                       Settings
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Desktop Dynamic Username Greeting */}
//             {isLoggedIn && (
//               <span className="text-slate-400 text-sm select-none">
//                 Hi, <span className="text-white font-medium">{session?.user?.name}</span>
//               </span>
//             )}

//             {/* Desktop Auth Button Configuration */}
//             {isLoggedIn ? (
//               <button 
//                 onClick={handleSignOut} 
//                 className="px-4 py-1.5 bg-slate-950 hover:bg-slate-850/60 text-slate-300 hover:text-white rounded-md border border-slate-800 text-sm font-medium transition-all"
//               >
//                 Logout
//               </button>
//             ) : (
//               <Link 
//                 href="/auth/signin" 
//                 className="px-4 py-1.5 rounded-md text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 transition-all text-center shadow-md active:scale-[0.98]"
//               >
//                 Login
//               </Link>
//             )}
//           </div>

//           {/* 4. Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
//               aria-label="Toggle Menu"
//             >
//               {isOpen ? (
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               )}
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* Mobile Menu Panel */}
//       {isOpen && (
//         <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 pt-2 pb-4 space-y-3">
//           <form onSubmit={handleSearch} className="relative w-full mb-4">
//             <input
//               type="text"
//               placeholder="Search lawyers..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 text-sm bg-slate-950 text-white rounded-md border border-slate-800 focus:outline-none placeholder-slate-600"
//             />
//             <div className="absolute left-3 top-3 text-slate-500">
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
//               </svg>
//             </div>
//           </form>

//           <Link
//             href="/"
//             onClick={() => setIsOpen(false)}
//             className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/") ? "bg-amber-500/10 text-amber-400 font-semibold" : "hover:bg-slate-800"}`}
//           >
//             Home
//           </Link>
//           <Link
//             href="/browse"
//             onClick={() => setIsOpen(false)}
//             className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/browse") ? "bg-amber-500/10 text-amber-400 font-semibold" : "hover:bg-slate-800"}`}
//           >
//             Browse Lawyers
//           </Link>

//           {isLoggedIn && (
//             <div className="border-t border-slate-800 pt-2">
//               <div className="px-3 py-1 text-xs uppercase tracking-wider text-slate-500">
//                 Dashboard ({userRole})
//               </div>
//               <Link
//                 href={`/dashboard/${userRole}`}
//                 onClick={() => setIsOpen(false)}
//                 className="block px-3 py-2 rounded-md text-base font-medium text-slate-400 hover:bg-slate-800 hover:text-white"
//               >
//                 My Profile
//               </Link>
//               <Link
//                 href={`/dashboard/${userRole}/cases`}
//                 onClick={() => setIsOpen(false)}
//                 className="block px-3 py-2 rounded-md text-base font-medium text-slate-400 hover:bg-slate-800 hover:text-white"
//               >
//                 Manage Cases
//               </Link>
//             </div>
//           )}

//           {/* Mobile Auth Link Layout */}
//           <div className="pt-2 border-t border-slate-800 space-y-3">
//             {/* Mobile Dynamic Username Greeting */}
//             {isLoggedIn && (
//               <div className="px-3 text-sm text-slate-400 select-none">
//                 Hi, <span className="text-white font-medium">{session?.user?.name}</span>
//               </div>
//             )}

//             {isLoggedIn ? (
//               <button
//                 onClick={handleSignOut}
//                 className="w-full text-center px-4 py-2 bg-slate-950 border border-slate-800 text-slate-300 rounded-md text-sm font-medium transition-all"
//               >
//                 Logout
//               </button>
//             ) : (
//               <Link
//                 href="/auth/signin"
//                 onClick={() => setIsOpen(false)}
//                 className="block w-full text-center px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold rounded-md text-sm transition-all"
//               >
//                 Login
//               </Link>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// ************************************************************

// "use client";

// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { useState } from "react";
// // Import your Better-Auth client instance 
// import { authClient } from "@/lib/auth-client"; 

// export default function Navbar() {
//   const pathname = usePathname();
//   const router = useRouter();
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   // Hook into Better-Auth session state
//   const { data: session, isPending } = authClient.useSession();

//   // Derive authentication and role attributes from the live session
//   const isLoggedIn = !!session;
//   const userRole = session?.user?.role || "client"; // 'client', 'lawyer', or 'admin'

//   /* =========================================================================
//       ⚖️ LEGALEASE DYNAMIC ROUTE MAPPING BASED ON ROLE
//      ========================================================================= */
//   const getDashboardPath = (subPath = "") => {
//     // যদি সাব-পাথ থাকে (যেমন: "cases", "settings"), তাহলে প্রোজেক্ট গাইড অনুযায়ী রাউট রিটার্ন করবে
//     if (subPath) {
//       // আপনি যদি পরবর্তীতে সাব-ফোল্ডার স্ট্রাকচার পরিবর্তন করেন, শুধু এখানে পাথ বদলে দিলেই পুরো অ্যাপে বদলে যাবে
//       return `/dashboard/${userRole}/${subPath}`;
//     }
//     // মেইন ড্যাশবোর্ড হোম: /dashboard/client অথবা /dashboard/lawyer
//     return `/dashboard/${userRole}`;
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       alert(`Searching globally for: "${searchQuery}"`);
//     }
//   };

//   // Trigger Better-Auth signOut method
//   const handleSignOut = async () => {
//     await authClient.signOut({
//       fetchOptions: {
//         onSuccess: () => {
//           router.push("/"); // Redirect home after successful logout
//           setIsOpen(false);
//           setIsDropdownOpen(false);
//         },
//       },
//     });
//   };

//   const isActive = (path) => pathname === path;

//   // Prevent flash of unauthenticated layout while loading session status
//   if (isPending) {
//     return (
//       <nav className="bg-slate-900 border-b border-slate-800 text-slate-200 h-16 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
//           <div className="text-xl font-bold text-white">LegalEase</div>
//           <div className="w-6 h-6 border-2 border-t-transparent border-amber-500 rounded-full animate-spin" />
//         </div>
//       </nav>
//     );
//   }

//   return (
//     <nav className="bg-slate-900 border-b border-slate-800 text-slate-200 sticky top-0 z-50 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 gap-4">
          
//           {/* 1. Logo / Site Name with Subtitle */}
//           <div className="flex-shrink-0">
//             <Link href="/" className="flex flex-col group select-none">
//               <span className="text-xl font-serif tracking-wide font-bold text-gray-100 leading-none transition-colors group-hover:text-amber-400">
//                 Legal<span className="text-amber-500 group-hover:text-gray-100">Ease</span>
//               </span>
//               <span className="text-[10px] text-slate-400 tracking-wider uppercase font-medium mt-1 leading-none">
//                 Lawyer Hiring Platform
//               </span>
//             </Link>
//           </div>

//           {/* 2. Global Search Bar */}
//           <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-4 relative">
//             <input
//               type="text"
//               placeholder="Search lawyers by specialization or name..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-10 pr-4 py-1.5 text-sm bg-slate-950 text-white rounded-md border border-slate-800 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all placeholder-slate-600"
//             />
//             <div className="absolute left-3 top-2.5 text-slate-500">
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
//               </svg>
//             </div>
//           </form>

//           {/* 3. Desktop Navigation Links */}
//           <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
//             <Link 
//               href="/" 
//               className={`transition-colors ${isActive("/") ? "text-amber-500 font-semibold" : "text-slate-300 hover:text-white"}`}
//             >
//               Home
//             </Link>
//             <Link 
//               href="/browse" 
//               className={`transition-colors ${isActive("/browse") ? "text-amber-500 font-semibold" : "text-slate-300 hover:text-white"}`}
//             >
//               Browse Lawyers
//             </Link>

//             {/* Dashboard Dropdown (Rendered dynamically based on current user session role) */}
//             {isLoggedIn && (
//               <div className="relative">
//                 <button
//                   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                   onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
//                   className="flex items-center gap-1 text-slate-300 hover:text-white focus:outline-none transition-colors"
//                 >
//                   Dashboard
//                   <svg className={`w-4 h-4 transform transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
//                   </svg>
//                 </button>

//                 {/* Dropdown Menu - Aligned smoothly to user context routing */}
//                 {isDropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-52 bg-slate-950 border border-slate-800 rounded-md shadow-lg py-1 z-50">
//                     <div className="px-4 py-1.5 text-xs text-slate-500 border-b border-slate-800 uppercase tracking-wider">
//                       Role: <span className="text-amber-500 font-semibold">{userRole}</span>
//                     </div>
                    
//                     {/* 🚀 ডাইনামিকালি রেন্ডার করা রুটসমূহ */}
//                     <Link href={getDashboardPath()} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-900 hover:text-amber-400">
//                       Dashboard Home
//                     </Link>
//                     <Link href={getDashboardPath("manage-legal-profile")} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-900 hover:text-amber-400">
//                       Manage Legal Profile
//                     </Link>
//                     <Link href={getDashboardPath("cases")} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-900 hover:text-amber-400">
//                       Manage Cases
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Desktop Dynamic Username Greeting */}
//             {isLoggedIn && (
//               <span className="text-slate-400 text-sm select-none">
//                 Hi, <span className="text-white font-medium">{session?.user?.name}</span>
//               </span>
//             )}

//             {/* Desktop Auth Button Configuration */}
//             {isLoggedIn ? (
//               <button 
//                 onClick={handleSignOut} 
//                 className="px-4 py-1.5 bg-slate-950 hover:bg-slate-850/60 text-slate-300 hover:text-white rounded-md border border-slate-800 text-sm font-medium transition-all"
//               >
//                 Logout
//               </button>
//             ) : (
//               <Link 
//                 href="/auth/signin" 
//                 className="px-4 py-1.5 rounded-md text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 transition-all text-center shadow-md active:scale-[0.98]"
//               >
//                 Login
//               </Link>
//             )}
//           </div>

//           {/* 4. Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
//               aria-label="Toggle Menu"
//             >
//               {isOpen ? (
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               )}
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* Mobile Menu Panel */}
//       {isOpen && (
//         <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 pt-2 pb-4 space-y-3">
//           <form onSubmit={handleSearch} className="relative w-full mb-4">
//             <input
//               type="text"
//               placeholder="Search lawyers..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 text-sm bg-slate-950 text-white rounded-md border border-slate-800 focus:outline-none placeholder-slate-600"
//             />
//             <div className="absolute left-3 top-3 text-slate-500">
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
//               </svg>
//             </div>
//           </form>

//           <Link
//             href="/"
//             onClick={() => setIsOpen(false)}
//             className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/") ? "bg-amber-500/10 text-amber-400 font-semibold" : "hover:bg-slate-800"}`}
//           >
//             Home
//           </Link>
//           <Link
//             href="/browse"
//             onClick={() => setIsOpen(false)}
//             className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/browse") ? "bg-amber-500/10 text-amber-400 font-semibold" : "hover:bg-slate-800"}`}
//           >
//             Browse Lawyers
//           </Link>

//           {isLoggedIn && (
//             <div className="border-t border-slate-800 pt-2">
//               <div className="px-3 py-1 text-xs uppercase tracking-wider text-slate-500">
//                 Dashboard ({userRole})
//               </div>
//               <Link
//                 href={getDashboardPath()}
//                 onClick={() => setIsOpen(false)}
//                 className="block px-3 py-2 rounded-md text-base font-medium text-slate-400 hover:bg-slate-800 hover:text-white"
//               >
//                 Dashboard Home
//               </Link>
//               <Link
//                 href={getDashboardPath("manage-legal-profile")}
//                 onClick={() => setIsOpen(false)}
//                 className="block px-3 py-2 rounded-md text-base font-medium text-slate-400 hover:bg-slate-800 hover:text-white"
//               >
//                 Manage Legal Profile
//               </Link>
//               <Link
//                 href={getDashboardPath("cases")}
//                 onClick={() => setIsOpen(false)}
//                 className="block px-3 py-2 rounded-md text-base font-medium text-slate-400 hover:bg-slate-800 hover:text-white"
//               >
//                 Manage Cases
//               </Link>
//             </div>
//           )}

//           {/* Mobile Auth Link Layout */}
//           <div className="pt-2 border-t border-slate-800 space-y-3">
//             {isLoggedIn && (
//               <div className="px-3 text-sm text-slate-400 select-none">
//                 Hi, <span className="text-white font-medium">{session?.user?.name}</span>
//               </div>
//             )}

//             {isLoggedIn ? (
//               <button
//                 onClick={handleSignOut}
//                 className="w-full text-center px-4 py-2 bg-slate-950 border border-slate-800 text-slate-300 rounded-md text-sm font-medium transition-all"
//               >
//                 Logout
//               </button>
//             ) : (
//               <Link
//                 href="/auth/signin"
//                 onClick={() => setIsOpen(false)}
//                 className="block w-full text-center px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold rounded-md text-sm transition-all"
//               >
//                 Login
//               </Link>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// *******************************************

"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
// Import your Better-Auth client instance 
import { authClient } from "@/lib/auth-client"; 

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Hook into Better-Auth session state
  const { data: session, isPending } = authClient.useSession();

  // Derive authentication and role attributes from the live session
  const isLoggedIn = !!session;
  const userRole = session?.user?.role || "client"; // 'client', 'lawyer', or 'admin'

  /* =========================================================================
      ⚖️ LEGALEASE DYNAMIC ROUTE MAPPING BASED ON ROLE
     ========================================================================= */
  const getDashboardPath = (subPath = "") => {
    if (subPath) {
      return `/dashboard/${userRole}/${subPath}`;
    }
    return `/dashboard/${userRole}`;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching globally for: "${searchQuery}"`);
    }
  };

  // Trigger Better-Auth signOut method
  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/"); // Redirect home after successful logout
          setIsOpen(false);
          setIsDropdownOpen(false);
        },
      },
    });
  };

  const isActive = (path) => pathname === path;

  // Prevent flash of unauthenticated layout while loading session status
  if (isPending) {
    return (
      <nav className="bg-slate-900 border-b border-slate-800 text-slate-200 h-16 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="text-xl font-bold text-white">LegalEase</div>
          <div className="w-6 h-6 border-2 border-t-transparent border-amber-500 rounded-full animate-spin" />
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-slate-900 border-b border-slate-800 text-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* 1. Logo / Site Name with Subtitle */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex flex-col group select-none">
              <span className="text-xl font-serif tracking-wide font-bold text-gray-100 leading-none transition-colors group-hover:text-amber-400">
                Legal<span className="text-amber-500 group-hover:text-gray-100">Ease</span>
              </span>
              <span className="text-[10px] text-slate-400 tracking-wider uppercase font-medium mt-1 leading-none">
                Lawyer Hiring Platform
              </span>
            </Link>
          </div>

          {/* 2. Global Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-4 relative">
            <input
              type="text"
              placeholder="Search lawyers by specialization or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-1.5 text-sm bg-slate-950 text-white rounded-md border border-slate-800 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all placeholder-slate-600"
            />
            <div className="absolute left-3 top-2.5 text-slate-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
          </form>

          {/* 3. Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link 
              href="/" 
              className={`transition-colors ${isActive("/") ? "text-amber-500 font-semibold" : "text-slate-300 hover:text-white"}`}
            >
              Home
            </Link>
            
            {/* 🎯 Updated Link from /browse to /browse-lawyers */}
            <Link 
              href="/browse-lawyers" 
              className={`transition-colors ${isActive("/browse-lawyers") ? "text-amber-500 font-semibold" : "text-slate-300 hover:text-white"}`}
            >
              Browse Lawyers
            </Link>

            {/* Dashboard Dropdown */}
            {isLoggedIn && (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                  className="flex items-center gap-1 text-slate-300 hover:text-white focus:outline-none transition-colors"
                >
                  Dashboard
                  <svg className={`w-4 h-4 transform transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-slate-950 border border-slate-800 rounded-md shadow-lg py-1 z-50">
                    <div className="px-4 py-1.5 text-xs text-slate-500 border-b border-slate-800 uppercase tracking-wider">
                      Role: <span className="text-amber-500 font-semibold">{userRole}</span>
                    </div>
                    
                    <Link href={getDashboardPath()} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-900 hover:text-amber-400">
                      Dashboard Home
                    </Link>
                    <Link href={getDashboardPath("manage-legal-profile")} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-900 hover:text-amber-400">
                      Manage Legal Profile
                    </Link>
                    <Link href={getDashboardPath("cases")} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-900 hover:text-amber-400">
                      Manage Cases
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Desktop Dynamic Username Greeting */}
            {isLoggedIn && (
              <span className="text-slate-400 text-sm select-none">
                Hi, <span className="text-white font-medium">{session?.user?.name}</span>
              </span>
            )}

            {/* Desktop Auth Button Configuration */}
            {isLoggedIn ? (
              <button 
                onClick={handleSignOut} 
                className="px-4 py-1.5 bg-slate-950 hover:bg-slate-850/60 text-slate-300 hover:text-white rounded-md border border-slate-800 text-sm font-medium transition-all"
              >
                Logout
              </button>
            ) : (
              <Link 
                href="/auth/signin" 
                className="px-4 py-1.5 rounded-md text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 transition-all text-center shadow-md active:scale-[0.98]"
              >
                Login
              </Link>
            )}
          </div>

          {/* 4. Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 pt-2 pb-4 space-y-3">
          <form onSubmit={handleSearch} className="relative w-full mb-4">
            <input
              type="text"
              placeholder="Search lawyers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-950 text-white rounded-md border border-slate-800 focus:outline-none placeholder-slate-600"
            />
            <div className="absolute left-3 top-3 text-slate-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
          </form>

          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/") ? "bg-amber-500/10 text-amber-400 font-semibold" : "hover:bg-slate-800"}`}
          >
            Home
          </Link>
          
          {/* 🎯 Updated Mobile Link from /browse to /browse-lawyers */}
          <Link
            href="/browse-lawyers"
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/browse-lawyers") ? "bg-amber-500/10 text-amber-400 font-semibold" : "hover:bg-slate-800"}`}
          >
            Browse Lawyers
          </Link>

          {isLoggedIn && (
            <div className="border-t border-slate-800 pt-2">
              <div className="px-3 py-1 text-xs uppercase tracking-wider text-slate-500">
                Dashboard ({userRole})
              </div>
              <Link
                href={getDashboardPath()}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-400 hover:bg-slate-800 hover:text-white"
              >
                Dashboard Home
              </Link>
              <Link
                href={getDashboardPath("manage-legal-profile")}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-400 hover:bg-slate-800 hover:text-white"
              >
                Manage Legal Profile
              </Link>
              <Link
                href={getDashboardPath("cases")}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-400 hover:bg-slate-800 hover:text-white"
              >
                Manage Cases
              </Link>
            </div>
          )}

          {/* Mobile Auth Link Layout */}
          <div className="pt-2 border-t border-slate-800 space-y-3">
            {isLoggedIn && (
              <div className="px-3 text-sm text-slate-400 select-none">
                Hi, <span className="text-white font-medium">{session?.user?.name}</span>
              </div>
            )}

            {isLoggedIn ? (
              <button
                onClick={handleSignOut}
                className="w-full text-center px-4 py-2 bg-slate-950 border border-slate-800 text-slate-300 rounded-md text-sm font-medium transition-all"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/auth/signin"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold rounded-md text-sm transition-all"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}