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
            <span className="text-sky-400"> Web Experiences</span>
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed mt-8">
            Transitioning from backend development into modern frontend
            engineering with a strong focus on interactive UI,
            clean architecture, and meaningful user experiences.
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
                BACKEND ROOTS
              </p>

              <h3 className="text-3xl font-bold mb-5 leading-snug">
                Started from Backend Development
              </h3>

              <p className="text-slate-400 leading-relaxed text-lg">
                My journey began with PHP, CodeIgniter,
                and Laravel where I learned backend logic,
                authentication systems, REST APIs,
                and scalable application architecture.
              </p>

            </motion.div>

            {/* Story Card */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-purple-400/40 transition duration-300"
            >

              <p className="text-purple-400 text-sm tracking-[0.2em] mb-4">
                FRONTEND JOURNEY
              </p>

              <h3 className="text-3xl font-bold mb-5 leading-snug">
                Exploring Interactive UI Development
              </h3>

              <p className="text-slate-400 leading-relaxed text-lg">
                Over time, I became interested in
                creating modern user experiences
                through React.js, animation,
                responsive layouts, and clean frontend architecture.
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
                Backend Foundation
              </h3>

              <p className="text-slate-400 leading-relaxed">
                Strong understanding of backend systems,
                API development, authentication,
                and database architecture.
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
                Modern Frontend
              </h3>

              <p className="text-slate-400 leading-relaxed">
                Learning React.js, Tailwind CSS,
                Framer Motion, and modern frontend workflows
                to create engaging user experiences.
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
                Problem Solving
              </h3>

              <p className="text-slate-400 leading-relaxed">
                Passionate about building clean,
                scalable, and meaningful digital products
                with thoughtful user experiences.
              </p>

            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection