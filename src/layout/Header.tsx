'use client'

import { Bell, User, ChevronDown, LogOut } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()

  const handleLogout = () => {
    // Add your logout logic here
    router.push('/login')
  }

  return (
    <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
      <div className="flex-1 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
        </div>

        <div className="ml-4 flex items-center md:ml-6 space-x-4">
          <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
            <Bell className="h-6 w-6" />
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-2 focus:outline-none">
              <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                <User className="h-5 w-5" />
              </div>
              <span className="hidden md:inline-block text-sm font-medium text-gray-700"></span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48" align="end">
              <DropdownMenuItem className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
