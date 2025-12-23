// import React from 'react';
// import Link from 'next/link';

// export default function BrandPhilosophy() {
//   return (
//     <section className="bg-white py-32 border-y border-gray-100"> 
//       <div className="max-w-4xl mx-auto px-4 text-center">
//         <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-6 block">
//           The Tanzo Standard
//         </span>
//         <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-gray-900 mb-8 leading-tight">
//           Uncompromising Comfort. <br/>Every Single Day.
//         </h2>
//         <p className="text-gray-500 text-lg font-light max-w-2xl mx-auto mb-12 leading-relaxed">
//           We spent months sourcing the perfect 100% premium cotton. The result? A tee that feels like a second skin.
//         </p>
//         <Link href="/explore" className="inline-block px-14 py-5 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] hover:scale-105 transition-transform duration-300 rounded-sm">
//           Shop the Fabric
//         </Link>
//       </div>
//     </section>
//   );
// }






"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BrandPhilosophy() {
  return (
    <section className="bg-white py-32 border-y border-gray-100 overflow-hidden"> 
      <motion.div 
        // 1. Ensure 'initial' is set so it has a starting point to animate FROM
        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
        // 2. whileInView handles the 'target' state
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        // 3. Viewport settings are crucial
        viewport={{ 
          once: true,      // Only animate once
          amount: 0.3,     // Start animation when 30% of the element is in view
          margin: "0px 0px -50px 0px" // Trigger slightly before it hits the bottom of the screen
        }}
        transition={{ 
          duration: 1.2, 
          ease: [0.16, 1, 0.3, 1] // Custom cubic-bezier for a "premium" feel
        }}
        className="max-w-4xl mx-auto px-4 text-center"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-6 block">
          The Tanzo Standard
        </span>
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-gray-900 mb-8 leading-tight">
          Uncompromising Comfort. <br/>Every Single Day.
        </h2>
        <p className="text-gray-500 text-lg font-light max-w-2xl mx-auto mb-12 leading-relaxed italic">
          "We spent months sourcing the perfect 100% premium cotton. The result? A tee that feels like a second skin."
        </p>
        <Link 
          href="/explore" 
          className="inline-block px-14 py-5 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all duration-300 rounded-sm active:scale-95"
        >
          Shop the Fabric
        </Link>
      </motion.div>
    </section>
  );
}