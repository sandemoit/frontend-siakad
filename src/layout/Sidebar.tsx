'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Users, BookOpen, Settings, Calendar } from 'lucide-react'

const menuItems = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Students', href: '/students', icon: Users },
  { name: 'Courses', href: '/courses', icon: BookOpen },
  { name: 'Schedule', href: '/schedule', icon: Calendar },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 h-full">
        <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-indigo-700 border-r">
          <div className="flex items-center flex-shrink-0 px-4">
            <h1 className="text-white text-2xl font-bold">SIAKAD</h1>
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
    </div>
  )
}
