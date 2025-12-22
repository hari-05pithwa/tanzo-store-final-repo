// import { connectDB } from "../../../../lib/mongodb";
// import Product from "../../../../models/Product";

// export async function GET() {
//   try {
//     await connectDB();
//     const products = await Product.find({});
    
//     return Response.json({
//       products,
//     });
//   } catch (err) {
//     return Response.json(
//       { message: err.message },
//       { status: 500 }
//     );
//   }
// }
// import { connectDB } from "../../../../lib/mongodb";
// import Product from "../../../../models/Product";

// import { auth } from "@clerk/nextjs/server";

// export async function POST(req) {
//   try {
//     const { userId } = await auth();
//     if (!userId) {
//       return Response.json({ message: "Unauthorized" }, { status: 401 });
//     }

//     await connectDB();
//     const body = await req.json();

//     // Create the product in MongoDB Atlas
//     const newProduct = await Product.create(body);

//     return Response.json(newProduct, { status: 201 });
//   } catch (err) {
//     return Response.json({ message: err.message }, { status: 500 });
//   }
// }
import { connectDB } from "../../../../lib/mongodb";
import Product from "../../../../models/Product";

export async function GET() {
  try {
    await connectDB();
    const products = await Product.find({}).sort({ createdAt: -1 });
    // Wrap the array in an object so data.products works in the frontend
    return Response.json({ products }, { status: 200 });
  } catch (err) {
    console.error("Fetch Error:", err);
    return Response.json({ products: [], message: "Failed" }, { status: 500 });
  }
}