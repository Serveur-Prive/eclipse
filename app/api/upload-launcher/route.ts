import { put } from "@vercel/blob"
import { NextResponse } from "next/server"

export async function POST(request: Request): Promise<NextResponse> {
  try {
    console.log("Début de l'upload du launcher")

    const formData = await request.formData()
    const file = formData.get("file") as File

    console.log("Fichier reçu:", file?.name, file?.size)

    if (!file) {
      console.log("Aucun fichier trouvé")
      return NextResponse.json({ error: "Aucun fichier trouvé" }, { status: 400 })
    }

    // Vérifier la taille du fichier (limite à 500MB)
    if (file.size > 500 * 1024 * 1024) {
      console.log("Fichier trop volumineux")
      return NextResponse.json({ error: "Fichier trop volumineux (max 500MB)" }, { status: 400 })
    }

    console.log("Début de l'upload vers Blob Storage")

    // Uploader le fichier vers Vercel Blob Storage avec un timeout plus long
    const blob = await put("launcher.zip", file, {
      access: "public",
      addRandomSuffix: false,
      contentType: "application/zip",
      multipart: true, // Utiliser l'upload multipart pour les gros fichiers
    })

    console.log("Upload réussi:", blob.url)

    return NextResponse.json({
      success: true,
      url: blob.url,
      message: "Launcher uploadé avec succès!",
    })
  } catch (error) {
    console.error("Erreur lors de l'upload:", error)
    return NextResponse.json(
      {
        error: "Erreur lors de l'upload du fichier",
        details: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 },
    )
  }
}

// Configuration pour permettre les fichiers volumineux
export const config = {
  api: {
    bodyParser: false,
    responseLimit: false,
  },
}
