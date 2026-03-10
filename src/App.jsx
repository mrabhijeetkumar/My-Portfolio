import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import AnimatedBackground from './components/AnimatedBackground'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Certificates from './pages/Certificates'
import Resume from './pages/Resume'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import SkillNetwork from './pages/Skills'

export default function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <AnimatedBackground />
        <Navbar />
        <main style={{ flex: 1, paddingTop: 70 }}>
          <section id="home">
            <Home />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
            <SkillNetwork />
          </section>
          <section id="certificates">
            <Certificates />
          </section>
          <section id="resume">
            <Resume />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <footer className="footer">
          © {new Date().getFullYear()} Abhijeet Kumar — Built with React
        </footer>
      </div>
    </ThemeProvider>
  )
}
