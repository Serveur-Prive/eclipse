import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

// Fonction pour sauvegarder l'URL dans un fichier JSON
async function saveLauncherUrl(url: string) {
  try {
    const data = { url, updatedAt: new Date().toISOString() }

    // Créer le dossier data s'il n'existe pas
    const dataDir = path.join(process.cwd(), "data")
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    // Écrire le fichier JSON
    fs.writeFileSync(path.join(dataDir, "launcher-url.json"), JSON.stringify(data, null, 2))

    return true
  } catch (error) {
    console.error("Erreur lors de la sauvegarde de l'URL:", error)
    return false
  }
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json({ error: "URL manquante" }, { status: 400 })
    }

    const success = await saveLauncherUrl(url)

    if (success) {
      return NextResponse.json({ success: true, message: "URL du launcher enregistrée avec succès" })
    } else {
      return NextResponse.json({ error: "Erreur lors de l'enregistrement de l'URL" }, { status: 500 })
    }
  } catch (error) {
    console.error("Erreur:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
