// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function MenSection() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("/api/products")
//       .then((res) => res.json())
//       .then((data) => {
//         const allProducts = data.products || [];
//         const filtered = allProducts
//           .filter((p) => p.gender === "male")
//           .slice(0, 3);
//         setProducts(filtered);
//       })
//       .catch((err) => console.error("Error fetching men products:", err));
//   }, []);

//   return (
//     <section className="bg-[#FAFAFA] py-32 scroll-mt-28" id="men">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-light tracking-tight text-center text-gray-900 mb-20">
//           Men's Essentials
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16 mb-20">
//           {products.map((product) => (
//             <Link 
//               key={product._id} 
//               href={`/product/${product.slug}`} 
//               className="group flex flex-col items-center"
//             >
//               {/* Gallery Style Image Container */}
//               <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 mb-8 transition-all duration-700 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-2">
//                 <Image
//                   src={product.imageSrc}
//                   alt={product.name}
//                   fill
//                   sizes="(max-width: 768px) 100vw, 33vw"
//                   className="object-cover transition-transform duration-700 scale-[1.01] group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
//               </div>

//               {/* Minimalist Info */}
//               <div className="text-center px-4">
//                 <h3 className="text-[15px] font-medium text-gray-900 mb-1 tracking-tight">
//                   {product.name}
//                 </h3>
//                 <p className="text-sm font-light text-gray-500 mb-6">
//                   ₹{product.price}
//                 </p>

//                 {/* Animated Underline Detail */}
//                 <div className="overflow-hidden inline-block">
//                   <span className="relative inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-900 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-900 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-500 after:origin-left pb-1">
//                     View Detail
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         <div className="flex justify-center">
//           <Link 
//             href="/men" 
//             className="px-12 py-4 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-gray-800 transition-all rounded-full shadow-lg"
//           >
//             Explore Men's Collection
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MenSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        const allProducts = data.products || [];
        const filtered = allProducts.filter((p) => p.gender === "male").slice(0, 3);
        setProducts(filtered);
      })
      .catch((err) => console.error("Error fetching men products:", err));
  }, []);

  return (
    <section className="bg-white py-24 scroll-mt-28" id="men">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col mb-16">
          <h2 className="text-6xl font-black tracking-tighter text-gray-900 uppercase">
            The <span className="text-blue-900">Men</span> Edit
          </h2>
          <div className="h-1 w-24 bg-black mt-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Featured Product - Left Side */}
          {products[0] && (
            <div className="lg:col-span-7">
              <Link href={`/product/${products[0].slug}`} className="group relative block">
                <div className="relative aspect-[16/10] lg:aspect-[4/5] overflow-hidden bg-gray-100">
                  <Image
                    src={products[0].imageSrc}
                    alt={products[0].name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute bottom-8 left-8 bg-white p-6 shadow-xl max-w-[240px]">
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">Featured Piece</p>
                    <h3 className="text-lg font-bold mb-2">{products[0].name}</h3>
                    <p className="text-blue-500 font-medium">₹{products[0].price}</p>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Side Products - Right Side */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {products.slice(1, 3).map((product) => (
              <Link key={product._id} href={`/product/${product.slug}`} className="group flex gap-6 items-center border-b border-gray-100 pb-8">
                <div className="relative w-32 h-40 flex-shrink-0 overflow-hidden bg-gray-100">
                  <Image src={product.imageSrc} alt={product.name} fill className="object-cover transition-transform group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-gray-900 group-hover:text-blue-800 transition-colors">{product.name}</h3>
                  <p className="text-gray-500 mt-1">₹{product.price}</p>
                  <span className="inline-block mt-4 text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1">Shop Now</span>
                </div>
              </Link>
            ))}
            
            <Link 
              href="/men" 
              className="mt-4 inline-flex items-center justify-center px-8 py-5 bg-black text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black hover:border-black hover:border-[1px] transition-all"
            >
              View All Men's Essentials
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}