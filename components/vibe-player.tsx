"use client"

import { useState, useRef, useEffect } from "react"
import { Disc3, VolumeX } from "lucide-react"
import { toast } from "sonner"

export default function VibePlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      // Menangkap eksekusi audio dan memonitor errornya
      const playPromise = audioRef.current.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true)
            toast.success("Audio system online!", {
              style: { background: '#0d1117', color: '#22d3ee', border: '1px solid rgba(34,211,238,0.2)' }
            })
          })
          .catch((error) => {
            setIsPlaying(false)
            console.error("Audio Error:", error)
            toast.error("Gagal memutar! Pastikan file bernama persis 'bgm.mp3' di dalam folder 'public/songs/'.", {
              style: { background: '#0d1117', color: '#ec4899', border: '1px solid rgba(236,72,153,0.2)' }
            })
          })
      }
    }
  }

  if (!isMounted) return null

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex items-center gap-4 pointer-events-auto">
      
      {/* Target Audio: Sistem akan otomatis menembakkan error jika URL tidak valid */}
      <audio 
        ref={audioRef} 
        loop 
        preload="auto"
        src="/songs/bgm.mp3" 
        onError={() => toast.error("Sistem tidak dapat menemukan file /songs/bgm.mp3 di direktori!", {
          style: { background: '#0d1117', color: '#ec4899', border: '1px solid rgba(236,72,153,0.2)' }
        })}
      />

      {/* Visualizer */}
      <div 
        className={`flex items-end gap-1 h-4 transition-all duration-500 ${
          isPlaying ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        <span className="w-1 bg-cyan-400 animate-[bounce_1s_infinite_0.1s] rounded-full h-full shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
        <span className="w-1 bg-pink-500 animate-[bounce_1s_infinite_0.3s] rounded-full h-2 shadow-[0_0_8px_rgba(236,72,153,0.6)]" />
        <span className="w-1 bg-cyan-400 animate-[bounce_1s_infinite_0.5s] rounded-full h-3 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
      </div>

      {/* Tombol Eksekutor */}
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause ambient music" : "Play ambient music"}
        className={`relative flex items-center justify-center p-3 rounded-full bg-[#161b22] border transition-all duration-500 shadow-2xl cursor-pointer ${
          isPlaying 
            ? "border-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.2)]" 
            : "border-white/10 hover:border-cyan-400/30"
        }`}
      >
        {isPlaying ? (
          <Disc3 className="w-6 h-6 text-cyan-400 animate-[spin_4s_linear_infinite]" />
        ) : (
          <VolumeX className="w-6 h-6 text-gray-500 hover:text-cyan-400 transition-colors" />
        )}
      </button>

    </div>
  )
}