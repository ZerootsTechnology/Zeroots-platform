import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Admin from "@/models/Admin";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const { email, password } = await req.json();

    // 1. Check if any admin exists in the database
    const adminCount = await Admin.countDocuments();
    let admin;

    if (adminCount === 0) {
      // 2a. FIRST TIME SETUP: Automatically register the first user as the Admin
      const hashedPassword = await bcrypt.hash(password, 10);
      admin = await Admin.create({ email, password: hashedPassword });
    } else {
      // 2b. NORMAL LOGIN: Verify email and password
      admin = await Admin.findOne({ email });
      if (!admin) {
        return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
      }
      
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) {
        return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
      }
    }

    // 3. Create a secure session token
    const secret = process.env.JWT_SECRET || "fallback_secret";
    const token = jwt.sign({ adminId: admin._id }, secret, { expiresIn: "1d" });

    // 4. Send success response and set the token in a secure cookie
    const response = NextResponse.json({ success: true, message: "Login successful" }, { status: 200 });
    
    response.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });

    return response;

  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}