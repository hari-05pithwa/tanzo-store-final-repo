// // import Image from "next/image";
// // import Link from "next/link";

// // export default function ProductCard({
// //   photo,
// //   title,
// //   price,
// //   slug,
// // }) {
  

// //   return (
// //     <div className="w-[350px] overflow-hidden bg-white cursor-pointer">

// //       {/* IMAGE + RATING */}
// //       <Link href={`/product/${slug}`}>
// //         <div className="relative">
// //           <Image
// //             src={photo}
// //             alt={title}
// //             width={300}
// //             height={300}
// //             className="w-full h-80 object-cover"
// //           />

// //           {/* Rating Box */}
// //           <div className="absolute bottom-2 left-2 bg-white shadow px-2 py-1 rounded-md flex items-center gap-2 text-sm font-semibold">
// //             <span>4.4</span>
// //             <span className="text-teal-500">★</span>
// //             <span className="text-gray-600">16.5k</span>
// //           </div>
// //         </div>

// //         {/* TEXT DETAILS */}
// //         <div className="p-3">
// //           <h2 className="font-semibold text-xl">{title}</h2>

// //           {/* PRICE SECTION */}
// //           <div className="mt-2 flex items-center gap-2">
// //             <span className="font-regular text-xl text-gray-700">Rs. {price}</span>
// //           </div>
// //         </div>
// //       </Link>

// //       {/* ADD BUTTON */}
// //       <button className="w-full cursor-pointer px-8 py-3 bg-black text-white font-medium">
// //         Add to Cart
// //       </button>
// //     </div>
// //   );
// // }

// import Image from "next/image";
// import Link from "next/link";

// export default function ProductCard({
//   photo,
//   title,
//   price,
//   slug,
// }) {
//   return (
//     <div className="group w-full max-w-[350px] flex flex-col items-center">
//       <Link href={`/product/${slug}`} className="w-full">
//         {/* Gallery Style Image Container */}
//         <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 transition-all duration-700 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-2">
//           <Image
//             src={photo}
//             alt={title}
//             fill
//             sizes="(max-width: 768px) 100vw, 350px"
//             className="object-cover transition-transform duration-700 scale-[1.01] group-hover:scale-110"
//           />
          
//           {/* Subtle Overlay on Hover */}
//           <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />

//           {/* Minimalist Rating Box */}
//           <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1.5 text-[10px] font-bold tracking-wider text-gray-800 shadow-sm border border-gray-100">
//             <span>4.4</span>
//             <span className="text-yellow-500 text-xs">★</span>
//             <span className="text-gray-400 border-l border-gray-200 pl-1.5 ml-0.5">16.5K</span>
//           </div>
//         </div>

//         {/* Text Content */}
//         <div className="mt-8 text-center px-2">
//           <h2 className="text-[15px] font-medium text-gray-900 mb-1 tracking-tight transition-colors duration-300 group-hover:text-gray-600">
//             {title}
//           </h2>
//           <p className="text-sm font-light text-gray-500 mb-6 uppercase tracking-widest">
//             ₹{price}
//           </p>

//           {/* "View Detail" Underline Interaction */}
//           <div className="overflow-hidden inline-block mb-2">
//             <span className="relative inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-900 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-gray-900 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-500 after:origin-left pb-1">
//               View Detail
//             </span>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  photo,
  title,
  price,
  slug,
}) {
  return (
    /* Added mx-auto to ensure the card itself centers within its grid cell/container */
    <div className="group w-full max-w-[350px] mx-auto flex flex-col items-center">
      <Link href={`/product/${slug}`} className="w-full flex flex-col items-center">
        {/* Gallery Style Image Container */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 transition-all duration-700 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-2">
          <Image
            src={photo}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 350px"
            className="object-cover transition-transform duration-700 scale-[1.01] group-hover:scale-110"
          />
          
          {/* Subtle Overlay on Hover */}
          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />

          {/* Minimalist Rating Box */}
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1.5 text-[10px] font-bold tracking-wider text-gray-800 shadow-sm border border-gray-100">
            <span>4.4</span>
            <span className="text-yellow-500 text-xs">★</span>
            <span className="text-gray-400 border-l border-gray-200 pl-1.5 ml-0.5">16.5K</span>
          </div>
        </div>

        {/* Text Content */}
        <div className="mt-8 text-center px-2 w-full flex flex-col items-center">
          <h2 className="text-[15px] font-medium text-gray-900 mb-1 tracking-tight transition-colors duration-300 group-hover:text-gray-600">
            {title}
          </h2>
          <p className="text-sm font-light text-gray-500 mb-6 uppercase tracking-widest">
            ₹{price}
          </p>

          {/* "View Detail" Underline Interaction */}
          <div className="overflow-hidden inline-block mb-2">
            <span className="relative inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-900 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-gray-900 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-500 after:origin-left pb-1">
              View Detail
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}