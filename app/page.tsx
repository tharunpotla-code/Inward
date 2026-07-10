"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* Top Header */}
      <header className="bg-gray-50 border-b border-gray-200 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            H
          </div>
          <h1 className="text-xl font-bold text-gray-900">HomeRun</h1>
        </div>
        
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-lg hover:bg-gray-200"
        >
          <span className="text-2xl">☰</span>
        </button>
      </header>

      {/* Menu (shows when opened) */}
      {menuOpen && (
        <nav className="bg-gray-50 border-b border-gray-200 p-4 space-y-2">
          <Link href="/vendor-locations">
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-600 hover:text-white text-gray-700 cursor-pointer transition">
              <span className="text-xl">📍</span>
              <span className="font-medium">Vendor Locations</span>
            </div>
          </Link>
          <Link href="/printer-problems">
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-600 hover:text-white text-gray-700 cursor-pointer transition">
              <span className="text-xl">🖨️</span>
              <span className="font-medium">Printer Problems</span>
            </div>
          </Link>
        </nav>
      )}

      {/* Main Content */}
      <main className="p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Welcome to HomeRun 👋</h1>
        <p className="text-gray-600 text-lg mb-8">
          Tap the menu (☰) at the top right to see options.
        </p>

        {/* Big cards on homepage */}
        <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
          
          <Link href="/vendor-locations">
            <div className="border-2 border-gray-200 hover:border-blue-600 rounded-xl p-6 cursor-pointer transition">
              <div className="text-4xl mb-3">📍</div>
              <h2 className="text-xl font-bold mb-1">Vendor Locations</h2>
              <p className="text-gray-600 text-sm">View all vendor locations</p>
            </div>
          </Link>

          <Link href="/printer-problems">
            <div className="border-2 border-gray-200 hover:border-blue-600 rounded-xl p-6 cursor-pointer transition">
              <div className="text-4xl mb-3">🖨️</div>
              <h2 className="text-xl font-bold mb-1">Printer Problems</h2>
              <p className="text-gray-600 text-sm">Report printer issues</p>
            </div>
          </Link>

        </div>
      </main>

    </div>
  );
}
