"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Swords, Shield, Download, Zap, Flame, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import ClassesSection from "@/components/classes-section"
import KolizeumSection from "@/components/kolizeum-section"
import PvmSection from "@/components/pvm-section"
import UpgradeSystem from "@/components/upgrade-system"
import NavBar from "@/components/nav-bar"

// Importer le contexte d'authentification
import { useAuth } from "@/contexts/auth-context"

// Dans la fonction Home, ajouter l'utilisation du contexte d'authentification
export default function Home() {
  // Utiliser le contexte d'authentification pour obtenir les erreurs
  const { error: authError } = useAuth()
  const error = authError

  // Le reste du code reste inchangé

  return (
    <div className="flex min-h-screen flex-col bg-black">
      {/* Navigation */}
      <NavBar />

      <main className="flex-1">
        {/* Afficher l'erreur si présente */}
        {error && (
          <div className="container px-4 pt-20">
            <Alert variant="destructive" className="mb-6 bg-red-900/20 border-red-800">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error} Veuillez contacter l'administrateur du site.</AlertDescription>
            </Alert>
          </div>
        )}

        {/* Hero Section */}
        <section className="relative pt-16 overflow-hidden">
          <div className="absolute inset-0 bg-black z-0">
            <Image src="/dofus-header-bg.png" alt="Dofus Header Background" fill className="object-cover opacity-90" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black z-0" />

          <div className="container relative z-10 px-4 py-24 md:py-32 lg:py-40">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 space-y-6 text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  <h2 className="text-lg md:text-xl font-medium text-red-500">UNE NOUVELLE EXPÉRIENCE DOFUS 2.51</h2>
                  <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                    DOFUS{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                      ERAZIEL
                    </span>
                  </h1>
                  <p className="text-xl text-white/80 max-w-2xl">
                    Découvrez un serveur privé Dofus 2.51 avec des classes hybrides, du PvP et PvM hardcore, un système
                    Kolizeum amélioré et des événements exclusifs.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                >
                  <Link href="/nous-rejoindre">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white border-0 h-12 px-8"
                    >
                      Nous Rejoindre
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>
              </div>

              <div className="md:w-1/2 mt-12 md:mt-0">
                {/* Logo hero supprimé */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="flex justify-center"
                >
                  {/* Contenu vide pour maintenir l'espace */}
                </motion.div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent" />
        </section>

        {/* Classes Hybrides Section */}
        <section id="classes" className="py-20 relative">
          {/* Nouvel arrière-plan pour la section des classes */}
          <div className="absolute inset-0 z-0">
            <Image src="/classes-background.png" alt="Classes Background" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black opacity-80" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                  CLASSES
                </span>{" "}
                HYBRIDES
              </h2>
              <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                Découvrez des combinaisons de classes uniques avec des sorts et capacités exclusifs
              </p>
            </div>

            <ClassesSection />
          </div>
        </section>

        {/* PvP & PvM Section */}
        <section id="pvp" className="py-20 bg-gradient-to-b from-black to-red-950/30 relative">
          <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-10" />
          <div className="container relative z-10 px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                PVP & PVM{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                  HARDCORE
                </span>
              </h2>
              <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                Relevez des défis intenses en PvP et affrontez des donjons PvM extrêmement difficiles pour obtenir des
                récompenses légendaires
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="bg-gradient-to-r from-black to-red-950/30 backdrop-blur-sm border-red-800/30 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-80">
                    <Image src="/pvp-arena-dofus.png" alt="PvP Arène Dofus" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black opacity-90" />
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                      <div className="flex items-center mb-3">
                        <Swords className="h-6 w-6 text-red-500 mr-2" />
                        <h3 className="text-3xl font-bold text-white mb-2">PvP Hardcore</h3>
                      </div>
                      <p className="text-white mb-6 text-lg font-medium">
                        Affrontez d'autres joueurs dans des combats stratégiques avec des mécaniques uniques et des
                        récompenses exclusives.
                      </p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-center text-white/80">
                          <Flame className="h-4 w-4 text-red-500 mr-2" />
                          <span>Arènes 1v1, 3v3 et 5v5</span>
                        </li>
                        <li className="flex items-center text-white/80">
                          <Flame className="h-4 w-4 text-red-500 mr-2" />
                          <span>Classements saisonniers</span>
                        </li>
                        <li className="flex items-center text-white/80">
                          <Flame className="h-4 w-4 text-red-500 mr-2" />
                          <span>Récompenses exclusives</span>
                        </li>
                      </ul>
                      {/* Bouton "En savoir plus" supprimé */}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-black to-red-950/30 backdrop-blur-sm border-red-800/30 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-80">
                    <Image src="/pvm-adventure.png" alt="PvM Aventure" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black opacity-80" />
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                      <div className="flex items-center mb-3">
                        <Shield className="h-6 w-6 text-red-500 mr-2" />
                        <h3 className="text-3xl font-bold text-white mb-2">PvM Extrême</h3>
                      </div>
                      <p className="text-white mb-6 text-lg">
                        Explorez des donjons repensés avec une difficulté accrue et des mécaniques de boss inédites.
                      </p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-center text-white">
                          <Flame className="h-4 w-4 text-red-500 mr-2" />
                          <span>Donjons exclusifs</span>
                        </li>
                        <li className="flex items-center text-white">
                          <Flame className="h-4 w-4 text-red-500 mr-2" />
                          <span>Boss avec mécaniques avancées</span>
                        </li>
                        <li className="flex items-center text-white">
                          <Flame className="h-4 w-4 text-red-500 mr-2" />
                          <span>Équipements légendaires</span>
                        </li>
                      </ul>
                      {/* Bouton "Découvrir les donjons" supprimé */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Kolizeum Section */}
        <section id="kolizeum" className="py-20 relative">
          <div className="absolute inset-0 z-0">
            <Image src="/kolizeum-texture.png" alt="Kolizeum Texture" fill className="object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                  KOLIZEUM
                </span>{" "}
                AMÉLIORÉ
              </h2>
              <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                Participez à des combats d'arène avec un système de matchmaking équilibré et des récompenses exclusives
              </p>
            </div>

            <KolizeumSection />
          </div>
        </section>

        {/* PvM Section */}
        <section id="pvm-ranking" className="py-20 relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 via-green-800/10 to-black/80" />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-400">
                  MEILLEURS
                </span>{" "}
                CHASSEURS PVM
              </h2>
              <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                Découvrez les joueurs les plus redoutables dans les donjons et contre les boss les plus difficiles
              </p>
            </div>

            <PvmSection />
          </div>
        </section>

        {/* Système d'Upgrade Section */}
        <section id="upgrade" className="py-20 relative">
          <div className="absolute inset-0 z-0">
            <Image src="/upgrade-background.jpeg" alt="Upgrade Background" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                  SYSTÈME
                </span>{" "}
                D'AMÉLIORATION
              </h2>
              <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                Améliorez vos équipements avec notre système unique d'upgrade pour obtenir des bonus supplémentaires
              </p>
            </div>

            <UpgradeSystem />
          </div>
        </section>

        {/* Download Section */}
        <section className="py-20 bg-gradient-to-b from-black to-red-950/30 relative">
          <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-10" />
          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-900/20 to-red-800/20 backdrop-blur-sm rounded-xl border border-red-800/30 p-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">Prêt à Jouer ?</h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
                Téléchargez notre lanceur personnalisé et rejoignez l'aventure dès aujourd'hui
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white border-0 h-12 px-8"
                >
                  Télécharger le Lanceur
                  <Download className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-800/50 text-white hover:bg-red-900/20 h-12 px-8"
                >
                  Guide d'Installation
                </Button>
              </div>
              <div className="mt-6 flex justify-center gap-4">
                <div className="flex items-center text-white/70">
                  <Shield className="h-4 w-4 mr-2" />
                  <span className="text-sm">Analysé Anti-virus</span>
                </div>
                <div className="flex items-center text-white/70">
                  <Download className="h-4 w-4 mr-2" />
                  <span className="text-sm">Installation Facile</span>
                </div>
                <div className="flex items-center text-white/70">
                  <Zap className="h-4 w-4 mr-2" />
                  <span className="text-sm">Mises à Jour Auto</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-red-900/30">
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
