import React from 'react'
import { motion } from 'framer-motion'

const strengths = [
  {
    title: 'Problem-to-Solution Ownership',
    text: 'I translate vague business problems into structured ML workflows, from data preparation and model design to deployment-ready outputs.',
  },
  {
    title: 'Balanced Engineering Mindset',
    text: 'I care about both algorithm quality and product usability, so the final solution is technically correct and easy for users to trust.',
  },
  {
    title: 'Continuous Improvement',
    text: 'I actively learn from new AI tools, research trends, and project retrospectives to improve speed, reliability, and impact in each build.',
  },
]

export default function AboutMe() {
  return (
    <div className="content-shell about-shell">
      <header className="section-header">
        <p className="section-overline">Professional Summary</p>
        <h2 className="section-title">Why I can add value from day one</h2>
        <p className="section-description">
          I am a Computer Science learner and ML-focused builder with experience creating intelligent applications for real use cases,
          including prediction systems, recommendation engines, and responsive web products.
        </p>
      </header>

      <div className="about-grid">
        <motion.article
          className="about-main-card"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <h3>What recruiters can expect</h3>
          <ul>
            <li>Strong fundamentals in Python, data structures, model development, and API-first backend workflows.</li>
            <li>Hands-on React front-end experience to present ML outcomes in clear and interactive product interfaces.</li>
            <li>Fast learner with a consistent habit of shipping complete projects, not just isolated prototypes.</li>
          </ul>
        </motion.article>

        <div className="about-strengths-list">
          {strengths.map((item, index) => (
            <motion.article
              key={item.title}
              className="about-strength-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ delay: index * 0.06 }}
            >
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}
