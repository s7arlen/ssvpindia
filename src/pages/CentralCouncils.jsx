import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { councilRegions } from '../data/councils'
import usePageMeta from '../hooks/usePageMeta'

export default function CentralCouncils() {
  usePageMeta('/central-councils')
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
          <p className="eyebrow dark">CENTRAL COUNCILS</p>
          <h1>Regional leadership across India.</h1>
        </motion.section>

        <section className="section-shell page-content">
          <div className="council-list-wrap">
            {councilRegions.map((region) => (
              <article key={region.region} className="region-list">
                <h3>{region.region}</h3>
                <ul>
                  {region.councils.map((council) => (
                    <li key={council}>{council}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
