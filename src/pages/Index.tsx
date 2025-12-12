import { useEffect, useState, useCallback } from 'react';
import { Background } from '@/components/portfolio/Background';
import { LeftSidebar, RightSidebar, MobileNav } from '@/components/portfolio/Sidebar';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { ExperienceSection } from '@/components/portfolio/ExperienceSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { TestimonialsSection } from '@/components/portfolio/TestimonialsSection';
import { SkillsSection } from '@/components/portfolio/SkillsSection';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { Footer } from '@/components/portfolio/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'experience', 'projects', 'testimonials', 'skills', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Background />
      
      {/* Sidebars */}
      <LeftSidebar onNavigate={scrollTo} />
      <RightSidebar activeSection={activeSection} onNavigate={scrollTo} />
      <MobileNav activeSection={activeSection} onNavigate={scrollTo} isScrolled={isScrolled} />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection onNavigate={scrollTo} />
        <ExperienceSection />
        <ProjectsSection />
        <TestimonialsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
