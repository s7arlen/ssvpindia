import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import stories from '../data/stories'

export default function NewsSection() {
  return (
    <section className="section-shell news-section">
      <div className="section-heading-row">
        <div>
          <p className="eyebrow dark">NEWS & STORIES</p>
          <h2>STORIES FROM THE VINCENTIAN FAMILY</h2>
        </div>
      </div>

      <div className="news-grid">
        {stories.map((story, index) => (
          <motion.article
            key={story.id}
            className="news-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
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
    </section>
  )
}
