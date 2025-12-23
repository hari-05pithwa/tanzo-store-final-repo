"use client";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  if (!stats) return <div className="p-8 text-[10px] uppercase tracking-widest text-gray-400">Loading Analytics...</div>;

  const cards = [
    { label: "Total Revenue", value: `₹${stats.totalRevenue.toLocaleString()}`, color: "text-black" },
    { label: "Total Orders", value: stats.totalOrders, color: "text-black" },
    { label: "Products in Store", value: stats.totalProducts, color: "text-black" },
    { label: "Pending Shipments", value: stats.pendingOrders, color: "text-orange-500" },
  ];

  return (
    <div>
      <div className="mb-12">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 block mb-2">Management Overview</span>
        <h1 className="text-4xl font-light tracking-tighter uppercase">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {cards.map((card, i) => (
          <div key={i} className="bg-white p-8 border border-gray-100 rounded-sm shadow-sm">
            <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-4">{card.label}</p>
            <p className={`text-3xl font-light tracking-tighter ${card.color}`}>{card.value}</p>
          </div>
        ))}
      </div>

      {/* Quick Visual of the Workflow */}
      <div className="bg-zinc-900 text-white p-10 rounded-sm">
        <h2 className="text-sm uppercase tracking-[0.3em] font-bold mb-6">Business Health</h2>
        <div className="flex items-center gap-4">
          <div className="h-2 flex-1 bg-zinc-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-1000" 
              style={{ width: `${(stats.completedOrders / stats.totalOrders) * 100}%` }}
            />
          </div>
          <span className="text-[10px] uppercase tracking-widest font-bold">
            {Math.round((stats.completedOrders / stats.totalOrders) * 100) || 0}% Fulfilled
          </span>
        </div>
      </div>
    </div>
  );
}