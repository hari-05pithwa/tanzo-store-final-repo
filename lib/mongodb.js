import mongoose from "mongoose";

export async function connectDB() {
  try {
    if (mongoose.connection.readyState === 1) {
      mongoose.connection.asPromise();
      console.log("DB Cpnected!");
    } else {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("DB zCpnected!");
    }
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
  }
}
