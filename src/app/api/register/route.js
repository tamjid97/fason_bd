import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const db = await dbConnect();
    const collection = db.collection("users");
    
    const data = await req.json();

    // ডাটাবেসে সেভ করার আগে চেক করুন ডাটা ঠিক আছে কি না
    if (!data.email || !data.password) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const result = await collection.insertOne({
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
      createdAt: new Date()
    });

    return NextResponse.json({ message: "Registered!", id: result.insertedId }, { status: 201 });
  } catch (err) {
    console.error("API Error:", err); // এটি আপনার VS Code টার্মিনালে এরর দেখাবে
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}