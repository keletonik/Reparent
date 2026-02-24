import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from '@/lib/auth'
import { getUserById } from '@/lib/users-db'

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('auth-token')?.value

    if (!token) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      )
    }

    const payload = verifyToken(token)
    if (!payload || !payload.userId) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      )
    }

    const user = getUserById(payload.userId as string)
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        mobile: user.mobile,
        company: user.company,
        verified: user.verified,
        createdAt: user.createdAt,
        lastLogin: user.lastLogin,
      },
    })
  } catch {
    return NextResponse.json(
      { error: 'An error occurred' },
      { status: 500 }
    )
  }
}

export async function DELETE(req: NextRequest) {
  // Logout - clear the auth cookie
  const token = req.cookies.get('auth-token')?.value
  if (!token) {
    return NextResponse.json({ message: 'Already logged out' })
  }

  const response = NextResponse.json({ message: 'Logged out successfully' })
  response.cookies.set('auth-token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 0,
    path: '/',
  })
  return response
}
