import { motion } from 'framer-motion'

const profiles = [
  {
    name: 'Blessed Frederic Ozanam',
    role: 'Founder',
    text: 'A scholar, Catholic layman, and visionary who believed service to the poor was a lived expression of faith and justice.',
    image: 'https://ssvpindia.in/images/Frederic-Ozanam.jpg',
  },
  {
    name: 'St. Vincent de Paul',
    role: 'Patron',
    text: 'The beloved patron of charitable works, whose example shaped the Vincentian mission of dignity, humility, and practical love.',
    image: 'https://ssvpindia.in/images/Frédéric_Ozanam_2.jpg',
  },
]

export default function FounderPatron() {
  return (
    <section className="section-shell founder-section">
      <div className="section-heading-row centered">
        <div>
          <p className="eyebrow dark">OUR HERITAGE</p>
          <h2>TWO LIVES. ONE MISSION.</h2>
        </div>
      </div>

      <div className="profile-grid">
        {profiles.map((profile, index) => (
          <motion.article
            key={profile.name}
            className="profile-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <div className="profile-image-wrap">
              <img src={profile.image} alt={profile.name} />
            </div>
            <div className="profile-copy">
              <p className="profile-role">{profile.role}</p>
              <h3>{profile.name}</h3>
              <p>{profile.text}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
