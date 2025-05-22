"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Search, Trophy, ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Données de classement statiques (pour éviter la dépendance à Firebase)
const kolizeumData = [
  {
    id: 1,
    rank: 1,
    name: "Juliet",
    class: "Sacri-Iop",
    server: "STASIS",
    level: 200,
    rating: 3915,
    winRate: 100,
  },
  {
    id: 2,
    rank: 2,
    name: "Cpt-Morgan",
    class: "Forgelance",
    server: "STASIS",
    level: 200,
    rating: 3903,
    winRate: 100,
  },
  {
    id: 3,
    rank: 3,
    name: "Cuentito",
    class: "Eni-Xelor",
    server: "STASIS",
    level: 200,
    rating: 3881,
    winRate: 100,
  },
  {
    id: 4,
    rank: 4,
    name: "Totosh",
    class: "Cra-Sram",
    server: "STASIS",
    level: 200,
    rating: 3875,
    winRate: 100,
  },
  {
    id: 5,
    rank: 5,
    name: "Roger-grauvier",
    class: "Feca-Pandawa",
    server: "STASIS",
    level: 200,
    rating: 3870,
    winRate: 100,
  },
  {
    id: 6,
    rank: 6,
    name: "Insecticide",
    class: "Xelor",
    server: "STASIS",
    level: 200,
    rating: 3853,
    winRate: 100,
  },
  {
    id: 7,
    rank: 7,
    name: "Qmier",
    class: "Eca-Trope",
    server: "STASIS",
    level: 200,
    rating: 3832,
    winRate: 100,
  },
  {
    id: 8,
    rank: 8,
    name: "Ryk",
    class: "Sadida",
    server: "STASIS",
    level: 200,
    rating: 3828,
    winRate: 100,
  },
  {
    id: 9,
    rank: 9,
    name: "Nawehl",
    class: "Xelor-Osamodas",
    server: "STASIS",
    level: 200,
    rating: 3824,
    winRate: 100,
  },
  {
    id: 10,
    rank: 10,
    name: "Ultidz",
    class: "Osamodas",
    server: "STASIS",
    level: 200,
    rating: 3810,
    winRate: 100,
  },
  {
    id: 11,
    rank: 11,
    name: "Brightemacron",
    class: "Enutrof-Sram",
    server: "STASIS",
    level: 200,
    rating: 3810,
    winRate: 100,
  },
  {
    id: 12,
    rank: 12,
    name: "Ishiria",
    class: "Pandawa-Zobal",
    server: "STASIS",
    level: 200,
    rating: 3797,
    winRate: 100,
  },
  {
    id: 13,
    rank: 13,
    name: "Kingston",
    class: "Iop-Eca-Sram",
    server: "STASIS",
    level: 200,
    rating: 3795,
    winRate: 100,
  },
  {
    id: 14,
    rank: 14,
    name: "Watashi-wa-estedesu",
    class: "Ouginak-Feca",
    server: "STASIS",
    level: 200,
    rating: 3794,
    winRate: 100,
  },
  {
    id: 15,
    rank: 15,
    name: "Apoo-Kly",
    class: "Eni-Xelo-Sadida",
    server: "STASIS",
    level: 200,
    rating: 3791,
    winRate: 100,
  },
]

export default function ClassementPage() {
  const [activeTab, setActiveTab] = useState("kolizeum")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // Filtrer les données en fonction de la recherche
  const filteredData = kolizeumData.filter(
    (player) =>
      player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      player.class.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage)

  // Fonction pour obtenir la couleur de la classe hybride
  const getClassColor = (className) => {
    if (className.includes("-")) {
      // C'est une classe hybride
      if (className.split("-").length > 2) {
        // Triple classe
        return "text-purple-400"
      }
      // Double classe
      return "text-cyan-400"
    }
    // Classe simple
    return "text-white/50"
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Classement</span>{" "}
              des Joueurs
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Découvrez les meilleurs joueurs de Dofus STASIS dans différentes catégories
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
              <TabsList className="grid grid-cols-3 bg-card border border-primary/30 p-1">
                <TabsTrigger value="kolizeum">Kolizeum</TabsTrigger>
                <TabsTrigger value="pvm">PvM</TabsTrigger>
                <TabsTrigger value="guildes">Guildes</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
                <Input
                  className="pl-10 bg-black/50 border-primary/30 text-white"
                  placeholder="Rechercher un joueur..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="text-white/70 text-sm">
                Affichage de {Math.min(filteredData.length, startIndex + 1)}-
                {Math.min(filteredData.length, startIndex + itemsPerPage)} sur {filteredData.length} joueurs
              </div>
            </div>

            <Card className="bg-gradient-to-r from-black/70 to-primary/30 backdrop-blur-sm border-primary/30 overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-primary/30">
                        <th className="px-4 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider w-16">
                          Rang
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                          Joueur
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                          Classe
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                          Niveau
                        </th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-white/70 uppercase tracking-wider">
                          Score
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-primary/10">
                      {paginatedData.map((player, index) => (
                        <tr key={player.id} className="hover:bg-primary/5 transition-colors">
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center justify-center">
                              {player.rank <= 3 ? (
                                <div
                                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                    player.rank === 1
                                      ? "bg-yellow-500"
                                      : player.rank === 2
                                        ? "bg-gray-300"
                                        : "bg-amber-700"
                                  }`}
                                >
                                  <Trophy className="h-4 w-4 text-white" />
                                </div>
                              ) : (
                                <div className="w-8 h-8 rounded-full bg-black/50 border border-primary/30 flex items-center justify-center text-white">
                                  {player.rank}
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-2">
                                <div className="text-sm font-medium text-white">{player.name}</div>
                                <div className="text-xs text-white/50">{player.server}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className={`text-sm ${getClassColor(player.class)}`}>{player.class}</div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-white/70">{player.level}</td>
                          <td className="px-4 py-4 whitespace-nowrap text-right">
                            <div className="text-sm font-bold text-primary">{player.rating}</div>
                            <div className="text-xs text-white/50">{player.winRate}% victoires</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="px-4 py-3 flex items-center justify-between border-t border-primary/30">
                    <div className="flex-1 flex justify-between sm:hidden">
                      <Button
                        variant="outline"
                        className="border-primary/30 text-white hover:bg-primary/20"
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                      >
                        Précédent
                      </Button>
                      <Button
                        variant="outline"
                        className="border-primary/30 text-white hover:bg-primary/20"
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                      >
                        Suivant
                      </Button>
                    </div>
                    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm text-white/70">
                          Page <span className="font-medium">{currentPage}</span> sur{" "}
                          <span className="font-medium">{totalPages}</span>
                        </p>
                      </div>
                      <div>
                        <nav
                          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                          aria-label="Pagination"
                        >
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-l-md border-primary/30 text-white hover:bg-primary/20"
                            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </Button>
                          {Array.from({ length: totalPages }).map((_, i) => (
                            <Button
                              key={i}
                              variant={currentPage === i + 1 ? "default" : "outline"}
                              className={`border-primary/30 ${
                                currentPage === i + 1
                                  ? "bg-primary text-primary-foreground"
                                  : "text-white hover:bg-primary/20"
                              }`}
                              onClick={() => setCurrentPage(i + 1)}
                            >
                              {i + 1}
                            </Button>
                          ))}
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-r-md border-primary/30 text-white hover:bg-primary/20"
                            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                          >
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </nav>
                      </div>
                    </div>
                  </div>
                )}
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
              &copy; 2025 Dofus STASIS. Tous droits réservés. Non affilié à Ankama Games.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
