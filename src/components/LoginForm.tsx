'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import api from '@/lib/axios'
import { Key, User } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const searchParams = useSearchParams()
    const redirectTo = searchParams.get('redirect') || '/'

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        try {
            const res = await api.post('/auth/login',
                { email, password },
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )

            if (res.status === 200) {
                window.location.href = redirectTo
            }
        } catch (error: any) {
            // Handle semua error cases
            console.error('Login error:', error)

            if (error.response?.status === 401) {
                setError(error.response?.data?.message)
            } else if (error.response?.data?.message) {
                setError(error.response.data.message)
            } else if (error.response?.status >= 500) {
                setError('Server error, coba lagi nanti')
            } else if (error.code === 'NETWORK_ERROR' || !error.response) {
                setError('Koneksi bermasalah, periksa internet Anda')
            } else {
                setError('Terjadi kesalahan, silakan coba lagi')
            }

            setLoading(false) // Penting: set loading false di catch block
        }
    }

    return (
        <>
            {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-sm text-center">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="email" className="block mb-1 text-green-900 font-medium">
                        Email
                    </label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-green-200 rounded focus:outline-none focus:ring-2 focus:ring-green-300 transition"
                        required
                        placeholder='jhoni@gmail.com'
                        autoComplete="email"
                        disabled={loading}
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block mb-1 text-green-900 font-medium">
                        Password
                    </label>
                    <Input
                        id="password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-green-200 rounded focus:outline-none focus:ring-2 focus:ring-green-300 transition"
                        required
                        placeholder='*********'
                        autoComplete="current-password"
                        disabled={loading}
                    />
                </div>

                <div className="flex w-full justify-between">
                    <div className='justify-start'>
                        <a
                            href="/register"
                            className="text-green-700 text-sm hover:text-green-900 flex items-center gap-1"
                        >
                            <User className='size-4' />
                            Buat Akun
                        </a>
                    </div>
                    <div className='justify-end'>
                        <a
                            href="/lupa-password"
                            className="text-green-700 text-sm hover:text-green-900 flex items-center gap-1"
                        >
                            <Key className='size-4' />
                            Lupa password?
                        </a>
                    </div>
                </div>

                <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold py-2 rounded transition"
                >
                    {loading ? 'Masuk...' : 'Masuk'}
                </Button>
            </form>
        </>
    )
}