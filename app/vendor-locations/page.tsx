"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function VendorLocations() {
  const [vendors, setVendors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchVendors() {
      const { data, error } = await supabase.from("Vendors").select("*");
      if (error) console.error(error);
      else setVendors(data || []);
      setLoading(false);
    }
    fetchVendors();
  }, []);

  const filtered = vendors.filter((v) =>
    v.Name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex bg-white text-gray-900 font-sans antialiased tracking-tight">
      <aside className="w-64 bg-gray-50 border-r border-gray-200 min-h-screen flex flex-col">
        <div className="p-4 border-b border-gray-200 flex items-center gap-3">
          <Image src="/logo.png" alt="HomeRun" width={36} height={36} className="rounded-md" />
          <h1 className="text-lg font-semibold text-gray-900">HomeRun</h1>
