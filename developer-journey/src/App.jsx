import HeroSection from './sections/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './sections/AboutSection'

function App() {
  return (
    <main className="bg-slate-950 text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
    </main>
  )
}

export default App