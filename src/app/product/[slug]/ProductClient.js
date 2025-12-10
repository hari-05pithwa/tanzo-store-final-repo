"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProductClient({ product }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <h1 className="text-center text-2xl py-20">Product not found</h1>;
  }

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="max-w-screen-xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="w-full">
          <Image
            src={product.imageSrc}
            alt={product.name}
            width={600}
            height={600}
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="text-2xl font-medium mt-2 text-[#555]">
            {product.price}
          </p>

          <hr className="my-6" />

          <div className="space-y-4">
            <p>
              <span className="font-medium">Color:</span> {product.color}
            </p>
            <p>
              <span className="font-medium">Material:</span> {product.material}
            </p>

            {/* Size Selector */}
            <div>
              <p className="font-[600] mt-8 mb-2 text-xl">Select Size:</p>

              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      w-12 h-12 flex items-center justify-center
                      border-[1.8px] rounded-lg font-medium
                      transition
                      ${
                        selectedSize === size
                          ? "bg-black text-white"
                          : "hover:bg-gray-100 text-black"
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
            <p className="font-[600] mt-8 mb-2 text-xl">Quantity:</p>

            {/* 🛑 Start of Custom Dropdown Wrapper */}
            <div className="relative w-24">
              <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className={`
                  appearance-none 
                  w-full h-12
                  border border-gray-300 
                  rounded-lg font-medium 
                  bg-white text-black 
                  pl-3 pr-8 // Adjust padding to make space for custom arrow
                  cursor-pointer
                  transition
                `}
              >
                {[1, 2, 3, 4].map((qty) => (
                  <option key={qty} value={qty}>
                    {qty}
                  </option>
                ))}
              </select>

              {/* Custom Arrow Icon (using Tailwind classes for a clean look) */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            {/* 🛑 End of Custom Dropdown Wrapper */}

          </div>
            <button className="mt-6 w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800">
              Add to Cart ({selectedSize})
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
