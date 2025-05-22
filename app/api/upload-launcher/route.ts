import { put } from "@vercel/blob"
import { NextResponse } from "next/server"

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "Aucun fichier trouvé" }, { status: 400 })
    }

    // Uploader le fichier vers Vercel Blob Storage
    const blob = await put("launcher.zip", file, {
      access: "public",
      addRandomSuffix: false, // Pour garder le même nom de fichier
    })

    return NextResponse.json({
      success: true,
      url: blob.url,
      message: "Launcher uploadé avec succès!",
    })
  } catch (error) {
    console.error("Erreur lors de l'upload:", error)
    return NextResponse.json({ error: "Erreur lors de l'upload du fichier" }, { status: 500 })
  }
}

// Augmenter la limite de taille pour les fichiers volumineux
export const config = {
  api: {
    bodyParser: false,
  },
}
