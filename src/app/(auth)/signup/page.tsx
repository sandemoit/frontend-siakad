'use client'

import { Suspense, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AlertCircle, CheckCircle, KeyRound, KeyRoundIcon, User } from "lucide-react"

interface FormData {
  nama_admin: string
  jabatan_admin: string
  no_wa_admin: string
  email_admin: string
  nama_sekolah: string
  provinsi: string
  kabupaten: string
  kecamatan: string
  alamat: string
  npsn: string
  email_sekolah: string
  telepon: string
  logo: string
}

export default function SignupPage() {
  const router = useRouter()
  const [form, setForm] = useState<FormData>({
    nama_admin: "",
    jabatan_admin: "",
    no_wa_admin: "",
    email_admin: "",
    nama_sekolah: "",
    provinsi: "",
    kabupaten: "",
    kecamatan: "",
    alamat: "",
    npsn: "",
    email_sekolah: "",
    telepon: "",
    logo: ""
  })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (error) setError("")
    if (success) setSuccess("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setSuccess("")

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/register`, form)
      setSuccess("Registrasi berhasil! Redirecting to login...")
      setTimeout(() => {
        router.push("/signin")
      }, 2000)
    } catch (err: any) {
      setError(err.response?.data?.message || "Registrasi gagal. Silakan coba lagi.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-green-100 to-green-200 py-8">
      <div className="w-full max-w-xl bg-white/80 rounded-xl shadow-lg p-6 sm:p-8 backdrop-blur-md">
        <div className="items-center justify-center mb-6">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-2">
            Registrasi Sekolah & Admin
          </h1>
          <p className="text-center text-green-700 mb-4">
            Lengkapi data sekolah dan admin untuk mendaftar
          </p>
          <div className="border-b border-green-200"></div>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3 text-red-800">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3 text-green-800">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <span>{success}</span>
          </div>
        )}

        <Suspense fallback={
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
          </div>
        }>
          <form onSubmit={handleSubmit} className="space-y-8">


            {/* School Information */}
            <div>
              <h3 className="text-lg text-center font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                Informasi Sekolah
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Sekolah *
                  </label>
                  <Input
                    name="nama_sekolah"
                    placeholder="Nama sekolah"
                    value={form.nama_sekolah}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="h-11"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    NPSN *
                  </label>
                  <Input
                    name="npsn"
                    placeholder="Nomor Pokok Sekolah Nasional"
                    value={form.npsn}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="h-11"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Provinsi *
                  </label>
                  <Input
                    name="provinsi"
                    placeholder="Provinsi"
                    value={form.provinsi}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="h-11"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kabupaten/Kota *
                  </label>
                  <Input
                    name="kabupaten"
                    placeholder="Kabupaten/Kota"
                    value={form.kabupaten}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="h-11"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kecamatan *
                  </label>
                  <Input
                    name="kecamatan"
                    placeholder="Kecamatan"
                    value={form.kecamatan}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="h-11"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telepon Sekolah *
                  </label>
                  <Input
                    name="telepon"
                    placeholder="Nomor telepon sekolah"
                    value={form.telepon}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="h-11"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Alamat Lengkap *
                  </label>
                  <Input
                    name="alamat"
                    placeholder="Alamat lengkap sekolah"
                    value={form.alamat}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="h-11"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Sekolah *
                  </label>
                  <Input
                    name="email_sekolah"
                    type="email"
                    placeholder="sekolah@example.com"
                    value={form.email_sekolah}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="h-11"
                  />
                </div>
              </div>
            </div>

            {/* Admin Information */}
            <div>
              <h3 className="text-lg text-center font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                Informasi Admin
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Admin *
                  </label>
                  <Input
                    name="nama_admin"
                    placeholder="Nama lengkap admin"
                    value={form.nama_admin}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="h-11"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Jabatan Admin *
                  </label>
                  <Input
                    name="jabatan_admin"
                    placeholder="Jabatan admin"
                    value={form.jabatan_admin}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="h-11"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    No. WhatsApp Admin *
                  </label>
                  <Input
                    name="no_wa_admin"
                    placeholder="08xxxxxxxxxx"
                    value={form.no_wa_admin}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="h-11"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Admin *
                  </label>
                  <Input
                    name="email_admin"
                    type="email"
                    placeholder="admin@example.com"
                    value={form.email_admin}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="h-11"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/signin")}
                disabled={isLoading}
                className="flex-1 h-12"
              >
                <User className="h-4 w-4" />
                Kembali ke Login
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="flex-1 h-12 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <KeyRoundIcon className="h-4 w-4" />
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Mendaftar...
                  </div>
                ) : (
                  "Daftar"
                )}
              </Button>
            </div>
          </form>
        </Suspense>
      </div>
    </div>
  )
}
