import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const withBase = (path) => `${import.meta.env.BASE_URL}${path}`

const PROJECTS = [
    {
        title: 'AI Crop Profit Optimization System',
        desc: 'Prediction-driven crop and profit recommendation using soil signals, weather trends, and mandi pricing inputs.',
        image: withBase('gallery/AI_crop.png'),
        tech: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'REST API'],
        live: 'https://ai-crop-profit-optimization-system.onrender.com/',
        code: 'https://github.com/mrabhijeetkumar/AI-Crop-Profit-Optimization-System',
    },
    {
        title: 'Student Community Platform',
        desc: 'Community-first web app for students with secure auth, collaboration spaces, and responsive user flow.',
        image: withBase('gallery/student community.png'),
        tech: ['React', 'Supabase', 'JavaScript', 'HTML', 'CSS'],
        live: 'https://studentcommunityplatform.netlify.app/',
        code: 'https://github.com/mrabhijeetkumar/Student-Community-Platform',
    },
    {
        title: 'Portfolio Website',
        desc: 'High-performance personal portfolio built with React and Framer Motion to present work, growth, and impact.',
        image: withBase('gallery/portfolioBlack.png'),
        tech: ['React', 'Framer Motion', 'Vite', 'Responsive UI'],
        live: '#top',
        code: 'https://github.com/mrabhijeetkumar/My-Portfolio',
    },
    {
        title: 'Personalized Gift Recommendation',
        desc: 'Front-end recommendation interface that maps user preference inputs to personalized gift ideas quickly.',
        image: withBase('gallery/Gift.png'),
        tech: ['HTML', 'CSS', 'JavaScript'],
        live: 'https://mrabhijeetkumar.github.io/Personalised-Gift-Recomendation-Website/',
        code: 'https://github.com/mrabhijeetkumar/Personalised-Gift-Recomendation-Website',
    },
]

export default function Projects() {
    return (
        <div className="content-shell" style={{ padding: '1.25rem' }}>
            <header className="section-header">
                <p className="section-overline">Featured Work</p>
                <h2 className="section-title">Projects that solve practical problems</h2>
                <p className="section-description">
                    Selected work focused on AI applications, student-centered product ideas, and clean execution.
                </p>
            </header>

            <div className="projects-grid">
                {PROJECTS.map((project, index) => (
                    <motion.article
                        key={project.title}
                        className="project-card"
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.45, delay: index * 0.05 }}
                    >
                        <img src={project.image} alt={project.title} className="project-thumb" loading="lazy" />
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-desc">{project.desc}</p>

                        <div className="tech-chips">
                            {project.tech.map((tech) => (
                                <span key={tech} className="tech-chip">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="project-actions">
                            <a className="btn-ghost" href={project.code} target="_blank" rel="noreferrer">
                                <Github size={15} /> Source
                            </a>
                            <a className="btn" href={project.live} target="_blank" rel="noreferrer">
                                <ExternalLink size={15} /> Live
                            </a>
                        </div>
                    </motion.article>
                ))}
            </div>
        </div>
    )
}
