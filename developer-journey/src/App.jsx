import HeroSection from './sections/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './sections/AboutSection'
import ProjectsSection from './sections/ProjectsSection'
import JourneySection from './sections/JourneySection'
import ContactSection from './sections/ContactSection'

function App() {
  return (
    <main className="bg-slate-950 text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}

export default App