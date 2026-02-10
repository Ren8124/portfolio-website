"use client"

export default function Hero() {
    return (
        <div id="hero" className="space-y-8">

            <div className="font-mono text-sm text-emerald-400">
                &gt; quantum-shield --initialize <span className="cursor" />
            </div>

            <h1 className="text-5xl font-bold tracking-tight">
                Ren Patel
            </h1>

            <h2 className="text-xl text-white/70">
                Cybersecurity Operations & Threat Detection Systems
            </h2>

            <p className="text-white/60 max-w-3xl leading-relaxed">
                Focused on designing secure web architectures, detecting malicious HTTP
                patterns in real-time, and building forensic logging systems aligned
                with Security Operations Center workflows.
            </p>

            <div className="flex flex-wrap gap-8 text-sm text-white/60 pt-2">
                <span><strong>CGPA:</strong> 7.91</span>
                <span><strong>Certifications:</strong> IBM, Cisco SOC</span>
                <span><strong>Primary Stack:</strong> Python, React, TypeScript</span>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex gap-6 pt-6">

                <a
                    href="#contact"
                    className="px-6 py-3 rounded-lg bg-emerald-500/20 border border-emerald-400 text-emerald-400 hover:bg-emerald-500/30 transition"
                >
                    Contact
                </a>

                <a
                    href="/Ren_Patel_Resume.pdf"
                    download
                    className="px-6 py-3 rounded-lg border border-white/20 hover:border-white/50 text-white/80 hover:text-white transition"
                >
                    Download Resume
                </a>

            </div>

        </div>
    )
}
