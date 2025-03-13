"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import ParticleBackground from "@/components/particle-background"
import FlowerFrame from "@/components/flower-frame"

export default function Welcome() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showEnvelope, setShowEnvelope] = useState(true)
  const [openEnvelope, setOpenEnvelope] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    setIsLoaded(true)

    // Create audio element
    audioRef.current = new Audio("/assets/audio/wedding-song.mp3")
    audioRef.current.loop = true

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const handleOpenEnvelope = () => {
    setOpenEnvelope(true)

    // Play music when envelope is opened
    if (audioRef.current) {
      audioRef.current.play().catch((e) => console.log("Audio play failed:", e))
    }

    setTimeout(() => {
      setShowEnvelope(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-pink-50 overflow-hidden relative">
      <ParticleBackground />

      <AnimatePresence>
        {showEnvelope ? (
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -100, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-[300px] h-[200px] bg-white rounded-lg shadow-xl overflow-hidden">
              {/* Envelope */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-100 to-pink-100 border-2 border-gold rounded-lg shadow-inner flex items-center justify-center"
                animate={
                  openEnvelope
                    ? {
                        rotateX: 180,
                        y: -20,
                        opacity: 0,
                      }
                    : {}
                }
                transition={{ duration: 1.5 }}
              >
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                >
                  <Heart className="w-12 h-12 text-pink-500" />
                </motion.div>
              </motion.div>

              {/* Card inside envelope */}
              <motion.div
                className="absolute inset-0 bg-white rounded-lg shadow-inner p-4 flex flex-col items-center justify-center"
                initial={{ y: 100, opacity: 0 }}
                animate={openEnvelope ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <h2 className="text-xl font-serif text-gray-800 text-center">Undangan Pernikahan</h2>
                <p className="text-sm text-gray-600 mt-2 text-center">Rohatin & Royhaan</p>
              </motion.div>
            </div>

            <motion.button
              className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition-colors flex items-center justify-center mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenEnvelope}
            >
              Buka Undangan
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            className="max-w-md w-full p-6 z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <FlowerFrame>
              <motion.div
                className="relative w-full aspect-square mb-8 mx-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image src="/assets/images/1.jpeg" alt="Foto Pengantin" fill className="object-cover" />
                </div>

                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-transparent"
                  animate={{
                    rotate: 360,
                    borderColor: ["rgba(219, 39, 119, 0.2)", "rgba(59, 130, 246, 0.2)", "rgba(219, 39, 119, 0.2)"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-transparent"
                  animate={{
                    rotate: -360,
                    scale: [1, 1.05, 1],
                    borderColor: ["rgba(59, 130, 246, 0.2)", "rgba(219, 39, 119, 0.2)", "rgba(59, 130, 246, 0.2)"],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              </motion.div>

              <motion.div
                className="text-center bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <h1 className="text-3xl font-serif font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                    Undangan Pernikahan
                  </h1>

                  <div className="my-4 flex items-center justify-center gap-3">
                    <motion.hr
                      className="w-12 border-pink-300"
                      initial={{ width: 0 }}
                      animate={{ width: 48 }}
                      transition={{ delay: 1.4, duration: 0.8 }}
                    />
                    <Heart className="w-5 h-5 text-pink-500" />
                    <motion.hr
                      className="w-12 border-blue-300"
                      initial={{ width: 0 }}
                      animate={{ width: 48 }}
                      transition={{ delay: 1.4, duration: 0.8 }}
                    />
                  </div>

                  <motion.p
                    className="text-xl font-medium text-gray-700 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                  >
                    <span className="text-pink-500">Rohatin ND</span>
                    {" & "}
                    <span className="text-blue-500">Moh Royhaan As</span>
                  </motion.p>

                  <motion.p
                    className="text-gray-500 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                  >
                    Kami mengundang Anda untuk berbagi kebahagiaan di hari pernikahan kami
                  </motion.p>
                </motion.div>

                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2, duration: 0.5 }}
                >
                  <Link href="/home">
                    <Button className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-8 py-6 rounded-full shadow-lg group">
                      <span>Lihat Undangan</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </FlowerFrame>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

