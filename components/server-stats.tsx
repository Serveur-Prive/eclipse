"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Users, Clock, Award, Sword } from "lucide-react"

export default function ServerStats() {
  // Dans une implémentation réelle, cela récupérerait les données d'une API
  const [stats, setStats] = useState({
    onlinePlayers: 0,
    totalPlayers: 0,
    uptime: 0,
    guilds: 0,
    pvpMatches: 0,
    maxLevel: 0,
  })

  useEffect(() => {
    // Simuler le chargement des données
    const timer = setTimeout(() => {
      setStats({
        onlinePlayers: 1247,
        totalPlayers: 15842,
        uptime: 99.8,
        guilds: 324,
        pvpMatches: 5628,
        maxLevel: 200,
      })
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Animer le comptage
  const [counted, setCounted] = useState(false)
  useEffect(() => {
    if (stats.onlinePlayers > 0 && !counted) {
      setCounted(true)
    }
  }, [stats, counted])

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      <StatCard
        icon={<Users className="h-8 w-8 text-red-500" />}
        title="Joueurs en Ligne"
        value={stats.onlinePlayers}
        suffix=""
        delay={0.1}
        counted={counted}
      />
      <StatCard
        icon={<Users className="h-8 w-8 text-red-500" />}
        title="Joueurs Inscrits"
        value={stats.totalPlayers}
        suffix="+"
        delay={0.2}
        counted={counted}
      />
      <StatCard
        icon={<Clock className="h-8 w-8 text-red-500" />}
        title="Disponibilité Serveur"
        value={stats.uptime}
        suffix="%"
        delay={0.3}
        counted={counted}
      />
      <StatCard
        icon={<Award className="h-8 w-8 text-red-500" />}
        title="Guildes Actives"
        value={stats.guilds}
        suffix=""
        delay={0.4}
        counted={counted}
      />
      <StatCard
        icon={<Sword className="h-8 w-8 text-red-500" />}
        title="Matchs PvP"
        value={stats.pvpMatches}
        suffix="+"
        delay={0.5}
        counted={counted}
      />
      <StatCard
        icon={<Award className="h-8 w-8 text-red-500" />}
        title="Niveau Maximum"
        value={stats.maxLevel}
        suffix=""
        delay={0.6}
        counted={counted}
      />
    </div>
  )
}

function StatCard({ icon, title, value, suffix = "", delay = 0, counted = false }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!counted) return

    let start = 0
    const end = Number.parseInt(value.toString().replace(/,/g, ""))
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      setDisplayValue(Math.min(Math.floor(start), end))

      if (start >= end) clearInterval(timer)
    }, 16)

    return () => clearInterval(timer)
  }, [value, counted])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-black to-red-950/30 backdrop-blur-sm rounded-xl border border-red-800/30 p-6 text-center"
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
      <p className="text-3xl font-bold text-red-500">
        {displayValue.toLocaleString()}
        {suffix}
      </p>
    </motion.div>
  )
}
