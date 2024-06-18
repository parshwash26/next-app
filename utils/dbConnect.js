// dbConnect.js
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn && cached.conn.readyState === 1) {
    return cached.conn;
  }

  if (!cached.promise) {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, options)
      .then((mongoose) => {
        console.log("MongoDB connected successfully");
        return mongoose.connection.db;
      })
      .catch((err) => {
        console.error("MongoDB connection error:", err);
        cached.promise = null; // Reset promise if connection fails
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
