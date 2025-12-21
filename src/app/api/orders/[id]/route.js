// import { connectDB } from "../../../../../lib/mongodb";
// import Order from "../../../../../models/Order";
// import { currentUser } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// export async function DELETE(req, { params }) {
//   try {
//     await connectDB();
//     const user = await currentUser();
    
//     // In newer Next.js versions, params might need to be awaited
//     const resolvedParams = await params;
//     const { id } = resolvedParams;

//     console.log("Attempting to delete Order ID:", id); // Debugging
//     console.log("Current Clerk User ID:", user?.id);    // Debugging

//     if (!user) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//     }

//     // Look for the order
//     const order = await Order.findOne({ _id: id, userId: user.id });

//     if (!order) {
//       console.log("Order not found in DB with that ID and UserID");
//       return NextResponse.json({ error: "Order not found" }, { status: 404 });
//     }

//     if (order.status !== "Pending") {
//       return NextResponse.json({ error: "Cannot cancel processed order" }, { status: 400 });
//     }

//     await Order.findByIdAndDelete(id);

//     return NextResponse.json({ success: true }, { status: 200 });
//   } catch (error) {
//     console.error("Cancellation Error:", error);
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// }
import { connectDB } from "../../../../../lib/mongodb";
import Order from "../../../../../models/Order";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const user = await currentUser();
    
    // 1. Await params to get the ID from the URL
    const resolvedParams = await params;
    const { id } = resolvedParams;

    // 2. Debugging: Check your terminal to see if these match Atlas
    console.log("Cancelling Order ID:", id);
    console.log("User ID from Clerk:", user?.id);

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 3. Find the order using both Order ID and User ID for security
    const order = await Order.findOne({ _id: id, userId: user.id });

    if (!order) {
      console.log("FAILED: Order not found in database for this user.");
      return NextResponse.json({ error: "Order not found or unauthorized" }, { status: 404 });
    }

    // 4. Only allow deletion if the status is still Pending
    if (order.status !== "Pending") {
      return NextResponse.json({ error: "Cannot cancel an order that is already processed" }, { status: 400 });
    }

    await Order.findByIdAndDelete(id);

    return NextResponse.json({ success: true, message: "Order cancelled" }, { status: 200 });
  } catch (error) {
    console.error("Delete API Error:", error);
    return NextResponse.json({ error: "Failed to cancel order" }, { status: 500 });
  }
}