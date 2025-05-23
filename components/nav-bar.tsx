"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { User, LogOut } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

export default function NavBar() {
  // Lien du serveur Discord
  const DISCORD_URL = "https://discord.com/invite/zwKmMxjhFF"

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
            OMBREFUS
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
        </nav>
        <div className="flex items-center gap-2">
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="border-[#5865F2]/50 bg-[#5865F2]/10 text-[#5865F2] hover:bg-[#5865F2]/20 hover:text-[#5865F2] p-2"
              aria-label="Rejoindre notre Discord"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z" />
              </svg>
            </Button>
          </a>

          {isLoggedIn ? (
            <>
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
