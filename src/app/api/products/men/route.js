import { connectDB } from "../../../../../lib/mongodb";
import Product from "../../../../../models/Product";

export async function GET() {
  try {
    await connectDB();

    const products = await Product.find({ gender: "male" });

    return Response.json({ products });
  } catch (err) {
    return Response.json(
      { message: err.message },
      { status: 500 }
    );
  }
}
