import { NextResponse } from "next/server"
import { initDatabase } from "@/lib/db"

export async function GET() {
  try {
    console.log("[INIT-DB] Starting database initialization")
    const success = await initDatabase()

    if (success) {
      console.log("[INIT-DB] Database initialized successfully")
      return NextResponse.json({ success: true, message: "Database initialized successfully" })
    } else {
      console.error("[INIT-DB] Database initialization failed")
      return NextResponse.json({ success: false, error: "Database initialization failed" }, { status: 500 })
    }
  } catch (error) {
    console.error("[INIT-DB] Error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "An error occurred during database initialization",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
