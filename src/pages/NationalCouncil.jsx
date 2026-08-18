import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { nationalCouncil } from '../data/councils'
import usePageMeta from '../hooks/usePageMeta'

export default function NationalCouncil() {
  usePageMeta('/national-council')
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
          <p className="eyebrow dark">NATIONAL COUNCIL</p>
          <h1>{nationalCouncil.name}</h1>
        </motion.section>

        <section className="section-shell page-content">
          <div className="story-columns">
            <div>
              <p>{nationalCouncil.note}</p>
              <p>
                The National Council of India is the coordinating body responsible for guiding the mission of the Society across the country, maintaining links with the International Confederation and supporting local efforts in communities and dioceses.
              </p>
            </div>
            <div className="info-block">
              <h3>Headquarters</h3>
              <p>{nationalCouncil.headquarters}</p>
              <p>{nationalCouncil.office}</p>
              <p>{nationalCouncil.email}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
