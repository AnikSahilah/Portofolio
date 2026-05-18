import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [activeSection, setActiveSection] = useState('')
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  // Smooth scroll handler
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const target = document.getElementById(targetId)

    if (target && window.lenis) {
      window.lenis.scrollTo(target, { offset: -80 })
    } else if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    setIsMobileOpen(false)
  }

  // Intersection Observer for active section
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace('#', ''))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/70 dark:bg-slate-950/70 light:bg-white/70 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            if (window.lenis) {
              window.lenis.scrollTo(0, { duration: 1.2 })
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
          className="text-xl font-bold hover:text-sky-400 transition"
        >
          <span className="text-sky-400">{'<'}</span>
          AnikDev
          <span className="text-sky-400">{'/>'}</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`transition relative ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-sky-400'
                    : 'text-slate-300 hover:text-sky-400'
                }`}
              >
                {item.label}
                {activeSection === item.href.replace('#', '') && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-sky-400 rounded-full"
                  />
                )}
              </a>
            </li>
          ))}

          {/* Theme Toggle */}
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-slate-700 dark:border-slate-700 light:border-slate-300 hover:border-sky-400 transition text-slate-300 hover:text-sky-400"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-slate-700 dark:border-slate-700 light:border-slate-300 hover:border-sky-400 transition text-slate-300 hover:text-sky-400"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-2 rounded-xl border border-slate-700 dark:border-slate-700 light:border-slate-300 hover:border-sky-400 transition text-slate-300 hover:text-sky-400"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <HiX size={20} /> : <HiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-950/95 dark:bg-slate-950/95 light:bg-white/95 backdrop-blur-md overflow-hidden"
          >
            <ul className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block py-2 text-lg transition ${
                      activeSection === item.href.replace('#', '')
                        ? 'text-sky-400'
                        : 'text-slate-300 hover:text-sky-400'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
