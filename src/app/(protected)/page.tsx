'use client'

import { useSession } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Selamat Datang di SIAKAD Admin
        </h1>
        {session?.user && (
          <p className="text-gray-600 mt-1">
            Halo, <span className="font-semibold">{session.user.email}</span> -
            Role: <span className="font-semibold capitalize">{session.user.role}</span>
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Stats Cards */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Total Students</h3>
          <p className="text-2xl font-bold mt-2">1,234</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Active Courses</h3>
          <p className="text-2xl font-bold mt-2">56</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Teachers</h3>
          <p className="text-2xl font-bold mt-2">42</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Classes Today</h3>
          <p className="text-2xl font-bold mt-2">12</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <p>No recent activity</p>
        </div>
      </div>
    </div>
  )
}
