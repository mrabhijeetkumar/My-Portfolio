import React from 'react'

const withBase = (path) => `${import.meta.env.BASE_URL}${path}`

export default function About() {
  return (
    <div className="content-shell" style={{ padding: '1.25rem' }}>
      <header className="section-header">
        <p className="section-overline">About</p>
        <h2 className="section-title">Building products with clean UX and practical AI</h2>
        <p className="section-description">
          I enjoy creating fast, user-focused apps and blending them with data-driven intelligence.
        </p>
      </header>

      <div className="about-grid">
        <article className="about-card">
          <div className="about-copy">
            <p>
              I am a Computer Science student who loves shipping end-to-end solutions—from responsive frontends to
              scalable backends and machine learning pipelines.
            </p>
            <p>
              My work focuses on usability, performance, and reliability. I regularly build projects in React, Python,
              Flask, and modern web tooling while continuously improving my foundations in DSA and system design.
            </p>
            <p>
              I am currently looking for opportunities where I can contribute to meaningful products and keep learning
              from strong engineering teams.
            </p>
          </div>
          <a href={withBase('resume.pdf')} className="about-resume-btn" target="_blank" rel="noreferrer">
            Read Resume
          </a>
        </article>

        <article className="about-card" style={{ display: 'grid', placeItems: 'center', gap: '1rem' }}>
          <div className="profile-image-container" style={{ margin: 0 }}>
            <img src={withBase('profile.png')} alt="Abhijeet Kumar" className="about-profile-img" />
          </div>
          <ul className="timeline" style={{ width: '100%' }}>
            <li>
              <strong>B.Tech CSE (Machine Learning)</strong>
              <span>Lovely Professional University • 2023 – 2027</span>
            </li>
            <li>
              <strong>Core Focus</strong>
              <span>React, Python, Machine Learning, Flask, SQL</span>
            </li>
            <li>
              <strong>Goal</strong>
              <span>Build products that are useful, scalable, and easy to use</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  )
}
