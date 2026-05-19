import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import JourneySection from './sections/JourneySection'
import ProjectsSection from './sections/ProjectsSection'
import ContactSection from './sections/ContactSection'
import ScrollToTop from './components/ScrollToTop'
import LazySection from './components/LazySection'

function App() {
  return (
    <ThemeProvider>
      <main className="bg-slate-950 dark:bg-slate-950 light:bg-slate-50 text-white dark:text-white light:text-slate-900 transition-colors duration-300 min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />

        <LazySection id="skills">
          <SkillsSection />
        </LazySection>

        <LazySection id="journey">
          <JourneySection />
        </LazySection>

        <LazySection id="projects">
          <ProjectsSection />
        </LazySection>

        <LazySection id="contact">
          <ContactSection />
        </LazySection>

        <ScrollToTop />
      </main>
    </ThemeProvider>
  )
}

export default App
