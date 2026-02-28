import Link from "next/link"
import { projects } from "@/data/projects"

export default function FeaturedProject() {
    return (
        <div id="projects" className="space-y-8">
            {projects.map((project) => (
                <div key={project.slug} className="soc-panel space-y-4">

                    {/* TERMINAL HEADER */}
                    <div className="font-mono text-xs text-emerald-400">
                        &gt; system.project --inspect
                    </div>

                    <h3 className="text-xl font-semibold">
                        {project.title}
                    </h3>

                    <p className="text-sm text-white/70">
                        {project.description}
                    </p>

                    {/* UNIQUE PREVIEW LOGS */}
                    <div className="bg-black/40 border border-emerald-400/20 p-4 rounded-md text-xs font-mono text-emerald-300 space-y-1">
                        {project.previewLogs.map((line, i) => (
                            <div key={i}>{line}</div>
                        ))}
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="flex gap-4 pt-2 text-sm">

                        <Link
                            href={`/projects/${project.slug}`}
                            className="text-emerald-400 hover:underline"
                        >
                            Read Full Analysis →
                        </Link>

                        <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-white transition"
                        >
                            View Repository
                        </a>

                    </div>

                </div>
            ))}
        </div>
    )
}