"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Search, Code2, ShieldCheck, Rocket } from "lucide-react"

export default function Workflow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !cardsRef.current) return

    const cards = cardsRef.current.children
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      }
    )
  }, [])

  const workflows = [
    {
      step: "01",
      title: "System-Wide Audit",
      description: "Menganalisa kebutuhan sistem, mendeteksi potensi celah arsitektur, dan memetakan struktur database sebelum eksekusi kode.",
      icon: <Search className="w-6 h-6 text-cyan-400" />,
      color: "group-hover:border-cyan-400/50",
      textGradient: "from-cyan-400 to-blue-500"
    },
    {
      step: "02",
      title: "Logic & Infrastructure",
      description: "Membangun fondasi backend, mengkonfigurasi server/routing, dan merakit logika algoritma yang efisien menggunakan ekosistem Node.js.",
      icon: <Code2 className="w-6 h-6 text-pink-500" />,
      color: "group-hover:border-pink-500/50",
      textGradient: "from-pink-500 to-purple-500"
    },
    {
      step: "03",
      title: "Frontend Execution",
      description: "Menerjemahkan arsitektur menjadi antarmuka dinamis dan responsif dengan React/Next.js, memastikan performa rendering tetap superior.",
      icon: <Rocket className="w-6 h-6 text-cyan-400" />,
      color: "group-hover:border-cyan-400/50",
      textGradient: "from-cyan-400 to-blue-500"
    },
    {
      step: "04",
      title: "Security & Deployment",
      description: "Melakukan penetrasi dasar, mengamankan middleware, dan mendeploy aplikasi ke production environment yang stabil dan terkontrol.",
      icon: <ShieldCheck className="w-6 h-6 text-pink-500" />,
      color: "group-hover:border-pink-500/50",
      textGradient: "from-pink-500 to-purple-500"
    }
  ]

  return (
    <section id="workflow" className="py-24 bg-[#161b22] relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-cyan-400" />
            <span className="text-cyan-400 font-bold tracking-widest text-sm uppercase">Operational Protocol</span>
            <div className="h-[1px] w-12 bg-pink-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">Workflow</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" ref={cardsRef}>
          {workflows.map((item, index) => (
            <div 
              key={index}
              className={`bg-[#0d1117] border border-white/5 p-8 rounded-3xl transition-all duration-500 group relative overflow-hidden ${item.color}`}
            >
              <div className="absolute -right-4 -top-4 text-[100px] font-black text-white/5 pointer-events-none group-hover:text-white/10 transition-colors duration-500">
                {item.step}
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                
                <h3 className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.textGradient} mb-4`}>
                  {item.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}