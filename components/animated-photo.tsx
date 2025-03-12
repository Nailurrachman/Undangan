"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface AnimatedPhotoProps {
  src: string
  alt: string
  className?: string
}

export default function AnimatedPhoto({ src, alt, className }: AnimatedPhotoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size to match container
    const updateCanvasSize = () => {
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    updateCanvasSize()
    window.addEventListener("resize", updateCanvasSize)

    const drawCircleFrame = (time: number) => {
      const width = canvas.width
      const height = canvas.height

      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Get photo dimensions
      const photoSize = 250 // The photo size is 250px as set in CSS
      const centerX = width / 2
      const centerY = height / 2
      const radius = photoSize / 2

      // Draw main circle (photo border)
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.strokeStyle = "#0a2463" // Dark blue
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw animated circles exactly on the photo edge
      const circleCount = 12
      const animationOffset = time / 3000

      for (let i = 0; i < circleCount; i++) {
        const angle = (i / circleCount) * Math.PI * 2 + animationOffset
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius

        // Draw circle
        ctx.beginPath()
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.fillStyle = "#0a2463" // Dark blue
        ctx.fill()
        ctx.strokeStyle = "white"
        ctx.lineWidth = 1
        ctx.stroke()
      }
    }

    let animationId: number
    const animate = (time: number) => {
      drawCircleFrame(time)
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", updateCanvasSize)
    }
  }, [])

  return (
    <div ref={containerRef} className={cn("relative mx-auto", className)}>
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-20" />
      <div className="relative rounded-full overflow-hidden w-[250px] h-[250px] mx-auto">
        <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" crossOrigin="anonymous" />
      </div>
    </div>
  )
}

