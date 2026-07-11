"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function VendorLocations() {
  const [vendors, setVendors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVendors() {
      const { data } = await supabase.from("Vendors").select("*");
      if (data) setVendors(data);
      setLoading(false);
    }
    fetchVendors();
  }, []);

  return (
    <div className="min-h-screen flex bg-white text-gray-900 font-sans">
      <aside className="w-72 bg-gray-50 border-r border-gray-200 min-h-screen p-4">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b">
          <Image src="/logo.png" alt="HomeRun" width={40} height={40} className="rounded-md" />
          <h1 className="text-lg font-semibold">HomeRun</h1>
        </div>
        <div className="space-y-3">
          <Link href="/">
            <div className="border-2 border-l-8 border-yellow-400 bg-yellow-50 hover:bg-yellow-100 rounded-xl px-4 py-3 cursor-pointer font-semibold">Home</div>
          </Link>
          <Link href="/our-locations">
            <div className="border-2 border-l-8 border-blue-400 bg-blue-50 hover:bg-blue-100 rounded-xl px-4 py-3 cursor-pointer font-semibold">Our Locations</div>
          </Link>
          <div className="border-2 border-l-8 border-green-400 bg-green-100
