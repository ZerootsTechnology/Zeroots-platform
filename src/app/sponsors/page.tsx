"use client";

import { useState } from "react";

export default function Sponsors() {
  // This state holds the data exactly as our MongoDB schema expects it
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    interest: "Title Sponsor",
    message: "",
  });
  
  // This state updates the button text to show success or error messages
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    
    try {
      // Sends the data to the API route we created in the last step
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Success! We have received your inquiry.");
        setFormData({ fullName: "", companyName: "", email: "", interest: "Title Sponsor", message: "" });
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch (error) {
      setStatus("Error occurred. Please check your connection.");
    }
  };

  return (
    <main className="min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Partner With Us</h1>
          <p className="text-textSecondary max-w-2xl mx-auto">
            Join Project Bharat. We offer tiered sponsorship packages for brands looking to reach a national audience across 780+ districts.
          </p>
        </div>

        {/* Sponsorship Cards Layout (Matches your exact visual design) */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 items-center">
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full">
            <h3 className="text-xl font-bold text-primary mb-2">Tech Partner</h3>
            <p className="text-sm text-textSecondary mb-6">For hardware and software brands powering our telemetry setup.</p>
            <ul className="space-y-3 text-sm text-textSecondary">
              <li>✓ Logo on expedition vehicles</li>
              <li>✓ Tech integration showcase</li>
              <li>✓ Social media mentions</li>
            </ul>
          </div>

          <div className="bg-primary text-white p-8 rounded-xl shadow-lg border border-accent relative transform md:-translate-y-4">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-surface text-primary text-xs font-bold px-3 py-1 rounded-full border border-gray-200">
              Most Popular
            </div>
            <h3 className="text-xl font-bold mb-2">Title Sponsor</h3>
            <p className="text-sm text-gray-300 mb-6">Maximum visibility for your brand across the entire India on Wheels journey.</p>
            <ul className="space-y-3 text-sm text-gray-200">
              <li>✓ "Presented By" naming rights</li>
              <li>✓ Primary logo placement on all assets</li>
              <li>✓ Dedicated documentary segments</li>
              <li>✓ VIP access to telemetry dashboard</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full">
            <h3 className="text-xl font-bold text-primary mb-2">Support Partner</h3>
            <p className="text-sm text-textSecondary mb-6">For brands supporting our logistics, gear, and crew provisions.</p>
            <ul className="space-y-3 text-sm text-textSecondary">
              <li>✓ Brand placement on crew gear</li>
              <li>✓ Product testing & feedback</li>
              <li>✓ Website logo placement</li>
            </ul>
          </div>
        </div>

        {/* Functional Form Section */}
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary mb-2">Submit an Inquiry</h2>
            <p className="text-sm text-textSecondary">Request our official pitch deck or propose a custom partnership.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-primary mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                  placeholder="Umesh Chandra Sahu"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-2">Company Name</label>
                <input 
                  type="text" 
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                  placeholder="Zeroots Technology"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-primary mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                  placeholder="hello@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-2">Sponsorship Interest</label>
                <select 
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full bg-surface border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                >
                  <option value="Title Sponsor">Title Sponsor</option>
                  <option value="Tech Partner">Tech Partner</option>
                  <option value="Support Partner">Support Partner</option>
                  <option value="Custom Partnership">Custom Partnership</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-primary mb-2">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-surface border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary resize-none"
                placeholder="Tell us about how you would like to collaborate..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === "Sending..."}
              className="w-full bg-primary text-white font-bold text-lg py-4 rounded-lg hover:bg-secondary transition-colors disabled:bg-gray-400"
            >
              {status === "Sending..." ? "Sending..." : "Submit Inquiry"}
            </button>

            {status && status !== "Sending..." && (
              <p className={`text-center font-bold mt-4 ${status.includes("Success") ? "text-success" : "text-danger"}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}