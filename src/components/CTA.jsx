import { useState } from 'react'

const INITIAL_FORM = {
  name: '',
  email: '',
  company: '',
  message: '',
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default function CTA() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState({ type: '', text: '' })

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (status.type) setStatus({ type: '', text: '' })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const trimmed = {
      name: form.name.trim(),
      email: form.email.trim(),
      company: form.company.trim(),
      message: form.message.trim(),
    }

    if (!trimmed.name || !trimmed.email || !trimmed.message) {
      setStatus({ type: 'error', text: 'Please complete name, email, and message.' })
      return
    }

    if (!isValidEmail(trimmed.email)) {
      setStatus({ type: 'error', text: 'Please enter a valid email address.' })
      return
    }

    const subject = encodeURIComponent(`New Loonova contact from ${trimmed.name}`)
    const body = encodeURIComponent(
      `Name: ${trimmed.name}\nEmail: ${trimmed.email}\nCompany: ${trimmed.company || 'N/A'}\n\nMessage:\n${trimmed.message}`
    )

    window.location.href = `mailto:info@loonovaai.com?subject=${subject}&body=${body}`
    setStatus({ type: 'success', text: 'Draft opened. Send your message from your email app.' })
    setForm(INITIAL_FORM)
  }

  return (
    <section id="contact" className="cta-section">
      <div className="container">
        <div className="cta-inner fade-in">
          <div className="contact-intro">
            <span className="section-label">Get Started</span>
            <h2 className="section-title">
              Bring AI into your firm with a system
              that <span className="gradient-text">actually works.</span>
            </h2>
            <p className="section-subtitle">
              This is moving quickly. The firms putting the right systems in place now
              are building an edge that gets harder to close later. If you want to see
              whether your business is a good fit and where your team should reallocate
              time to higher-ROI work AI cannot replace, let&apos;s talk.
            </p>
          </div>

          <form className="contact-form" onSubmit={onSubmit} noValidate>
            <label className="field">
              <span>Name *</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </label>

            <label className="field">
              <span>Email *</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@company.com"
                autoComplete="email"
                required
              />
            </label>

            <label className="field">
              <span>Company</span>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={onChange}
                placeholder="Your company"
                autoComplete="organization"
              />
            </label>

            <label className="field field-message">
              <span>Message *</span>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows="5"
                placeholder="What are you trying to improve with AI?"
                required
              />
            </label>

            <button type="submit" className="btn-primary contact-submit">
              Send Message
            </button>

            {status.text && (
              <p className={`form-status ${status.type === 'error' ? 'is-error' : 'is-success'}`}>
                {status.text}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
