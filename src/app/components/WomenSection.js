// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function WomenSection() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("/api/products")
//       .then((res) => res.json())
//       .then((data) => {
//         const allProducts = data.products || [];
//         const filtered = allProducts
//           .filter((p) => p.gender === "female")
//           .slice(0, 3);
//         setProducts(filtered);
//       })
//       .catch((err) => console.error("Error fetching women products:", err));
//   }, []);

//   return (
//     <section className="bg-[#FAFAFA] py-32 scroll-mt-28" id="women">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-light tracking-tight text-center text-gray-900 mb-20">
//           Women's Essentials
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16 mb-20">
//           {products.map((product) => (
//             <Link 
//               key={product._id} 
//               href={`/product/${product.slug}`} 
//               className="group flex flex-col items-center"
//             >
//               {/* Gallery Style Image Container - Matched to Men Section */}
//               <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 mb-8 transition-all duration-700 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-2">
//                 <Image
//                   src={product.imageSrc}
//                   alt={product.name}
//                   fill
//                   sizes="(max-width: 768px) 100vw, 33vw"
//                   className="object-cover transition-transform duration-700 scale-[1.01] group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
//               </div>

//               {/* Minimalist Info - Matched to Men Section */}
//               <div className="text-center px-4">
//                 <h3 className="text-[15px] font-medium text-gray-900 mb-1 tracking-tight">
//                   {product.name}
//                 </h3>
//                 <p className="text-sm font-light text-gray-500 mb-6">
//                   ₹{product.price}
//                 </p>

//                 {/* Animated Underline Detail - Matched to Men Section */}
//                 <div className="overflow-hidden inline-block">
//                   <span className="relative inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-900 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-900 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-500 after:origin-left pb-1">
//                     View Detail
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         <div className="flex justify-center">
//           <Link 
//             href="/women" 
//             className="px-12 py-4 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-gray-800 transition-all rounded-full shadow-lg"
//           >
//             Explore Women's Collection
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }










//og
// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function WomenSection() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("/api/products")
//       .then((res) => res.json())
//       .then((data) => {
//         const allProducts = data.products || [];
//         const filtered = allProducts.filter((p) => p.gender === "female").slice(0, 3);
//         setProducts(filtered);
//       })
//       .catch((err) => console.error("Error fetching women products:", err));
//   }, []);

//   return (
//     <section className="bg-[#f9f9f9] py-24 scroll-mt-28" id="women">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col mb-16 items-end text-right">
//           <h2 className="text-6xl font-black tracking-tighter text-gray-900 uppercase">
//             The <span className="text-pink-500">Women</span> Edit
//           </h2>
//           <div className="h-1 w-24 bg-black mt-2"></div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
//           {/* Side Products - Left Side */}
//           <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col gap-8">
//             {products.slice(1, 3).map((product) => (
//               <Link key={product._id} href={`/product/${product.slug}`} className="group flex flex-row-reverse gap-6 items-center border-b border-gray-200 pb-8 text-right">
//                 <div className="relative w-32 h-40 flex-shrink-0 overflow-hidden bg-gray-100">
//                   <Image src={product.imageSrc} alt={product.name} fill className="object-cover transition-transform group-hover:scale-110" />
//                 </div>
//                 <div className="flex-grow">
//                   <h3 className="text-xl font-light text-gray-900 group-hover:text-pink-500 transition-colors">{product.name}</h3>
//                   <p className="text-gray-500 mt-1">₹{product.price}</p>
//                   <span className="inline-block mt-4 text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1">Shop Now</span>
//                 </div>
//               </Link>
//             ))}
            
//             <Link 
//               href="/women" 
//               className="mt-4 inline-flex items-center justify-center px-8 py-5 bg-white border border-black text-black text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all"
//             >
//               View All Women's Essentials
//             </Link>
//           </div>

//           {/* Main Featured Product - Right Side */}
//           {products[0] && (
//             <div className="order-1 lg:order-2 lg:col-span-7">
//               <Link href={`/product/${products[0].slug}`} className="group relative block">
//                 <div className="relative aspect-[16/10] lg:aspect-[4/5] overflow-hidden bg-gray-100">
//                   <Image
//                     src={products[0].imageSrc}
//                     alt={products[0].name}
//                     fill
//                     className="object-cover transition-transform duration-1000 group-hover:scale-105"
//                   />
//                   <div className="absolute top-8 right-8 bg-white p-6 shadow-xl max-w-[240px] text-right">
//                     <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">Editor's Pick</p>
//                     <h3 className="text-lg font-bold mb-2">{products[0].name}</h3>
//                     <p className="text-pink-500 font-bold">₹{products[0].price}</p>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           )}
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

export default function WomenSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        const allProducts = data.products || [];
        const filtered = allProducts.filter((p) => p.gender === "female").slice(0, 3);
        setProducts(filtered);
      })
      .catch((err) => console.error("Error fetching women products:", err));
  }, []);

  // Animation Variants
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  const imageReveal = {
    hidden: { scale: 1.15, filter: "blur(15px)" },
    visible: { 
      scale: 1, 
      filter: "blur(0px)",
      transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="bg-[#f9f9f9] py-24 scroll-mt-28" id="women">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVars}
      >
        {/* Animated Header - Right Aligned */}
        <motion.div variants={itemVars} className="flex flex-col mb-16 items-end text-right">
          <h2 className="text-6xl font-black tracking-tighter text-gray-900 uppercase">
            The <span className="text-pink-500">Women</span> Edit
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-black mt-2"
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Side Products - Left Side (Stacked order-2 on mobile) */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col gap-12">
            {products.slice(1, 3).map((product) => (
              <motion.div key={product._id} variants={itemVars}>
                <Link href={`/product/${product.slug}`} className="group flex flex-row-reverse gap-8 items-center border-b border-gray-200 pb-10 text-right">
                  <div className="relative w-32 h-44 flex-shrink-0 overflow-hidden bg-white shadow-sm">
                    <motion.div variants={imageReveal} className="h-full w-full">
                      <Image src={product.imageSrc} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </motion.div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light tracking-tight text-gray-900 group-hover:text-pink-600 transition-colors duration-300 uppercase">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 mt-2 font-mono tracking-tighter">₹{product.price}</p>
                    <div className="overflow-hidden mt-6">
                      <span className="inline-block relative text-[10px] font-bold uppercase tracking-[0.2em] border-b border-black pb-1 transition-all duration-300 group-hover:tracking-[0.4em]">
                        View Details
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
            
            <motion.div variants={itemVars}>
              <Link 
                href="/women" 
                className="group relative mt-4 overflow-hidden inline-flex items-center justify-center px-10 py-6 bg-white border border-black text-black text-[11px] font-bold uppercase tracking-[0.4em] transition-all"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Explore Collection</span>
                <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
              </Link>
            </motion.div>
          </div>

          {/* Main Featured Product - Right Side (Order-1 on mobile) */}
          {products[0] && (
            <motion.div variants={itemVars} className="order-1 lg:order-2 lg:col-span-7">
              <Link href={`/product/${products[0].slug}`} className="group relative block overflow-hidden">
                <motion.div variants={imageReveal} className="relative aspect-[16/10] lg:aspect-[4/5] overflow-hidden bg-gray-100">
                  <Image
                    src={products[0].imageSrc}
                    alt={products[0].name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                  
                  <motion.div 
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="absolute top-8 right-8 bg-white p-6 shadow-2xl max-w-[240px] z-10 text-right"
                  >
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2 font-bold">Season Essential</p>
                    <h3 className="text-lg font-bold mb-2 uppercase tracking-tighter">{products[0].name}</h3>
                    <p className="text-pink-500 font-mono text-sm tracking-widest">₹{products[0].price}</p>
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}