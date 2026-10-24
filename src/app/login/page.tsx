"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Success! Redirecting...");
        router.push("/dashboard"); // Redirects to the admin panel
      } else {
        setStatus(data.error || "Invalid credentials");
        setIsLoading(false);
      }
    } catch (error) {
      setStatus("Network error. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-12">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200 max-w-md w-full">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading font-bold text-primary mb-2">
            Zeroots <span className="text-accent">Portal</span>
          </h1>
          <p className="text-sm text-textSecondary">
            Sign in to access your telemetry dashboard.
          </p>
        </div>

        {/* Functional Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-primary mb-2">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-surface border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
              placeholder="admin@zeroots.com" 
            />
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-bold text-primary">Password</label>
              <a href="#" className="text-xs font-bold text-accent hover:text-yellow-600">Forgot?</a>
            </div>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-surface border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
              placeholder="••••••••" 
            />
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-primary text-white font-bold text-lg py-3 rounded-lg hover:bg-secondary transition-colors mt-2 disabled:bg-gray-400"
          >
            {isLoading ? "Authenticating..." : "Sign In"}
          </button>

          {/* Status Message */}
          {status && (
            <p className={`text-center text-sm font-bold mt-4 ${status.includes("Success") ? "text-success" : "text-danger"}`}>
              {status}
            </p>
          )}
        </form>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-textSecondary pt-6 border-t border-gray-100">
          Need enterprise access? <Link href="/sponsors" className="font-bold text-primary hover:text-accent transition-colors">Partner with us</Link>
        </div>

      </div>
    </main>
  );
}