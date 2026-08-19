import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Search, Building2, ChevronRight, Compass } from 'lucide-react'
import { councilRegions, nationalCouncil } from '../data/councils'

// Region map configurations with node coordinates on India map (ViewBox 0 0 500 560)
const mapRegionsConfig = [
  {
    id: 'Northern India',
    name: 'Northern India',
    pinX: 245,
    pinY: 175,
    tag: 'NORTH & EAST',
    path: 'M 210,50 L 260,70 L 320,130 L 440,160 L 450,220 L 370,250 L 310,230 L 260,240 L 190,200 L 170,140 Z',
    color: '#6E1D2A',
  },
  {
    id: 'Western India',
    name: 'Western India',
    pinX: 175,
    pinY: 300,
    tag: 'WEST & CENTRAL',
    path: 'M 170,140 L 260,240 L 250,330 L 180,360 L 140,310 L 130,230 Z',
    color: '#8B263E',
  },
  {
    id: 'Andhra & Telangana',
    name: 'Andhra & Telangana',
    pinX: 265,
    pinY: 350,
    tag: 'DECCAN REGION',
    path: 'M 260,240 L 310,230 L 325,320 L 285,390 L 245,370 L 250,330 Z',
    color: '#A03048',
  },
  {
    id: 'Kerala',
    name: 'Kerala',
    pinX: 215,
    pinY: 460,
    tag: 'MALABAR COAST',
    path: 'M 205,395 L 235,405 L 230,500 L 195,490 L 205,430 Z',
    color: '#6E1D2A',
  },
  {
    id: 'Tamil Nadu',
    name: 'Tamil Nadu',
    pinX: 255,
    pinY: 460,
    tag: 'COROMANDEL COAST',
    path: 'M 235,405 L 285,390 L 270,510 L 230,500 Z',
    color: '#8B263E',
  },
]

export default function IndiaMap() {
  const [selectedRegion, setSelectedRegion] = useState('Northern India')
  const [searchQuery, setSearchQuery] = useState('')
  const [hoveredRegion, setHoveredRegion] = useState(null)

  const activeRegionData = councilRegions.find((r) => r.region === selectedRegion) || councilRegions[0]
  const activeConfig = mapRegionsConfig.find((r) => r.name === selectedRegion) || mapRegionsConfig[0]

  // Filter councils by search query
  const filteredCouncils = activeRegionData.councils.filter((council) =>
    council.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section className="section-shell network-section-v2">
      <div className="section-heading-row">
        <div>
          <p className="eyebrow dark">NATIONWIDE PRESENCE</p>
          <h2>A NETWORK ACROSS INDIA</h2>
          <p className="network-subtitle">
            Hover or click on any region on the interactive map to explore our Central Councils.
          </p>
        </div>
      </div>

      {/* Region Selector Pills */}
      <div className="network-pill-bar">
        {councilRegions.map((region) => {
          const isSelected = selectedRegion === region.region
          const count = region.councils.length
          return (
            <button
              key={region.region}
              type="button"
              className={`region-pill-btn ${isSelected ? 'active' : ''}`}
              onClick={() => {
                setSelectedRegion(region.region)
                setSearchQuery('')
              }}
            >
              <span>{region.region}</span>
              <span className="pill-count-badge">{count}</span>
            </button>
          )
        })}
      </div>

      <div className="network-grid-v2">
        {/* LEFT PANEL: Interactive SVG Cartographic Map */}
        <div className="map-card-container">
          <div className="map-card-header">
            <Compass size={18} className="text-burgundy" />
            <span>INTERACTIVE MAP OF INDIA</span>
            {hoveredRegion && <span className="hover-region-tag">• {hoveredRegion}</span>}
          </div>

          <div className="svg-map-wrapper">
            <svg
              viewBox="0 0 500 560"
              className="india-svg-map"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Gradients */}
                <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6E1D2A" />
                  <stop offset="100%" stopColor="#A03048" />
                </linearGradient>

                <linearGradient id="hoverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C8A45D" />
                  <stop offset="100%" stopColor="#E2C27D" />
                </linearGradient>

                <linearGradient id="defaultGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(110,29,42,0.07)" />
                  <stop offset="100%" stopColor="rgba(110,29,42,0.12)" />
                </linearGradient>

                {/* Radar glow filter */}
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Background Geographic Grid Mesh */}
              <g className="map-grid-lines" opacity="0.15">
                {[100, 200, 300, 400, 500].map((y) => (
                  <line key={`h-${y}`} x1="0" y1={y} x2="500" y2={y} stroke="#6E1D2A" strokeDasharray="3 3" />
                ))}
                {[100, 200, 300, 400].map((x) => (
                  <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="560" stroke="#6E1D2A" strokeDasharray="3 3" />
                ))}
              </g>

              {/* India Outline Backdrop Shadow */}
              <path
                d="M 210,50 L 260,70 L 320,130 L 440,160 L 450,220 L 370,250 L 310,230 L 325,320 L 285,390 L 270,510 L 230,500 L 195,490 L 140,310 L 130,230 L 170,140 Z"
                fill="none"
                stroke="rgba(110,29,42,0.25)"
                strokeWidth="12"
                strokeLinejoin="round"
              />

              {/* Regional Vector Paths */}
              {mapRegionsConfig.map((item) => {
                const isSelected = selectedRegion === item.name
                const isHovered = hoveredRegion === item.name

                return (
                  <g key={item.id} className="svg-region-group">
                    <path
                      d={item.path}
                      className={`svg-region-path ${isSelected ? 'is-selected' : ''} ${isHovered ? 'is-hovered' : ''}`}
                      fill={isSelected ? 'url(#activeGradient)' : isHovered ? 'url(#hoverGradient)' : 'url(#defaultGradient)'}
                      stroke={isSelected ? '#C8A45D' : 'rgba(110,29,42,0.3)'}
                      strokeWidth={isSelected ? '2.5' : '1.5'}
                      onMouseEnter={() => setHoveredRegion(item.name)}
                      onMouseLeave={() => setHoveredRegion(null)}
                      onClick={() => {
                        setSelectedRegion(item.name)
                        setSearchQuery('')
                      }}
                    />
                  </g>
                )
              })}

              {/* Radar Pins & Pulsing Nodes */}
              {mapRegionsConfig.map((item) => {
                const isSelected = selectedRegion === item.name

                return (
                  <g
                    key={`pin-${item.id}`}
                    className="svg-pin-group"
                    transform={`translate(${item.pinX}, ${item.pinY})`}
                    onClick={() => {
                      setSelectedRegion(item.name)
                      setSearchQuery('')
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Pulsing Outer Radar Ring */}
                    {isSelected && (
                      <circle r="22" fill="none" stroke="#C8A45D" strokeWidth="1.5" opacity="0.7">
                        <animate attributeName="r" values="10;32" dur="1.8s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.8;0" dur="1.8s" repeatCount="indefinite" />
                      </circle>
                    )}

                    {/* Node Core Circle */}
                    <circle
                      r={isSelected ? '10' : '7'}
                      fill={isSelected ? '#C8A45D' : '#6E1D2A'}
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                      className="node-core"
                      filter={isSelected ? 'url(#glow)' : undefined}
                    />

                    {/* Node Label Badge */}
                    <g transform="translate(0, -18)">
                      <rect
                        x="-45"
                        y="-12"
                        width="90"
                        height="20"
                        rx="10"
                        fill={isSelected ? '#6E1D2A' : 'rgba(255,255,255,0.92)'}
                        stroke={isSelected ? '#C8A45D' : 'rgba(110,29,42,0.2)'}
                        strokeWidth="1"
                      />
                      <text
                        x="0"
                        y="2"
                        textAnchor="middle"
                        fontSize="9"
                        fontWeight="700"
                        fill={isSelected ? '#FFFFFF' : '#202020'}
                        letterSpacing="0.5"
                      >
                        {item.name.toUpperCase()}
                      </text>
                    </g>
                  </g>
                )
              })}
            </svg>

            <div className="map-legend">
              <span className="legend-item"><span className="legend-dot active" /> Selected Region</span>
              <span className="legend-item"><span className="legend-dot" /> Regional Hub Pin</span>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: Glassmorphism Council Drawer */}
        <div className="council-drawer-card">
          <div className="drawer-header">
            <div>
              <span className="drawer-tag">{activeConfig.tag}</span>
              <h3 className="drawer-title">{activeRegionData.region}</h3>
            </div>
            <div className="council-count-chip">
              <Building2 size={14} />
              <span>{activeRegionData.councils.length} Councils</span>
            </div>
          </div>

          {/* Quick Council Search */}
          <div className="council-search-box">
            <Search size={15} className="search-icon" />
            <input
              type="text"
              placeholder={`Search in ${activeRegionData.region}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search central councils"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
              >
                ✕
              </button>
            )}
          </div>

          {/* Councils List */}
          <div className="council-list-scroll">
            <AnimatePresence mode="wait">
              <motion.ul
                key={selectedRegion + searchQuery}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="council-card-grid"
              >
                {filteredCouncils.length > 0 ? (
                  filteredCouncils.map((council, idx) => (
                    <motion.li
                      key={council}
                      className="council-item-card"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: idx * 0.03 }}
                      whileHover={{ x: 4, backgroundColor: 'rgba(110,29,42,0.06)' }}
                    >
                      <div className="council-item-icon">
                        <MapPin size={15} />
                      </div>
                      <span className="council-item-name">
                        <span className="council-city">{council.replace(/\s+Central\s+Council$/i, '')}</span>
                        <span className="council-suffix"> Central Council</span>
                      </span>
                      <ChevronRight size={14} className="council-arrow" />
                    </motion.li>
                  ))
                ) : (
                  <div className="no-councils-found">
                    <p>No councils match &ldquo;{searchQuery}&rdquo; in {activeRegionData.region}.</p>
                  </div>
                )}
              </motion.ul>
            </AnimatePresence>
          </div>

          {/* National HQ Callout Banner at bottom of drawer */}
          <div className="national-hq-banner">
            <div className="hq-text">
              <p className="hq-label">NATIONAL HEADQUARTERS</p>
              <p className="hq-name">{nationalCouncil.name}</p>
              <p className="hq-city">{nationalCouncil.headquarters}</p>
            </div>
            <a href="/national-council" className="hq-link-btn">
              VIEW COUNCIL
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
