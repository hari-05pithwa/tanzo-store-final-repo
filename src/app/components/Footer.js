import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const socialIcons = [
  { name: 'Instagram', src: '/images/instagram.png', alt: 'Instagram', href: '#' },
  { name: 'Facebook', src: '/images/facebook.png', alt: 'Facebook', href: '#' },
  { name: 'WhatsApp', src: '/images/whatsapp.png', alt: 'WhatsApp', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 text-center md:text-left">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-black tracking-tighter text-gray-900 mb-4 uppercase">
              TANZO
            </h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-xs">
              Redefining the daily essential with premium fabrics and modern silhouettes.
            </p>
          </div>

          {/* Quick Contact */}
          <div className="flex flex-col items-center">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-gray-900">Get in Touch</h4>
            <p className="text-gray-600 text-sm mb-2">+91 90817 51109</p>
            <p className="text-gray-600 text-sm">tanzoinquire@gmail.com</p>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-gray-900">Follow Tanzo</h4>
            <div className="flex space-x-6">
              {socialIcons.map((icon) => (
                <Link key={icon.name} href={icon.href} className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                  <Image src={icon.src} alt={icon.alt} width={24} height={24} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">
            © 2025 TANZO STUDIO.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-[10px] text-gray-400 hover:text-black transition-colors uppercase tracking-widest">Privacy</Link>
            <Link href="#" className="text-[10px] text-gray-400 hover:text-black transition-colors uppercase tracking-widest">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}