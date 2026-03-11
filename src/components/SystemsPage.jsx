const SYSTEMS = [
  {
    title: 'AI Email Labeling and Routing',
    description:
      'Automatically classifies incoming emails and applies structured labels that trigger downstream workflows.',
    why: 'Email is often the starting point for business processes. Automating classification reduces manual inbox management and allows information to flow directly into the correct systems.',
    systemFit:
      'This typically sits at the front of an operations system, where incoming communication is standardized before handoff to CRM, project management, support, or internal notification workflows.',
    images: [
      '/images/systems/email-routing-workflow.png',
      '/images/systems/gmail-labeled-inbox.png',
    ],
  },
  {
    title: 'Email to Knowledge System',
    description:
      'Transforms labeled emails into structured entries inside a knowledge database.',
    why: 'Important information often becomes buried in inboxes. Converting emails into structured records improves organizational memory and information accessibility.',
    systemFit:
      'This layer usually functions as the memory component of a larger operating system, where decision context, client history, and recurring issues become searchable records for future execution.',
    images: [
      '/images/systems/email-notion-workflow.png',
      '/images/systems/notion-knowledge-system.png',
    ],
  },
  {
    title: 'Document Processing Workflow',
    description:
      'Processes documents automatically by extracting key information and generating summaries.',
    why: 'Manual document review consumes large amounts of time. Automated document processing accelerates information handling and reduces repetitive work.',
    systemFit:
      'In broader systems, this acts as an intake and interpretation layer that feeds structured document data into downstream approvals, client updates, reporting, or compliance steps.',
    images: [
      '/images/systems/pdf-processing-workflow.png',
      '/images/systems/pdf-processed-output.png',
    ],
  },
  {
    title: 'Lead Folder to Deduplicated Master CSV',
    description:
      'Shows a no-code workflow where Claude cowork is pointed to a leads folder containing raw CSV files and a master CSV, then used to generate a Python merge script that combines sources into one deduplicated dataset.',
    why: 'This turns manual spreadsheet cleanup into a repeatable system. Each run merges newly added lead files, removes duplicates, and appends a run-specific added date identifier so new records are traceable over time.',
    systemFit:
      'This is the data hygiene layer in a larger growth or operations system. Clean, deduplicated lead data then feeds outreach, CRM updates, reporting, and follow-up automations with far fewer errors.',
    images: [
      '/images/systems/leads-folder-workflow.png',
    ],
  },
]

export default function SystemsPage() {
  return (
    <main className="systems-page" id="systems">
      <section className="systems-hero">
        <div className="container">
          <div className="systems-hero-inner fade-in">
            <span className="section-label">Systems</span>
            <h1 className="section-title">Systems in Practice</h1>
            <p className="section-subtitle">
              The systems below are demonstration implementations designed to
              illustrate how AI, automation, and internal tools can be integrated
              into real business workflows. In practice these systems are typically
              expanded and customized to match a company&apos;s processes and software
              stack.
            </p>
          </div>
        </div>
      </section>

      <section className="systems-list">
        <div className="container">
          {SYSTEMS.map((system, i) => (
            <article key={system.title} className={`system-card glass-card fade-in delay-${(i % 2) + 1}`}>
              <div className="system-card-body">
                <h2>{system.title}</h2>
                <p>{system.description}</p>
                <p className="system-why">
                  <strong>Why it matters:</strong> {system.why}
                </p>
                <p className="system-fit">
                  <strong>Where this fits in a broader system:</strong> {system.systemFit}
                </p>
              </div>
              <div className="system-images">
                {system.images.map((image) => (
                  <img key={image} src={image} alt={`${system.title} example`} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
