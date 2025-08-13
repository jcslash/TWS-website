import { Card } from "@/components/ui/card"
import { TrendingUp, Target, Rocket, Users } from "lucide-react"

interface MarketSectionProps {
  language: "en" | "zh"
}

const content = {
  en: {
    title: "Capturing Exponential Growth",
    subtitle:
      "Positioned at the intersection of two rapidly expanding markets, we're building the infrastructure for the next generation of intelligent enterprises",
    aiMarket: "AI Market by 2030",
    blockchainMarket: "Blockchain Market by 2026",
    growthRate: "Annual Growth Rate",
    adoption: "Enterprise Adoption",
    opportunityTitle: "First-Mover Advantage in Agentic Infrastructure",
    opportunityDesc:
      "While others focus on individual AI models or blockchain applications, we're building the foundational layer that connects autonomous intelligence with decentralized systems.",
    convergence: "Untapped Market Convergence",
    convergenceDesc: "The intersection of AI agents and blockchain creates entirely new market categories",
    demand: "Enterprise Demand",
    demandDesc: "Fortune 500 companies actively seeking autonomous, trustless business solutions",
    regulatory: "Regulatory Tailwinds",
    regulatoryDesc: "Government initiatives supporting AI innovation and blockchain adoption",
    positioning: "Market Positioning",
    traditional: "Traditional SaaS",
    aiOnly: "AI-Only Solutions",
    blockchainOnly: "Blockchain-Only",
    agentic: "Agentic AI + Blockchain",
    positioningDesc:
      "Our unique positioning captures the full potential of both markets, creating exponential value through technological convergence.",
  },
  zh: {
    title: "捕捉指數級成長",
    subtitle: "位於兩個快速擴張市場的交匯點，我們正在為下一代智能企業構建基礎設施",
    aiMarket: "2030年AI市場",
    blockchainMarket: "2026年區塊鏈市場",
    growthRate: "年成長率",
    adoption: "企業採用率",
    opportunityTitle: "智能代理基礎設施的先發優勢",
    opportunityDesc: "當其他人專注於個別AI模型或區塊鏈應用時，我們正在構建連接自主智能與去中心化系統的基礎層。",
    convergence: "未開發的市場融合",
    convergenceDesc: "AI代理與區塊鏈的交集創造了全新的市場類別",
    demand: "企業需求",
    demandDesc: "財富500強公司積極尋求自主、無信任的商業解決方案",
    regulatory: "監管順風",
    regulatoryDesc: "政府支持AI創新和區塊鏈採用的倡議",
    positioning: "市場定位",
    traditional: "傳統SaaS",
    aiOnly: "純AI解決方案",
    blockchainOnly: "純區塊鏈",
    agentic: "智能代理AI + 區塊鏈",
    positioningDesc: "我們獨特的定位捕捉了兩個市場的全部潛力，通過技術融合創造指數級價值。",
  },
}

export function MarketSection({ language }: MarketSectionProps) {
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

          {/* Market Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="p-6 text-center bg-gradient-to-br from-green-50 to-emerald-50 border-green-100">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#4CAF50]/20 rounded-xl flex items-center justify-center mx-auto">
                  <TrendingUp className="w-6 h-6 text-[#4CAF50]" />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gray-800">$1.8T</div>
                  <div className="text-gray-600 text-sm">{t.aiMarket}</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-100">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gray-800">$67B</div>
                  <div className="text-gray-600 text-sm">{t.blockchainMarket}</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto">
                  <Rocket className="w-6 h-6 text-purple-600" />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gray-800">45%</div>
                  <div className="text-gray-600 text-sm">{t.growthRate}</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-orange-50 to-red-50 border-orange-100">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gray-800">85%</div>
                  <div className="text-gray-600 text-sm">{t.adoption}</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Market Opportunity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="font-space-grotesk text-3xl md:text-4xl font-bold text-gray-800">
                  {t.opportunityTitle}
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">{t.opportunityDesc}</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#4CAF50] rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg">{t.convergence}</h4>
                    <p className="text-gray-600">{t.convergenceDesc}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#4CAF50] rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg">{t.demand}</h4>
                    <p className="text-gray-600">{t.demandDesc}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#4CAF50] rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg">{t.regulatory}</h4>
                    <p className="text-gray-600">{t.regulatoryDesc}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
              <div className="space-y-8">
                <h4 className="font-space-grotesk text-2xl font-bold">{t.positioning}</h4>

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{t.traditional}</span>
                    <div className="flex-1 mx-4 bg-gray-700 rounded-full h-2">
                      <div className="bg-gray-500 h-2 rounded-full w-1/4"></div>
                    </div>
                    <span className="text-sm">25%</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{t.aiOnly}</span>
                    <div className="flex-1 mx-4 bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-1/2"></div>
                    </div>
                    <span className="text-sm">50%</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{t.blockchainOnly}</span>
                    <div className="flex-1 mx-4 bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full w-1/3"></div>
                    </div>
                    <span className="text-sm">35%</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">{t.agentic}</span>
                    <div className="flex-1 mx-4 bg-gray-700 rounded-full h-2">
                      <div className="bg-[#4CAF50] h-2 rounded-full w-full"></div>
                    </div>
                    <span className="text-sm font-bold">100%</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm">{t.positioningDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
