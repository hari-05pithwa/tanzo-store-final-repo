import { connectDB } from "../../../../lib/mongodb";
import Product from "../../../../models/Product";

export async function GET() {
  try {
    await connectDB();
    const products = await Product.find();
    return Response.json({ success: true, products });
  } catch (err) {
    return Response.json({ success: false, message: err.message }, { status: 500 });
  }
}