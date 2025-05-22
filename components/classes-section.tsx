"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ClassesSection() {
  const [activeClass, setActiveClass] = useState("sacriop")

  const classes = [
    {
      id: "sacriop",
      name: "Sacri-Iop",
      description:
        "Fusion entre Sacrieur et Iop, cette classe hybride combine la puissance brute et le sacrifice pour des dégâts dévastateurs.",
      image: "/classes/sacriop.png",
      spells: [
        {
          name: "Colère Sacrificielle",
          description: "Sacrifie des PV pour augmenter les dégâts",
          icon: "/spells/spell-icon-1.png",
        },
        {
          name: "Épée Sanglante",
          description: "Attaque puissante qui vole de la vie",
          icon: "/spells/spell-icon-2.png",
        },
        {
          name: "Fureur Indomptable",
          description: "Augmente les dégâts en fonction des PV perdus",
          icon: "/spells/spell-icon-3.png",
        },
      ],
    },
    {
      id: "enixelor",
      name: "Eni-Xelor",
      description:
        "Combinaison d'Eniripsa et Xelor, cette classe manipule le temps pour soigner et contrôler le champ de bataille.",
      image: "/classes/enixelor.png",
      spells: [
        {
          name: "Soin Temporel",
          description: "Soigne progressivement sur plusieurs tours",
          icon: "/spells/spell-icon-1.png",
        },
        {
          name: "Distorsion Curative",
          description: "Crée une zone qui soigne les alliés et ralentit les ennemis",
          icon: "/spells/spell-icon-3.png",
        },
        {
          name: "Accélération Vitale",
          description: "Augmente la vitesse d'un allié et lui donne un soin",
          icon: "/spells/spell-icon-1.png",
        },
      ],
    },
    {
      id: "crasram",
      name: "Cra-Sram",
      description: "Fusion entre Cra et Sram, cette classe excelle dans les attaques à distance et les pièges mortels.",
      image: "/classes/crasram.png",
      spells: [
        {
          name: "Flèche Empoisonnée",
          description: "Tire une flèche qui pose un poison puissant",
          icon: "/spells/spell-icon-2.png",
        },
        {
          name: "Piège à Distance",
          description: "Pose un piège invisible à distance",
          icon: "/spells/spell-icon-3.png",
        },
        {
          name: "Embuscade Mortelle",
          description: "Devient invisible et prépare une attaque critique",
          icon: "/spells/spell-icon-2.png",
        },
      ],
    },
    {
      id: "ecatrope",
      name: "Eca-Trope",
      description:
        "Mélange d'Ecaflip et Sadida, cette classe utilise la chance et les invocations pour dominer le combat.",
      image: "/classes/ecatrope.png",
      spells: [
        {
          name: "Poupée Chanceuse",
          description: "Invoque une poupée avec des effets aléatoires",
          icon: "/spells/spell-icon-1.png",
        },
        {
          name: "Roulette Naturelle",
          description: "Lance un sort avec des effets variables basés sur la chance",
          icon: "/spells/spell-icon-2.png",
        },
        {
          name: "Armée de Fortune",
          description: "Invoque plusieurs créatures avec des bonus aléatoires",
          icon: "/spells/spell-icon-3.png",
        },
      ],
    },
  ]

  const selectedClass = classes.find((c) => c.id === activeClass) || classes[0]

  return (
    <div className="max-w-6xl mx-auto">
      <Tabs defaultValue={activeClass} onValueChange={setActiveClass} className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-card border border-primary/30 p-1 mb-8">
          {classes.map((classItem) => (
            <TabsTrigger key={classItem.id} value={classItem.id}>
              {classItem.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {classes.map((classItem) => (
          <TabsContent key={classItem.id} value={classItem.id} className="mt-0">
            <div className="grid grid-cols-1 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-card backdrop-blur-md border border-primary/30 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary text-primary-foreground text-sm px-3 py-1 rounded-md mr-3 flex items-center">
                    <Sparkles className="h-3 w-3 mr-1" />
                    <span>CLASSE HYBRIDE</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{classItem.name}</h3>
                </div>

                <p className="text-foreground/80 mb-6 text-lg">{classItem.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-medium text-foreground mb-4 border-b border-primary/30 pb-2">
                    Sorts Principaux
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {classItem.spells.map((spell, index) => (
                      <div
                        key={index}
                        className="bg-background/50 border border-primary/20 rounded-lg p-4 hover:border-primary/50 transition-colors"
                      >
                        <div className="flex items-start">
                          <div className="relative w-12 h-12 mr-3 flex-shrink-0 overflow-hidden">
                            <Image
                              src={spell.icon || "/placeholder.svg"}
                              alt={spell.name}
                              width={48}
                              height={48}
                              className="object-contain hover:scale-110 transition-transform duration-200"
                            />
                          </div>
                          <div>
                            <h5 className="text-foreground font-medium">{spell.name}</h5>
                            <p className="text-sm text-foreground/70">{spell.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="/classes">
                  <Button className="w-full md:w-auto">
                    Voir Toutes les Classes
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
