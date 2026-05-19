import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiBookOpen } from 'react-icons/fi'
import klinik from '../assets/images/klinik.jpeg'
import pertanian from '../assets/images/pertanian.jpeg'
import mobil from '../assets/images/mobil.jpeg'
import ProjectModal from '../components/ProjectModal'

const projects = [
  {
    title: 'Clinic Queue Management System',
    category: 'Fullstack Web Application',
    description:
      'Developed a clinic queue management system to improve patient registration, queue tracking, and service efficiency through a responsive dashboard interface.',
    challenge:
      'Clinics often struggled with manual queue management, leading to long wait times, patient dissatisfaction, and inefficient staff workflows.',
    solution:
      'Built a digital queue system with real-time tracking, automated patient notifications, and an admin dashboard for staff to manage patient flow efficiently.',
    tech: ['Laravel', 'Tailwind CSS', 'MySQL'],
    image: klinik,
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Plant Selection Decision Support System',
    category: 'Decision Support System',
    description:
      'Built a decision support application for plant selection using AHP and TOPSIS methods to help generate accurate ranking and evaluation results based on multiple criteria.',
    challenge:
      'Farmers and agricultural businesses needed a systematic way to select the best plant varieties based on multiple weighted criteria like climate, soil, and market demand.',
    solution:
      'Implemented AHP (Analytic Hierarchy Process) for criteria weighting and TOPSIS for ranking alternatives, providing data-driven plant selection recommendations.',
    tech: ['Laravel', 'Tailwind CSS', 'MySQL', 'AHP', 'TOPSIS'],
    image: pertanian,
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Car Selection Decision Support System',
    category: 'Analytical Web System',
    description:
      'Created a car recommendation system using the SAW method to calculate and rank vehicle alternatives based on weighted decision criteria.',
    challenge:
      'Car buyers often felt overwhelmed by the number of vehicle options and lacked a structured way to compare alternatives based on their personal preferences.',
    solution:
      'Developed a SAW (Simple Additive Weighting) based recommendation engine that lets users input their priorities and get ranked vehicle suggestions.',
    tech: ['CodeIgniter', 'Bootstrap', 'MySQL', 'SAW'],
    image: mobil,
    liveLink: '#',
    githubLink: '#',
  },
]

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <>
      <section
        className="relative px-6 py-32 overflow-hidden"
      >
        {/* Glow */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-sky-500/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

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
                PROJECTS
              </p>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight text-white dark:text-white light:text-slate-900 transition-colors duration-300">
              Selected
              <span className="text-sky-400"> Works</span>
            </h2>

            <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-lg leading-relaxed mt-8 transition-colors duration-300">
              A collection of projects focused on scalable systems,
              modern frontend experiences,
              and real-world problem solving.
            </p>
          </motion.div>

          {/* Projects */}
          <div className="grid gap-8 mt-20">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group bg-white/5 dark:bg-white/5 light:bg-slate-50 backdrop-blur-sm border border-white/10 dark:border-white/10 light:border-slate-200 rounded-3xl overflow-hidden hover:border-sky-400/20 transition duration-300"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Project Image */}
                  <div className="relative overflow-hidden group/image min-h-[320px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition duration-700 group-hover/image:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-10 flex flex-col justify-between">
                    <div>
                      <p className="text-sky-400 text-sm tracking-[0.2em] mb-4">
                        {project.category}
                      </p>

                      <h3 className="text-3xl font-bold mb-5 text-white dark:text-white light:text-slate-900 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed text-lg transition-colors duration-300">
                        {project.description}
                      </p>
                    </div>

                    {/* Bottom */}
                    <div className="mt-10">
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-3 mb-8">
                        {project.tech.map((item, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 rounded-full bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200 text-sm text-slate-300 dark:text-slate-300 light:text-slate-700"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-4 flex-wrap">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 transition px-6 py-3 rounded-xl font-semibold text-white"
                        >
                          <FiExternalLink size={18} />
                          Live Demo
                        </a>

                        <button
                          onClick={() => openModal(project)}
                          className="inline-flex items-center gap-2 border border-white/10 dark:border-white/10 light:border-slate-300 hover:border-sky-400 transition px-6 py-3 rounded-xl text-white dark:text-white light:text-slate-900 cursor-pointer"
                        >
                          <FiBookOpen size={18} />
                          View Case Study
                        </button>

                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-white/10 dark:border-white/10 light:border-slate-300 hover:border-sky-400 transition px-6 py-3 rounded-xl text-white dark:text-white light:text-slate-900"
                        >
                          <FiGithub size={18} />
                          Source
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  )
}

export default ProjectsSection
