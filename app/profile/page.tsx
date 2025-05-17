"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Loader2, Shield, Swords, Trophy, Star, Clock, Calendar, User, Mail, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/contexts/auth-context"
import NavBar from "@/components/nav-bar"

export default function ProfilePage() {
  const { user, loading, logout } = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

  const handleLogout = async () => {
    try {
      await logout()
      router.push("/")
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error)
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="text-center">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-red-500" />
          <p className="mt-4 text-white">Chargement de votre profil...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null // Redirection gérée par useEffect
  }

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <NavBar />

      <main className="flex-1 pt-16">
        <div className="relative">
          <div className="absolute inset-0 h-64 bg-gradient-to-r from-red-900/30 to-red-800/20">
            <Image
              src="/cosmic-background.png"
              alt="Profile Background"
              fill
              className="object-cover opacity-40"
              priority
            />
          </div>
          <div className="container relative z-10 px-4 pt-20 md:px-6">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="col-span-1">
                <Card className="border-red-800/30 bg-black/60 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative h-20 w-20 overflow-hidden rounded-full bg-gradient-to-r from-red-600 to-red-800 p-1">
                        <div className="h-full w-full rounded-full bg-black">
                          <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-white">
                            {user.username ? user.username.charAt(0).toUpperCase() : "?"}
                          </div>
                        </div>
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-white">{user.username}</CardTitle>
                        <CardDescription className="text-white/60">Aventurier Niveau 1</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 text-white/80">
                        <User className="h-5 w-5 text-red-500" />
                        <span>{user.username}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-white/80">
                        <Mail className="h-5 w-5 text-red-500" />
                        <span>{user.email}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-white/80">
                        <Calendar className="h-5 w-5 text-red-500" />
                        <span>Membre depuis le {new Date().toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-white/60">Progression</h3>
                      <div className="h-2 rounded-full bg-red-900/20">
                        <div className="h-2 w-1/4 rounded-full bg-gradient-to-r from-red-600 to-red-800"></div>
                      </div>
                      <div className="flex justify-between text-xs text-white/60">
                        <span>Niveau 1</span>
                        <span>Niveau 2</span>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button
                        variant="outline"
                        className="w-full border-red-800/50 text-white hover:bg-red-900/20"
                        onClick={handleLogout}
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Déconnexion
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6 border-red-800/30 bg-black/60 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Statistiques</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Trophy className="h-5 w-5 text-amber-500" />
                        <span className="text-white/80">Victoires en PvP</span>
                      </div>
                      <span className="font-bold text-white">0</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Shield className="h-5 w-5 text-emerald-500" />
                        <span className="text-white/80">Donjons complétés</span>
                      </div>
                      <span className="font-bold text-white">0</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Star className="h-5 w-5 text-yellow-500" />
                        <span className="text-white/80">Réputation</span>
                      </div>
                      <span className="font-bold text-white">Neutre</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-5 w-5 text-blue-500" />
                        <span className="text-white/80">Temps de jeu</span>
                      </div>
                      <span className="font-bold text-white">0h</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="col-span-1 lg:col-span-2">
                <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-black/60 backdrop-blur-sm">
                    <TabsTrigger value="overview" className="text-white data-[state=active]:bg-red-900/20">
                      Aperçu
                    </TabsTrigger>
                    <TabsTrigger value="characters" className="text-white data-[state=active]:bg-red-900/20">
                      Personnages
                    </TabsTrigger>
                    <TabsTrigger value="achievements" className="text-white data-[state=active]:bg-red-900/20">
                      Succès
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview">
                    <Card className="border-red-800/30 bg-black/60 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-xl text-white">Bienvenue sur Dofus Eraziel!</CardTitle>
                        <CardDescription className="text-white/60">
                          Votre aventure commence ici. Explorez le monde, créez des personnages et relevez des défis!
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="rounded-lg bg-red-900/10 p-4">
                          <h3 className="mb-2 text-lg font-medium text-white">Commencer l'aventure</h3>
                          <p className="mb-4 text-white/70">
                            Pour commencer à jouer sur Dofus Eraziel, suivez ces étapes simples:
                          </p>
                          <ol className="ml-5 list-decimal space-y-2 text-white/70">
                            <li>Téléchargez notre lanceur personnalisé</li>
                            <li>Créez votre premier personnage</li>
                            <li>Explorez le monde et accomplissez des quêtes</li>
                            <li>Rejoignez notre communauté Discord pour trouver des compagnons d'aventure</li>
                          </ol>
                          <div className="mt-4">
                            <Button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white border-0">
                              Télécharger le lanceur
                            </Button>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <Card className="border-red-800/20 bg-black/40">
                            <CardHeader className="pb-2">
                              <div className="flex items-center">
                                <Swords className="mr-2 h-5 w-5 text-red-500" />
                                <CardTitle className="text-md text-white">Événements à venir</CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-3">
                                <div className="rounded bg-red-900/10 p-2">
                                  <p className="text-sm font-medium text-white">Tournoi PvP</p>
                                  <p className="text-xs text-white/60">Bientôt disponible</p>
                                </div>
                                <div className="rounded bg-red-900/10 p-2">
                                  <p className="text-sm font-medium text-white">Invasion des Abysses</p>
                                  <p className="text-xs text-white/60">Bientôt disponible</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="border-red-800/20 bg-black/40">
                            <CardHeader className="pb-2">
                              <div className="flex items-center">
                                <Trophy className="mr-2 h-5 w-5 text-amber-500" />
                                <CardTitle className="text-md text-white">Classements</CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="text-center text-white/60">
                                <p>Participez à des combats PvP pour apparaître dans le classement!</p>
                                <Button
                                  variant="link"
                                  className="mt-2 text-red-400 hover:text-red-300"
                                  onClick={() => router.push("/classement")}
                                >
                                  Voir le classement
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="characters">
                    <Card className="border-red-800/30 bg-black/60 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-xl text-white">Vos personnages</CardTitle>
                        <CardDescription className="text-white/60">
                          Créez et gérez vos personnages sur Dofus Eraziel
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                          <div className="mb-4 rounded-full bg-red-900/20 p-4">
                            <User className="h-10 w-10 text-red-500" />
                          </div>
                          <h3 className="mb-2 text-lg font-medium text-white">Aucun personnage</h3>
                          <p className="mb-6 max-w-md text-white/60">
                            Vous n'avez pas encore créé de personnage. Lancez le jeu et créez votre premier héros pour
                            commencer l'aventure!
                          </p>
                          <Button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white border-0">
                            Télécharger le lanceur
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="achievements">
                    <Card className="border-red-800/30 bg-black/60 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-xl text-white">Succès</CardTitle>
                        <CardDescription className="text-white/60">
                          Suivez votre progression et débloquez des récompenses
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="rounded-lg border border-red-800/20 bg-black/40 p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-900/20">
                                  <Trophy className="h-5 w-5 text-red-500" />
                                </div>
                                <div>
                                  <h3 className="text-md font-medium text-white">Premiers pas</h3>
                                  <p className="text-sm text-white/60">Créez votre premier personnage</p>
                                </div>
                              </div>
                              <div className="text-white/40">0/1</div>
                            </div>
                            <div className="mt-3 h-2 rounded-full bg-red-900/20">
                              <div className="h-2 w-0 rounded-full bg-gradient-to-r from-red-600 to-red-800"></div>
                            </div>
                          </div>

                          <div className="rounded-lg border border-red-800/20 bg-black/40 p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-900/20">
                                  <Shield className="h-5 w-5 text-red-500" />
                                </div>
                                <div>
                                  <h3 className="text-md font-medium text-white">Explorateur</h3>
                                  <p className="text-sm text-white/60">Visitez 10 zones différentes</p>
                                </div>
                              </div>
                              <div className="text-white/40">0/10</div>
                            </div>
                            <div className="mt-3 h-2 rounded-full bg-red-900/20">
                              <div className="h-2 w-0 rounded-full bg-gradient-to-r from-red-600 to-red-800"></div>
                            </div>
                          </div>

                          <div className="rounded-lg border border-red-800/20 bg-black/40 p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-900/20">
                                  <Swords className="h-5 w-5 text-red-500" />
                                </div>
                                <div>
                                  <h3 className="text-md font-medium text-white">Combattant</h3>
                                  <p className="text-sm text-white/60">Remportez 5 combats PvP</p>
                                </div>
                              </div>
                              <div className="text-white/40">0/5</div>
                            </div>
                            <div className="mt-3 h-2 rounded-full bg-red-900/20">
                              <div className="h-2 w-0 rounded-full bg-gradient-to-r from-red-600 to-red-800"></div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-black border-t border-red-900/30 mt-16">
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
