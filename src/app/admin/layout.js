import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-6 hidden md:block">
        <h1 className="text-xl font-bold mb-10 tracking-tighter">TANZO ADMIN</h1>
        <nav className="flex flex-col gap-4">
          <Link href="/admin" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Dashboard</Link>
          <Link href="/admin/products" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Products</Link>
          <Link href="/admin/orders" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Orders</Link>
        </nav>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-8 md:p-12">
        {children}
      </main>
    </div>
  );
}