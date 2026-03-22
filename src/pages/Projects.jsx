import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const withBase = (path) => `${import.meta.env.BASE_URL}${path}`

const PROJECTS = [
    {
        title: 'AI Crop Profit Optimization System',
        desc: 'Built a web platform that predicts the most profitable crops for farmers by analyzing soil, weather, and market data. Uses Python, Flask, and Scikit-learn for real-time ML recommendations. Helped users increase yield and profit with actionable insights.',
        image: withBase('gallery/AI_crop.png'),
        tech: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'REST API'],
        live: 'https://ai-crop-profit-optimization-system.onrender.com/',
        code: 'https://github.com/mrabhijeetkumar/AI-Crop-Profit-Optimization-System',
    },
    {
        title: 'Student Community Platform',
        desc: 'Developed a secure, real-time web app for student collaboration with chat, project boards, and resource sharing. Built with React and Supabase, enabling 200+ users to connect and share knowledge efficiently.',
        image: withBase('gallery/student community.png'),
        tech: ['React', 'Supabase', 'JavaScript', 'HTML', 'CSS'],
        live: 'https://studentcommunityplatform.netlify.app/',
        code: 'https://github.com/mrabhijeetkumar/Student-Community-Platform',
    },
    {
        title: 'Portfolio Website',
        desc: 'Designed and engineered a high-performance portfolio using React and Framer Motion. Features smooth animations, responsive design, and fast load times to showcase projects and skills to recruiters.',
        image: withBase('gallery/portfolioBlack.png'),
        tech: ['React', 'Framer Motion', 'Vite', 'Responsive UI'],
        live: '#top',
        code: 'https://github.com/mrabhijeetkumar/My-Portfolio',
    },
    {
        title: 'Personalized Gift Recommendation',
        desc: 'Created a recommendation engine that matches user preferences to unique gift ideas. Built with vanilla JS and CSS for instant, interactive suggestions. Used by 100+ users for special occasions.',
        image: withBase('gallery/Gift.png'),
        tech: ['HTML', 'CSS', 'JavaScript'],
        live: 'https://mrabhijeetkumar.github.io/Personalised-Gift-Recomendation-Website/',
        code: 'https://github.com/mrabhijeetkumar/Personalised-Gift-Recomendation-Website',
    },
    {
        title: 'Certificate Showcase',
        desc: 'Built a dynamic gallery to display earned certificates and achievements. Uses React and CSS grid for a clean, filterable layout. Makes credentials easily accessible for recruiters.',
        image: withBase('gallery/ach1.svg'),
        tech: ['React', 'CSS Grid', 'SVG'],
        live: '#certificates',
        code: 'https://github.com/mrabhijeetkumar/Certificate-Showcase',
    },
    {
        title: 'Resume Parser Tool',
        desc: 'Engineered a tool to extract and summarize key skills from uploaded resumes using Python and NLP. Helps automate candidate screening for hiring teams.',
        image: withBase('gallery/project2.svg'),
        tech: ['Python', 'NLP', 'Flask'],
        live: '#resume',
        code: 'https://github.com/mrabhijeetkumar/Resume-Parser',
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
                {PROJECTS.slice(0, 6).map((project, index) => (
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
                            <a className="btn" href={project.live} target="_blank" rel="noreferrer">
                                <ExternalLink size={15} /> Live Demo
                            </a>
                            <a className="btn-ghost" href={project.code} target="_blank" rel="noreferrer">
                                <Github size={15} /> GitHub Code
                            </a>
                        </div>
                    </motion.article>
                ))}
            </div>
        </div>
    )
}
