import {
  SiLaravel,
  SiReact,
  SiCodeigniter,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiSqlite,
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
      { name: 'React.js', level: 100, icon: SiReact },
      { name: 'JavaScript', level: 100, icon: SiJavascript },
      { name: 'Tailwind CSS', level: 100, icon: SiTailwindcss },
      { name: 'Bootstrap', level: 100, icon: SiBootstrap },
      { name: 'Framer Motion', level: 100, icon: SiFramer },
      { name: 'Vite', level: 100, icon: SiVite },
    ],
  },
  {
    category: 'Backend',
    color: 'purple',
    items: [
      { name: 'Laravel', level: 100, icon: SiLaravel },
      { name: 'CodeIgniter', level: 100, icon: SiCodeigniter },
      { name: 'PHP', level: 100, icon: SiPhp },
      { name: 'Node.js', level: 100, icon: SiNodedotjs },
      { name: 'Express.js', level: 100, icon: SiExpress },
    ],
  },
  {
    category: 'Database',
    color: 'emerald',
    items: [
      { name: 'MySQL', level: 100, icon: SiMysql },
      { name: 'SQLite', level: 100, icon: SiSqlite },
    ],
  },
  {
    category: 'Tools & Others',
    color: 'amber',
    items: [
      { name: 'Git', level: 100, icon: SiGit },
      { name: 'GitHub', level: 100, icon: SiGithub },
      { name: 'Figma', level: 100, icon: SiFigma },
      { name: 'Postman', level: 100, icon: SiPostman },
    ],
  },
]

export default skills
