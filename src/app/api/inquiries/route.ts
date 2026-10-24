import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Inquiry from "@/models/Inquiry";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    // 1. Check if the user is actually logged in
    const cookieStore = cookies();
    const token = cookieStore.get("token");

    if (!token) {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    }

    // 2. Fetch all inquiries and sort them with the newest at the top
    await connectToDatabase();
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });

    return NextResponse.json({ success: true, inquiries }, { status: 200 });
  } catch (error) {
    console.error("Dashboard Error:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}