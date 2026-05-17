import { motion } from 'framer-motion'

function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center px-6 py-32 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-sky-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* Section Header */}
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
              ABOUT ME
            </p>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Crafting Modern
            <span className="text-sky-400"> with Modern UI</span>
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed mt-8">
            Fullstack web developer with experience building
            real-world applications using Laravel and CodeIgniter,
            currently expanding into the modern React ecosystem
            to create more interactive and engaging user experiences.
          </p>

        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 mt-24">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {/* Story Card */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-sky-400/40 transition duration-300"
            >

              <p className="text-sky-400 text-sm tracking-[0.2em] mb-4">
                FULLSTACK EXPERIENCE
              </p>

              <h3 className="text-3xl font-bold mb-5 leading-snug">
                Developing Real-World Applications
              </h3>

              <p className="text-slate-400 leading-relaxed text-lg">
                  Experienced in building complete web applications
                  using Laravel and CodeIgniter,
                  including clinic queue systems,
                  decision support systems,
                  authentication flows,
                  and database-driven platforms.
              </p>

            </motion.div>

            {/* Story Card */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-purple-400/40 transition duration-300"
            >

              <p className="text-purple-400 text-sm tracking-[0.2em] mb-4">
                MODERN REACT ECOSYSTEM
              </p>

              <h3 className="text-3xl font-bold mb-5 leading-snug">
                Exploring Interactive Frontend Engineering
              </h3>

              <p className="text-slate-400 leading-relaxed text-lg">
                  Currently focusing on React.js,
                  component-based architecture,
                  smooth animations,
                  and modern frontend workflows
                  to create responsive and visually engaging interfaces.
              </p>

            </motion.div>

          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {/* Card */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-sky-400/40 transition duration-300"
            >

              <div className="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center mb-6 text-2xl">
                ⚡
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                System Architecture
              </h3>

              <p className="text-slate-400 leading-relaxed">
                Experienced in developing scalable backend systems,
                RESTful APIs, authentication flows,
                and structured database architecture
                for real-world web applications.
              </p>

            </motion.div>

            {/* Card */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-purple-400/40 transition duration-300"
            >

              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 text-2xl">
                🚀
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                Interactive UI Development
              </h3>

              <p className="text-slate-400 leading-relaxed">
                Building responsive and interactive interfaces
                using React.js, Tailwind CSS,
                and animation-driven user experiences
                with modern frontend architecture.
              </p>

            </motion.div>

            {/* Card */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-emerald-400/40 transition duration-300"
            >

              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 text-2xl">
                💡
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                Scalable Thinking
              </h3>

              <p className="text-slate-400 leading-relaxed">
                Focused on creating scalable applications,
                maintainable code structures,
                and efficient solutions
                that solve real-world problems.
              </p>

            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection