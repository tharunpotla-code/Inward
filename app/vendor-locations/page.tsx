import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex bg-white text-gray-900 font-sans antialiased">
      <aside className="w-64 bg-gray-50 border-r border-gray-200 min-h-screen p-3">
        <div className="p-3 mb-4 border-b flex items-center gap-3">
          <Image src="/logo.png" alt="HomeRun" width={36} height={36} className="rounded-md" />
          <h1 className="text-lg font-semibold">HomeRun</h1>
        </div>
        <div className="space-y-2">
          <div className="border-l-4 border-yellow-400 bg-yellow-50 rounded-md px-3 py-2.5 flex items-center gap-3 cursor-pointer">
            <span className="text-xl">🏠</span>
            <span className="text-sm font-semibold">Home</span>
          </div>
          <Link href="/our-locations">
            <div className="border-l-4 border-blue-400 bg-blue-50 hover:bg-blue-100 rounded-md px-3 py-2.5 flex items-center gap-3 cursor-pointer">
              <span className="text-xl">🏢</span>
              <span className="text-sm font-semibold">Our Locations</span>
            </div>
          </Link>
          <Link href="/vendor-locations">
            <div className="border-l-4 border-green-400 bg-green-50 hover:bg-green-100 rounded-md px-3 py-2.5 flex items-center gap-3 cursor-pointer">
              <span className="text-xl">📍</span>
              <span className="text-sm font-semibold">Vendors Locations</span>
            </div>
          </Link>
          <Link href="/printer-problems">
            <div className="border-l-4 border-purple-400 bg-purple-50 hover:bg-purple-100 rounded-md px-3 py-2.5 flex items-center gap-3 cursor-pointer">
              <span className="text-xl">🖨️</span>
              <span className="text-sm font-semibold">Printer Problems</span>
            </div>
          </Link>
        </div>
      </aside>
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-semibold mb-2">Welcome to HomeRun 🏠</h1>
        <p className="text-gray-500 text-sm">India's Building Material App</p>
      </main>
    </div>
  );
}
