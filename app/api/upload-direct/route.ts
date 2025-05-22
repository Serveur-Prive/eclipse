import { NextResponse } from "next/server"

export async function POST(request: Request): Promise<NextResponse> {
  try {
    // Rediriger vers la page de téléchargement avec un message
    return NextResponse.redirect(
      new URL("/telecharger?status=error&message=Cette méthode n'est pas disponible actuellement", request.url),
    )
  } catch (error) {
    console.error("Erreur:", error)
    return NextResponse.redirect(new URL("/telecharger?status=error&message=Erreur lors de l'upload", request.url))
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
}
