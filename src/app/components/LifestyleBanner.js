import React from "react";
import Link from "next/link";

export default function LifestyleBanner() {
  return (
    <section className="bg-[#111111] py-32 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 mb-6 block">
              Designed for Movement
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-6 leading-tight">
              Made for Every Moment. <br/>From Work to Weekend.
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Tanzo isn't just about clothes; it's about the ease of choice. 
              Our silhouettes are designed to look as good at a dinner table 
              as they do on a Sunday morning.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Link 
              href="/explore" 
              className="px-12 py-5 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-200 transition-all duration-300"
            >
              Explore Full Collection
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}