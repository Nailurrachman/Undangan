"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, MapPin } from "lucide-react"
import NavigationButtons from "@/components/navigation-buttons"
import PageContainer from "@/components/page-container"

export default function Akad() {
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
        <h1 className="text-3xl font-serif font-bold text-gray-800 mb-6">Akad Nikah</h1>

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
            <p className="text-gray-700">08:00 WIB - Selesai</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-pink-500" />
              <p className="text-gray-700 font-medium">Masjid Agung</p>
            </div>
            <p className="text-gray-600 text-sm">Jl. Contoh No. 123, Kecamatan Contoh, Kota Contoh</p>
          </div>

          <div className="pt-4 border-t border-gray-200 mt-6">
            <p className="text-gray-600 italic">
              "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk
              memberikan doa restu kepada kedua mempelai."
            </p>
          </div>
        </motion.div>

        <NavigationButtons prevPage="/mempelai" nextPage="/resepsi" />
      </motion.div>
    </PageContainer>
  )
}

