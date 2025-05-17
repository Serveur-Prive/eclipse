import { NextResponse } from "next/server"
import { sql } from "@/lib/db"

export async function GET() {
  try {
    // Check if we're in development mode
    if (process.env.NODE_ENV !== "development") {
      return NextResponse.json(
        { success: false, error: "This endpoint is only available in development mode" },
        { status: 403 },
      )
    }

    // Clear the sessions table
    await sql`TRUNCATE TABLE sessions CASCADE`

    // Clear the users table
    await sql`TRUNCATE TABLE users CASCADE`

    return NextResponse.json({ success: true, message: "Database cleared successfully" })
  } catch (error) {
    console.error("Error clearing database:", error)
    return NextResponse.json(
      { success: false, error: "Failed to clear database", details: String(error) },
      { status: 500 },
    )
  }
}
