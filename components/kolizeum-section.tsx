"use client"
import Image from "next/image"
import { Trophy, Users, Shield, Swords, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { kolizeumData } from "@/data/kolizeum-data"

export default function KolizeumSection() {
  // Récupérer les 5 premiers joueurs du classement
  const topPlayers = kolizeumData.slice(0, 5)

  // Fonction pour obtenir la couleur de la classe hybride
  const getClassColor = (className: string) => {
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
    <div className="max-w-6xl mx-auto relative z-10">
      <div className="relative mb-12">
        <div className="bg-gradient-to-r from-black/80 to-red-950/30 backdrop-blur-sm border border-red-800/30 rounded-xl p-6 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-full max-w-[300px] aspect-[16/9]">
              <Image src="/kolizeum-logo.jpeg" alt="Kolizeum Logo" fill className="object-contain" />
            </div>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Kolizeum Amélioré</h3>
            <p className="text-white text-lg max-w-3xl mb-6">
              Le Kolizeum a été entièrement repensé pour offrir des combats équilibrés, des récompenses exclusives et un
              système de classement compétitif.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
              <div className="bg-black/50 border border-red-800/30 rounded-lg px-4 py-2 flex items-center">
                <Trophy className="h-5 w-5 text-red-500 mr-2" />
                <span className="text-white">Récompenses Exclusives</span>
              </div>
              <div className="bg-black/50 border border-red-800/30 rounded-lg px-4 py-2 flex items-center">
                <Users className="h-5 w-5 text-red-500 mr-2" />
                <span className="text-white">Matchmaking Équilibré</span>
              </div>
              <div className="bg-black/50 border border-red-800/30 rounded-lg px-4 py-2 flex items-center">
                <Swords className="h-5 w-5 text-red-500 mr-2" />
                <span className="text-white">Formats 1v1, 3v3, 5v5</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-gradient-to-r from-black/80 to-red-950/30 backdrop-blur-sm border-red-800/30 overflow-hidden h-full">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Trophy className="h-6 w-6 text-red-500 mr-2" />
                <h3 className="text-2xl font-bold text-white">Caractéristiques du Kolizeum</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-black/70 border border-red-800/20 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Users className="h-5 w-5 text-red-500 mr-2" />
                    <h5 className="text-white font-medium">Formats de Combat</h5>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center text-white/70">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      <span>1v1 - Duels individuels</span>
                    </li>
                    <li className="flex items-center text-white/70">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      <span>3v3 - Combats d'équipe</span>
                    </li>
                    <li className="flex items-center text-white/70">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      <span>5v5 - Batailles stratégiques</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black/70 border border-red-800/20 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Shield className="h-5 w-5 text-red-500 mr-2" />
                    <h5 className="text-white font-medium">Système de Classement</h5>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center text-white/70">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      <span>Elo Rating personnalisé</span>
                    </li>
                    <li className="flex items-center text-white/70">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      <span>Saisons compétitives</span>
                    </li>
                    <li className="flex items-center text-white/70">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      <span>Rangs et titres exclusifs</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-black/70 border border-red-800/20 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Swords className="h-5 w-5 text-red-500 mr-2" />
                    <h5 className="text-white font-medium">Récompenses</h5>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center text-white/70">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      <span>Équipements PvP exclusifs</span>
                    </li>
                    <li className="flex items-center text-white/70">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      <span>Monnaie Kolizeum spéciale</span>
                    </li>
                    <li className="flex items-center text-white/70">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      <span>Titres et apparences uniques</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black/70 border border-red-800/20 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Shield className="h-5 w-5 text-red-500 mr-2" />
                    <h5 className="text-white font-medium">Sécurité</h5>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center text-white/70">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      <span>Anti-triche avancé</span>
                    </li>
                    <li className="flex items-center text-white/70">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      <span>Modération active</span>
                    </li>
                    <li className="flex items-center text-white/70">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      <span>Environnement équitable</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Link href="/nous-rejoindre">
                <Button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white border-0 w-full">
                  Nous-rejoindre
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="bg-gradient-to-r from-black/80 to-red-950/30 backdrop-blur-sm border-red-800/30 overflow-hidden h-full">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Top 5 Kolizeum</h3>
                <Link href="/classement">
                  <Button variant="link" className="text-red-400 hover:text-red-300 p-0">
                    Voir tout
                  </Button>
                </Link>
              </div>

              <div className="space-y-4 mb-6">
                {topPlayers.map((player, index) => (
                  <div key={player.id} className="bg-black/70 border border-red-800/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white w-6 h-6 rounded-full flex items-center justify-center mr-2">
                          {index + 1}
                        </div>
                        <div>
                          <h5 className="text-white font-medium text-lg">{player.name}</h5>
                          <p className={`text-sm ${getClassColor(player.class)}`}>
                            {player.class} Niv.{player.level}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-red-500 font-bold">{player.rating}</span>
                        <p className="text-xs text-white/50">points</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/classement">
                <Button variant="outline" className="border-red-800/50 text-white hover:bg-red-900/20 w-full">
                  Voir le Classement Complet
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
