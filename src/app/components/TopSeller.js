// components/TopSellers.jsx - FIXED FOR PERFECT IMAGE CONTAINMENT

import React from "react";
import Image from "next/image";

// Dummy data for the 3 top-selling products... (data remains unchanged)
const topSellers = [
  {
    id: 1,
    name: "Classic Tee Men (Park)",
    price: "₹1199",
    imageSrc: "/images/men1.jpg",
  },
  {
    id: 2,
    name: "Classic Tee Women (Cartoon)",
    price: "₹1299",
    imageSrc: "/images/women6.jpg",
  },
  {
    id: 3,
    name: "Classic Tee Men (Block)",
    price: "₹1199",
    imageSrc: "/images/men3.jpg",
  },
];

/**
 * Renders the 3-column Top Seller product grid section.
 */
export default function TopSellers() {
  return (
    <section className="bg-[#FAFAFA] pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-normal tracking-wide text-center text-gray-900 mb-16 md:mb-8">
          Top Seller's
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {topSellers.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col items-center text-center"
            >
              {/* Product Image Area: The parent container is now simpler */}
              {/* Added w-full max-w-sm for responsive size control */}
              <div className="w-full max-w-sm flex justify-center items-center overflow-hidden mb-6">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  // *** FIX 1: Explicitly define width and height for Contain/Optimization ***
                  width={400}
                  height={400}
                  // *** FIX 2: Use object-contain Tailwind class for the CSS property ***
                  // Removed layout="fill" and objectFit="contain" props
                  className="transition duration-300 group-hover:opacity-90 object-contain rounded-lg shadow-md"
                  // The key change is applying rounded-lg here and removing unnecessary padding/shadow classes.
                />
              </div>

              {/* Product Info */}
              <div className="w-full">
                <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-2">
                  {product.name}
                </h3>

                <p className="text-xl font-normal text-gray-900 mb-6">
                  {product.price}
                </p>

                {/* Add to Cart Button */}
                <button
                  className="
                      w-full max-w-xs px-6 py-3 text-base font-medium 
                      border border-black 
                      bg-white text-black 
                      transition duration-200 
                      hover:bg-black hover:text-white
                      focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2
                    "
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
