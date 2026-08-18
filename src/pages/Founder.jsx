import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import usePageMeta from '../hooks/usePageMeta'

export default function Founder() {
  usePageMeta('/founder')
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
          <p className="eyebrow dark">FOUNDER</p>
          <h1>Blessed Frederic Ozanam</h1>
        </motion.section>

        <section className="section-shell page-content">
          <div className="story-columns">
            <div>
              <h3>Early Life</h3>
              <p>
                Frederic Ozanam was born in April 1813 in Milan to Jean and Marie Ozanam. He was the fifth of 14 children, one of only three to reach adulthood. His family, of Jewish origin, had settled in Lyon, France, for centuries. His father, Jean Ozanam, served in the armies of the First French Republic before turning to medicine.
              </p>
              <p>
                In his youth, Frederic experienced a period of doubt regarding his faith but was strongly influenced by Abbé Noirot. He became a staunch defender of Catholicism, publishing works against Saint-Simonianism and writing for the Association for the Propagation of the Faith.
              </p>
            </div>
            <div>
              <h3>The Challenge & The Response</h3>
              <p>
                While studying law in Paris, Frederic formed a "Conference of History" to discuss literature and history. However, during a heated debate about the Church's relevance, a challenge was issued:
              </p>
              <blockquote style={{ fontStyle: 'italic', paddingLeft: '16px', borderLeft: '3px solid var(--burgundy)' }}>
                "What is your church doing now? What is she doing for the poor of Paris? Show us your works and we will believe you!"
              </blockquote>
              <p>
                In response, in May 1833, Frederic and a group of young men founded the charitable Society of Saint Vincent de Paul. Under the guidance of Blessed Rosalie Rendu, they began serving the poor in the slums of Paris, famously aiding victims during the cholera epidemic.
              </p>
            </div>
          </div>

          <div className="story-columns" style={{ marginTop: '40px' }}>
            <div>
              <h3>Scholar & Professional</h3>
              <ul style={{ lineHeight: '1.8' }}>
                <li><strong>1834-1836:</strong> Earned degrees in Law and Arts</li>
                <li><strong>1839:</strong> Doctorate of Letters with a thesis on Dante</li>
                <li><strong>1840:</strong> Appointed professor of commercial law at Lyon and foreign literature at the Sorbonne</li>
              </ul>
              <p>
                Despite his academic success, he remained deeply committed to his faith and family. In June 1841, he married Amélie Soulacroix, and they had a daughter, Marie. He was known as a man of great faith, tender to his family, and loyal to his friends.
              </p>
            </div>
            <div>
              <h3>Legacy & Final Years</h3>
              <p>
                Frederic remained active in the Society and journalism (founding Ère nouvelle) until his health failed. He passed away on September 8, 1853, in Marseille at the age of 40. He rests in the crypt of St. Joseph des Carmes in Paris.
              </p>
              <p>
                <strong>Quick Facts:</strong>
              </p>
              <ul style={{ lineHeight: '1.8' }}>
                <li>Born: April 1813, Milan</li>
                <li>Founded SSVP: May 1833</li>
                <li>Beatified By: Pope John Paul II</li>
                <li>Feast Day: September 9</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
