"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { VisionSection } from "@/components/vision-section"
import { TechnologySection } from "@/components/technology-section"
import { MarketSection } from "@/components/market-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const [language, setLanguage] = useState<"en" | "zh">("en")

  return (
    <main className="min-h-screen">
      <Navigation language={language} onLanguageChange={setLanguage} />
      <div className="pt-20">
        <HeroSection language={language} />
        <VisionSection language={language} />
        <TechnologySection language={language} />
        <MarketSection language={language} />
        <Footer language={language} />
      </div>
    </main>
  )
}
