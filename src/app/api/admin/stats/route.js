import { NextResponse } from "next/server";
// Import the connectDB function instead
import { connectDB } from "../../../../../lib/mongodb"; 
import { auth } from "@clerk/nextjs/server";
import mongoose from "mongoose";

export async function GET() {
  try {
    const { sessionClaims } = await auth();
    
    // Admin Security Check
    if (sessionClaims?.email !== "haripithwa2005@gmail.com") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Connect using Mongoose
    await connectDB();
    const db = mongoose.connection.db;

    // Fetch stats using the raw DB object from Mongoose
    const orders = await db.collection("orders").find({}).toArray();
    const totalProducts = await db.collection("products").countDocuments();

    const totalRevenue = orders.reduce((sum, order) => sum + (order.totalPrice || 0), 0);
    const pendingOrders = orders.filter(o => o.status !== "delivered").length;
    const completedOrders = orders.filter(o => o.status === "delivered").length;

    return NextResponse.json({
      totalRevenue,
      totalOrders: orders.length,
      totalProducts,
      pendingOrders,
      completedOrders
    });
  } catch (error) {
    console.error("Dashboard Stats Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}