import React from 'react'

const withBase = (path) => `${import.meta.env.BASE_URL}${path}`

const photo = withBase('profile.png')
const resumePdf = withBase('resume.pdf')

const LINKS = [
  { img: withBase('github.png'), title: 'GitHub', link: 'https://github.com/mrabhijeetkumar' },
  { img: withBase('linkedin.png'), title: 'LinkedIn', link: 'https://www.linkedin.com/in/mrabhijeetkumar/' },
  { img: withBase('gmail.png'), title: 'Email', link: 'mailto:abhijeetmehtaji@gmail.com' },
  { img: withBase('whatsapp.png'), title: 'WhatsApp', link: 'https://wa.me/+917739009324' },
  { img: withBase('insta.png'), title: 'Instagram', link: 'https://www.instagram.com/the.abhijeetji/' },
]

export default function Home() {
  return (
    <div className="content-shell hero-panel">
      <div className="hero-portrait">
        <img src={photo} alt="Abhijeet Kumar" />
        <span className="hero-badge">Open to internships & collaborations</span>
      </div>

      <div className="hero-copy">
        <h1 className="hero-title">
          Hi, I&apos;m <span>Abhijeet Kumar</span>
        </h1>
        <p className="hero-sub">
          Computer Science student focused on full-stack development and machine learning systems that solve practical,
          real-world problems.
        </p>

        <div className="hero-chips">
          <span className="hero-chip">Machine Learning Engineer</span>
          <span className="hero-chip">Full Stack Developer</span>
          <span className="hero-chip">Problem Solver</span>
        </div>

        <div className="hero-actions">
          <a href={resumePdf} className="btn" target="_blank" rel="noreferrer">
            Download CV
          </a>
          <a href="#projects" className="btn-ghost">
            View Projects
          </a>
        </div>

        <div className="social-strip" aria-label="social links">
          {LINKS.map((item) => (
            <a key={item.title} className="social-pill" href={item.link} target="_blank" rel="noreferrer" title={item.title}>
              <img src={item.img} alt={item.title} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
