// components/HeroSection.jsx - REVISED

import React from 'react';

/**
 * A premium, minimalist hero section component for the Tanzo homepage.
 * Features large, thin typography and black-outlined buttons.
 */
export default function HeroSection() {
  return (
    // REVISION: Set the top padding to a large value (pt-32) and the bottom padding (pb-24) 
    // to define the standard gap before the next section.
    <section className="flex flex-col items-center justify-center pt-20 md:pt-32 lg:pt-40 pb-56 text-center bg-[#FAFAFA] ">
      
      {/* 1. Main Heading: "Premium Cotton T-Shirts." */}
      <h1 className="text-4xl md:text-6xl font-light tracking-wide text-gray-900 mb-4 md:mb-6">
        Premium Cotton T-Shirts.
      </h1>

      {/* 2. Subheading: "Designed for everyone." */}
      <p className="text-lg md:text-xl font-normal text-gray-500 mb-10 md:mb-16">
        Designed for everyone.
      </p>

      {/* 3. Buttons Container (Side-by-Side) */}
<div className="flex space-x-4 md:space-x-6">

  {/* Shop Men Button */}
  <a href="#men">
    <button 
      className="
        px-8 py-3 text-base md:text-lg font-medium 
        border border-black 
        bg-white text-black 
        transition duration-200 
        hover:bg-blue-600 hover:text-white 
       
      "
      aria-label="Shop Men's collection"
    >
      Shop Men
    </button>
  </a>

  {/* Shop Women Button */}
  <a href="#women">
    <button 
      className="
        px-8 py-3 text-base md:text-lg font-medium 
        border border-black 
        bg-white text-black 
        transition duration-200 
        hover:bg-pink-500 hover:text-white 
        
      "
      aria-label="Shop Women's collection"
    >
      Shop Women
    </button>
  </a>

</div>

    </section>
  );
}