"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Github, ExternalLink, Database, Server, Layout, Activity, Code } from "lucide-react"

// Komponen Generator SVG Dinamis (Pengganti Gambar Statis)
const DynamicProjectCover = ({ accent, title }: { accent: string, title: string }) => {
  const isCyan = accent === 'cyan';
  const gradientId = `grad-${title.replace(/\s+/g, '-')}`;
  
  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-[#090c10]">
      <svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="none" className="absolute inset-0 opacity-40">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isCyan ? "#22d3ee" : "#ec4899"} stopOpacity="0.8" />
            <stop offset="50%" stopColor="#161b22" stopOpacity="0.5" />
            <stop offset="100%" stopColor={isCyan ? "#0ea5e9" : "#a855f7"} stopOpacity="0.8" />
          </linearGradient>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${gradientId})`} />
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Ornamen Cyberpunk Generator */}
        {isCyan ? (
          <>
            <circle cx="200" cy="150" r="80" fill="none" stroke="#22d3ee" strokeWidth="2" strokeDasharray="10 5" className="animate-[spin_20s_linear_infinite]" />
            <circle cx="200" cy="150" r="100" fill="none" stroke="#0ea5e9" strokeWidth="1" opacity="0.5" />
            <path d="M 0 150 Q 200 50 400 150" fill="none" stroke="#22d3ee" strokeWidth="1" opacity="0.3" />
          </>
        ) : (
          <>
            <rect x="120" y="70" width="160" height="160" fill="none" stroke="#ec4899" strokeWidth="2" strokeDasharray="15 15" className="animate-[spin_15s_linear_infinite]" transform="rotate(45 200 150)" />
            <polygon points="200,50 300,250 100,250" fill="none" stroke="#a855f7" strokeWidth="1" opacity="0.5" />
            <path d="M 0 50 L 400 250 M 0 250 L 400 50" fill="none" stroke="#ec4899" strokeWidth="1" opacity="0.2" />
          </>
        )}
      </svg>
      {/* Ikon Pusat yang Elegan */}
      <div className={`relative z-10 p-6 rounded-2xl bg-[#161b22]/80 backdrop-blur-sm border ${isCyan ? 'border-cyan-400/30 text-cyan-400' : 'border-pink-500/30 text-pink-500'} shadow-2xl`}>
        {isCyan ? <Code className="w-12 h-12" /> : <Activity className="w-12 h-12" />}
      </div>
    </div>
  );
};

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !headerRef.current || !projectsRef.current) return

    gsap.fromTo(
      headerRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: containerRef.current, start: "top 80%" } }
    )

    const projectCards = projectsRef.current.children
    gsap.fromTo(
      projectCards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 70%",
        },
      }
    )
  }, [])

  const projects = [
    {
      title: "FinansiaKu Dashboard",
      description: "Interactive personal finance management platform. Integrates real-time data tracking and authentication with a dynamic backend architecture.",
      tags: ["React", "Node.js", "Firebase", "Cloud Firestore"],
      icon: <Database className="w-5 h-5 text-cyan-400" />,
      github: "https://github.com/Floww08",
      live: "#",
      accent: "cyan"
    },
    {
      title: "Competency Server Infrastructure",
      description: "Advanced network architecture and server configuration design for TKJ Competency Exams. Running on a robust dual-OS ecosystem.",
      tags: ["Debian 10", "Windows 11", "Routing", "SysAdmin"],
      icon: <Server className="w-5 h-5 text-pink-500" />,
      github: "https://github.com/Floww08",
      live: "#",
      accent: "pink"
    },
    {
      title: "Portfolio Architecture v2.0",
      description: "Development of Next.js App Router-based portfolio infrastructure. Equipped with GSAP animations optimized for integrated graphics processing.",
      tags: ["Next.js 15", "TypeScript", "GSAP", "Tailwind", "Supabase"],
      icon: <Layout className="w-5 h-5 text-cyan-400" />,
      github: "https://github.com/Floww08",
      live: "#",
      accent: "cyan"
    }
  ]

  return (
    <section id="projects" className="py-24 bg-[#0d1117] relative overflow-hidden" ref={containerRef}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20" ref={headerRef}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-pink-500" />
            <span className="text-pink-500 font-bold tracking-widest text-sm uppercase">Featured Work</span>
            <div className="h-[1px] w-12 bg-cyan-400" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            System <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">Deployments</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A compilation of flagship projects demonstrating the fusion of advanced infrastructure management and modern web interface development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={projectsRef}>
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`bg-[#161b22] border border-white/5 rounded-3xl overflow-hidden group hover:border-${project.accent === 'cyan' ? 'cyan-400' : 'pink-500'}/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col h-full`}
            >
              {/* Dynamic SVG Cover Container */}
              <div className="relative h-56 w-full overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-[#090c10]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <div className="transform group-hover:scale-105 transition-transform duration-700 w-full h-full grayscale group-hover:grayscale-0">
                   <DynamicProjectCover accent={project.accent} title={project.title} />
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg bg-white/5 border border-white/5`}>
                    {project.icon}
                  </div>
                  <div className="flex items-center gap-3">
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer" className={`text-gray-400 hover:text-${project.accent === 'cyan' ? 'cyan-400' : 'pink-500'} transition-colors`}>
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-mono text-gray-500">
                      {idx > 0 && <span className="mx-2 text-gray-700">•</span>}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}