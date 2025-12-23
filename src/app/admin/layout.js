// import Link from "next/link";

// export default function AdminLayout({ children }) {
//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Admin Sidebar */}
//       <aside className="w-64 bg-black text-white hidden md:flex flex-col p-6 fixed h-full">
//         <h2 className="text-xl font-bold tracking-tighter mb-10">TANZO ADMIN</h2>
//         <nav className="space-y-4 flex-1">
//           <Link href="/admin" className="block text-sm uppercase tracking-widest hover:text-gray-400">Dashboard</Link>
//           <Link href="/admin/products" className="block text-sm uppercase tracking-widest hover:text-gray-400">Inventory</Link>
//           <Link href="/admin/orders" className="block text-sm uppercase tracking-widest hover:text-gray-400">Orders</Link>
//         </nav>
//         <Link href="/" className="text-xs text-gray-500 border-t border-gray-800 pt-4 hover:text-white">Back to Store</Link>
//       </aside>

//       {/* Main Content Area */}
//       <main className="flex-1 md:ml-64 p-8">
//         {children}
//       </main>
//     </div>
//   );
// }








"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  const navItems = [
    { label: "Dashboard", href: "/admin" },
    { label: "Inventory", href: "/admin/products" },
    { label: "Orders", href: "/admin/orders" },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8F8F8]">
      {/* DESKTOP SIDEBAR */}
      <aside className="w-64 bg-black text-white hidden lg:flex flex-col p-8 fixed h-full z-50">
        <div className="mb-12">
          <p className="text-[10px] tracking-[0.5em] text-zinc-500 uppercase font-bold mb-2">System</p>
          <h2 className="text-2xl font-light tracking-tighter">TANZO <span className="font-bold">HQ</span></h2>
        </div>
        
        <nav className="space-y-6 flex-1">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className={`block text-[11px] uppercase tracking-[0.3em] transition-all hover:translate-x-2 ${
                pathname === item.href ? "text-white font-bold" : "text-zinc-500 hover:text-zinc-200"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/" className="text-[10px] uppercase tracking-widest text-zinc-600 hover:text-white pt-6 border-t border-zinc-900 transition-colors">
          ← Terminal Exit
        </Link>
      </aside>

      {/* MOBILE & MAIN CONTENT AREA */}
      <main className="flex-1 lg:ml-64 flex flex-col">
        {/* MOBILE TOP NAV (Visible only on small screens) */}
        <div className="lg:hidden sticky top-[60px] z-40 bg-white border-b border-zinc-200 px-4 py-3 overflow-x-auto no-scrollbar">
          <div className="flex gap-4">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className={`whitespace-nowrap px-5 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all ${
                  pathname === item.href ? "bg-black text-white" : "bg-zinc-100 text-zinc-500"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* PAGE CONTENT */}
        <div className="p-6 md:p-12">
          {children}
        </div>
      </main>
    </div>
  );
}