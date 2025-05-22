"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ShoppingCart, Star, Tag, Package, Gift } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Données statiques pour les produits de la boutique
const boutiqueItems = [
  {
    id: 1,
    name: "Pack Premium",
    description: "Accès à toutes les fonctionnalités premium pendant 30 jours",
    price: 9.99,
    image: "/dofus-premium-pack.png",
    category: "abonnement",
    popular: true,
  },
  {
    id: 2,
    name: "Costume Légendaire",
    description: "Costume exclusif pour votre personnage",
    price: 4.99,
    image: "/placeholder.svg?height=200&width=200&query=Costume%20L%C3%A9gendaire%20Dofus",
    category: "cosmétique",
    popular: false,
  },
  {
    id: 3,
    name: "Monture Céleste",
    description: "Monture rapide avec effets visuels uniques",
    price: 7.99,
    image: "/placeholder.svg?height=200&width=200&query=Monture%20C%C3%A9leste%20Dofus",
    category: "cosmétique",
    popular: true,
  },
  {
    id: 4,
    name: "Coffre de Kamas",
    description: "100,000 Kamas pour votre aventure",
    price: 3.99,
    image: "/placeholder.svg?height=200&width=200&query=Coffre%20de%20Kamas%20Dofus",
    category: "ressource",
    popular: true,
  },
  {
    id: 5,
    name: "Familier Rare",
    description: "Familier qui vous accompagne dans vos aventures",
    price: 5.99,
    image: "/placeholder.svg?height=200&width=200&query=Familier%20Rare%20Dofus",
    category: "cosmétique",
    popular: false,
  },
  {
    id: 6,
    name: "Pack de Ressources",
    description: "Ensemble de ressources rares pour le craft",
    price: 2.99,
    image: "/placeholder.svg?height=200&width=200&query=Pack%20de%20Ressources%20Dofus",
    category: "ressource",
    popular: false,
  },
]

export default function BoutiquePage() {
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Boutique</span>{" "}
              STASIS
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Découvrez nos articles exclusifs pour améliorer votre expérience de jeu
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {boutiqueItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gradient-to-r from-black/70 to-primary/30 backdrop-blur-sm border-primary/30 overflow-hidden h-full">
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                      {item.popular && (
                        <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-md flex items-center">
                          <Star className="h-3 w-3 mr-1" />
                          <span>Populaire</span>
                        </div>
                      )}
                      <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                        {item.category === "abonnement" && <Package className="h-3 w-3 inline mr-1" />}
                        {item.category === "cosmétique" && <Gift className="h-3 w-3 inline mr-1" />}
                        {item.category === "ressource" && <Tag className="h-3 w-3 inline mr-1" />}
                        <span className="capitalize">{item.category}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-white mb-1">{item.name}</h3>
                      <p className="text-white/70 text-sm mb-4">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-bold">{item.price.toFixed(2)} €</span>
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Acheter
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
