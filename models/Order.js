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