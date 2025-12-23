// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function TopSellers() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("/api/products")
//       .then((res) => res.json())
//       .then((data) => {
//         const allProducts = data.products || [];
//         // Show the top 3 items on the home page
//         setProducts(allProducts.slice(0, 3));
//       })
//       .catch((err) => console.error("Error fetching top sellers:", err));
//   }, []);

//   return (
//     <section className="bg-[#FAFAFA] py-32">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-4 block text-center">
//           Customer Favorites
//         </span>
//         <h2 className="text-4xl font-light tracking-tight text-center text-gray-900 mb-20">
//           Top Sellers
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16">
//           {products.map((product) => (
//             <Link 
//               key={product._id} 
//               href={`/product/${product.slug}`} 
//               className="group flex flex-col items-center text-center"
//             >
//               {/* Product Image Container */}
//               <div className="w-full aspect-[4/5] overflow-hidden mb-8 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center p-4 transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
//                 <Image
//                   src={product.imageSrc}
//                   alt={product.name}
//                   width={400}
//                   height={500}
//                   className="transition duration-500 group-hover:scale-105 object-contain"
//                 />
//               </div>

//               {/* Info */}
//               <h3 className="text-lg font-medium text-gray-800 mb-2 tracking-tight">
//                 {product.name}
//               </h3>
//               <p className="text-gray-500 font-light mb-6">
//                 ₹{product.price}
//               </p>

//               {/* CTA */}
//               <button className="px-8 py-2.5 border border-black text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
//                 View Detail
//               </button>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// // }
// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function TopSellers() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("/api/products")
//       .then((res) => res.json())
//       .then((data) => {
//         const allProducts = data.products || [];
//         setProducts(allProducts.slice(0, 3));
//       })
//       .catch((err) => console.error("Error fetching top sellers:", err));
//   }, []);

//   return (
//     <section className="bg-[#FAFAFA] py-32">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-4 block text-center">
//           Customer Favorites
//         </span>
//         <h2 className="text-4xl font-light tracking-tight text-center text-gray-900 mb-20">
//           Top Sellers
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16">
//           {products.map((product) => (
//             <Link 
//               key={product._id} 
//               href={`/product/${product.slug}`} 
//               className="group flex flex-col items-center"
//             >
//               {/* Image Container: Gallery Style */}
//               <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 mb-8 transition-all duration-700 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-2">
//                 <Image
//                   src={product.imageSrc}
//                   alt={product.name}
//                   fill
//                   sizes="(max-width: 768px) 100vw, 33vw"
//                   className="object-cover transition-transform duration-700 scale-[1.01] group-hover:scale-110"
//                 />
//                 {/* Subtle Overlay on Hover */}
//                 <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
//               </div>

//               {/* Info: Minimalist Boutique Style */}
//               <div className="text-center px-4">
//                 <h3 className="text-[15px] font-medium text-gray-900 mb-1 tracking-tight">
//                   {product.name}
//                 </h3>
//                 <p className="text-sm font-light text-gray-500 mb-6">
//                   ₹{product.price}
//                 </p>

//                 {/* Refined Button */}
//                 <div className="overflow-hidden inline-block">
//                   <span className="relative inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-900 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-900 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-500 after:origin-left pb-1">
//                     View Detail
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }








// og
// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function TopSellers() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("/api/products")
//       .then((res) => res.json())
//       .then((data) => {
//         const allProducts = data.products || [];
//         setProducts(allProducts.slice(0, 3));
//       })
//       .catch((err) => console.error("Error fetching top sellers:", err));
//   }, []);

//   return (
//     <section className="bg-white py-24 sm:py-32 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
//           <div className="max-w-xl">
//             <span className="text-blue-600 text-[11px] font-bold uppercase tracking-[0.3em] mb-3 block">
//               The Hall of Fame
//             </span>
//             <h2 className="text-5xl font-light tracking-tight text-gray-900 leading-tight">
//               Our Most <br /> <span className="font-serif italic text-gray-400">Wanted</span> Pieces
//             </h2>
//           </div>
//           <Link 
//             href="/explore" 
//             className="text-sm font-medium border-b border-gray-900 pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"
//           >
//             Explore All Products
//           </Link>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
//           {products.map((product, index) => (
//             <Link 
//               key={product._id} 
//               href={`/product/${product.slug}`} 
//               className="group relative flex flex-col"
//             >
//               {/* Ranking Number (Distinguishes from Category Pages) */}
//               <div className="absolute -top-6 -left-4 z-10 text-[80px] font-bold text-gray-100/80 pointer-events-none transition-colors group-hover:text-blue-50/50 italic">
//                 0{index + 1}
//               </div>

//               {/* Image Container */}
//               <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm bg-gray-50 mb-6">
//                 <Image
//                   src={product.imageSrc}
//                   alt={product.name}
//                   fill
//                   sizes="(max-width: 768px) 100vw, 33vw"
//                   className="object-cover grayscale-[20%] transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
//                 />
                
//                 {/* Floating Price Tag */}
//                 <div className="absolute top-4 right-4 bg-white px-3 py-1 text-[12px] font-bold tracking-widest shadow-sm">
//                   ₹{product.price}
//                 </div>

//                 {/* Hover Action Overlay */}
//                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
//                   <span className="bg-white text-black px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                     Quick View
//                   </span>
//                 </div>
//               </div>

//               {/* Info Area: Left Aligned for Editorial Look */}
//               <div className="relative pl-2">
//                 <h3 className="text-lg font-light text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
//                   {product.name}
//                 </h3>
//                 <div className="h-[1px] w-8 bg-gray-300 group-hover:w-full group-hover:bg-blue-600 transition-all duration-700" />
//                 <p className="mt-3 text-[10px] text-gray-400 uppercase tracking-widest">
//                   Limited Edition • {product.category || 'New Arrival'}
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }








"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TopSellers() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        const allProducts = data.products || [];
        setProducts(allProducts.slice(0, 3));
      })
      .catch((err) => console.error("Error fetching top sellers:", err));
  }, []);

  // Animation variants for the container (staggers the children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each product appearing
        delayChildren: 0.1,
      },
    },
  };

  // Animation variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section className="bg-white py-24 sm:py-32 overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of section is visible
      >
        {/* Header Section Reveal */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-xl">
            <span className="text-blue-600 text-[11px] font-bold uppercase tracking-[0.3em] mb-3 block">
              The Hall of Fame
            </span>
            <h2 className="text-5xl font-light tracking-tight text-gray-900 leading-tight">
              Our Most <br /> <span className="font-serif italic text-gray-400">Wanted</span> Pieces
            </h2>
          </div>
          <Link 
            href="/explore" 
            className="text-sm font-medium border-b border-gray-900 pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"
          >
            Explore All Products
          </Link>
        </motion.div>

        {/* Product Grid with Staggered Reveal */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
        >
          {products.map((product, index) => (
            <motion.div key={product._id || index} variants={itemVariants}>
              <Link 
                href={`/product/${product.slug}`} 
                className="group relative flex flex-col"
              >
                {/* Ranking Number */}
                <div className="absolute -top-6 -left-4 z-10 text-[80px] font-bold text-gray-100/80 pointer-events-none transition-colors group-hover:text-blue-50/50 italic">
                  0{index + 1}
                </div>

                {/* Image Container */}
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm bg-gray-50 mb-6">
                  <Image
                    src={product.imageSrc}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover grayscale-[20%] transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 text-[12px] font-bold tracking-widest shadow-sm">
                    ₹{product.price}
                  </div>

                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="bg-white text-black px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      Quick View
                    </span>
                  </div>
                </div>

                {/* Info Area */}
                <div className="relative pl-2">
                  <h3 className="text-lg font-light text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="h-[1px] w-8 bg-gray-300 group-hover:w-full group-hover:bg-blue-600 transition-all duration-700" />
                  <p className="mt-3 text-[10px] text-gray-400 uppercase tracking-widest">
                    Limited Edition • {product.category || 'New Arrival'}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}