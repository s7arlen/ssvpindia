import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import usePageMeta from '../hooks/usePageMeta'

export default function Patron() {
  usePageMeta('/patron')
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
          <p className="eyebrow dark">PATRON</p>
          <h1>St. Vincent de Paul</h1>
        </motion.section>

        <section className="section-shell page-content">
          <div className="story-columns">
            <div>
              <h3>Life & Ministry</h3>
              <p>
                Born in 1581, Vincent de Paul was ordained at 19. Initially ministering to the wealthy, his calling shifted to the marginalized—galley prisoners and the poor. He transformed charity into a disciplined practice of service through accompaniment, practical help and dignity.
              </p>
              <p>
                He urged efficiency in charity: teaching literacy, enabling self-support, and demanding justice alongside charity. Rather than mere almsgiving, he believed in empowering the poor to become self-sufficient and to reclaim their dignity as children of God.
              </p>
            </div>
            <div>
              <h3>Legacy & Recognition</h3>
              <p>
                Canonized in 1737, St. Vincent de Paul was designated the special patron of all charitable associations in 1883. His legacy remains central to the Society: love for the poor, humility, justice, and practical service inspired by faith.
              </p>
              <blockquote style={{ fontStyle: 'italic', paddingLeft: '16px', borderLeft: '3px solid var(--burgundy)', marginTop: '20px' }}>
                "Love the poor. Honour them, my children, as you would honour Christ himself."
              </blockquote>
              <p style={{ marginTop: '20px' }}>
                His example reminds Vincentians that charity is not an abstract ideal, but a concrete commitment to people and communities in need—a testament to living faith through action.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
