import LoginForm from "@/components/LoginForm"
import { Suspense } from "react"

export default function SignInPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-green-100 to-green-200">
            <div className="w-full max-w-md bg-white/80 rounded-xl shadow-lg p-6 sm:p-8 backdrop-blur-md">
                <div className="items-center justify-center mb-6">
                    <h1 className="text-3xl font-bold text-center text-green-800 mb-2">
                        Silahkan Masuk
                    </h1>
                    <p className="text-center text-green-700 mb-4">
                        Gunakan akun email dan password Anda
                    </p>
                    <div className="border-b border-green-200"></div>
                </div>

                <Suspense fallback={
                    <div className="flex justify-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                    </div>
                }>
                    <LoginForm />
                </Suspense>
            </div>
        </div>
    )
}
