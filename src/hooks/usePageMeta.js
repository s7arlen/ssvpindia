import { useEffect } from 'react'

const metaMap = {
  '/': {
    title: 'SSVP India | Society of St. Vincent de Paul',
    description: 'SSVP India serves communities with dignity, faith and practical charity across the nation.',
    url: 'https://s7arlen.github.io/ssvpindia/',
  },
  '/about': {
    title: 'About SSVP India | Our Mission & History',
    description: 'Learn about the history, mission and Vincentian spirit of the Society of St. Vincent de Paul in India.',
    url: 'https://s7arlen.github.io/ssvpindia/#/about',
  },
  '/founder': {
    title: 'Blessed Frederic Ozanam | SSVP India',
    description: 'Discover the life of Blessed Frederic Ozanam, the founder of the Society of St. Vincent de Paul.',
    url: 'https://s7arlen.github.io/ssvpindia/#/founder',
  },
  '/patron': {
    title: 'St. Vincent de Paul | SSVP India',
    description: 'Explore the life and legacy of St. Vincent de Paul, patron of the Society and inspiration for service.',
    url: 'https://s7arlen.github.io/ssvpindia/#/patron',
  },
  '/activities': {
    title: 'SSVP India | Our Activities',
    description: 'Explore education, healthcare, livelihoods, housing and emergency assistance across the Vincentian mission.',
    url: 'https://s7arlen.github.io/ssvpindia/#/activities',
  },
  '/national-council': {
    title: 'SSVP India | National Council',
    description: 'Meet the National Council of India and learn how the Vincentian mission is coordinated across the country.',
    url: 'https://s7arlen.github.io/ssvpindia/#/national-council',
  },
  '/central-councils': {
    title: 'SSVP India | Central Councils',
    description: 'See the regional structure and central councils supporting the Society across India.',
    url: 'https://s7arlen.github.io/ssvpindia/#/central-councils',
  },
  '/stories': {
    title: 'SSVP India | Stories of Service',
    description: 'Read stories of hope, dignity and practical compassion from the Vincentian family in India.',
    url: 'https://s7arlen.github.io/ssvpindia/#/stories',
  },
  '/events': {
    title: 'SSVP India | Events',
    description: 'Find upcoming events, meetings and service gatherings across the Society of St. Vincent de Paul in India.',
    url: 'https://s7arlen.github.io/ssvpindia/#/events',
  },
  '/resources': {
    title: 'SSVP India | Resources',
    description: 'Access annual reports, newsletters, media and materials for formation and outreach.',
    url: 'https://s7arlen.github.io/ssvpindia/#/resources',
  },
  '/contact': {
    title: 'Contact SSVP India | Join the Mission',
    description: 'Connect with the Society of St. Vincent de Paul in India to volunteer, support or learn more.',
    url: 'https://s7arlen.github.io/ssvpindia/#/contact',
  },
}

export default function usePageMeta(pathname) {
  const meta = metaMap[pathname] || metaMap['/']

  useEffect(() => {
    document.title = meta.title

    const descriptionTag = document.querySelector('meta[name="description"]')
    if (descriptionTag) {
      descriptionTag.setAttribute('content', meta.description)
    }

    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', meta.url)
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDescription = document.querySelector('meta[property="og:description"]')
    const ogUrl = document.querySelector('meta[property="og:url"]')

    if (ogTitle) ogTitle.setAttribute('content', meta.title)
    if (ogDescription) ogDescription.setAttribute('content', meta.description)
    if (ogUrl) ogUrl.setAttribute('content', meta.url)

    const twitterTitle = document.querySelector('meta[property="twitter:title"]')
    const twitterDescription = document.querySelector('meta[property="twitter:description"]')
    if (twitterTitle) twitterTitle.setAttribute('content', meta.title)
    if (twitterDescription) twitterDescription.setAttribute('content', meta.description)
  }, [meta])
}
