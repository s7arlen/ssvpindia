import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ImpactStats from '../components/ImpactStats'
import AboutSection from '../components/AboutSection'
import MissionGrid from '../components/MissionGrid'
import IndiaMap from '../components/IndiaMap'
import StorySection from '../components/StorySection'
import FounderPatron from '../components/FounderPatron'
import GetInvolved from '../components/GetInvolved'
import NewsSection from '../components/NewsSection'
import EventsSection from '../components/EventsSection'
import Resources from '../components/Resources'
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
        <MissionGrid />
        <IndiaMap />
        <StorySection />
        <FounderPatron />
        <GetInvolved />
        <NewsSection />
        <EventsSection />
        <Resources />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
