import { HeroSection } from '@/sections/hero/HeroSection';
import { WorksSection } from '@/sections/works/WorksSection';
import { ThinkingSection } from '@/sections/thinking/ThinkingSection';
import { ProjectsSection } from '@/sections/projects/ProjectsSection';
import { NotebookSection } from '@/sections/notebook/NotebookSection';
import { AboutSection } from '@/sections/about/AboutSection';
import { ContactSection } from '@/sections/contact/ContactSection';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-text-primary selection:bg-primary/30 selection:text-primary">
      {/* Navigation is embedded in HeroSection */}
      <main className="flex-1">
        <HeroSection />
        <WorksSection />
        <ThinkingSection />
        <ProjectsSection />
        <NotebookSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
