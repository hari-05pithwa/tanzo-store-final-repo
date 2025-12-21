// import { NextResponse } from 'next/server';
// // import { getDbClient } from '@/lib/mongodb'; 
// import { connectDB } from '../../../../../lib/mongodb';

// export async function GET(request, { params }) {
//     const slug = params.slug;

//     if (!slug) {
//         return NextResponse.json({ message: "Slug is required" }, { status: 400 });
//     }

//     try {
//         const db = await getDbClient();
//         const collection = db.collection('products'); // Use your actual collection name

//         const product = await collection.findOne({ slug: slug });

//         if (!product) {
//             return NextResponse.json({ message: "Product not found" }, { status: 404 });
//         }

//         const serializableProduct = {
//             ...product,
//             _id: product._id.toString(),
//         };

//         return NextResponse.json(serializableProduct, { status: 200 });
//     } catch (error) {
//         console.error("Database fetch error:", error);
//         return NextResponse.json({ message: "Internal server error" }, { status: 500 });
//     }
// }

import { connectDB } from "../../../../../lib/mongodb";
import Product from "../../../../../models/Product";

export async function GET(request, props) {
  const params = await props.params;
  const { slug } = params;

  try {
    await connectDB();
    // Find one product where the slug matches the URL
    const product = await Product.findOne({ slug });

    if (!product) {
      return Response.json({ message: "Product not found" }, { status: 404 });
    }

    return Response.json(product);
  } catch (err) {
    return Response.json({ message: err.message }, { status: 500 });
  }
}