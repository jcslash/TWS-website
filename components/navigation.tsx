"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  language: "en" | "zh"
  onLanguageChange: (lang: "en" | "zh") => void
}

const navigationItems = {
  en: {
    solution: "Solution",
    product: "Product",
    research: "Research",
    partners: "Partners",
    aboutUs: "About Us",
    contactUs: "Contact Us",
  },
  zh: {
    solution: "解決方案",
    product: "產品",
    research: "研究",
    partners: "合作夥伴",
    aboutUs: "關於我們",
    contactUs: "聯絡我們",
  },
}

export function Navigation({ language, onLanguageChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const nav = navigationItems[language]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="relative flex-shrink-0 w-32 h-14">
              <Image src="/logo.png" alt="Taiwan Sustainability Logo" fill className="object-contain" priority />
            </div>
            <div className="flex flex-col">
                         </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#solution" className="font-inter text-gray-700 hover:text-[#4CAF50] transition-colors">
              {nav.solution}
            </a>
            <a href="#product" className="font-inter text-gray-700 hover:text-[#4CAF50] transition-colors">
              {nav.product}
            </a>
            <a href="#research" className="font-inter text-gray-700 hover:text-[#4CAF50] transition-colors">
              {nav.research}
            </a>
            <a href="#partners" className="font-inter text-gray-700 hover:text-[#4CAF50] transition-colors">
              {nav.partners}
            </a>
            <Button
              variant="outline"
              className="border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white bg-transparent"
            >
              {nav.aboutUs}
            </Button>
            <Button className="bg-gray-800 text-white hover:bg-gray-900">{nav.contactUs}</Button>

            {/* Language Switcher */}
            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200">
              <button
                onClick={() => onLanguageChange("en")}
                className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
                  language === "en" ? "bg-[#4CAF50] text-white" : "text-gray-600 hover:text-[#4CAF50]"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange("zh")}
                className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
                  language === "zh" ? "bg-[#4CAF50] text-white" : "text-gray-600 hover:text-[#4CAF50]"
                }`}
              >
                中文
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Mobile Language Switcher */}
            <div className="flex items-center space-x-1">
              <button
                onClick={() => onLanguageChange("en")}
                className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                  language === "en" ? "bg-[#4CAF50] text-white" : "text-gray-600"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange("zh")}
                className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                  language === "zh" ? "bg-[#4CAF50] text-white" : "text-gray-600"
                }`}
              >
                中文
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#4CAF50] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#solution" className="font-inter text-gray-700 hover:text-[#4CAF50] transition-colors">
                {nav.solution}
              </a>
              <a href="#product" className="font-inter text-gray-700 hover:text-[#4CAF50] transition-colors">
                {nav.product}
              </a>
              <a href="#research" className="font-inter text-gray-700 hover:text-[#4CAF50] transition-colors">
                {nav.research}
              </a>
              <a href="#partners" className="font-inter text-gray-700 hover:text-[#4CAF50] transition-colors">
                {nav.partners}
              </a>
              <Button
                variant="outline"
                className="border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white w-full justify-start bg-transparent"
              >
                {nav.aboutUs}
              </Button>
              <Button className="bg-gray-800 text-white hover:bg-gray-900 w-full justify-start">{nav.contactUs}</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
