import Hero from "@/components/Hero"
import ProfileOverview from "@/components/ProfileOverview"
import SecurityLayers from "@/components/SecurityLayers"
import Experience from "@/components/Experience"
import FeaturedProject from "@/components/FeaturedProject"
import ResearchInterests from "@/components/ResearchInterests"
import Certifications from "@/components/Certifications"
import Skills from "@/components/Skills"
import About from "@/components/About"
import CoreDomains from "@/components/CoreDomains"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
    return (
        <div className="flex flex-col gap-16">

            {/* HERO */}
            <Section id="hero">
                <Hero />
            </Section>

            {/* ABOUT + ACADEMIC OVERVIEW */}
            <Section id="about">
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    <About />
                    <ProfileOverview />
                </div>

                <div className="mt-10">
                    <CoreDomains />
                </div>
            </Section>

            {/* SECURITY ARCHITECTURE */}
            <Section id="architecture">
                <SecurityLayers />
            </Section>

            {/* PROJECT + EXPERIENCE */}
            <Section id="experience">
                <div className="grid lg:grid-cols-2 gap-10">
                    <FeaturedProject />
                    <Experience />
                </div>
            </Section>

            {/* RESEARCH */}
            <Section id="research">
                <ResearchInterests />
            </Section>

            {/* CERTIFICATIONS + SKILLS */}
            <Section id="certifications">
                <div className="grid lg:grid-cols-2 gap-10">
                    <Certifications />
                    <Skills />
                </div>
            </Section>

            {/* CONTACT */}
            <Section id="contact">
                <Contact />
            </Section>

            <Footer />

        </div>
    )
}

/* SECTION WRAPPER */
function Section({
    children,
    id,
}: {
    children: React.ReactNode
    id: string
}) {
    return (
        <section
            id={id}
            className="section-box scroll-mt-32"
        >
            {children}
        </section>
    )
}
