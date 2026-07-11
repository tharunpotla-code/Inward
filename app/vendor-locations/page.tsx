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
        <div className="space-y-3">
          <div className="border-2 border-yellow-400 bg-yellow-50 rounded-xl p-4 cursor-pointer">
            <div className="text-3xl mb-2">🏠</div>
            <div className="text-sm font-semibold">Home</div>
          </div>
          <Link href="/our-locations">
            <div className="border-2 border-blue-200 bg-blue-50 hover:bg-blue-100 rounded-xl p-4 cursor-pointer">
              <div className="text-3xl mb-2">🏢</div>
              <div className="text-sm font-semibold">Our Locations</div>
            </div>
          </Link>
          <Link href="/vendor-locations">
            <div className="border-2 border-green-200 bg-green-50 hover:bg-green-100 rounded-xl p-4 cursor-pointer">
              <div className="text-3xl mb-2">📍</div>
              <div className="text-sm font-semibold">Vendors Locations</div>
            </div>
          </Link>
          <Link href="/printer-problems">
            <div className="border-2 border-purple-200 bg-purple-50 hover:bg-purple-100 rounded-xl p-4 cursor-pointer">
              <div className="text-3xl mb-2">🖨️</div>
              <div className="text-sm font-semibold">Printer Problems</div>
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
