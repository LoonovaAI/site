const STEPS = [
  {
    number: '01',
    title: 'Assess Bottlenecks',
    description:
      'We start with structured discovery to identify where the business is losing time, responsiveness, or visibility before any solution is designed.',
  },
  {
    number: '02',
    title: 'Design the System',
    description:
      'We build around your full workflow, not isolated tasks. AI, automation, and integration are mapped to specific business outcomes.',
  },
  {
    number: '03',
    title: 'Launch and Refine',
    description:
      'We deploy for real adoption, then refine based on performance data so the system improves over time and delivers measurable ROI.',
  },
]

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="container">
        <div className="process-header fade-in">
          <span className="section-label label-center">How It Works</span>
          <h2 className="section-title">A Structured Engagement, Every Time</h2>
          <p className="section-subtitle">
            No rushed implementations. No generic playbooks. Every system is built
            through a disciplined, three-phase process.
          </p>
          <p className="section-subtitle process-sub-extra">
            I connect AI tools from platforms like Claude and OpenAI, then tie them
            into your workflow with APIs, webhooks, and automated notifications so
            your team gets the right information at the right time.
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
