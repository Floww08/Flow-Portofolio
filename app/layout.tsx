import type React from "react"
import type { Metadata, Viewport } from "next"
import { League_Spartan } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import NoiseOverlay from "@/components/noise-overlay"
import VibePlayer from "@/components/vibe-player"
// @ts-ignore: Allow importing global CSS without type declarations
import "./globals.css"
import { Toaster } from 'sonner'

// Inisiasi Font
const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-league-spartan",
  display: 'swap',
  preload: true,
})

// Konfigurasi URL Basis (Taktik Profesional untuk mencegah error deployment)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

// Arsitektur SEO & Metadata
export const metadata: Metadata = {
  title: {
    default: "M Naufal Rizal Firdaus | Web Developer & Logic Architect",
    template: "%s | Naufal Rizal"
  },
  description:
    "Portofolio M Naufal Rizal Firdaus, seorang Web Developer yang berfokus pada arsitektur logika mendalam, keamanan sistem, dan antarmuka dinamis menggunakan ekosistem React dan Node.js.",
  keywords: [
    "M Naufal Rizal Firdaus", 
    "Naufal Rizal", 
    "Floww08",
    "Web Developer Jombang", 
    "React Ecosystem Developer",
    "Node.js Developer",
    "Frontend Engineer Indonesia", 
    "Logic Architect",
    "Next.js Developer"
  ],
  authors: [{ name: "M Naufal Rizal Firdaus", url: "https://github.com/Floww08" }],
  creator: "M Naufal Rizal Firdaus",
  publisher: "M Naufal Rizal Firdaus",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "profile",
    locale: "id_ID",
    url: siteUrl,
    title: "M Naufal Rizal Firdaus | Web Developer & Logic Architect",
    description:
      "Eksplorasi portofolio M Naufal Rizal Firdaus. Membangun arsitektur web modern yang aman, responsif, dan berperforma tinggi.",
    siteName: "Portofolio Naufal Rizal",
    images: [
      {
        url: '/og-image.png', // PERHATIAN: Ganti file ini di folder public/ dengan gambar Anda
        width: 1200,
        height: 630,
        alt: 'M Naufal Rizal Firdaus - Web Developer',
      },
    ],
    firstName: "M Naufal",
    lastName: "Rizal Firdaus",
    username: "mnaufalrizzz",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: "M Naufal Rizal Firdaus | Web Developer",
    description: "Membangun arsitektur web modern yang aman dan berperforma tinggi.",
    images: ['/og-image.png'],
    creator: '@mnaufalrizzz', // Menggunakan ID Instagram sebagai standar universal
  },
  // ... kode metadata lainnya
  icons: {
    icon: "/flow.png",
    shortcut: "/flow.png",
    apple: "/flow.png", 
  },
  // ...
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Tag verifikasi Google telah dihapus agar tidak diretas pemilik lama.
  // Anda bisa menambahkan verifikasi Anda sendiri nanti.
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#121212',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        {/* Injeksi Skema JSON-LD Steril */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "url": siteUrl,
                "name": "Portofolio Naufal Rizal",
                "description": "Portofolio profesional M Naufal Rizal Firdaus.",
                "publisher": {
                  "@type": "Person",
                  "name": "M Naufal Rizal Firdaus"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfilePage",
                "dateCreated": "2024-01-01T00:00:00+07:00",
                "dateModified": new Date().toISOString(),
                "mainEntity": {
                  "@type": "Person",
                  "name": "M Naufal Rizal Firdaus",
                  "url": siteUrl,
                  "jobTitle": "Web Developer & Logic Architect",
                  "image": `${siteUrl}/gwehj.jpg`, // Pastikan foto Anda menggunakan nama ini, atau ganti
                  "email": "naufalifal117@gmail.com",
                  "sameAs": [
                    "https://github.com/Floww08", 
                    "https://instagram.com/mnaufalrizzz"
                  ],
                  "description":
                    "M Naufal Rizal Firdaus adalah seorang Web Developer yang memiliki fokus pada React Ecosystem, Node.js, dan arsitektur keamanan.",
                  "knowsAbout": [
                    "Web Development",
                    "React Ecosystem",
                    "Node.js",
                    "Logic Architecture",
                    "Cybersecurity Concepts",
                    "Next.js",
                    "TypeScript"
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Jombang",
                    "addressRegion": "Jawa Timur",
                    "addressCountry": "Indonesia"
                  }
                }
              }
            ]),
          }}
        />
      </head>
      <body className={`${leagueSpartan.variable} font-sans antialiased`}>
        <NoiseOverlay />
        {/* Catatan Sistem: VibePlayer sengaja dipertahankan di RootLayout
          agar audio tidak terputus saat pengunjung berpindah halaman.
        */}
        <VibePlayer />
        {children}
        <Toaster position="top-center" richColors theme="dark" />
        <Analytics />
      </body>
    </html>
  )
}