import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const stories = [
  {
    title: 'Family after crisis',
    category: 'Emergency Assistance',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80',
    text: 'A local conference walked with a family through urgent need, ensuring immediate relief and long-term accompaniment.',
  },
  {
    title: 'A place to learn and belong',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80',
    text: 'Students are supported not just with resources, but with dignity, encouragement and renewed hope for the future.',
  },
  {
    title: 'Care in everyday life',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
    text: 'Through medical accompaniment and practical care, communities are enabled to face illnesses with greater stability.',
  },
]

export default function StorySection() {
  return (
    <section className="section-shell story-section">
      <div className="section-heading-row">
        <div>
          <p className="eyebrow dark">STORIES</p>
          <h2>EVERY NUMBER HAS A STORY.</h2>
        </div>
        <Link to="/stories" className="inline-link">
          MORE STORIES <ArrowRight size={14} />
        </Link>
      </div>

      <div className="story-grid">
        {stories.map((story, index) => (
          <motion.article
            key={story.title}
            className="story-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <img src={story.image} alt={story.title} />
            <div className="story-card-body">
              <p className="story-tag">{story.category}</p>
              <h3>{story.title}</h3>
              <p>{story.text}</p>
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
