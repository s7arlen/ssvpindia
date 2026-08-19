import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'ABOUT', to: '/about' },
  { label: 'OUR WORK', to: '/activities' },
  { label: 'OUR NETWORK', to: '/national-council' },
  { label: 'STORIES', to: '/stories' },
  { label: 'RESOURCES', to: '/resources' },
  { label: 'CONTACT', to: '/contact' },
]

function DesktopNavItem({ item, hoveredPath, setHoveredPath, currentPath }) {
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0, isHovered: false })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isHovered: true,
    })
  }

  const handleMouseLeave = () => {
    setSpotlightPos((prev) => ({ ...prev, isHovered: false }))
    setHoveredPath(null)
  }

  const handleMouseEnter = () => {
    setHoveredPath(item.to)
  }

  const activeTarget = hoveredPath || currentPath
  const isSelected = activeTarget === item.to

  return (
    <NavLink
      to={item.to}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={({ isActive }) =>
        `relative px-3 py-2 text-[0.7rem] tracking-[0.18em] font-semibold uppercase transition-colors duration-200 rounded-lg group ${
          isActive ? 'text-burgundy active' : 'text-charcoal/80 hover:text-burgundy'
        }`
      }
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Mouse Spotlight Glow */}
      {spotlightPos.isHovered && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-lg"
          style={{
            background: `radial-gradient(60px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(110, 29, 42, 0.12), transparent 80%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      <span className="relative z-10">{item.label}</span>

      {/* Magnetic Underline Indicator */}
      {isSelected && (
        <motion.div
          layoutId="magnetic-underline"
          className="absolute bottom-0 left-2 right-2 h-[2.5px] bg-burgundy rounded-full shadow-[0_1px_6px_rgba(110,29,42,0.4)]"
          transition={{ type: 'spring', stiffness: 450, damping: 32 }}
        />
      )}
    </NavLink>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hoveredPath, setHoveredPath] = useState(null)
  const [ctaHovered, setCtaHovered] = useState(false)
  const location = useLocation()

  return (
    <header className="site-header scrolled">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link to="/" className="brand" aria-label="SSVP India home">
          <img src="/ssvpindia/ssvp-logo.png" alt="SSVP Logo" className="brand-logo" />
        </Link>

        <div
          className="nav-links desktop-nav"
          aria-label="Desktop navigation"
          onMouseLeave={() => setHoveredPath(null)}
        >
          {navItems.map((item) => (
            <DesktopNavItem
              key={item.to}
              item={item}
              hoveredPath={hoveredPath}
              setHoveredPath={setHoveredPath}
              currentPath={location.pathname}
            />
          ))}

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onHoverStart={() => setCtaHovered(true)}
            onHoverEnd={() => setCtaHovered(false)}
          >
            <Link to="/contact" className="join-button shadow-sm hover:shadow-md">
              JOIN US{' '}
              <motion.span
                aria-hidden="true"
                animate={{ x: ctaHovered ? 4 : 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
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

