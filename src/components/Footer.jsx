const YEAR = new Date().getFullYear()

const FOOTER_LINKS = {
  Services: [
    ['#services', 'AI Adoption Strategy'],
    ['#services', 'CRM and Follow-Up Systems'],
    ['#services', 'Lead Intake Workflows'],
    ['#services', 'Client Onboarding'],
  ],
  Company: [
    ['#why', 'Why Loonova'],
    ['#process', 'Our Process'],
    ['#industries', 'Industries'],
    ['#contact', 'Contact Us'],
  ],
}

function scrollTo(e, href) {
  e.preventDefault()
  const target = document.querySelector(href)
  if (!target) return
  const navH = document.querySelector('.navbar')?.offsetHeight ?? 76
  const top = target.getBoundingClientRect().top + window.scrollY - navH
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <p className="footer-logo-text">
              Loonova <span className="accent">AI</span>
            </p>
            <p>
              Complete AI systems for service businesses - built for firms that want
              a real operational edge, not a random collection of AI tools.
            </p>
            <div className="footer-contact">
              <a href="mailto:info@loonovaai.com" className="footer-contact-link">
                info@loonovaai.com
              </a>
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <nav key={heading} className="footer-links-col" aria-label={heading}>
              <h4>{heading}</h4>
              <ul>
                {links.map(([href, label]) => (
                  <li key={label}>
                    <a href={href} onClick={(e) => scrollTo(e, href)}>{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© {YEAR} Loonova AI. All rights reserved.</span>
          <span>AI systems for service businesses.</span>
        </div>
      </div>
    </footer>
  )
}
