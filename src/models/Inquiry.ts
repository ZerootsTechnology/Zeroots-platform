import mongoose, { Schema, models } from "mongoose";

const inquirySchema = new Schema({
  fullName: { type: String, required: true },
  companyName: { type: String, required: true },
  email: { type: String, required: true },
  interest: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// This line prevents Next.js from crashing by checking if the model already exists before creating it
const Inquiry = models.Inquiry || mongoose.model("Inquiry", inquirySchema);

export default Inquiry;