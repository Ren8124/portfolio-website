import { certifications, Certification } from "@/data/certifications"

export default function Certifications() {
    return (
        <div className="space-y-6">

            <h3 className="text-2xl font-semibold">
                Certifications
            </h3>

            <div className="grid gap-4">
                {certifications.map((cert: Certification) => (
                    <a
                        key={cert.name}
                        href={cert.verifyUrl}
                        target="_blank"
                        className="soc-panel hover:border-emerald-400/50 transition"
                    >
                        <h4 className="font-semibold">
                            {cert.name}
                        </h4>

                        <p className="text-sm text-white/60">
                            Issued by {cert.issuer}
                        </p>

                        <span className="text-xs font-mono text-emerald-400">
                            Verify Credential →
                        </span>
                    </a>
                ))}
            </div>

        </div>
    )
}