const FEATURES = [
  {
    title: 'Systems, Not One-Off Builds',
    description:
      'We do not deliver a standalone automation and walk away. Every engagement produces an integrated system built around how your firm operates.',
  },
  {
    title: 'ROI-Focused Implementation',
    description:
      'Every system is tied to a measurable outcome - faster response times, higher conversion rates, reduced overhead, or improved client retention.',
  },
  {
    title: 'AI Inside a Workflow',
    description:
      'Isolated AI tools do not move the needle. We integrate AI inside your business processes and your existing tool stack.',
  },
  {
    title: 'Built for Firms That Want an Edge',
    description:
      'We work with service businesses that treat AI as a strategic advantage and want implementation done seriously.',
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
              The difference between a tool
              and a <span className="gradient-text">complete system</span>
            </h2>
            <p className="section-subtitle">
              Most AI implementations fail because they are deployed without a surrounding system.
              We fix that.
            </p>

            <div className="why-stats">
              <div className="stat-block">
                <strong>100%</strong>
                <span>System-level engagements</span>
              </div>
              <div className="stat-block">
                <strong>3x</strong>
                <span>Average efficiency improvement</span>
              </div>
              <div className="stat-block">
                <strong>ROI</strong>
                <span>Tied to every deployment</span>
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
