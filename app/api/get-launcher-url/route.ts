import { list } from "@vercel/blob"
import { NextResponse } from "next/server"

export async function GET(): Promise<NextResponse> {
  try {
    // Récupérer la liste des blobs avec le préfixe "launcher.zip"
    const { blobs } = await list({ prefix: "launcher.zip" })

    // Vérifier si le launcher existe
    if (blobs.length > 0) {
      // Trier par date de création (le plus récent en premier)
      const sortedBlobs = blobs.sort((a, b) => {
        return new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
      })

      // Retourner l'URL du launcher le plus récent
      return NextResponse.json({
        success: true,
        url: sortedBlobs[0].url,
        version: sortedBlobs[0].uploadedAt,
      })
    }

    // Si aucun launcher n'est trouvé
    return NextResponse.json({
      success: false,
      message: "Aucun launcher disponible",
    })
  } catch (error) {
    console.error("Erreur lors de la récupération de l'URL du launcher:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
