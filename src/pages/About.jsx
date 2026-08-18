import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import usePageMeta from '../hooks/usePageMeta'

export default function About() {
  usePageMeta('/about')
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
          <p className="eyebrow dark">OUR STORY</p>
          <h1>Compassion in action for more than 190 years.</h1>
        </motion.section>

        <section className="section-shell page-content">
          <div className="about-section">
            <div className="about-visual">
              <img
                src="https://images.unsplash.com/photo-1559129615-cd4628902d4a?auto=format&fit=crop&w=900&q=80"
                alt="Community coming together in service and compassion"
              />
            </div>
            <div>
              <p>
                The Society of St. Vincent de Paul was founded in Paris in 1833 by Blessed Frederic Ozanam and a group of young lay Catholics who wanted faith to be expressed in service to the poor. Their response to a challenge about the Church's practical charity became a global movement.
              </p>
              <p>
                In India, the movement took root through conferences and local communities, growing into a nationwide network that brings practical care, accompaniment and solidarity to families and communities across the country.
              </p>
              <p>
                The Society sees every person as made in the image of God. Through humble service, it responds to urgent human needs while respecting dignity, justice and the dignity of each person.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
