import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { activities } from '../data/activities'
import usePageMeta from '../hooks/usePageMeta'

export default function Activities() {
  usePageMeta('/activities')
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
          <p className="eyebrow dark">OUR WORK</p>
          <h1>Serving communities across India.</h1>
        </motion.section>

        <section className="section-shell page-content">
          <div className="card-grid">
            {activities.map((item) => (
              <article key={item.title} className="detail-card">
                <img src={item.image} alt={item.title} />
                <div className="detail-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
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
