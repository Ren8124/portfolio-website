import "./globals.css"
import Navbar from "@/components/Navbar"
import SecurityBackground from "@/components/SecurityBackground"
import MouseGlow from "@/components/MouseGlow"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative bg-[#0A0F1A] text-white font-sans overflow-x-hidden">

        <SecurityBackground />
        <MouseGlow />
        <div className="cyber-grid" />

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
