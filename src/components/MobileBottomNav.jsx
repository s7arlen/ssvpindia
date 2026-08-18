import { NavLink } from 'react-router-dom'
import { Home, BookOpen, Users, FileText } from 'lucide-react'

const bottomNavItems = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'About', to: '/about', icon: Users },
  { label: 'Stories', to: '/stories', icon: BookOpen },
  { label: 'Resources', to: '/resources', icon: FileText },
]

export default function MobileBottomNav() {
  return (
    <nav className="mobile-bottom-nav">
      {bottomNavItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
        >
          <item.icon size={24} />
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
