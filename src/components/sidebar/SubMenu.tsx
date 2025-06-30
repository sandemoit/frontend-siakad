import Link from 'next/link'
import clsx from 'clsx'
import { SubMenuProps } from '@/types/sidebar'

export default function SubMenu({ subItems, pathname, isOpen }: SubMenuProps) {
    if (!isOpen) return null

    return (
        <div className="ml-6 mt-1 space-y-1">
            {subItems.map((subItem) => {
                const isSubActive = pathname === subItem.href
                return (
                    <Link
                        key={subItem.name}
                        href={subItem.href}
                        className={clsx(
                            'group flex items-center px-2 py-1 text-xs font-medium rounded-md transition-colors',
                            {
                                'bg-green-100 text-green-800': isSubActive,
                                'text-gray-600 hover:bg-green-50 hover:text-green-700': !isSubActive,
                            }
                        )}
                    >
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2 flex-shrink-0" />
                        {subItem.name}
                    </Link>
                )
            })}
        </div>
    )
}