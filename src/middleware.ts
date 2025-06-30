import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const token = request.cookies.get('access_token')?.value
    const pathname = request.nextUrl.pathname

    const isGuestOnly = ['/login', '/register'].includes(pathname)
    const isProtected = !pathname.startsWith('/_next') && !pathname.startsWith('/api') && !isGuestOnly

    if (isProtected && !token) {
        const loginUrl = new URL('/login', request.url)
        loginUrl.searchParams.set('redirect', pathname)
        return NextResponse.redirect(loginUrl)
    }

    if (isGuestOnly && token) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next|favicon.ico).*)'], // semua public routes
}
