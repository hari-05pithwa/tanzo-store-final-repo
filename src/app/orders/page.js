// // "use client";
// // import { useEffect, useState } from "react";
// // import Image from "next/image";
// // import { toast } from "sonner";

// // export default function OrdersPage() {
// //   const [orders, setOrders] = useState([]);
// //   const [loading, setLoading] = useState(true);
  
// //   // State for Custom Modal
// //   const [showModal, setShowModal] = useState(false);
// //   const [orderToCancel, setOrderToCancel] = useState(null);

// //   const fetchOrders = () => {
// //     fetch("/api/orders")
// //       .then((res) => res.json())
// //       .then((data) => {
// //         setOrders(data.orders || []);
// //         setLoading(false);
// //       })
// //       .catch(() => setLoading(false));
// //   };

// //   useEffect(() => {
// //     fetchOrders();
// //   }, []);

// //   // Triggered when user clicks "Cancel Order" button
// //   const confirmCancel = (orderId) => {
// //     setOrderToCancel(orderId);
// //     setShowModal(true);
// //   };

// //   // Triggered when user confirms inside the Custom UI
// //   const handleCancel = async () => {
// //     if (!orderToCancel) return;

// //     try {
// //       const res = await fetch(`/api/orders/${orderToCancel}`, {
// //         method: "DELETE",
// //       });
// //       const data = await res.json();

// //       if (res.ok) {
// //         toast.success("Order cancelled successfully");
// //         setOrders(orders.filter(order => order._id !== orderToCancel));
// //       } else {
// //         toast.error(data.error || "Failed to cancel order");
// //       }
// //     } catch (error) {
// //       toast.error("Something went wrong");
// //     } finally {
// //       setShowModal(false);
// //       setOrderToCancel(null);
// //     }
// //   };

// //   if (loading) return <div className="text-center py-20">Loading your orders...</div>;

// //   return (
// //     <div className="max-w-4xl mx-auto px-6 py-12 relative">
// //       <h1 className="text-3xl font-bold mb-8">My Orders</h1>

// //       {/* --- CUSTOM MODAL UI --- */}
// //       {showModal && (
// //         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
// //           <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl animate-in fade-in zoom-in duration-200">
// //             <h2 className="text-xl font-bold mb-2">Cancel Order?</h2>
// //             <p className="text-gray-500 mb-6">Are you sure you want to cancel this order? This action cannot be undone.</p>
// //             <div className="flex gap-3">
// //               <button 
// //                 onClick={() => setShowModal(false)}
// //                 className="flex-1 py-3 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors"
// //               >
// //                 Go Back
// //               </button>
// //               <button 
// //                 onClick={handleCancel}
// //                 className="flex-1 py-3 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-colors"
// //               >
// //                 Yes, Cancel
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {orders.length === 0 ? (
// //         <p className="text-gray-500">You haven't placed any orders yet.</p>
// //       ) : (
// //         <div className="space-y-6">
// //           {orders.map((order) => (
// //             <div key={order._id} className="border border-black/10 rounded-2xl p-6 bg-white shadow-sm">
// //               <div className="flex justify-between items-start mb-4 border-b pb-4">
// //                 <div>
// //                   <p className="text-sm text-gray-500">Order ID: {order._id}</p>
// //                   <p className="text-sm font-medium">Placed on: {new Date(order.createdAt).toLocaleDateString()}</p>
// //                 </div>
// //                 <div className="text-right">
// //                   <span className="px-4 py-1 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest">
// //                     {order.status}
// //                   </span>
// //                   <p className="mt-2 font-bold text-xl">₹ {order.totalPrice}</p>
// //                 </div>
// //               </div>
              
// //               <div className="space-y-4">
// //                 {order.items.map((item, idx) => (
// //                   <div key={idx} className="flex items-center gap-4">
// //                     <Image src={item.imageSrc} alt={item.name} width={60} height={60} className="rounded-lg object-cover" />
// //                     <div>
// //                       <p className="font-semibold">{item.name}</p>
// //                       <p className="text-xs text-gray-500">Size: {item.size} | Qty: {item.quantity}</p>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>

// //               <div className="mt-6 flex justify-between items-center border-t pt-4">
// //                 <p className="text-xs text-green-600 font-bold italic">Payment Mode: Cash on Delivery (COD)</p>
                
// //                 {order.status === "Pending" && (
// //                   <button 
// //                     onClick={() => confirmCancel(order._id)} // Calls the modal logic
// //                     className="text-xs font-bold text-red-600 hover:underline px-4 py-2 border border-red-100 rounded-lg hover:bg-red-50 transition-colors"
// //                   >
// //                     Cancel Order
// //                   </button>
// //                 )}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

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
//       const data = await res.json();
//       if (res.ok) {
//         toast.success("Order cancelled successfully");
//         setOrders(orders.filter(order => order._id !== orderToCancel));
//       } else {
//         toast.error(data.error || "Failed to cancel order");
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
//       <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
//         <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 animate-pulse">
//           Retrieving Archives...
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#FAFAFA] text-gray-900">
//       <main className="max-w-5xl mx-auto px-6 py-10 lg:py-16">
        
//         {/* Header Section */}
//         <div className="mb-12 border-b border-gray-200 pb-8 flex justify-between items-end">
//           <div>
//             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 block mb-2">
//               Account History
//             </span>
//             <h1 className="text-3xl font-light tracking-tight text-gray-900">My Orders</h1>
//           </div>
//           <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
//             {orders.length} Total Orders
//           </p>
//         </div>

//         {/* Custom Modal - Matching Theme */}
//         {showModal && (
//           <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-[100] flex items-center justify-center p-4">
//             <div className="bg-white rounded-[2rem] p-10 max-w-sm w-full shadow-2xl border border-gray-100">
//               <h2 className="text-lg font-light tracking-tight mb-2">Cancel Order?</h2>
//               <p className="text-sm text-gray-500 font-light mb-8 leading-relaxed">
//                 This request will permanently remove your selection from our processing queue.
//               </p>
//               <div className="flex flex-col gap-3">
//                 <button 
//                   onClick={handleCancel}
//                   className="w-full py-4 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-red-600 transition-colors"
//                 >
//                   Confirm Cancellation
//                 </button>
//                 <button 
//                   onClick={() => setShowModal(false)}
//                   className="w-full py-4 bg-white text-gray-400 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:text-black transition-colors"
//                 >
//                   Go Back
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {orders.length === 0 ? (
//           <div className="text-center py-32 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm px-6">
//             <h2 className="text-xl font-light mb-8 text-gray-400 italic">No order history found.</h2>
//             <Link 
//               href="/" 
//               className="inline-block px-12 py-4 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-full shadow-xl hover:bg-gray-800 transition-all"
//             >
//               Start Shopping
//             </Link>
//           </div>
//         ) : (
//           <div className="space-y-10">
//             {orders.map((order) => (
//               <div key={order._id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md">
//                 {/* Order Top Bar */}
//                 <div className="px-8 py-6 bg-gray-50/50 border-b border-gray-100 flex flex-wrap justify-between items-center gap-4">
//                   <div className="flex gap-8">
//                     <div>
//                       <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Order Ref</span>
//                       <p className="text-xs font-medium font-mono">{order._id.slice(-8).toUpperCase()}</p>
//                     </div>
//                     <div>
//                       <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Placed On</span>
//                       <p className="text-xs font-medium">{new Date(order.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-4">
//                      <span className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest ${
//                        order.status === 'Pending' ? 'bg-amber-50 text-amber-600 border border-amber-100' : 'bg-black text-white'
//                      }`}>
//                         {order.status}
//                      </span>
//                      <p className="text-lg font-light tracking-tight">₹{order.totalPrice}</p>
//                   </div>
//                 </div>

//                 {/* Items List */}
//                 <div className="p-8 space-y-6">
//                   {order.items.map((item, idx) => (
//                     <div key={idx} className="flex items-center gap-6 group">
//                       <div className="relative w-16 h-20 bg-gray-50 rounded-xl overflow-hidden shrink-0 border border-gray-100">
//                         <Image src={item.imageSrc} alt={item.name} fill className="object-cover" />
//                       </div>
//                       <div className="flex-1">
//                         <p className="text-sm font-light text-gray-900 group-hover:text-gray-500 transition-colors">{item.name}</p>
//                         <div className="flex gap-4 mt-1">
//                           <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Size: <span className="text-gray-600">{item.size}</span></span>
//                           <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Qty: <span className="text-gray-600">{item.quantity}</span></span>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Footer Bar */}
//                 <div className="px-8 py-5 bg-white border-t border-gray-50 flex justify-between items-center">
//                   <div className="flex items-center gap-2">
//                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//                     <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">COD Verified</span>
//                   </div>

//                   {order.status === "Pending" && (
//                     <button 
//                       onClick={() => confirmCancel(order._id)}
//                       className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-red-600 transition-colors flex items-center gap-2"
//                     >
//                       <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
//                       Cancel Order
//                     </button>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
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
//       {/* Container height optimized to prevent extra bottom gaps */}
//       <main className="max-w-5xl mx-auto px-6 pt-10 pb-16 lg:py-16 min-h-[calc(100vh-80px)] flex flex-col">
        
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

//         {/* Content Section */}
//         <div className="flex-1">
//           {orders.length === 0 ? (
//             /* Reduced padding for mobile to fix the extra spacing issue */
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

  const confirmCancel = (orderId) => {
    setOrderToCancel(orderId);
    setShowModal(true);
  };

  const handleCancel = async () => {
    if (!orderToCancel) return;
    try {
      const res = await fetch(`/api/orders/${orderToCancel}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("Order cancelled successfully");
        setOrders(orders.filter(order => order._id !== orderToCancel));
      } else {
        toast.error("Failed to cancel order");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setShowModal(false);
      setOrderToCancel(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[80vh] bg-[#FAFAFA] flex items-center justify-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 animate-pulse">
          Retrieving Archives...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAFA] text-gray-900">
      {/* Removed min-h and flex-col to prevent the bottom gap */}
      <main className="max-w-5xl mx-auto px-6 pt-10 pb-16 lg:py-16">
        
        {/* Header Section */}
        <div className="mb-8 md:mb-12 border-b border-gray-200 pb-8 flex justify-between items-end">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 block mb-2">
              Account History
            </span>
            <h1 className="text-2xl md:text-3xl font-light tracking-tight text-gray-900">My Orders</h1>
          </div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {orders.length} Total
          </p>
        </div>

        {/* Custom Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-[100] flex items-center justify-center p-4">
            <div className="bg-white rounded-[2rem] p-8 md:p-10 max-w-sm w-full shadow-2xl border border-gray-100">
              <h2 className="text-lg font-light tracking-tight mb-2">Cancel Order?</h2>
              <p className="text-sm text-gray-500 font-light mb-8 leading-relaxed">
                This request will permanently remove your selection from our processing queue.
              </p>
              <div className="flex flex-col gap-3">
                <button onClick={handleCancel} className="w-full py-4 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-red-600 transition-colors">
                  Confirm Cancellation
                </button>
                <button onClick={() => setShowModal(false)} className="w-full py-4 bg-white text-gray-400 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:text-black transition-colors">
                  Go Back
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Content Section - Removed flex-1 */}
        <div>
          {orders.length === 0 ? (
            <div className="text-center py-20 md:py-32 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm px-6">
              <h2 className="text-lg font-light mb-8 text-gray-400 italic">No order history found.</h2>
              <Link 
                href="/" 
                className="inline-block px-12 py-4 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-full shadow-xl hover:bg-gray-800 transition-all"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6 md:space-y-10">
              {orders.map((order) => (
                <div key={order._id} className="bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md">
                  {/* Order Top Bar */}
                  <div className="px-6 py-5 md:px-8 md:py-6 bg-gray-50/50 border-b border-gray-100 flex flex-wrap justify-between items-center gap-4">
                    <div className="flex gap-6 md:gap-8">
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Ref</span>
                        <p className="text-xs font-medium font-mono">{order._id.slice(-8).toUpperCase()}</p>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Date</span>
                        <p className="text-xs font-medium">{new Date(order.createdAt).toLocaleDateString('en-GB')}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <span className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest ${
                         order.status === 'Pending' ? 'bg-amber-50 text-amber-600 border border-amber-100' : 'bg-black text-white'
                       }`}>
                          {order.status}
                       </span>
                       <p className="text-lg font-light tracking-tight">₹{order.totalPrice}</p>
                    </div>
                  </div>

                  {/* Items List */}
                  <div className="p-6 md:p-8 space-y-6">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-6 group">
                        <div className="relative w-14 h-16 md:w-16 md:h-20 bg-gray-50 rounded-xl overflow-hidden shrink-0 border border-gray-100">
                          <Image src={item.imageSrc} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-light text-gray-900 group-hover:text-gray-500 transition-colors">{item.name}</p>
                          <div className="flex gap-4 mt-1">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Size: <span className="text-gray-600">{item.size}</span></span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Qty: <span className="text-gray-600">{item.quantity}</span></span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer Bar */}
                  <div className="px-6 py-4 md:px-8 md:py-5 bg-white border-t border-gray-50 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">COD Verified</span>
                    </div>

                    {order.status === "Pending" && (
                      <button 
                        onClick={() => confirmCancel(order._id)}
                        className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-red-600 transition-colors flex items-center gap-2"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}