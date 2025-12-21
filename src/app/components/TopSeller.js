// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function TopSellers() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("/api/products")
//       .then((res) => res.json())
//       .then((data) => {
//         const allProducts = data.products || [];
//         // Show the top 3 items on the home page
//         setProducts(allProducts.slice(0, 3));
//       })
//       .catch((err) => console.error("Error fetching top sellers:", err));
//   }, []);

//   return (
//     <section className="bg-[#FAFAFA] py-32">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-4 block text-center">
//           Customer Favorites
//         </span>
//         <h2 className="text-4xl font-light tracking-tight text-center text-gray-900 mb-20">
//           Top Sellers
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16">
//           {products.map((product) => (
//             <Link 
//               key={product._id} 
//               href={`/product/${product.slug}`} 
//               className="group flex flex-col items-center text-center"
//             >
//               {/* Product Image Container */}
//               <div className="w-full aspect-[4/5] overflow-hidden mb-8 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center p-4 transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
//                 <Image
//                   src={product.imageSrc}
//                   alt={product.name}
//                   width={400}
//                   height={500}
//                   className="transition duration-500 group-hover:scale-105 object-contain"
//                 />
//               </div>

//               {/* Info */}
//               <h3 className="text-lg font-medium text-gray-800 mb-2 tracking-tight">
//                 {product.name}
//               </h3>
//               <p className="text-gray-500 font-light mb-6">
//                 ₹{product.price}
//               </p>

//               {/* CTA */}
//               <button className="px-8 py-2.5 border border-black text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
//                 View Detail
//               </button>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TopSellers() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        const allProducts = data.products || [];
        setProducts(allProducts.slice(0, 3));
      })
      .catch((err) => console.error("Error fetching top sellers:", err));
  }, []);

  return (
    <section className="bg-[#FAFAFA] py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-4 block text-center">
          Customer Favorites
        </span>
        <h2 className="text-4xl font-light tracking-tight text-center text-gray-900 mb-20">
          Top Sellers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16">
          {products.map((product) => (
            <Link 
              key={product._id} 
              href={`/product/${product.slug}`} 
              className="group flex flex-col items-center"
            >
              {/* Image Container: Gallery Style */}
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 mb-8 transition-all duration-700 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-2">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 scale-[1.01] group-hover:scale-110"
                />
                {/* Subtle Overlay on Hover */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
              </div>

              {/* Info: Minimalist Boutique Style */}
              <div className="text-center px-4">
                <h3 className="text-[15px] font-medium text-gray-900 mb-1 tracking-tight">
                  {product.name}
                </h3>
                <p className="text-sm font-light text-gray-500 mb-6">
                  ₹{product.price}
                </p>

                {/* Refined Button */}
                <div className="overflow-hidden inline-block">
                  <span className="relative inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-900 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-900 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-500 after:origin-left pb-1">
                    View Detail
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}