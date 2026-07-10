"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Vendor {
  id: string;
  Name: string;
  "Contact number 1": string;
  "Contact numer 2": string;
  "Map link": string;
}

export default function VendorLocations() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVendors() {
      const { data, error } = await supabase.from("Vendors").select("*");
      if (error) {
        console.error("Error:", error);
      } else {
        setVendors(data || []);
      }
      setLoading(false);
    }
    fetchVendors();
  }, []);

  return (
    <div className="min-h-screen flex bg-white text-gray-800 font-sans">
      <aside className="w-64 bg-gray-50 border-r border-gray-200 min-h-screen flex flex-col">
        <div className="p-4 border-b border-gray-200 flex items-center gap-3">
          <Image src="/logo.png" alt="HomeRun Logo" width={36} height={36} className="rounded-md" />
          <h1 className="text-lg font-bold text-gray-900">HomeRun</h1>
        </div>
        <nav className="p-2 space-y-1 flex-1">
          <Link href="/">
            <div className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200 text-sm font-medium cursor-pointer">
              <span className="text-base">🏠</span>
              <span>Home</span>
            </div>
          </Link>
          <div className="w-full flex items-center gap-3 px-3 py-2 rounded-md bg-yellow-200 text-gray-900 text-sm font-medium">
            <span className="text-base">📍</span>
            <span>Vendors Locations</span>
          </div>
          <Link href="/printer-problems">
            <div className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200 text-sm font-medium cursor-pointer">
              <span className="text-base">🖨️</span>
              <span>Printer Problems</span>
            </div>
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-2">Vendors Locations 📍</h1>
        <p className="text-gray-600 text-sm mb-8">
          {vendors.length} vendor{vendors.length !== 1 ? "s" : ""} found
        </p>
        {loading ? (
          <p className="text-gray-500">Loading vendors...</p>
        ) : vendors.length === 0 ? (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
            <p className="text-gray-500">No vendors added yet.</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {vendors.map((vendor) => (
              <div key={vendor.id} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition">
                <h2 className="text-lg font-bold mb-3">{vendor.Name}</h2>
                <div className="space-y-1 text-sm text-gray-600 mb-4">
                  <p>📞 {vendor["Contact number 1"]}</p>
