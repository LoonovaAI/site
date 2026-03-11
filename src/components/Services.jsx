const SERVICES = [
  {
    title: 'AI Adoption Strategy',
    description:
      'We audit your current workflow and map out where AI will actually pay off, so each investment ties to a clear operational win.',
  },
  {
    title: 'CRM and Follow-Up Systems',
    description:
      'We build CRM pipelines and follow-up sequences that keep response times tight and convert more inquiries into closed deals.',
  },
  {
    title: 'Lead Intake and Qualification',
    description:
      'Inbound leads get captured, screened, and routed automatically, so your team spends time on qualified opportunities instead of admin.',
  },
  {
    title: 'Client Onboarding Automation',
    description:
      'Replace manual onboarding with a clean workflow, from signatures and document collection through welcome emails and account setup.',
  },
  {
    title: 'Internal Operations Automation',
    description:
      'We automate repetitive internal work such as reporting, scheduling, updates, and approvals, so your team can stay on high-value work.',
  },
  {
    title: 'Custom AI-Enabled Business Systems',
    description:
      'When off-the-shelf tools are not enough, we build a custom system around your workflow and connect AI, automation, and integrations into one operating layer.',
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header fade-in">
          <span className="section-label label-center">What We Build</span>
          <h2 className="section-title">Complete AI Systems, Not One-Off Tools</h2>
          <p className="section-subtitle">
            Every engagement is built around your full workflow, not random automations
            that create new silos.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <article key={s.title} className={`service-card glass-card fade-in delay-${(i % 3) + 1}`}>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
