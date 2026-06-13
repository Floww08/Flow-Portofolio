"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import Image from "next/image"
import { Smartphone, MonitorPlay, Zap } from "lucide-react"

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !textRef.current || !imageRef.current) return
    gsap.fromTo(textRef.current.children, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: containerRef.current, start: "top 70%" } })
    gsap.fromTo(imageRef.current, { scale: 0.8, opacity: 0, rotationY: -15 }, { scale: 1, opacity: 1, rotationY: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: containerRef.current, start: "top 60%" } })
  }, [])

  return (
    <section id="about" className="py-24 bg-[#0d1117] relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div ref={textRef}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-cyan-400" />
              <span className="text-cyan-400 font-bold tracking-widest text-sm uppercase">Who is Muhammad Naufal Rizal Firdaus?</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">
              Transforming logic into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">digital reality</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              I am a Web Developer & Logic Architect dedicated to building web applications that are not only visually stunning but also feature highly optimized and secure infrastructure.
            </p>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              With experience in assembling modern full-stack applications, I combine computer networking fundamentals with the robust architecture of the React and Node.js ecosystems. My ultimate goal is to ensure that every line of code written contributes directly to the system's performance and scalability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 bg-[#161b22] p-4 rounded-2xl border border-white/5 hover:border-cyan-400/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center shrink-0"><Smartphone className="w-5 h-5 text-cyan-400" /></div>
                <span className="text-white text-sm font-medium">Responsive Architecture</span>
              </div>
              <div className="flex items-center gap-3 bg-[#161b22] p-4 rounded-2xl border border-white/5 hover:border-pink-500/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center shrink-0"><MonitorPlay className="w-5 h-5 text-pink-500" /></div>
                <span className="text-white text-sm font-medium">Modern UI/UX</span>
              </div>
              <div className="flex items-center gap-3 bg-[#161b22] p-4 rounded-2xl border border-white/5 hover:border-cyan-400/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center shrink-0"><Zap className="w-5 h-5 text-cyan-400" /></div>
                <span className="text-white text-sm font-medium">High Performance</span>
              </div>
            </div>
          </div>

          <div ref={imageRef} className="relative aspect-square max-w-md mx-auto w-full" style={{ perspective: '1000px' }}>
            <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-8 border border-pink-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-16 border border-cyan-400/20 rounded-full animate-[spin_10s_linear_infinite]" />
            
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-[#0d1117] z-10 filter grayscale hover:grayscale-0 transition-all duration-700 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              <Image src="/mbg.jpeg" alt="Muhammad Naufal Rizal Firdaus" fill priority sizes="(max-width: 768px) 100vw, 500px" className="object-cover" />
            </div>

            <div className="absolute -top-4 -left-4 bg-[#161b22] border border-white/10 p-4 rounded-2xl z-20 shadow-2xl backdrop-blur-md animate-float">
              <div className="flex items-center gap-3"><div className="text-cyan-400 font-bold text-2xl">3+</div><div className="text-gray-400 text-xs leading-tight">Years<br/>Learning</div></div>
            </div>
            <div className="absolute top-1/2 -right-8 bg-[#161b22] border border-white/10 p-4 rounded-2xl z-20 shadow-2xl backdrop-blur-md animate-float-delayed">
              <div className="flex items-center gap-3"><div className="text-pink-500 font-bold text-2xl">5+</div><div className="text-gray-400 text-xs leading-tight">Projects<br/>Deployed</div></div>
            </div>
            <div className="absolute -bottom-4 left-1/4 bg-[#161b22] border border-white/10 p-4 rounded-2xl z-20 shadow-2xl backdrop-blur-md animate-float">
              <div className="flex items-center gap-3"><div className="text-cyan-300 font-bold text-2xl">10+</div><div className="text-gray-400 text-xs leading-tight">Tech<br/>Stack</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}