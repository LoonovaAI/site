const SERVICES = [
  {
    title: 'AI Adoption Strategy',
    description:
      'We review your workflow and identify where AI can save time or improve follow-up before you spend on tools.',
  },
  {
    title: 'CRM and Follow-Up Systems',
    description:
      'We set up CRM pipelines and follow-up flows so leads do not get missed.',
  },
  {
    title: 'Lead Intake and Qualification',
    description:
      'New leads are captured, filtered, and routed automatically so your team can focus on qualified work.',
  },
  {
    title: 'Client Onboarding Automation',
    description:
      'We replace manual onboarding with a step-by-step flow for signatures, documents, and client setup.',
  },
  {
    title: 'Internal Operations Automation',
    description:
      'We automate repetitive tasks like reporting, scheduling, updates, and approvals.',
  },
  {
    title: 'Custom AI-Enabled Business Systems',
    description:
      'When off-the-shelf tools are not enough, we build a custom system around your exact process.',
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header fade-in">
          <span className="section-label label-center">What We Build</span>
          <h2 className="section-title">Practical Systems for Daily Work</h2>
          <p className="section-subtitle">
            Each project is built around your full workflow, not disconnected automations.
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
