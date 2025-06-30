import { useState } from 'react'
import { usePathname } from 'next/navigation'
import MenuItem from './MenuItem'
import { menuItems } from '@/data/menuItems'

export default function SidebarNav() {
    const pathname = usePathname()
    const [openMenus, setOpenMenus] = useState<string[]>([])

    // Function to toggle submenu open/close
    const toggleMenu = (menuName: string) => {
        setOpenMenus(prev =>
            prev.includes(menuName)
                ? prev.filter(name => name !== menuName)
                : [...prev, menuName]
        )
    }

    // Function to check if menu should be open
    const isMenuOpen = (menuName: string, subItems?: any[]) => {
        // Auto open menu if submenu is active
        if (subItems && subItems.some(sub => pathname === sub.href)) {
            return true
        }
        return openMenus.includes(menuName)
    }

    return (
        <nav className="flex-1 px-2 space-y-1">
            {menuItems.map((item) => (
                <MenuItem
                    key={item.name}
                    item={item}
                    pathname={pathname}
                    isOpen={isMenuOpen(item.name, item.subItems)}
                    onToggle={() => toggleMenu(item.name)}
                />
            ))}
        </nav>
    )
}