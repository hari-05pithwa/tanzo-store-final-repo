import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  photo,
  name,
  price,
  slug,
}) {
  

  return (
    <div className="w-[350px] overflow-hidden bg-white cursor-pointer">

      {/* IMAGE + RATING */}
      <Link href={`/product/${slug}`}>
        <div className="relative">
          <Image
            src={photo}
            alt={name}
            width={300}
            height={300}
            className="w-full h-80 object-cover"
          />

          {/* Rating Box */}
          <div className="absolute bottom-2 left-2 bg-white shadow px-2 py-1 rounded-md flex items-center gap-2 text-sm font-semibold">
            <span>4.4</span>
            <span className="text-teal-500">★</span>
            <span className="text-gray-600">16.5k</span>
          </div>
        </div>

        {/* TEXT DETAILS */}
        <div className="p-3">
          <h2 className="font-semibold text-lg">{name}</h2>
          <p className="text-gray-600 text-sm">Solid Lounge T-shirt</p>

          {/* PRICE SECTION */}
          <div className="mt-2 flex items-center gap-2">
            <span className="text-lg font-semibold text-xl text-gray-900">Rs. {price}</span>
          </div>
        </div>
      </Link>

      {/* ADD BUTTON */}
      <button className="w-full cursor-pointer px-8 py-3 bg-black text-white font-medium">
        Add to Cart
      </button>
    </div>
  );
}
