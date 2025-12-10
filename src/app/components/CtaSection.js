// components/CtaSection.jsx

import React from 'react';

export default function CtaSection() {
  return (
    <section className="bg-[#ffffff] py-24 border-t border-b border-[#e7e7e7]"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#444444] mb-4">
          Comfort for Every Day.
        </h2>

        <p className="text-lg md:text-xl font-normal text-[#444444] mb-10 md:mb-12">
          Made with premium cotton for all-day ease.
        </p>

        <button 
          className="
            px-12 py-2 text-lg font-medium 
            bg-[#1D96FF] text-white 
            rounded-[8px]                     
            shadow-lg                       
            transition duration-200 
            hover:bg-blue-600 
            
          "
          aria-label="Shop now and find comfort"
        >
          Shop Now
        </button>

      </div>
    </section>
  );
}