import HeroSection from '../components/refined/HeroSection';
import ProjectsSection from '../components/refined/ProjectsSection';
import AboutSection from '../components/refined/AboutSection';
import ExperienceSection from '../components/refined/ExperienceSection';
import ContactSection from '../components/refined/ContactSection';

export default function HomePage() {
  return (
    <main className="lg:ml-64">
      <div className="max-w-5xl mx-auto px-6 lg:px-16 py-20">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </main>
  );
}
