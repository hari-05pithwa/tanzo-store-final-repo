import { NextResponse } from "next/server";
import { connectDB } from "../../../../../lib/mongodb"; // Correct named import
import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export async function GET() {
  try {
    await connectDB();
    const db = mongoose.connection.db;
    const orders = await db.collection("orders").find({}).sort({ createdAt: -1 }).toArray();
    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    const { orderId, status } = await req.json();
    await connectDB();
    const db = mongoose.connection.db;

    await db.collection("orders").updateOne(
      { _id: new ObjectId(orderId) },
      { $set: { status: status } }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}