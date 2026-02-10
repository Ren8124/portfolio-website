export default function CoreDomains() {
    const domains = [
        "Web Application Security",
        "Threat Detection Engineering",
        "Digital Forensics",
        "SOC Monitoring Workflows"
    ]

    return (
        <div className="soc-panel">

            <div className="panel-label">
                CORE DOMAINS
            </div>

            <h3 className="panel-title">
                Primary Areas of Focus
            </h3>

            <div className="grid grid-cols-2 gap-3 mt-4 text-sm text-white/70">
                {domains.map((d) => (
                    <div
                        key={d}
                        className="px-4 py-2 rounded-lg bg-white/5 border border-white/10"
                    >
                        {d}
                    </div>
                ))}
            </div>

        </div>
    )
}
