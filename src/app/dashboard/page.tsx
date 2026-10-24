"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Dashboard() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const res = await fetch("/api/inquiries");
        const data = await res.json();

        if (res.ok) {
          setInquiries(data.inquiries);
        } else {
          router.push("/login");
        }
      } catch (error) {
        console.error("Error fetching inquiries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInquiries();
  }, [router]);

  // Securely logs the user out and redirects to the login screen
  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center font-bold text-primary">
        Loading secure data...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-surface p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-heading font-bold text-primary">Admin Dashboard</h1>
            <p className="text-textSecondary mt-1">Manage your Project Bharat sponsorships and inquiries.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-bold text-primary hover:text-accent transition-colors">
              View Website
            </Link>
            <button 
              onClick={handleLogout}
              className="text-sm font-bold text-danger hover:text-red-700 border border-red-200 px-5 py-2 rounded-lg bg-red-50 hover:bg-red-100 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-primary">
                  <th className="p-4 font-bold text-sm whitespace-nowrap">Date</th>
                  <th className="p-4 font-bold text-sm whitespace-nowrap">Name</th>
                  <th className="p-4 font-bold text-sm whitespace-nowrap">Company</th>
                  <th className="p-4 font-bold text-sm whitespace-nowrap">Interest</th>
                  <th className="p-4 font-bold text-sm whitespace-nowrap">Message</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {inquiries.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-12 text-center text-textSecondary font-medium">
                      No inquiries found yet. When a sponsor fills out the form, it will appear here.
                    </td>
                  </tr>
                ) : (
                  inquiries.map((inq: any) => (
                    <tr key={inq._id} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 text-sm text-textSecondary whitespace-nowrap">
                        {new Date(inq.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-4 text-sm font-bold text-primary whitespace-nowrap">{inq.fullName}</td>
                      <td className="p-4 text-sm text-textSecondary whitespace-nowrap">{inq.companyName}</td>
                      <td className="p-4 text-sm whitespace-nowrap">
                        <span className="bg-lightblue text-secondary px-3 py-1 rounded-full text-xs font-bold">
                          {inq.interest}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-textSecondary min-w-[300px]">
                        {inq.message}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}