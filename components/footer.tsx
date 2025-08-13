import Image from "next/image"

interface FooterProps {
  language: "en" | "zh"
}

const content = {
  en: {
    description:
      "Pioneering the future of Agentic AI and Blockchain technology. Building seamless, Artificial Intelligence & Web3 applications that transform industries through innovation.",
    company: "Agentic SaaS Company",
    solutions: "AI & Web3 Solutions",
    technology: "Technology",
    techItems: ["Agentic AI", "Smart Contracts", "Innivations", "Multi-Agents", "LLM-Ready"],
    solutionsTitle: "Solutions",
    solutionItems: [
      "Enterprise AI",
      "Blockchain Integration",
      "Autonomous Systems",
      "Decentralized Apps",
      "Custom Development",
    ],
    copyright: "Building the future of intelligent infrastructure.",
    tagline1: "Agentic AI & Web3",
    tagline2: "Sustainable Innovation",
  },
  zh: {
    description: "引領代理式AI和區塊鏈Web3技術的未來。構建無縫人工智慧應用，透過創新轉型各行各業。",
    company: "代理式SaaS公司",
    solutions: "AI與區塊鏈Web3解決方案",
    technology: "技術",
    techItems: ["智能代理AI", "智能合約", "邊緣運算", "多鏈", "量子就緒"],
    solutionsTitle: "解決方案",
    solutionItems: ["企業AI", "區塊鏈整合", "自主系統", "去中心化應用", "客製化開發"],
    copyright: "構建智能基礎設施的未來。",
    tagline1: "智能代理AI與區塊鏈",
    tagline2: "永續創新",
  },
}

export function Footer({ language }: FooterProps) {
  const t = content[language]

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-4">
                <Image
                  src="/logo.png"
                  alt="Taiwan Sustainability Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <div className="font-space-grotesk text-xl font-bold">Taiwan Sustainability</div>
                  <div className="font-inter text-sm text-gray-400">台灣永續力</div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed max-w-md">{t.description}</p>

              <div className="space-y-2">
                <div className="text-sm text-gray-400">{t.company}</div>
                <div className="text-sm text-gray-400">{t.solutions}</div>
              </div>
            </div>

            {/* Technology */}
            <div className="space-y-6">
              <h3 className="font-space-grotesk text-lg font-bold">{t.technology}</h3>
              <ul className="space-y-3 text-gray-300">
                {t.techItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="space-y-6">
              <h3 className="font-space-grotesk text-lg font-bold">{t.solutionsTitle}</h3>
              <ul className="space-y-3 text-gray-300">
                {t.solutionItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">© 2025 Taiwan Sustainability (台灣永續力). {t.copyright}</div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>{t.tagline1}</span>
                <span>•</span>
                <span>{t.tagline2}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
