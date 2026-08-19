import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const timeline = [
  { year: '1833', event: 'Society founded' },
  { year: '1852–53', event: 'Introduced in India' },
  { year: '1863', event: 'Society formally established in India' },
  { year: 'TODAY', event: 'Nationwide Vincentian network' },
]

export default function AboutSection() {
  return (
    <section className="section-shell about-section" id="who-we-are">
      <div className="about-visual">
        <img
          src="/ssvpindia/images/about-compassion.jpg"
          alt="Community coming together in service and compassion"
          className="rounded-2xl shadow-xl object-cover w-full h-full"
        />
      </div>

      <motion.div
        className="about-copy"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow dark">A MOVEMENT BORN FROM COMPASSION</p>
        <h2>Rooted in faith, animated by service.</h2>
        <p>
          The Society of St. Vincent de Paul began in 1833 in response to the dignity of the poor and the call to practical charity. Its founder, Blessed Frederic Ozanam, gathered young people around the conviction that faith must be lived through concrete service.
        </p>
        <p>
          In India, the Vincentian mission grew through local communities, conferences, and central councils, forming a network committed to listening, accompanying, and helping families with respect.
        </p>
        <Link to="/about" className="inline-link">
          READ OUR STORY <ArrowRight size={14} />
        </Link>

        <div className="timeline">
          {timeline.map((item) => (
            <div className="timeline-item" key={item.year}>
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-event">{item.event}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
