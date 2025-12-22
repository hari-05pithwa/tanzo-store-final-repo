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

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-[11px] uppercase tracking-[0.4em] text-gray-400">Error</h1>
        <p className="text-xl font-light mt-4">Product not found</p>
      </div>
    );
  }

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    toast.success(`${product.name} added to cart!`, {
      description: `Size: ${selectedSize} | Qty: ${quantity}`,
      duration: 3000,
    });
  };

  return (
    <section className="bg-[#FAFAFA] min-h-screen">
      {/* Reduced padding-top to bring content closer to Nav */}
      <div className="max-w-7xl mx-auto px-6 py-10 lg:py-16"> 
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-20 items-start">
          
          {/* Left Side: Image Display - Removed internal padding for full-bleed look */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-100">
              <Image
                src={product.imageSrc}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* Right Side: Info */}
          <div className="lg:col-span-5 flex flex-col pt-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-3">
              {product.gender === 'male' ? "Men's" : "Women's"} Collection
            </span>
            
            <h1 className="text-3xl xl:text-4xl font-light tracking-tight text-gray-900 mb-2">
              {product.name}
            </h1>
            
            <p className="text-xl font-light text-gray-500 mb-6">
              ₹{product.price}
            </p>

            <div className="space-y-6 border-t border-gray-200 pt-6">
              <p className="text-[14px] leading-relaxed text-gray-600 font-light">
                {product.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-[11px] uppercase tracking-widest text-gray-500">
                <p><span className="text-gray-900 font-medium">Color:</span> {product.color}</p>
                <p><span className="text-gray-900 font-medium">Material:</span> {product.material}</p>
              </div>
            </div>

            {/* Size Selector */}
            <div className="mt-10">
              <div className="flex justify-between items-end mb-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-gray-900">Select Size</span>
                <span className="text-[10px] text-gray-400 underline cursor-pointer uppercase tracking-widest">Size Guide</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      w-12 h-12 flex items-center justify-center
                      rounded-full text-[11px] font-bold transition-all duration-300
                      ${selectedSize === size
                        ? "bg-black text-white shadow-lg"
                        : "bg-white text-gray-400 border border-gray-100 hover:border-black hover:text-black"
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & CTA */}
            <div className="mt-10 flex gap-3">
              <div className="relative">
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="appearance-none h-12 w-16 bg-white border border-gray-100 rounded-full px-4 text-xs font-medium cursor-pointer"
                >
                  {[1, 2, 3, 4, 5].map((qty) => (
                    <option key={qty} value={qty}>{qty}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                   <svg width="8" height="5" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 h-12 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-gray-800 transition-all shadow-lg active:scale-95"
              >
                Add to Bag — {selectedSize}
              </button>
            </div>

            {/* Value Props */}
            <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 gap-y-3">
               <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest text-gray-400">
                 <div className="w-1 h-1 rounded-full bg-green-500"/> Free Shipping
               </div>
               <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest text-gray-400">
                 <div className="w-1 h-1 rounded-full bg-green-500"/> Secure Checkout
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
