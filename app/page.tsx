"use client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex bg-white text-gray-800 font-sans">
      
      {/* Sidebar */}
      <aside className="w-64 bg-gray-50 border-r border-gray-200 min-h-screen flex flex-col">
        
        {/* Logo */}
        <div className="p-4 border-b border-gray-200 flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="HomeRun Logo"
            width={36}
            height={36}
            className="rounded-md"
          />
          <h1 className="text-lg font-bold text-gray-900">HomeRun</h1>
        </div>

        {/* Menu Items */}
        <nav className="p-2 space-y-1 flex-1">
          
          {/* Home - Active */}
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md bg-yellow-200 text-gray-900 text-sm font-medium">
            <span className="text-base">🏠</span>
            <span>Home</span>
          </button>

          {/* Vendors
