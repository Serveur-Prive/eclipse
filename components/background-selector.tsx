"use client"

import { useState, useEffect } from "react"
import { Settings, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export default function BackgroundSelector() {
  const [selectedBackground, setSelectedBackground] = useState("default")

  const backgrounds = [
    { id: "default", name: "Par défaut", fromColor: "from-black", toColor: "to-red-950/30" },
    { id: "abyss", name: "Abysses", fromColor: "from-black", toColor: "to-purple-950/30" },
    { id: "fire", name: "Feu", fromColor: "from-black", toColor: "to-orange-950/30" },
    { id: "ice", name: "Glace", fromColor: "from-black", toColor: "to-blue-950/30" },
    { id: "nature", name: "Nature", fromColor: "from-black", toColor: "to-green-950/30" },
  ]

  useEffect(() => {
    // Appliquer le fond sélectionné à tous les éléments avec des classes de gradient
    const gradientElements = document.querySelectorAll('[class*="from-black"]')
    const selectedBg = backgrounds.find((bg) => bg.id === selectedBackground)

    if (!selectedBg) return

    gradientElements.forEach((element) => {
      // Supprimer les classes de gradient existantes
      backgrounds.forEach((bg) => {
        element.classList.remove(bg.fromColor)
        element.classList.remove(bg.toColor)
      })

      // Ajouter les nouvelles classes de gradient séparément
      element.classList.add(selectedBg.fromColor)
      element.classList.add(selectedBg.toColor)
    })
  }, [selectedBackground])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-black/50 border-red-800/50 text-white hover:bg-red-900/20 h-10 w-10"
          >
            <Settings className="h-5 w-5" />
            <span className="sr-only">Changer l'arrière-plan</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 bg-black/90 border-red-800/50 text-white p-2">
          <div className="space-y-2">
            <h3 className="text-sm font-medium px-2 py-1">Choisir un arrière-plan</h3>
            <div className="space-y-1">
              {backgrounds.map((bg) => (
                <button
                  key={bg.id}
                  className={`w-full flex items-center justify-between px-2 py-1 rounded-md ${selectedBackground === bg.id ? "bg-red-900/30" : "hover:bg-white/10"}`}
                  onClick={() => setSelectedBackground(bg.id)}
                >
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${bg.fromColor} ${bg.toColor} mr-2`} />
                    <span className="text-sm">{bg.name}</span>
                  </div>
                  {selectedBackground === bg.id && <Check className="h-4 w-4 text-red-500" />}
                </button>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
