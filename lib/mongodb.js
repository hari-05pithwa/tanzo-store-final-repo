// import mongoose from "mongoose";

// export async function connectDB() {
//   try {
//     if (mongoose.connection.readyState === 1) {
//       mongoose.connection.asPromise();
//       console.log("DB Connected!");
//     } else {
//       await mongoose.connect(process.env.MONGODB_URI);
//       console.log("DB Connected!");
//     }
//   } catch (err) {
//     console.error("MongoDB Connection Error:", err);
//   }
// }






import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

export async function connectDB() {
  try {
    // If already connected, don't try to connect again
    if (mongoose.connection.readyState === 1) {
      return mongoose.connection.asPromise();
    }

    // Set connection options for better stability in production
    const opts = {
      bufferCommands: false,
    };

    await mongoose.connect(MONGODB_URI, opts);
    console.log("DB Connected Successfully!");
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
    throw err; // Throw error so the API knows the connection failed
  }
}