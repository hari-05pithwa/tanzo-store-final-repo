import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden bg-[#0A0A0A]">
      {/* Background Image - Fixed to the upper portion */}
      <div className="absolute inset-0 h-[85%] scale-110 animate-slow-zoom">
        <Image
          src="/HeroImage.png"
          alt="Luxury Essential Collection"
          fill
          priority
          className="object-cover object-center opacity-70"
        />
        {/* Sophisticated Radial Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.6)_100%)]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-20">
        {/* Floating Tag */}
        <div className="mb-8 flex items-center gap-3 py-2 px-5 border border-white/20 rounded-full bg-white/5 backdrop-blur-md">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
          </span>
          <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/90">
            New Drop: Spring/Summer
          </span>
        </div>

        {/* Cinematic Heading */}
        <h1 className="text-7xl md:text-[130px] font-extralight leading-[0.8] text-white tracking-tighter text-center mb-8">
          Define <br /> 
          <span className="italic font-serif opacity-90 block mt-4">Your</span> 
          Base<span className="text-white/30 ml-1">.</span>
        </h1>

        <p className="text-gray-400 text-[10px] md:text-xs font-light tracking-[0.4em] max-w-[350px] text-center leading-relaxed uppercase">
          Curated garments for the modern minimalist.
        </p>
      </div>

      {/* Bottom Section: Info Bar & CTA Stack */}
      <div className="relative z-20 w-full bg-[#0A0A0A] mt-10">
        {/* 1. Information Bar (The Promises) */}
        <div className="border-y border-white/5 bg-white/[0.02] backdrop-blur-3xl">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-12 py-10 gap-8 md:gap-0">
            <div className="flex-1 flex flex-col gap-2 items-center md:items-start">
              <span className="text-[8px] font-bold text-white/30 uppercase tracking-[0.3em]">Craftsmanship</span>
              <p className="text-[10px] text-white/90 uppercase tracking-[0.2em] font-medium">Premium Organic Cotton</p>
            </div>
            
            <div className="hidden md:block h-10 w-[1px] bg-white/10 mx-4" />

            <div className="flex-1 flex flex-col gap-2 items-center">
              <span className="text-[8px] font-bold text-white/30 uppercase tracking-[0.3em]">Shipping</span>
              <p className="text-[10px] text-white/90 uppercase tracking-[0.2em] font-medium">Worldwide Express Delivery</p>
            </div>

            <div className="hidden md:block h-10 w-[1px] bg-white/10 mx-4" />

            <div className="flex-1 flex flex-col gap-2 items-center md:items-end">
              <span className="text-[8px] font-bold text-white/30 uppercase tracking-[0.3em]">Philosophy</span>
              <p className="text-[10px] text-white/90 uppercase tracking-[0.2em] font-medium">Sustainability First</p>
            </div>
          </div>
        </div>

        {/* 2. Final Action Bar (The Reveal) */}
        <div className="py-16 flex justify-center bg-gradient-to-b from-[#0A0A0A] to-[#111]">
          <Link href="/explore">
            <button className="group relative px-20 py-6 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              {/* Ghost Border that turns solid white */}
              <div className="absolute inset-0 border border-white/20 rounded-full transition-all duration-500 group-hover:border-white group-hover:bg-white" />
              
              {/* Text flips colors */}
              <span className="relative z-10 text-white text-[12px] font-bold uppercase tracking-[0.5em] transition-colors duration-500 group-hover:text-black">
                Shop the Release
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}