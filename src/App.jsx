import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Founder from './pages/Founder'
import Patron from './pages/Patron'
import Activities from './pages/Activities'
import NationalCouncil from './pages/NationalCouncil'
import CentralCouncils from './pages/CentralCouncils'
import Stories from './pages/Stories'
import Events from './pages/Events'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import MobileBottomNav from './components/MobileBottomNav'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/patron" element={<Patron />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/national-council" element={<NationalCouncil />} />
        <Route path="/central-councils" element={<CentralCouncils />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <MobileBottomNav />
    </HashRouter>
  )
}

export default App
