// "use client";

// import { useEffect, useState } from "react";
// import ProductCard from "../components/ProductCard";

// export default function WomenPage() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch from your new women's API
//     fetch("/api/products/women")
//       .then((res) => res.json())
//       .then((data) => setProducts(data.products))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="px-6 md:px-14 lg:px-24 py-10">
//       <h2 className="text-3xl font-semibold text-center mb-14">
//         Women’s Products
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

// export default function WomenPage() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("/api/products/women")
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
//             Women's Essentials
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








//og
// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function WomenPage() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("/api/products/women")
//       .then((res) => res.json())
//       .then((data) => setProducts(data.products || []))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="bg-white min-h-screen">
//       {/* Refined Minimal Header */}
//       <header className="pt-24 pb-16 px-6 md:px-14">
//         <div className="max-w-7xl mx-auto border-b border-gray-100 pb-12 text-center md:text-left">
//           <span className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
//             The Women Edit
//           </span>
//           <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-gray-900 leading-tight">
//             Graceful <br /> 
//             <span className="font-serif italic text-gray-300">Silhouettes</span>
//           </h1>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-6 md:px-14 pb-32">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
//           {products.map((product, index) => (
//             <Link 
//               key={product.slug} 
//               href={`/product/${product.slug}`} 
//               className="group relative flex flex-col"
//             >
//               {/* Boutique Numbering - Gold Tint */}
//               <div className="absolute -top-6 -left-2 z-10 text-[70px] font-bold text-gray-50 pointer-events-none group-hover:text-[#F9F5EB] transition-colors duration-700 italic">
//                 {index + 1 < 10 ? `0${index + 1}` : index + 1}
//               </div>

//               <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-50 mb-6">
//                 <Image
//                   src={product.imageSrc}
//                   alt={product.name}
//                   fill
//                   sizes="(max-width: 768px) 100vw, 33vw"
//                   className="object-cover group-hover:scale-105 transition-all duration-1000"
//                 />
                
//                 <div className="absolute top-4 right-4 bg-white px-3 py-1 text-[11px] font-bold tracking-widest shadow-sm">
//                   ₹{product.price}
//                 </div>

//                 <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
//                    <span className="w-full bg-white py-3 text-center text-[10px] font-bold uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
//                       View Detail
//                    </span>
//                 </div>
//               </div>

//               <div className="relative pl-1">
//                 <h3 className="text-lg font-light text-gray-900 mb-2 group-hover:text-[#C5A059] transition-colors duration-300">
//                   {product.name}
//                 </h3>
//                 <div className="h-[1px] w-8 bg-gray-200 group-hover:w-full group-hover:bg-[#C5A059] transition-all duration-700" />
//                 <p className="mt-4 text-[9px] text-gray-400 uppercase tracking-[0.2em] font-medium">
//                    Premium Quality • Women's 2025
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }






"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function WomenPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products/women")
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
          className="w-16 h-[1px] bg-[#C5A059] mb-6"
        />
        <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-gray-400">
          Retrieving Women Edit
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
          <span className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
            The Women Edit
          </span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-gray-900 leading-tight">
            Graceful <br /> 
            <span className="font-serif italic text-gray-300">Silhouettes</span>
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
                  <div className="absolute -top-6 -left-2 z-10 text-[70px] font-bold text-gray-50 pointer-events-none group-hover:text-[#F9F5EB] transition-colors duration-700 italic">
                    {rowIndex * 3 + index + 1 < 10 ? `0${rowIndex * 3 + index + 1}` : rowIndex * 3 + index + 1}
                  </div>

                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-50 mb-6 shadow-sm">
                    <Image
                      src={product.imageSrc}
                      alt={product.name}
                      fill
                      priority={rowIndex === 0}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-all duration-1000"
                    />
                    
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 text-[11px] font-bold tracking-widest shadow-sm">
                      ₹{product.price}
                    </div>

                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                       <span className="w-full bg-white py-3 text-center text-[10px] font-bold uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                         View Detail
                       </span>
                    </div>
                  </div>

                  <div className="relative pl-1">
                    <h3 className="text-lg font-light text-gray-900 mb-2 group-hover:text-[#C5A059] transition-colors duration-300">
                      {product.name}
                    </h3>
                    <div className="h-[1px] w-8 bg-gray-200 group-hover:w-full group-hover:bg-[#C5A059] transition-all duration-700" />
                    <p className="mt-4 text-[9px] text-gray-400 uppercase tracking-[0.2em] font-medium">
                       Premium Quality • Women's 2025
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