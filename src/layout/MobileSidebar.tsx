'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Users, BookOpen, Settings, Calendar, X, Menu } from 'lucide-react'

const menuItems = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Students', href: '/students', icon: Users },
  { name: 'Courses', href: '/courses', icon: BookOpen },
  { name: 'Schedule', href: '/schedule', icon: Calendar },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export default function MobileSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Mobile sidebar */}
      <div className={`md:hidden fixed inset-y-0 left-0 z-50 w-64 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition duration-300 ease-in-out`}>
        <div className="flex flex-col w-64 h-full bg-indigo-700">
          <div className="flex items-center justify-between px-4 py-5">
            <h1 className="text-white text-2xl font-bold">SIAKAD</h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white hover:text-gray-300"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-5 flex-1 flex flex-col">
            <nav className="flex-1 px-2 space-y-1">
              {menuItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive
                      ? 'bg-indigo-800 text-white'
                      : 'text-indigo-100 hover:bg-indigo-600 hover:text-white'
                      }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <item.icon
                      className={`mr-3 flex-shrink-0 h-6 w-6 ${isActive ? 'text-white' : 'text-indigo-300'
                        }`}
                    />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden absolute left-4 top-4 z-30">
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-gray-500 hover:text-gray-600"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </>
  )
}
