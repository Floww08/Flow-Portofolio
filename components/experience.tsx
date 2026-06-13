"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Briefcase, GraduationCap, Server } from "lucide-react"

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !timelineRef.current) return

    const items = timelineRef.current.children
    gsap.fromTo(
      items,
      { x: -50, opacity: 0 },
      {
        x: 0,
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

  const experiences = [
    {
      id: 1,
      type: "work",
      title: "IT Infrastructure & Web Intern",
      company: "CV. Orlando Link Data",
      date: "4 Months Program",
      description: "Assisted in maintaining local network infrastructure and web-related configurations. Ensured hardware and software integrity across operational systems.",
      icon: <Briefcase className="w-5 h-5 text-cyan-400" />,
      color: "border-cyan-400"
    },
    {
      id: 2,
      type: "project",
      title: "Server Team Manager",
      company: "Vocational Competency Exam Project",
      date: "2025 - 2026",
      description: "Led the network and server configuration team for the final competency exam. Successfully managed and deployed routing and server architecture using Debian 10 and Windows 11 environments.",
      icon: <Server className="w-5 h-5 text-pink-500" />,
      color: "border-pink-500"
    },
    {
      id: 3,
      type: "education",
      title: "Computer and Network Engineering (TKJ)",
      company: "SMKN Gudo",
      date: "2023 - 2026",
      description: "Focused on deep networking logic, Linux system administration, and web development fundamentals. Cultivated a strong foundation in both software engineering and hardware troubleshooting.",
      icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
      color: "border-cyan-400"
    }
  ]

  return (
    <section id="experience" className="py-24 bg-[#0d1117] relative overflow-hidden" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-cyan-400" />
            <span className="text-cyan-400 font-bold tracking-widest text-sm uppercase">Journey</span>
            <div className="h-[1px] w-12 bg-pink-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">Education</span>
          </h2>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0" ref={timelineRef}>
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-12 relative pl-8 md:pl-0">
              
              {/* Timeline Dot */}
              <div className={`absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-0 w-3 h-3 rounded-full bg-[#0d1117] border-2 ${exp.color} z-10 shadow-[0_0_10px_currentColor]`} />
              
              <div className={`md:flex items-center justify-between w-full ${exp.id % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Spacer for desktop layout */}
                <div className="hidden md:block w-[45%]" />

                {/* Content Card */}
                <div className="w-full md:w-[45%] bg-[#161b22] border border-white/5 p-6 rounded-2xl shadow-xl hover:border-white/10 transition-colors group relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${exp.id % 2 === 0 ? 'from-pink-500 to-transparent' : 'from-cyan-400 to-transparent'}`} />
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/5">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{exp.title}</h3>
                      <p className="text-gray-400 text-sm font-medium">{exp.company}</p>
                    </div>
                  </div>
                  
                  <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-gray-300 bg-white/5 rounded-full border border-white/5">
                    {exp.date}
                  </span>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}