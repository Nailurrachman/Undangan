"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, Music } from "lucide-react"
import NavigationButtons from "@/components/navigation-buttons"
import PageContainer from "@/components/page-container"
import FlowerFrame from "@/components/flower-frame"

export default function Resepsi() {
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
          <h1 className="text-3xl font-serif font-bold text-gray-800 mb-6">Resepsi Pernikahan</h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-6 my-8"
          >
            <div className="flex items-center justify-center gap-3">
              <Calendar className="w-5 h-5 text-pink-500" />
              <p className="text-gray-700">Minggu, 31 Desember 2023</p>
            </div>

            <div className="flex items-center justify-center gap-3">
              <Clock className="w-5 h-5 text-pink-500" />
              <p className="text-gray-700">11:00 WIB - 15:00 WIB</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-pink-500" />
                <p className="text-gray-700 font-medium">Gedung Serbaguna Indah</p>
              </div>
              <p className="text-gray-600 text-sm">Jl. Contoh No. 456, Kecamatan Contoh, Kota Contoh</p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 mt-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Music className="w-5 h-5 text-purple-500" />
                <h3 className="font-medium text-purple-700">Hiburan</h3>
              </div>
              <p className="text-gray-700">Orgen Nevada Musik</p>
              <p className="text-sm text-gray-600 mt-1">Menghibur tamu undangan dengan lagu-lagu terbaik</p>
            </div>
          </motion.div>

          <NavigationButtons prevPage="/akad" nextPage="/terimakasih" />
        </motion.div>
      </FlowerFrame>
    </PageContainer>
  )
}

