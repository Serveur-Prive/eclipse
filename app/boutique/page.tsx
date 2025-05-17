"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ShoppingBag, Info, Gift, Coins, Download, PenToolIcon as Tool } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useAuth } from "@/contexts/auth-context"

export default function BoutiquePage() {
  const router = useRouter()
  const { user, isLoading } = useAuth()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
    if (!isLoading && !user && isClient) {
      router.push("/login")
    }
  }, [user, isLoading, router, isClient])

  // Afficher un écran de chargement pendant la vérification de l'authentification
  if (isLoading || !isClient) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="text-center">
          <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-red-500 border-t-transparent"></div>
          <p className="text-white">Chargement...</p>
        </div>
      </div>
    )
  }

  // Si l'utilisateur n'est pas connecté, ne rien afficher (la redirection se fera via useEffect)
  if (!user) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col bg-black relative">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image src="/dofus-header-bg.png" alt="Dofus Background" fill className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      </div>

      {/* Navigation */}
      <header className="relative z-10 bg-black/50 backdrop-blur-sm border-b border-red-900/50">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            {/* Logo supprimé */}
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
              ERAZIEL
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
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                  Boutique
                </span>{" "}
                Dofus Eraziel
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Notre boutique web est actuellement en maintenance
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-10"
            >
              <Alert className="bg-yellow-900/20 border-yellow-800/50 mb-6">
                <Tool className="h-4 w-4 text-yellow-500" />
                <AlertDescription className="text-white">
                  Notre boutique web est temporairement indisponible pour maintenance. Vous pouvez toujours acheter des
                  Ogrines via le launcher du jeu.
                </AlertDescription>
              </Alert>

              <Card className="bg-gradient-to-r from-black/70 to-red-950/30 backdrop-blur-sm border-red-800/30 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <Coins className="h-6 w-6 text-yellow-500 mr-3" />
                    <h2 className="text-2xl font-bold text-white">Achat d'Ogrines via le Launcher</h2>
                  </div>

                  <p className="text-white/80 mb-6">
                    Pour acheter des Ogrines pendant la maintenance de notre boutique web, veuillez utiliser le launcher
                    du jeu. Le processus est simple, sécurisé et vous permet d'obtenir vos Ogrines instantanément.
                  </p>

                  <div className="bg-black/50 border border-red-800/20 rounded-lg p-4 mb-6">
                    <div className="flex items-center mb-3">
                      <Info className="h-5 w-5 text-red-500 mr-2" />
                      <h3 className="text-lg font-medium text-white">Comment acheter des Ogrines</h3>
                    </div>
                    <p className="text-white/70 mb-4">
                      Pour acheter des Ogrines via le launcher, suivez ces étapes simples :
                    </p>
                    <ol className="space-y-3 pl-6 list-decimal text-white/80">
                      <li>Ouvrez le launcher Dofus Eraziel</li>
                      <li>
                        Cliquez sur l'icône de boutique <ShoppingBag className="h-4 w-4 text-yellow-500 inline" /> dans
                        le menu principal
                      </li>
                      <li>Sélectionnez le pack d'Ogrines que vous souhaitez acheter</li>
                      <li>Choisissez votre méthode de paiement et suivez les instructions</li>
                      <li>Vos Ogrines seront créditées instantanément sur votre compte</li>
                    </ol>
                  </div>

                  <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-lg p-4 mb-6">
                    <div className="flex items-center mb-3">
                      <Gift className="h-5 w-5 text-yellow-500 mr-2" />
                      <h3 className="text-lg font-medium text-white">Promotion en cours</h3>
                    </div>
                    <p className="text-white/80 mb-3">
                      Profitez de notre offre spéciale :{" "}
                      <span className="text-yellow-400 font-bold">+15% d'Ogrines bonus</span> pour tout achat effectué
                      via le launcher pendant la maintenance !
                    </p>
                    <p className="text-white/70 text-sm">
                      Cette offre est valable jusqu'à la fin de la maintenance de notre boutique web.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-r from-black/70 to-red-950/30 backdrop-blur-sm border-red-800/30 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Download className="h-6 w-6 text-red-500 mr-3" />
                    <h2 className="text-2xl font-bold text-white">Télécharger le launcher</h2>
                  </div>

                  <p className="text-white/80 mb-6">
                    Vous n'avez pas encore notre launcher ? Téléchargez-le dès maintenant pour accéder à la boutique et
                    profiter de l'aventure Dofus Eraziel !
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/nous-rejoindre">
                      <Button className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white border-0">
                        Télécharger le launcher
                        <Download className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/">
                      <Button variant="outline" className="w-full border-red-800/50 text-white hover:bg-red-900/20">
                        Retour à l'accueil
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black/50 backdrop-blur-sm border-t border-red-900/30">
        <div className="container px-4 py-6 md:px-6">
          <div className="text-center">
            <p className="text-xs text-white/50">
              &copy; 2025 Dofus Eraziel. Tous droits réservés. Non affilié à Ankama Games.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
