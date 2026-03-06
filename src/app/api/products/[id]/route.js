import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const db = await dbConnect();
    const collection = db.collection("products");
    
    // params থেকে id টা বের করে আনা
    const { id } = await params; 

    // আইডি ভ্যালিড কি না চেক করা
    if (!id || !ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 1) {
      return NextResponse.json({ message: "Product deleted successfully" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }
  } catch (err) {
    console.error("Delete Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}