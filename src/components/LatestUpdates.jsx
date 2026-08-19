import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import stories from '../data/stories'
import events from '../data/events'

export default function LatestUpdates() {
  const latestStories = stories.slice(0, 2)
  const featured = events[0]

  return (
    <section className="section-shell latest-section">
      <div className="section-heading-row">
        <div>
          <p className="eyebrow dark">LATEST</p>
          <h2>NEWS & UPCOMING EVENTS</h2>
        </div>
        <Link to="/stories" className="inline-link">
          ALL STORIES <ArrowRight size={14} />
        </Link>
      </div>

      <div className="latest-grid">
        <div className="latest-news">
          {latestStories.map((story, index) => (
            <motion.article
              key={story.id}
              className="news-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={story.image} alt={story.title} />
              <div className="news-copy">
                <p className="meta-row">
                  <span>{story.category}</span>
                  <span>{new Date(story.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                </p>
                <h3>{story.title}</h3>
                <p>{story.description}</p>
                <Link to="/stories" className="inline-link small-link">
                  READ STORY <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.aside
          className="latest-event-panel"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <p className="eyebrow dark">UPCOMING EVENT</p>
          <div className="latest-event-date">
            <span>{new Date(featured.date).toLocaleDateString('en-GB', { month: 'short' }).toUpperCase()}</span>
            <strong>{new Date(featured.date).getDate()}</strong>
            <span>{new Date(featured.date).getFullYear()}</span>
          </div>
          <p className="event-tag">{featured.category}</p>
          <h3>{featured.title}</h3>
          <div className="event-meta">
            <span><MapPin size={14} /> {featured.location}</span>
          </div>
          <p>{featured.description}</p>
          <Link to="/events" className="inline-link" style={{ marginTop: '1.5rem' }}>
            ALL EVENTS <ArrowRight size={14} />
          </Link>
        </motion.aside>
      </div>
    </section>
  )
}
