export default function Hero() {
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
            Loonova AI helps service businesses adopt AI through structured systems
            that improve operations, follow-up, and measurable business performance.
          </p>

          <p className="hero-supporting fade-in delay-3">
            AI capabilities are accelerating quickly, and powerful tools are now affordable.
            The firms that move early with the right system and execution will create
            the strongest long-term advantage.
          </p>

          <div className="hero-actions fade-in delay-4">
            <a href="mailto:info@loonovaai.com" className="btn-primary">
              Book a Strategy Call
            </a>
            <a
              href="#services"
              className="btn-secondary"
              onClick={(e) => {
                e.preventDefault()
                const target = document.querySelector('#services')
                if (!target) return
                const navH = document.querySelector('.navbar')?.offsetHeight ?? 76
                const top = target.getBoundingClientRect().top + window.scrollY - navH
                window.scrollTo({ top, behavior: 'smooth' })
              }}
            >
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
