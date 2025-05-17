import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { loginUser } from "@/lib/auth"

export async function POST(request: Request) {
  try {
    console.log("[LOGIN] Starting request")

    // Get request data
    const body = await request.json()
    const { email, password } = body

    console.log("[LOGIN] Data received:", { email, passwordLength: password?.length })

    // Validate fields
    if (!email || !password) {
      console.log("[LOGIN] Validation failed: missing fields")
      return NextResponse.json({ success: false, error: "Email and password are required" }, { status: 400 })
    }

    try {
      // Login the user
      const result = await loginUser(email, password)

      if (!result) {
        return NextResponse.json({ success: false, error: "Invalid credentials" }, { status: 401 })
      }

      const { user, sessionId } = result

      // Set session cookie
      const cookieStore = cookies()
      cookieStore.set("sessionId", sessionId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
      })

      console.log("[LOGIN] User logged in successfully:", user.username)

      // Return user data
      return NextResponse.json({ success: true, user })
    } catch (authError) {
      console.error("[LOGIN] Auth error:", authError)
      return NextResponse.json(
        {
          success: false,
          error: authError instanceof Error ? authError.message : "Login error",
        },
        { status: 401 },
      )
    }
  } catch (error) {
    console.error("[LOGIN] General error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "An error occurred during login",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
