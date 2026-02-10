export default function FeaturedProject() {
    return (
        <div className="soc-panel space-y-6">

            <div className="font-mono text-xs text-emerald-400">
                &gt; system.project --inspect
            </div>

            <h3 className="text-xl font-semibold">
                Web Attack Detection & Forensic Logging System
            </h3>

            <p className="text-sm text-white/70">
                Real-time HTTP threat detection system identifying SQL Injection,
                XSS, phishing, and directory traversal attacks with structured
                forensic logging.
            </p>

            <div className="bg-black/40 p-4 rounded-md text-xs font-mono text-white/60">
                [DETECTED] SQL Injection Attempt<br />
                [SOURCE IP] 192.168.0.14<br />
                [ACTION] Request Blocked<br />
                [FORENSIC LOG] FLS-2025-0012
            </div>

        </div>
    )
}
