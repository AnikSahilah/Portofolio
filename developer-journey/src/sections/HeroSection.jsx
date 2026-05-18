import { motion } from 'framer-motion'
import TypingText from '../components/TypingText'

function HeroSection() {
  const handleScrollToProjects = () => {
    const target = document.getElementById('projects')
    if (target && window.lenis) {
      window.lenis.scrollTo(target, { offset: -80 })
    } else if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleDownloadCV = () => {
    // Try to download resume.pdf, fallback to alert if not available
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Anik_Sahilah_CV.pdf'
    link.click()
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-sky-500/20 blur-3xl rounded-full top-20 left-20"></div>
      <div className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full bottom-20 right-20"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl relative z-10"
      >
        {/* Terminal Window */}
        <div className="bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 rounded-2xl shadow-2xl overflow-hidden transition-colors duration-300">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 dark:bg-slate-800 light:bg-slate-100 border-b border-slate-700 dark:border-slate-700 light:border-slate-200">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>

            <span className="text-slate-400 text-sm ml-4 font-mono">
              developer-journey.sh
            </span>
          </div>

          {/* Terminal Content */}
          <div className="p-8 font-mono">
            <TypingText />

            <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight text-white dark:text-white light:text-slate-900 transition-colors duration-300">
              Hi, I'm
              <span className="text-sky-400"> Anik Sahilah</span>
            </h1>

            <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 mt-6 text-lg leading-relaxed transition-colors duration-300">
              Fullstack web developer experienced in building
              scalable web applications with Laravel and CodeIgniter,
              currently exploring modern React ecosystems
              and interactive frontend experiences.
            </p>

            <div className="flex gap-4 mt-10 flex-wrap">
              <button
                onClick={handleScrollToProjects}
                className="bg-sky-500 hover:bg-sky-400 transition px-6 py-3 rounded-xl font-semibold cursor-pointer"
              >
                View Projects
              </button>

              <button
                onClick={handleDownloadCV}
                className="border border-slate-700 dark:border-slate-700 light:border-slate-300 hover:border-sky-400 transition px-6 py-3 rounded-xl cursor-pointer text-white dark:text-white light:text-slate-900"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center">
          <p className="text-slate-500 text-sm mb-2">
            Scroll Down
          </p>

          <div className="w-6 h-10 border border-slate-600 rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-slate-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
