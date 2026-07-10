"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("home");

  return (
    <div className="min-h-screen flex bg-white text-gray-800 font-sans">
      
      {/* Sidebar */}
      <aside className="w-64 bg-gray-50 border-r border-gray-200 min-h-screen">
        
        {/* Logo */}
        <div className="p-6 border-b border-gray-200 flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            H
          </div>
          <h1 className="text-xl font-bold text-gray-900">HomeRun</h1>
        </div>

        {/* Menu Items */}
        <nav className="p-4 space-y-1">
          
          <button
            onClick={() => setActive("home")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition ${
              active === "home"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <span className="text-xl">🏠</span>
            <span className="font-medium">Home</span>
          </button>

          <Link href="/vendor-locations">
            <button
              onClick={() => setActive("vendor")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition ${
                active === "vendor"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="text-xl">📍</span>
              <span className="font-medium">Vendor Locations</span>
            </button>
          </Link>

          <Link href="/printer-problems">
            <button
              onClick={() => setActive("printer")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition ${
                active === "printer"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="text-xl">🖨️</span>
              <span className="font-medium">Printer Problems</span>
            </button>
          </Link>

        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-4">Welcome to HomeRun 👋</h1>
        <p className="text-gray-600 text-lg">
          Select an option from the sidebar to get started.
        </p>
      </main>

    </div>
  );
}
