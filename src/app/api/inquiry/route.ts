import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Inquiry from "@/models/Inquiry";

export async function POST(req: Request) {
  try {
    // 1. Connect to MongoDB
    await connectToDatabase();
    
    // 2. Grab the data sent from the frontend form
    const data = await req.json();
    
    // 3. Save it to the database
    const newInquiry = await Inquiry.create(data);
    
    // 4. Send a success message back to the frontend
    return NextResponse.json({ message: "Inquiry saved successfully", success: true }, { status: 201 });
    
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ message: "Failed to save inquiry", success: false }, { status: 500 });
  }
}