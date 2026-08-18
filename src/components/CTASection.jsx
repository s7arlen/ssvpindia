import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-shell">
        <div className="cta-copy">
          <p className="eyebrow light">JOIN THE MOVEMENT</p>
          <h2>HOPE BEGINS WITH SOMEONE WHO CHOOSES TO SERVE.</h2>
          <p>
            Join the Society of St. Vincent de Paul and become part of a nationwide movement of service.
          </p>
          <Link to="/contact" className="primary-button light-button">
            GET INVOLVED <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
