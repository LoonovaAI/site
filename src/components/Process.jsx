const STEPS = [
  {
    number: '01',
    title: 'Find Bottlenecks',
    description:
      'We identify where time is lost, follow-up slips, or handoffs break.',
  },
  {
    number: '02',
    title: 'Build the System',
    description:
      'We build around your full workflow and connect the tools that should work together.',
  },
  {
    number: '03',
    title: 'Launch and Improve',
    description:
      'We launch, monitor usage, and refine based on real results.',
  },
]

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="container">
        <div className="process-header fade-in">
          <span className="section-label label-center">How It Works</span>
          <h2 className="section-title">Simple, Three-Step Process</h2>
          <p className="section-subtitle">
            Find what is broken, build the fix, and improve it after launch.
          </p>
          <p className="section-subtitle process-sub-extra">
            I connect tools like OpenAI and Claude with APIs and webhooks, so updates
            move to the right person without manual chasing.
          </p>
        </div>

        <div className="process-grid">
          {STEPS.map((step, i) => (
            <article key={step.number} className={`process-step glass-card fade-in delay-${i + 1}`}>
              <div className="step-number" aria-label={`Step ${step.number}`}>{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
