import { useState } from 'react'
import { motion } from 'framer-motion'
import { RotateCw, Sparkles, Heart } from 'lucide-react'

const profiles = [
  {
    id: 'ozanam',
    name: 'Blessed Frederic Ozanam',
    role: 'FOUNDER',
    years: '1813 – 1853',
    quote: 'I would like to embrace the whole world in a network of charity.',
    text: 'A scholar, Catholic layman, and visionary who believed that faith must be proven through direct, personal action. At age 20 in Paris, he gathered friends to form the Society, bringing hope directly to the homes of the poor.',
    image: 'https://ssvpindia.in/images/Frederic-Ozanam.jpg',
    badge: 'Founder of SSVP',
  },
  {
    id: 'vincent',
    name: 'St. Vincent de Paul',
    role: 'PATRON',
    years: '1581 – 1660',
    quote: 'Go to the poor: you will find God.',
    text: 'The universal patron of charitable works. Known for his radical empathy and organizing relief across 17th-century France, his timeless example of dignity and humble service inspires every Vincentian today.',
    image: 'https://ssvpindia.in/images/Fr%C3%A9d%C3%A9ric_Ozanam_2.jpg',
    badge: 'Patron Saint',
  },
]

function ProfileCard({ profile, index }) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped((prev) => !prev)
  }

  return (
    <motion.div
      className="flip-card-wrapper"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div
        className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}
        onClick={handleFlip}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleFlip()
          }
        }}
        aria-label={`Card for ${profile.name}. Click to flip.`}
      >
        {/* FRONT FACE */}
        <div className="flip-card-front">
          <div className="card-frame-gold" />
          <div className="flip-card-image-wrap">
            <img src={profile.image} alt={profile.name} className="flip-card-img" />
            <div className="flip-card-img-overlay" />
          </div>

          <div className="flip-card-front-content">
            <div className="flip-card-header-badge">
              <Sparkles size={12} className="text-gold" />
              <span>{profile.role}</span>
            </div>

            <h3 className="flip-card-title">{profile.name}</h3>
            <p className="flip-card-years">{profile.years}</p>

            <div className="flip-hint-btn">
              <span>TAP TO REVEAL STORY</span>
              <RotateCw size={13} className="spin-icon" />
            </div>
          </div>
        </div>

        {/* BACK FACE */}
        <div className="flip-card-back">
          <div className="card-frame-gold" />
          <div className="card-back-watermark" aria-hidden="true">
            <Heart size={140} strokeWidth={0.5} />
          </div>

          <div className="flip-card-back-content">
            <div className="card-back-top">
              <span className="card-back-role">{profile.role} • {profile.badge}</span>
              <h3 className="card-back-title">{profile.name}</h3>
            </div>

            <blockquote className="card-back-quote">
              &ldquo;{profile.quote}&rdquo;
            </blockquote>

            <p className="card-back-text">{profile.text}</p>

            <div className="flip-hint-btn back-btn">
              <RotateCw size={13} />
              <span>FLIP BACK</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function FounderPatron() {
  return (
    <section className="section-shell founder-flip-section">
      <div className="section-heading-row centered">
        <div>
          <p className="eyebrow dark">OUR HERITAGE</p>
          <h2>TWO LIVES. ONE MISSION.</h2>
          <p className="section-subheading">
            Tap a card to explore the visionary and patron behind the Vincentian movement.
          </p>
        </div>
      </div>

      <div className="founder-flip-grid">
        {profiles.map((profile, index) => (
          <ProfileCard key={profile.id} profile={profile} index={index} />
        ))}
      </div>
    </section>
  )
}
