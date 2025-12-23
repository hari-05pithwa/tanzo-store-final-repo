// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const socialIcons = [
//   { name: 'Instagram', src: '/images/instagram.png', alt: 'Instagram', href: '#' },
//   { name: 'Facebook', src: '/images/facebook.png', alt: 'Facebook', href: '#' },
//   { name: 'WhatsApp', src: '/images/whatsapp.png', alt: 'WhatsApp', href: '#' },
// ];

// export default function Footer() {
//   return (
//     <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 text-center md:text-left">
          
//           {/* Brand Info */}
//           <div className="flex flex-col items-center md:items-start">
//             <h3 className="text-2xl font-black tracking-tighter text-gray-900 mb-4 uppercase">
//               TANZO
//             </h3>
//             <p className="text-gray-400 text-sm font-light leading-relaxed max-w-xs">
//               Redefining the daily essential with premium fabrics and modern silhouettes.
//             </p>
//           </div>

//           {/* Quick Contact */}
//           <div className="flex flex-col items-center">
//             <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-gray-900">Get in Touch</h4>
//             <p className="text-gray-600 text-sm mb-2">+91 90817 51109</p>
//             <p className="text-gray-600 text-sm">tanzoinquire@gmail.com</p>
//           </div>

//           {/* Socials */}
//           <div className="flex flex-col items-center md:items-end">
//             <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-gray-900">Follow Tanzo</h4>
//             <div className="flex space-x-6">
//               {socialIcons.map((icon) => (
//                 <Link key={icon.name} href={icon.href} className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
//                   <Image src={icon.src} alt={icon.alt} width={24} height={24} />
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">
//             © 2025 TANZO STUDIO.
//           </p>
//           <div className="flex gap-8">
//             <Link href="#" className="text-[10px] text-gray-400 hover:text-black transition-colors uppercase tracking-widest">Privacy</Link>
//             <Link href="#" className="text-[10px] text-gray-400 hover:text-black transition-colors uppercase tracking-widest">Terms</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }









"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const socialIcons = [
  { name: 'Instagram', src: '/images/instagram.png', alt: 'Instagram', href: '#' },
  { name: 'Facebook', src: '/images/facebook.png', alt: 'Facebook', href: '#' },
  { name: 'WhatsApp', src: '/images/whatsapp.png', alt: 'WhatsApp', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-white pt-32 pb-12 border-t border-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24 text-center md:text-left"
        >
          
          {/* Brand Identity */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <Link href="/" className="flex-shrink-0">
            <Image
              src="/TanzoStoreLogo.svg"
              className="h-[14px] md:h-[18px] lg:h-[20px] w-auto"
              height={30}
              width={100}
              alt="Tanzo"
              priority
            />
          </Link>
            <p className="text-gray-400 text-xs font-light leading-relaxed max-w-xs uppercase tracking-widest">
              Redefining the daily essential with premium fabrics and modern silhouettes.
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-900 italic">Curated Support</h4>
            <div className="space-y-2">
              <p className="text-gray-600 text-sm hover:text-black transition-colors cursor-pointer">+91 90817 51109</p>
              <p className="text-gray-600 text-sm hover:text-black transition-colors cursor-pointer">tanzoinquire@gmail.com</p>
            </div>
          </div>

          {/* Social Presence */}
          <div className="flex flex-col items-center md:items-end space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-900 italic">The Archive</h4>
            <div className="flex space-x-8">
              {socialIcons.map((icon) => (
                <Link 
                  key={icon.name} 
                  href={icon.href} 
                  className="group relative transition-all duration-500"
                >
                  <div className="absolute -inset-2 bg-zinc-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                  <Image 
                    src={icon.src} 
                    alt={icon.alt} 
                    width={20} 
                    height={20} 
                    className="relative z-10 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                  />
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar: End Credits Style */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="pt-12 border-t border-zinc-50 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-[9px] text-gray-300 font-medium uppercase tracking-[0.4em]">
              © 2025 TANZO STUDIO PRIVATE LIMITED.
            </p>
            <p className="text-[8px] text-gray-200 uppercase tracking-widest">Designed for the modern silhouette</p>
          </div>

          <div className="flex gap-10">
            {['Privacy', 'Terms', 'Shipping'].map((item) => (
              <Link 
                key={item}
                href="#" 
                className="text-[9px] text-gray-400 hover:text-black transition-all uppercase tracking-[0.3em] relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}