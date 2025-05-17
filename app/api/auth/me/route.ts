import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { initializeDatabase } from "@/lib/db"

export async function GET() {
  try {
    console.log("[ME] Starting request to get current user")

    // Assurons-nous que la base de données est initialisée
    try {
      await initializeDatabase()
      console.log("[ME] Database initialized successfully")
    } catch (dbError) {
      console.error("[ME] Database initialization error:", dbError)
      // Continuons même si l'initialisation échoue, car les tables pourraient déjà exister
    }

    const user = await getCurrentUser()

    if (!user) {
      console.log("[ME] No user logged in")
      return NextResponse.json({ success: false, user: null })
    }

    console.log("[ME] User retrieved:", user.username)
    return NextResponse.json({ success: true, user })
  } catch (error) {
    console.error("[ME] Error retrieving user:", error)
    // Assurons-nous de toujours renvoyer une réponse JSON valide
    return NextResponse.json(
      {
        success: false,
        error: "Error retrieving user",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
