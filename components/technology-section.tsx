import { Card } from "@/components/ui/card"
import { Brain, Link, Cpu, Database, Network, Sparkles } from "lucide-react"

interface TechnologySectionProps {
  language: "en" | "zh"
}

const content = {
  en: {
    title: "Technology Stack of Tomorrow",
    subtitle:
      "Our cutting-edge platform combines the most advanced AI and blockchain technologies to deliver unprecedented performance and scalability",
    agenticAI: "Agentic AI",
    agenticAIDesc: "Advanced autonomous agents with reasoning, planning, and execution capabilities",
    smartContracts: "Smart Contracts",
    smartContractsDesc: "Self-executing contracts with automated compliance and governance",
    edgeComputing: "Edge Computing",
    edgeComputingDesc: "Distributed processing for real-time AI inference and decision making",
    decentralizedStorage: "Decentralized Storage",
    decentralizedStorageDesc: "Immutable, distributed data architecture with cryptographic security",
    multiChain: "Multi-Chain",
    multiChainDesc: "Seamless interoperability across multiple blockchain networks",
    quantumReady: "Quantum-Ready",
    quantumReadyDesc: "Future-proof cryptography and algorithms for quantum computing era",
    innovationTitle: "Where Innovation Meets Implementation",
    innovationDesc:
      "Our proprietary technology stack enables enterprises to deploy AI agents that can autonomously interact with blockchain networks, creating self-managing, self-optimizing business processes.",
    uptime: "Uptime Reliability",
    faster: "Faster Processing",
    zero: "Zero",
    intervention: "Human Intervention",
  },
  zh: {
    title: "明日科技堆疊",
    subtitle: "我們的尖端平台結合最先進的AI和區塊鏈技術，提供前所未有的性能和可擴展性",
    agenticAI: "智能代理AI",
    agenticAIDesc: "具備推理、規劃和執行能力的先進自主代理",
    smartContracts: "智能合約",
    smartContractsDesc: "具有自動合規和治理功能的自執行合約",
    edgeComputing: "邊緣運算",
    edgeComputingDesc: "用於即時AI推理和決策的分散式處理",
    decentralizedStorage: "去中心化儲存",
    decentralizedStorageDesc: "具有密碼學安全性的不可變分散式資料架構",
    multiChain: "多鏈",
    multiChainDesc: "跨多個區塊鏈網路的無縫互操作性",
    quantumReady: "量子就緒",
    quantumReadyDesc: "為量子運算時代準備的未來密碼學和演算法",
    innovationTitle: "創新與實施的交匯點",
    innovationDesc:
      "我們的專有技術堆疊使企業能夠部署可自主與區塊鏈網路互動的AI代理，創建自我管理、自我優化的業務流程。",
    uptime: "正常運行時間可靠性",
    faster: "更快處理速度",
    zero: "零",
    intervention: "人工干預",
  },
}

export function TechnologySection({ language }: TechnologySectionProps) {
  const t = content[language]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold text-gray-800">{t.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t.subtitle}</p>
          </div>

          {/* Technology Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 bg-white border border-gray-200 hover:border-[#4CAF50] hover:shadow-xl transition-all duration-300 group">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#4CAF50]/10 rounded-xl flex items-center justify-center group-hover:bg-[#4CAF50]/20 transition-colors">
                  <Brain className="w-6 h-6 text-[#4CAF50]" />
                </div>
                <h3 className="font-space-grotesk text-xl font-bold text-gray-800">{t.agenticAI}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.agenticAIDesc}</p>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-gray-200 hover:border-[#4CAF50] hover:shadow-xl transition-all duration-300 group">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#4CAF50]/10 rounded-xl flex items-center justify-center group-hover:bg-[#4CAF50]/20 transition-colors">
                  <Link className="w-6 h-6 text-[#4CAF50]" />
                </div>
                <h3 className="font-space-grotesk text-xl font-bold text-gray-800">{t.smartContracts}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.smartContractsDesc}</p>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-gray-200 hover:border-[#4CAF50] hover:shadow-xl transition-all duration-300 group">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#4CAF50]/10 rounded-xl flex items-center justify-center group-hover:bg-[#4CAF50]/20 transition-colors">
                  <Cpu className="w-6 h-6 text-[#4CAF50]" />
                </div>
                <h3 className="font-space-grotesk text-xl font-bold text-gray-800">{t.edgeComputing}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.edgeComputingDesc}</p>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-gray-200 hover:border-[#4CAF50] hover:shadow-xl transition-all duration-300 group">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#4CAF50]/10 rounded-xl flex items-center justify-center group-hover:bg-[#4CAF50]/20 transition-colors">
                  <Database className="w-6 h-6 text-[#4CAF50]" />
                </div>
                <h3 className="font-space-grotesk text-xl font-bold text-gray-800">{t.decentralizedStorage}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.decentralizedStorageDesc}</p>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-gray-200 hover:border-[#4CAF50] hover:shadow-xl transition-all duration-300 group">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#4CAF50]/10 rounded-xl flex items-center justify-center group-hover:bg-[#4CAF50]/20 transition-colors">
                  <Network className="w-6 h-6 text-[#4CAF50]" />
                </div>
                <h3 className="font-space-grotesk text-xl font-bold text-gray-800">{t.multiChain}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.multiChainDesc}</p>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-gray-200 hover:border-[#4CAF50] hover:shadow-xl transition-all duration-300 group">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#4CAF50]/10 rounded-xl flex items-center justify-center group-hover:bg-[#4CAF50]/20 transition-colors">
                  <Sparkles className="w-6 h-6 text-[#4CAF50]" />
                </div>
                <h3 className="font-space-grotesk text-xl font-bold text-gray-800">{t.quantumReady}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.quantumReadyDesc}</p>
              </div>
            </Card>
          </div>

          {/* Innovation Highlight */}
          <div className="bg-[#4CAF50] rounded-3xl p-12 text-center text-white">
            <div className="max-w-4xl mx-auto space-y-6">
              <h3 className="font-space-grotesk text-3xl md:text-4xl font-bold">{t.innovationTitle}</h3>
              <p className="text-xl text-green-100 leading-relaxed">{t.innovationDesc}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="space-y-2">
                  <div className="text-4xl font-bold">99.9%</div>
                  <div className="text-green-100">{t.uptime}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold">10x</div>
                  <div className="text-green-100">{t.faster}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold">{t.zero}</div>
                  <div className="text-green-100">{t.intervention}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
