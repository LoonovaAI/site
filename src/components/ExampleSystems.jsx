const EXAMPLE_SYSTEMS = [
  {
    title: 'AI Email Routing',
    description:
      'Automatically classifies incoming emails and routes them into structured workflows.',
    image: '/images/systems/email-routing-workflow.png',
  },
  {
    title: 'Document Processing',
    description:
      'Extracts and organizes information from uploaded documents automatically.',
    image: '/images/systems/pdf-processing-workflow.png',
  },
  {
    title: 'Knowledge System',
    description:
      'Converts email activity into structured knowledge stored in a database.',
    image: '/images/systems/notion-knowledge-system.png',
  },
]

export default function ExampleSystems() {
  return (
    <section className="example-systems" id="example-systems">
      <div className="container">
        <div className="example-systems-header fade-in">
          <span className="section-label label-center">Examples</span>
          <h2 className="section-title">Example Systems</h2>
          <p className="section-subtitle">
            A few real workflow patterns showing how AI and automation can reduce
            repetitive work and improve day-to-day execution.
          </p>
        </div>

        <div className="example-systems-grid">
          {EXAMPLE_SYSTEMS.map((system, i) => (
            <article key={system.title} className={`example-system-card glass-card fade-in delay-${(i % 3) + 1}`}>
              <img src={system.image} alt={`${system.title} screenshot`} className="example-system-thumb" />
              <div className="example-system-body">
                <h3>{system.title}</h3>
                <p>{system.description}</p>
                <a href="/systems" className="btn-secondary">View System</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
