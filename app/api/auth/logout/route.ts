import { NextResponse } from "next/server"
import { logoutUser } from "@/lib/auth"
import { cookies } from "next/headers"

export async function POST() {
  try {
    console.log("[LOGOUT] Starting logout request")

    const cookieStore = cookies()
    const sessionId = cookieStore.get("sessionId")?.value

    if (!sessionId) {
      console.log("[LOGOUT] No sessionId found in cookies")
      return NextResponse.json({ success: true })
    }

    // Logout the user
    await logoutUser(sessionId)

    // Delete the session cookie
    cookieStore.delete("sessionId")

    console.log("[LOGOUT] Logout successful")
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[LOGOUT] Error during logout:", error)
    return NextResponse.json({ success: false, error: "Error during logout" }, { status: 500 })
  }
}
