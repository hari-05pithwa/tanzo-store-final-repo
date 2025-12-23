// og

// "use client";

// import { useCart } from "@/context/CartContext"; 
// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";

// export default function CartPage() {
//   const { cartItems, removeFromCart, clearCart } = useCart();
//   const [removingItem, setRemovingItem] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const router = useRouter();

//   const handleRemove = (id, size) => {
//     setRemovingItem(`${id}-${size}`);
//     setTimeout(() => {
//       removeFromCart(id, size);
//       setRemovingItem(null);
//     }, 350);
//   };

//   const totalPrice = cartItems.reduce(
//     (sum, item) => sum + (item.price * item.quantity),
//     0
//   );

//   const handleCheckout = async () => {
//     if (cartItems.length === 0) return;
//     setIsSubmitting(true);
//     try {
//       const response = await fetch("/api/checkout", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ cartItems, totalPrice }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         toast.success("Order Placed Successfully!");
//         clearCart();
//         router.push("/");
//       } else {
//         toast.error(data.error || "Please sign in to checkout");
//       }
//     } catch (err) {
//       toast.error("Network error. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#FAFAFA] text-gray-900">
//       <main className="max-w-7xl mx-auto px-6 py-10 lg:py-16">
        
//         {/* Page Header */}
//         <div className="mb-10 flex items-baseline justify-between">
//           <div>
//             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 block mb-2">
//               Review Bag
//             </span>
//             <h1 className="text-3xl font-light tracking-tight">Your Selection</h1>
//           </div>
//           <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
//             {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'}
//           </p>
//         </div>

//         {cartItems.length === 0 ? (
//           <div className="text-center py-32 border border-dashed border-gray-200 rounded-3xl bg-white/50 backdrop-blur-sm">
//             <h2 className="text-xl font-light mb-8 text-gray-500 italic">Your bag is currently empty.</h2>
//             <Link 
//               href="/" 
//               className="px-12 py-4 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-gray-800 transition-all rounded-full shadow-lg"
//             >
//               Start Exploring
//             </Link>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
//             {/* Left Side: Solid White Section */}
//             <div className="lg:col-span-7 xl:col-span-8 bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 lg:p-12">
//               <div className="flex flex-col">
//                 {cartItems.map((item, index) => (
//                   <div 
//                     key={`${item._id}-${item.size}`} 
//                     className={`flex gap-6 lg:gap-10 py-10 first:pt-0 border-b border-gray-200/60 transition-all duration-500 last:border-0 ${
//                       removingItem === `${item._id}-${item.size}` ? "opacity-0 -translate-x-5" : "opacity-100"
//                     }`}
//                   >
//                     {/* Compact Image Container */}
//                     <div className="relative w-24 sm:w-32 aspect-[4/5] bg-gray-50 rounded-2xl overflow-hidden shrink-0 border border-gray-100">
//                       <Image 
//                         src={item.imageSrc} 
//                         alt={item.name} 
//                         fill 
//                         className="object-cover" 
//                       />
//                     </div>
                    
//                     {/* Item Info Detail */}
//                     <div className="flex-1 flex flex-col justify-between py-1">
//                       <div className="flex justify-between items-start">
//                         <div>
//                           <Link href={`/product/${item.slug}`} className="hover:text-gray-500 transition-colors">
//                             <h3 className="text-lg font-light tracking-tight mb-2">{item.name}</h3>
//                           </Link>
//                           <div className="flex gap-4 items-center">
//                             <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
//                               Size: <span className="text-gray-900">{item.size}</span>
//                             </span>
//                             <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
//                               Qty: <span className="text-gray-900">{item.quantity}</span>
//                             </span>
//                           </div>
//                         </div>
//                         <p className="text-[15px] font-medium text-gray-900">₹{item.price * item.quantity}</p>
//                       </div>

//                       {/* Improved Minimalist Remove Button */}
//                       <button 
//                         onClick={() => handleRemove(item._id, item.size)} 
//                         className="w-fit flex items-center gap-2 group mt-6"
//                       >
//                         <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-red-50 transition-colors border border-gray-100">
//                           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 group-hover:text-red-500 transition-colors">
//                             <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
//                           </svg>
//                         </div>
//                         <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-red-500 transition-colors">
//                           Remove
//                         </span>
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right Side: Order Summary */}
//             <div className="lg:col-span-5 xl:col-span-4 sticky top-24">
//               <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
//                 <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-900 mb-8 border-b border-gray-100 pb-4">
//                   Summary
//                 </h2>
                
//                 <div className="space-y-4 mb-8">
//                   <div className="flex justify-between text-sm text-gray-500 font-light">
//                     <span>Subtotal</span>
//                     <span>₹{totalPrice}</span>
//                   </div>
//                   <div className="flex justify-between text-sm text-gray-500 font-light">
//                     <span>Shipping</span>
//                     <span className="text-green-600 uppercase text-[10px] font-bold tracking-tighter">Complimentary</span>
//                   </div>
//                 </div>

//                 <div className="border-t border-gray-100 pt-6 flex justify-between items-baseline mb-10">
//                   <p className="text-sm font-bold uppercase tracking-widest text-gray-900">Total</p>
//                   <p className="text-3xl font-light tracking-tighter text-gray-900">₹{totalPrice}</p>
//                 </div>

//                 <button 
//                   onClick={handleCheckout} 
//                   disabled={isSubmitting}
//                   className="w-full py-5 bg-black text-white text-[11px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-gray-800 transition-all shadow-xl active:scale-95 disabled:bg-gray-300"
//                 >
//                   {isSubmitting ? "Processing..." : "Place Order"}
//                 </button>

//                 <p className="mt-6 text-[9px] text-gray-400 text-center uppercase tracking-widest">
//                   Secure Checkout Protected
//                 </p>
//               </div>
//             </div>

//           </div>
//         )}
//       </main>
//     </div>
//   );
// }












// og code
// "use client";
// import { useCart } from "@/context/CartContext"; 
// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";

// export default function CartPage() {
//   const { cartItems, removeFromCart, clearCart } = useCart();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [address, setAddress] = useState("");
//   const router = useRouter();

//   const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

//   const handleCheckout = async () => {
//     if (cartItems.length === 0) return;
//     if (!address.trim()) {
//       toast.error("Please provide a shipping address");
//       return;
//     }

//     setIsSubmitting(true);
//     try {
//       const response = await fetch("/api/checkout", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ 
//           cartItems, 
//           totalPrice, 
//           shippingAddress: { fullAddress: address } 
//         }),
//       });
      
//       const data = await response.json();
//       if (response.ok) {
//         toast.success("Order Placed Successfully!");
//         clearCart();
//         router.push("/orders");
//       } else {
//         toast.error(data.error || "Submission failed");
//       }
//     } catch (err) {
//       toast.error("Network error.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="bg-white min-h-screen">
//       <main className="max-w-7xl mx-auto px-6 py-16">
//         <h1 className="text-4xl font-light tracking-tighter mb-12 uppercase">Your Selection</h1>
        
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
//           <div className="lg:col-span-8 space-y-8">
//             {cartItems.map((item) => (
//               <div key={`${item._id}-${item.size}`} className="flex gap-6 pb-8 border-b border-gray-100">
//                 <div className="relative w-24 h-32 bg-gray-50">
//                   <Image src={item.imageSrc} alt={item.name} fill className="object-cover" />
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-sm uppercase tracking-widest">{item.name}</h3>
//                   <p className="text-[10px] text-gray-400 mt-1 uppercase">Size: {item.size} | Qty: {item.quantity}</p>
//                   <p className="text-sm mt-4 font-bold">₹{item.price}</p>
//                 </div>
//                 <button onClick={() => removeFromCart(item._id, item.size)} className="text-[10px] uppercase text-gray-300 hover:text-red-500">Remove</button>
//               </div>
//             ))}
//           </div>

//           <div className="lg:col-span-4 space-y-8">
//             <div className="border border-black p-8">
//               <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Shipping Details</h2>
//               <textarea 
//                 placeholder="ENTER FULL DELIVERY ADDRESS..."
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 className="w-full bg-gray-50 p-4 text-[11px] tracking-widest uppercase border-none focus:ring-1 focus:ring-black outline-none min-h-[100px]"
//               />
//             </div>

//             <div className="bg-gray-50 p-8">
//               <div className="flex justify-between items-baseline mb-8">
//                 <span className="text-[10px] font-bold uppercase tracking-widest">Total</span>
//                 <span className="text-3xl font-light">₹{totalPrice}</span>
//               </div>
//               <button 
//                 onClick={handleCheckout}
//                 disabled={isSubmitting}
//                 className="w-full py-5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all disabled:bg-gray-300"
//               >
//                 {isSubmitting ? "Processing..." : "Confirm Purchase"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }






// main cart(imp)
// "use client";
// import { useCart } from "@/context/CartContext"; 
// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";

// export default function CartPage() {
//   const { cartItems, removeFromCart, clearCart } = useCart();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [address, setAddress] = useState("");
//   const router = useRouter();

//   const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

//   const handleCheckout = async () => {
//     if (cartItems.length === 0) return;
//     if (!address.trim()) {
//       toast.error("Please provide a shipping address");
//       return;
//     }

//     setIsSubmitting(true);
//     try {
//       const response = await fetch("/api/checkout", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ 
//           cartItems, 
//           totalPrice, 
//           shippingAddress: { fullAddress: address } 
//         }),
//       });
      
//       const data = await response.json();
//       if (response.ok) {
//         toast.success("Order Placed Successfully!");
//         clearCart();
//         router.push("/orders");
//       } else {
//         toast.error(data.error || "Submission failed");
//       }
//     } catch (err) {
//       toast.error("Network error.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="bg-[#FAFAFA] min-h-screen pt-24 md:pt-32 pb-24">
//       <main className="max-w-6xl mx-auto px-4 md:px-6">
//         {/* Page Header */}
//         <div className="mb-12 md:mb-20 border-b border-gray-200 pb-8 md:pb-12 text-center md:text-left">
//           <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 block mb-2 md:mb-4">Checkout Archive</span>
//           <h1 className="text-3xl md:text-5xl font-light tracking-tighter text-gray-900 uppercase">Your Selection</h1>
//         </div>
        
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
//           {/* Left: Items List */}
//           <div className="lg:col-span-7 space-y-6 md:space-y-12">
//             {cartItems.length === 0 ? (
//                 <div className="py-20 text-center md:text-left">
//                   <p className="text-[11px] uppercase tracking-[0.4em] text-gray-300 mb-10">Your selection is empty.</p>
//                   <Link href="/explore" className="text-[11px] font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-gray-500 transition-colors">Return to Gallery</Link>
//                 </div>
//             ) : (
//               cartItems.map((item) => (
//                 <div key={`${item._id}-${item.size}`} className="relative flex flex-col sm:flex-row gap-6 md:gap-10 group bg-white p-4 md:p-6 border border-gray-100 rounded-sm shadow-sm transition-all hover:border-gray-200">
//                   {/* Remove Button - Fixed for Mobile/Desktop */}
//                   <button 
//                     onClick={() => removeFromCart(item._id, item.size)} 
//                     className="absolute bottom-4 right-4 text-[10px] uppercase text-gray-500 hover:text-red-500 transition-colors tracking-widest z-20"
//                   >
//                     [ Remove ]
//                   </button>

//                   <div className="relative w-full sm:w-36 h-64 sm:h-48 overflow-hidden bg-gray-50 rounded-sm flex-shrink-0">
//                     <Image 
//                       src={item.imageSrc} 
//                       alt={item.name} 
//                       fill 
//                       className="object-cover transition-transform duration-1000 group-hover:scale-105" 
//                     />
//                   </div>

//                   <div className="flex-1 flex flex-col justify-between py-1">
//                     <div>
//                       <div className="flex flex-col gap-1">
//                         <h3 className="text-[14px] uppercase tracking-[0.2em] font-medium leading-relaxed pr-20 md:pr-24">{item.name}</h3>
//                         <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-[0.3em]">
//                           Size: <span className="text-black font-semibold">{item.size}</span> • Qty: <span className="text-black font-semibold">{item.quantity}</span>
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex items-end justify-between border-t border-gray-50 pt-4 mt-6 sm:mt-0">
//                       <p className="text-2xl font-light tracking-tighter text-gray-900">₹{item.price}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>

//           {/* Right: Modern Sidebar - Responsive */}
//           <div className="lg:col-span-5">
//             <div className="lg:sticky lg:top-40 bg-white border border-gray-200 rounded-sm overflow-hidden shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)]">
//               {/* Shipping Form Section */}
//               <div className="p-6 md:p-8 bg-[#FDFDFD] border-b border-gray-100">
//                 <div className="flex items-center justify-between mb-6">
//                   <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-900">Delivery Information</h2>
//                   <div className="h-px flex-1 bg-gray-100 ml-4 hidden sm:block"></div>
//                 </div>
                
//                 <div className="relative group">
//                   <label className="absolute -top-2.5 left-4 bg-white px-2 text-[8px] font-bold uppercase tracking-[0.2em] text-gray-400 group-focus-within:text-black transition-colors z-10">
//                     Destination Address
//                   </label>
//                   <textarea 
//                     placeholder="ENTER FULL STREET, CITY, AND ZIP CODE..."
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                     className="w-full bg-white border border-gray-200 p-4 md:p-6 pt-8 text-[11px] tracking-widest uppercase outline-none focus:border-black focus:ring-1 focus:ring-black transition-all min-h-[140px] md:min-h-[160px] resize-none leading-loose shadow-sm placeholder:text-gray-200"
//                   />
//                 </div>
//               </div>

//               {/* Totals Section */}
//               <div className="p-6 md:p-8 space-y-4 md:space-y-6">
//                 <div className="flex justify-between items-baseline">
//                   <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium">Subtotal</span>
//                   <span className="text-sm tracking-widest font-light">₹{totalPrice}</span>
//                 </div>
//                 <div className="flex justify-between items-baseline">
//                   <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium">Shipping</span>
//                   <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-green-600 font-bold">COMPLIMENTARY</span>
//                 </div>
                
//                 <div className="pt-6 md:pt-8 border-t border-gray-200 mt-2 md:mt-4">
//                   <div className="flex justify-between items-center mb-8 md:mb-10">
//                     <span className="text-[11px] font-bold uppercase tracking-[0.4em]">Total</span>
//                     <span className="text-3xl md:text-4xl font-light tracking-tighter text-gray-900">₹{totalPrice}</span>
//                   </div>
                  
//                   <button 
//                     onClick={handleCheckout}
//                     disabled={isSubmitting || cartItems.length === 0}
//                     className="group relative w-full py-5 md:py-6 bg-black text-white text-[11px] font-bold uppercase tracking-[0.5em] overflow-hidden transition-all hover:bg-[#1a1a1a] disabled:bg-gray-200 disabled:text-gray-400 active:scale-[0.98]"
//                   >
//                     <span className="relative z-10">{isSubmitting ? "Processing..." : "Confirm Purchase"}</span>
//                     {!isSubmitting && cartItems.length > 0 && (
//                       <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
//                     )}
//                   </button>
                  
//                   <div className="mt-6 md:mt-8 flex items-center justify-center gap-3 opacity-30">
//                     <div className="h-[0.5px] w-6 md:w-8 bg-black" />
//                     <p className="text-[7px] md:text-[8px] uppercase tracking-[0.4em] font-medium text-nowrap">Secure Archive Checkout</p>
//                     <div className="h-[0.5px] w-6 md:w-8 bg-black" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }














"use client";
import { useCart } from "@/context/CartContext"; 
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [address, setAddress] = useState("");
  const [isMounted, setIsMounted] = useState(false); // Hydration fix
  const { user } = useUser();
  const router = useRouter();

  // Ensure component is mounted before rendering cart items
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = async () => {
    if (cartItems.length === 0) return;
    if (!address.trim()) {
      toast.error("Please provide a shipping address");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          cartItems, 
          totalPrice, 
          shippingAddress: { 
            fullAddress: address,
            fullName: user?.fullName || "Guest Customer" 
          } 
        }),
      });
      
      const data = await response.json();
      if (response.ok) {
        toast.success("Order Placed Successfully!");
        clearCart();
        router.push("/orders");
      } else {
        toast.error(data.error || "Submission failed");
      }
    } catch (err) {
      toast.error("Network error.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // While mounting, show a simple loading state to prevent "Hydration Mismatch"
  if (!isMounted) return null;

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-24 md:pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-light uppercase tracking-tighter mb-12">Your Bag</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 border-t border-zinc-200">
            <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-8">Bag is currently empty</p>
            <Link href="/explore" className="text-[10px] font-bold uppercase tracking-widest border-b-2 border-black pb-1">
              Browse Collection
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Column: Items */}
            <div className="lg:col-span-2 space-y-8">
              {cartItems.map((item) => (
                <div key={item._id} className="flex gap-6 pb-8 border-b border-zinc-100 items-center">
                  <div className="relative w-24 h-32 bg-zinc-100 overflow-hidden">
                    <Image src={item.imageSrc} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="text-[12px] font-bold uppercase tracking-widest">{item.name}</h3>
                    <p className="text-[10px] text-zinc-500 uppercase">Qty: {item.quantity}</p>
                    <p className="text-sm font-medium">₹{item.price}</p>
                    <button 
                      onClick={() => removeFromCart(item._id)}
                      className="text-[9px] uppercase tracking-widest text-red-500 pt-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Checkout */}
            <div className="space-y-10">
              <div className="bg-white p-8 border border-zinc-200 shadow-sm space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Shipping Destination</label>
                  <textarea 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter full address..."
                    className="w-full border-b border-zinc-200 py-2 text-sm outline-none focus:border-black min-h-[100px] resize-none"
                  />
                </div>

                <div className="pt-4 border-t border-zinc-100">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest">Total</span>
                    <span className="text-2xl font-light tracking-tighter">₹{totalPrice}</span>
                  </div>
                  <button 
                    onClick={handleCheckout}
                    disabled={isSubmitting}
                    className="w-full bg-black text-white py-5 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-zinc-800 disabled:bg-zinc-200 transition-all"
                  >
                    {isSubmitting ? "Finalizing Order..." : "Confirm Checkout"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}