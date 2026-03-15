export default function About() {
  const scrollToContact = (e) => {
    e.preventDefault()
    const target = document.querySelector('#contact')
    if (!target) return
    const navH = document.querySelector('.navbar')?.offsetHeight ?? 76
    const top = target.getBoundingClientRect().top + window.scrollY - navH
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-inner glass-card fade-in">
          <div className="about-photo-wrap">
            <div className="about-photo-ring" aria-hidden="true" />
            <img src="/founder.png" alt="Founder of Loonova AI" className="about-photo" />
          </div>

          <div className="about-body">
            <span className="section-label">About</span>
            <h2 className="section-title">
              Built by someone who has worked in
              <span className="gradient-text"> service operations.</span>
            </h2>
            <p className="about-text">
              I started Loonova AI after seeing strong teams slowed down by messy handoffs, slow follow-up, and manual admin work.
            </p>
            <p className="about-text">I&apos;m Will, founder of Loonova AI.</p>
            <p className="about-text">
              I work directly with owners and operators to build systems that match how their teams actually run day to day.
            </p>
            <p className="about-text">
              The goal is simple: remove repetitive work, keep operations organized, and free up time for higher-value tasks.
            </p>
            <div className="about-actions">
              <a href="#contact" onClick={scrollToContact} className="btn-primary">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
