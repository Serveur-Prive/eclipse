"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Trophy, Medal, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { kolizeumData } from "@/data/kolizeum-data"
import { Button } from "@/components/ui/button"

export default function ClassementPage() {
  const [currentTab, setCurrentTab] = useState("kolizeum")

  // Fonction pour déterminer l'icône de rang
  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-5 w-5 text-yellow-400" />
    if (rank === 2) return <Medal className="h-5 w-5 text-gray-400" />
    if (rank === 3) return <Medal className="h-5 w-5 text-amber-600" />
    return <span className="text-white/70">{rank}</span>
  }

  // Fonction pour obtenir la couleur de la barre de niveau
  const getLevelColor = (level: number) => {
    if (level >= 200) return "bg-yellow-500"
    if (level >= 150) return "bg-orange-500"
    if (level >= 100) return "bg-red-500"
    return "bg-blue-500"
  }

  // Fonction pour obtenir la couleur de la classe hybride
  const getClassColor = (className: string) => {
    if (className.includes("-")) {
      // C'est une classe hybride
      if (className.split("-").length > 2) {
        // Triple classe
        return "text-purple-400 font-semibold"
      }
      // Double classe
      return "text-cyan-400 font-semibold"
    }
    // Classe simple
    return "text-white/70"
  }

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container px-4 py-8 md:px-6">
        <div className="mb-8 flex items-center">
          <Link href="/">
            <Button variant="ghost" className="mr-4 text-white/70 hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-white">Classement Kolizeum</h1>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              className={`rounded-lg px-4 py-2 font-medium transition-colors ${
                currentTab === "kolizeum"
                  ? "bg-blue-600 text-white"
                  : "bg-blue-900/30 text-white/70 hover:bg-blue-900/50"
              }`}
              onClick={() => setCurrentTab("kolizeum")}
            >
              Kolizeum
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-blue-800/30 bg-gradient-to-r from-black to-blue-950/20 backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-blue-800/30 bg-blue-900/20">
                  <th className="px-4 py-3 text-left text-sm font-medium text-white/70">Rang</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-white/70">Joueur</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-white/70">Classe</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-white/70">Serveur</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-white/70">Niveau</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-white/70">Cote</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-white/70">Victoires</th>
                </tr>
              </thead>
              <tbody>
                {kolizeumData.map((player, index) => (
                  <motion.tr
                    key={player.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`border-b border-blue-800/20 ${index % 2 === 0 ? "bg-blue-900/10" : "bg-blue-900/5"}`}
                  >
                    <td className="px-4 py-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-900/30">
                        {getRankIcon(player.rank)}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-lg font-medium text-white">{player.name}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={getClassColor(player.class)}>{player.class}</span>
                    </td>
                    <td className="px-4 py-3 text-white/70">{player.server}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <div className="mr-2 text-white">{player.level}</div>
                        <div className="h-2 w-16 overflow-hidden rounded-full bg-blue-900/30">
                          <div
                            className={`h-full ${getLevelColor(player.level)}`}
                            style={{
                              width: `${(player.level / 200) * 100}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 font-medium text-blue-400">{player.rating}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-2 py-1 text-xs font-medium ${
                          player.winRate >= 90
                            ? "bg-green-500/20 text-green-400"
                            : player.winRate >= 75
                              ? "bg-blue-500/20 text-blue-400"
                              : player.winRate >= 60
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {player.winRate}%
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
