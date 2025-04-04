import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { CareerTimeline } from "@/components/career-timeline"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between" suppressHydrationWarning={true}>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CareerTimeline />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}

