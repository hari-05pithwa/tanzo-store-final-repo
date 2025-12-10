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
      <h2 className="text-3xl font-semibold text-center mb-14">
        All Products
      </h2>

      <div className="grid grid-cols-1 justify-between items-center sm:grid-cols-2 lg:grid-cols-3 gap-10">
       {products.map((product) => (
          <ProductCard
            key={product.slug}
            photo={product.imageSrc}
            title={product.name}
            price={product.price}
            slug={product.slug}
          />
        ))}
      </div>
    </div>
  );
}
