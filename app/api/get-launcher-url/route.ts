import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

// Fonction pour lire l'URL depuis un fichier JSON
async function getLauncherUrl() {
  try {
    const filePath = path.join(process.cwd(), "data", "launcher-url.json")

    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"))
      return data
    }

    return null
  } catch (error) {
    console.error("Erreur lors de la lecture de l'URL:", error)
    return null
  }
}

export async function GET(): Promise<NextResponse> {
  try {
    // Essayer d'abord de récupérer depuis le fichier JSON
    const data = await getLauncherUrl()

    if (data && data.url) {
      return NextResponse.json({
        success: true,
        url: data.url,
        updatedAt: data.updatedAt,
      })
    }

    // Si aucune URL n'est trouvée
    return NextResponse.json({
      success: false,
      message: "Aucun launcher disponible",
    })
  } catch (error) {
    console.error("Erreur:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
