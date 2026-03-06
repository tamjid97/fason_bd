import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

// ১. ডাটাবেসে প্রোডাক্ট সেভ করার জন্য (POST)
export async function POST(req) {
  try {
    const db = await dbConnect();
    const collection = db.collection("products");
    const data = await req.json();

    // ডাটাবেসে ইনসার্ট
    const result = await collection.insertOne({
      ...data,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, id: result.insertedId }, { status: 201 });
  } catch (err) {
    console.error("POST Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// ২. ডাটাবেস থেকে সব প্রোডাক্ট পাওয়ার জন্য (GET)
export async function GET() {
  try {
    const db = await dbConnect();
    const collection = db.collection("products");

    // সব প্রোডাক্ট খুঁজে বের করা এবং অ্যারে হিসেবে নেওয়া
    const products = await collection.find({}).sort({ createdAt: -1 }).toArray();

    return NextResponse.json(products, { status: 200 });
  } catch (err) {
    console.error("GET Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}