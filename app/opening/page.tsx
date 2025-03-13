"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import Link from "next/link"
import {Button} from "@/components/ui/button" // Ini adalah impor yang benar
import PageContainer from "@/components/page-container"
import AnimatedPhoto from "@/components/animated-photo"
import FlowerFrame from "@/components/flower-frame"

export default function Opening() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <PageContainer>
      <FlowerFrame>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-6">
            <Heart className="w-10 h-10 mx-auto text-wedding-secondary" />
            <h1 className="mt-4 text-3xl font-serif font-bold text-gray-800">Undangan Pernikahan</h1>
            <p className="mt-2 text-lg font-medium text-wedding-secondary">Rohatin & Royhaan</p>
          </div>

          <AnimatedPhoto src="/assets/images/1.jpeg" alt="Foto Pengantin" className="my-8" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-lg font-medium text-gray-700 mt-6">Kami mengundang Anda</p>
            <p className="text-sm text-gray-500 mt-2">untuk berbagi kebahagiaan di hari pernikahan kami</p>
          </motion.div>

          <div className="flex justify-center mt-8">
          <Link href="/salam">
            <button 
              className="px-8 py-6 text-base" 
              onClick={() => {}}
            >
              Buka Undangan
            </button>
          </Link>
          </div>
        </motion.div>
      </FlowerFrame>
    </PageContainer>
  )
}