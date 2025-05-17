"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Sparkles, Sword, Shield, Zap, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ClassesPage() {
  // Liste complète des classes hybrides
  const hybridClasses = [
    // Classes hybrides à 2 classes
    {
      id: "sacriop",
      name: "Sacri-Iop",
      description:
        "Fusion entre Sacrieur et Iop, cette classe hybride combine la puissance brute et le sacrifice pour des dégâts dévastateurs.",
      primaryColor: "from-red-600 to-red-800",
      playstyle: "Mêlée agressive",
      difficulty: 3,
      strengths: ["Dégâts élevés", "Auto-soin", "Résistance"],
      weaknesses: ["Mobilité limitée", "Risqué à jouer"],
    },
    {
      id: "enixelor",
      name: "Eni-Xelor",
      description:
        "Combinaison d'Eniripsa et Xelor, cette classe manipule le temps pour soigner et contrôler le champ de bataille.",
      primaryColor: "from-blue-600 to-purple-800",
      playstyle: "Support/Contrôle",
      difficulty: 4,
      strengths: ["Soins puissants", "Contrôle du temps", "Utilité en groupe"],
      weaknesses: ["Dégâts faibles", "Fragile"],
    },
    {
      id: "crasram",
      name: "Cra-Sram",
      description: "Fusion entre Cra et Sram, cette classe excelle dans les attaques à distance et les pièges mortels.",
      primaryColor: "from-green-600 to-emerald-800",
      playstyle: "Distance/Pièges",
      difficulty: 3,
      strengths: ["Dégâts à distance", "Contrôle de zone", "Mobilité"],
      weaknesses: ["Peu de défenses", "Complexe à maîtriser"],
    },
    {
      id: "ecatrope",
      name: "Eca-Trope",
      description:
        "Mélange d'Ecaflip et Sadida, cette classe utilise la chance et les invocations pour dominer le combat.",
      primaryColor: "from-yellow-600 to-amber-800",
      playstyle: "Invocateur/Aléatoire",
      difficulty: 4,
      strengths: ["Polyvalence", "Contrôle de zone", "Imprévisibilité"],
      weaknesses: ["Dépendant de la chance", "Gestion complexe"],
    },
    {
      id: "fecador",
      name: "Féca-Iador",
      description:
        "Alliance entre Féca et Roublard, cette classe combine des boucliers puissants avec des capacités de furtivité.",
      primaryColor: "from-cyan-600 to-teal-800",
      playstyle: "Défensif/Furtivité",
      difficulty: 3,
      strengths: ["Protection d'équipe", "Embuscades", "Contrôle de zone"],
      weaknesses: ["Dégâts moyens", "Complexe à positionner"],
    },
    {
      id: "osasteam",
      name: "Osa-Steam",
      description: "Fusion d'Osamodas et Steamer, cette classe contrôle des invocations mécaniques et organiques.",
      primaryColor: "from-orange-600 to-red-800",
      playstyle: "Invocateur/Technicien",
      difficulty: 5,
      strengths: ["Polyvalence", "Contrôle d'invocations", "Adaptabilité"],
      weaknesses: ["Fragile sans invocations", "Complexe à gérer"],
    },
    {
      id: "pandawa",
      name: "Panda-Roublard",
      description:
        "Mélange de Pandawa et Roublard, cette classe excelle dans la manipulation de position et les combos.",
      primaryColor: "from-pink-600 to-purple-800",
      playstyle: "Positionnement/Combo",
      difficulty: 4,
      strengths: ["Manipulation de position", "Dégâts en zone", "Contrôle"],
      weaknesses: ["Dépendant du positionnement", "Vulnérable aux déplacements forcés"],
    },
    {
      id: "zobal",
      name: "Zobal-Éliotrope",
      description:
        "Fusion de Zobal et Éliotrope, cette classe utilise des masques et des portails pour contrôler le combat.",
      primaryColor: "from-indigo-600 to-blue-800",
      playstyle: "Polyvalent/Technique",
      difficulty: 5,
      strengths: ["Adaptabilité", "Mobilité", "Contrôle spatial"],
      weaknesses: ["Courbe d'apprentissage élevée", "Complexité"],
    },
    {
      id: "fogger",
      name: "Fogg-Enutrof",
      description:
        "Alliance entre Steamer et Enutrof, cette classe utilise des tourelles et des pièges pour amasser des richesses.",
      primaryColor: "from-amber-600 to-yellow-800",
      playstyle: "Tourelles/Prospection",
      difficulty: 3,
      strengths: ["Contrôle de zone", "Génération de ressources", "Défense"],
      weaknesses: ["Mise en place lente", "Peu mobile"],
    },
    {
      id: "hupper",
      name: "Hupp-Ouginak",
      description:
        "Fusion d'Huppermage et Ouginak, cette classe maîtrise les éléments et la traque pour chasser ses proies.",
      primaryColor: "from-purple-600 to-violet-800",
      playstyle: "Élémentaire/Chasseur",
      difficulty: 4,
      strengths: ["Adaptabilité élémentaire", "Poursuite", "Dégâts soutenus"],
      weaknesses: ["Gestion complexe des éléments", "Dépendant du positionnement"],
    },
    {
      id: "masquelune",
      name: "Masqu-Sélune",
      description: "Combinaison de Zobal et Xelor, cette classe change de forme et manipule le temps en combat.",
      primaryColor: "from-blue-600 to-sky-800",
      playstyle: "Transformation/Temps",
      difficulty: 4,
      strengths: ["Polyvalence", "Contrôle temporel", "Adaptabilité"],
      weaknesses: ["Complexité", "Gestion des ressources"],
    },
    {
      id: "sacradida",
      name: "Sacra-Dida",
      description:
        "Mélange de Sacrieur et Sadida, cette classe sacrifie ses invocations pour gagner en puissance et contrôle.",
      primaryColor: "from-green-600 to-red-800",
      playstyle: "Sacrifice/Invocation",
      difficulty: 4,
      strengths: ["Contrôle de zone", "Dégâts élevés", "Adaptabilité"],
      weaknesses: ["Gestion complexe", "Vulnérable sans invocations"],
    },

    // Classes hybrides à 3 classes
    {
      id: "iopecasram",
      name: "Iop-Eca-Sram",
      description:
        "Triple fusion combinant la puissance du Iop, la chance de l'Ecaflip et les pièges du Sram pour un guerrier imprévisible et mortel.",
      primaryColor: "from-red-600 to-amber-800",
      playstyle: "Mêlée/Chance/Pièges",
      difficulty: 5,
      strengths: ["Dégâts critiques élevés", "Pièges imprévisibles", "Combos dévastateurs"],
      weaknesses: ["Très dépendant de la chance", "Complexité extrême"],
    },
    {
      id: "enixelosadida",
      name: "Eni-Xelo-Sadida",
      description:
        "Fusion de trois classes de support qui manipule le temps, soigne et contrôle des poupées pour un soutien inégalé.",
      primaryColor: "from-purple-600 to-green-800",
      playstyle: "Support/Temps/Invocation",
      difficulty: 5,
      strengths: ["Soins améliorés par le temps", "Contrôle total", "Poupées de soutien"],
      weaknesses: ["Dégâts très faibles", "Extrêmement complexe à maîtriser"],
    },
    {
      id: "fecaiopandawa",
      name: "Féca-Iop-Pandawa",
      description:
        "Combinaison défensive et offensive qui protège, frappe et manipule les positions pour dominer le champ de bataille.",
      primaryColor: "from-cyan-600 to-red-800",
      playstyle: "Tank/Dégâts/Positionnement",
      difficulty: 4,
      strengths: ["Défense impénétrable", "Dégâts ciblés", "Contrôle de position"],
      weaknesses: ["Mobilité limitée", "Gestion complexe des ressources"],
    },
    {
      id: "craenixelor",
      name: "Cra-Eni-Xelor",
      description:
        "Archer tactique qui manipule le temps et soigne, permettant des attaques à distance précises tout en soutenant l'équipe.",
      primaryColor: "from-green-600 to-blue-800",
      playstyle: "Distance/Soin/Temps",
      difficulty: 4,
      strengths: ["Attaques à distance précises", "Soins ciblés", "Manipulation temporelle"],
      weaknesses: ["Défense faible", "Positionnement crucial"],
    },
    {
      id: "osaecatrope",
      name: "Osa-Eca-Trope",
      description:
        "Maître des invocations qui combine les créatures d'Osamodas, la chance d'Ecaflip et les poupées de Sadida.",
      primaryColor: "from-orange-600 to-green-800",
      playstyle: "Triple Invocateur",
      difficulty: 5,
      strengths: ["Armée d'invocations", "Contrôle de zone massif", "Adaptabilité"],
      weaknesses: ["Très vulnérable sans invocations", "Gestion extrêmement complexe"],
    },
    {
      id: "sramzobaltrope",
      name: "Sram-Zobal-Trope",
      description:
        "Maître de l'illusion qui combine les pièges du Sram, les masques du Zobal et les portails de l'Éliotrope.",
      primaryColor: "from-indigo-600 to-purple-800",
      playstyle: "Illusion/Masques/Portails",
      difficulty: 5,
      strengths: ["Contrôle spatial absolu", "Imprévisibilité", "Mobilité exceptionnelle"],
      weaknesses: ["Courbe d'apprentissage vertigineuse", "Fragile si mal joué"],
    },
    {
      id: "hupperfecaougi",
      name: "Hupper-Féca-Ougi",
      description: "Maître élémentaire qui combine les runes d'Huppermage, les glyphes de Féca et la traque d'Ouginak.",
      primaryColor: "from-purple-600 to-cyan-800",
      playstyle: "Élémentaire/Protection/Traque",
      difficulty: 5,
      strengths: ["Adaptabilité élémentaire totale", "Protection avancée", "Poursuite implacable"],
      weaknesses: ["Système de jeu très technique", "Gestion complexe des ressources"],
    },
    {
      id: "steamfoggertrof",
      name: "Steam-Fogger-Trof",
      description:
        "Ingénieur de combat qui combine les mécanismes du Steamer, les tourelles du Steamer et la prospection de l'Enutrof.",
      primaryColor: "from-amber-600 to-orange-800",
      playstyle: "Ingénieur/Tourelles/Prospection",
      difficulty: 4,
      strengths: ["Contrôle mécanique du terrain", "Génération de ressources", "Zone de déni"],
      weaknesses: ["Mise en place très lente", "Vulnérable aux attaques rapides"],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-black relative">
      {/* Nouvel arrière-plan cosmique */}
      <div className="fixed inset-0 w-full h-full z-0">
        <Image src="/cosmic-background.png" alt="Arrière-plan cosmique" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 z-0" />
      </div>

      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-cyan-900/50">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              ERAZIEL 2.51
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/#classes" className="text-sm font-medium text-white/90 hover:text-cyan-400 transition-colors">
              Classes Hybrides
            </Link>
            <Link href="/#pvp" className="text-sm font-medium text-white/90 hover:text-cyan-400 transition-colors">
              PvP & PvM
            </Link>
            <Link href="/#kolizeum" className="text-sm font-medium text-white/90 hover:text-cyan-400 transition-colors">
              Kolizeum
            </Link>
            <Link href="/#events" className="text-sm font-medium text-white/90 hover:text-cyan-400 transition-colors">
              Événements
            </Link>
            <Link href="/#upgrade" className="text-sm font-medium text-white/90 hover:text-cyan-400 transition-colors">
              Upgrades
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" className="text-white hover:bg-cyan-900/20">
                Connexion
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-gradient-to-r from-cyan-600 to-blue-800 hover:from-cyan-700 hover:to-blue-900 text-white border-0">
                S'inscrire
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16 relative z-10">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="container relative z-10 px-4 py-12 md:py-16">
            <div className="flex flex-col items-center text-center mb-12">
              <Link href="/" className="mb-6">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-cyan-700 hover:bg-cyan-900/20 text-white"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Retour à l'accueil
                </Button>
              </Link>
              <motion.h1
                className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Classes{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  Hybrides
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-white/80 max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Découvrez les combinaisons uniques de classes disponibles exclusivement sur notre serveur Dofus 2.51,
                offrant des styles de jeu inédits et des capacités révolutionnaires.
              </motion.p>
            </div>

            <div className="mb-16">
              <motion.h2
                className="text-2xl font-bold text-white mb-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  Hybrides à Deux Classes
                </span>
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {hybridClasses.slice(0, 12).map((classItem, index) => (
                  <motion.div
                    key={classItem.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                  >
                    <Card className="bg-gradient-to-r from-black/70 to-cyan-950/30 backdrop-blur-md border-cyan-800/30 overflow-hidden h-full hover:border-cyan-600/50 transition-colors shadow-lg shadow-cyan-900/20">
                      <CardContent className="p-0">
                        <div className="relative h-48 overflow-hidden">
                          {/* Utilisation de l'image complète pour toutes les classes */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10" />
                          <div className="relative h-full w-full">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 to-blue-900/30" />
                            <Image src="/dofus-classes.png" alt={classItem.name} fill className="object-cover" />
                          </div>
                          <div className="absolute top-0 left-0 w-full p-4 z-20">
                            <div
                              className={`bg-gradient-to-r from-cyan-700 to-blue-800 text-white text-xs px-2 py-1 rounded-md inline-flex items-center`}
                            >
                              <Sparkles className="h-3 w-3 mr-1" />
                              <span>Classe Hybride</span>
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 p-4 z-20">
                            <h3 className="text-xl font-bold text-white">{classItem.name}</h3>
                          </div>
                        </div>

                        <div className="p-4">
                          <p className="text-white/70 text-sm mb-4">{classItem.description}</p>

                          <div className="flex items-center mb-3">
                            <Sword className="h-4 w-4 text-cyan-500 mr-2" />
                            <h4 className="text-white font-medium text-sm">Style de jeu: {classItem.playstyle}</h4>
                          </div>

                          <div className="flex items-center mb-3">
                            <Shield className="h-4 w-4 text-cyan-500 mr-2" />
                            <h4 className="text-white font-medium text-sm">
                              Difficulté:
                              <span className="ml-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <span
                                    key={i}
                                    className={`inline-block w-2 h-2 rounded-full mx-0.5 ${i < classItem.difficulty ? "bg-cyan-500" : "bg-cyan-950/30"}`}
                                  ></span>
                                ))}
                              </span>
                            </h4>
                          </div>

                          <div className="mb-3">
                            <div className="flex items-center mb-1">
                              <Zap className="h-4 w-4 text-cyan-500 mr-2" />
                              <h4 className="text-white font-medium text-sm">Forces:</h4>
                            </div>
                            <ul className="pl-6 text-white/70 text-xs space-y-1">
                              {classItem.strengths.map((strength, i) => (
                                <li key={i} className="list-disc">
                                  {strength}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <div className="flex items-center mb-1">
                              <Heart className="h-4 w-4 text-cyan-500 mr-2" />
                              <h4 className="text-white font-medium text-sm">Faiblesses:</h4>
                            </div>
                            <ul className="pl-6 text-white/70 text-xs space-y-1">
                              {classItem.weaknesses.map((weakness, i) => (
                                <li key={i} className="list-disc">
                                  {weakness}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <motion.h2
                className="text-2xl font-bold text-white mb-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  Hybrides à Trois Classes
                </span>
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {hybridClasses.slice(12).map((classItem, index) => (
                  <motion.div
                    key={classItem.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                    whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                  >
                    <Card className="bg-gradient-to-r from-black/70 to-cyan-950/30 backdrop-blur-md border-cyan-800/30 overflow-hidden h-full hover:border-cyan-600/50 transition-colors shadow-lg shadow-cyan-900/20">
                      <CardContent className="p-0">
                        <div className="relative h-48 overflow-hidden">
                          {/* Utilisation de l'image complète pour toutes les classes */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10" />
                          <div className="relative h-full w-full">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30" />
                            <Image src="/dofus-classes.png" alt={classItem.name} fill className="object-cover" />
                          </div>
                          <div className="absolute top-0 left-0 w-full p-4 z-20">
                            <div
                              className={`bg-gradient-to-r from-blue-600 to-purple-800 text-white text-xs px-2 py-1 rounded-md inline-flex items-center`}
                            >
                              <Sparkles className="h-3 w-3 mr-1" />
                              <span>Triple Classe</span>
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 p-4 z-20">
                            <h3 className="text-xl font-bold text-white">{classItem.name}</h3>
                          </div>
                        </div>

                        <div className="p-4">
                          <p className="text-white/70 text-sm mb-4">{classItem.description}</p>

                          <div className="flex items-center mb-3">
                            <Sword className="h-4 w-4 text-cyan-500 mr-2" />
                            <h4 className="text-white font-medium text-sm">Style de jeu: {classItem.playstyle}</h4>
                          </div>

                          <div className="flex items-center mb-3">
                            <Shield className="h-4 w-4 text-cyan-500 mr-2" />
                            <h4 className="text-white font-medium text-sm">
                              Difficulté:
                              <span className="ml-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <span
                                    key={i}
                                    className={`inline-block w-2 h-2 rounded-full mx-0.5 ${i < classItem.difficulty ? "bg-cyan-500" : "bg-cyan-950/30"}`}
                                  ></span>
                                ))}
                              </span>
                            </h4>
                          </div>

                          <div className="mb-3">
                            <div className="flex items-center mb-1">
                              <Zap className="h-4 w-4 text-cyan-500 mr-2" />
                              <h4 className="text-white font-medium text-sm">Forces:</h4>
                            </div>
                            <ul className="pl-6 text-white/70 text-xs space-y-1">
                              {classItem.strengths.map((strength, i) => (
                                <li key={i} className="list-disc">
                                  {strength}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <div className="flex items-center mb-1">
                              <Heart className="h-4 w-4 text-cyan-500 mr-2" />
                              <h4 className="text-white font-medium text-sm">Faiblesses:</h4>
                            </div>
                            <ul className="pl-6 text-white/70 text-xs space-y-1">
                              {classItem.weaknesses.map((weakness, i) => (
                                <li key={i} className="list-disc">
                                  {weakness}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-lg border-t border-cyan-900/30 relative z-10">
        <div className="container px-4 py-8 md:px-6">
          <div className="text-center">
            <p className="text-xs text-white/50">
              &copy; {new Date().getFullYear()} Dofus Eraziel 2.51. Tous droits réservés. Non affilié à Ankama Games.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
