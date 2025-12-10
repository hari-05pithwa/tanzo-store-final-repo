// "use client";

// import Image from "next/image";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// // Dummy cart data
// const cartItems = [
//   { id: 1, name: "Purple T-shirt (Men)", price: "₹ 1199", imageSrc: "/images/men3.jpg", size: "S", quantity: 1, color: "Purple", gender: "Men" },
//   { id: 2, name: "Green T-shirt (Women)", price: "₹ 1499", imageSrc: "/images/women1.jpg", size: "S", quantity: 1, color: "Green", gender: "Women" },
// ];

// // Individual Cart Item
// const CartItem = ({ item }) => {
//   return (
//     <div className="flex items-start justify-between p-5 bg-white border border-black/10 rounded-2xl shadow-sm hover:shadow-md transition mb-6">

//       {/* Left */}
//       <div className="flex items-start space-x-5">

//         {/* Image */}
//         <Image
//           src={item.imageSrc}
//           alt={item.name}
//           width={110}
//           height={110}
//           className="rounded-xl object-cover w-28 h-28 border border-black/10"
//         />

//         {/* Details */}
//         <div className="flex flex-col">
//           <h3 className="text-xl font-medium tracking-tight text-gray-900">
//             {item.name}
//           </h3>

//           {/* Size & Qty */}
//           <div className="flex items-center gap-3 mt-2">
//             <span className="px-3 py-1 text-xs font-medium rounded-full border border-black/20 text-gray-900">
//               Size: {item.size}
//             </span>
//             <span className="px-3 py-1 text-xs font-medium rounded-full border border-black/20 text-gray-900">
//               Qty: {item.quantity}
//             </span>
//           </div>

//           {/* Actions */}
//           <div className="flex gap-3 mt-4">
//             <button className="px-4 py-1.5 text-sm font-medium bg-black text-white rounded-lg hover:bg-gray-800 transition">
//               Buy Now
//             </button>
//             <button className="px-4 py-1.5 text-sm font-medium bg-white text-black rounded-lg border border-black hover:bg-black hover:text-white transition">
//               Remove
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Price */}
//       <div className="text-right">
//         <p className="text-xl font-semibold text-gray-900">{item.price}</p>
//         <p className="text-xs text-gray-500 mt-1">MRP incl. taxes</p>
//       </div>
//     </div>
//   );
// };

// // Main Page
// export default function CartPage() {
//   return (
//     <div className="min-h-screen flex flex-col bg-white">
//       <Navbar />

//       <main className="flex-grow py-12">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h1 className="text-3xl font-semibold mb-10 text-gray-900">Your Cart</h1>

//           {/* Items */}
//           <div className="space-y-4">
//             {cartItems.map((item) => (
//               <CartItem key={item.id} item={item} />
//             ))}
//           </div>

//           {/* Summary */}
//           <div className="mt-10 p-6 bg-white border border-black/10 rounded-2xl shadow-sm">
//             <h2 className="text-2xl font-semibold mb-6 text-gray-900">Order Summary</h2>

//             <div className="flex justify-between text-lg mb-3">
//               <p>Total Items</p>
//               <p>{cartItems.length}</p>
//             </div>

//             <div className="border-t border-black/10 pt-4 mt-2 flex justify-between text-xl font-bold">
//               <p>Total</p>
//               <p>₹ 2698</p>
//             </div>
//           </div>

//           {/* Checkout */}
//           <button className="mt-6 w-full py-3 text-lg font-medium bg-black text-white rounded-xl hover:bg-gray-800 transition">
//             Proceed to Checkout
//           </button>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Purple T-shirt (Men)",
      price: "₹ 1199",
      imageSrc: "/images/men3.jpg",
      size: "S",
      quantity: 1,
    },
    {
      id: 2,
      name: "Green T-shirt (Women)",
      price: "₹ 1499",
      imageSrc: "/images/women1.jpg",
      size: "S",
      quantity: 1,
    },
  ]);

  const [removingItem, setRemovingItem] = useState(null);

  const handleRemove = (id) => {
    setRemovingItem(id);

    setTimeout(() => {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
      setRemovingItem(null);
    }, 350);
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + Number(item.price.replace("₹ ", "")),
    0
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold mb-10">Your Cart</h1>

          {/* If cart is empty */}
          {cartItems.length === 0 && (
            <div className="text-center ">
              <Image
                src="/images/cart.png"
                alt="Empty Cart"
                width={200}
                height={200}
                className="mx-auto mb-6"
              />
              <h2 className="text-2xl font-semibold mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-600">
                Add items to your cart to continue shopping
              </p>
              <Link
                href="/"
                className="
    mt-6
    inline-block
    px-8 py-3 
    text-base font-medium
    rounded-lg
    bg-black text-white
    border border-black
    transition-all duration-200
    hover:bg-white hover:text-black
  "
              >
                Shop Now
              </Link>
            </div>
          )}

          {/* If cart has items */}
          {cartItems.length > 0 && (
            <>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-start justify-between p-5 bg-white border border-black/10 rounded-2xl shadow-sm transition-all duration-300 mb-6
                      ${
                        removingItem === item.id
                          ? "opacity-0 translate-y-5"
                          : ""
                      }
                    `}
                  >
                    <div className="flex items-start space-x-5">
                      <Image
                        src={item.imageSrc}
                        alt={item.name}
                        width={110}
                        height={110}
                        className="rounded-xl object-cover w-28 h-28 border border-black/10"
                      />

                      <div className="flex flex-col">
                        <h3 className="text-xl font-medium">{item.name}</h3>

                        <div className="flex items-center gap-3 mt-2">
                          <span className="px-3 py-1 text-xs font-medium rounded-full border">
                            Size: {item.size}
                          </span>
                          <span className="px-3 py-1 text-xs font-medium rounded-full border">
                            Qty: {item.quantity}
                          </span>
                        </div>

                        <div className="flex gap-3 mt-4">
                          <button className="px-4 py-1.5 text-sm font-medium bg-black text-white rounded-lg hover:bg-gray-800 transition">
                            Buy Now
                          </button>
                          <button
                            onClick={() => handleRemove(item.id)}
                            className="px-4 py-1.5 text-sm font-medium bg-white text-black rounded-lg border hover:bg-black hover:text-white transition"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-xl font-semibold">{item.price}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        MRP incl. taxes
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="mt-10 p-6 bg-white border border-black/10 rounded-2xl shadow-sm">
                <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

                <div className="flex justify-between text-lg mb-3">
                  <p>Total Items</p>
                  <p>{cartItems.length}</p>
                </div>

                <div className="border-t pt-4 mt-2 flex justify-between text-xl font-bold">
                  <p>Total</p>
                  <p>₹ {totalPrice}</p>
                </div>
              </div>

              {/* Checkout */}
              <button className="mt-6 w-full py-3 text-lg font-medium bg-black text-white rounded-xl hover:bg-gray-800 transition">
                Proceed to Checkout
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
