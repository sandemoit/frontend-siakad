import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from '@/auth'

// Define protected and public routes
const protectedRoutes = ["/", "/admin", "/profile"]
const authRoutes = ["/signin", "/signup"]

export default auth((req) => {
    const { nextUrl } = req
    const isLoggedIn = !!req.auth

    const isAuthRoute = authRoutes.includes(nextUrl.pathname)
    const isProtectedRoute = protectedRoutes.some(route =>
        nextUrl.pathname === route || nextUrl.pathname.startsWith(route + '/')
    )

    // Redirect authenticated users away from auth pages
    if (isAuthRoute) {
        if (isLoggedIn) {
            return NextResponse.redirect(new URL("/", nextUrl))
        }
        return NextResponse.next()
    }

    // Redirect unauthenticated users to signin
    if (isProtectedRoute && !isLoggedIn) {
        const callbackUrl = nextUrl.pathname
        const encodedCallbackUrl = encodeURIComponent(callbackUrl)
        return NextResponse.redirect(
            new URL(`/signin?callbackUrl=${encodedCallbackUrl}`, nextUrl)
        )
    }

    return NextResponse.next()
})

export const config = {
    // Match all paths except static files and API routes
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ]
}
