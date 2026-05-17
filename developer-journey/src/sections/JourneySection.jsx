import { motion } from 'framer-motion'

const journeys = [
  {
    title: 'Started with PHP & Backend Development',

    description:
      'Began my web development journey by learning PHP, CodeIgniter, and Laravel while building full web applications and understanding backend architecture.',

    color: 'sky',
  },

  {
    title: 'Building Real-World Systems',

    description:
      'Developed clinic queue systems and decision support applications using AHP, TOPSIS, and SAW methods to solve real-world problems through structured logic.',

    color: 'purple',
  },

  {
    title: 'Exploring Modern Frontend Engineering',

    description:
      'Expanded into React.js ecosystem, interactive UI design, animation systems, and component-based architecture to create modern web experiences.',

    color: 'emerald',
  },
]

function JourneySection() {
  return (
    <section
      id="journey"
      className="relative px-6 py-32 overflow-hidden"
    >

      {/* Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-sky-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-5xl mx-auto relative z-10">

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
              JOURNEY
            </p>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Developer
            <span className="text-sky-400"> Journey</span>
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed mt-8">
            A continuous journey of building systems,
            solving problems,
            and exploring modern web technologies.
          </p>

        </motion.div>

        {/* Timeline */}
        <div className="relative mt-24">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-white/10"></div>

          <div className="space-y-16">

            {journeys.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-16"
              >

                {/* Dot */}
                <div className={`absolute left-0 top-2 w-8 h-8 rounded-full border-4 border-slate-950
                  ${
                    item.color === 'sky'
                      ? 'bg-sky-400'
                      : item.color === 'purple'
                      ? 'bg-purple-400'
                      : 'bg-emerald-400'
                  }
                `}
                ></div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-sky-400/20 transition duration-300"
                >

                  <h3 className="text-3xl font-bold mb-5">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed text-lg">
                    {item.description}
                  </p>

                </motion.div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  )
}

export default JourneySection