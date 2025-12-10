// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function AllProducts() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("/api/products")
//       .then((res) => res.json())
//       .then((data) => setProducts(data.products))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="p-4 md:p-10 lg:p-20">
//       <h2 className="text-3xl font-bold mb-10 text-center">All Products</h2>
      
//       {/* --- START OF GRID MODIFICATION ---
//         Applying responsive grid:
//         - grid-cols-1: One column on small screens (mobile)
//         - md:grid-cols-2: Two columns on medium screens (tablet)
//         - lg:grid-cols-3: Three columns on large screens (desktop)
//       */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {products.map((product) => (
//           <Link
//             key={product.slug}
//             href={`/product/${product.slug}`}
//             className="group flex flex-col items-center text-center cursor-pointer p-4 border rounded-xl shadow-sm hover:shadow-lg transition duration-300"
//           >
//             <div className="w-full max-w-xs flex justify-center items-center overflow-hidden mb-6">
//               <Image
//                 src={product.imageSrc}
//                 alt={product.name}
//                 width={400}
//                 height={400}
//                 className="transition duration-300 group-hover:scale-105 object-cover aspect-square rounded-lg"
//                 priority={false}
//               />
//             </div>

//             <div className="w-full">
//               <h3 className="text-xl md:text-xl font-semibold text-gray-900 mb-2">
//                 {product.name}
//               </h3>
//               <p className="text-lg font-medium text-gray-700 mb-2">
//                 ₹{product.price}
//               </p>
//               <p className="text-sm text-gray-500 mb-4">
//                 {product.gender}
//               </p>
//               <button
//                 // onClick={(e) => handleAddToCartClick(e, product.id, product.name)}
//                 className="
//                   w-full max-w-xs px-6 py-3 border border-black 
//                   bg-white text-black transition hover:bg-black hover:text-white
//                   rounded-md font-medium
//                 "
//               >
//                 View Product
//               </button>
//             </div>
//           </Link>
//         ))}
//       </div>
//       {/* --- END OF GRID MODIFICATION --- */}
//     </div>
//   );
// }
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
    <div className="px-6 md:px-14 lg:px-24 py-10">
      <h2 className="text-3xl font-semibold text-center mb-14">
        All Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10">
        {products.map((product) => (
          <div key={product.slug} className="flex flex-col items-center">
            
            <Link href={`/product/${product.slug}`} className="block w-full">
              <div className="overflow-hidden rounded-xl w-full">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover rounded-xl transition duration-300 hover:scale-105"
                />
              </div>
            </Link>

            <h3 className="text-lg font-medium mt-5 text-center">
              {product.name}
            </h3>

            <p className="text-md text-gray-700 mb-4 text-center">
              ₹{product.price}
            </p>

            <Link
              href={`/product/${product.slug}`}
              className="border border-black px-12 py-3 text-sm hover:bg-black hover:text-white transition duration-300"
            >
              View Product
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
}
