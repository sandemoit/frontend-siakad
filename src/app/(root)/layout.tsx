import Header from "@/layout/Header"
import MobileSidebar from "@/layout/MobileSidebar"
import Sidebar from "@/layout/Sidebar"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Mobile Sidebar (hidden on desktop) */}
      <MobileSidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />

        <main className="flex-1 overflow-auto p-4 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  )
}
