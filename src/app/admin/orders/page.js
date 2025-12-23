"use client";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const res = await fetch("/api/admin/orders");
      const data = await res.json();
      setOrders(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error("Failed to load orders");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchOrders(); }, []);

  const updateStatus = async (orderId, newStatus) => {
    try {
      const res = await fetch("/api/admin/orders", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, status: newStatus }),
      });
      if (res.ok) {
        toast.success(`Order marked as ${newStatus}`);
        fetchOrders();
      }
    } catch (err) { toast.error("Failed to update status"); }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-[10px] uppercase tracking-[0.5em] animate-pulse text-zinc-400">Initializing Archive...</div>
    </div>
  );

  return (
    <div className="bg-[#FCFCFC] min-h-screen pb-20">
      <div className="max-w-7xl mx-auto p-6 md:p-12">
        {/* Header & Stats */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 block mb-2">Internal Management</span>
            <h1 className="text-4xl md:text-5xl font-light tracking-tighter uppercase text-zinc-900">Order Fulfillment</h1>
          </div>
          <div className="flex gap-8 border-l border-zinc-200 pl-8">
            <div>
              <p className="text-[9px] uppercase tracking-widest text-zinc-400 mb-1">Total Volume</p>
              <p className="text-2xl font-light">₹{orders.reduce((acc, curr) => acc + curr.totalAmount, 0).toLocaleString()}</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest text-zinc-400 mb-1">Active Parcels</p>
              <p className="text-2xl font-light">{orders.filter(o => o.status === 'Pending').length}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {orders.length === 0 ? (
            <div className="py-40 border border-dashed border-zinc-200 rounded-sm text-center text-zinc-400 text-[10px] uppercase tracking-widest">No logistics data found.</div>
          ) : (
            orders.map((order) => (
              <div key={order._id} className="group bg-white border border-zinc-200 rounded-sm hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 overflow-hidden">
                {/* Order Top Bar */}
                <div className="px-6 py-4 bg-zinc-50/50 border-b border-zinc-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <span className="bg-black text-white text-[9px] font-bold px-3 py-1 uppercase tracking-widest rounded-full">
                      #{order._id.toString().slice(-6).toUpperCase()}
                    </span>
                    <div className="hidden sm:block">
                      <p className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
                        {new Date(order.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                      </p>
                      <p className="text-[9px] text-zinc-400 uppercase tracking-[0.2em] mt-0.5">
                        Placed at {new Date(order.createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right mr-4">
                      <p className="text-[9px] uppercase tracking-widest text-zinc-400">Grand Total</p>
                      <p className="text-lg font-medium">₹{order.totalAmount}</p>
                    </div>
                    <select 
                      value={order.status} 
                      onChange={(e) => updateStatus(order._id, e.target.value)}
                      className={`text-[10px] uppercase font-bold px-5 py-2.5 rounded-sm border outline-none cursor-pointer transition-all ${
                        order.status === 'Delivered' 
                          ? 'bg-green-50 text-green-700 border-green-200' 
                          : 'bg-amber-50 text-amber-700 border-amber-200 hover:border-amber-400'
                      }`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </div>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-zinc-100">
                  {/* Customer Info */}
                  <div className="p-6 lg:col-span-1">
                    <p className="text-[9px] uppercase tracking-widest text-zinc-400 mb-4">Logistics Target</p>
                    <p className="text-[12px] font-bold uppercase mb-1">{order.shippingAddress?.fullName}</p>
                    <p className="text-[11px] text-zinc-500 lowercase mb-4 italic">{order.customerEmail}</p>
                    <div className="pt-4 border-t border-zinc-50">
                      <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-2">Destination</p>
                      <p className="text-[11px] text-zinc-600 leading-relaxed uppercase tracking-tight">
                        {order.shippingAddress?.fullAddress}
                      </p>
                    </div>
                  </div>

                  {/* Items Manifest */}
                  <div className="p-6 lg:col-span-4 bg-zinc-50/20">
                    <p className="text-[9px] uppercase tracking-widest text-zinc-400 mb-6">Manifest Content</p>
                    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                      {order.items?.map((item, i) => (
                        <div key={i} className="flex gap-4 items-center bg-white p-3 rounded-sm border border-zinc-100 shadow-sm group-hover:border-zinc-200 transition-colors">
                          <div className="h-20 w-16 relative bg-zinc-100 flex-shrink-0 rounded-sm overflow-hidden">
                            <img src={item.image} alt="" className="object-cover w-full h-full transition-all duration-700" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[11px] font-bold uppercase tracking-tighter truncate">{item.name}</p>
                            <p className="text-[10px] text-zinc-400 uppercase tracking-widest mt-1">
                              Size {item.size} • Qty {item.quantity}
                            </p>
                            <p className="text-[11px] font-medium mt-2">₹{item.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}