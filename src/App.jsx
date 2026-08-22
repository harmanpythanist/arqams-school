import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Loader from './components/Loader.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import ContactCurriculum from './components/ContactCurriculum.jsx'
import CurriculumPreview from './components/CurriculumPreview.jsx'
import CampusesPreview from './components/CampusesPreview.jsx'
import Gallery from './components/Gallery.jsx'
import GalleryPage from './components/GalleryPage.jsx'
import CurriculumPage from './components/CurriculumPage.jsx'
import CampusPage from './components/CampusPage.jsx'
import AdmissionPage from './components/AdmissionPage.jsx'
import Branches from './components/Branches.jsx'
import Events from './components/Events.jsx'
import EventsPreview from './components/EventsPreview.jsx'
import ComingSoon from './components/ComingSoon.jsx'
import YearlySchedule from './components/YearlySchedule.jsx'
import ScheduleStrip from './components/ScheduleStrip.jsx'
import AdmissionSteps from './components/AdmissionSteps.jsx'
import HomeCTA from './components/HomeCTA.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  const [tab, setTab] = useState('home')
  const [selectedCampus, setSelectedCampus] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(
    () => typeof window === 'undefined' || window.innerWidth > 900
  )

  const handleApply = (campus) => {
    setSelectedCampus(campus)
    setTab('admission')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Loader />
      <Sidebar active={tab} onNavigate={setTab} open={sidebarOpen} onToggle={setSidebarOpen} />

      <div className={`app-content ${sidebarOpen ? '' : 'app-content--full'}`}>
        <main>
          {tab === 'home' && (
            <>
              <Hero onNavigate={setTab} />
              <About />
              <ContactCurriculum />
              <CurriculumPreview onNavigate={setTab} />
              <CampusesPreview onApply={handleApply} onNavigate={setTab} />
              <Gallery />
              <EventsPreview onNavigate={setTab} />
              <ScheduleStrip onNavigate={setTab} />
              <Branches onNavigate={setTab} />
              <AdmissionSteps onNavigate={setTab} />
              <HomeCTA onNavigate={setTab} />
            </>
          )}
          {tab === 'events' && <Events />}
          {tab === 'admission' && <AdmissionPage selectedCampus={selectedCampus} />}
          {tab === 'campus' && <CampusPage onApply={handleApply} />}
          {tab === 'schedule' && <YearlySchedule />}
          {tab === 'gallery' && <GalleryPage />}
          {tab === 'curriculum' && <CurriculumPage />}
        </main>
        <Footer onNavigate={setTab} />
      </div>

      <WhatsAppButton />
    </>
  )
}
