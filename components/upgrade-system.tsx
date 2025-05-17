"use client"

import { useState } from "react"
import Image from "next/image"
import { Sword, Shield, Zap } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function UpgradeSystem() {
  const [activeTab, setActiveTab] = useState("weapon")

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Card className="bg-gradient-to-r from-black to-red-950/30 backdrop-blur-sm border-red-800/30 overflow-hidden h-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">Système d'Amélioration</h3>
              <p className="text-white/70 mb-6">
                Améliorez vos équipements pour obtenir des bonus supplémentaires et devenir plus puissant. Attention,
                les améliorations de haut niveau comportent un risque d'échec !
              </p>

              <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full mb-6">
                <TabsList className="grid grid-cols-3">
                  <TabsTrigger value="weapon">Armes</TabsTrigger>
                  <TabsTrigger value="armor">Armures</TabsTrigger>
                  <TabsTrigger value="accessory">Accessoires</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-white/70">Niveau d'amélioration</span>
                    <span className="text-sm text-white">0 / 10</span>
                  </div>
                  <div className="bg-black/50 border border-red-800/20 rounded-lg p-1">
                    <div className="grid grid-cols-10 gap-1">
                      {Array.from({ length: 10 }).map((_, index) => (
                        <div key={index} className="h-2 rounded-sm bg-red-950/30" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 border border-red-800/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      {activeTab === "weapon" && <Sword className="h-5 w-5 text-red-500 mr-2" />}
                      {activeTab === "armor" && <Shield className="h-5 w-5 text-red-500 mr-2" />}
                      {activeTab === "accessory" && <Zap className="h-5 w-5 text-red-500 mr-2" />}
                      <h4 className="text-white font-medium">Bonus Actuel</h4>
                    </div>
                  </div>

                  <p className="text-white/50 text-sm">
                    Aucun bonus actif. Améliorez votre équipement pour obtenir des bonus.
                  </p>
                </div>

                <div className="bg-black/50 border border-red-800/20 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Sword className="h-5 w-5 text-red-500 mr-2" />
                    <h4 className="text-white font-medium">Prochaine Amélioration</h4>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white/70">Taux de réussite</span>
                      <span className="text-white font-medium">95%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/70">Coût</span>
                      <span className="text-white font-medium">50000 Kamas</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/70">Matériaux requis</span>
                      <span className="text-white font-medium">5 Runes</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="bg-gradient-to-r from-black to-red-950/30 backdrop-blur-sm border-red-800/30 overflow-hidden h-full">
            <CardContent className="p-0">
              <div className="relative h-64">
                <Image src="/forge-mystique.jpeg" alt="Forge Mystique" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">Forge Mystique</h3>
                  <p className="text-white/80">Utilisez la puissance de la forge pour améliorer vos équipements</p>
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-lg font-medium text-white mb-4">Avantages des Améliorations</h4>

                <div className="space-y-4 mb-6">
                  <div className="bg-black/50 border border-red-800/20 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Sword className="h-5 w-5 text-red-500 mr-2" />
                      <h5 className="text-white font-medium">Armes</h5>
                    </div>
                    <p className="text-white/70 text-sm mb-2">
                      Augmentez les dégâts, les chances de coup critique et débloquez des effets spéciaux.
                    </p>
                    <div className="grid grid-cols-5 gap-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="text-center">
                          <div className={`h-1 ${index < 4 ? "bg-red-600" : "bg-red-950/30"}`} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-black/50 border border-red-800/20 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Shield className="h-5 w-5 text-red-500 mr-2" />
                      <h5 className="text-white font-medium">Armures</h5>
                    </div>
                    <p className="text-white/70 text-sm mb-2">
                      Améliorez vos résistances, votre vitalité et obtenez des réductions de dégâts.
                    </p>
                    <div className="grid grid-cols-5 gap-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="text-center">
                          <div className={`h-1 ${index < 5 ? "bg-red-600" : "bg-red-950/30"}`} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-black/50 border border-red-800/20 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Zap className="h-5 w-5 text-red-500 mr-2" />
                      <h5 className="text-white font-medium">Accessoires</h5>
                    </div>
                    <p className="text-white/70 text-sm mb-2">
                      Augmentez vos statistiques secondaires et débloquez des effets uniques.
                    </p>
                    <div className="grid grid-cols-5 gap-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="text-center">
                          <div className={`h-1 ${index < 3 ? "bg-red-600" : "bg-red-950/30"}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
