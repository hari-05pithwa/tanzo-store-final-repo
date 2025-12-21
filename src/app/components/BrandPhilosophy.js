import React from 'react';
import Link from 'next/link';

export default function BrandPhilosophy() {
  return (
    <section className="bg-white py-32 border-y border-gray-100"> 
      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-6 block">
          The Tanzo Standard
        </span>
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-gray-900 mb-8 leading-tight">
          Uncompromising Comfort. <br/>Every Single Day.
        </h2>
        <p className="text-gray-500 text-lg font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          We spent months sourcing the perfect 100% premium cotton. The result? A tee that feels like a second skin.
        </p>
        <Link href="/explore" className="inline-block px-14 py-5 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] hover:scale-105 transition-transform duration-300 rounded-sm">
          Shop the Fabric
        </Link>
      </div>
    </section>
  );
}