import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 1833, label: 'FOUNDED', suffix: '' },
  { value: 87, label: 'CENTRAL COUNCILS', suffix: '' },
  { value: 62800, label: 'ACTIVE MEMBERS', suffix: '+' },
  { value: 7300, label: 'CONFERENCES', suffix: '+' },
]

function NumberCounter({ value, suffix, isInView }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 2200
    const stepTime = 30
    const increment = value / (duration / stepTime)
    let animationFrameId

    const animate = () => {
      start += increment
      if (start >= value) {
        setCount(value)
        return
      }
      setCount(Math.floor(start))
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [value, isInView])

  return (
    <div ref={ref} className="stat-value">
      {count.toLocaleString()}
      <span className="stat-suffix">{suffix}</span>
    </div>
  )
}

export default function ImpactStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.23, 1, 0.320, 1],
      },
    },
  }

  return (
    <section ref={ref} className="impact-section">
      <motion.div
        className="impact-shell"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="stat-card"
            variants={itemVariants}
            whileHover={{ y: -4 }}
          >
            <NumberCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
            <div className="stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
