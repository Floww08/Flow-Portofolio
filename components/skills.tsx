"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Code2, Database, Terminal, Shield, Cpu, LayoutTemplate } from "lucide-react"

export default function Skills() {
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
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    )
  }, [])

  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: <LayoutTemplate className="w-6 h-6 text-cyan-400" />,
      skills: ["React.js", "Next.js", "Tailwind CSS", "GSAP Animations", "TypeScript"],
      color: "hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-6 h-6 text-pink-500" />,
      skills: ["Node.js", "Firebase", "Supabase", "Cloud Firestore", "PostgreSQL"],
      color: "hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]"
    },
    {
      title: "Systems & Infrastructure",
      icon: <Terminal className="w-6 h-6 text-cyan-400" />,
      skills: ["Linux (Arch/Debian/Kali)", "Bash Scripting", "Virtualization", "Hardware Config", "Git"],
      color: "hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
    },
    {
      title: "Network & Security",
      icon: <Shield className="w-6 h-6 text-pink-500" />,
      skills: ["Network Protocols", "Routing", "System Administration", "Basic Penetration", "SSH Config"],
      color: "hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]"
    }
  ]

  return (
    <section id="skills" className="py-24 bg-[#0d1117] relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-pink-500" />
            <span className="text-pink-500 font-bold tracking-widest text-sm uppercase">Arsenal</span>
            <div className="h-[1px] w-12 bg-cyan-400" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">Capabilities</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" ref={cardsRef}>
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`bg-[#161b22] border border-white/5 p-8 rounded-3xl transition-all duration-500 group ${category.color}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-[#0d1117] border border-white/5 text-gray-300 text-sm rounded-full font-medium group-hover:border-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}