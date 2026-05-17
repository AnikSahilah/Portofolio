import { motion } from 'framer-motion'

const contacts = [
  {
    title: 'Email',
    value: 'aniksahilah821@gmail.com',
    link: 'mailto:aniksahilah821@gmail.com',
    icon: '✉️',
    color: 'sky',
  },

  {
    title: 'WhatsApp',
    value: '+62 857-0406-9931',
    link: 'https://wa.me/6285704069931',
    icon: '📱',
    color: 'emerald',
  },

  {
    title: 'GitHub',
    value: 'github.com/AnikSahilah',
    link: 'https://github.com/AnikSahilah',
    icon: '💻',
    color: 'purple',
  },
]

function ContactSection() {
  return (
    <section
      id="contact"
      className="relative px-6 py-32 overflow-hidden"
    >

      {/* Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-sky-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

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
              CONTACT
            </p>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Let’s Build
            <span className="text-sky-400"> Something Great</span>
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed mt-8">
            Interested in collaboration,
            freelance projects,
            or discussing web development and technology?
            Feel free to reach out.
          </p>

        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

        {contacts.map((contact, index) => (

            <motion.a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
                y: -8,
                scale: 1.02,
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition duration-500"
            >

            {/* Glow Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">

                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-purple-500/10 to-emerald-500/10"></div>

            </div>

            {/* Border Glow */}
            <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-sky-400/30 transition duration-500"></div>

            {/* Content */}
            <div className="relative z-10">

                {/* Icon */}
                <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition duration-500">

                {contact.icon}

                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold mb-4">
                {contact.title}
                </h3>

                {/* Value */}
                <p className="text-slate-400 leading-relaxed break-all text-lg">
                {contact.value}
                </p>

                {/* Bottom Arrow */}
                <div className="mt-10 flex items-center gap-2 text-sky-400 opacity-0 group-hover:opacity-100 transition duration-500">

                <span className="text-sm tracking-[0.2em]">
                    CONNECT
                </span>

                <span className="translate-x-0 group-hover:translate-x-2 transition duration-300">
                    →
                </span>

                </div>

            </div>

            </motion.a>

        ))}

        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 pt-10 border-t border-white/10 text-center"
        >

          <p className="text-slate-500">
            © 2026 AnikDev — Built with React.js & Tailwind CSS
          </p>

        </motion.div>

      </div>
    </section>
  )
}

export default ContactSection