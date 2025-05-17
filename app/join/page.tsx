"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Download, Shield, Zap, Users, Trophy, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function JoinPage() {
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
            <Image src="/logo.png" alt="Dofus Echoes Logo" width={40} height={40} className="w-10 h-10" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
              ECHOES 2.51
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
                Rejoignez l'Aventure{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                  Dofus Echoes 2.51
                </span>
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Découvrez comment commencer votre aventure sur notre serveur unique avec des classes hybrides et du
                contenu exclusif
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="bg-gradient-to-r from-black/70 to-red-950/30 backdrop-blur-sm border-red-800/30 overflow-hidden h-full">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-white mb-4">Créer un compte</h2>
                    <p className="text-white/70 mb-6">
                      Commencez par créer un compte sur notre site pour accéder au serveur et à toutes ses
                      fonctionnalités.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <div className="bg-red-600 rounded-full p-1 mr-3 mt-0.5">
                          <span className="text-white text-xs font-bold">1</span>
                        </div>
                        <p className="text-white/80">
                          Inscrivez-vous avec une adresse email valide et choisissez un nom d'utilisateur unique
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-red-600 rounded-full p-1 mr-3 mt-0.5">
                          <span className="text-white text-xs font-bold">2</span>
                        </div>
                        <p className="text-white/80">
                          Vérifiez votre email pour activer votre compte et accéder à toutes les fonctionnalités
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-red-600 rounded-full p-1 mr-3 mt-0.5">
                          <span className="text-white text-xs font-bold">3</span>
                        </div>
                        <p className="text-white/80">
                          Personnalisez votre profil et rejoignez notre communauté Discord pour rester informé
                        </p>
                      </li>
                    </ul>
                    <Link href="/register">
                      <Button className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white border-0">
                        S'inscrire maintenant
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-gradient-to-r from-black/70 to-red-950/30 backdrop-blur-sm border-red-800/30 overflow-hidden h-full">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-white mb-4">Télécharger le jeu</h2>
                    <p className="text-white/70 mb-6">
                      Téléchargez notre lanceur personnalisé pour accéder facilement au serveur Dofus Echoes 2.51.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <div className="bg-red-600 rounded-full p-1 mr-3 mt-0.5">
                          <span className="text-white text-xs font-bold">1</span>
                        </div>
                        <p className="text-white/80">
                          Téléchargez notre lanceur spécial qui configure automatiquement votre client Dofus
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-red-600 rounded-full p-1 mr-3 mt-0.5">
                          <span className="text-white text-xs font-bold">2</span>
                        </div>
                        <p className="text-white/80">
                          Installez le lanceur et laissez-le télécharger les fichiers nécessaires (environ 2 Go)
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-red-600 rounded-full p-1 mr-3 mt-0.5">
                          <span className="text-white text-xs font-bold">3</span>
                        </div>
                        <p className="text-white/80">
                          Connectez-vous avec vos identifiants et commencez votre aventure immédiatement
                        </p>
                      </li>
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white border-0">
                      Télécharger le lanceur
                      <Download className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-r from-black/70 to-red-950/30 backdrop-blur-sm border border-red-800/30 rounded-xl p-6 mb-12"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Configuration requise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Configuration minimale</h3>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-center">
                      <Shield className="h-4 w-4 text-red-500 mr-2" />
                      <span>Système: Windows 7/8/10/11, macOS 10.13+</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="h-4 w-4 text-red-500 mr-2" />
                      <span>Processeur: Intel Core i3 ou équivalent</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="h-4 w-4 text-red-500 mr-2" />
                      <span>Mémoire: 4 Go RAM</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="h-4 w-4 text-red-500 mr-2" />
                      <span>Graphiques: Carte compatible DirectX 9</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="h-4 w-4 text-red-500 mr-2" />
                      <span>Stockage: 2 Go d'espace disponible</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="h-4 w-4 text-red-500 mr-2" />
                      <span>Internet: Connexion haut débit</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Configuration recommandée</h3>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-center">
                      <Zap className="h-4 w-4 text-red-500 mr-2" />
                      <span>Système: Windows 10/11, macOS 11+</span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="h-4 w-4 text-red-500 mr-2" />
                      <span>Processeur: Intel Core i5 ou équivalent</span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="h-4 w-4 text-red-500 mr-2" />
                      <span>Mémoire: 8 Go RAM</span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="h-4 w-4 text-red-500 mr-2" />
                      <span>Graphiques: Carte dédiée 2 Go VRAM</span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="h-4 w-4 text-red-500 mr-2" />
                      <span>Stockage: 5 Go d'espace SSD</span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="h-4 w-4 text-red-500 mr-2" />
                      <span>Internet: Connexion fibre optique</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-r from-black/70 to-red-950/30 backdrop-blur-sm border border-red-800/30 rounded-xl p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Rejoindre notre communauté</h2>
              <p className="text-white/70 mb-6">
                Faites partie de notre communauté active et passionnée pour améliorer votre expérience de jeu.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-black/50 border border-red-800/20 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Users className="h-5 w-5 text-red-500 mr-2" />
                    <h3 className="text-lg font-medium text-white">Discord</h3>
                  </div>
                  <p className="text-white/70 text-sm mb-4">
                    Rejoignez notre serveur Discord pour discuter avec d'autres joueurs, trouver des équipes et recevoir
                    de l'aide.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-red-800/50 text-white hover:bg-red-900/20"
                    onClick={() => window.open("https://discord.gg/example", "_blank")}
                  >
                    Rejoindre Discord
                  </Button>
                </div>
                <div className="bg-black/50 border border-red-800/20 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Trophy className="h-5 w-5 text-red-500 mr-2" />
                    <h3 className="text-lg font-medium text-white">Forum</h3>
                  </div>
                  <p className="text-white/70 text-sm mb-4">
                    Participez aux discussions sur notre forum pour partager des stratégies, signaler des bugs et
                    suggérer des améliorations.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-red-800/50 text-white hover:bg-red-900/20"
                    onClick={() => window.open("https://forum.dofusechoes.com", "_blank")}
                  >
                    Visiter le forum
                  </Button>
                </div>
                <div className="bg-black/50 border border-red-800/20 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Zap className="h-5 w-5 text-red-500 mr-2" />
                    <h3 className="text-lg font-medium text-white">Réseaux sociaux</h3>
                  </div>
                  <p className="text-white/70 text-sm mb-4">
                    Suivez-nous sur les réseaux sociaux pour rester informé des dernières actualités, mises à jour et
                    événements.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-red-800/50 text-white hover:bg-red-900/20"
                    onClick={() => window.open("https://twitter.com/dofusechoes", "_blank")}
                  >
                    Nous suivre
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black/50 backdrop-blur-sm border-t border-red-900/30">
        <div className="container px-4 py-6 md:px-6">
          <div className="text-center">
            <p className="text-xs text-white/50">
              &copy; 2025 Dofus Echoes 2.51. Tous droits réservés. Non affilié à Ankama Games.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
