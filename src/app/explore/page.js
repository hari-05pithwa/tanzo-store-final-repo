// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import ProductCard from "../components/ProductCard";

// export default function AllProducts() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("/api/products")
//       .then((res) => res.json())
//       .then((data) => setProducts(data.products))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="px-6 md:px-14 lg:px-24 py-10">
//       {/* Updated Header Section to match Men's page styling */}
//       <div className="mb-14 text-center">
//         <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 block mb-4">
//           Collection
//         </span>
//         <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900">
//           All Products
//         </h2>
//       </div>

//       <div className="grid grid-cols-1 justify-between items-center sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {products.map((product) => (
//           <ProductCard
//             key={product.slug}
//             photo={product.imageSrc}
//             title={product.name}
//             price={product.price}
//             slug={product.slug}
//             description={product.description}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/app/components/ProductCard";

export default function ExplorePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This calls your updated route.js which returns { products: [...] }
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        // Safe check: data.products is what we sent from route.js
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-20 uppercase tracking-widest text-[10px]">Loading Collection...</div>;

  return (
    <div className="px-6 md:px-14 lg:px-24 py-10">
      <div className="mb-14 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 block mb-4">Collection</span>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900">Explore All</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* The ?. is vital here to prevent the 'undefined' map error */}
        {products?.map((product) => (
          <ProductCard
            key={product._id || product.slug}
            photo={product.imageSrc}
            title={product.name}
            price={product.price}
            slug={product.slug}
          />
        ))}
      </div>

      {products.length === 0 && (
        <p className="text-center text-gray-400 mt-10">No products found in database.</p>
      )}
    </div>
  );
}