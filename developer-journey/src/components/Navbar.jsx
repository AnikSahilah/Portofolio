function Navbar() {
  const navItems = [
    'About',
    'Journey',
    'Projects',
    'Contact',
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl font-bold">
          <span className="text-sky-400">&lt;</span>
          AnikDev
          <span className="text-sky-400">/&gt;</span>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 hover:text-sky-400 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

      </nav>
    </header>
  )
}

export default Navbar