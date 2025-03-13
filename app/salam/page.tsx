"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import NavigationButtons from "@/components/navigation-buttons"
import PageContainer from "@/components/page-container"
import FlowerFrame from "@/components/flower-frame"

export default function Salam() {
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
          <h1 className="text-3xl font-serif font-bold text-gray-800 mb-6">Assalamu'alaikum Wr. Wb.</h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="my-8 text-gray-700 space-y-4"
          >
            <p>
              Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami:
            </p>

            <div className="py-4">
              <p className="italic text-gray-500">
                "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu
                sendiri, supaya kamu mendapat ketenangan hati dan dijadikan-Nya di antaramu rasa kasih sayang.
                Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."
              </p>
              <p className="mt-2 font-medium">(QS. Ar-Rum: 21)</p>
            </div>
          </motion.div>

          <NavigationButtons prevPage="/opening" nextPage="/quotes" />
        </motion.div>
      </FlowerFrame>
    </PageContainer>
  )
}

