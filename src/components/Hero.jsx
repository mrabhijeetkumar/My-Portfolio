import React from 'react'
import { motion } from 'framer-motion'

const withBase = (path) => `${import.meta.env.BASE_URL}${path}`

const photo = withBase('profile.png')

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <motion.div
                    className="hero-photo"
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img src={photo} alt="Abhijeet Kumar" className="hero-img profile-img-unified" />
                </motion.div>
                <motion.div
                    className="hero-info"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="hero-title">
                        Abhijeet Kumar
                        <span className="hero-role">AI Engineer & Full-Stack Developer</span>
                    </h1>
                    <p className="hero-value">
                        Building scalable AI-powered web applications with real-time data and modern cloud stacks.
                    </p>
                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="/resume.pdf" className="btn btn-outline" download>Download Resume</a>
                        <a href="#contact" className="btn btn-secondary">Contact Me</a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
