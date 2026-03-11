import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import ExampleSystems from './components/ExampleSystems.jsx'
import WhyLoonova from './components/WhyLoonova.jsx'
import Process from './components/Process.jsx'
import Industries from './components/Industries.jsx'
import About from './components/About.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'
import SystemsPage from './components/SystemsPage.jsx'

function App() {
  const isSystemsPage = window.location.pathname === '/systems'

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="bg-grid" aria-hidden="true">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
      </div>

      <Navbar />
      {isSystemsPage ? (
        <SystemsPage />
      ) : (
        <main>
          <Hero />
          <Services />
          <ExampleSystems />
          <WhyLoonova />
          <Process />
          <Industries />
          <About />
          <CTA />
        </main>
      )}
      <Footer />
    </>
  )
}

export default App
