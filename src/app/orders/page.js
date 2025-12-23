// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { toast } from "sonner";

// export default function OrdersPage() {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [orderToCancel, setOrderToCancel] = useState(null);

//   const fetchOrders = () => {
//     fetch("/api/orders")
//       .then((res) => res.json())
//       .then((data) => {
//         setOrders(data.orders || []);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const confirmCancel = (orderId) => {
//     setOrderToCancel(orderId);
//     setShowModal(true);
//   };

//   const handleCancel = async () => {
//     if (!orderToCancel) return;
//     try {
//       const res = await fetch(`/api/orders/${orderToCancel}`, {
//         method: "DELETE",
//       });
//       if (res.ok) {
//         toast.success("Order cancelled successfully");
//         setOrders(orders.filter(order => order._id !== orderToCancel));
//       } else {
//         toast.error("Failed to cancel order");
//       }
//     } catch (error) {
//       toast.error("Something went wrong");
//     } finally {
//       setShowModal(false);
//       setOrderToCancel(null);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-[80vh] bg-[#FAFAFA] flex items-center justify-center">
//         <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 animate-pulse">
//           Retrieving Archives...
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#FAFAFA] text-gray-900">
//       {/* Removed min-h and flex-col to prevent the bottom gap */}
//       <main className="max-w-5xl mx-auto px-6 pt-10 pb-16 lg:py-16">

//         {/* Header Section */}
//         <div className="mb-8 md:mb-12 border-b border-gray-200 pb-8 flex justify-between items-end">
//           <div>
//             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 block mb-2">
//               Account History
//             </span>
//             <h1 className="text-2xl md:text-3xl font-light tracking-tight text-gray-900">My Orders</h1>
//           </div>
//           <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
//             {orders.length} Total
//           </p>
//         </div>

//         {/* Custom Modal */}
//         {showModal && (
//           <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-[100] flex items-center justify-center p-4">
//             <div className="bg-white rounded-[2rem] p-8 md:p-10 max-w-sm w-full shadow-2xl border border-gray-100">
//               <h2 className="text-lg font-light tracking-tight mb-2">Cancel Order?</h2>
//               <p className="text-sm text-gray-500 font-light mb-8 leading-relaxed">
//                 This request will permanently remove your selection from our processing queue.
//               </p>
//               <div className="flex flex-col gap-3">
//                 <button onClick={handleCancel} className="w-full py-4 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-red-600 transition-colors">
//                   Confirm Cancellation
//                 </button>
//                 <button onClick={() => setShowModal(false)} className="w-full py-4 bg-white text-gray-400 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:text-black transition-colors">
//                   Go Back
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Content Section - Removed flex-1 */}
//         <div>
//           {orders.length === 0 ? (
//             <div className="text-center py-20 md:py-32 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm px-6">
//               <h2 className="text-lg font-light mb-8 text-gray-400 italic">No order history found.</h2>
//               <Link
//                 href="/"
//                 className="inline-block px-12 py-4 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-full shadow-xl hover:bg-gray-800 transition-all"
//               >
//                 Start Shopping
//               </Link>
//             </div>
//           ) : (
//             <div className="space-y-6 md:space-y-10">
//               {orders.map((order) => (
//                 <div key={order._id} className="bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md">
//                   {/* Order Top Bar */}
//                   <div className="px-6 py-5 md:px-8 md:py-6 bg-gray-50/50 border-b border-gray-100 flex flex-wrap justify-between items-center gap-4">
//                     <div className="flex gap-6 md:gap-8">
//                       <div>
//                         <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Ref</span>
//                         <p className="text-xs font-medium font-mono">{order._id.slice(-8).toUpperCase()}</p>
//                       </div>
//                       <div>
//                         <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Date</span>
//                         <p className="text-xs font-medium">{new Date(order.createdAt).toLocaleDateString('en-GB')}</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-4">
//                        <span className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest ${
//                          order.status === 'Pending' ? 'bg-amber-50 text-amber-600 border border-amber-100' : 'bg-black text-white'
//                        }`}>
//                           {order.status}
//                        </span>
//                        <p className="text-lg font-light tracking-tight">₹{order.totalPrice}</p>
//                     </div>
//                   </div>

//                   {/* Items List */}
//                   <div className="p-6 md:p-8 space-y-6">
//                     {order.items.map((item, idx) => (
//                       <div key={idx} className="flex items-center gap-6 group">
//                         <div className="relative w-14 h-16 md:w-16 md:h-20 bg-gray-50 rounded-xl overflow-hidden shrink-0 border border-gray-100">
//                           <Image src={item.imageSrc} alt={item.name} fill className="object-cover" />
//                         </div>
//                         <div className="flex-1">
//                           <p className="text-sm font-light text-gray-900 group-hover:text-gray-500 transition-colors">{item.name}</p>
//                           <div className="flex gap-4 mt-1">
//                             <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Size: <span className="text-gray-600">{item.size}</span></span>
//                             <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Qty: <span className="text-gray-600">{item.quantity}</span></span>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Footer Bar */}
//                   <div className="px-6 py-4 md:px-8 md:py-5 bg-white border-t border-gray-50 flex justify-between items-center">
//                     <div className="flex items-center gap-2">
//                       <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
//                       <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">COD Verified</span>
//                     </div>

//                     {order.status === "Pending" && (
//                       <button
//                         onClick={() => confirmCancel(order._id)}
//                         className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-red-600 transition-colors flex items-center gap-2"
//                       >
//                         <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
//                         Cancel
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }

// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { toast } from "sonner";

// export default function OrdersPage() {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [orderToCancel, setOrderToCancel] = useState(null);

//   const fetchOrders = () => {
//     fetch("/api/orders")
//       .then((res) => res.json())
//       .then((data) => {
//         setOrders(data.orders || []);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const confirmCancel = (orderId) => {
//     setOrderToCancel(orderId);
//     setShowModal(true);
//   };

//   const handleCancel = async () => {
//     if (!orderToCancel) return;
//     try {
//       const res = await fetch(`/api/orders/${orderToCancel}`, {
//         method: "DELETE",
//       });
//       if (res.ok) {
//         toast.success("Order removed from archive");
//         setOrders(orders.filter(order => order._id !== orderToCancel));
//       } else {
//         toast.error("Process failed");
//       }
//     } catch (error) {
//       toast.error("Something went wrong");
//     } finally {
//       setShowModal(false);
//       setOrderToCancel(null);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center">
//         <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400 animate-pulse">
//           Accessing Order Archive...
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white min-h-screen">
//       {/* Editorial Header */}
//       <header className="pt-24 pb-12 px-6 md:px-14 border-b border-gray-100">
//         <div className="max-w-7xl mx-auto flex justify-between items-end">
//           <div>
//             <h1 className="text-5xl md:text-6xl font-light tracking-tighter text-gray-900 leading-tight">
//               My <span className="font-serif italic text-gray-400">Orders</span>
//             </h1>
//           </div>
//           <div className="hidden md:block text-right">
//             <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest leading-loose">
//               Database Entry: {orders.length} <br />
//             </p>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-6 md:px-14 py-16">
//         {/* Custom Modal - Updated to Sharp Theme */}
//         {showModal && (
//           <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
//             <div className="bg-white p-10 max-w-md w-full border border-gray-100 shadow-2xl">
//               <h2 className="text-2xl font-light tracking-tighter mb-4 uppercase">Void Order?</h2>
//               <p className="text-xs text-gray-500 font-light mb-10 leading-relaxed uppercase tracking-widest">
//                 This will permanently stop the fulfillment process for this entry. This action is recorded.
//               </p>
//               <div className="flex flex-col gap-3">
//                 <button onClick={handleCancel} className="w-full py-5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-red-600 transition-all">
//                   Confirm Cancellation
//                 </button>
//                 <button onClick={() => setShowModal(false)} className="w-full py-5 bg-white text-gray-400 border border-gray-100 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-black transition-all">
//                   Return to Dashboard
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {orders.length === 0 ? (
//           <div className="text-center py-40">
//             <h2 className="text-xl font-light mb-10 text-gray-300 italic tracking-tight">No active entries in your archive.</h2>
//             <Link
//               href="/explore"
//               className="inline-block px-12 py-5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-blue-600 transition-all"
//             >
//               Browse Collection
//             </Link>
//           </div>
//         ) : (
//           <div className="space-y-20">
//             {orders.map((order) => (
//               <div key={order._id} className="group">
//                 {/* Order Meta Table-style Header */}
//                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 border-b border-gray-900 gap-4">
//                   <div className="flex gap-10">
//                     <div>
//                       <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Order ID</span>
//                       <p className="text-xs font-bold tracking-widest uppercase">#{order._id.slice(-8)}</p>
//                     </div>
//                     <div>
//                       <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Placed On</span>
//                       <p className="text-xs font-medium uppercase tracking-tighter">
//                         {new Date(order.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-8">
//                     <div className="text-right">
//                        <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Grand Total</span>
//                        <p className="text-xl font-light tracking-tighter">₹{order.totalPrice}</p>
//                     </div>
//                     <div className={`px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] border ${
//                       order.status === 'Pending' ? 'border-amber-200 text-amber-600' : 'border-black bg-black text-white'
//                     }`}>
//                       {order.status}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Items Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
//                   {order.items.map((item, idx) => (
//                     <div key={idx} className="flex gap-6 items-center">
//                       <div className="relative w-24 h-32 bg-gray-50 overflow-hidden grayscale-[30%] group-hover:grayscale-0 transition-all duration-700">
//                         <Image src={item.imageSrc} alt={item.name} fill className="object-cover" />
//                       </div>
//                       <div className="flex-1">
//                         <p className="text-md font-light uppercase tracking-tighter text-gray-900 mb-1">{item.name}</p>
//                         <div className="flex flex-col gap-1">
//                           <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Size {item.size}</span>
//                           <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Quantity {item.quantity}</span>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Action Footer */}
//                 <div className="flex justify-between items-center pt-4">
//                   <div className="flex items-center gap-3">
//                     <span className="w-2 h-2 bg-green-500 rounded-none" />
//                     <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">Authentic Artifact</span>
//                   </div>

//                   {order.status === "Pending" && (
//                     <button
//                       onClick={() => confirmCancel(order._id)}
//                       className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-300 hover:text-red-600 border-b border-transparent hover:border-red-600 transition-all pb-1"
//                     >
//                       Void Shipment
//                     </button>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>

//       {/* Boutique Footer */}
//       <footer className="border-t border-gray-100 py-20 text-center">
//          <p className="text-[10px] tracking-[0.5em] uppercase text-gray-300">End of History</p>
//       </footer>
//     </div>
//   );
// }

// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { toast } from "sonner";

// export default function OrdersPage() {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [orderToCancel, setOrderToCancel] = useState(null);

//   const fetchOrders = () => {
//     fetch("/api/orders")
//       .then((res) => res.json())
//       .then((data) => {
//         // Ensure we handle the data structure correctly from your API
//         setOrders(data.orders || []);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const confirmCancel = (orderId) => {
//     setOrderToCancel(orderId);
//     setShowModal(true);
//   };

//   const handleCancel = async () => {
//     if (!orderToCancel) return;
//     try {
//       const res = await fetch(`/api/orders/${orderToCancel}`, {
//         method: "DELETE",
//       });
//       if (res.ok) {
//         toast.success("Order removed from archive");
//         setOrders(orders.filter(order => order._id !== orderToCancel));
//       } else {
//         toast.error("Process failed");
//       }
//     } catch (error) {
//       toast.error("Something went wrong");
//     } finally {
//       setShowModal(false);
//       setOrderToCancel(null);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center">
//         <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400 animate-pulse">
//           Accessing Order Archive...
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white min-h-screen">
//       <header className="pt-24 pb-12 px-6 md:px-14 border-b border-gray-100">
//         <div className="max-w-7xl mx-auto flex justify-between items-end">
//           <div>
//             <h1 className="text-5xl md:text-6xl font-light tracking-tighter text-gray-900 leading-tight">
//               My <span className="font-serif italic text-gray-400">Orders</span>
//             </h1>
//           </div>
//           <div className="hidden md:block text-right">
//             <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest leading-loose">
//               Database Entry: {orders.length}
//             </p>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-6 md:px-14 py-16">
//         {showModal && (
//           <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
//             <div className="bg-white p-10 max-w-md w-full border border-gray-100 shadow-2xl">
//               <h2 className="text-2xl font-light tracking-tighter mb-4 uppercase">Cancel Order?</h2>
//               <p className="text-xs text-gray-500 font-light mb-10 leading-relaxed uppercase tracking-widest">
//                 This will permanently stop the fulfillment process for this entry.
//               </p>
//               <div className="flex flex-col gap-3">
//                 <button onClick={handleCancel} className="w-full py-5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-red-600 transition-all">
//                   Confirm Cancellation
//                 </button>
//                 <button onClick={() => setShowModal(false)} className="w-full py-5 bg-white text-gray-400 border border-gray-100 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-black transition-all">
//                   Return to Dashboard
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {orders.length === 0 ? (
//           <div className="text-center py-40">
//             <h2 className="text-xl font-light mb-10 text-gray-300 italic tracking-tight">No active entries in your archive.</h2>
//             <Link href="/explore" className="inline-block px-12 py-5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-blue-600 transition-all">
//               Browse Collection
//             </Link>
//           </div>
//         ) : (
//           <div className="space-y-20">
//             {orders.map((order) => (
//               <div key={order._id} className="group">
//                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 border-b border-gray-900 gap-4">
//                   <div className="flex gap-10">
//                     <div>
//                       <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Order ID</span>
//                       <p className="text-xs font-bold tracking-widest uppercase">#{order._id.slice(-8)}</p>
//                     </div>
//                     <div>
//                       <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Placed On</span>
//                       <p className="text-xs font-medium uppercase tracking-tighter">
//                         {new Date(order.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-8">
//                     <div className="text-right">
//                        <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Grand Total</span>
//                        {/* FIX: Using order.totalAmount from your schema */}
//                        <p className="text-xl font-light tracking-tighter">₹{order.totalAmount}</p>
//                     </div>
//                     <div className={`px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] border ${
//                       order.status === 'Processing' ? 'border-amber-200 text-amber-600' : 'border-black bg-black text-white'
//                     }`}>
//                       {order.status}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
//                   {order.items.map((item, idx) => (
//                     <div key={idx} className="flex gap-6 items-center">
//                       <div className="relative w-24 h-32 bg-gray-50 overflow-hidden grayscale-[30%] group-hover:grayscale-0 transition-all duration-700">
//                         {/* FIX: Using item.image from your schema */}
//                         <Image src={item.image} alt={item.name} fill className="object-cover" />
//                       </div>
//                       <div className="flex-1">
//                         <p className="text-md font-light uppercase tracking-tighter text-gray-900 mb-1">{item.name}</p>
//                         <div className="flex flex-col gap-1">
//                           <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 font-mono">QTY: {item.quantity}</span>
//                           <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Price: ₹{item.price}</span>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex justify-between items-center pt-4">
//                   <div className="flex flex-col gap-1">
//                     <div className="flex items-center gap-3">
//                       <span className="w-2 h-2 bg-green-500 rounded-none" />
//                       <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">Authentic Artifact</span>
//                     </div>
//                     {/* Optional: Show Address Snippet */}
//                     {order.shippingAddress?.fullAddress && (
//                        <span className="text-[8px] text-gray-300 uppercase tracking-widest mt-1">Ship to: {order.shippingAddress.fullAddress.slice(0, 30)}...</span>
//                     )}
//                   </div>

//                   {order.status === "Processing" && (
//                     <button
//                       onClick={() => confirmCancel(order._id)}
//                       className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-300 hover:text-red-600 border-b border-transparent hover:border-red-600 transition-all pb-1"
//                     >
//                       Cancel Order
//                     </button>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>

//       <footer className="border-t border-gray-100 py-20 text-center">
//          <p className="text-[10px] tracking-[0.5em] uppercase text-gray-300">End of History</p>
//       </footer>
//     </div>
//   );
// }

// //og
// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { toast } from "sonner";

// export default function OrdersPage() {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [orderToCancel, setOrderToCancel] = useState(null);

//   const fetchOrders = () => {
//     fetch("/api/orders")
//       .then((res) => res.json())
//       .then((data) => {
//         setOrders(data.orders || []);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const confirmCancel = (orderId) => {
//     setOrderToCancel(orderId);
//     setShowModal(true);
//   };

//   const handleCancel = async () => {
//     if (!orderToCancel) return;
//     try {
//       const res = await fetch(`/api/orders/${orderToCancel}`, {
//         method: "DELETE",
//       });
//       if (res.ok) {
//         toast.success("Order removed from archive");
//         setOrders(orders.filter(order => order._id !== orderToCancel));
//       } else {
//         const errorData = await res.json();
//         toast.error(errorData.error || "Process failed");
//       }
//     } catch (error) {
//       toast.error("Something went wrong");
//     } finally {
//       setShowModal(false);
//       setOrderToCancel(null);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center">
//         <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400 animate-pulse">
//           Accessing Order Archive...
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white min-h-screen">
//       <header className="pt-24 pb-12 px-6 md:px-14 border-b border-gray-100">
//         <div className="max-w-7xl mx-auto flex justify-between items-end">
//           <div>
//             <h1 className="text-5xl md:text-6xl font-light tracking-tighter text-gray-900 leading-tight">
//               My <span className="font-serif italic text-gray-400">Orders</span>
//             </h1>
//           </div>
//           <div className="hidden md:block text-right">
//             <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest leading-loose">
//               Database Entry: {orders.length}
//             </p>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-6 md:px-14 py-16">
//         {showModal && (
//           <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
//             <div className="bg-white p-10 max-w-md w-full border border-gray-100 shadow-2xl">
//               <h2 className="text-2xl font-light tracking-tighter mb-4 uppercase">Cancel Order?</h2>
//               <p className="text-xs text-gray-500 font-light mb-10 leading-relaxed uppercase tracking-widest">
//                 This will permanently stop the fulfillment process for this entry.
//               </p>
//               <div className="flex flex-col gap-3">
//                 <button onClick={handleCancel} className="w-full py-5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-red-600 transition-all">
//                   Confirm Cancellation
//                 </button>
//                 <button onClick={() => setShowModal(false)} className="w-full py-5 bg-white text-gray-400 border border-gray-100 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-black transition-all">
//                   Return to Dashboard
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {orders.length === 0 ? (
//           <div className="text-center py-40">
//             <h2 className="text-xl font-light mb-10 text-gray-300 italic tracking-tight">No active entries in your archive.</h2>
//             <Link href="/explore" className="inline-block px-12 py-5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-blue-600 transition-all">
//               Browse Collection
//             </Link>
//           </div>
//         ) : (
//           <div className="space-y-20">
//             {orders.map((order) => (
//               <div key={order._id} className="group">
//                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 border-b border-gray-900 gap-4">
//                   <div className="flex gap-10">
//                     <div>
//                       <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Order ID</span>
//                       <p className="text-xs font-bold tracking-widest uppercase">#{order._id.slice(-8)}</p>
//                     </div>
//                     <div>
//                       <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Placed On</span>
//                       <p className="text-xs font-medium uppercase tracking-tighter">
//                         {new Date(order.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-8">
//                     <div className="text-right">
//                        <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Grand Total</span>
//                        <p className="text-xl font-light tracking-tighter">₹{order.totalAmount}</p>
//                     </div>
//                     <div className={`px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] border ${
//                       order.status === 'Pending' ? 'border-amber-200 text-amber-600' : 'border-black bg-black text-white'
//                     }`}>
//                       {order.status}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
//                   {order.items.map((item, idx) => (
//                     <div key={idx} className="flex gap-6 items-center">
//                       <div className="relative w-24 h-32 bg-gray-50 overflow-hidden grayscale-[30%] group-hover:grayscale-0 transition-all duration-700">
//                         <Image src={item.image} alt={item.name} fill className="object-cover" />
//                       </div>
//                       <div className="flex-1">
//                         <p className="text-md font-light uppercase tracking-tighter text-gray-900 mb-1">{item.name}</p>
//                         <div className="flex flex-col gap-1">
//                           <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 font-mono">QTY: {item.quantity}</span>
//                           <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Price: ₹{item.price}</span>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex justify-between items-center pt-4">
//                   <div className="flex flex-col gap-1">
//                     <div className="flex items-center gap-3">
//                       <span className="w-2 h-2 bg-green-500 rounded-none" />
//                       <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">Authentic Artifact</span>
//                     </div>
//                     {order.shippingAddress?.fullAddress && (
//                        <span className="text-[8px] text-gray-300 uppercase tracking-widest mt-1">Ship to: {order.shippingAddress.fullAddress.slice(0, 40)}...</span>
//                     )}
//                   </div>

//                   {order.status === "Pending" && (
//                     <button
//                       onClick={() => confirmCancel(order._id)}
//                       className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-300 hover:text-red-600 border-b border-transparent hover:border-red-600 transition-all pb-1"
//                     >
//                       Cancel Order
//                     </button>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>

//       <footer className="border-t border-gray-100 py-20 text-center">
//          <p className="text-[10px] tracking-[0.5em] uppercase text-gray-300">End of History</p>
//       </footer>
//     </div>
//   );
// }

// og code
// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { toast } from "sonner";

// export default function OrdersPage() {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [orderToCancel, setOrderToCancel] = useState(null);

//   const fetchOrders = () => {
//     fetch("/api/orders")
//       .then((res) => res.json())
//       .then((data) => {
//         setOrders(data.orders || []);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   };

//   useEffect(() => { fetchOrders(); }, []);

//   const handleCancel = async () => {
//     if (!orderToCancel) return;
//     try {
//       const res = await fetch(`/api/orders/${orderToCancel}`, { method: "DELETE" });
//       if (res.ok) {
//         toast.success("Order Cancelled");
//         setOrders(orders.filter(order => order._id !== orderToCancel));
//       } else {
//         toast.error("Failed to cancel");
//       }
//     } catch (error) {
//       toast.error("Error occurred");
//     } finally {
//       setShowModal(false);
//       setOrderToCancel(null);
//     }
//   };

//   if (loading) return (
//     <div className="min-h-screen flex items-center justify-center">
//       <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400">Loading Orders...</p>
//     </div>
//   );

//   return (
//     <div className="bg-white min-h-screen px-6 py-16 pt-32">
//       {showModal && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 text-center">
//           <div className="bg-white p-10 max-w-md w-full border border-gray-100">
//             <h2 className="text-xl font-light tracking-tighter mb-4 uppercase">Cancel Order?</h2>
//             <p className="text-[10px] text-gray-400 mb-10 uppercase tracking-widest">This will permanently delete the order.</p>
//             <div className="flex flex-col gap-3">
//               <button onClick={handleCancel} className="w-full py-5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-red-600 transition-all">Confirm Cancel</button>
//               <button onClick={() => setShowModal(false)} className="w-full py-5 bg-white text-gray-400 border border-gray-100 text-[10px] font-bold uppercase tracking-[0.3em]">Go Back</button>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-light tracking-tighter mb-12 uppercase">My Orders</h1>
//         {orders.length === 0 ? (
//           <div className="text-center py-40 border-t">
//             <p className="text-[10px] uppercase tracking-[0.3em] text-gray-300">No Orders Found.</p>
//             <Link href="/" className="inline-block mt-8 text-[10px] font-bold uppercase tracking-widest border-b border-black">Start Shopping</Link>
//           </div>
//         ) : (
//           <div className="space-y-16">
//             {orders.map((order) => (
//               <div key={order._id} className="pb-12 border-b border-gray-100">
//                 <div className="flex flex-wrap justify-between items-start mb-8 gap-4">
//                   <div>
//                     <span className="text-[9px] font-bold text-gray-300 uppercase block">ID: #{order._id.slice(-8)}</span>
//                     <div className={`mt-2 px-3 py-1 text-[9px] font-bold uppercase tracking-widest border ${
//                       order.status === 'Pending' ? 'border-amber-200 text-amber-600' : 'border-black bg-black text-white'
//                     }`}>Status: {order.status}</div>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-2xl font-light">₹{order.totalAmount}</p>
//                     <button onClick={() => {setOrderToCancel(order._id); setShowModal(true)}} className="text-[9px] text-gray-400 hover:text-red-500 uppercase tracking-widest mt-2 underline">Cancel Order</button>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                   {order.items.map((item, idx) => (
//                     <div key={idx} className="flex gap-4 items-center">
//                       <div className="relative w-16 h-20 bg-gray-50"><Image src={item.image} alt="" fill className="object-cover grayscale" /></div>
//                       <div>
//                         <p className="text-[11px] uppercase tracking-widest">{item.name}</p>
//                         <p className="text-[9px] text-gray-400">QTY: {item.quantity} | ₹{item.price}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// imp
// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { toast } from "sonner";

// export default function OrdersPage() {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [orderToCancel, setOrderToCancel] = useState(null);

//   const fetchOrders = () => {
//     fetch("/api/orders")
//       .then((res) => res.json())
//       .then((data) => {
//         setOrders(data.orders || []);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   };

//   useEffect(() => { fetchOrders(); }, []);

//   const handleCancel = async () => {
//     if (!orderToCancel) return;
//     try {
//       const res = await fetch(`/api/orders/${orderToCancel}`, { method: "DELETE" });
//       if (res.ok) {
//         toast.success("Order Cancelled");
//         setOrders(orders.filter(order => order._id !== orderToCancel));
//       } else {
//         toast.error("Failed to cancel");
//       }
//     } catch (error) {
//       toast.error("Error occurred");
//     } finally {
//       setShowModal(false);
//       setOrderToCancel(null);
//     }
//   };

//   if (loading) return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA]">
//       <div className="w-10 h-[1px] bg-black animate-pulse mb-4"></div>
//       <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-gray-400">Retrieving Archive</p>
//     </div>
//   );

//   return (
//     <div className="bg-[#FAFAFA] min-h-screen pb-32">
//       {/* Cancellation Confirmation Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-white/90 backdrop-blur-md z-[100] flex items-center justify-center p-6">
//           <div className="max-w-md w-full text-center space-y-8 bg-white p-10 border border-gray-100 shadow-2xl">
//             <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-red-600">Action Required</span>
//             <h2 className="text-3xl font-light tracking-tighter uppercase text-gray-900">Cancel Order?</h2>
//             <p className="text-[11px] text-gray-500 uppercase tracking-widest leading-loose">This will permanently remove the transaction from your digital history.</p>
//             <div className="flex flex-col gap-4 pt-4">
//               <button onClick={handleCancel} className="w-full py-5 bg-red-600 text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-red-700 transition-colors shadow-lg">Confirm Cancellation</button>
//               <button onClick={() => setShowModal(false)} className="w-full py-5 border border-gray-200 text-[10px] font-bold uppercase tracking-[0.3em] hover:border-black transition-colors">Go Back</button>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="max-w-6xl mx-auto px-6 pt-32">
//         <div className="mb-20 border-b border-gray-200 pb-12">
//           <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 block mb-4">Personal Dashboard</span>
//           <h1 className="text-5xl font-light tracking-tighter text-gray-900 uppercase">My Archive</h1>
//         </div>

//         {orders.length === 0 ? (
//           <div className="text-center py-40">
//             <p className="text-[11px] uppercase tracking-[0.4em] text-gray-300 mb-10">Your transaction history is empty.</p>
//             <Link href="/explore" className="text-[11px] font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-gray-500 transition-colors">Begin Exploration</Link>
//           </div>
//         ) : (
//           <div className="space-y-16">
//             {orders.map((order) => (
//               <div key={order._id} className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden group">
//                 {/* Enhanced Order Header */}
//                 <div className="bg-gray-50/50 px-8 py-8 border-b border-gray-100 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
//                   <div className="flex flex-wrap items-center gap-8">
//                     <div>
//                         <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Order Reference</span>
//                         <span className="text-[13px] font-medium tracking-tighter text-gray-900">#{order._id.slice(-8).toUpperCase()}</span>
//                     </div>
//                     <div className="h-10 w-[1px] bg-gray-200 hidden lg:block" />
//                     <div>
//                         <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Status</span>
//                         <div className={`text-[9px] font-bold uppercase tracking-[0.2em] py-1.5 px-4 rounded-full border shadow-sm ${
//                           order.status === 'Pending' ? 'border-amber-300 bg-amber-50 text-amber-700' : 'border-black bg-black text-white'
//                         }`}>
//                           {order.status}
//                         </div>
//                     </div>
//                     <div className="h-10 w-[1px] bg-gray-200 hidden lg:block" />
//                     <div>
//                         <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Order Date</span>
//                         <span className="text-[11px] uppercase tracking-widest text-gray-700 font-medium">{new Date(order.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
//                     </div>
//                   </div>

//                   <div className="lg:text-right w-full lg:w-auto pt-6 lg:pt-0 border-t lg:border-t-0 border-gray-100">
//                     <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Archive Total</span>
//                     <p className="text-3xl font-light tracking-tighter text-gray-900">₹{order.totalAmount}</p>
//                   </div>
//                 </div>

//                 {/* Product List: Increased Image Size & Colors */}
//                 <div className="p-8">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     {order.items.map((item, idx) => (
//                       <div key={idx} className="flex gap-6 items-center bg-white p-4 border border-gray-50 rounded-sm hover:border-gray-200 transition-all duration-300">
//                         <div className="relative w-24 h-32 bg-gray-100 rounded-sm overflow-hidden flex-shrink-0 shadow-sm">
//                           <Image
//                             src={item.image}
//                             alt={item.name}
//                             fill
//                             className="object-cover transition-transform duration-700 group-hover:scale-105"
//                           />
//                         </div>
//                         <div className="space-y-2 min-w-0">
//                           <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-gray-900 leading-tight">{item.name}</p>
//                           <div className="flex flex-col gap-1">
//                             <p className="text-[10px] text-gray-500 uppercase tracking-widest">Quantity: <span className="text-black font-medium">{item.quantity}</span></p>
//                             <p className="text-[11px] font-medium tracking-widest text-gray-900">Unit: ₹{item.price}</p>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Action Footer: High Visibility Button */}
//                   <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
//                      <p className="text-[9px] text-gray-400 uppercase tracking-[0.2em]">Full global tracking available upon dispatch.</p>
//                      <button
//                         onClick={() => {setOrderToCancel(order._id); setShowModal(true)}}
//                         className="w-full sm:w-auto px-8 py-3 border border-red-200 text-red-600 hover:bg-red-600 hover:text-white text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 flex items-center justify-center gap-3 active:scale-95"
//                       >
//                         <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
//                         Request Cancellation
//                       </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [orderToCancel, setOrderToCancel] = useState(null);

  const fetchOrders = () => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.orders || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleCancel = async () => {
    if (!orderToCancel) return;
    try {
      const res = await fetch(`/api/orders/${orderToCancel}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("Order Cancelled");
        setOrders(orders.filter((order) => order._id !== orderToCancel));
      } else {
        toast.error("Failed to cancel");
      }
    } catch (error) {
      toast.error("Error occurred");
    } finally {
      setShowModal(false);
      setOrderToCancel(null);
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA]">
        <div className="w-10 h-[1px] bg-black animate-pulse mb-4"></div>
        <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-gray-400">
          Retrieving Archive
        </p>
      </div>
    );

  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-32">
      {/* Cancellation Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-white/90 backdrop-blur-md z-[100] flex items-center justify-center p-6">
          <div className="max-w-md w-full text-center space-y-8 bg-white p-10 border border-gray-100 shadow-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-red-600">
              Action Required
            </span>
            <h2 className="text-3xl font-light tracking-tighter uppercase text-gray-900">
              Cancel Order?
            </h2>
            <p className="text-[11px] text-gray-500 uppercase tracking-widest leading-loose">
              This will permanently remove the transaction from your digital
              history.
            </p>
            <div className="flex flex-col gap-4 pt-4">
              <button
                onClick={handleCancel}
                className="w-full py-5 bg-red-600 text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-red-700 transition-colors shadow-lg"
              >
                Confirm Cancellation
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="w-full py-5 border border-gray-200 text-[10px] font-bold uppercase tracking-[0.3em] hover:border-black transition-colors"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6 pt-32">
        <div className="mb-20 border-b border-gray-200 pb-12">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 block mb-4">
            Personal Dashboard
          </span>
          <h1 className="text-5xl font-light tracking-tighter text-gray-900 uppercase">
            My Orders
          </h1>
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-40">
            <p className="text-[11px] uppercase tracking-[0.4em] text-gray-300 mb-10">
              Your transaction history is empty.
            </p>
            <Link
              href="/explore"
              className="text-[11px] font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-gray-500 transition-colors"
            >
              Begin Exploration
            </Link>
          </div>
        ) : (
          <div className="space-y-16">
            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden group"
              >
                {/* Enhanced Order Header */}
                <div className="bg-gray-50/50 px-8 py-8 border-b border-gray-100 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                  <div className="flex flex-wrap items-center gap-8">
                    <div>
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
                        Order Reference
                      </span>
                      <span className="text-[13px] font-medium tracking-tighter text-gray-900">
                        #{order._id.slice(-8).toUpperCase()}
                      </span>
                    </div>
                    <div className="h-10 w-[1px] bg-gray-200 hidden lg:block" />
                    {/* Updated Status Section inside the Map */}
                    <div>
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
                        Status
                      </span>
                      <div
                        className={`text-[9px] font-bold uppercase tracking-[0.2em] py-1.5 px-4 rounded-full border shadow-sm transition-colors duration-500 ${
                          order.status === "Pending"
                            ? "border-amber-200 bg-amber-50 text-amber-700"
                            : order.status === "Delivered"
                            ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                            : "border-black bg-black text-white"
                        }`}
                      >
                        {order.status}
                      </div>
                    </div>
                    <div className="h-10 w-[1px] bg-gray-200 hidden lg:block" />
                    <div>
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
                        Order Date & Time
                      </span>
                      <span className="text-[11px] uppercase tracking-widest text-gray-700 font-medium flex items-center gap-2">
                        {new Date(order.createdAt).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                        <span className="text-gray-300">|</span>
                        {new Date(order.createdAt).toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        })}
                      </span>
                    </div>
                  </div>

                  <div className="lg:text-right w-full lg:w-auto pt-6 lg:pt-0 border-t lg:border-t-0 border-gray-100">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-1">
                      Archive Total
                    </span>
                    <p className="text-3xl font-light tracking-tighter text-gray-900">
                      ₹{order.totalAmount}
                    </p>
                  </div>
                </div>

                {/* Product List & Address Section */}
                <div className="p-8 space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {order.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex gap-6 items-center bg-white p-4 border border-gray-50 rounded-sm hover:border-gray-200 transition-all duration-300"
                      >
                        <div className="relative w-24 h-32 bg-gray-100 rounded-sm overflow-hidden flex-shrink-0 shadow-sm">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="space-y-2 min-w-0">
                          <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-gray-900 leading-tight">
                            {item.name}
                          </p>
                          <div className="flex flex-col gap-1">
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                              Quantity:{" "}
                              <span className="text-black font-medium">
                                {item.quantity}
                              </span>
                            </p>
                            <p className="text-[11px] font-medium tracking-widest text-gray-900">
                              Unit: ₹{item.price}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Shipping Address Display */}
                  <div className="bg-gray-50/30 p-6 border border-gray-100 rounded-sm">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.3em] block mb-3">
                      Shipping Address
                    </span>
                    <p className="text-[11px] text-gray-600 uppercase tracking-widest leading-relaxed max-w-2xl">
                      {order.shippingAddress?.fullAddress ||
                        "Address details unavailable"}
                    </p>
                  </div>

                  {/* Action Footer */}
                  <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-[9px] text-gray-400 uppercase tracking-[0.2em]">
                      Full global tracking available upon dispatch.
                    </p>
                    <button
                      onClick={() => {
                        setOrderToCancel(order._id);
                        setShowModal(true);
                      }}
                      className="w-full sm:w-auto px-8 py-3 border border-red-200 text-red-600 hover:bg-red-600 hover:text-white text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 flex items-center justify-center gap-3 active:scale-95"
                    >
                      <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                      Request Cancellation
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
