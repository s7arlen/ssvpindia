import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ImpactStats from '../components/ImpactStats'
import AboutSection from '../components/AboutSection'
import FounderPatron from '../components/FounderPatron'
import MissionGrid from '../components/MissionGrid'
import IndiaMap from '../components/IndiaMap'
import LatestUpdates from '../components/LatestUpdates'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import usePageMeta from '../hooks/usePageMeta'

export default function Home() {
  usePageMeta('/')
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ImpactStats />
        <AboutSection />
        <FounderPatron />
        <MissionGrid />
        <IndiaMap />
        <LatestUpdates />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
