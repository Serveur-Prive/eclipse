"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Download, Shield, Zap, ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function NousRejoindre() {
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
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comment Rejoindre{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  Dofus STASIS
                </span>
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Suivez ces étapes simples pour commencer votre aventure sur notre serveur unique avec des classes
                hybrides et du contenu exclusif
              </p>
            </motion.div>

            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="bg-gradient-to-r from-black/70 to-red-950/30 backdrop-blur-sm border-primary/30 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center mr-3">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <h2 className="text-2xl font-bold text-white">Créer un compte</h2>
                    </div>

                    <p className="text-white/70 mb-6 pl-11">
                      Commencez par créer un compte sur notre site pour accéder au serveur et à toutes ses
                      fonctionnalités.
                    </p>

                    <div className="bg-black/50 border border-primary/20 rounded-lg p-4 mb-6">
                      <h3 className="text-lg font-medium text-white mb-3">Étapes d'inscription</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <p className="text-white/80">
                            Rendez-vous sur la page d'inscription et remplissez le formulaire avec vos informations
                          </p>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <p className="text-white/80">
                            Vérifiez votre email pour activer votre compte (vérifiez vos spams si nécessaire)
                          </p>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <p className="text-white/80">
                            Connectez-vous avec vos identifiants pour accéder à toutes les fonctionnalités du site
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/register" className="flex-1">
                        <Button className="w-full bg-gradient-to-r from-primary to-accent text-white border-0">
                          S'inscrire maintenant
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href="/login" className="flex-1">
                        <Button variant="outline" className="w-full border-primary/30 text-white hover:bg-primary/20">
                          Se connecter
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-gradient-to-r from-black/70 to-red-950/30 backdrop-blur-sm border-primary/30 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center mr-3">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <h2 className="text-2xl font-bold text-white">Télécharger le jeu</h2>
                    </div>

                    <p className="text-white/70 mb-6 pl-11">
                      Téléchargez notre lanceur personnalisé pour accéder facilement au serveur Dofus STASIS.
                    </p>

                    <div className="bg-black/50 border border-primary/20 rounded-lg p-4 mb-6">
                      <h3 className="text-lg font-medium text-white mb-3">Windows</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <p className="text-white/80">Téléchargez le lanceur pour Windows (environ 174 Mo)</p>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <p className="text-white/80">Exécutez l'installateur et suivez les instructions</p>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <p className="text-white/80">
                            Le lanceur téléchargera automatiquement les fichiers nécessaires (environ 2 Go)
                          </p>
                        </li>
                      </ul>
                      <a
                        href="https://github.com/Serveur-Prive/ERAZIEL_LAUNCHER/releases/download/ERAZIEL_LAUNCHER/ERAZIEL_LAUNCHER.zip"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full mt-4"
                      >
                        <Button className="w-full bg-gradient-to-r from-primary to-accent text-white border-0">
                          Télécharger le lanceur
                          <Download className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </div>

                    <div className="bg-black/50 border border-primary/20 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-3">Configuration requise</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-white font-medium mb-2">Minimale</h4>
                          <ul className="space-y-1 text-white/70 text-sm">
                            <li className="flex items-center">
                              <Shield className="h-4 w-4 text-primary mr-2" />
                              <span>Windows 7/8/10/11</span>
                            </li>
                            <li className="flex items-center">
                              <Shield className="h-4 w-4 text-primary mr-2" />
                              <span>Processeur Intel Core i3 ou équivalent</span>
                            </li>
                            <li className="flex items-center">
                              <Shield className="h-4 w-4 text-primary mr-2" />
                              <span>4 Go RAM</span>
                            </li>
                            <li className="flex items-center">
                              <Shield className="h-4 w-4 text-primary mr-2" />
                              <span>2 Go d'espace disque</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-2">Recommandée</h4>
                          <ul className="space-y-1 text-white/70 text-sm">
                            <li className="flex items-center">
                              <Zap className="h-4 w-4 text-primary mr-2" />
                              <span>Windows 10/11</span>
                            </li>
                            <li className="flex items-center">
                              <Zap className="h-4 w-4 text-primary mr-2" />
                              <span>Processeur Intel Core i5 ou équivalent</span>
                            </li>
                            <li className="flex items-center">
                              <Zap className="h-4 w-4 text-primary mr-2" />
                              <span>8 Go RAM</span>
                            </li>
                            <li className="flex items-center">
                              <Zap className="h-4 w-4 text-primary mr-2" />
                              <span>5 Go d'espace SSD</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <h2 className="text-2xl font-bold text-white mb-4">Prêt à commencer l'aventure ?</h2>
                <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                  Suivez les étapes ci-dessus et rejoignez des milliers de joueurs dans l'univers unique de Dofus STASIS
                  !
                </p>
                <Link href="/register">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white border-0">
                    Créer un compte maintenant
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>
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
