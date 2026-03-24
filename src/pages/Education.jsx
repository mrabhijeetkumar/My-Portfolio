import React from 'react'
import { GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'

const EDUCATION_ITEMS = [
  {
    institute: 'Lovely Professional University, Phagwara',
    degree: 'Bachelor of Technology (CSE)',
    period: 'Aug 2023 – July 2027',
    grade: '6.33 CGPA',
    summary:
      "I am currently pursuing my Bachelor's in Computer Science and Engineering with strong focus on data structures, algorithms, OOP, and database systems.",
  },
  {
    institute: 'Baulia SR. Secondary, Baulia, Rohtas-Bihar',
    degree: 'BSEB (Class XII)',
    period: 'Apr 2021 – Apr 2023',
    grade: '67%',
    summary:
      'Completed higher secondary education with emphasis on analytical subjects and computer fundamentals.',
  },
  {
    institute: 'Utkramit Madhamik School, Majhigawan, Rohtas-Bihar',
    degree: 'BSEB (Class X)',
    period: 'Apr 2019 – Apr 2021',
    grade: '82%',
    summary:
      'Built core academic foundation through strong performance in science, mathematics, and communication.',
  },
]

export default function Education() {
  return (
    <div className="content-shell" style={{ padding: '1.25rem' }}>
      <header className="section-header">
        <p className="section-overline">Qualification</p>
        <h2 className="section-title">Education</h2>
        <p className="section-description">
          My academic path that shaped fundamentals in software engineering and problem-solving.
        </p>
      </header>

      <div className="education-track" aria-label="Education timeline">
        {EDUCATION_ITEMS.map((item, index) => (
          <motion.article
            key={item.institute}
            className="education-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <div className="education-card-head">
              <span className="education-logo" aria-hidden="true">
                <GraduationCap size={18} />
              </span>
              <div>
                <h3>{item.institute}</h3>
                <p className="education-degree">{item.degree}</p>
                <p className="education-period">{item.period}</p>
              </div>
            </div>

            <p className="education-grade">
              Grade: <strong>{item.grade}</strong>
            </p>
            <p className="education-summary">{item.summary}</p>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
