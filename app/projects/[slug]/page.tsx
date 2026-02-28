import { projects } from "@/data/projects"
import { notFound } from "next/navigation"
import Link from "next/link"

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    const project = projects.find((p) => p.slug === slug)

    if (!project) return notFound()

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-3xl space-y-10">

                {/* BACK BUTTON */}
                <Link
                    href="/#projects"
                    className="text-emerald-400 text-sm font-mono hover:underline"
                >
                    ← Back to Portfolio
                </Link>

                {/* HEADER */}
                <div className="space-y-4 border-b border-white/10 pb-6">
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                        {project.title}
                    </h1>

                    <p className="text-white/70 text-lg leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* ANALYSIS SECTIONS */}
                <Section title="Overview" text={project.analysis.overview} />
                <Section title="Problem Context" text={project.analysis.problem} />
                <Section title="System Architecture" text={project.analysis.architecture} />
                <Section title="Implementation" text={project.analysis.implementation} />
                <Section title="Security Considerations" text={project.analysis.security} />
                <Section title="Engineering Challenges" text={project.analysis.challenges} />
                <Section title="Outcomes" text={project.analysis.outcomes} />
                <Section title="Future Direction" text={project.analysis.future} />

                {/* REPOSITORY BUTTON */}
                <div className="pt-6">
                    <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border border-emerald-400/40 px-6 py-3 rounded-lg
                       hover:bg-emerald-400/10 transition"
                    >
                        View Repository →
                    </a>
                </div>

            </div>
        </div>
    )
}

function Section({
    title,
    text,
}: {
    title: string
    text: string
}) {
    return (
        <div className="soc-panel space-y-3">
            <h2 className="text-xl font-semibold text-emerald-400">
                {title}
            </h2>
            <p className="text-white/80 leading-7">
                {text}
            </p>
        </div>
    )
}