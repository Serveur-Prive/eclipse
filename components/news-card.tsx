"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function NewsCard({ title, date, excerpt, image, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="bg-gradient-to-r from-black to-red-950/30 backdrop-blur-sm border-red-800/30 overflow-hidden">
        <div className="relative h-48">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
          <div className="absolute bottom-0 left-0 p-4">
            <span className="inline-block bg-red-700 text-white text-xs px-2 py-1 rounded-md">{date}</span>
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/70 mb-4">{excerpt}</p>
          <Button variant="ghost" className="text-red-500 hover:text-red-400 hover:bg-white/5 p-0">
            Lire Plus
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
