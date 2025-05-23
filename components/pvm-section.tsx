"use client"
import { Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PvmSection() {
  const topPvmHunters = [
    {
      id: 1,
      rank: 1,
      name: "Zalda",
      class: "Pandawa-Zobal-Eni",
      server: "OMBREFUS",
      level: 200,
      dungeonCompletions: 187,
    },
    { id: 2, rank: 2, name: "Derbest", class: "Ouginak", server: "OMBREFUS", level: 200, dungeonCompletions: 176 },
    {
      id: 3,
      rank: 3,
      name: "Mutimutimutimutim",
      class: "Eca-Sadida",
      server: "OMBREFUS",
      level: 200,
      dungeonCompletions: 165,
    },
    {
      id: 4,
      rank: 4,
      name: "Krugeri",
      class: "Steamer-Enutrof",
      server: "OMBREFUS",
      level: 200,
      dungeonCompletions: 159,
    },
    { id: 5, rank: 5, name: "Gorr", class: "Sacrieur", server: "OMBREFUS", level: 200, dungeonCompletions: 152 },
  ]

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
    <div className="max-w-6xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-gradient-to-r from-black/80 to-primary/30 backdrop-blur-sm border-primary/30 overflow-hidden h-full">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-2xl font-bold text-white">Caractéristiques du PvM</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-black/70 border border-primary/20 rounded-lg p-4">
                  <h5 className="text-white font-medium mb-2">Donjons Exclusifs</h5>
                  <p className="text-white/70">
                    Explorez des donjons conçus spécialement pour notre serveur, avec des défis uniques et des
                    récompenses inédites.
                  </p>
                </div>

                <div className="bg-black/70 border border-primary/20 rounded-lg p-4">
                  <h5 className="text-white font-medium mb-2">Boss Ultimes</h5>
                  <p className="text-white/70">
                    Affrontez des boss redoutables dotés de mécaniques complexes qui mettront à l'épreuve votre maîtrise
                    du jeu.
                  </p>
                </div>

                <div className="bg-black/70 border border-primary/20 rounded-lg p-4">
                  <h5 className="text-white font-medium mb-2">Récompenses Légendaires</h5>
                  <p className="text-white/70">
                    Obtenez des équipements rares et puissants en venant à bout des défis PvM les plus ardus.
                  </p>
                </div>
              </div>

              <Link href="/nous-rejoindre">
                <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary hover:to-accent text-white border-0 w-full">
                  Nous Rejoindre
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="bg-gradient-to-r from-black/80 to-primary/30 backdrop-blur-sm border-primary/30 overflow-hidden h-full">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Top 5 Chasseurs PvM</h3>
                <Link href="/classement?tab=pvm">
                  <Button variant="link" className="text-primary hover:text-primary p-0">
                    Voir tout
                  </Button>
                </Link>
              </div>

              <div className="space-y-4 mb-6">
                {topPvmHunters.map((hunter, index) => (
                  <div
                    key={hunter.id}
                    className="bg-black/70 border border-primary/20 rounded-lg p-4 flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center">
                        <div className="bg-gradient-to-r from-primary to-accent text-white w-6 h-6 rounded-full flex items-center justify-center mr-2">
                          {index + 1}
                        </div>
                        <div>
                          <h5 className="text-white font-medium">{hunter.name}</h5>
                          <p className={`text-sm ${getClassColor(hunter.class)}`}>{hunter.class}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-primary font-bold">{hunter.dungeonCompletions}</span>
                      <p className="text-xs text-white/50">Donjons</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/classement?tab=pvm">
                <Button variant="outline" className="border-primary/30 text-white hover:bg-primary/20 w-full">
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
