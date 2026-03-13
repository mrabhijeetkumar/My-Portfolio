import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const withBase = (path) => `${import.meta.env.BASE_URL}${path}`

const CERTIFICATES = [
    { title: 'Master Gen AI', org: 'Udemy', date: '2025', image: withBase('certs/Master Gen AI.jpg') },
    { title: 'ChatGPT Prompt Engineering', org: 'Infosys Springboard', date: '2025', image: withBase('certs/ChatGPT prompt engineering.jpg') },
    { title: 'DSA with C++', org: 'CSE Pathshala', date: '2025', image: withBase('certs/DSA.png') },
    { title: 'Cloud Computing', org: 'NPTEL', date: '2025', image: withBase('certs/Cloud.png') },
    { title: 'Responsive Web Design', org: 'FreeCodeCamp', date: '2023', image: withBase('certs/web-design.png') },
    { title: 'Build Generative AI', org: 'Udemy', date: '2025', image: withBase('certs/Build Generative AI.jpg') },
    { title: 'Object Oriented Programming', org: 'Neo Colab', date: '2024', image: withBase('certs/OOPS.jpg') },
    {
        title: 'Fundamentals of Network Communication',
        org: 'Coursera',
        date: '2024',
        image: withBase('certs/Fundamnetal of Network.jpg'),
    },
]

export default function Certificates() {
    const [activeCert, setActiveCert] = useState(null)

    useEffect(() => {
        const onEsc = (event) => {
            if (event.key === 'Escape') {
                setActiveCert(null)
            }
        }

        window.addEventListener('keydown', onEsc)
        return () => window.removeEventListener('keydown', onEsc)
    }, [])

    return (
        <div className="content-shell" style={{ padding: '1.25rem' }}>
            <header className="section-header">
                <p className="section-overline">Validation</p>
                <h2 className="section-title">Certifications and continuous learning</h2>
                <p className="section-description">
                    Structured upskilling across AI, software engineering, cloud, and core computer science concepts.
                </p>
            </header>

            <div className="certs-grid">
                {CERTIFICATES.map((cert, index) => (
                    <motion.article
                        key={cert.title}
                        className="cert-card"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                    >
                        <img src={cert.image} alt={cert.title} loading="lazy" />
                        <h3 className="project-title" style={{ marginTop: '0.75rem' }}>
                            {cert.title}
                        </h3>
                        <p className="cert-meta">
                            {cert.org} • {cert.date}
                        </p>
                        <button type="button" className="btn-ghost" style={{ marginTop: '0.8rem' }} onClick={() => setActiveCert(cert)}>
                            Preview
                        </button>
                    </motion.article>
                ))}
            </div>

            <AnimatePresence>
                {activeCert && (
                    <motion.div
                        className="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveCert(null)}
                    >
                        <img src={activeCert.image} alt={activeCert.title} onClick={(event) => event.stopPropagation()} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
