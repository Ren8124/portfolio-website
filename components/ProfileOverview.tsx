export default function ProfileOverview() {
    return (
        <div className="space-y-6">

            <div className="font-mono text-xs text-emerald-400">
                &gt; system.education --verify
            </div>

            <h3 className="text-2xl font-semibold">
                Academic Profile
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                <div className="soc-panel text-sm space-y-2">
                    <div className="font-semibold">B.Tech ICT</div>
                    <div className="text-white/60">
                        Pandit Deendayal Energy University (2022–2026)
                    </div>
                </div>

                <div className="soc-panel text-sm space-y-2">
                    <div className="font-semibold">Diploma</div>
                    <div className="text-white/60">
                        Computer Engineering | CGPA 9.17
                    </div>
                </div>

                <div className="soc-panel text-sm space-y-2">
                    <div className="font-semibold">Specialization</div>
                    <div className="text-white/60">
                        Cybersecurity & Secure Web Systems
                    </div>
                </div>

            </div>

        </div>
    )
}
