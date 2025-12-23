// import { NextResponse } from "next/server";
// // Import the connectDB function instead
// import { connectDB } from "../../../../../lib/mongodb"; 
// import { auth } from "@clerk/nextjs/server";
// import mongoose from "mongoose";

// export async function GET() {
//   try {
//     const { sessionClaims } = await auth();
    
//     // Admin Security Check
//     if (sessionClaims?.email !== "haripithwa2005@gmail.com") {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//     }

//     // Connect using Mongoose
//     await connectDB();
//     const db = mongoose.connection.db;

//     // Fetch stats using the raw DB object from Mongoose
//     const orders = await db.collection("orders").find({}).toArray();
//     const totalProducts = await db.collection("products").countDocuments();

//     const totalRevenue = orders.reduce((sum, order) => sum + (order.totalPrice || 0), 0);
//     const pendingOrders = orders.filter(o => o.status !== "delivered").length;
//     const completedOrders = orders.filter(o => o.status === "delivered").length;

//     return NextResponse.json({
//       totalRevenue,
//       totalOrders: orders.length,
//       totalProducts,
//       pendingOrders,
//       completedOrders
//     });
//   } catch (error) {
//     console.error("Dashboard Stats Error:", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }





import { connectDB } from "../../../../../lib/mongodb"; 
import Order from "../../../../../models/Order";
import Product from "../../../../../models/Product";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    // 1. Total Revenue: Sum ONLY if status is "Delivered"
    const revenueData = await Order.aggregate([
      { $match: { status: "Delivered" } },
      { $group: { _id: null, total: { $sum: "$totalAmount" } } }
    ]);
    const totalRevenue = revenueData.length > 0 ? revenueData[0].total : 0;

    // 2. Pending Shipments: Count ONLY if status is "Pending"
    const pendingOrders = await Order.countDocuments({ status: "Pending" });

    // 3. Completed Orders: Count ONLY if status is "Delivered" 
    // (This drives your "Business Health" progress bar)
    const completedOrders = await Order.countDocuments({ status: "Delivered" });

    // 4. General Stats
    const totalOrders = await Order.countDocuments();
    const totalProducts = await Product.countDocuments();

    return NextResponse.json({
      totalRevenue,
      pendingOrders,
      completedOrders,
      totalOrders,
      totalProducts
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}