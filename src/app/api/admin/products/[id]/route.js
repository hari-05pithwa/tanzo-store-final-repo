// import { NextResponse } from "next/server";
// // Counting back: [id] -> products -> admin -> api -> app -> src (lib is here)
// import { connectDB } from "../../../../../../lib/mongodb"; 
// import Product from "../../../../../../models/Product";

// // 1. GET SINGLE PRODUCT
// export async function GET(req, { params }) {
//   try {
//     await connectDB();
//     const { id } = params;
//     const product = await Product.findById(id);
//     if (!product) return NextResponse.json({ error: "Not Found" }, { status: 404 });
//     return NextResponse.json(product, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
//   }
// }

// import { NextResponse } from "next/server";
// import { connectDB } from "../../../../../../lib/mongodb"; 
// import Product from "../../../../../../models/Product";

// export async function GET(req, { params }) {
//   try {
//     await connectDB();
//     const { id } = params; // This will now be a valid MongoDB ID
//     const product = await Product.findById(id);
    
//     if (!product) {
//       return NextResponse.json({ error: "Product not found" }, { status: 404 });
//     }
//     return NextResponse.json(product, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }

// // 2. DELETE PRODUCT
// export async function DELETE(req, { params }) {
//   try {
//     await connectDB();
//     const { id } = params;
//     await Product.findByIdAndDelete(id);
//     return NextResponse.json({ message: "Product Purged" }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: "Purge Failed" }, { status: 500 });
//   }
// }

// // 3. EDIT PRODUCT
// export async function PATCH(req, { params }) {
//   try {
//     await connectDB(); // Fixed the typo: was connectMonthgoDB
//     const { id } = params;
//     const body = await req.json();
//     const updatedProduct = await Product.findByIdAndUpdate(id, body, { new: true });
//     return NextResponse.json(updatedProduct, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: "Update Failed" }, { status: 500 });
//   }
// }








import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb"; 
import Product from "@/models/Product";

// 1. GET SINGLE PRODUCT
export async function GET(req, { params }) {
  try {
    await connectDB();
    const { id } = await params; // Ensure params are awaited in newer Next.js versions
    const product = await Product.findById(id);
    
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// 2. DELETE PRODUCT
export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    await Product.findByIdAndDelete(id);
    return NextResponse.json({ message: "Product Purged" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Purge Failed" }, { status: 500 });
  }
}

// 3. EDIT PRODUCT
export async function PATCH(req, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await req.json();
    const updatedProduct = await Product.findByIdAndUpdate(id, body, { new: true });
    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Update Failed" }, { status: 500 });
  }
}