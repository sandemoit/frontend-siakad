import LoginForm from "@/components/LoginForm"

export default async function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-green-100 to-green-200">
            <div className="w-full max-w-md bg-white/80 rounded-xl shadow-lg p-6 sm:p-8 backdrop-blur-md">
                <div className='items-center justify-center mb-3'>
                    <h1 className="text-3xl font-bold text-center text-green-800">Silahkan Masuk</h1>
                    <p className='text-center text-green-900'>Gunakan akun email dan password Anda</p>
                    <div className='border-b border-green-200 mt-3'></div>
                </div>

                <LoginForm />
            </div>
        </div>
    )
}