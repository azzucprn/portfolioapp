import './navbar.css'

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary">
        <a href="#" className="brand">Portfolio</a>

        <input id="nav-toggle" type="checkbox" className="nav-checkbox" aria-label="Toggle menu" />
        <label className="nav-toggle" htmlFor="nav-toggle" aria-hidden="true">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </label>

        <ul className="nav-links">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}