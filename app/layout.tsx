import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import type React from "react"

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Code with Jul",
  description: "Personal website of juldev, a mobile engineer.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}

