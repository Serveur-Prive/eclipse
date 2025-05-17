"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function BattlePassSection() {
  const [activeLevel, setActiveLevel] = useState(1)
  const totalLevels = 8

  const handlePrev = () => {
    setActiveLevel((prev) => Math.max(prev - 1, 1))
  }

  const handleNext = () => {
    setActiveLevel((prev) => Math.min(prev + 1, totalLevels))
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8 text-center">
        <div className="inline-block bg-gradient-to-r from-black to-red-950/30 backdrop-blur-sm border border-red-800/30 rounded-lg px-6 py-3">
          <p className="text-white/70 text-sm">Saison 1 • 10 Mai 2025 - 10 Août 2025 • +50 Récompenses Exclusives</p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-red-800/50 text-white hover:bg-red-900/20 h-10 w-10"
            onClick={handlePrev}
            disabled={activeLevel === 1}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-red-800/50 text-white hover:bg-red-900/20 h-10 w-10"
            onClick={handleNext}
            disabled={activeLevel === totalLevels}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="overflow-hidden">
          <div className="flex flex-col">
            <div className="grid grid-cols-8 gap-2 mb-4">
              {Array.from({ length: totalLevels }).map((_, index) => (
                <div
                  key={index}
                  className={`text-center py-2 rounded-md ${activeLevel === index + 1 ? "bg-red-700 text-white" : "bg-red-900/20 text-white/70"}`}
                >
                  <span className="text-sm font-medium">Niv. {index + 1}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-black to-red-950/30 backdrop-blur-sm border border-red-800/30 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-red-700 text-white text-xs px-2 py-1 rounded-md mr-2">GRATUIT</div>
                    <h3 className="text-lg font-medium text-white">Niveau {activeLevel}</h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {getBattlePassRewards(activeLevel, "free").map((reward, index) => (
                    <RewardCard key={index} reward={reward} />
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-black to-red-950/30 backdrop-blur-sm border border-red-800/30 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-xs px-2 py-1 rounded-md mr-2">
                      PREMIUM
                    </div>
                    <h3 className="text-lg font-medium text-white">Niveau {activeLevel}</h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {getBattlePassRewards(activeLevel, "premium").map((reward, index) => (
                    <RewardCard key={index} reward={reward} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white border-0">
          Acheter le Pass Premium
        </Button>
      </div>
    </div>
  )
}

function RewardCard({ reward }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-black/50 border border-red-800/20 rounded-lg p-4 flex flex-col items-center"
    >
      <div className="relative w-16 h-16 mb-2">
        <Image
          src={reward.image || "/placeholder.svg"}
          alt={reward.name}
          width={64}
          height={64}
          className="object-contain"
        />
        {reward.quantity > 1 && (
          <div className="absolute bottom-0 right-0 bg-red-700 text-white text-xs px-1 rounded-md">
            x{reward.quantity}
          </div>
        )}
      </div>
      <h4 className="text-sm font-medium text-white text-center">{reward.name}</h4>
      <p className="text-xs text-white/50 text-center">{reward.description}</p>
    </motion.div>
  )
}

function getBattlePassRewards(level, type) {
  const rewards = {
    free: [
      [
        { name: "Kamas", description: "Monnaie du jeu", image: "/rewards/kamas.png", quantity: 10000 },
        { name: "Potion XP", description: "+50% XP (1h)", image: "/rewards/xp-potion.png", quantity: 3 },
      ],
      [
        { name: "Ressources", description: "Pack de ressources", image: "/rewards/resources.png", quantity: 50 },
        { name: "Emote", description: "Emote exclusive", image: "/rewards/emote.png", quantity: 1 },
      ],
      [
        { name: "Kamas", description: "Monnaie du jeu", image: "/rewards/kamas.png", quantity: 20000 },
        { name: "Parchemin", description: "Caractéristiques +5", image: "/rewards/scroll.png", quantity: 1 },
      ],
      [
        { name: "Potion Drop", description: "+25% Drop (2h)", image: "/rewards/drop-potion.png", quantity: 2 },
        { name: "Ressources", description: "Pack de ressources", image: "/rewards/resources.png", quantity: 100 },
      ],
      [
        { name: "Kamas", description: "Monnaie du jeu", image: "/rewards/kamas.png", quantity: 30000 },
        { name: "Titre", description: "Titre exclusif", image: "/rewards/title.png", quantity: 1 },
      ],
      [
        { name: "Potion XP", description: "+50% XP (1h)", image: "/rewards/xp-potion.png", quantity: 5 },
        { name: "Ressources", description: "Pack de ressources", image: "/rewards/resources.png", quantity: 150 },
      ],
      [
        { name: "Kamas", description: "Monnaie du jeu", image: "/rewards/kamas.png", quantity: 50000 },
        { name: "Parchemin", description: "Caractéristiques +10", image: "/rewards/scroll.png", quantity: 1 },
      ],
      [
        { name: "Familier", description: "Familier exclusif", image: "/rewards/pet.png", quantity: 1 },
        { name: "Kamas", description: "Monnaie du jeu", image: "/rewards/kamas.png", quantity: 100000 },
      ],
    ],
    premium: [
      [
        { name: "Costume", description: "Costume exclusif", image: "/rewards/costume.png", quantity: 1 },
        { name: "Kamas", description: "Monnaie du jeu", image: "/rewards/kamas.png", quantity: 50000 },
      ],
      [
        { name: "Monture", description: "Monture exclusive", image: "/rewards/mount.png", quantity: 1 },
        { name: "Potion XP", description: "+100% XP (2h)", image: "/rewards/xp-potion-premium.png", quantity: 3 },
      ],
      [
        { name: "Arme", description: "Arme cosmétique", image: "/rewards/weapon.png", quantity: 1 },
        { name: "Kamas", description: "Monnaie du jeu", image: "/rewards/kamas.png", quantity: 100000 },
      ],
      [
        { name: "Aura", description: "Aura exclusive", image: "/rewards/aura.png", quantity: 1 },
        { name: "Parchemin", description: "Caractéristiques +20", image: "/rewards/scroll-premium.png", quantity: 2 },
      ],
      [
        { name: "Coffre", description: "Coffre de récompenses", image: "/rewards/chest.png", quantity: 1 },
        { name: "Kamas", description: "Monnaie du jeu", image: "/rewards/kamas.png", quantity: 150000 },
      ],
      [
        {
          name: "Transformation",
          description: "Transformation exclusive",
          image: "/rewards/transform.png",
          quantity: 1,
        },
        { name: "Potion Drop", description: "+100% Drop (3h)", image: "/rewards/drop-potion-premium.png", quantity: 3 },
      ],
      [
        {
          name: "Arme Légendaire",
          description: "Arme cosmétique",
          image: "/rewards/legendary-weapon.png",
          quantity: 1,
        },
        { name: "Kamas", description: "Monnaie du jeu", image: "/rewards/kamas.png", quantity: 200000 },
      ],
      [
        { name: "Boss Exclusif", description: "Accès à un boss", image: "/rewards/boss-key.png", quantity: 1 },
        { name: "Ensemble Complet", description: "Ensemble d'équipement", image: "/rewards/full-set.png", quantity: 1 },
      ],
    ],
  }

  return rewards[type][level - 1] || []
}
