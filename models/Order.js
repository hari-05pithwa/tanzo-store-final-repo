// // import mongoose from "mongoose";

// // const OrderSchema = new mongoose.Schema({
// //   userId: { type: String, required: true },
// //   userEmail: { type: String, required: true },
// //   items: [
// //     {
// //       productId: { type: String, required: true },
// //       name: { type: String, required: true },
// //       size: { type: String, required: true },
// //       quantity: { type: Number, required: true },
// //       price: { type: Number, required: true },
// //       imageSrc: { type: String },
// //     },
// //   ],
// //   totalPrice: { type: Number, required: true },
// //   status: { type: String, default: "Pending" },
// // }, { timestamps: true });

// // // This "||" check is important for Next.js hot-reloading
// // export default mongoose.models.Order || mongoose.model("Order", OrderSchema);

// import mongoose from "mongoose";

// const OrderSchema = new mongoose.Schema({
//   userId: { type: String, required: true },
//   customerEmail: { type: String, required: true },
//   items: [
//     {
//       name: { type: String, required: true },
//       quantity: { type: Number, required: true },
//       price: { type: Number, required: true },
//       image: { type: String },
//     }
//   ],
//   totalAmount: { type: Number, required: true },
//   status: { 
//     type: String, 
//     default: "Processing", 
//     enum: ["Processing", "Shipped", "Delivered", "Cancelled"] 
//   },
//   shippingAddress: { type: Object, required: true },
// }, { timestamps: true });

// export default mongoose.models.Order || mongoose.model("Order", OrderSchema);



//og
// import mongoose from "mongoose";

// const OrderSchema = new mongoose.Schema({
//   userId: { type: String, required: true },
//   customerEmail: { type: String, required: true },
//   items: [
//     {
//       name: { type: String, required: true },
//       quantity: { type: Number, required: true },
//       price: { type: Number, required: true },
//       image: { type: String },
//     }
//   ],
//   totalAmount: { type: Number, required: true },
//   status: { 
//     type: String, 
//     default: "Pending", 
//     enum: ["Pending", "Processing", "Delivered"]
//     // enum: ["Pending", "Delivered"] // Cleaned up to only your two required statuses
//   },
//   shippingAddress: { type: Object, required: true },
// }, { timestamps: true });

// export default mongoose.models.Order || mongoose.model("Order", OrderSchema);










import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  customerEmail: { type: String, required: true },
  items: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      image: { type: String },
    }
  ],
  totalAmount: { type: Number, required: true },
  status: { 
    type: String, 
    default: "Pending", 
    enum: ["Pending", "Delivered"] // Strictly only these two
  },
  shippingAddress: { type: Object, required: true },
}, { timestamps: true });

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);