export default function ResearchPage() {
    return (
        <div className="space-y-12 max-w-4xl mx-auto">

            {/* HEADER */}
            <section className="space-y-4">
                <p className="font-mono text-xs text-emerald-400">
                    &gt; research.profile --expand
                </p>

                <h1 className="text-4xl font-semibold">
                    Research Interests
                </h1>

                <p className="text-white/70 leading-relaxed">
                    My academic interests focus on building intelligent cybersecurity
                    systems capable of monitoring, analysing, and responding to threats
                    in real-time environments. I am particularly interested in defensive
                    security engineering and Security Operations Center (SOC) analytics.
                </p>
            </section>

            {/* WHY CYBERSECURITY */}
            <section className="glass p-6 rounded-xl space-y-4">
                <h2 className="text-xl font-semibold">
                    Why Cybersecurity
                </h2>

                <p className="text-white/70 leading-relaxed">
                    Modern digital infrastructure depends on continuous monitoring and
                    proactive defence mechanisms. Cybersecurity is no longer limited to
                    prevention but involves understanding attacker behaviour,
                    analysing system patterns, and improving resilience through data-driven
                    security practices.
                </p>
            </section>

            {/* RESEARCH AREAS */}
            <section className="glass p-6 rounded-xl space-y-6">
                <h2 className="text-xl font-semibold">
                    Areas of Interest
                </h2>

                <div className="space-y-5">

                    <div>
                        <h3 className="font-semibold text-emerald-400">
                            Threat Intelligence Automation
                        </h3>
                        <p className="text-white/70">
                            Developing automated systems capable of identifying malicious
                            behaviour patterns using log correlation and signature analysis.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-emerald-400">
                            SOC Analytics & Monitoring
                        </h3>
                        <p className="text-white/70">
                            Designing monitoring pipelines that transform raw security logs
                            into actionable incident intelligence for analysts.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-emerald-400">
                            Behavioral Anomaly Detection
                        </h3>
                        <p className="text-white/70">
                            Exploring detection techniques that identify deviations from
                            normal system behaviour to uncover advanced threats.
                        </p>
                    </div>

                </div>
            </section>

            {/* FUTURE GOALS */}
            <section className="glass p-6 rounded-xl space-y-4">
                <h2 className="text-xl font-semibold">
                    Future Academic Direction
                </h2>

                <p className="text-white/70 leading-relaxed">
                    Through postgraduate study, I aim to deepen my understanding of
                    cybersecurity analytics, distributed monitoring systems, and
                    intelligent threat detection frameworks while contributing to
                    research focused on scalable defensive security solutions.
                </p>
            </section>

        </div>
    )
}