import { NextRequest, NextResponse } from 'next/server'
import { verifyPassword, createToken } from '@/lib/auth'
import { getUserByEmail, updateUser } from '@/lib/users-db'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    const user = getUserByEmail(email)
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    if (!verifyPassword(password, user.passwordHash, user.salt)) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    if (!user.verified) {
      return NextResponse.json(
        { error: 'Please verify your email before logging in', needsVerification: true, email: user.email },
        { status: 403 }
      )
    }

    // Update last login
    updateUser(user.id, { lastLogin: new Date().toISOString() })

    // Create JWT token
    const token = createToken({
      userId: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    })

    const response = NextResponse.json({
      message: 'Login successful',
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    })

    // Set HTTP-only cookie
    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: '/',
    })

    return response
  } catch {
    return NextResponse.json(
      { error: 'An error occurred during login' },
      { status: 500 }
    )
  }
}
