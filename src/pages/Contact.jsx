import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import usePageMeta from '../hooks/usePageMeta'

export default function Contact() {
  usePageMeta('/contact')
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
          <p className="eyebrow dark">CONTACT</p>
          <h1>We would be glad to hear from you.</h1>
        </motion.section>

        <section className="section-shell page-content contact-grid">
          <div className="contact-card">
            <h3>Headquarters</h3>
            <p>Society of St. Vincent de Paul</p>
            <p>National Council of India</p>
            <p>Eucharistic Congress Building II, No. 5, Convent Street, Colaba, Mumbai, Maharashtra - 400001</p>
            <p>admin@ssvpindia.in</p>
          </div>

          <div className="contact-card">
            <h3>President's Secretariat</h3>
            <p>Society of St. Vincent de Paul</p>
            <p>President's Secretariat</p>
            <p>Santhome Cathedral Basilica, No.38, Santhome High Road, Mylapore, Chennai, Tamil Nadu - 600 004</p>
            <p>ncisecretariat@ssvpindia.in</p>
            <p>president@ssvpindia.in</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
