import { Link } from 'react-router-dom'
import { ExternalLink, Mail, MapPin, Phone, Zap } from 'lucide-react'

const footerLinks = {
  about: [
    { label: 'Our Story', to: '/about' },
    { label: 'Blessed Frederic Ozanam', to: '/founder' },
    { label: 'St. Vincent de Paul', to: '/patron' },
    { label: 'Our Mission', to: '/activities' },
  ],
  network: [
    { label: 'National Council', to: '/national-council' },
    { label: 'Central Councils', to: '/central-councils' },
    { label: 'Conferences', to: '/national-council' },
    { label: 'Find a Council', to: '/central-councils' },
  ],
  involve: [
    { label: 'Become a Vincentian', to: '/contact' },
    { label: 'Volunteer', to: '/contact' },
    { label: 'Donate', to: '/contact' },
    { label: 'Support Our Work', to: '/activities' },
  ],
  resources: [
    { label: 'News', to: '/stories' },
    { label: 'Events', to: '/events' },
    { label: 'ReachOut', to: '/resources' },
    { label: 'Annual Reports', to: '/resources' },
  ],
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-shell">
        <div className="footer-brand">
          <div className="brand footer-brand-mark">
            <img src="/ssvp-logo.png" alt="SSVP Logo" className="brand-logo" />
            <span className="brand-mark">SSVP</span>
            <span className="brand-text">INDIA</span>
          </div>
          <p>Serving communities with dignity, faith and practical charity.</p>
        </div>

        <div className="footer-columns">
          <div>
            <h3>SSVP INDIA</h3>
            <ul className="footer-list">
              {footerLinks.about.map((link) => (
                <li key={link.label}><Link to={link.to}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>OUR NETWORK</h3>
            <ul className="footer-list">
              {footerLinks.network.map((link) => (
                <li key={link.label}><Link to={link.to}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>GET INVOLVED</h3>
            <ul className="footer-list">
              {footerLinks.involve.map((link) => (
                <li key={link.label}><Link to={link.to}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>RESOURCES</h3>
            <ul className="footer-list">
              {footerLinks.resources.map((link) => (
                <li key={link.label}><Link to={link.to}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>CONTACT</h3>
            <ul className="footer-list contact-list">
              <li><MapPin size={14} /> National Council of India, Mumbai, Maharashtra</li>
              <li><Mail size={14} /> admin@ssvpindia.in</li>
              <li><Phone size={14} /> +91 22 1234 5678</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Society of St. Vincent de Paul, India. All Rights Reserved.</span>
        <a
          href="https://appvertex.in"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-credit-badge"
        >
          <Zap size={11} className="footer-credit-icon" />
          <span>Powered by <strong>AppVertex</strong></span>
          <ExternalLink size={10} className="footer-credit-external" />
        </a>
      </div>
    </footer>
  )
}
