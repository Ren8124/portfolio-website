export default function About() {
    return (
        <div className="soc-panel space-y-6">

            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                Mission
            </div>

            <h3 className="text-xl font-semibold">
                Cybersecurity Operations Focus
            </h3>

            <p className="text-sm text-white/70 leading-relaxed">
                Building secure web architectures capable of detecting malicious
                payloads in real-time while generating structured forensic logs
                aligned with SOC monitoring workflows.
            </p>

            <div className="grid grid-cols-2 gap-4 text-xs text-white/60">
                <div>• SQL Injection Detection</div>
                <div>• Cross-Site Scripting Monitoring</div>
                <div>• HTTP Traffic Analysis</div>
                <div>• Digital Forensic Logging</div>
            </div>

        </div>
    )
}
