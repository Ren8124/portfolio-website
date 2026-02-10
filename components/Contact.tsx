"use client"

import { Mail, Github, Linkedin, Download } from "lucide-react"

export default function Contact() {
    return (
        <div className="space-y-10">

            {/* SECTION HEADER */}
            <div>
                <h2 className="text-3xl font-semibold">
                    Contact
                </h2>

                <p className="text-white/60 mt-3 max-w-2xl">
                    Open to research collaborations, cybersecurity discussions,
                    graduate-level opportunities, and academic partnerships
                    in threat detection and forensic systems.
                </p>
            </div>

            {/* MAIN CONTACT CARD */}
            <div className="soc-panel max-w-3xl space-y-8">

                {/* ICON LINKS */}
                <div className="grid sm:grid-cols-3 gap-4">

                    <a
                        href="mailto:renpatel8124@gmail.com"
                        className="flex items-center gap-3 p-4 rounded-lg border border-white/10 bg-black/40 hover:border-emerald-400/50 hover:bg-black/60 transition group"
                    >
                        <Mail size={18} className="text-emerald-400" />
                        <span className="text-sm text-white/80 group-hover:text-white">
                            Email
                        </span>
                    </a>

                    <a
                        href="https://github.com/Ren8124"
                        target="_blank"
                        className="flex items-center gap-3 p-4 rounded-lg border border-white/10 bg-black/40 hover:border-emerald-400/50 hover:bg-black/60 transition group"
                    >
                        <Github size={18} className="text-emerald-400" />
                        <span className="text-sm text-white/80 group-hover:text-white">
                            GitHub
                        </span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/ren-patel08/"
                        target="_blank"
                        className="flex items-center gap-3 p-4 rounded-lg border border-white/10 bg-black/40 hover:border-emerald-400/50 hover:bg-black/60 transition group"
                    >
                        <Linkedin size={18} className="text-emerald-400" />
                        <span className="text-sm text-white/80 group-hover:text-white">
                            LinkedIn
                        </span>
                    </a>

                </div>

                {/* DETAILS */}
                <div className="grid md:grid-cols-2 gap-8 text-sm text-white/70">

                    <div>
                        <div className="text-xs font-mono text-emerald-400 mb-2">
                            Email
                        </div>
                        renpatel8124@gmail.com
                    </div>

                    <div>
                        <div className="text-xs font-mono text-emerald-400 mb-2">
                            Location
                        </div>
                        India — Open to relocation (Australia)
                    </div>

                    <div>
                        <div className="text-xs font-mono text-emerald-400 mb-2">
                            Research Focus
                        </div>
                        Real-time threat detection, SOC monitoring workflows,
                        and forensic logging architectures.
                    </div>

                    <div>
                        <div className="text-xs font-mono text-emerald-400 mb-2">
                            Availability
                        </div>
                        Open for Master's research programs (2026 intake)
                    </div>

                </div>

                {/* DOWNLOAD RESUME */}
                <div>
                    <a
                        href="/Ren_Patel_Resume.pdf"
                        download
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-emerald-400/40 bg-emerald-400/10 hover:bg-emerald-400/20 hover:border-emerald-400 transition"
                    >
                        <Download size={16} />
                        <span className="text-sm">
                            Download Resume
                        </span>
                    </a>
                </div>

            </div>

        </div>
    )
}
