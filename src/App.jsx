import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import AnimatedBackground from './components/AnimatedBackground'
import Home from './pages/Home'
import About from './pages/About'
import SkillNetwork from './pages/Skills'
import Projects from './pages/Projects'
import Certificates from './pages/Certificates'
// import Resume from './pages/Resume'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <ThemeProvider>
      <div className="app-shell">
        <AnimatedBackground />
        <Navbar />
        <main className="page-main" id="top">
          <section id="home" className="section-block section-home">
            <Home />
          </section>
          <section id="about" className="section-block">
            <About />
          </section>
          <section id="skills" className="section-block">
            <SkillNetwork />
          </section>
          <section id="projects" className="section-block">
            <Projects />
          </section>
          <section id="certificates" className="section-block">
            <Certificates />
          </section>

          <section id="contact" className="section-block section-contact">
            <Contact />
          </section>
        </main>
        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Abhijeet Kumar</p>
          <p>Designed and developed with React, motion, and a lot of curiosity.</p>
        </footer>
      </div>
    </ThemeProvider>
  )
}
