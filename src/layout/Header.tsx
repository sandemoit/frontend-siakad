'use client'

import { Bell, User, ChevronDown } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useRouter } from 'next/navigation'
import { LogoutButton } from '@/components/LogoutButton'
import Link from 'next/link'

export default function Header() {
  const router = useRouter()

  return (
    <div className="relative z-10 flex-shrink-0 flex h-16 gradasi-ponpes shadow">
      <div className="flex-1 px-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* button humburger */}
        </div>

        <div className="ml-4 flex items-center md:ml-6 space-x-4">
          <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
            <Bell className="h-6 w-6" />
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-2 focus:outline-none">
              <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center text-white">
                <User className="h-5 w-5" />
              </div>
              <span className="hidden md:inline-block text-sm font-medium text-gray-700"></span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48" align="end">
              <Link href="/profile" passHref>
                <DropdownMenuItem className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
              </Link>
              <LogoutButton />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
