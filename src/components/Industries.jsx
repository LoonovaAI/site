const INDUSTRIES = [
  {
    title: 'Accounting and Bookkeeping Firms',
    description:
      'Automate client onboarding, document collection, deadline reminders, and reporting so your team spends more time on billable work.',
  },
  {
    title: 'Home Service Businesses',
    description:
      'Build faster lead response systems, estimate follow-ups, and scheduling workflows that convert more inquiries into booked jobs.',
  },
  {
    title: 'Med Spas and Wellness Practices',
    description:
      'Automate new client intake, follow-up sequences, re-engagement campaigns, and internal workflows to improve experience and retention.',
  },
  {
    title: 'Real Estate Businesses',
    description:
      'Automate lead routing, showing coordination, pipeline follow-ups, and transaction handoffs so nothing falls through the cracks.',
  },
  {
    title: 'Property Management Firms',
    description:
      'Streamline tenant communication, maintenance workflows, leasing intake, and owner reporting across high-volume operational dataflow.',
  },
  {
    title: 'Dataflow-Heavy Operations',
    description:
      'For businesses handling large volumes of repetitive updates, requests, and handoffs, we build systems that keep information moving accurately and on time.',
  },
]

export default function Industries() {
  return (
    <section id="industries" className="industries">
      <div className="container">
        <div className="industries-header fade-in">
          <span className="section-label label-center">Who We Serve</span>
          <h2 className="section-title">Built for Service-Based Firms</h2>
          <p className="section-subtitle">
            We focus exclusively on service businesses because workflow challenges,
            client relationships, and ROI drivers are different - especially in
            businesses with heavy operational dataflow.
          </p>
        </div>

        <div className="industries-grid">
          {INDUSTRIES.map((ind, i) => (
            <article key={ind.title} className={`industry-card glass-card fade-in delay-${(i % 2) + 1}`}>
              <h3>{ind.title}</h3>
              <p>{ind.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
