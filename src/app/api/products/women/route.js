import { connectDB } from "../../../../../lib/mongodb";
import Product from "../../../../../models/Product";

export async function GET() {
  try {
    await connectDB();
    // Filter by gender: "female" (make sure this matches your MongoDB data)
    const products = await Product.find({ gender: "female" }); 

    return Response.json({ products });
  } catch (err) {
    return Response.json({ message: err.message }, { status: 500 });
  }
}