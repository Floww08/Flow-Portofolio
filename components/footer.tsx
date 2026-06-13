"use client"

import { Github, Instagram, Mail, MapPin, Code2, Layers, Cpu } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#090c10] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-cyan-400 font-bold tracking-widest text-sm">Flow</span>
              <span className="text-white font-bold text-lg">M Naufal</span>
              <span className="text-gray-500 text-xs tracking-widest uppercase">Portfolio</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Building modern, secure, responsive, and high-performance web architectures for the digital ecosystem.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-300"><Code2 className="w-4 h-4 text-pink-500" /> Web Development</li>
              <li className="flex items-center gap-2 text-sm text-gray-300"><Layers className="w-4 h-4 text-cyan-400" /> Logic Architecture</li>
              <li className="flex items-center gap-2 text-sm text-gray-300"><Cpu className="w-4 h-4 text-pink-500" /> React Ecosystem</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-8 bg-cyan-400" />
              <h3 className="text-white font-bold">Quick Links</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <a href="#home" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">Home</a>
              <a href="#about" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">About</a>
              <a href="#skills" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#experience" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">Experience</a>
              <a href="#projects" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#contact" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-8 bg-pink-500" />
              <h3 className="text-white font-bold">Get in Touch</h3>
            </div>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3 text-sm text-gray-400"><Mail className="w-5 h-5 text-cyan-400 shrink-0" /> naufalifal117@gmail.com</li>
              <li className="flex items-start gap-3 text-sm text-gray-400"><MapPin className="w-5 h-5 text-pink-500 shrink-0" /> Jombang, East Java, Indonesia</li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <div className="w-5 h-5 flex items-center justify-center shrink-0"><div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" /></div>
                Available for Work
              </li>
            </ul>
            <div className="flex items-center gap-3">
              <a href="https://github.com/Floww08" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-[#161b22] border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:border-cyan-400 hover:text-black transition-all text-gray-400"><Github className="w-4 h-4" /></a>
              <a href="https://instagram.com/mnaufalrizzz" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-[#161b22] border border-white/10 flex items-center justify-center hover:bg-pink-500 hover:border-pink-500 hover:text-white transition-all text-gray-400"><Instagram className="w-4 h-4" /></a>
              <a href="mailto:naufalifal117@gmail.com" className="w-10 h-10 rounded-lg bg-[#161b22] border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:border-cyan-400 hover:text-black transition-all text-gray-400"><Mail className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-8 bg-cyan-400" />
              <h3 className="text-white font-bold">Stay Updated</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4">Drop your email to get connected faster.</p>
            <div className="flex flex-col gap-3">
              <input type="email" placeholder="Enter your email" className="bg-[#161b22] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors w-full" />
              <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold py-3 rounded-lg hover:opacity-90 transition-opacity w-full">Follow</button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} M Naufal Rizal Firdaus. All rights reserved.</p>
          <div className="flex items-center gap-4"><span className="text-cyan-400 text-sm font-mono drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">Status: Secure</span></div>
        </div>
      </div>
    </footer>
  )
}