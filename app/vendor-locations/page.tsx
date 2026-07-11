import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const buttons = [
    { icon: "🏠", title: "Home", color: "bg-yellow-50 border-l-yellow-400", href: "/" },
    { icon: "🏢", title: "Our Locations", color: "bg-blue-50 border-l-blue-400 hover:bg-blue-100", href: "/our-locations" },
    { icon: "📍", title: "Vendors Locations", color: "bg-green-50 border-l-green-400 hover:bg-green-100", href: "/vendor-locations" },
    { icon: "🖨️", title: "Printer Problems", color: "bg-purple-50 border-l-purple-400 hover:bg-purple-100", href: "/printer-problems" },
  ];
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Image src="/logo.png" alt="HomeRun" width={48} height={48} className="rounded-md" />
          <div>
            <h1 className="text-2xl font-semibold">HomeRun</h1>
            <p className="text-sm text-gray-500">India's Building Material App</p>
          </div>
        </div>
        <div className="space-y-3">
          {buttons.map((b) => (
            <Link key={b.title} href={b.href}>
              <div className={`border-2 border-l-8 rounded-xl px-5 py-4 flex items-center gap-4 cursor-pointer transition ${b.color}`}>
                <span className="text-3xl">{b.icon}</span>
                <span className="text-lg font-semibold">{b.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
