import { DropdownMenuItem } from './ui/dropdown-menu'
import { LogOut } from 'lucide-react'
import { logoutAction } from '@/lib/logout-action' // sesuaikan path

export function LogoutButton() {
    return (
        <DropdownMenuItem asChild>
            <form action={logoutAction}>
                <button type="submit" className="flex items-center w-full">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                </button>
            </form>
        </DropdownMenuItem>
    )
}
