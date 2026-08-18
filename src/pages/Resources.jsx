import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import usePageMeta from '../hooks/usePageMeta'

export default function ResourcesPage() {
  usePageMeta('/resources')
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
          <p className="eyebrow dark">RESOURCES</p>
          <h1>Reports, formation, and outreach.</h1>
        </motion.section>

        <section className="section-shell page-content">
          <div className="card-grid resource-page-grid">
            <article className="detail-card"><div className="detail-card-body"><h3>ANNUAL REPORTS</h3><p>Documents and reports sharing the work of the Society across India.</p></div></article>
            <article className="detail-card"><div className="detail-card-body"><h3>REACHOUT</h3><p>Updates and stories carried through service and community outreach publications.</p></div></article>
            <article className="detail-card"><div className="detail-card-body"><h3>NEWSLETTERS</h3><p>Periodic updates on our mission, events and regional initiatives.</p></div></article>
            <article className="detail-card"><div className="detail-card-body"><h3>DOCUMENTS</h3><p>Essential reference material for councils, conferences and formation.</p></div></article>
            <article className="detail-card"><div className="detail-card-body"><h3>FORMATION MATERIAL</h3><p>Resources that help members grow in service, witness, and spirituality.</p></div></article>
            <article className="detail-card"><div className="detail-card-body"><h3>MEDIA</h3><p>Images, videos and communication resources for the Vincentian mission.</p></div></article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
