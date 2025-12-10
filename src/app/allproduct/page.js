"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className=" p-20">
      All Data
      {products.map((product) => (
        <Link
          key={product.slug}
          // 🛑 The href path remains the same (e.g., /product/1)
          // The router now maps the '1' to the 'slug' parameter.
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
              priority={false}
            />
          </div>

          <div className="w-full">
            <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-2">
              {product.name}
            </h3>
            <p className="text-xl font-normal text-gray-900 mb-6">
              {product.price}
            </p>
            <p>
                {product.gender}
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
  );
}
