export default function Hero() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (!target) return
    const navH = document.querySelector('.navbar')?.offsetHeight ?? 76
    const top = target.getBoundingClientRect().top + window.scrollY - navH
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <img src="/logo.png" className="hero-loon-watermark" aria-hidden="true" alt="" />

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge fade-in">
            <span className="badge-dot" aria-hidden="true" />
            AI Systems for Service Businesses
          </div>

          <h1 className="hero-headline fade-in delay-1">
            AI only works when it fits
            <span className="line-accent">your actual workflow.</span>
          </h1>

          <p className="hero-sub fade-in delay-2">
            We build AI systems that help service businesses respond faster,
            follow up consistently, and reduce manual work.
          </p>

          <p className="hero-supporting fade-in delay-3">
            If your team is stuck doing repetitive admin, we can map the process
            and automate the parts that should not be manual.
          </p>

          <div className="hero-actions fade-in delay-4">
            <a href="#contact" onClick={(e) => scrollTo(e, '#contact')} className="btn-primary">
              Book a Call
            </a>
            <a href="#services" className="btn-secondary" onClick={(e) => scrollTo(e, '#services')}>
              View Services
            </a>
          </div>
        </div>

        <div className="hero-metric-card glass-card" aria-hidden="true">
          <div className="metric-card-header">What Improves</div>
          <div className="metric-row">
            <span>Lead Response Time</span>
            <span className="metric-val">Faster</span>
          </div>
          <div className="metric-row">
            <span>Follow-up Rate</span>
            <span className="metric-val">Higher</span>
          </div>
          <div className="metric-row">
            <span>Ops Efficiency</span>
            <span className="metric-val">Cleaner</span>
          </div>
          <div className="metric-row">
            <span>Client Onboarding</span>
            <span className="metric-val">Smoother</span>
          </div>
        </div>
      </div>
    </section>
  )
}
