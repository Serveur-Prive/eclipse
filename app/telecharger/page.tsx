import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, Monitor, Apple, AlertCircle } from "lucide-react"

export default function TelechargerPage() {
  // Lien de téléchargement du launcher
  const LAUNCHER_URL =
    "https://pkt7pze2mm9hmqjt.public.blob.vercel-storage.com/STASIS_Launcher-87RC1LX7BdAH0IeqS1r8AXFR5e3Upj.zip"

  return (
    <div className="min-h-screen pt-24 pb-16 flex flex-col items-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Télécharger le Launcher STASIS
          </h1>
          <p className="max-w-[700px] text-gray-400 md:text-xl">
            Rejoignez l'aventure Dofus 2.51 avec notre launcher exclusif. Téléchargez, installez et plongez dans un
            monde de magie et de stratégie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col items-center p-6 bg-black/50 border border-primary/20 rounded-lg">
            <Monitor className="h-12 w-12 mb-4 text-primary" />
            <h2 className="text-2xl font-bold mb-2">Windows</h2>
            <p className="text-gray-400 mb-6 text-center">Compatible avec Windows 10 et 11</p>
            <Link href={LAUNCHER_URL} download="STASIS_Launcher.zip">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Download className="mr-2 h-5 w-5" />
                Télécharger pour Windows
              </Button>
            </Link>
          </div>

          <div className="flex flex-col items-center p-6 bg-black/50 border border-primary/20 rounded-lg">
            <Apple className="h-12 w-12 mb-4 text-primary" />
            <h2 className="text-2xl font-bold mb-2">MacOS</h2>
            <p className="text-gray-400 mb-6 text-center">Compatible avec MacOS 10.15 et versions ultérieures</p>
            <Link href={LAUNCHER_URL} download="STASIS_Launcher.zip">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Download className="mr-2 h-5 w-5" />
                Télécharger pour MacOS
              </Button>
            </Link>
          </div>
        </div>

        <div className="bg-black/50 border border-primary/20 rounded-lg p-6 mb-12 max-w-3xl mx-auto">
          <div className="flex items-start space-x-4">
            <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Instructions d'installation</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>Téléchargez le fichier STASIS_Launcher.zip</li>
                <li>Extrayez le contenu du fichier ZIP dans un dossier de votre choix</li>
                <li>Exécutez le fichier "STASIS_Launcher.exe" (Windows) ou "STASIS_Launcher.app" (MacOS)</li>
                <li>Connectez-vous avec vos identifiants ou créez un nouveau compte</li>
                <li>Cliquez sur "Jouer" pour lancer le jeu</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Aperçu du Launcher</h2>
          <div className="relative h-[400px] w-full max-w-3xl mx-auto rounded-lg overflow-hidden border border-primary/20">
            <Image src="/dofus-launcher-interface.png" alt="Interface du Launcher STASIS" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}
