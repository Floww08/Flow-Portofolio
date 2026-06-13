"use client"

import { Mail, Github, Instagram, MapPin, Copy, ArrowUpRight, CheckCircle2 } from "lucide-react"
import { toast } from "sonner"

export default function Contact() {
  const email = "naufalifal117@gmail.com"
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    toast.success("Email copied to clipboard!")
  }

  return (
    <section id="contact" className="py-24 bg-[#0d1117] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to start your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">next project?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-md">
              I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <a href={`mailto:${email}`} className="inline-flex items-center gap-3 bg-cyan-400 text-black font-bold px-8 py-4 rounded-full hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              Write me an email
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#161b22] border border-white/5 p-6 rounded-2xl flex flex-col justify-between aspect-video hover:border-cyan-400/30 transition-colors group">
              <div>
                <Mail className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-lg mb-1">Email Me</h3>
                <p className="text-gray-500 text-sm">{email}</p>
              </div>
              <button onClick={handleCopyEmail} className="mt-4 flex items-center justify-between w-full bg-white/5 hover:bg-cyan-400/10 hover:text-cyan-400 text-gray-300 px-4 py-2 rounded-lg transition-colors text-sm">
                Copy Email <Copy className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-[#161b22] border border-white/5 p-6 rounded-2xl flex flex-col justify-between aspect-video hover:border-pink-500/30 transition-colors group">
              <div>
                <Instagram className="w-8 h-8 text-pink-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-lg mb-1">Instagram</h3>
                <p className="text-gray-500 text-sm">@mnaufalrizzz</p>
              </div>
              <a href="https://instagram.com/mnaufalrizzz" target="_blank" rel="noreferrer" className="mt-4 flex items-center justify-between w-full bg-white/5 hover:bg-pink-500/10 hover:text-pink-400 text-gray-300 px-4 py-2 rounded-lg transition-colors text-sm">
                Connect <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-[#161b22] border border-white/5 p-6 rounded-2xl flex flex-col justify-between aspect-video hover:border-blue-400/30 transition-colors group">
              <div>
                <Github className="w-8 h-8 text-cyan-300 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-lg mb-1">GitHub</h3>
                <p className="text-gray-500 text-sm">Floww08</p>
              </div>
              <a href="https://github.com/Floww08" target="_blank" rel="noreferrer" className="mt-4 flex items-center justify-between w-full bg-white/5 hover:bg-cyan-400/10 hover:text-cyan-400 text-gray-300 px-4 py-2 rounded-lg transition-colors text-sm">
                Follow <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-[#161b22] border border-white/5 p-6 rounded-2xl flex flex-col justify-between aspect-video hover:border-cyan-400/30 transition-colors group">
              <div>
                <MapPin className="w-8 h-8 text-pink-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-lg mb-1">Location</h3>
                <p className="text-gray-500 text-sm">Jombang, Indonesia</p>
              </div>
              <div className="mt-4 flex items-center justify-between w-full bg-white/5 px-4 py-2 rounded-lg text-sm">
                <span className="text-gray-300">Remote / On-site</span>
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}