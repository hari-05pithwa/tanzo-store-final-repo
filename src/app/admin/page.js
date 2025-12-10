import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from 'next/link';

// --- Placeholder Components (You should create these in separate files) ---
const Sidebar = () => (
    <div className="flex flex-col h-full bg-gray-800 text-white w-64 p-6 space-y-4">
        <h2 className="text-3xl font-extrabold text-indigo-400 mb-6">Admin Pro</h2>
        <Link href="/admin" className="text-indigo-400 hover:text-white transition duration-200 p-2 rounded-lg bg-gray-700">
            Dashboard
        </Link>
        <Link href="/admin/products" className="hover:text-indigo-400 transition duration-200 p-2 rounded-lg">
            Manage Products
        </Link>
        <Link href="/admin/users" className="hover:text-indigo-400 transition duration-200 p-2 rounded-lg">
            Manage Users
        </Link>
        <div className="pt-8">
            <Link href="/sign-out" className="text-sm text-gray-400 hover:text-red-400 transition duration-200 p-2 rounded-lg border border-gray-700">
                Sign Out
            </Link>
        </div>
    </div>
);

const StatCard = ({ title, value, icon, color }) => (
    <div className={`p-6 rounded-xl shadow-lg border-l-4 ${color} bg-white transition duration-300 hover:shadow-xl`}>
        <div className="flex items-center justify-between">
            <div>
                <p className="text-sm font-medium text-gray-500">{title}</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
            </div>
            <div className={`p-3 rounded-full ${color.replace('border-', 'bg-').replace('4', '100')} ${color.replace('border-4', 'text-4xl')}`}>
                {icon}
            </div>
        </div>
    </div>
);
// ------------------------------------------------------------------------

export default async function AdminPanel() {
  const user = await currentUser();

  if (!user) redirect("https://harmless-treefrog-61.accounts.dev/sign-in");

  if (user.publicMetadata.role !== "admin") {
    return <h2 className="h-screen text-center flex items-center justify-center text-[100px] text-red-500">Access denied!</h2>
  }

  // --- UI CODE STARTS HERE ---
  return (
    <div className="flex h-screen bg-gray-100">
      
      {/* 1. Sidebar (Fixed on the left) */}
      <Sidebar />

      {/* 2. Main Content Area (Takes remaining width) */}
      <div className="flex-1 overflow-y-auto">
        
        {/* Header */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-10">
            <h1 className="text-3xl font-extrabold text-gray-800">
                Dashboard Overview
            </h1>
            <p className="text-gray-600">
                Welcome back, <span className="font-semibold text-indigo-600">{user.firstName || 'Admin'}</span>
            </p>
        </header>

        {/* Main Content Body */}
        <main className="p-8">
            
            {/* Stat Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <StatCard 
                    title="Total Revenue" 
                    value="₹45,231" 
                    icon="💰" 
                    color="border-green-500" 
                />
                <StatCard 
                    title="New Orders" 
                    value="125" 
                    icon="📦" 
                    color="border-yellow-500" 
                />
                <StatCard 
                    title="New Users" 
                    value="24" 
                    icon="👤" 
                    color="border-blue-500" 
                />
                <StatCard 
                    title="Pending Tasks" 
                    value="6" 
                    icon="📝" 
                    color="border-red-500" 
                />
            </div>
            
            {/* Recent Activity/Table Section */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Recent Product Activity
                </h2>
                {/* Placeholder for a Table or Chart Component */}
                <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg text-gray-500">
                    [Place your Table/Chart Component here]
                </div>
            </div>

        </main>
      </div>
    </div>
  );
  // --- UI CODE ENDS HERE ---
}