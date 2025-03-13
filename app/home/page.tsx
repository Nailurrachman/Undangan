"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Clock, MapPin, Music, Heart, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import FlowerFrame from "@/components/flower-frame"

// Update the sections array to put salam and quotes before couple
const sections = ["salam", "quotes", "couple", "event", "rsvp"]

export default function Home() {
  const [activeSection, setActiveSection] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setIsLoaded(true)

    // Create audio element if it doesn't exist
    if (!audioRef.current) {
      audioRef.current = new Audio("/assets/audio/wedding-song.mp3")
      audioRef.current.loop = true
      audioRef.current.volume = 0.5
      audioRef.current.play().catch((e) => console.log("Audio play failed:", e))
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const handleNext = () => {
    if (activeSection < sections.length - 1) {
      setActiveSection(activeSection + 1)
    }
  }

  const handlePrev = () => {
    if (activeSection > 0) {
      setActiveSection(activeSection - 1)
    }
  }

  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-pink-50 overflow-hidden" ref={containerRef}>
      {/* Audio control */}
      <button
        onClick={toggleAudio}
        className="fixed top-4 right-4 z-50 bg-white bg-opacity-80 p-2 rounded-full shadow-md"
      >
        <Music className="w-5 h-5 text-pink-500" />
      </button>

      {/* Navigation dots */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-3">
        {sections.map((section, index) => (
          <button
            key={section}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              activeSection === index ? "bg-pink-500 scale-125" : "bg-gray-300 hover:bg-gray-400",
            )}
            onClick={() => setActiveSection(index)}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative w-full h-screen">
        <AnimatePresence mode="wait">
          {activeSection === 0 && (
            <Section key="salam">
              <FlowerFrame>
                <motion.div
                  className="text-center max-w-md mx-auto bg-white bg-opacity-90 backdrop-blur-sm p-6 rounded-2xl shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">Assalamu'alaikum Wr. Wb.</h2>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="my-8 text-gray-700 space-y-4"
                  >
                    <p>
                      Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri
                      kami:
                    </p>

                    <div className="py-4">
                      <p className="italic text-gray-500">
                        "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari
                        jenismu sendiri, supaya kamu mendapat ketenangan hati dan dijadikan-Nya di antaramu rasa kasih
                        sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang
                        berfikir."
                      </p>
                      <p className="mt-2 font-medium">(QS. Ar-Rum: 21)</p>
                    </div>
                  </motion.div>
                </motion.div>
              </FlowerFrame>
            </Section>
          )}

          {activeSection === 1 && (
            <Section key="quotes">
              <FlowerFrame>
                <motion.div
                  className="text-center max-w-md mx-auto bg-white bg-opacity-90 backdrop-blur-sm p-6 rounded-2xl shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">Quotes</h2>

                  <div className="my-8">
                    <Quote className="w-10 h-10 mx-auto text-pink-400 mb-4" />

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className="bg-pink-50 p-6 rounded-lg border border-pink-100"
                    >
                      <p className="text-gray-700 italic">
                        "Pernikahan bukanlah tentang menemukan seseorang yang dapat kamu hidup bersamanya, tetapi
                        menemukan seseorang yang tidak dapat kamu hidup tanpanya."
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                      className="bg-purple-50 p-6 rounded-lg border border-purple-100 mt-6"
                    >
                      <p className="text-gray-700 italic">
                        "Dan kawinkanlah orang-orang yang sendirian di antara kamu, dan orang-orang yang layak
                        (berkawin) dari hamba-hamba sahayamu yang lelaki dan hamba-hamba sahayamu yang perempuan. Jika
                        mereka miskin Allah akan memampukan mereka dengan kurnia-Nya. Dan Allah Maha luas
                        (pemberian-Nya) lagi Maha Mengetahui."
                      </p>
                      <p className="mt-2 font-medium">(QS. An-Nur: 32)</p>
                    </motion.div>
                  </div>
                </motion.div>
              </FlowerFrame>
            </Section>
          )}

          {activeSection === 2 && (
            <Section key="couple">
              <FlowerFrame>
                <motion.div
                  className="text-center max-w-md mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="relative w-64 h-64 mx-auto mb-8"
                  >
                    <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-xl">
                      <Image src="/assets/images/1.jpeg" alt="Foto Pengantin" fill className="object-cover" />
                    </div>

                    <motion.div
                      className="absolute inset-0 rounded-full border-4 border-transparent"
                      animate={{
                        rotate: 360,
                        borderColor: ["rgba(219, 39, 119, 0.3)", "rgba(59, 130, 246, 0.3)", "rgba(219, 39, 119, 0.3)"],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-serif text-pink-600 font-bold">Rohatin ND</h2>
                    <p className="text-gray-600 mt-1">Putri dari</p>
                    <p className="text-gray-700">Bapak & Ibu ND</p>
                  </motion.div>

                  <motion.div
                    className="my-6 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <Heart className="w-8 h-8 text-pink-500" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-serif text-blue-600 font-bold">Moh Royhaan As</h2>
                    <p className="text-gray-600 mt-1">Putra dari</p>
                    <p className="text-gray-700">Bapak & Ibu As</p>
                  </motion.div>
                </motion.div>
              </FlowerFrame>
            </Section>
          )}

          {activeSection === 3 && (
            <Section key="event">
              <FlowerFrame>
                <motion.div
                  className="max-w-md mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white bg-opacity-90 backdrop-blur-sm p-6 rounded-2xl shadow-xl mb-6">
                    <motion.h2
                      className="text-3xl font-serif font-bold text-gray-800 mb-6 text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      Akad Nikah
                    </motion.h2>

                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-pink-500 flex-shrink-0" />
                        <p className="text-gray-700">Minggu, 31 Desember 2023</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-pink-500 flex-shrink-0" />
                        <p className="text-gray-700">08:00 WIB - Selesai</p>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-gray-700 font-medium">Masjid Agung</p>
                          <p className="text-gray-600 text-sm">Jl. Contoh No. 123, Kecamatan Contoh, Kota Contoh</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="bg-white bg-opacity-90 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                    <motion.h2
                      className="text-3xl font-serif font-bold text-gray-800 mb-6 text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      Resepsi Pernikahan
                    </motion.h2>

                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-pink-500 flex-shrink-0" />
                        <p className="text-gray-700">Minggu, 31 Desember 2023</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-pink-500 flex-shrink-0" />
                        <p className="text-gray-700">11:00 WIB - 15:00 WIB</p>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-gray-700 font-medium">Gedung Serbaguna Indah</p>
                          <p className="text-gray-600 text-sm">Jl. Contoh No. 456, Kecamatan Contoh, Kota Contoh</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 pt-2 border-t border-gray-100">
                        <Music className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-gray-700 font-medium">Hiburan: Orgen Nevada Musik</p>
                          <p className="text-gray-600 text-sm">Menghibur tamu undangan dengan lagu-lagu terbaik</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </FlowerFrame>
            </Section>
          )}

          {activeSection === 4 && (
            <Section key="rsvp">
              <FlowerFrame>
                <motion.div
                  className="text-center max-w-md mx-auto bg-white bg-opacity-90 backdrop-blur-sm p-6 rounded-2xl shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                    <Heart className="w-12 h-12 mx-auto text-pink-500 mb-4" />
                    <h2 className="text-3xl font-serif font-bold text-gray-800 mb-2">Terima Kasih</h2>
                    <p className="text-gray-600 mb-6">
                      Merupakan suatu kehormatan dan kebahagiaan bagi kami atas kehadiran Bapak/Ibu/Saudara/i untuk
                      memberikan doa restu kepada kami.
                    </p>
                  </motion.div>

                  <motion.div
                    className="my-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-xl font-serif text-pink-600">Rohatin ND</p>
                    <p className="text-xl font-serif text-gray-600">&</p>
                    <p className="text-xl font-serif text-blue-600">Moh Royhaan As</p>
                    <motion.p
                      className="text-[10px] text-gray-400 italic mt-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9, duration: 0.5 }}
                    >
                      Support by: E-code & Rama Collection
                    </motion.p>
                  </motion.div>

                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                    <p className="text-gray-600 italic mt-6">
                      "Dan segala sesuatu Kami ciptakan berpasang-pasangan supaya kamu mengingat kebesaran Allah."
                    </p>
                    <p className="text-gray-700 mt-1">(QS. Adz-Dzariyat: 49)</p>
                  </motion.div>
                </motion.div>
              </FlowerFrame>
            </Section>
          )}
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 z-30">
          <Button
            variant="outline"
            className="rounded-full bg-white bg-opacity-80 hover:bg-opacity-100"
            onClick={handlePrev}
            disabled={activeSection === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            className="rounded-full bg-white bg-opacity-80 hover:bg-opacity-100"
            onClick={handleNext}
            disabled={activeSection === sections.length - 1}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

// Helper component
function Section({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

