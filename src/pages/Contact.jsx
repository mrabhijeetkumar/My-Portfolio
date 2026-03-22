import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const withBase = (path) => `${import.meta.env.BASE_URL}${path}`

const quickLinks = [
  { img: withBase('github.png'), title: 'GitHub', link: 'https://github.com/mrabhijeetkumar' },
  { img: withBase('linkedin.png'), title: 'LinkedIn', link: 'https://www.linkedin.com/in/mrabhijeetkumar/' },
  { img: withBase('gmail.png'), title: 'Email', link: 'mailto:abhijeetmehtaji@gmail.com' },
  { img: withBase('whatsapp.png'), title: 'WhatsApp', link: 'https://wa.me/+917739009324' },
  { img: withBase('insta.png'), title: 'Instagram', link: 'https://www.instagram.com/the.abhijeetji/' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', contact: '', subject: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!form.name || !form.contact || !form.subject || !form.message) {
      setStatus('⚠️ Please fill in all fields.')
      return
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus('⚠️ EmailJS is not configured. Add env values and restart the server.')
      return
    }

    setStatus('Sending...')

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          contact_info: form.contact,
          subject: form.subject,
          message: form.message,
        },
        publicKey,
      )
      .then(() => {
        setStatus('✅ Message sent successfully!')
        setForm({ name: '', contact: '', subject: '', message: '' })
      })
      .catch(() => {
        setStatus('❌ Failed to send. Please check EmailJS configuration.')
      })
  }

  return (
    <div className="content-shell" style={{ padding: '1.25rem' }}>
      <header className="section-header">
        <p className="section-overline">Contact</p>
        <h2 className="section-title">Let&apos;s connect and collaborate</h2>
        <p className="section-description">Reach out for project ideas, internships, or collaboration opportunities.</p>
      </header>

      <div className="contact-grid">
        <article className="contact-card">
          <p className="contact-note">
            Whether you have a project in mind or just want to connect, I would love to hear from you.
          </p>
          <div className="contact-links">
            {quickLinks.map((item) => (
              <a key={item.title} href={item.link} target="_blank" rel="noreferrer" className="social-pill" title={item.title}>
                <img src={item.img} alt={item.title} />
              </a>
            ))}
          </div>
        </article>

        <article className="contact-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input className="field" type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
            <input
              className="field"
              type="text"
              name="contact"
              placeholder="Your Email or Phone"
              value={form.contact}
              onChange={handleChange}
              required
            />
            <input className="field" type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />
            <textarea
              className="field"
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button className="btn" type="submit">
              Send Message
            </button>
            {status ? <p className={`status-msg ${status.startsWith('✅') ? 'success' : status.startsWith('❌') ? 'error' : ''}`}>{status}</p> : null}
          </form>
        </article>
      </div>
    </div>
  )
}
