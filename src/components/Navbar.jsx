import { useState, useEffect } from 'react'

const NAV_LINKS = [
  ['#services', 'Services'],
  ['/systems', 'Systems'],
  ['#process', 'Process'],
  ['#industries', 'Industries'],
  ['#contact', 'Contact'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const syncNavHeight = () => {
      const nav = document.querySelector('.navbar')
      if (!nav) return
      document.documentElement.style.setProperty('--nav-h', `${nav.offsetHeight}px`)
    }

    syncNavHeight()
    window.addEventListener('resize', syncNavHeight)
    return () => window.removeEventListener('resize', syncNavHeight)
  }, [])

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      const nav = document.querySelector('.navbar')
      if (!nav) return
      document.documentElement.style.setProperty('--nav-h', `${nav.offsetHeight}px`)
    })
    return () => window.cancelAnimationFrame(id)
  }, [scrolled, mobileOpen])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const scrollTo = (e, href) => {
    if (!href.startsWith('#')) {
      setMobileOpen(false)
      return
    }

    if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
      e.preventDefault()
      setMobileOpen(false)
      window.location.href = `/${href}`
      return
    }

    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (!target) return
    const navH = document.querySelector('.navbar')?.offsetHeight ?? 76
    const top = target.getBoundingClientRect().top + window.scrollY - navH
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            <a href="#hero" onClick={(e) => scrollTo(e, '#hero')} className="navbar-logo">
              <img src="/logo.png" alt="Loonova AI" />
            </a>

            <ul className="navbar-links">
              {NAV_LINKS.map(([href, label]) => (
                <li key={href}>
                  <a href={href} onClick={(e) => scrollTo(e, href)}>{label}</a>
                </li>
              ))}
            </ul>

            <a href="#contact" onClick={(e) => scrollTo(e, '#contact')} className="navbar-cta">
              Book a Strategy Call
            </a>

            <button
              className={`navbar-hamburger${mobileOpen ? ' open' : ''}`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`navbar-mobile-drawer${mobileOpen ? ' open' : ''}`} role="dialog" aria-modal="true">
        {NAV_LINKS.map(([href, label]) => (
          <a key={href} href={href} onClick={(e) => scrollTo(e, href)}>{label}</a>
        ))}
        <a href="#contact" onClick={(e) => scrollTo(e, '#contact')} className="btn-primary">
          Book a Strategy Call
        </a>
      </div>
    </>
  )
}
