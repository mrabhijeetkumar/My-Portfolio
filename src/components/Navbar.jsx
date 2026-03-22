import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const withBase = (path) => `${import.meta.env.BASE_URL}${path}`

const links = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Certificates', to: 'certificates' },
  { label: 'Resume', to: 'resume' },
  { label: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const { isDark, toggleTheme, motionAllowed } = useTheme()
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.to))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0.01,
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleNavigate = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileOpen(false)
    }
  }

  return (
    <header className="site-header">
      <nav className="navbar">
        <button
          type="button"
          className="brand-wrap"
          onClick={() => handleNavigate('home')}
          aria-label="Go to home section"
        >
          <span className="brand-logo-wrap">
            <img src={withBase('logos/ABHIJEET_logo.svg')} alt="Abhijeet logo" className="brand-logo" />
          </span>
          <span className="brand-meta">
            <strong>Abhijeet Kumar</strong>
            <small>Machine Learning Engineer</small>
          </span>
        </button>

        <div className={`nav-links-wrap ${isMobileOpen ? 'open' : ''}`}>
          {links.map((link) => {
            const isActive = activeSection === link.to

            return (
              <button
                key={link.to}
                type="button"
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={() => handleNavigate(link.to)}
              >
                {motionAllowed ? (
                  <motion.span whileHover={{ y: -1 }}>{link.label}</motion.span>
                ) : (
                  <span>{link.label}</span>
                )}
              </button>
            )
          })}
        </div>

        <div className="nav-actions">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle"
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setIsMobileOpen((open) => !open)}
          >
            {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
    </header>
  )
}
