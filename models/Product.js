// import mongoose from "mongoose";

// const ProductSchema = new mongoose.Schema(
//   {
//     slug: { type: String, unique: true, required: true },
//     imageSrc: { type: String, required: true }, // Cloudinary URL
//     name: { type: String, required: true },
//     description: { type: String, required: true },
//     material: { type: String, required: true },
//     color: { type: String, required: true },
//     price: { type: Number, required: true },
//     sizes: [{ type: String }], // ["S","M","L","XL"]
//     collection: 'products',
//     // ⭐ Added gender field
//     gender: { 
//       type: String, 
//       enum: ["male", "female", "unisex"], 
//       required: true 
//     }
//   },
//   { timestamps: true }
// );

// export default mongoose.models.Product ||
//   mongoose.model("Product", ProductSchema);







import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    slug: { type: String, unique: true, required: true },
    imageSrc: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    material: { type: String, required: true },
    color: { type: String, required: true },
    price: { type: Number, required: true },
    sizes: [{ type: String }],
    gender: { 
      type: String, 
      enum: ["male", "female", "unisex"], 
      required: true 
    }
  },
  { 
    timestamps: true,
    collection: 'products' // <--- This belongs here, not above
  }
);

// This ensures we don't redefine the model if it already exists
export default mongoose.models.Product || mongoose.model("Product", ProductSchema);