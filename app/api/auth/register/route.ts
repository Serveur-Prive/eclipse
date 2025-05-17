import { NextResponse } from "next/server"
import { registerUser } from "@/lib/auth"

export async function POST(request: Request) {
  try {
    console.log("[REGISTER] Starting request")

    // Get request data
    const body = await request.json()
    const { username, email, password } = body

    console.log("[REGISTER] Data received:", { username, email, passwordLength: password?.length })

    // Validate fields
    if (!username || !email || !password) {
      console.log("[REGISTER] Validation failed: missing fields")
      return NextResponse.json({ success: false, error: "All fields are required" }, { status: 400 })
    }

    try {
      // Register the user
      const user = await registerUser(username, email, password)
      console.log("[REGISTER] User registered successfully:", user)

      // Return user data
      return NextResponse.json({ success: true, user }, { status: 201 })
    } catch (authError) {
      console.error("[REGISTER] Auth error:", authError)
      return NextResponse.json(
        {
          success: false,
          error: authError instanceof Error ? authError.message : "Registration error",
        },
        { status: 400 },
      )
    }
  } catch (error) {
    console.error("[REGISTER] General error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "An error occurred during registration",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
