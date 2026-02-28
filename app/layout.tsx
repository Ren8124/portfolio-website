import "./globals.css"
import Navbar from "@/components/Navbar"
import ClientSecurityBackground from "@/components/ClientSecurityBackground"
import ClientMouseGlow from "@/components/ClientMouseGlow"
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative bg-[#0A0F1A] text-white font-sans overflow-x-hidden">

        {/* Analytics */}
        <Analytics />

        {/* Background Layers (CLIENT ONLY) */}
        <ClientSecurityBackground />
        <ClientMouseGlow />

        {/* Grid Overlay */}
        <div className="cyber-grid" />

        {/* App Content */}
        <div className="relative z-10">
          <Navbar />

          <main className="max-w-6xl mx-auto px-6 pt-28 pb-20">
            {children}
          </main>
        </div>

      </body>
    </html>
  )
}