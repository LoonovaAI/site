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
            <span className="section-label">The Person Behind It</span>
            <h2 className="section-title">
              Built by someone who has been inside
              <span className="gradient-text"> service operations.</span>
            </h2>
            <p className="about-text">
              I started Loonova AI after seeing the same mistake over and over:
              good businesses paying for more software but still dealing with slow
              follow-up, messy handoffs, and manual admin work.
            </p>
            <p className="about-text">My name is Will, and I am the founder of Loonova AI.</p>
            <p className="about-text">
              I work directly with owners and operators to build systems that fit the
              way their teams actually work. No generic template. No bloated stack.
              Just practical systems that improve speed, consistency, and results.
            </p>
            <p className="about-text">
              Software subscriptions keep getting more expensive, but AI tools have
              become far more capable and affordable. Right now, firms that set this up
              correctly can pull ahead fast. The ones that wait usually spend the next
              year trying to catch up. The point is to automate repetitive execution so
              your team can reallocate time to higher-ROI activities AI cannot replace.
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
