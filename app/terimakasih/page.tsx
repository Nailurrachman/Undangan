"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import NavigationButtons from "@/components/navigation-buttons"
import PageContainer from "@/components/page-container"
import FlowerFrame from "@/components/flower-frame"

export default function ThankYou() {
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
          <h1 className="text-3xl font-serif font-bold text-gray-800 mb-6">Terima Kasih</h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="my-8"
          >
            <Heart className="w-12 h-12 mx-auto text-pink-500 mb-6" />

            <p className="text-gray-700">
              Merupakan suatu kehormatan dan kebahagiaan bagi kami atas kehadiran Bapak/Ibu/Saudara/i untuk memberikan
              doa restu kepada kami.
            </p>

            <div className="mt-8 font-serif">
              <p className="text-xl text-pink-600">Rohatin ND</p>
              <p className="text-xl text-gray-600">&</p>
              <p className="text-xl text-blue-600">Moh Royhaan As</p>
            </div>

            <p className="mt-8 text-gray-600 italic">
              "Dan segala sesuatu Kami ciptakan berpasang-pasangan supaya kamu mengingat kebesaran Allah."
            </p>
            <p className="text-gray-700 mt-1">(QS. Adz-Dzariyat: 49)</p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-[10px] text-gray-400 italic mt-10"
            >
              Support by: E-code & Rama Collection
            </motion.p>
          </motion.div>

          <NavigationButtons prevPage="/resepsi" />
        </motion.div>
      </FlowerFrame>
    </PageContainer>
  )
}

