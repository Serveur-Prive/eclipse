"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { User, LogOut, Download } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

export default function NavBar() {
  // Lien de téléchargement du launcher
  const LAUNCHER_URL =
    "https://pkt7pze2mm9hmqjt.public.blob.vercel-storage.com/STASIS_Launcher-87RC1LX7BdAH0IeqS1r8AXFR5e3Upj.zip"

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
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-primary/30">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            STASIS
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#classes" className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors">
            Classes Hybrides
          </Link>
          <Link href="#pvp" className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors">
            PvP & PvM
          </Link>
          <Link
            href="#kolizeum"
            className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors"
          >
            Kolizeum
          </Link>
          <Link href="#upgrade" className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors">
            Upgrades
          </Link>
          <Link
            href="/nous-rejoindre"
            className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors"
          >
            Nous Rejoindre
          </Link>
          <Link
            href="/boutique"
            className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors"
          >
            Boutique
          </Link>
          <Link
            href="/classement"
            className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors"
          >
            Classement
          </Link>
          <Link
            href="/telecharger"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center"
          >
            <Download className="h-3 w-3 mr-1" />
            Télécharger
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <>
              <Link href={LAUNCHER_URL} download="STASIS_Launcher.zip">
                <Button variant="outline" className="border-primary/50 text-foreground hover:bg-accent/10">
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger
                </Button>
              </Link>
              <Link href="/profile">
                <Button variant="ghost" className="text-foreground hover:bg-accent/10">
                  <User className="h-4 w-4 mr-2" />
                  Profil
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-accent/10"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Déconnexion
              </Button>
            </>
          ) : (
            <>
              <Link href={LAUNCHER_URL} download="STASIS_Launcher.zip">
                <Button variant="outline" className="border-primary/50 text-foreground hover:bg-accent/10">
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="ghost" className="text-foreground hover:bg-accent/10">
                  Connexion
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">S'inscrire</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
