export default function SecurityLayers() {
    const layers = [
        {
            title: "Input Validation Layer",
            desc: "Sanitization, request filtering, payload inspection, and schema enforcement to prevent injection attacks.",
            tech: "Regex Filters • Schema Validation • Rate Limiting",
        },
        {
            title: "Threat Detection Engine",
            desc: "Pattern matching and anomaly detection for identifying malicious HTTP traffic in real-time.",
            tech: "Signature Matching • Heuristic Analysis • Log Correlation",
        },
        {
            title: "Forensic Logging Module",
            desc: "Structured log generation for post-incident analysis and compliance tracking.",
            tech: "Event Tagging • Incident ID Mapping • Secure Log Storage",
        },
        {
            title: "Access Control Enforcement",
            desc: "Authentication, authorization, and privilege validation across application layers.",
            tech: "JWT • Role-Based Access Control • Token Verification",
        },
    ]

    return (
        <div className="space-y-10">

            <div>
                <h3 className="text-2xl font-semibold">
                    Security Architecture Layers
                </h3>
                <p className="text-white/60 text-sm mt-2 max-w-2xl">
                    Layered defense model designed for real-time web attack detection and structured incident response workflows.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {layers.map((layer) => (
                    <div key={layer.title} className="soc-panel space-y-4 hover:scale-[1.02] transition">

                        <h4 className="font-semibold text-lg">
                            {layer.title}
                        </h4>

                        <p className="text-sm text-white/70">
                            {layer.desc}
                        </p>

                        <div className="text-xs text-emerald-400 font-mono">
                            {layer.tech}
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}
