export default function Footer() {
    return (
        <footer className="mt-20 border-t border-white/5 pt-8 text-sm text-white/50">

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                <div className="font-mono text-emerald-400">
                    SOC-INTERFACE v1.0
                </div>

                <div>
                    © {new Date().getFullYear()} Ren Patel — Cybersecurity Portfolio
                </div>

            </div>

        </footer>
    )
}