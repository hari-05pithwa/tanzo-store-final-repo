// "use client";

// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { useCart } from "@/context/CartContext";
// import { toast } from "sonner";

// export default function ProductClient({ product }) {
//   const { addToCart } = useCart();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   if (!product) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-[60vh]">
//         <h1 className="text-[11px] uppercase tracking-[0.4em] text-gray-400">Error</h1>
//         <p className="text-xl font-light mt-4">Product not found</p>
//       </div>
//     );
//   }

//   const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
//   const [quantity, setQuantity] = useState(1);

//   const handleAddToCart = () => {
//     addToCart(product, selectedSize, quantity);
//     toast.success(`${product.name} added to cart!`, {
//       description: `Size: ${selectedSize} | Qty: ${quantity}`,
//       duration: 3000,
//     });
//   };

//   return (
//     <section className="bg-[#FAFAFA] min-h-screen">
//       {/* Reduced padding-top to bring content closer to Nav */}
//       <div className="max-w-7xl mx-auto px-6 py-10 lg:py-16"> 
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-20 items-start">
          
//           {/* Left Side: Image Display - Removed internal padding for full-bleed look */}
//           <div className="lg:col-span-7">
//             <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-100">
//               <Image
//                 src={product.imageSrc}
//                 alt={product.name}
//                 fill
//                 className="object-cover transition-transform duration-700 hover:scale-105"
//                 priority
//               />
//             </div>
//           </div>

//           {/* Right Side: Info */}
//           <div className="lg:col-span-5 flex flex-col pt-4">
//             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-3">
//               {product.gender === 'male' ? "Men's" : "Women's"} Collection
//             </span>
            
//             <h1 className="text-3xl xl:text-4xl font-light tracking-tight text-gray-900 mb-2">
//               {product.name}
//             </h1>
            
//             <p className="text-xl font-light text-gray-500 mb-6">
//               ₹{product.price}
//             </p>

//             <div className="space-y-6 border-t border-gray-200 pt-6">
//               <p className="text-[14px] leading-relaxed text-gray-600 font-light">
//                 {product.description}
//               </p>
              
//               <div className="grid grid-cols-2 gap-4 text-[11px] uppercase tracking-widest text-gray-500">
//                 <p><span className="text-gray-900 font-medium">Color:</span> {product.color}</p>
//                 <p><span className="text-gray-900 font-medium">Material:</span> {product.material}</p>
//               </div>
//             </div>

//             {/* Size Selector */}
//             <div className="mt-10">
//               <div className="flex justify-between items-end mb-4">
//                 <span className="text-[11px] font-bold uppercase tracking-widest text-gray-900">Select Size</span>
//                 <span className="text-[10px] text-gray-400 underline cursor-pointer uppercase tracking-widest">Size Guide</span>
//               </div>
//               <div className="flex gap-2 flex-wrap">
//                 {product.sizes.map((size) => (
//                   <button
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     className={`
//                       w-12 h-12 flex items-center justify-center
//                       rounded-full text-[11px] font-bold transition-all duration-300
//                       ${selectedSize === size
//                         ? "bg-black text-white shadow-lg"
//                         : "bg-white text-gray-400 border border-gray-100 hover:border-black hover:text-black"
//                       }
//                     `}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Quantity & CTA */}
//             <div className="mt-10 flex gap-3">
//               <div className="relative">
//                 <select
//                   value={quantity}
//                   onChange={(e) => setQuantity(Number(e.target.value))}
//                   className="appearance-none h-12 w-16 bg-white border border-gray-100 rounded-full px-4 text-xs font-medium cursor-pointer"
//                 >
//                   {[1, 2, 3, 4, 5].map((qty) => (
//                     <option key={qty} value={qty}>{qty}</option>
//                   ))}
//                 </select>
//                 <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
//                    <svg width="8" height="5" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
//                 </div>
//               </div>

//               <button
//                 onClick={handleAddToCart}
//                 className="flex-1 h-12 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-gray-800 transition-all shadow-lg active:scale-95"
//               >
//                 Add to Bag — {selectedSize}
//               </button>
//             </div>

//             {/* Value Props */}
//             <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 gap-y-3">
//                <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest text-gray-400">
//                  <div className="w-1 h-1 rounded-full bg-green-500"/> Free Shipping
//                </div>
//                <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest text-gray-400">
//                  <div className="w-1 h-1 rounded-full bg-green-500"/> Secure Checkout
//                </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// "use client";

// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { useCart } from "@/context/CartContext";
// import { toast } from "sonner";

// export default function ProductClient({ product }) {
//   const { addToCart } = useCart();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   if (!product) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-[60vh]">
//         <h1 className="text-[11px] uppercase tracking-[0.4em] text-gray-400">Error</h1>
//         <p className="text-xl font-light mt-4">Product not found</p>
//       </div>
//     );
//   }

//   const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
//   const [quantity, setQuantity] = useState(1);

//   const handleAddToCart = () => {
//     addToCart(product, selectedSize, quantity);
//     toast.success(`${product.name} added to cart!`, {
//       description: `Size: ${selectedSize} | Qty: ${quantity}`,
//       duration: 3000,
//     });
//   };

//   return (
//     <section className="bg-[#FAFAFA] min-h-screen">
//       {/* Reduced padding-top to bring content closer to Nav */}
//       <div className="max-w-7xl mx-auto px-6 py-10 lg:py-16"> 
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-20 items-start">
          
//           {/* Left Side: Image Display - Removed internal padding for full-bleed look */}
//           <div className="lg:col-span-7">
//             <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-100">
//               <Image
//                 src={product.imageSrc}
//                 alt={product.name}
//                 fill
//                 className="object-cover transition-transform duration-700 hover:scale-105"
//                 priority
//               />
//             </div>
//           </div>

//           {/* Right Side: Info */}
//           <div className="lg:col-span-5 flex flex-col pt-4">
//             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-3">
//               {product.gender === 'male' ? "Men's" : "Women's"} Collection
//             </span>
            
//             <h1 className="text-3xl xl:text-4xl font-light tracking-tight text-gray-900 mb-2">
//               {product.name}
//             </h1>
            
//             <p className="text-xl font-light text-gray-500 mb-6">
//               ₹{product.price}
//             </p>

//             <div className="space-y-6 border-t border-gray-200 pt-6">
//               <p className="text-[14px] leading-relaxed text-gray-600 font-light">
//                 {product.description}
//               </p>
              
//               <div className="grid grid-cols-2 gap-4 text-[11px] uppercase tracking-widest text-gray-500">
//                 <p><span className="text-gray-900 font-medium">Color:</span> {product.color}</p>
//                 <p><span className="text-gray-900 font-medium">Material:</span> {product.material}</p>
//               </div>
//             </div>

//             {/* Size Selector */}
//             <div className="mt-10">
//               <div className="flex justify-between items-end mb-4">
//                 <span className="text-[11px] font-bold uppercase tracking-widest text-gray-900">Select Size</span>
//                 <span className="text-[10px] text-gray-400 underline cursor-pointer uppercase tracking-widest">Size Guide</span>
//               </div>
//               <div className="flex gap-2 flex-wrap">
//                 {product.sizes.map((size) => (
//                   <button
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     className={`
//                       w-12 h-12 flex items-center justify-center
//                       rounded-full text-[11px] font-bold transition-all duration-300
//                       ${selectedSize === size
//                         ? "bg-black text-white shadow-lg"
//                         : "bg-white text-gray-400 border border-gray-100 hover:border-black hover:text-black"
//                       }
//                     `}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Quantity & CTA */}
//             <div className="mt-10 flex gap-3">
//               <div className="relative">
//                 <select
//                   value={quantity}
//                   onChange={(e) => setQuantity(Number(e.target.value))}
//                   className="appearance-none h-12 w-16 bg-white border border-gray-100 rounded-full px-4 text-xs font-medium cursor-pointer"
//                 >
//                   {[1, 2, 3, 4, 5].map((qty) => (
//                     <option key={qty} value={qty}>{qty}</option>
//                   ))}
//                 </select>
//                 <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
//                    <svg width="8" height="5" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
//                 </div>
//               </div>

//               <button
//                 onClick={handleAddToCart}
//                 className="flex-1 h-12 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-gray-800 transition-all shadow-lg active:scale-95"
//               >
//                 Add to Bag — {selectedSize}
//               </button>
//             </div>

//             {/* Value Props */}
//             <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 gap-y-3">
//                <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest text-gray-400">
//                  <div className="w-1 h-1 rounded-full bg-green-500"/> Free Shipping
//                </div>
//                <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest text-gray-400">
//                  <div className="w-1 h-1 rounded-full bg-green-500"/> Secure Checkout
//                </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

export default function ProductClient({ product }) {
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-[11px] uppercase tracking-[0.4em] text-gray-400">Error</h1>
        <p className="text-xl font-light mt-4">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    toast.success(`${product.name} added to cart!`, {
      description: `Size: ${selectedSize} | Qty: ${quantity}`,
      duration: 3000,
    });
  };

  return (
    <section className="bg-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-10 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-24 items-start">
          
          {/* LEFT SIDE: Main Architectural Image Only */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F9F9F9]">
              <Image
                src={product.imageSrc}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                priority
              />
              {/* Boutique Tag */}
              <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em]">
                Edition 2025
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Editorial Info Panel */}
          <div className="lg:col-span-5 flex flex-col lg:sticky lg:top-32">
            <div className="mb-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-blue-600 mb-4 block">
                {product.gender === 'male' ? "Men" : "Women"} <span className="font-serif italic text-gray-400 lowercase font-light tracking-normal ml-1">Archive</span>
              </span>
              
              <h1 className="text-4xl xl:text-5xl font-light tracking-tighter text-gray-900 mb-4 uppercase leading-none">
                {product.name}
              </h1>
              
              <div className="flex items-baseline gap-4">
                <p className="text-2xl  text-gray-700">
                  ₹{product.price}
                </p>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8 border-y border-gray-100 py-10">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Description</h4>
                <p className="text-md leading-relaxed text-gray-700 font-light">
                  {product.description}
                </p>
              </div>
              
              <div className="flex gap-10 text-[11px] uppercase tracking-widest">
                <p><span className="text-gray-400">Color:</span> <span className="ml-2 font-medium">{product.color}</span></p>
                <p><span className="text-gray-400">Material:</span> <span className="ml-2 font-medium">{product.material}</span></p>
              </div>
            </div>

            {/* SIZE SELECTOR */}
            <div className="mt-12">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-900">Select Size</span>
                <button className="text-[10px] text-gray-400 hover:text-black transition-colors underline underline-offset-4 uppercase tracking-widest">Size Guide</button>
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      h-14 flex items-center justify-center
                      text-[12px] font-bold transition-all duration-500
                      ${selectedSize === size
                        ? "bg-black text-white"
                        : "bg-white text-gray-900 border border-gray-100 hover:border-black"
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* QUANTITY & ACTION */}
            <div className="mt-10 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                 <div className="flex items-center border border-gray-200">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-14 flex items-center justify-center text-lg hover:bg-gray-50 transition-colors">-</button>
                    <span className="w-12 h-14 flex items-center justify-center font-bold text-sm">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-14 flex items-center justify-center text-lg hover:bg-gray-50 transition-colors">+</button>
                 </div>
                 
                 <button
                    onClick={handleAddToCart}
                    className="flex-1 h-14 bg-black text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:scale-102 hover:bg-slate-800 transition-all duration-500 shadow-xl active:scale-95"
                  >
                    Add to Bag — {selectedSize}
                  </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-col gap-4 border-t border-gray-50 pt-8">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-gray-400">
                    <div className="w-8 h-[1px] bg-gray-200" />
                    <span>Complimentary Shipping on all orders</span>
                </div>
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-gray-400">
                    <div className="w-8 h-[1px] bg-gray-200" />
                    <span>14-Day Returns Policy</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}