import { LucideIcon } from 'lucide-react'

export interface SubMenuItem {
    name: string
    href: string
}

export interface MenuItem {
    name: string
    href: string
    icon: LucideIcon
    subItems?: SubMenuItem[]
}

export interface MenuItemProps {
    item: MenuItem
    pathname: string
    isOpen: boolean
    onToggle: () => void
}

export interface SubMenuProps {
    subItems: SubMenuItem[]
    pathname: string
    isOpen: boolean
}