import mongoose from "mongoose";

if (!process.env.DB_CONNECTION) {
  throw new Error("check connection string please");
}

const cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectedDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(process.env.DB_CONNECTION)
      .then((mongoose) => {
        return mongoose;
      });
  }

  cached.conn = await cached.promise;
  (global as any).mongoose = cached;

  return cached.conn;
}
