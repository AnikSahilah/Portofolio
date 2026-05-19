import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
} from 'react-icons/fi'

const contacts = [
  {
    title: 'Email',
    value: 'aniksahilah821@gmail.com',
    link: 'mailto:aniksahilah821@gmail.com',
    icon: FiMail,
    color: 'sky',
  },
  {
    title: 'WhatsApp',
    value: '+62 857-0406-9931',
    link: 'https://wa.me/6285704069931',
    icon: FiPhone,
    color: 'emerald',
  },
  {
    title: 'GitHub',
    value: 'github.com/AnikSahilah',
    link: 'https://github.com/AnikSahilah',
    icon: FiGithub,
    color: 'purple',
  },
  {
    title: 'LinkedIn',
    value: 'linkedin.com/in/anik-sahilah',
    link: 'https://www.linkedin.com/in/anik-sahilah-5485bb253?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    icon: FiLinkedin,
    color: 'sky',
  },
  {
    title: 'Instagram',
    value: '@aniksahilah',
    link: 'https://instagram.com/shlh_19',
    icon: FiInstagram,
    color: 'amber',
  },
]

const colorMap = {
  sky: {
    border: 'hover:border-sky-400/40',
    bg: 'bg-sky-500/10',
    text: 'text-sky-400',
    gradient: 'from-sky-500/10 via-purple-500/10 to-emerald-500/10',
  },
  emerald: {
    border: 'hover:border-emerald-400/40',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    gradient: 'from-emerald-500/10 via-sky-500/10 to-purple-500/10',
  },
  purple: {
    border: 'hover:border-purple-400/40',
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    gradient: 'from-purple-500/10 via-emerald-500/10 to-sky-500/10',
  },
  amber: {
    border: 'hover:border-amber-400/40',
    bg: 'bg-amber-500/10',
    text: 'text-amber-400',
    gradient: 'from-amber-500/10 via-sky-500/10 to-purple-500/10',
  },
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: '', message: '' })

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.',
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly.',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
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

          <h2 className="text-5xl md:text-7xl font-bold leading-tight text-white dark:text-white light:text-slate-900 transition-colors duration-300">
            Let's Build
            <span className="text-sky-400"> Something Great</span>
          </h2>

          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-lg leading-relaxed mt-8 transition-colors duration-300">
            Interested in collaboration,
            freelance projects,
            or discussing web development and technology?
            Feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Cards + Form */}
        <div className="grid lg:grid-cols-5 gap-8 mt-20">
          {/* Left: Contact Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
            {contacts.map((contact, index) => {
              const colors = colorMap[contact.color]
              const Icon = contact.icon

              return (
                <motion.a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 dark:border-white/10 light:border-slate-200 bg-white/5 dark:bg-white/5 light:bg-white backdrop-blur-xl p-5 transition duration-500 ${colors.border}`}
                >
                  {/* Glow Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient}`}></div>
                  </div>

                  {/* Border Glow */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-sky-400/30 transition duration-500"></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center gap-3">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center ${colors.text} group-hover:scale-110 transition duration-500`}>
                      <Icon size={22} />
                    </div>

                    <div className="min-w-0 w-full">
                      <h3 className="text-sm font-semibold text-white dark:text-white light:text-slate-900 transition-colors duration-300">
                        {contact.title}
                      </h3>
                      <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 truncate transition-colors duration-300 mt-0.5">
                        {contact.value}
                      </p>
                    </div>

                    <div className="text-sky-400 opacity-0 group-hover:opacity-100 transition duration-500">
                      <span className="translate-y-0 group-hover:-translate-y-0.5 inline-block transition duration-300 text-xs">
                        →
                      </span>
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white/5 dark:bg-white/5 light:bg-white backdrop-blur-sm border border-white/10 dark:border-white/10 light:border-slate-200 rounded-3xl p-8 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-6 text-white dark:text-white light:text-slate-900 transition-colors duration-300">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm text-slate-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-50 border border-white/10 dark:border-white/10 light:border-slate-200 text-white dark:text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-sky-400 transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm text-slate-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-50 border border-white/10 dark:border-white/10 light:border-slate-200 text-white dark:text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-sky-400 transition"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm text-slate-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-50 border border-white/10 dark:border-white/10 light:border-slate-200 text-white dark:text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-sky-400 transition"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm text-slate-400 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Your message..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-50 border border-white/10 dark:border-white/10 light:border-slate-200 text-white dark:text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-sky-400 transition resize-none"
                  />
                </div>

                {/* Status Message */}
                {status.message && (
                  <div
                    className={`flex items-center gap-2 p-4 rounded-xl text-sm ${
                      status.type === 'success'
                        ? 'bg-emerald-500/10 border border-emerald-400/30 text-emerald-400'
                        : 'bg-red-500/10 border border-red-400/30 text-red-400'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <FiCheckCircle size={18} />
                    ) : (
                      <FiAlertCircle size={18} />
                    )}
                    {status.message}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 disabled:bg-sky-500/50 disabled:cursor-not-allowed transition px-6 py-3.5 rounded-xl font-semibold text-white cursor-pointer"
                >
                  {isLoading ? (
                    <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <FiSend size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 pt-10 border-t border-white/10 dark:border-white/10 light:border-slate-200 text-center"
        >
          <p className="text-slate-500 dark:text-slate-500 light:text-slate-400 transition-colors duration-300">
            © 2026 AnikDev — Built with React.js & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
