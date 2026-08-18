import { motion } from 'framer-motion'
import { CalendarDays, MapPin } from 'lucide-react'
import events from '../data/events'

export default function EventsSection() {
  const featured = events[0]

  return (
    <section className="section-shell events-section">
      <div className="section-heading-row">
        <div>
          <p className="eyebrow dark">UPCOMING</p>
          <h2>WHAT'S HAPPENING</h2>
        </div>
      </div>

      <motion.article
        className="event-featured"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="event-date-box">
          <span>{new Date(featured.date).toLocaleDateString('en-GB', { month: 'short' }).toUpperCase()}</span>
          <strong>{new Date(featured.date).getDate()}</strong>
        </div>

        <div className="event-copy">
          <p className="event-tag">{featured.category}</p>
          <h3>{featured.title}</h3>
          <div className="event-meta">
            <span><MapPin size={14} /> {featured.location}</span>
          </div>
          <p>{featured.description}</p>
        </div>
      </motion.article>
    </section>
  )
}
