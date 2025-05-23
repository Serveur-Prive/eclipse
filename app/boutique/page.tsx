"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ShoppingBag, Info, LogIn } from "lucide-react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function BoutiquePage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  // Rediriger les utilisateurs non connectés vers la page de connexion
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login?redirect=/boutique")
    }
  }, [user, loading, router])

  // Si l'utilisateur n'est pas connecté ou si le chargement est en cours, ne rien afficher
  if (loading || !user) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black relative">
        <div className="absolute inset-0 z-0">
          <Image src="/dofus-header-bg.png" alt="Dofus Background" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </div>
        <div className="relative z-10 text-center p-8 max-w-md">
          <h1 className="text-2xl font-bold text-white mb-4">Accès restreint</h1>
          <p className="text-white/70 mb-6">Vous devez être connecté pour accéder à la boutique.</p>
          <Link href="/login?redirect=/boutique">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <LogIn className="h-4 w-4 mr-2" />
              Se connecter
            </Button>
          </Link>
        </div>
      </div>
    )
  }

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
              OMBREFUS
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Boutique</span>{" "}
              OMBREFUS
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">Notre boutique est actuellement disponible en jeu</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-r from-black/70 to-primary/30 backdrop-blur-sm border-primary/30 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                    <ShoppingBag className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">Boutique en jeu</h2>
                  <p className="text-white/70 mb-6">
                    Vous pouvez toujours profiter de nos offres directement en jeu. Connectez-vous à OMBREFUS et accédez
                    à notre boutique complète avec tous les articles exclusifs et promotions.
                  </p>
                  <div className="bg-black/40 rounded-lg p-4 border border-primary/20 mb-6 w-full">
                    <div className="flex items-start">
                      <Info className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-white/80">
                        Pour accéder à la boutique, connectez-vous au jeu et appuyez sur la touche{" "}
                        <span className="bg-black/60 px-2 py-0.5 rounded text-white font-mono">B</span> ou cliquez sur
                        l'icône de boutique dans le menu principal.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-6">
                    <div className="bg-black/30 p-4 rounded-lg border border-primary/10">
                      <h3 className="font-bold text-white mb-2">Avantages en jeu</h3>
                      <ul className="text-sm text-white/70 space-y-1">
                        <li>• Promotions exclusives</li>
                        <li>• Aperçu des objets en 3D</li>
                        <li>• Essai des cosmétiques</li>
                        <li>• Paiement sécurisé</li>
                      </ul>
                    </div>
                    <div className="bg-black/30 p-4 rounded-lg border border-primary/10">
                      <h3 className="font-bold text-white mb-2">Support client</h3>
                      <ul className="text-sm text-white/70 space-y-1">
                        <li>• Assistance en direct</li>
                        <li>• Livraison instantanée</li>
                        <li>• Remboursement possible</li>
                        <li>• Historique d'achats</li>
                      </ul>
                    </div>
                  </div>
                  <a href="https://discord.com/invite/zwKmMxjhFF" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#5865F2] text-white hover:bg-[#4752C4]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4 mr-2"
                      >
                        <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z" />
                      </svg>
                      Besoin d'aide ? Rejoignez notre Discord
                    </Button>
                  </a>
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
              &copy; 2025 Dofus OMBREFUS. Tous droits réservés. Non affilié à Ankama Games.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
