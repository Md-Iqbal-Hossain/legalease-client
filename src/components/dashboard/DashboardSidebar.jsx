

// import {LayoutSideContentLeft, Bell, Envelope, Gear, House, Magnifier, Person} from "@gravity-ui/icons";
// import {Button, Drawer} from "@heroui/react";

// export function DashboardSidebar() {
//   const navItems = [
//     {icon: House, label: "Home"},
//     {icon: Magnifier, label: "Search"},
//     {icon: Bell, label: "Notifications"},
//     {icon: Envelope, label: "Messages"},
//     {icon: Person, label: "Profile"},
//     {icon: Gear, label: "Settings"},
//   ];

//   const navContent = <nav className="flex flex-col gap-1">
//                 {navItems.map((item) => (
//                   <button
//                     key={item.label}
//                     className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
//                     type="button"
//                   >
//                     <item.icon className="size-5 text-muted" />
//                     {item.label}
//                   </button>
//                 ))}
//               </nav>;

//   return (
//     <>
//     <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
//         {navContent}
//     </aside>
//     <Drawer>
//       <Button className="lg:hidden" variant="secondary">
//         <LayoutSideContentLeft />
//         Menu
//       </Button>
//       <Drawer.Backdrop>
//         <Drawer.Content placement="left">
//           <Drawer.Dialog>
//             <Drawer.CloseTrigger />
//             <Drawer.Header>
//               <Drawer.Heading>Navigation</Drawer.Heading>
//             </Drawer.Header>
//             <Drawer.Body>
//               {navContent}
//             </Drawer.Body>
//           </Drawer.Dialog>
//         </Drawer.Content>
//       </Drawer.Backdrop>
//     </Drawer>
//     </>
//   );
// }

// ************************************************************************************


// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { House, Briefcase, Shield, Gear } from "@gravity-ui/icons"; // Using your icon pack
// import { LayoutSideContentLeft } from "@gravity-ui/icons";
// import { Button, Drawer } from "@heroui/react";

// export function DashboardSidebar() {
//   const pathname = usePathname();

//   // 1. Updated navigation map to use explicit routes required by your spec
//   const navItems = [
//     { icon: House, label: "Dashboard Home", href: "/dashboard/lawyer" },
//     { icon: Briefcase, label: "Hiring History", href: "/dashboard/lawyer/hiring-history" },
//     { icon: Shield, label: "Manage Services", href: "/dashboard/lawyer/manage-legal-profile" },
//   ];

//   const navContent = (
//     <nav className="flex flex-col gap-1">
//       {navItems.map((item) => {
//         const isActive = pathname === item.href;
//         return (
//           <Link
//             key={item.label}
//             href={item.href}
//             className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors font-medium ${
//               isActive 
//                 ? "bg-amber-500/10 text-amber-400 font-semibold" 
//                 : "text-slate-400 hover:bg-slate-900/50 hover:text-gray-200"
//             }`}
//           >
//             <item.icon className={`size-5 ${isActive ? "text-amber-400" : "text-slate-500"}`} />
//             {item.label}
//           </Link>
//         );
//       })}
//     </nav>
//   );

//   return (
//     <>
//       {/* Desktop Sidebar Wrapper */}
//       <aside className="hidden w-64 shrink-0 border-r border-slate-800 p-4 lg:block bg-slate-950">
//         <div className="mb-6 px-3">
//           <span className="font-serif text-lg font-bold text-gray-100 tracking-wider">LegalEase Workspace</span>
//         </div>
//         {navContent}
//       </aside>

//       {/* Mobile Drawer Wrapper */}
//       <Drawer>
//         <Button className="lg:hidden" variant="secondary">
//           <LayoutSideContentLeft />
//           Menu
//         </Button>
//         <Drawer.Backdrop>
//           <Drawer.Content placement="left">
//             <Drawer.Dialog>
//               <Drawer.CloseTrigger />
//               <Drawer.Header>
//                 <Drawer.Heading>Navigation</Drawer.Heading>
//               </Drawer.Header>
//               <Drawer.Body className="bg-slate-950">
//                 {navContent}
//               </Drawer.Body>
//             </Drawer.Dialog>
//           </Drawer.Content>
//         </Drawer.Backdrop>
//       </Drawer>
//     </>
//   );
// }

// ********************************

// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { House, Briefcase, Shield, Gear, Person, LayoutSideContentLeft, Bell, FileText } from "@gravity-ui/icons"; 
// import { Button, Drawer } from "@heroui/react";
// // Import your Better-Auth client instance
// import { authClient } from "@/lib/auth-client"; 

// export function DashboardSidebar() {
//   const pathname = usePathname();

//   // Better-Auth সেশন থেকে লাইভ ইউজার ও তার রোল রিড করা হচ্ছে
//   const { data: session } = authClient.useSession();
//   const userRole = session?.user?.role || 'client'; // Default fallback to client

//   /* =========================================================================
//       ⚖️ LAWYER CONFIGURATION NAV LINKS
//      ========================================================================= */
//   const lawyerNavLinks = [
//     { icon: House, label: "Dashboard Home", href: "/dashboard/lawyer" },
//     { icon: Shield, label: "Manage Services", href: "/dashboard/lawyer/manage-legal-profile" },
//     { icon: Briefcase, label: "Hiring History", href: "/dashboard/lawyer/hiring-history" },
//     { icon: Gear, label: "Settings", href: "/dashboard/lawyer/settings" },
//   ];

//   /* =========================================================================
//       👥 CLIENT CONFIGURATION NAV LINKS
//      ========================================================================= */
//   const clientNavLinks = [
//     { icon: House, label: "Dashboard Home", href: "/dashboard/client" },
//     { icon: FileText, label: "My Cases & Hirings", href: "/dashboard/client/hirings" },
//     { icon: Bell, label: "Consultation Request", href: "/dashboard/client/requests" },
//     { icon: Gear, label: "Settings", href: "/dashboard/client/settings" },
//   ];

//   /* =========================================================================
//       🛠️ ADMIN CONFIGURATION NAV LINKS (Optional/Fallback)
//      ========================================================================= */
//   const adminNavLinks = [
//     { icon: House, label: "Admin Console", href: "/dashboard/admin" },
//     { icon: Person, label: "Manage Users", href: "/dashboard/admin/users" },
//     { icon: Shield, label: "Verify Lawyers", href: "/dashboard/admin/verifications" },
//     { icon: Gear, label: "System Settings", href: "/dashboard/admin/settings" },
//   ];



//   // ইউজার রোলের ওপর ভিত্তি করে ম্যাপ অবজেক্ট থেকে নির্দিষ্ট লিংকগুলো নেওয়া হচ্ছে
//   const navLinksMap = {
//     lawyer: lawyerNavLinks,
//     client: clientNavLinks,
//     admin: adminNavLinks
//   };

//   const navItems = navLinksMap[userRole] || clientNavLinks;

//   /* =========================================================================
//       🎨 REUSABLE NAV RENDER CONTENT
//      ========================================================================= */
//   const navContent = (
//     <nav className="flex flex-col gap-1">
//       {navItems.map((item) => {
//         const isActive = pathname === item.href;
//         return (
//           <Link
//             key={item.label}
//             href={item.href}
//             className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors font-medium ${
//               isActive 
//                 ? "bg-amber-500/10 text-amber-400 font-semibold" 
//                 : "text-slate-400 hover:bg-slate-900/50 hover:text-gray-200"
//             }`}
//           >
//             <item.icon className={`size-5 ${isActive ? "text-amber-400" : "text-slate-500"}`} />
//             {item.label}
//           </Link>
//         );
//       })}
//     </nav>
//   );

//   return (
//     <>
//       {/* Desktop Sidebar Wrapper */}
//       <aside className="hidden w-64 shrink-0 border-r border-slate-800 p-4 lg:block bg-slate-950 min-h-[calc(100vh-4rem)]">
//         <div className="mb-6 px-3">
//           <span className="font-serif text-lg font-bold text-gray-100 tracking-wider">LegalEase Workspace</span>
//           <div className="text-[11px] text-amber-500 font-mono uppercase mt-1">
//             Role: {userRole} Panel
//           </div>
//         </div>
//         {navContent}
//       </aside>

//       {/* Mobile Drawer Wrapper */}
//       <Drawer>
//         <Button className="lg:hidden m-4" variant="secondary">
//           <LayoutSideContentLeft />
//           Workspace Menu
//         </Button>
//         <Drawer.Backdrop>
//           <Drawer.Content placement="left">
//             <Drawer.Dialog>
//               <Drawer.CloseTrigger />
//               <Drawer.Header className="bg-slate-950 border-b border-slate-800 text-white">
//                 <Drawer.Heading>Workspace Navigation</Drawer.Heading>
//                 <div className="text-xs text-slate-400 font-mono mt-1">Logged in as: {userRole}</div>
//               </Drawer.Header>
//               <Drawer.Body className="bg-slate-950 pt-4">
//                 {navContent}
//               </Drawer.Body>
//             </Drawer.Dialog>
//           </Drawer.Content>
//         </Drawer.Backdrop>
//       </Drawer>
//     </>
//   );
// }

// ****************************

'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// 💡 Card পরিবর্তন করে সঠিক আইকন CreditCard ইম্পোর্ট করা হলো
import { House, Briefcase, Shield, Gear, Person, LayoutSideContentLeft, Bell, FileText, ChartPie, CreditCard } from "@gravity-ui/icons"; 
import { Button, Drawer } from "@heroui/react";
// Better-Auth সেশন ক্লায়েন্ট ইনস্ট্যান্স
import { authClient } from "@/lib/auth-client"; 

export function DashboardSidebar() {
  const pathname = usePathname();

  // Better-Auth সেশন থেকে লাইভ ইউজার ও তার রোল রিড করা হচ্ছে
  const { data: session } = authClient.useSession();
  const userRole = session?.user?.role || 'client'; // Default fallback to client

  /* =========================================================================
      ⚖️ LAWYER CONFIGURATION NAV LINKS
     ========================================================================= */
  const lawyerNavLinks = [
    { icon: House, label: "Dashboard Home", href: "/dashboard/lawyer" },
    { icon: Shield, label: "Manage Services", href: "/dashboard/lawyer/manage-legal-profile" },
    { icon: Briefcase, label: "Hiring History", href: "/dashboard/lawyer/hiring-history" },
    { icon: Gear, label: "Settings", href: "/dashboard/lawyer/settings" },
  ];

  /* =========================================================================
      👥 CLIENT CONFIGURATION NAV LINKS
     ========================================================================= */
  const clientNavLinks = [
    { icon: House, label: "Dashboard Home", href: "/dashboard/client" },
    { icon: FileText, label: "My Cases & Hirings", href: "/dashboard/client/hirings" },
    { icon: Bell, label: "Consultation Request", href: "/dashboard/client/requests" },
    { icon: Gear, label: "Settings", href: "/dashboard/client/settings" },
  ];

  /* =========================================================================
      🛠️ ADMIN CONFIGURATION NAV LINKS
     ========================================================================= */
  const adminNavLinks = [
    { icon: House, label: "Admin Console", href: "/dashboard/admin" },
    { icon: Person, label: "Manage Users", href: "/dashboard/admin/manage-users" },
    // 🚀 এখানে আইকন ভেরিয়েবলটি CreditCard করে দেওয়া হলো
    { icon: CreditCard, label: "View All Transactions", href: "/dashboard/admin/all-transactions" },
    { icon: ChartPie, label: "Analytics Overview", href: "/dashboard/admin/analytics" },
  ];

  // ইউজার রোলের ওপর ভিত্তি করে নির্দিষ্ট লিংকগুলো নেওয়া হচ্ছে
  const navLinksMap = {
    lawyer: lawyerNavLinks,
    client: clientNavLinks,
    admin: adminNavLinks
  };

  const navItems = navLinksMap[userRole] || clientNavLinks;

  /* =========================================================================
      🎨 REUSABLE NAV RENDER CONTENT
     ========================================================================= */
  const navContent = (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors font-medium ${
              isActive 
                ? "bg-amber-500/10 text-amber-400 font-semibold border-l-2 border-amber-500 rounded-l-none" 
                : "text-slate-400 hover:bg-slate-900/50 hover:text-gray-200"
            }`}
          >
            <item.icon className={`size-5 ${isActive ? "text-amber-400" : "text-slate-500"}`} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar Wrapper */}
      <aside className="hidden w-64 shrink-0 border-r border-slate-800 p-4 lg:block bg-slate-950 min-h-[calc(100vh-4rem)]">
        <div className="mb-6 px-3">
          <span className="font-serif text-lg font-bold text-gray-100 tracking-wider">LegalEase Workspace</span>
          <div className="text-[11px] text-amber-500 font-mono uppercase mt-1">
            Role: {userRole} Panel
          </div>
        </div>
        {navContent}
      </aside>

      {/* Mobile Drawer Wrapper */}
      <Drawer>
        <Button className="lg:hidden m-4" variant="secondary">
          <LayoutSideContentLeft />
          Workspace Menu
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header className="bg-slate-950 border-b border-slate-800 text-white">
                <Drawer.Heading>Workspace Navigation</Drawer.Heading>
                <div className="text-xs text-slate-400 font-mono mt-1">Logged in as: {userRole}</div>
              </Drawer.Header>
              <Drawer.Body className="bg-slate-950 pt-4">
                {navContent}
              </Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}