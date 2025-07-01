'use client'

import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { User, Mail, Camera, Edit3, Save, X } from 'lucide-react'
import { TitlePage } from '@/components/TitlePage'

export default function ProfilePage() {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        avatar: null
    })
    const [isEditing, setIsEditing] = useState(false)
    const [originalData, setOriginalData] = useState<{ name: string; email: string; avatar: null }>({
        name: '',
        email: '',
        avatar: null
    })

    useEffect(() => {
        // Fetch user data here
        const data = {
            name: 'John Doe',
            email: 'johndoe@example.com',
            avatar: null
        }
        setUserData(data)
        setOriginalData(data)
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUserData(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = () => {
        // Handle profile update logic here
        console.log('Profile updated:', userData)
        setOriginalData(userData)
        setIsEditing(false)
    }

    const handleCancel = () => {
        setUserData(originalData)
        setIsEditing(false)
    }

    const handleEdit = () => {
        setIsEditing(true)
    }

    return (
        <div className="min-h-screen">
            <div className="max-w-4xl mx-auto">
                {/* Main Profile Card */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Header Section with Gradient */}
                    <div className="bg-gradient-to-r from-blue-600 to-green-600 p-8 text-white relative">
                        <div className="absolute top-4 right-4">
                            {!isEditing ? (
                                <Button
                                    onClick={handleEdit}
                                    variant="outline"
                                    size="sm"
                                    className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                                >
                                    <Edit3 className="w-4 h-4 mr-2" />
                                    Edit Profil
                                </Button>
                            ) : (
                                <div className="flex gap-2">
                                    <Button
                                        onClick={handleSubmit}
                                        size="sm"
                                        className="bg-green-500 hover:bg-green-600 text-white"
                                    >
                                        <Save className="w-4 h-4 mr-2" />
                                        Simpan
                                    </Button>
                                    <Button
                                        onClick={handleCancel}
                                        variant="outline"
                                        size="sm"
                                        className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                                    >
                                        <X className="w-4 h-4 mr-2" />
                                        Batal
                                    </Button>
                                </div>
                            )}
                        </div>

                        {/* Avatar Section */}
                        <div className="flex items-center gap-6">
                            <div className="relative">
                                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <User className="w-12 h-12 text-white" />
                                </div>
                                {isEditing && (
                                    <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors">
                                        <Camera className="w-4 h-4 text-white" />
                                    </button>
                                )}
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-1">{userData.name}</h2>
                                <p className="text-blue-100 flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    {userData.email}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="p-8">
                        <div className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Name Field */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        Nama Lengkap
                                    </label>
                                    <Input
                                        type="text"
                                        name="name"
                                        value={userData.name}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className="h-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50"
                                        placeholder="Masukkan nama lengkap Anda"
                                    />
                                </div>

                                {/* Email Field */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        Alamat Email
                                    </label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={userData.email}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className="h-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50"
                                        placeholder="Masukkan alamat email Anda"
                                    />
                                </div>
                            </div>

                            {/* Additional Profile Information */}
                            <div className="border-t pt-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Informasi Akun</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-gray-50 p-4 rounded-xl">
                                        <div className="text-sm text-gray-600">Anggota sejak</div>
                                        <div className="font-semibold text-gray-800">Januari 2024</div>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-xl">
                                        <div className="text-sm text-gray-600">Login terakhir</div>
                                        <div className="font-semibold text-gray-800">Hari ini, 15:07</div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons for Mobile */}
                            {isEditing && (
                                <div className="flex gap-3 pt-4 md:hidden">
                                    <Button
                                        onClick={handleSubmit}
                                        className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-xl"
                                    >
                                        <Save className="w-4 h-4 mr-2" />
                                        Simpan Perubahan
                                    </Button>
                                    <Button
                                        onClick={handleCancel}
                                        variant="outline"
                                        className="flex-1 h-12 border-2 border-gray-300 rounded-xl"
                                    >
                                        <X className="w-4 h-4 mr-2" />
                                        Batal
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Security Section */}
                <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Pengaturan Keamanan</h3>
                    <div className="space-y-4">
                        <Button
                            variant="outline"
                            className="w-full md:w-auto h-12 border-2 border-blue-200 text-blue-600 hover:bg-blue-50 rounded-xl"
                        >
                            Ganti Kata Sandi
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full md:w-auto h-12 border-2 border-green-200 text-green-600 hover:bg-green-50 rounded-xl ml-0 md:ml-3"
                        >
                            Aktifkan Autentikasi Dua Faktor
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}