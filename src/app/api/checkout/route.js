// // import { connectDB } from "../../../../lib/mongodb";
// // import Order from "../../../../models/Order";
// // import { currentUser } from "@clerk/nextjs/server";
// // import { NextResponse } from "next/server";

// // export async function POST(req) {
// //   try {
// //     await connectDB();
// //     const user = await currentUser();

// //     if (!user) {
// //       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
// //     }

// //     const { cartItems, totalPrice } = await req.json();

// //     if (!cartItems || cartItems.length === 0) {
// //       return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
// //     }

// //     // Create the order in MongoDB
// //     const newOrder = await Order.create({
// //       userId: user.id,
// //       userEmail: user.emailAddresses[0].emailAddress,
// //       items: cartItems.map(item => ({
// //         productId: item._id,
// //         name: item.name,
// //         size: item.size,
// //         quantity: item.quantity,
// //         price: item.price,
// //         imageSrc: item.imageSrc
// //       })),
// //       totalPrice: totalPrice,
// //     });

// //     return NextResponse.json({ 
// //       success: true, 
// //       orderId: newOrder._id 
// //     }, { status: 201 });

// //   } catch (error) {
// //     console.error("Checkout Error:", error);
// //     return NextResponse.json({ error: "Failed to place order" }, { status: 500 });
// //   }
// // }

// import { connectDB } from "../../../../lib/mongodb";
// import Order from "../../../../models/Order";
// import { currentUser } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     await connectDB();
//     const user = await currentUser();

//     if (!user) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//     }

//     const { cartItems, totalPrice, shippingAddress } = await req.json();

//     // Validate that shipping address was provided by frontend
//     if (!shippingAddress) {
//       return NextResponse.json({ error: "Shipping address is required" }, { status: 400 });
//     }

//     // const newOrder = await Order.create({
//     //   userId: user.id,
//     //   customerEmail: user.emailAddresses[0].emailAddress,
//     //   items: cartItems.map(item => ({
//     //     name: item.name,
//     //     quantity: item.quantity,
//     //     price: item.price,
//     //     image: item.imageSrc // Maps imageSrc from cart to 'image' in schema
//     //   })),
//     //   totalAmount: totalPrice,
//     //   shippingAddress: shippingAddress, // Now passed from the frontend
//     //   status: "Processing" // Matches your schema enum
//     // });

//     const newOrder = await Order.create({
//       userId: user.id,
//       customerEmail: user.emailAddresses[0].emailAddress,
//       items: cartItems.map(item => ({
//         name: item.name,
//         quantity: item.quantity,
//         price: item.price,
//         image: item.imageSrc 
//       })),
//       totalAmount: totalPrice,
//       shippingAddress: shippingAddress, 
//       status: "Pending" // MUST match one of your enum options
//     });

//     return NextResponse.json({ success: true, orderId: newOrder._id }, { status: 201 });
//   } catch (error) {
//     console.error("Order Error:", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }



















import { connectDB } from "../../../../lib/mongodb";
import Order from "../../../../models/Order";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const user = await currentUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { cartItems, totalPrice, shippingAddress } = await req.json();

    if (!shippingAddress) {
      return NextResponse.json({ error: "Shipping address is required" }, { status: 400 });
    }

    const newOrder = await Order.create({
      userId: user.id,
      customerEmail: user.emailAddresses[0].emailAddress, // Consistent key
      items: cartItems.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        image: item.imageSrc, // Ensure image URL is saved
        size: item.size
      })),
      totalAmount: totalPrice,
      shippingAddress: {
        fullAddress: shippingAddress.fullAddress,
        fullName: shippingAddress.fullName // Now receiving this from frontend
      },
      status: "Pending",
      createdAt: new Date()
    });

    return NextResponse.json({ success: true, orderId: newOrder._id }, { status: 201 });
  } catch (error) {
    console.error("Order Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}