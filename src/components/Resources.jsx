import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Newspaper, BookOpenText, FolderOpen, Presentation, Camera } from 'lucide-react'

const resourceCatalog = [
  { title: 'ANNUAL REPORTS', type: 'Annual Reports', icon: FileText },
  { title: 'REACHOUT', type: 'ReachOut', icon: Newspaper },
  { title: 'NEWSLETTERS', type: 'Newsletters', icon: BookOpenText },
  { title: 'DOCUMENTS', type: 'Documents', icon: FolderOpen },
  { title: 'FORMATION MATERIAL', type: 'Formation', icon: Presentation },
  { title: 'MEDIA', type: 'Media', icon: Camera },
]

export default function Resources() {
  const [selected, setSelected] = useState('All')

  const filtered = useMemo(() => {
    if (selected === 'All') return resourceCatalog
    return resourceCatalog.filter((item) => item.type === selected)
  }, [selected])

  return (
    <section className="section-shell resources-section">
      <div className="section-heading-row">
        <div>
          <p className="eyebrow dark">RESOURCE HUB</p>
          <h2>INFORMATION FOR SERVICE AND FORMATION</h2>
        </div>
      </div>

      <div className="filter-row" aria-label="Resource filters">
        {['All', 'Annual Reports', 'ReachOut', 'Newsletters', 'Documents', 'Formation', 'Media'].map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-chip ${selected === category ? 'active' : ''}`}
            onClick={() => setSelected(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="resource-grid">
        {filtered.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.article
              key={item.title}
              className="resource-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="resource-icon">
                <Icon size={24} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.type}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
