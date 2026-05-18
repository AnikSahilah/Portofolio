import {
  SiLaravel,
  SiReact,
  SiCodeigniter,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiPhp,
  SiJavascript,
  SiFigma,
  SiGit,
  SiGithub,
  SiVite,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiPostman,
} from 'react-icons/si'

const skills = [
  {
    category: 'Frontend',
    color: 'sky',
    items: [
      { name: 'React.js', level: 75, icon: SiReact },
      { name: 'JavaScript', level: 80, icon: SiJavascript },
      { name: 'Tailwind CSS', level: 85, icon: SiTailwindcss },
      { name: 'Bootstrap', level: 85, icon: SiBootstrap },
      { name: 'Framer Motion', level: 70, icon: SiFramer },
      { name: 'Vite', level: 75, icon: SiVite },
    ],
  },
  {
    category: 'Backend',
    color: 'purple',
    items: [
      { name: 'Laravel', level: 85, icon: SiLaravel },
      { name: 'CodeIgniter', level: 80, icon: SiCodeigniter },
      { name: 'PHP', level: 85, icon: SiPhp },
      { name: 'Node.js', level: 60, icon: SiNodedotjs },
      { name: 'Express.js', level: 55, icon: SiExpress },
    ],
  },
  {
    category: 'Database',
    color: 'emerald',
    items: [
      { name: 'MySQL', level: 85, icon: SiMysql },
    ],
  },
  {
    category: 'Tools & Others',
    color: 'amber',
    items: [
      { name: 'Git', level: 80, icon: SiGit },
      { name: 'GitHub', level: 85, icon: SiGithub },
      { name: 'Figma', level: 65, icon: SiFigma },
      { name: 'Postman', level: 75, icon: SiPostman },
    ],
  },
]

export default skills
