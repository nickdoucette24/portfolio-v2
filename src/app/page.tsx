import { Hero } from "../components/home/Hero";
import { Summary } from "../components/home/Summary";
import { ProjectsSection } from "../components/home/ProjectsSection";
import { ExperienceSection } from "../components/home/ExperienceSection";
import { SkillsSection } from "../components/home/SkillsSection";
import { ContactSection } from "../components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Summary />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
