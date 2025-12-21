"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="px-6 md:px-14 lg:px-24 py-10">
      {/* Updated Header Section to match Men's page styling */}
      <div className="mb-14 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 block mb-4">
          Collection
        </span>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900">
          All Products
        </h2>
      </div>

      <div className="grid grid-cols-1 justify-between items-center sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <ProductCard
            key={product.slug}
            photo={product.imageSrc}
            title={product.name}
            price={product.price}
            slug={product.slug}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}