'use client'
import { useRouter } from 'next/navigation'
import { DropdownMenuItem } from './ui/dropdown-menu'
import { LogOut } from 'lucide-react'
import axios from 'axios'
import api from '@/lib/axios'

export function LogoutButton() {
    const router = useRouter()

    const handleLogout = async () => {
        try {
            // Panggil API logout di backend
            const response = await api.post('/auth/logout')

            if (response.status === 200) {
                // Redirect ke login setelah logout
                router.push('/signin')
            } else {
                console.error(response)
            }
        } catch (error) {
            console.error('Logout error:', error)
        }
    }

    return (

        <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
        </DropdownMenuItem>
    )
}
