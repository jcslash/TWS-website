import { Card } from "@/components/ui/card"

interface HeroSectionProps {
  language: "en" | "zh"
}

const content = {
  en: {
    headline1: "Pioneering the Future of",
    headline2: "Agentic AI & Blockchain",
    description:
      "Building seamless, intelligent applications that transform industries through autonomous AI agents and decentralized innovation",
    aiFirst: "AI-First",
    aiFirstDesc: "Autonomous Intelligence",
    web3: "Web3",
    web3Desc: "Blockchain Integration",
    saas: "SaaS",
    saasDesc: "Scalable Solutions",
  },
  zh: {
    headline1: "引領未來",
    headline2: "智能代理AI與區塊鏈",
    description: "構建無縫智能應用程式，透過自主AI代理和去中心化創新轉型各行各業",
    aiFirst: "AI優先",
    aiFirstDesc: "自主智能",
    web3: "Web3",
    web3Desc: "區塊鏈整合",
    saas: "SaaS",
    saasDesc: "可擴展解決方案",
  },
}

export function HeroSection({ language }: HeroSectionProps) {
  const t = content[language]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-green-50/30 to-emerald-50/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-[#4CAF50]"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 rounded-full bg-[#4CAF50]"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-[#4CAF50]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Headline */}
          <div className="space-y-6">
            <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold leading-tight">
              <span className="text-gray-800">{t.headline1}</span>
              <br />
              <span className="text-[#4CAF50]">{t.headline2}</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t.description}</p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-green-100 hover:shadow-lg transition-all duration-300">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-[#4CAF50]">{t.aiFirst}</div>
                <div className="text-gray-600">{t.aiFirstDesc}</div>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-green-100 hover:shadow-lg transition-all duration-300">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-[#4CAF50]">{t.web3}</div>
                <div className="text-gray-600">{t.web3Desc}</div>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-green-100 hover:shadow-lg transition-all duration-300">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-[#4CAF50]">{t.saas}</div>
                <div className="text-gray-600">{t.saasDesc}</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
