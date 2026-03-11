const STEPS = [
  {
    number: '01',
    title: 'Assess Bottlenecks',
    description:
      'We start by finding where your team is losing time, dropping responsiveness, or missing visibility before we design anything.',
  },
  {
    number: '02',
    title: 'Design the System',
    description:
      'We design around your full workflow, not isolated tasks. AI, automations, and integrations are mapped to specific business outcomes.',
  },
  {
    number: '03',
    title: 'Launch and Refine',
    description:
      'We launch for real adoption, then refine from performance data so results keep improving over time.',
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
            I connect tools like Claude and OpenAI to your workflow with APIs,
            webhooks, and notifications, so the right information reaches the right
            person at the right time.
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
