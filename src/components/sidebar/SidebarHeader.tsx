interface SidebarHeaderProps {
    title?: string
}

export default function SidebarHeader({ title = 'SIAKAD' }: SidebarHeaderProps) {
    return (
        <div className="flex items-center flex-shrink-0 px-4">
            <h1 className="text-green-700 text-2xl font-bold">{title}</h1>
        </div>
    )
}