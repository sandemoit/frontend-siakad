import axios from 'axios'

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    withCredentials: true, // penting untuk kirim cookie
})

// Interceptor untuk handle 401
api.interceptors.response.use(
    (res) => res,
    async (error) => {
        const originalRequest = error.config

        // Cegah infinite loop
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true
            try {
                // await api.post('/auth/refresh')
                return api(originalRequest) // retry original request
            } catch (refreshError) {
                if (typeof window !== 'undefined') {
                    window.location.href = '/signin'
                }
                return Promise.reject(refreshError)
            }
        }

        return Promise.reject(error)
    }
)

export default api
