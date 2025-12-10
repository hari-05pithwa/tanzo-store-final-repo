// src/app/components/womenSection.jsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { womenProducts } from "@/data/womenProducts";

export default function WomenSection() {
//   const handleAddToCartClick = (e, productId, productName) => {
//     e.stopPropagation();
//     e.preventDefault();
//     console.log(`Product ID ${productId} (${productName}) added to cart!`);
//     alert(`${productName} added to cart!`);
//   };

  return (
    <section className="bg-[#FAFAFA] pt-32 pb-32 scroll-mt-[-25px]" id="women">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-normal tracking-wide text-center text-gray-900 mb-16 md:mb-8">
          Women's T-Shirts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {womenProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group flex flex-col items-center text-center cursor-pointer"
            >
              <div className="w-full max-w-sm flex justify-center items-center overflow-hidden mb-6">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="transition duration-300 group-hover:opacity-90 object-contain rounded-lg shadow-md"
                />
              </div>

              <div className="w-full">
                <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-2">
                  {product.name}
                </h3>

                <p className="text-xl font-normal text-gray-900 mb-6">
                  {product.price}
                </p>

                <button
                  // onClick={(e) => handleAddToCartClick(e, product.id, product.name)}
                  className="
                    w-full max-w-xs px-6 py-3 border border-black 
                    bg-white text-black transition hover:bg-black hover:text-white
                  "
                >
                  View Product
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

