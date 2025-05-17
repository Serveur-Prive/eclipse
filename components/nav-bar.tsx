"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { User, LogOut } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

export default function NavBar() {
  // Utiliser le contexte d'authentification pour déterminer si l'utilisateur est connecté
  const { user, logout } = useAuth()
  const isLoggedIn = !!user

  // Fonction pour gérer la déconnexion
  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error)
    }
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-red-900/50">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          {/* Logo supprimé */}
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
            ERAZIEL
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#classes" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
            Classes Hybrides
          </Link>
          <Link href="#pvp" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
            PvP & PvM
          </Link>
          <Link href="#kolizeum" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
            Kolizeum
          </Link>
          <Link href="#upgrade" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
            Upgrades
          </Link>
          <Link href="/nous-rejoindre" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
            Nous Rejoindre
          </Link>
          <Link href="/boutique" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
            Boutique
          </Link>
          <Link href="/classement" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
            Classement
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <>
              <Link href="/profile">
                <Button variant="ghost" className="text-white hover:bg-white/10">
                  <User className="h-4 w-4 mr-2" />
                  Profil
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-red-800/50 text-white hover:bg-red-900/20"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Déconnexion
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" className="text-white hover:bg-white/10">
                  Connexion
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white border-0">
                  S'inscrire
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
