import { NextResponse } from "next/server";
import { connectDB } from "../../../../../lib/mongodb"; // Correct named import
import { auth } from "@clerk/nextjs/server";
import mongoose from "mongoose";

export async function POST(req) {
  try {
    const { sessionClaims } = await auth();
    if (sessionClaims?.email !== "haripithwa2005@gmail.com") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const db = mongoose.connection.db;
    const body = await req.json();

    const product = await db.collection("products").insertOne({
      ...body,
      price: Number(body.price),
      createdAt: new Date(),
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const db = mongoose.connection.db;
    const products = await db.collection("products").find({}).sort({ createdAt: -1 }).toArray();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}