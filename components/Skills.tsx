export default function Skills() {
    return (
        <div className="space-y-6">

            <h3 className="text-xl font-semibold">
                Technical Ecosystem
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                {[
                    "Wireshark",
                    "Burp Suite",
                    "Nmap",
                    "Kali Linux",
                    "Python",
                    "React",
                    "TypeScript",
                    "MongoDB"
                ].map((skill) => (
                    <div key={skill} className="soc-panel text-center">
                        {skill}
                    </div>
                ))}
            </div>

        </div>
    )
}
