import React from 'react'

const resumePdf = `${import.meta.env.BASE_URL}resume.pdf`

const educationItems = [
  {
    degree: 'B.Tech in Computer Science and Engineering (Machine Learning)',
    institute: 'Lovely Professional University',
    duration: '2023 - 2027',
    score: 'CGPA: 6.5',
  },
  {
    degree: 'Senior Secondary (12th)',
    institute: 'SR. Secondary School (BSEB)',
    duration: '2023',
    score: '66.8%',
  },
  {
    degree: 'Secondary (10th)',
    institute: 'Utkramit M S (BSEB)',
    duration: '2021',
    score: '82.4%',
  },
]

export default function Resume() {
  return (
    <div className="content-shell" style={{ padding: '1.25rem' }}>
      <header className="section-header">
        <p className="section-overline">Resume</p>
        <h2 className="section-title">Profile and education snapshot</h2>
        <p className="section-description">A quick overview of academic background and downloadable resume.</p>
      </header>

      <div className="resume-grid">
        <article className="resume-card">
          <h3>Abhijeet Kumar</h3>
          <p>Machine Learning Engineer | Full Stack Developer</p>
          <p>Phagwara, Punjab</p>
          <p>
            <a href="mailto:abhijeetmehtaji@gmail.com" className="btn-link">
              abhijeetmehtaji@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:+917739009324" className="btn-link">
              +91 7739009324
            </a>
          </p>
        </article>

        <article className="resume-card">
          <h3>Professional Summary</h3>
          <p>
            Aspiring machine learning professional with hands-on experience in ML and web development, focused on
            building practical AI solutions that create measurable value.
          </p>
        </article>

        <article className="resume-card" style={{ gridColumn: '1 / -1' }}>
          <h3>Education</h3>
          <ul>
            {educationItems.map((item) => (
              <li key={`${item.degree}-${item.duration}`}>
                <strong>{item.degree}</strong> — {item.institute} ({item.duration}, {item.score})
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="resume-frame">
        <iframe src={resumePdf} title="Abhijeet Kumar Resume" loading="lazy" />
      </div>

      <div style={{ marginTop: '1rem' }}>
        <a href={resumePdf} download className="btn">
          Download Resume PDF
        </a>
      </div>
    </div>
  )
}
