const INDUSTRIES = [
  {
    title: 'Accounting and Bookkeeping Firms',
    description:
      'Automate onboarding, document collection, reminders, and reporting so your team can spend more time on billable work.',
  },
  {
    title: 'Home Service Businesses',
    description:
      'Improve lead response, estimate follow-up, and scheduling so more inquiries become booked jobs.',
  },
  {
    title: 'Med Spas and Wellness Practices',
    description:
      'Automate client intake, follow-up, and re-engagement so staff can focus on care.',
  },
  {
    title: 'Real Estate Businesses',
    description:
      'Automate lead routing, showing coordination, and transaction handoffs so fewer deals stall.',
  },
  {
    title: 'Property Management Firms',
    description:
      'Streamline tenant communication, maintenance requests, leasing intake, and owner reporting.',
  },
  {
    title: 'High-Volume Operations',
    description:
      'If your team handles repeated updates and handoffs all day, we build systems to keep work moving cleanly.',
  },
]

export default function Industries() {
  return (
    <section id="industries" className="industries">
      <div className="container">
        <div className="industries-header fade-in">
          <span className="section-label label-center">Who We Serve</span>
          <h2 className="section-title">Service Businesses</h2>
          <p className="section-subtitle">
            We work with service teams where response speed, handoffs, and follow-up make a direct difference.
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
