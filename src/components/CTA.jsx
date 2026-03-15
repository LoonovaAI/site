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
            <span className="section-label">Contact</span>
            <h2 className="section-title">
              Tell me what you want to improve
              <span className="gradient-text"> in your workflow.</span>
            </h2>
            <p className="section-subtitle">
              Send a quick note about your current process and where things are breaking down. I&apos;ll let you know if I can help.
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
                placeholder="What process do you want to improve?"
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
