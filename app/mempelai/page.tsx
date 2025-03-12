"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import NavigationButtons from "@/components/navigation-buttons"
import PageContainer from "@/components/page-container"
import AnimatedPhoto from "@/components/animated-photo"

export default function Mempelai() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <PageContainer removeHeader={true}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <AnimatedPhoto src="/assets/images/1.jpeg" alt="Foto Mempelai" className="my-8" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl font-serif text-pink-600 font-bold">Rohatin ND</h2>
            <p className="text-gray-600 mt-1">Putri dari</p>
            <p className="text-gray-700">Bapak & Ibu ND</p>
          </div>

          <div className="font-serif text-3xl">&</div>

          <div>
            <h2 className="text-3xl font-serif text-blue-600 font-bold">Moh Royhaan As</h2>
            <p className="text-gray-600 mt-1">Putra dari</p>
            <p className="text-gray-700">Bapak & Ibu As</p>
          </div>
        </motion.div>

        <NavigationButtons prevPage="/quotes" nextPage="/akad" />
      </motion.div>
    </PageContainer>
  )
}

