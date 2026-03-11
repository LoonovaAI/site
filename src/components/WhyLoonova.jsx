const FEATURES = [
  {
    title: 'Systems, Not One-Off Builds',
    description:
      'We do not hand you a one-off automation and disappear. We build integrated systems that match how your firm actually runs.',
  },
  {
    title: 'ROI-Focused Implementation',
    description:
      'Every system is tied to a measurable outcome - faster response times, higher conversion rates, reduced overhead, or improved client retention.',
  },
  {
    title: 'AI Inside a Workflow',
    description:
      'Standalone AI tools rarely change outcomes. We place AI inside your day-to-day workflow and existing stack where it drives results.',
  },
  {
    title: 'Built for Firms That Want an Edge',
    description:
      'We work with service businesses that treat implementation seriously and want a real operational edge.',
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
              Most AI rollouts fail because the workflow around them is never designed.
              We build that missing layer.
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
