const EXAMPLE_SYSTEMS = [
  {
    title: 'Email Routing',
    description:
      'Incoming emails are labeled and routed to the right workflow.',
    image: '/images/systems/email-routing-workflow.png',
  },
  {
    title: 'Document Intake',
    description:
      'Key information is pulled from uploaded files and organized for your team.',
    image: '/images/systems/pdf-processing-workflow.png',
  },
  {
    title: 'Knowledge Base Sync',
    description:
      'Important email context is turned into searchable records.',
    image: '/images/systems/notion-knowledge-system.png',
  },
]

export default function ExampleSystems() {
  return (
    <section className="example-systems" id="example-systems">
      <div className="container">
        <div className="example-systems-header fade-in">
          <span className="section-label label-center">Examples</span>
          <h2 className="section-title">Systems We Build</h2>
          <p className="section-subtitle">
            A few workflow examples from common client use cases.
          </p>
        </div>

        <div className="example-systems-grid">
          {EXAMPLE_SYSTEMS.map((system, i) => (
            <article key={system.title} className={`example-system-card glass-card fade-in delay-${(i % 3) + 1}`}>
              <img src={system.image} alt={`${system.title} screenshot`} className="example-system-thumb" />
              <div className="example-system-body">
                <h3>{system.title}</h3>
                <p>{system.description}</p>
                <a href="/systems" className="btn-secondary">View Example</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
