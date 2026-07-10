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
