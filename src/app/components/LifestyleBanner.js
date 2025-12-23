// import React from "react";
// import Link from "next/link";

// export default function LifestyleBanner() {
//   return (
//     <section className="bg-[#111111] py-32 text-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
//           <div className="max-w-2xl">
//             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 mb-6 block">
//               Designed for Movement
//             </span>
//             <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-6 leading-tight">
//               Made for Every Moment. <br/>From Work to Weekend.
//             </h2>
//             <p className="text-gray-400 text-lg font-light leading-relaxed">
//               Tanzo isn't just about clothes; it's about the ease of choice. 
//               Our silhouettes are designed to look as good at a dinner table 
//               as they do on a Sunday morning.
//             </p>
//           </div>

//           <div className="flex flex-col items-center gap-4">
//             <Link 
//               href="/explore" 
//               className="px-12 py-5 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-200 transition-all duration-300"
//             >
//               Explore Full Collection
//             </Link>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }






"use client"; // Required for Framer Motion in Next.js App Router

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Add this import


export default function LifestyleBanner() {
  return (
    <section className="bg-[#111111] py-32 text-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, filter: "blur(20px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.5 }}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 mb-6 block"
            >
              Designed for Movement
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-5xl font-light tracking-tighter mb-6 leading-tight uppercase"
            >
              Made for Every Moment. <br/>From Work to Weekend.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-gray-400 text-lg font-light leading-relaxed"
            >
              Tanzo isn't just about clothes; it's about the ease of choice. 
              Our silhouettes are designed to look as good at a dinner table 
              as they do on a Sunday morning.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center gap-4"
          >
            <Link 
              href="/explore" 
              className="group relative px-12 py-5 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Explore Collection</span>
              <div className="absolute inset-0 bg-blue-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}