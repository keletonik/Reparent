import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Routes that require authentication
const protectedRoutes = ['/dashboard', '/modules', '/journal', '/progress', '/settings', '/resources', '/safety-plan', '/crisis']

// Routes that are only for non-authenticated users
const authRoutes = ['/signup', '/verify-email']

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value
  const { pathname } = request.nextUrl

  // Check if the route is protected
  const isProtectedRoute = protectedRoutes.some((route) => pathname === route || pathname.startsWith(route + '/'))
  const isAuthRoute = authRoutes.some((route) => pathname === route)

  // If trying to access protected route without auth, redirect to signup
  if (isProtectedRoute && !token) {
    const signupUrl = new URL('/signup', request.url)
    signupUrl.searchParams.set('redirect', pathname)
    return NextResponse.redirect(signupUrl)
  }

  // If trying to access auth routes while already logged in, redirect to dashboard
  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
