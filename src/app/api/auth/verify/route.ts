import { NextRequest, NextResponse } from 'next/server'
import { getUserByEmail, updateUser } from '@/lib/users-db'
import { createToken } from '@/lib/auth'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, code } = body

    if (!email || !code) {
      return NextResponse.json(
        { error: 'Email and verification code are required' },
        { status: 400 }
      )
    }

    const user = getUserByEmail(email)
    if (!user) {
      return NextResponse.json(
        { error: 'No account found with this email' },
        { status: 404 }
      )
    }

    if (user.verified) {
      return NextResponse.json(
        { message: 'Email is already verified' }
      )
    }

    if (user.verificationCode !== code) {
      return NextResponse.json(
        { error: 'Invalid verification code' },
        { status: 400 }
      )
    }

    updateUser(user.id, { verified: true, lastLogin: new Date().toISOString() })

    const token = createToken({
      userId: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    })

    const response = NextResponse.json({
      message: 'Email verified successfully.',
    })

    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60,
      path: '/',
    })

    return response
  } catch {
    return NextResponse.json(
      { error: 'An error occurred during verification' },
      { status: 500 }
    )
  }
}
