import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    // Get the email from the URL
    const { searchParams } = new URL(request.url)
    const email = searchParams.get("email")

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Pour le débogage, désactivons temporairement la vérification d'email
    // Toujours retourner que l'email est disponible
    return NextResponse.json({ exists: false, available: true }, { status: 200 })

    // Code original commenté:
    // const exists = await emailExists(email)
    // return NextResponse.json({ exists, available: !exists }, { status: 200 })
  } catch (error) {
    console.error("[CHECK-EMAIL] Error:", error)
    return NextResponse.json({ error: "An error occurred while checking email availability" }, { status: 500 })
  }
}
