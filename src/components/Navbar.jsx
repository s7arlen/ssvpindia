import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'ABOUT', to: '/about' },
  { label: 'OUR WORK', to: '/activities' },
  { label: 'OUR NETWORK', to: '/national-council' },
  { label: 'STORIES', to: '/stories' },
  { label: 'RESOURCES', to: '/resources' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="site-header scrolled">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link to="/" className="brand" aria-label="SSVP India home">
          <img src="/ssvpindia/ssvp-logo.png" alt="SSVP Logo" className="brand-logo" />
        </Link>

        <div className="nav-links desktop-nav" aria-label="Desktop navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="nav-link nav-link-cta">
            CONTACT
          </NavLink>
          <Link to="/contact" className="join-button">
            JOIN US <span aria-hidden="true">→</span>
          </Link>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-panel"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            <div className="mobile-panel-inner">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <NavLink to="/contact" className="mobile-link" onClick={() => setMobileOpen(false)}>
                CONTACT
              </NavLink>
              <Link to="/contact" className="mobile-cta" onClick={() => setMobileOpen(false)}>
                JOIN US
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
