import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const offerings = [
  {
    title: 'BECOME A VINCENTIAN',
    description: 'Serve directly in your community with a local conference and a spirit of accompaniment.',
  },
  {
    title: 'SUPPORT A CAUSE',
    description: 'Help provide assistance where it is needed most through practical support and emergency response.',
  },
  {
    title: 'PARTNER WITH US',
    description: 'Bring your skills, resources and network to strengthen communities across India.',
  },
]

export default function GetInvolved() {
  return (
    <section className="section-shell involvement-section">
      <div className="section-heading-row centered">
        <div>
          <p className="eyebrow dark">JOIN US</p>
          <h2>THERE IS A PLACE FOR YOU IN THIS MISSION.</h2>
        </div>
      </div>

      <div className="involvement-grid">
        {offerings.map((item, index) => (
          <motion.div
            key={item.title}
            className="involvement-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <p className="card-kicker">{item.title}</p>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="cta-row">
        <Link to="/contact" className="primary-button">
          START YOUR JOURNEY <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
