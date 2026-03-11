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
            AI is nothing without
            <span className="line-accent">a complete system.</span>
          </h1>

          <p className="hero-sub fade-in delay-2">
            We build practical AI systems for service businesses that tighten operations,
            improve follow-up, and free your team to focus on higher-ROI work AI cannot replace.
          </p>

          <p className="hero-supporting fade-in delay-3">
            This is moving fast, and the tools are finally affordable.
            Firms that implement the right systems now will be hard to catch later.
          </p>

          <div className="hero-actions fade-in delay-4">
            <a href="#contact" onClick={(e) => scrollTo(e, '#contact')} className="btn-primary">
              Book a Strategy Call
            </a>
            <a href="#services" className="btn-secondary" onClick={(e) => scrollTo(e, '#services')}>
              See What We Build
            </a>
          </div>
        </div>

        <div className="hero-metric-card glass-card" aria-hidden="true">
          <div className="metric-card-header">System Performance</div>
          <div className="metric-row">
            <span>Lead Response Time</span>
            <span className="metric-val">+312%</span>
          </div>
          <div className="metric-row">
            <span>Follow-up Rate</span>
            <span className="metric-val">+89%</span>
          </div>
          <div className="metric-row">
            <span>Ops Efficiency</span>
            <span className="metric-val">+67%</span>
          </div>
          <div className="metric-row">
            <span>Client Onboarding</span>
            <span className="metric-val">5x</span>
          </div>
        </div>
      </div>
    </section>
  )
}
