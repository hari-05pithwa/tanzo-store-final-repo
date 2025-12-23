// "use client";

// import { useEffect, useState } from "react";
// import ProductCard from "../components/ProductCard";

// export default function MenPage() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("/api/products/men")
//       .then((res) => res.json())
//       .then((data) => setProducts(data.products))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="px-6 md:px-14 lg:px-24 py-10">
//       <h2 className="text-3xl font-semibold text-center mb-14">
//         Men’s Products
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {products.map((product) => (
//           <ProductCard
//             key={product.slug}
//             photo={product.imageSrc}
//             title={product.name}
//             price={product.price}
//             slug={product.slug}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import ProductCard from "../components/ProductCard";

// export default function MenPage() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("/api/products/men")
//       .then((res) => res.json())
//       .then((data) => setProducts(data.products))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="bg-[#FAFAFA] min-h-screen px-6 md:px-14 lg:px-24 py-16 lg:py-24">
//       <div className="max-w-7xl mx-auto">
//         {/* Minimalist Heading Style */}
//         <div className="text-center mb-20">
//           <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 block mb-4">
//             Collection
//           </span>
//           <h2 className="text-4xl font-light tracking-tight text-gray-900">
//             Men's Essentials
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
//           {products.map((product) => (
//             <ProductCard
//               key={product.slug}
//               photo={product.imageSrc}
//               title={product.name}
//               price={product.price}
//               slug={product.slug}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }








// og
// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function MenPage() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("/api/products/men")
//       .then((res) => res.json())
//       .then((data) => setProducts(data.products))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="bg-white min-h-screen">
//       {/* Refined Minimal Header */}
//       <header className="pt-24 pb-16 px-6 md:px-14">
//         <div className="max-w-7xl mx-auto border-b border-gray-100 pb-12 text-center md:text-left">
//           <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
//             The Men Edit
//           </span>
//           <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-gray-900 leading-tight">
//             Elevated <br /> 
//             <span className="font-serif italic text-gray-300">Essentials</span>
//           </h1>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-6 md:px-14 pb-32">
//         {/* Boutique Product Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
//           {products.map((product, index) => (
//             <Link 
//               key={product.slug} 
//               href={`/product/${product.slug}`} 
//               className="group relative flex flex-col"
//             >
//               {/* Subtle Ranking/Index Number (Matching Top Sellers Style) */}
//               <div className="absolute -top-6 -left-2 z-10 text-[70px] font-bold text-gray-50 pointer-events-none group-hover:text-blue-50 transition-colors duration-700 italic">
//                 {index + 1 < 10 ? `0${index + 1}` : index + 1}
//               </div>

//               {/* Image Container - Using the Boutique Card Style */}
//               <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-50 mb-6">
//                 <Image
//                   src={product.imageSrc}
//                   alt={product.name}
//                   fill
//                   sizes="(max-width: 768px) 100vw, 33vw"
//                   className="object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
//                 />
                
//                 {/* Floating Price Tag */}
//                 <div className="absolute top-4 right-4 bg-white px-3 py-1 text-[11px] font-bold tracking-widest shadow-sm">
//                   ₹{product.price}
//                 </div>

//                 {/* Hover Quick View Detail */}
//                 <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
//                    <span className="w-full bg-white py-3 text-center text-[10px] font-bold uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
//                       View Details
//                    </span>
//                 </div>
//               </div>

//               {/* Product Info Area */}
//               <div className="relative pl-1">
//                 <h3 className="text-lg font-light text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
//                   {product.name}
//                 </h3>
//                 {/* Animated Line Underline */}
//                 <div className="h-[1px] w-8 bg-gray-200 group-hover:w-full group-hover:bg-blue-600 transition-all duration-700" />
//                 <p className="mt-4 text-[9px] text-gray-400 uppercase tracking-[0.2em] font-medium">
//                    Limited Release • Men's 2025
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }










// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function MenPage() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("/api/products/men")
//       .then((res) => res.json())
//       .then((data) => setProducts(data.products))
//       .catch((err) => console.log(err));
//   }, []);

//   // 1. Container variants to handle the staggered timing
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1, // Delay between each product appearing
//         delayChildren: 0.3,   // Initial delay before the first one starts
//       },
//     },
//   };

//   // 2. Individual item variants for the "rise up" effect
//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
//     },
//   };

//   return (
//     <div className="bg-white min-h-screen">
//       {/* Refined Minimal Header */}
//       <header className="pt-24 pb-16 px-6 md:px-14">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto border-b border-gray-100 pb-12 text-center md:text-left"
//         >
//           <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
//             The Men Edit
//           </span>
//           <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-gray-900 leading-tight">
//             Elevated <br /> 
//             <span className="font-serif italic text-gray-300">Essentials</span>
//           </h1>
//         </motion.div>
//       </header>

//       <main className="max-w-7xl mx-auto px-6 md:px-14 pb-32">
//         {/* 3. Wrap the Grid with motion and whileInView */}
//         {/* Change this part in your MenPage.js */}
// <motion.div 
//   variants={containerVariants}
//   initial="hidden"
//   whileInView="visible"
//   // amount: "some" is more forgiving than 0.1
//   // margin: "-50px" ensures it triggers even with a sticky header
//   viewport={{ once: true, amount: "some", margin: "0px 0px -50px 0px" }} 
//   className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24"
// >
//           {products.map((product, index) => (
//             <motion.div 
//               key={product.slug || index} 
//               variants={itemVariants}
//             >
//               <Link 
//                 href={`/product/${product.slug}`} 
//                 className="group relative flex flex-col"
//               >
//                 {/* Ranking Number */}
//                 <div className="absolute -top-6 -left-2 z-10 text-[70px] font-bold text-gray-50 pointer-events-none group-hover:text-blue-50 transition-colors duration-700 italic">
//                   {index + 1 < 10 ? `0${index + 1}` : index + 1}
//                 </div>

//                 {/* Image Container */}
//                 <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-50 mb-6">
//                   <Image
//                     src={product.imageSrc}
//                     alt={product.name}
//                     fill
//                     sizes="(max-width: 768px) 100vw, 33vw"
//                     className="object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
//                   />
                  
//                   <div className="absolute top-4 right-4 bg-white px-3 py-1 text-[11px] font-bold tracking-widest shadow-sm">
//                     ₹{product.price}
//                   </div>

//                   <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
//                      <span className="w-full bg-white py-3 text-center text-[10px] font-bold uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
//                        View Details
//                      </span>
//                   </div>
//                 </div>

//                 {/* Product Info Area */}
//                 <div className="relative pl-1">
//                   <h3 className="text-lg font-light text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
//                     {product.name}
//                   </h3>
//                   <div className="h-[1px] w-8 bg-gray-200 group-hover:w-full group-hover:bg-blue-600 transition-all duration-700" />
//                   <p className="mt-4 text-[9px] text-gray-400 uppercase tracking-[0.2em] font-medium">
//                      Limited Release • Men's 2025
//                   </p>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </motion.div>
//       </main>
//     </div>
//   );
// }





// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function MenPage() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("/api/products/men")
//       .then((res) => res.json())
//       .then((data) => setProducts(data.products || []))
//       .catch((err) => console.log(err));
//   }, []);

//   // Animation for the "Row" container
//   const rowVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2, // The one-by-one effect
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
//     },
//   };

//   // Helper function to split products into rows of 3
//   const chunkProducts = (arr, size) => {
//     return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
//       arr.slice(i * size, i * size + size)
//     );
//   };

//   const productRows = chunkProducts(products, 3);

//   return (
//     <div className="bg-white min-h-screen">
//       <header className="pt-24 pb-16 px-6 md:px-14">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-7xl mx-auto border-b border-gray-100 pb-12 text-center md:text-left"
//         >
//           <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
//             The Men Edit
//           </span>
//           <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-gray-900 leading-tight">
//             Elevated <br /> 
//             <span className="font-serif italic text-gray-300">Essentials</span>
//           </h1>
//         </motion.div>
//       </header>

//       <main className="max-w-7xl mx-auto px-6 md:px-14 pb-32 flex flex-col gap-y-24">
//         {productRows.map((row, rowIndex) => (
//           <motion.div 
//             key={rowIndex}
//             variants={rowVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }} // Trigger Row 2 only when Row 2 is seen
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24"
//           >
//             {row.map((product, index) => (
//               <motion.div key={product.slug || index} variants={itemVariants}>
//                 <Link href={`/product/${product.slug}`} className="group relative flex flex-col">
//                   {/* Ranking Number (Calculated across rows) */}
//                   <div className="absolute -top-6 -left-2 z-10 text-[70px] font-bold text-gray-50 pointer-events-none group-hover:text-blue-50 transition-colors duration-700 italic">
//                     {rowIndex * 3 + index + 1 < 10 ? `0${rowIndex * 3 + index + 1}` : rowIndex * 3 + index + 1}
//                   </div>

//                   {/* Image Area */}
//                   <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-50 mb-6">
//                     <Image
//                       src={product.imageSrc}
//                       alt={product.name}
//                       fill
//                       priority={rowIndex === 0} // Only priority for first row
//                       sizes="(max-width: 768px) 100vw, 33vw"
//                       className="object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
//                     />
//                     <div className="absolute top-4 right-4 bg-white px-3 py-1 text-[11px] font-bold tracking-widest shadow-sm">
//                       ₹{product.price}
//                     </div>
//                   </div>

//                   {/* Text Area */}
//                   <div className="relative pl-1">
//                     <h3 className="text-lg font-light text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
//                       {product.name}
//                     </h3>
//                     <div className="h-[1px] w-8 bg-gray-200 group-hover:w-full group-hover:bg-blue-600 transition-all duration-700" />
//                     <p className="mt-4 text-[9px] text-gray-400 uppercase tracking-[0.2em] font-medium">
//                        Limited Release • Men's 2025
//                     </p>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </motion.div>
//         ))}
//       </main>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function MenPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products/men")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const rowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  const chunkProducts = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const productRows = chunkProducts(products, 3);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <motion.div 
          animate={{ scaleX: [0, 1, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-16 h-[1px] bg-black mb-6"
        />
        <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-gray-400">
          Retrieving Men Edit
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <header className="pt-24 pb-16 px-6 md:px-14">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-7xl mx-auto border-b border-gray-100 pb-12 text-center md:text-left"
        >
          <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
            The Men Edit
          </span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-gray-900 leading-tight">
            Elevated <br /> 
            <span className="font-serif italic text-gray-300">Essentials</span>
          </h1>
        </motion.div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-14 pb-32 flex flex-col gap-y-24">
        {productRows.map((row, rowIndex) => (
          <motion.div 
            key={rowIndex}
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24"
          >
            {row.map((product, index) => (
              <motion.div key={product.slug || index} variants={itemVariants}>
                <Link href={`/product/${product.slug}`} className="group relative flex flex-col">
                  <div className="absolute -top-6 -left-2 z-10 text-[70px] font-bold text-gray-50 pointer-events-none group-hover:text-blue-50 transition-colors duration-700 italic">
                    {rowIndex * 3 + index + 1 < 10 ? `0${rowIndex * 3 + index + 1}` : rowIndex * 3 + index + 1}
                  </div>

                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-50 mb-6 shadow-sm">
                    <Image
                      src={product.imageSrc}
                      alt={product.name}
                      fill
                      priority={rowIndex === 0}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 text-[11px] font-bold tracking-widest shadow-sm">
                      ₹{product.price}
                    </div>
                  </div>

                  <div className="relative pl-1">
                    <h3 className="text-lg font-light text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <div className="h-[1px] w-8 bg-gray-200 group-hover:w-full group-hover:bg-blue-600 transition-all duration-700" />
                    <p className="mt-4 text-[9px] text-gray-400 uppercase tracking-[0.2em] font-medium">
                       Limited Release • Men's 2025
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </main>
    </div>
  );
}