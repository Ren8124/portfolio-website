"use client"

import { useEffect, useState } from "react"

const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "architecture", label: "Architecture" },
    { id: "experience", label: "Experience" },
    { id: "research", label: "Research" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
]


export default function Navbar() {
    const [active, setActive] = useState("hero")

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id)
                    }
                })
            },
            { threshold: 0.4 }
        )

        sections.forEach((section) => {
            const el = document.getElementById(section.id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <nav className="fixed top-0 w-full backdrop-blur bg-black/40 z-50 border-b border-white/5">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                <div className="font-mono text-sm text-emerald-400">
                    SOC-INTERFACE v1.0
                </div>

                <div className="flex gap-8 text-sm">
                    {sections.map((sec) => (
                        <a
                            key={sec.id}
                            href={`#${sec.id}`}
                            className={`transition ${active === sec.id
                                ? "text-emerald-400"
                                : "text-white/60 hover:text-white"
                                }`}
                        >
                            {sec.label}
                        </a>
                    ))}
                </div>

            </div>
        </nav>
    )
}
