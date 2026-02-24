import { NextRequest, NextResponse } from 'next/server'
import { hashPassword, generateVerificationCode, generateId } from '@/lib/auth'
import { createUser, getUserByEmail } from '@/lib/users-db'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, phone, mobile, company, password } = body

    // Validation
    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json(
        { error: 'First name, last name, email, and password are required' },
        { status: 400 }
      )
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Check if email already exists
    const existingUser = getUserByEmail(email)
    if (existingUser) {
      return NextResponse.json(
        { error: 'An account with this email already exists' },
        { status: 409 }
      )
    }

    // Hash password
    const { hash, salt } = hashPassword(password)
    const verificationCode = generateVerificationCode()

    // Create user
    const user = {
      id: generateId(),
      firstName,
      lastName,
      email,
      phone: phone || '',
      mobile: mobile || '',
      company: company || '',
      passwordHash: hash,
      salt,
      verified: false,
      verificationCode,
      createdAt: new Date().toISOString(),
      lastLogin: null,
    }

    createUser(user)

    // In production, send verification email here
    // For demo, we return the code so the UI can display it
    return NextResponse.json({
      message: 'Account created successfully. Please verify your email.',
      userId: user.id,
      email: user.email,
      verificationCode: verificationCode, // Remove in production - send via email instead
    })
  } catch {
    return NextResponse.json(
      { error: 'An error occurred during signup' },
      { status: 500 }
    )
  }
}
