"use client"

import type React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface FlowerFrameProps {
  className?: string
  children: React.ReactNode
}

export default function FlowerFrame({ className, children }: FlowerFrameProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Top left corner flower */}
      <div className="absolute -top-12 -left-12 w-28 h-28 opacity-70">
        <Image src="/assets/images/duhhhh.jpeg" alt="Floral decoration" width={112} height={112} />
      </div>

      {/* Top right corner flower */}
      <div className="absolute -top-12 -right-12 w-28 h-28 opacity-70 transform scale-x-[-1]">
      <Image src="/assets/images/duhhhh.jpeg" alt="Floral decoration" width={112} height={112} />
      </div>

      {/* Bottom left corner flower */}
      <div className="absolute -bottom-12 -left-12 w-28 h-28 opacity-70 transform scale-y-[-1]">
      <Image src="/assets/images/duhhhh.jpeg" alt="Floral decoration" width={112} height={112} />
      </div>

      {/* Bottom right corner flower */}
      <div className="absolute -bottom-12 -right-12 w-28 h-28 opacity-70 transform scale-x-[-1] scale-y-[-1]">
      <Image src="/assets/images/duhhhh.jpeg" alt="Floral decoration" width={112} height={112} />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

