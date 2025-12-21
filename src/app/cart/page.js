"use client";

import { useCart } from "@/context/CartContext"; 
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [removingItem, setRemovingItem] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleRemove = (id, size) => {
    setRemovingItem(`${id}-${size}`);
    setTimeout(() => {
      removeFromCart(id, size);
      setRemovingItem(null);
    }, 350);
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.price * item.quantity),
    0
  );

  const handleCheckout = async () => {
    if (cartItems.length === 0) return;
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems, totalPrice }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success("Order Placed Successfully!");
        clearCart();
        router.push("/");
      } else {
        toast.error(data.error || "Please sign in to checkout");
      }
    } catch (err) {
      toast.error("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900">
      <main className="max-w-7xl mx-auto px-6 py-10 lg:py-16">
        
        {/* Page Header */}
        <div className="mb-10 flex items-baseline justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 block mb-2">
              Review Bag
            </span>
            <h1 className="text-3xl font-light tracking-tight">Your Selection</h1>
          </div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
            {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'}
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-32 border border-dashed border-gray-200 rounded-3xl bg-white/50 backdrop-blur-sm">
            <h2 className="text-xl font-light mb-8 text-gray-500 italic">Your bag is currently empty.</h2>
            <Link 
              href="/" 
              className="px-12 py-4 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-gray-800 transition-all rounded-full shadow-lg"
            >
              Start Exploring
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Side: Solid White Section */}
            <div className="lg:col-span-7 xl:col-span-8 bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 lg:p-12">
              <div className="flex flex-col">
                {cartItems.map((item, index) => (
                  <div 
                    key={`${item._id}-${item.size}`} 
                    className={`flex gap-6 lg:gap-10 py-10 first:pt-0 border-b border-gray-200/60 transition-all duration-500 last:border-0 ${
                      removingItem === `${item._id}-${item.size}` ? "opacity-0 -translate-x-5" : "opacity-100"
                    }`}
                  >
                    {/* Compact Image Container */}
                    <div className="relative w-24 sm:w-32 aspect-[4/5] bg-gray-50 rounded-2xl overflow-hidden shrink-0 border border-gray-100">
                      <Image 
                        src={item.imageSrc} 
                        alt={item.name} 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                    
                    {/* Item Info Detail */}
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <Link href={`/product/${item.slug}`} className="hover:text-gray-500 transition-colors">
                            <h3 className="text-lg font-light tracking-tight mb-2">{item.name}</h3>
                          </Link>
                          <div className="flex gap-4 items-center">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                              Size: <span className="text-gray-900">{item.size}</span>
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                              Qty: <span className="text-gray-900">{item.quantity}</span>
                            </span>
                          </div>
                        </div>
                        <p className="text-[15px] font-medium text-gray-900">₹{item.price * item.quantity}</p>
                      </div>

                      {/* Improved Minimalist Remove Button */}
                      <button 
                        onClick={() => handleRemove(item._id, item.size)} 
                        className="w-fit flex items-center gap-2 group mt-6"
                      >
                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-red-50 transition-colors border border-gray-100">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 group-hover:text-red-500 transition-colors">
                            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
                          </svg>
                        </div>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-red-500 transition-colors">
                          Remove
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Order Summary */}
            <div className="lg:col-span-5 xl:col-span-4 sticky top-24">
              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-900 mb-8 border-b border-gray-100 pb-4">
                  Summary
                </h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-sm text-gray-500 font-light">
                    <span>Subtotal</span>
                    <span>₹{totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 font-light">
                    <span>Shipping</span>
                    <span className="text-green-600 uppercase text-[10px] font-bold tracking-tighter">Complimentary</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6 flex justify-between items-baseline mb-10">
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-900">Total</p>
                  <p className="text-3xl font-light tracking-tighter text-gray-900">₹{totalPrice}</p>
                </div>

                <button 
                  onClick={handleCheckout} 
                  disabled={isSubmitting}
                  className="w-full py-5 bg-black text-white text-[11px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-gray-800 transition-all shadow-xl active:scale-95 disabled:bg-gray-300"
                >
                  {isSubmitting ? "Processing..." : "Place Order"}
                </button>

                <p className="mt-6 text-[9px] text-gray-400 text-center uppercase tracking-widest">
                  Secure Checkout Protected
                </p>
              </div>
            </div>

          </div>
        )}
      </main>
    </div>
  );
}