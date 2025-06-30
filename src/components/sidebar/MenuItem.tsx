// components/sidebar/MenuItem.tsx
import Link from 'next/link'
import clsx from 'clsx'
import { ChevronDown, ChevronRight } from 'lucide-react'
import SubMenu from './SubMenu'
import { MenuItemProps } from '@/types/sidebar'

export default function MenuItem({ item, pathname, isOpen, onToggle }: MenuItemProps) {
    // Check if current path matches menu or submenu
    const isActive = pathname === item.href ||
        (item.subItems && item.subItems.some(sub => pathname === sub.href))

    return (
        <div>
            {/* Main Menu Item */}
            <Link
                href={item.href}
                className={clsx(
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors',
                    {
                        'bg-green-100 text-green-800': isActive,
                        'text-gray-700 hover:bg-green-50 hover:text-green-700': !isActive,
                    }
                )}
                onClick={(e) => {
                    if (item.subItems) {
                        e.preventDefault()
                        onToggle()
                    }
                }}
            >
                <item.icon
                    className={clsx(
                        'mr-3 flex-shrink-0 h-6 w-6',
                        {
                            'text-green-700': isActive,
                            'text-gray-500': !isActive,
                        }
                    )}
                />
                <span className="flex-1">{item.name}</span>

                {/* Chevron for submenus */}
                {item.subItems && (
                    <div className="ml-2">
                        {isOpen ? (
                            <ChevronDown className="h-4 w-4" />
                        ) : (
                            <ChevronRight className="h-4 w-4" />
                        )}
                    </div>
                )}
            </Link>

            {/* Submenu */}
            {item.subItems && (
                <SubMenu
                    subItems={item.subItems}
                    pathname={pathname}
                    isOpen={isOpen}
                />
            )}
        </div>
    )
}