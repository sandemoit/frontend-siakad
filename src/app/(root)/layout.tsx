'use client'

import Header from "@/layout/Header"
import MobileSidebar from "@/layout/MobileSidebar"
import Sidebar from "@/layout/Sidebar"
import api from "@/lib/axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    async function checkIfLoggedIn() {
      try {
        const res = await api.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verify`, {
          withCredentials: true
        })
        if (res.status === 200) {
          setIsAuthenticated(true)
        }
      } catch (error) {
        console.error('Auth check failed:', error)
        setIsAuthenticated(false)
        router.push('/login')
      }
    }

    checkIfLoggedIn()
  }, [router])

  if (isAuthenticated === null) {
    return null
  }

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
