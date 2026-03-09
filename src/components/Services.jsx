const SERVICES = [
  {
    title: 'AI Adoption Strategy',
    description:
      'We assess your current operations and design a clear AI roadmap - so every investment maps to a specific workflow improvement and business outcome.',
  },
  {
    title: 'CRM and Follow-Up Systems',
    description:
      'Intelligent CRM pipelines and automated follow-up sequences that keep your team responsive without manual effort - turning more inquiries into closed business.',
  },
  {
    title: 'Lead Intake and Qualification',
    description:
      'Automated intake workflows that capture, screen, and route incoming leads - so your team only spends time on qualified opportunities.',
  },
  {
    title: 'Client Onboarding Automation',
    description:
      'Replace manual onboarding with structured automated workflows - from contract signing and document collection to welcome sequences and account setup.',
  },
  {
    title: 'Internal Operations Automation',
    description:
      'We map and automate repetitive internal tasks - reporting, scheduling, communications, and approvals - freeing capacity for high-value work.',
  },
  {
    title: 'Custom AI-Enabled Business Systems',
    description:
      'End-to-end operational systems designed around your firm\'s workflow - combining AI tools, automation, and integration into one measurable platform.',
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
            Every engagement is designed around your full business workflow - not
            isolated automations that create new silos.
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
