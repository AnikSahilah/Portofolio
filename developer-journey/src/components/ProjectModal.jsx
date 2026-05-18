import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiExternalLink, FiGithub } from 'react-icons/fi'

function ProjectModal({ project, isOpen, onClose }) {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        >
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-950 dark:bg-slate-950 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-2xl transition-colors duration-300"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100/80 hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-200 transition text-slate-400 hover:text-white cursor-pointer"
            >
              <FiX size={20} />
            </button>

            {/* Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

              {/* Category Badge */}
              <div className="absolute bottom-6 left-6">
                <span className="px-4 py-2 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-400 text-sm font-medium">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white dark:text-white light:text-slate-900 transition-colors duration-300">
                {project.title}
              </h2>

              {/* Description */}
              <div className="space-y-4 mb-8">
                <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-lg leading-relaxed transition-colors duration-300">
                  {project.description}
                </p>

                {project.challenge && (
                  <div>
                    <h4 className="text-sky-400 font-semibold mb-2">
                      The Challenge
                    </h4>
                    <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                )}

                {project.solution && (
                  <div>
                    <h4 className="text-sky-400 font-semibold mb-2">
                      The Solution
                    </h4>
                    <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-sm tracking-[0.2em] text-slate-500 mb-4">
                  TECH STACK
                </h4>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200 text-sm text-slate-300 dark:text-slate-300 light:text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6 border-t border-white/10 dark:border-white/10 light:border-slate-200">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 transition px-6 py-3 rounded-xl font-semibold text-white"
                  >
                    <FiExternalLink size={18} />
                    Live Demo
                  </a>
                )}

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-white/10 dark:border-white/10 light:border-slate-300 hover:border-sky-400 transition px-6 py-3 rounded-xl text-white dark:text-white light:text-slate-900"
                  >
                    <FiGithub size={18} />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
