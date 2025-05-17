"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function HeroParallax() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 100])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])
  const y3 = useTransform(scrollY, [0, 500], [0, -50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div className="absolute left-0 bottom-0 w-full h-full z-0" style={{ y: y1, opacity }}>
        <Image src="/hero-bg-1.png" alt="Background Layer 1" fill className="object-cover opacity-30" />
      </motion.div>

      <motion.div className="absolute -left-20 bottom-0 w-[600px] h-[600px] z-1" style={{ y: y2, opacity }}>
        <Image src="/hero-character-1.png" alt="Dofus Character" width={600} height={600} className="object-contain" />
      </motion.div>

      <motion.div className="absolute -right-20 bottom-0 w-[600px] h-[600px] z-1" style={{ y: y3, opacity }}>
        <Image src="/hero-character-2.png" alt="Dofus Character" width={600} height={600} className="object-contain" />
      </motion.div>
    </div>
  )
}
