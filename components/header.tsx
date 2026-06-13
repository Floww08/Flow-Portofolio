"use client"

import { useState, useEffect } from "react"
import { MessageSquare } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)

    const sections = document.querySelectorAll("section[id]")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -60% 0px" } 
    )

    sections.forEach((section) => observer.observe(section))
    return () => {
      window.removeEventListener("scroll", handleScroll)
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "workflow", label: "Workflow" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }, 
  ]

  // Wrapper header dibuat tembus pandang penuh (pointer-events-none) agar tidak memblokir elemen di bawahnya, dan tidak ada lagi border-bottom yang melintang
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 pointer-events-none ${isScrolled ? "pt-4" : "pt-6"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between pointer-events-auto">
        
        {/* Tombol Kiri (Let's Connect) */}
        <a href="#contact" className={`hidden sm:flex items-center gap-2 bg-[#161b22]/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all duration-300 ${isScrolled ? "shadow-lg" : ""}`}>
          <MessageSquare className="text-cyan-400 w-4 h-4" />
          <span className="text-xs font-semibold text-gray-300">Let's Connect</span>
        </a>

        {/* Navbar Tengah (Floating Pill Murni) */}
        <nav className={`flex-1 max-w-3xl mx-auto bg-[#161b22]/90 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-between p-1.5 transition-all duration-500 ${isScrolled ? "shadow-[0_15px_40px_rgba(0,0,0,0.6)]" : "shadow-xl"}`}>
          
          <div className="flex items-center gap-3 px-4 py-1 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {/* Logo Anda */}
            <div className="relative w-8 h-8 shrink-0 flex items-center justify-center bg-white/5 rounded-full overflow-hidden border border-white/10">
              <Image 
                src="/flow.png" 
                alt="Flow Logo" 
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <div className="flex flex-col min-w-0">
              <span className="text-white font-bold text-sm leading-tight truncate">
                FLOW
              </span>
              <span className="text-cyan-400 text-[9px] font-mono tracking-widest uppercase">
                Portfolio
              </span>
            </div>
          </div>

          {/* Navigasi Dinamis */}
          <div className="hidden lg:flex items-center gap-1 px-2 border-l border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.id} 
                href={`#${link.id}`} 
                onClick={() => setActiveSection(link.id)}
                className={`relative px-4 py-2 text-xs font-medium transition-all duration-300 rounded-full ${
                  activeSection === link.id 
                    ? "text-white bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]" 
                    : "text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/5"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

      </div>
    </header>
  )
}