"use client"

import { useAuth } from "@/contexts/auth-context"
import { redirect } from "next/navigation"
import { useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Settings, Shield, Trophy, Clock } from "lucide-react"

export default function Profile() {
  const { user, loading } = useAuth()

  // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
  useEffect(() => {
    if (!loading && !user) {
      redirect("/login")
    }
  }, [user, loading])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-pulse text-primary">Chargement du profil...</div>
      </div>
    )
  }

  if (!user) {
    return null // Ceci ne devrait pas s'afficher grâce à la redirection
  }

  return (
    <div className="flex min-h-screen flex-col bg-black relative">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image src="/dofus-header-bg.png" alt="Dofus Background" fill className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      </div>

      {/* Navigation est gérée par le NavBar component */}

      <main className="flex-1 relative z-10 pt-20 pb-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Profil de{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                {user.username}
              </span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Carte de profil principal */}
              <Card className="bg-gradient-to-r from-black/70 to-primary/30 backdrop-blur-sm border-primary/30 overflow-hidden md:col-span-2">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center mr-4">
                      <User className="h-10 w-10 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{user.username}</h2>
                      <p className="text-white/70">{user.email}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-black/50 border border-primary/20 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Shield className="h-5 w-5 text-primary mr-2" />
                        <h3 className="text-white font-medium">Niveau de compte</h3>
                      </div>
                      <p className="text-primary text-2xl font-bold">1</p>
                      <p className="text-white/50 text-sm">Compte standard</p>
                    </div>
                    <div className="bg-black/50 border border-primary/20 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-primary mr-2" />
                        <h3 className="text-white font-medium">Date d'inscription</h3>
                      </div>
                      <p className="text-primary text-lg font-bold">
                        {user.created_at ? new Date(user.created_at).toLocaleDateString() : "Récemment"}
                      </p>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary hover:to-accent text-white border-0">
                    <Settings className="mr-2 h-4 w-4" />
                    Modifier le profil
                  </Button>
                </CardContent>
              </Card>

              {/* Carte des statistiques */}
              <Card className="bg-gradient-to-r from-black/70 to-primary/30 backdrop-blur-sm border-primary/30 overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Statistiques</h3>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-white/70 text-sm">Personnages</span>
                        <span className="text-white text-sm">0</span>
                      </div>
                      <div className="h-2 bg-black/50 rounded-full">
                        <div className="h-2 bg-primary rounded-full" style={{ width: "0%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-white/70 text-sm">Kolizeum</span>
                        <span className="text-white text-sm">0 / 0</span>
                      </div>
                      <div className="h-2 bg-black/50 rounded-full">
                        <div className="h-2 bg-primary rounded-full" style={{ width: "0%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-white/70 text-sm">Donjons</span>
                        <span className="text-white text-sm">0</span>
                      </div>
                      <div className="h-2 bg-black/50 rounded-full">
                        <div className="h-2 bg-primary rounded-full" style={{ width: "0%" }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button variant="outline" className="w-full border-primary/30 text-white hover:bg-primary/20">
                      <Trophy className="mr-2 h-4 w-4" />
                      Voir les succès
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer est géré ailleurs */}
    </div>
  )
}
