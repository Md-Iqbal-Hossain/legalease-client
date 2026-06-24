

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


'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { House, Briefcase, Shield, Gear } from "@gravity-ui/icons"; // Using your icon pack
import { LayoutSideContentLeft } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";

export function DashboardSidebar() {
  const pathname = usePathname();

  // 1. Updated navigation map to use explicit routes required by your spec
  const navItems = [
    { icon: House, label: "Dashboard Home", href: "/dashboard/lawyer" },
    { icon: Briefcase, label: "Hiring History", href: "/dashboard/lawyer/hiring-history" },
    { icon: Shield, label: "Manage Services", href: "/dashboard/lawyer/manage-legal-profile" },
  ];

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
                ? "bg-amber-500/10 text-amber-400 font-semibold" 
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
      <aside className="hidden w-64 shrink-0 border-r border-slate-800 p-4 lg:block bg-slate-950">
        <div className="mb-6 px-3">
          <span className="font-serif text-lg font-bold text-gray-100 tracking-wider">LegalEase Workspace</span>
        </div>
        {navContent}
      </aside>

      {/* Mobile Drawer Wrapper */}
      <Drawer>
        <Button className="lg:hidden" variant="secondary">
          <LayoutSideContentLeft />
          Menu
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading>Navigation</Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body className="bg-slate-950">
                {navContent}
              </Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}