"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import NavigationButtons from "@/components/navigation-buttons"
import PageContainer from "@/components/page-container"

export default function Quotes() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <PageContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-3xl font-serif font-bold text-gray-800 mb-6">Quotes</h1>

        <div className="my-8">
          <Quote className="w-10 h-10 mx-auto text-pink-400 mb-4" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-pink-50 p-6 rounded-lg border border-pink-100"
          >
            <p className="text-gray-700 italic">
              "Pernikahan bukanlah tentang menemukan seseorang yang dapat kamu hidup bersamanya, tetapi menemukan
              seseorang yang tidak dapat kamu hidup tanpanya."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-purple-50 p-6 rounded-lg border border-purple-100 mt-6"
          >
            <p className="text-gray-700 italic">
              "Cinta sejati adalah ketika dua jiwa menyatu menjadi satu, berbagi suka dan duka, saling menguatkan dalam
              setiap langkah kehidupan."
            </p>
          </motion.div>
        </div>

        <NavigationButtons prevPage="/salam" nextPage="/mempelai" />
      </motion.div>
    </PageContainer>
  )
}

