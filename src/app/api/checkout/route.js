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

    const { cartItems, totalPrice } = await req.json();

    if (!cartItems || cartItems.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    // Create the order in MongoDB
    const newOrder = await Order.create({
      userId: user.id,
      userEmail: user.emailAddresses[0].emailAddress,
      items: cartItems.map(item => ({
        productId: item._id,
        name: item.name,
        size: item.size,
        quantity: item.quantity,
        price: item.price,
        imageSrc: item.imageSrc
      })),
      totalPrice: totalPrice,
    });

    return NextResponse.json({ 
      success: true, 
      orderId: newOrder._id 
    }, { status: 201 });

  } catch (error) {
    console.error("Checkout Error:", error);
    return NextResponse.json({ error: "Failed to place order" }, { status: 500 });
  }
}