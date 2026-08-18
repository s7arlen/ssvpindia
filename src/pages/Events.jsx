import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import events from '../data/events'
import usePageMeta from '../hooks/usePageMeta'

export default function Events() {
  usePageMeta('/events')
  return (
    <>
      <Navbar />
      <main className="page-shell">
        <motion.section
          className="page-header"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <p className="eyebrow dark">EVENTS</p>
          <h1>Gatherings and moments of service.</h1>
        </motion.section>

        <section className="section-shell page-content">
          <div className="event-list">
            {events.map((event) => (
              <article key={event.id} className="event-list-item">
                <div className="event-date-box small">
                  <span>{new Date(event.date).toLocaleDateString('en-GB', { month: 'short' }).toUpperCase()}</span>
                  <strong>{new Date(event.date).getDate()}</strong>
                </div>
                <div className="event-copy">
                  <p className="event-tag">{event.category}</p>
                  <h3>{event.title}</h3>
                  <p>{event.location}</p>
                  <p>{event.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
