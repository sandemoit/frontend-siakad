'use client'

import { SidebarHeader, SidebarNav } from "@/components/sidebar"


interface SidebarProps {
  title?: string
}

export default function Sidebar({ title }: SidebarProps) {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 h-full">
        <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto gradasi-ponpes-b border-r border-gray-200 shadow-lg">
          <SidebarHeader title={title} />
          <div className="mt-5 flex-1 flex flex-col">
            <SidebarNav />
          </div>
        </div>
      </div>
    </div>
  )
}