// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import ProductCard from "../components/ProductCard";

// export default function AllProducts() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("/api/products")
//       .then((res) => res.json())
//       .then((data) => setProducts(data.products))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="px-6 md:px-14 lg:px-24 py-10">
//       {/* Updated Header Section to match Men's page styling */}
//       <div className="mb-14 text-center">
//         <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 block mb-4">
//           Collection
//         </span>
//         <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900">
//           All Products
//         </h2>
//       </div>

//       <div className="grid grid-cols-1 justify-between items-center sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {products.map((product) => (
//           <ProductCard
//             key={product.slug}
//             photo={product.imageSrc}
//             title={product.name}
//             price={product.price}
//             slug={product.slug}
//             description={product.description}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
// "use client";
// import { useEffect, useState } from "react";
// import ProductCard from "@/app/components/ProductCard";

// export default function ExplorePage() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // This calls your updated route.js which returns { products: [...] }
//     fetch("/api/products")
//       .then((res) => res.json())
//       .then((data) => {
//         // Safe check: data.products is what we sent from route.js
//         setProducts(data.products || []);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching products:", err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <div className="text-center py-20 uppercase tracking-widest text-[10px]">Loading Collection...</div>;

//   return (
//     <div className="px-6 md:px-14 lg:px-24 py-10">
//       <div className="mb-14 text-center">
//         <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 block mb-4">Collection</span>
//         <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900">Explore All</h2>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {/* The ?. is vital here to prevent the 'undefined' map error */}
//         {products?.map((product) => (
//           <ProductCard
//             key={product._id || product.slug}
//             photo={product.imageSrc}
//             title={product.name}
//             price={product.price}
//             slug={product.slug}
//           />
//         ))}
//       </div>

//       {products.length === 0 && (
//         <p className="text-center text-gray-400 mt-10">No products found in database.</p>
//       )}
//     </div>
//   );
// }










//og
// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function ExplorePage() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("/api/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data.products || []);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching products:", err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <div className="h-[60vh] flex items-center justify-center">
//         <div className="animate-pulse text-[10px] uppercase tracking-[0.5em] text-gray-400 font-bold">
//           Accessing Archive...
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white min-h-screen">
//       {/* Editorial Header */}
//       <header className="pt-24 pb-16 px-6 md:px-14">
//         <div className="max-w-7xl mx-auto border-b border-gray-100 pb-12 text-center">
//           <span className="text-blue-900 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
//             The Full Archive
//           </span>
//           <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-gray-900 uppercase">
//             Explore <span className="font-serif italic text-gray-400 lowercase">all</span>
//           </h1>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-6 md:px-14 pb-32">
//         {/* Boutique Numbered Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
//           {products.map((product, index) => (
//             <Link 
//               key={product._id || product.slug} 
//               href={`/product/${product.slug}`} 
//               className="group relative flex flex-col"
//             >
//               {/* Signature Index Number */}
//               <div className="absolute -top-6 -left-2 z-10 text-[70px] font-bold text-gray-50 pointer-events-none group-hover:text-blue-50 transition-colors duration-700 italic">
//                 {index + 1 < 10 ? `0${index + 1}` : index + 1}
//               </div>

//               {/* Product Image Container */}
//               <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-50 mb-6 shadow-sm">
//                 <Image
//                   src={product.imageSrc}
//                   alt={product.name}
//                   fill
//                   sizes="(max-width: 768px) 100vw, 33vw"
//                   className="object-cover transition-all duration-1000 group-hover:scale-110"
//                 />
                
//                 {/* Floating White Price Tag */}
//                 <div className="absolute top-4 right-4 bg-white px-3 py-1 text-[11px] font-bold tracking-widest shadow-sm">
//                   ₹{product.price}
//                 </div>

//                 {/* Subtle Hover Overlay */}
//                 <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
//                    <span className="w-full bg-white py-3 text-center text-[10px] font-bold uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
//                       View Artifact
//                    </span>
//                 </div>
//               </div>

//               {/* Product Info */}
//               <div className="relative pl-1">
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="text-lg font-light text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
//                     {product.name}
//                   </h3>
//                   <span className="text-[8px] uppercase tracking-widest text-gray-300 font-bold border border-gray-100 px-2 py-0.5 mt-1">
//                     {product.gender === 'male' ? 'Men' : 'Women'}
//                   </span>
//                 </div>
                
//                 {/* Expanding Underline */}
//                 <div className="h-[1px] w-8 bg-gray-200 group-hover:w-full group-hover:bg-blue-600 transition-all duration-700" />
                
//                 <p className="mt-4 text-[9px] text-gray-400 uppercase tracking-[0.2em] font-medium">
//                    Universal Collection • 2025
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* Empty State */}
//         {products.length === 0 && (
//           <div className="py-40 text-center">
//             <p className="text-gray-400 font-light italic text-xl">The archive is currently empty.</p>
//           </div>
//         )}
//       </main>

//       {/* Boutique Footer Footer */}
//       <footer className="bg-gray-50 border-t border-gray-100 py-20 text-center">
//          <p className="text-[10px] tracking-[0.5em] uppercase text-gray-400 mb-2">Tanzo Store</p>
//          <p className="text-xs font-light text-gray-500">Premium Goods for the Modern Individual</p>
//       </footer>
//     </div>
//   );
// }










"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Premium Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1], // Luxury smooth-stop curve
    },
  },
};

export default function ExplorePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <motion.div 
          animate={{ scaleX: [0, 1, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-16 h-[1px] bg-black mb-6"
        />
        <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-gray-400">
          Accessing Archive
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Editorial Header */}
      <header className="pt-24 pb-16 px-6 md:px-14">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-7xl mx-auto border-b border-gray-100 pb-12 text-center"
        >
          <span className="text-blue-900 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
            The Full Archive
          </span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-gray-900 uppercase">
            Explore <span className="font-serif italic text-gray-400 lowercase">all</span>
          </h1>
        </motion.div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-14 pb-32">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24"
        >
          {products.map((product, index) => (
            <motion.div 
              key={product._id || product.slug} 
              variants={itemVariants}
            >
              <Link 
                href={`/product/${product.slug}`} 
                className="group relative flex flex-col"
              >
                {/* Signature Index Number */}
                <div className="absolute -top-6 -left-2 z-10 text-[70px] font-bold text-gray-50 pointer-events-none group-hover:text-blue-50 transition-colors duration-700 italic">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>

                {/* Product Image Container */}
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-50 mb-6 shadow-sm">
                  <Image
                    src={product.imageSrc}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-all duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Floating White Price Tag */}
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 text-[11px] font-bold tracking-widest shadow-sm">
                    ₹{product.price}
                  </div>

                  {/* Subtle Hover Overlay */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                     <span className="w-full bg-white py-3 text-center text-[10px] font-bold uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                       View Artifact
                     </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="relative pl-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-light text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <span className="text-[8px] uppercase tracking-widest text-gray-300 font-bold border border-gray-100 px-2 py-0.5 mt-1">
                      {product.gender === 'male' ? 'Men' : 'Women'}
                    </span>
                  </div>
                  
                  {/* Expanding Underline */}
                  <div className="h-[1px] w-8 bg-gray-200 group-hover:w-full group-hover:bg-blue-600 transition-all duration-700" />
                  
                  <p className="mt-4 text-[9px] text-gray-400 uppercase tracking-[0.2em] font-medium">
                      Universal Collection • 2025
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        <AnimatePresence>
          {products.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-40 text-center"
            >
              <p className="text-gray-400 font-light italic text-xl">The archive is currently empty.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="bg-gray-50 border-t border-gray-100 py-20 text-center">
         <p className="text-[10px] tracking-[0.5em] uppercase text-gray-400 mb-2">Tanzo Store</p>
         <p className="text-xs font-light text-gray-500">Premium Goods for the Modern Individual</p>
      </footer>
    </div>
  );
}