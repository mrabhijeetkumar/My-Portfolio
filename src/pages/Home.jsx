import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa'

const withBase = (path) => `${import.meta.env.BASE_URL}${path}`

const photo = withBase('profile.png')
const resumeLink = withBase('resume.pdf')

export default function Home() {
  const quickLinks = [
    { icon: FaGithub, title: 'GitHub', link: 'https://github.com/mrabhijeetkumar' },
    { icon: FaLinkedinIn, title: 'LinkedIn', link: 'https://www.linkedin.com/in/mrabhijeetkumar/' },
    { icon: FaEnvelope, title: 'Email', link: 'mailto:abhijeetmehtaji@gmail.com' },
    { icon: FaWhatsapp, title: 'WhatsApp', link: 'https://wa.me/+917739009324' },
    { icon: FaInstagram, title: 'Instagram', link: 'https://www.instagram.com/the.abhijeetji/' },
  ]

  const typeStrings = [
    'Machine Learning Engineer',
    'Full Stack Developer',
    'Building AI-Powered Products',
  ]

  const [displayText, setDisplayText] = useState('')
  const [typeIndex, setTypeIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let typingTimeout
    const currentString = typeStrings[typeIndex]

    if (!isDeleting && charIndex < currentString.length) {
      typingTimeout = setTimeout(() => {
        setDisplayText(currentString.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, 65)
    } else if (isDeleting && charIndex > 0) {
      typingTimeout = setTimeout(() => {
        setDisplayText(currentString.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, 35)
    } else if (!isDeleting && charIndex === currentString.length) {
      typingTimeout = setTimeout(() => setIsDeleting(true), 1100)
    } else if (isDeleting && charIndex === 0) {
      typingTimeout = setTimeout(() => {
        setIsDeleting(false)
        setTypeIndex((prev) => (prev + 1) % typeStrings.length)
      }, 350)
    }

    return () => clearTimeout(typingTimeout)
  }, [charIndex, isDeleting, typeIndex, typeStrings])

  return (
    <section
      style={{
        minHeight: 'calc(100vh - var(--nav-height))',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Fix: Content block ko section ke center me lane ke liye center use kiya hai
        alignItems: 'center',
        paddingTop: '4rem', // Fix: Profressional breathing room dene ke liye center kiya hai to padding badhaya hai
        paddingBottom: '4rem',
        margin: 0,
        background:
          'radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--accent) 18%, transparent), transparent 80%)',
        color: 'var(--text)',
        boxSizing: 'border-box',
      }}
    >
      <style>
        {`
          @keyframes blink {
            50% { border-color: transparent; }
          }
          .typing-effect {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            border-right: .15em solid var(--accent);
            min-height: 1.2em;
            font-family: inherit;
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--accent);
            letter-spacing: 0.01em;
            animation: blink .8s infinite;
            max-width: 100%;
          }
          @media (max-width: 900px) {
            .home-content-stack {
              gap: 1.2rem !important;
            }
            .home-info-panel {
              min-width: 100% !important;
            }
            .home-cta-wrap {
              width: 100%;
              gap: 0.8rem !important;
            }
            .home-cta-wrap a {
              flex: 1;
              text-align: center;
              padding-left: 0.8rem !important;
              padding-right: 0.8rem !important;
            }
          }
        `}
      </style>

      <div
        className="home-content-stack"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1250px',
          flexWrap: 'wrap',
          gap: '2.5rem', // Center kar rahe hain isliye overall gap thoda standard kiya hai.
          flex: '0 0 auto',
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: 'relative',
            flex: '0 0 380px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              width: '330px',
              height: '330px',
              borderRadius: '50%',
              border: '2px dashed var(--accent)',
              opacity: 0.3,
            }}
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'relative',
              borderRadius: '50%',
              overflow: 'hidden',
              width: '300px',
              height: '300px',
              boxShadow: '0 0 45px rgba(0,255,200,0.25)',
              border: '3px solid var(--accent)',
              zIndex: 1,
            }}
          >
            <motion.img
              src={photo}
              alt="Abhijeet Kumar"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="home-info-panel"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{
            flex: 1,
            minWidth: '360px',
            maxWidth: '700px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              maxWidth: 600,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              padding: '0 1rem',
            }}
          >
            {/* Flat structure for better spacing control */}
            <span
              style={{
                fontSize: 'clamp(2rem, 4.2vw, 3.2rem)',
                color: 'var(--text)',
                fontWeight: 800,
                marginBottom: '0.25rem', // Fix: Bottom margin sligtly increased to create a standard separation.
                letterSpacing: '-0.5px',
                lineHeight: 0.95,
              }}
            >
              Hi, I&apos;m
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.2rem)',
                fontWeight: 900,
                color: 'var(--text)',
                margin: 0,
                lineHeight: 1.13,
                letterSpacing: '-1.5px', // Tight lettering is kept as a style choice.
              }}
            >
              Abhijeet Kumar
            </h1>

            <h2 style={{ margin: '0.8rem 0 0.6rem 0', display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)' }}>I am a</span>
              <span className="typing-effect">{displayText}</span>
            </h2>

            <p
              style={{
                fontSize: '1.03rem',
                color: 'var(--text-muted)',
                margin: '0 0 1.2rem 0', // Fix: Reduced bottom margin.
                maxWidth: 520,
                fontWeight: 500,
                lineHeight: 1.7,
                letterSpacing: '0.01em',
              }}
            >
              I create fast, responsive, and user-friendly web applications with practical machine-learning features.
              My focus is writing clean code, designing smooth user experiences, and delivering reliable solutions.
            </p>

            <div className="home-cta-wrap" style={{ display: 'flex', gap: '1rem', marginBottom: '1.3rem', flexWrap: 'wrap' }}>
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'var(--accent)',
                  color: 'var(--bg)',
                  fontWeight: 700,
                  padding: '0.78rem 2.1rem',
                  borderRadius: '2rem',
                  fontSize: '1.03rem',
                  boxShadow: '0 4px 20px color-mix(in srgb, var(--accent) 35%, transparent)',
                  textDecoration: 'none',
                  transition: 'transform 0.18s, box-shadow 0.18s, filter 0.18s',
                  letterSpacing: '0.01em',
                  border: '2px solid var(--accent)',
                  outline: 'none',
                  display: 'inline-block',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.filter = 'brightness(1.08)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.filter = 'brightness(1)'
                }}
              >
                Download CV
              </a>

              <a
                href="#projects"
                style={{
                  background: 'transparent',
                  color: 'var(--accent)',
                  fontWeight: 700,
                  padding: '0.78rem 2.1rem',
                  borderRadius: '2rem',
                  fontSize: '1.03rem',
                  border: '2px solid var(--accent)',
                  textDecoration: 'none',
                  transition: 'transform 0.18s, background 0.18s, color 0.18s, box-shadow 0.18s',
                  letterSpacing: '0.01em',
                  outline: 'none',
                  display: 'inline-block',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'color-mix(in srgb, var(--accent) 16%, transparent)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                View Projects
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '14px',
          marginBottom: '1.5rem', // Reduced icon margins for standard positioning.
          marginTop: '0.8rem', // Reduced icon margins for standard positioning.
        }}
      >
        {quickLinks.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.title}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.title}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 50,
                height: 50,
                borderRadius: '50%',
                border: 'none',
                background: '#000',
                boxShadow: '0 6px 14px rgba(0, 0, 0, 0.22)',
                transition: 'transform 0.18s, box-shadow 0.18s, background 0.18s',
                textDecoration: 'none',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#111'
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.04)'
                e.currentTarget.style.boxShadow = '0 8px 18px rgba(0, 0, 0, 0.3)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = '#000'
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 6px 14px rgba(0, 0, 0, 0.22)'
              }}
            >
              <Icon size={32} color="#fff" aria-hidden="true" />
            </a>
          )
        })}
      </div>
    </section>
  )
}