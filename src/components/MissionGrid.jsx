import { motion } from 'framer-motion'
import { activities } from '../data/activities'

export default function MissionGrid() {
  return (
    <section className="section-shell mission-section">
      <div className="section-heading-row">
        <div>
          <p className="eyebrow dark">MISSION</p>
          <h2>SEE THE MISSION IN ACTION</h2>
        </div>
      </div>

      <div className="mission-grid">
        {activities.map((item, index) => (
          <motion.article
            key={item.title}
            className="mission-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <div className="mission-image-wrap">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="mission-copy">
              <p className="mission-category">{item.title}</p>
              <p>{item.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
