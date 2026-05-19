import { motion } from 'framer-motion'
import { useState } from 'react'
import skills from '../data/skills'
import { staggerContainer, staggerItem } from '../animations/pageTransition'

const colorMap = {
  sky: {
    border: 'hover:border-sky-400/40',
    bg: 'bg-sky-500/10',
    text: 'text-sky-400',
    bar: 'bg-sky-400',
  },
  purple: {
    border: 'hover:border-purple-400/40',
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    bar: 'bg-purple-400',
  },
  emerald: {
    border: 'hover:border-emerald-400/40',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    bar: 'bg-emerald-400',
  },
  amber: {
    border: 'hover:border-amber-400/40',
    bg: 'bg-amber-500/10',
    text: 'text-amber-400',
    bar: 'bg-amber-400',
  },
}

function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(null)

  return (
    <section
      className="relative px-6 py-32 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-sky-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-sky-400"></div>
            <p className="text-sky-400 tracking-[0.3em] text-sm font-semibold">
              SKILLS
            </p>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight text-white dark:text-white light:text-slate-900 transition-colors duration-300">
            Tech Stack
            <span className="text-sky-400"> & Expertise</span>
          </h2>

          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-lg leading-relaxed mt-8 transition-colors duration-300">
            Technologies and tools I use to build modern,
            scalable web applications from frontend to backend.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mt-12">
          {skills.map((cat) => {
            const colors = colorMap[cat.color]
            const isActive = activeCategory === cat.category

            return (
              <button
                key={cat.category}
                onClick={() =>
                  setActiveCategory(
                    isActive ? null : cat.category
                  )
                }
                className={`px-5 py-2.5 rounded-xl border text-sm font-medium transition cursor-pointer ${
                  isActive
                    ? `${colors.bg} ${colors.text} ${colors.border.replace('hover:', '')}`
                    : 'border-white/10 dark:border-white/10 light:border-slate-300 text-slate-400 dark:text-slate-400 light:text-slate-600 hover:border-sky-400/40'
                }`}
              >
                {cat.category}
              </button>
            )
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory || 'all'}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {skills.map((category) => {
            const colors = colorMap[category.color]
            const isFiltered =
              activeCategory && activeCategory !== category.category

            if (isFiltered) return null

            return category.items.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className={`group bg-white/5 dark:bg-white/5 light:bg-slate-50 backdrop-blur-sm border border-white/10 dark:border-white/10 light:border-slate-200 rounded-2xl p-6 ${colors.border} transition duration-300`}
              >
                <div className="flex items-center gap-4 mb-4">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center text-2xl ${colors.text}`}
                  >
                    <skill.icon />
                  </div>

                  {/* Name & Category */}
                  <div>
                    <h3 className="text-lg font-semibold text-white dark:text-white light:text-slate-900 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className={`text-sm ${colors.text}`}>
                      {category.category}
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 rounded-full bg-white/5 dark:bg-white/5 light:bg-slate-200 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={`h-full rounded-full ${colors.bar}`}
                  />
                </div>

                <p className="text-slate-500 dark:text-slate-500 light:text-slate-400 text-sm mt-2 text-right">
                  {skill.level}%
                </p>
              </motion.div>
            ))
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
