import React from 'react'
import { motion } from 'framer-motion'

const withBase = (path) => `${import.meta.env.BASE_URL}${path}`

const photo = withBase('profile.png')
const resumeFile = withBase('resume.pdf')

const quickLinks = [
  { img: withBase('github.png'), title: 'GitHub', link: 'https://github.com/mrabhijeetkumar' },
  { img: withBase('linkedin.png'), title: 'LinkedIn', link: 'https://www.linkedin.com/in/mrabhijeetkumar/' },
  { img: withBase('gmail.png'), title: 'Email', link: 'mailto:abhijeetmehtaji@gmail.com' },
  { img: withBase('whatsapp.png'), title: 'WhatsApp', link: 'https://wa.me/+917739009324' },
  { img: withBase('insta.png'), title: 'Instagram', link: 'https://www.instagram.com/the.abhijeetji/' },
]

const recruiterHighlights = [
  { label: 'Focus', value: 'AI/ML Products & Automation' },
  { label: 'Tech Stack', value: 'Python, React, Flask, SQL' },
  { label: 'Location', value: 'Rohtas, Bihar, India' },
  { label: 'Open To', value: 'Internships & Full-time roles' },
]

const impactStats = [
  { value: '4+', label: 'Production-ready projects' },
  { value: '10+', label: 'Technical certifications' },
  { value: '100%', label: 'Problem-solving mindset' },
]

export default function Home() {
  return (
    <section className="hero-shell">
      <div className="hero-layout">
        <motion.div
          className="hero-photo-wrap"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-photo-orbit"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          />
          <motion.img
            src={photo}
            alt="Abhijeet Kumar"
            className="hero-photo"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <p className="hero-tag">Recruiter-ready Digital Portfolio</p>
          <h1 className="hero-title">
            Building reliable AI solutions that are practical, measurable, and user-friendly.
          </h1>
          <p className="hero-subtitle">
            I am <strong>Abhijeet Kumar</strong> — a Machine Learning Engineer who combines data intelligence with clean product
            thinking. This portfolio is organized to quickly show my value, projects, skills, and execution quality.
          </p>

          <div className="hero-cta-row">
            <a href="#projects" className="btn">
              View Projects
            </a>
            <a href={resumeFile} className="btn-ghost" target="_blank" rel="noreferrer">
              Download Resume
            </a>
            <a href="#contact" className="btn-ghost">
              Hire Me
            </a>
          </div>

          <div className="hero-highlights-grid">
            {recruiterHighlights.map((item) => (
              <article key={item.label} className="hero-highlight-card">
                <p>{item.label}</p>
                <h3>{item.value}</h3>
              </article>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="hero-stats-grid">
        {impactStats.map((item) => (
          <article key={item.label} className="hero-stat-card">
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </article>
        ))}
      </div>

      <div className="hero-social-row">
        {quickLinks.map((item) => (
          <motion.a
            key={item.title}
            href={item.link}
            title={item.title}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="hero-social-link"
          >
            <img src={item.img} alt={item.title} />
          </motion.a>
        ))}
      </div>
    </section>
  )
}
