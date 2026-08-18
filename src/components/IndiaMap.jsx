import { motion } from 'framer-motion'
import { useState } from 'react'
import { councilRegions } from '../data/councils'

export default function IndiaMap() {
  const [selectedRegion, setSelectedRegion] = useState(councilRegions[0].region)

  const regionData = councilRegions.find((item) => item.region === selectedRegion) || councilRegions[0]

  return (
    <section className="section-shell network-section">
      <div className="section-heading-row">
        <div>
          <p className="eyebrow dark">OUR NETWORK</p>
          <h2>A NETWORK ACROSS INDIA</h2>
        </div>
      </div>

      <div className="network-grid">
        <div className="map-panel">
          <div className="map-graphic" aria-label="India network map illustration">
            {councilRegions.map((region, index) => (
              <button
                key={region.region}
                type="button"
                className={`map-region ${selectedRegion === region.region ? 'selected' : ''}`}
                style={{ '--region-index': index }}
                onClick={() => setSelectedRegion(region.region)}
                aria-pressed={selectedRegion === region.region}
              >
                {region.region}
              </button>
            ))}
          </div>
        </div>

        <motion.aside
          className="council-panel"
          key={selectedRegion}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <p className="council-region-title">{regionData.region}</p>
          <ul>
            {regionData.councils.map((council) => (
              <li key={council}>{council}</li>
            ))}
          </ul>
        </motion.aside>
      </div>
    </section>
  )
}
