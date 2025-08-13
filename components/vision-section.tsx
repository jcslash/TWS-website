import { Card } from "@/components/ui/card"
import { ArrowRight, Zap, Shield, Globe } from "lucide-react"

interface VisionSectionProps {
  language: "en" | "zh"
}

const content = {
  en: {
    title: "Redefining Digital Infrastructure",
    subtitle:
      "We envision a world where AI agents seamlessly collaborate with blockchain networks, creating unprecedented opportunities for sustainable innovation and growth",
    autonomousTitle: "Autonomous Intelligence",
    autonomousDesc:
      "Our AI agents operate independently, making intelligent decisions and executing complex workflows without human intervention, revolutionizing operational efficiency.",
    trustTitle: "Decentralized Trust",
    trustDesc:
      "Blockchain technology ensures transparency, security, and immutable records, creating trustless systems that scale globally with unprecedented reliability.",
    sustainableTitle: "Sustainable Impact",
    sustainableDesc:
      "Every solution we build prioritizes environmental sustainability and social responsibility, creating lasting positive impact for future generations.",
    innovationTitle: "The Next Generation of Enterprise Solutions",
    innovationDesc:
      "We're not just building software – we're architecting the intelligent infrastructure that will power tomorrow's most innovative companies and sustainable economies.",
    discoverText: "Discover the possibilities",
  },
  zh: {
    title: "重新定義數位基礎設施",
    subtitle: "我們設想一個AI代理與區塊鏈網路無縫協作的世界，為永續創新和成長創造前所未有的機會",
    autonomousTitle: "自主智能",
    autonomousDesc: "我們的AI代理獨立運作，做出智能決策並執行複雜工作流程，無需人工干預，徹底革新營運效率。",
    trustTitle: "去中心化信任",
    trustDesc: "區塊鏈技術確保透明度、安全性和不可變記錄，創建可全球擴展且具有前所未有可靠性的無信任系統。",
    sustainableTitle: "永續影響",
    sustainableDesc: "我們構建的每個解決方案都優先考慮環境永續性和社會責任，為未來世代創造持久的正面影響。",
    innovationTitle: "下一代企業解決方案",
    innovationDesc: "我們不僅僅是在構建軟體——我們正在架構將為明日最創新公司和永續經濟提供動力的智能基礎設施。",
    discoverText: "探索可能性",
  },
}

export function VisionSection({ language }: VisionSectionProps) {
  const t = content[language]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold text-gray-800">{t.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t.subtitle}</p>
          </div>

          {/* Vision Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 border-2 border-green-100 hover:border-[#4CAF50] transition-all duration-300 group">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-[#4CAF50]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#4CAF50]/20 transition-colors">
                  <Zap className="w-8 h-8 text-[#4CAF50]" />
                </div>
                <div className="space-y-4">
                  <h3 className="font-space-grotesk text-2xl font-bold text-gray-800">{t.autonomousTitle}</h3>
                  <p className="text-gray-600 leading-relaxed">{t.autonomousDesc}</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-green-100 hover:border-[#4CAF50] transition-all duration-300 group">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-[#4CAF50]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#4CAF50]/20 transition-colors">
                  <Shield className="w-8 h-8 text-[#4CAF50]" />
                </div>
                <div className="space-y-4">
                  <h3 className="font-space-grotesk text-2xl font-bold text-gray-800">{t.trustTitle}</h3>
                  <p className="text-gray-600 leading-relaxed">{t.trustDesc}</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-green-100 hover:border-[#4CAF50] transition-all duration-300 group">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-[#4CAF50]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#4CAF50]/20 transition-colors">
                  <Globe className="w-8 h-8 text-[#4CAF50]" />
                </div>
                <div className="space-y-4">
                  <h3 className="font-space-grotesk text-2xl font-bold text-gray-800">{t.sustainableTitle}</h3>
                  <p className="text-gray-600 leading-relaxed">{t.sustainableDesc}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Innovation Promise */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-12 text-center">
            <div className="max-w-4xl mx-auto space-y-6">
              <h3 className="font-space-grotesk text-3xl md:text-4xl font-bold text-gray-800">{t.innovationTitle}</h3>
              <p className="text-xl text-gray-600 leading-relaxed">{t.innovationDesc}</p>
              <div className="flex items-center justify-center space-x-2 text-[#4CAF50] font-semibold text-lg">
                <span>{t.discoverText}</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
