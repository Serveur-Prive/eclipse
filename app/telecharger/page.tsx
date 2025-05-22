"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { ArrowLeft, Download, Shield, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TelechargerPage() {
  const [launcherUrl, setLauncherUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Récupérer l'URL du launcher depuis l'API
    const fetchLauncherUrl = async () => {
      try {
        setLoading(true)
        const response = await fetch("/api/get-launcher-url")
        const data = await response.json()
        if (data.success && data.url) {
          setLauncherUrl(data.url)
        }
      } catch (error) {
        console.error("Erreur lors de la récupération de l'URL du launcher:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchLauncherUrl()
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-black relative">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image src="/dofus-header-bg.png" alt="Dofus Background" fill className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      </div>

      {/* Navigation */}
      <header className="relative z-10 bg-black/50 backdrop-blur-sm border-b border-primary/30">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              STASIS
            </span>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 relative z-10 py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Télécharger le{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  Lanceur STASIS
                </span>
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Accédez facilement au serveur avec notre lanceur personnalisé et commencez votre aventure
              </p>
            </div>

            <Card className="bg-gradient-to-r from-black/70 to-primary/30 backdrop-blur-sm border-primary/30 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-full md:w-1/2">
                    <div className="relative aspect-video rounded-lg overflow-hidden border border-primary/30">
                      <Image src="/dofus-launcher-interface.png" alt="Lanceur Windows" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="text-xl font-bold text-white mb-2">Lanceur pour Windows</h3>
                    <p className="text-white/70 mb-4">
                      Notre lanceur pour Windows vous permet d'accéder facilement au serveur STASIS avec une
                      installation simple et rapide.
                    </p>
                    <div className="flex items-center text-white/60 text-sm mb-4">
                      <Info className="h-4 w-4 mr-2" />
                      <span>Version 1.0 • Taille: 150 Mo</span>
                    </div>
                    {loading ? (
                      <Button
                        className="w-full bg-gradient-to-r from-primary/70 to-accent/70 text-white border-0"
                        disabled
                      >
                        Chargement...
                      </Button>
                    ) : launcherUrl ? (
                      <a href={launcherUrl} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary hover:to-accent text-white border-0">
                          Télécharger pour Windows
                          <Download className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    ) : (
                      <Button
                        className="w-full bg-gradient-to-r from-primary/70 to-accent/70 text-white border-0"
                        disabled
                      >
                        Launcher bientôt disponible
                      </Button>
                    )}
                  </div>
                </div>

                <div className="mt-6 bg-black/50 border border-primary/20 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2 flex items-center">
                    <Shield className="h-4 w-4 text-primary mr-2" />
                    Instructions d'installation
                  </h4>
                  <ol className="space-y-2 text-white/70 list-decimal pl-5">
                    <li>Téléchargez le fichier ZIP du lanceur</li>
                    <li>Extrayez le contenu du ZIP dans un dossier de votre choix</li>
                    <li>Exécutez le fichier "STASIS_Launcher.exe"</li>
                    <li>Connectez-vous avec vos identifiants du site</li>
                    <li>Cliquez sur "Jouer" pour lancer le jeu</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black/50 backdrop-blur-sm border-t border-primary/30">
        <div className="container px-4 py-6 md:px-6">
          <div className="text-center">
            <p className="text-xs text-white/50">
              &copy; 2025 Dofus STASIS. Tous droits réservés. Non affilié à Ankama Games.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
