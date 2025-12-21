// "use client";

// import { useEffect, useState } from "react";
// import ProductCard from "../components/ProductCard";

// export default function WomenPage() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch from your new women's API
//     fetch("/api/products/women")
//       .then((res) => res.json())
//       .then((data) => setProducts(data.products))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="px-6 md:px-14 lg:px-24 py-10">
//       <h2 className="text-3xl font-semibold text-center mb-14">
//         Women’s Products
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {products.map((product) => (
//           <ProductCard
//             key={product.slug}
//             photo={product.imageSrc}
//             title={product.name}
//             price={product.price}
//             slug={product.slug}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function WomenPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products/women")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-[#FAFAFA] min-h-screen px-6 md:px-14 lg:px-24 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Minimalist Heading Style */}
        <div className="text-center mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 block mb-4">
            Collection
          </span>
          <h2 className="text-4xl font-light tracking-tight text-gray-900">
            Women's Essentials
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
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
    </div>
  );
}