"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function MissionSection() {
  const [activeMission, setActiveMission] = useState(1)

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">MISSIONS</span>{" "}
          HEBDOMADAIRES
        </h2>
        <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
          Complétez des missions pour gagner des récompenses exclusives
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="bg-gradient-to-r from-black to-red-950/30 backdrop-blur-sm border border-red-800/30 rounded-xl p-6">
            <div className="flex items-center mb-6">
              <div className="bg-red-700 text-white text-sm px-3 py-1 rounded-md mr-3">MISSION 01</div>
              <h3 className="text-xl font-bold text-white">Atteignez le niveau 100</h3>
            </div>

            <p className="text-white/70 mb-6">
              Montez votre personnage au niveau 100 pour débloquer des récompenses spéciales et accéder à du contenu
              exclusif.
            </p>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-white/70">Progression</span>
                  <span className="text-sm text-white">75/100</span>
                </div>
                <Progress value={75} className="h-2 bg-red-950/30" indicatorClassName="bg-red-600" />
              </div>

              <div className="grid grid-cols-4 gap-4">
                <MissionReward level={25} completed={true} reward="/rewards/kamas.png" />
                <MissionReward level={50} completed={true} reward="/rewards/xp-potion.png" />
                <MissionReward level={75} completed={true} reward="/rewards/scroll.png" />
                <MissionReward level={100} completed={false} reward="/rewards/legendary-weapon.png" />
              </div>

              <Button className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white border-0">
                Voir les Détails
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-gradient-to-r from-black to-red-950/30 backdrop-blur-sm border border-red-800/30 rounded-xl p-6">
            <div className="flex items-center mb-6">
              <div className="bg-red-700 text-white text-sm px-3 py-1 rounded-md mr-3">MISSION 02</div>
              <h3 className="text-xl font-bold text-white">Défiez les Donjons</h3>
            </div>

            <p className="text-white/70 mb-6">
              Complétez les donjons exclusifs pour gagner des points et débloquer des récompenses spéciales.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-black/50 border border-red-800/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-white">Donjon des Ombres</span>
                  <span className="text-xs text-white/70">2/5</span>
                </div>
                <Progress value={40} className="h-2 bg-red-950/30" indicatorClassName="bg-red-600" />
              </div>

              <div className="bg-black/50 border border-red-800/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-white">Catacombes Oubliées</span>
                  <span className="text-xs text-white/70">1/5</span>
                </div>
                <Progress value={20} className="h-2 bg-red-950/30" indicatorClassName="bg-red-600" />
              </div>

              <div className="bg-black/50 border border-red-800/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-white">Temple Ancestral</span>
                  <span className="text-xs text-white/70">3/5</span>
                </div>
                <Progress value={60} className="h-2 bg-red-950/30" indicatorClassName="bg-red-600" />
              </div>

              <div className="bg-black/50 border border-red-800/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-white">Antre du Dragon</span>
                  <span className="text-xs text-white/70">0/5</span>
                </div>
                <Progress value={0} className="h-2 bg-red-950/30" indicatorClassName="bg-red-600" />
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white border-0">
              Voir les Récompenses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <Button variant="outline" className="border-red-800/50 text-white hover:bg-red-900/20">
          Voir Toutes les Missions
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

function MissionReward({ level, completed, reward }) {
  return (
    <div
      className={`relative rounded-lg overflow-hidden ${completed ? "border-2 border-red-600" : "border border-red-800/30"}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
      <div className="relative p-3 flex flex-col items-center">
        <div className="relative w-12 h-12 mb-1">
          <Image
            src={reward || "/placeholder.svg"}
            alt={`Niveau ${level}`}
            width={48}
            height={48}
            className="object-contain"
          />
          {!completed && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-full">
              <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v-6m0 0V6m0 3h6m-6 0H6" />
              </svg>
            </div>
          )}
        </div>
        <span className={`text-xs font-medium ${completed ? "text-white" : "text-white/50"}`}>Niv. {level}</span>
      </div>
    </div>
  )
}
