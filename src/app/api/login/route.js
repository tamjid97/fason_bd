import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const db = await dbConnect();
    const collection = db.collection("users");
    
    const { email, password } = await req.json();

    // ইমেইল এবং পাসওয়ার্ড দিয়ে ইউজার খোঁজা
    const user = await collection.findOne({ email: email, password: password });

    if (!user) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    return NextResponse.json({ message: "Login Successful", user }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}