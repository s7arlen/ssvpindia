import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const heroSlides = [
  {
    id: 1,
    eyebrow: 'SOCIETY OF ST. VINCENT DE PAUL • INDIA',
    headline: 'SERVING IN HOPE',
    subtitle: 'Where compassion becomes action.',
    description: 'For generations, Vincentians across India have walked alongside people in need — serving with dignity, faith and love.',
    image: 'https://ssvpindia.in/images/Frederic-Ozanam.jpg',
    cta: 'DISCOVER OUR MISSION',
  },
  {
    id: 2,
    eyebrow: 'OUR IMPACT ACROSS INDIA',
    headline: '62,800+ ACTIVE MEMBERS',
    subtitle: 'Growing the network of compassion.',
    description: 'Thousands of Vincentians dedicate their lives to service, creating lasting change in communities across the nation.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
    cta: 'VIEW OUR IMPACT',
  },
  {
    id: 3,
    eyebrow: 'A LEGACY SINCE 1833',
    headline: 'TOUCHING LIVES ACROSS INDIA',
    subtitle: 'Nearly 200 years of faithful service.',
    description: 'From education to healthcare, from housing to disaster relief, we transform communities through Vincentian charity.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
    cta: 'EXPLORE OUR WORK',
  },
  {
    id: 4,
    eyebrow: 'JOIN THE MISSION',
    headline: 'BE THE CHANGE',
    subtitle: 'Step into a life of purpose and service.',
    description: 'Become part of a global movement dedicated to uplifting the poorest of the poor.',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
    cta: 'GET INVOLVED TODAY',
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const slide = heroSlides[currentSlide]

  return (
    <section className="hero-section-carousel">
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide}
          className="hero-slide"
          style={{
            backgroundImage: `url('${slide.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <div className="hero-overlay" />
          <div className="hero-content-shell">
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            >
              <p className="eyebrow">{slide.eyebrow}</p>
              <h1>{slide.headline}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <p className="hero-text">{slide.description}</p>
              <div className="hero-actions">
                <Link to="/activities" className="primary-button">
                  {slide.cta} <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="secondary-button">
                  GET INVOLVED
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
