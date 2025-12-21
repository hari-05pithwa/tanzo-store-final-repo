"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function WomenSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        const allProducts = data.products || [];
        const filtered = allProducts
          .filter((p) => p.gender === "female")
          .slice(0, 3);
        setProducts(filtered);
      })
      .catch((err) => console.error("Error fetching women products:", err));
  }, []);

  return (
    <section className="bg-[#FAFAFA] py-32 scroll-mt-28" id="women">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light tracking-tight text-center text-gray-900 mb-20">
          Women's Essentials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16 mb-20">
          {products.map((product) => (
            <Link 
              key={product._id} 
              href={`/product/${product.slug}`} 
              className="group flex flex-col items-center"
            >
              {/* Gallery Style Image Container - Matched to Men Section */}
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 mb-8 transition-all duration-700 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-2">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 scale-[1.01] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
              </div>

              {/* Minimalist Info - Matched to Men Section */}
              <div className="text-center px-4">
                <h3 className="text-[15px] font-medium text-gray-900 mb-1 tracking-tight">
                  {product.name}
                </h3>
                <p className="text-sm font-light text-gray-500 mb-6">
                  ₹{product.price}
                </p>

                {/* Animated Underline Detail - Matched to Men Section */}
                <div className="overflow-hidden inline-block">
                  <span className="relative inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-900 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-900 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-500 after:origin-left pb-1">
                    View Detail
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <Link 
            href="/women" 
            className="px-12 py-4 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-gray-800 transition-all rounded-full shadow-lg"
          >
            Explore Women's Collection
          </Link>
        </div>
      </div>
    </section>
  );
}