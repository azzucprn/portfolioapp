import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-xl font-semibold tracking-tight text-slate-800">Portfolio</a>

          <div className="flex items-center gap-2">
            <ul className="hidden md:flex items-center gap-6 text-slate-700">
              <li><a className="hover:text-slate-900" href="#projects">Projects</a></li>
              <li><a className="hover:text-slate-900" href="#contact">Contact</a></li>
            </ul>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
            >
              <svg
                className={`h-6 w-6 transition-transform ${isOpen ? 'rotate-90' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} grid transition-[grid-template-rows] duration-200 ease-in-out md:hidden`}>
          <div className="overflow-hidden">
            <ul className="space-y-2 pb-4 text-slate-700">
              <li><a className="block rounded-md px-2 py-2 hover:bg-slate-100" href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
              <li><a className="block rounded-md px-2 py-2 hover:bg-slate-100" href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}