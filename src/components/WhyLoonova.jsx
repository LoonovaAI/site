const FEATURES = [
  {
    title: 'Built Around Your Workflow',
    description:
      'We map how your team already works, then build around that.',
  },
  {
    title: 'Clear Business Targets',
    description:
      'Each system is tied to specific targets like response time, conversion, or fewer manual handoffs.',
  },
  {
    title: 'Tools That Work Together',
    description:
      'AI, automations, and your existing software are connected into one process.',
  },
  {
    title: 'Hands-On Implementation',
    description:
      'You work directly with me from planning through rollout.',
  },
]

export default function WhyLoonova() {
  return (
    <section id="why" className="why-loonova">
      <div className="container">
        <div className="why-inner">
          <div className="why-left fade-in">
            <span className="section-label">Why Loonova</span>
            <h2 className="section-title">
              Why clients choose
              <span className="gradient-text"> Loonova</span>
            </h2>
            <p className="section-subtitle">
              Most teams do not need more software. They need a better operating process.
            </p>

            <div className="why-stats">
              <div className="stat-block">
                <strong>100%</strong>
                <span>Service business focus</span>
              </div>
              <div className="stat-block">
                <strong>3x</strong>
                <span>Efficiency target</span>
              </div>
              <div className="stat-block">
                <strong>ROI</strong>
                <span>Measured on projects</span>
              </div>
            </div>
          </div>

          <div className="why-right">
            {FEATURES.map((f, i) => (
              <article key={f.title} className={`why-feature glass-card fade-in delay-${i + 1}`}>
                <h4>{f.title}</h4>
                <p>{f.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
