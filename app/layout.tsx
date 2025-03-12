import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Undangan Pernikahan Rohatin & Royhaan",
  description: "Undangan Pernikahan Rohatin ND & Moh Royhaan As",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}

