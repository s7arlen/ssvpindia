import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import stories from '../data/stories'
import usePageMeta from '../hooks/usePageMeta'

export default function Stories() {
  usePageMeta('/stories')
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
          <p className="eyebrow dark">STORIES</p>
          <h1>Stories of service and hope.</h1>
        </motion.section>

        <section className="section-shell page-content">
          <div className="card-grid">
            {stories.map((story) => (
              <article key={story.id} className="detail-card">
                <img src={story.image} alt={story.title} />
                <div className="detail-card-body">
                  <p className="meta-row small-meta">
                    <span>{story.category}</span>
                    <span>{new Date(story.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                  </p>
                  <h3>{story.title}</h3>
                  <p>{story.description}</p>
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
