import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const withBase = (path) => `${import.meta.env.BASE_URL}${path}`

const photo = withBase('profile.png')
const resumeLink = withBase('resume.pdf')
const githubLogo = withBase('github.png')
const linkedinLogo = withBase('linkedin.png')
const gmailLogo = withBase('gmail.png')
const whatsappLogo = withBase('whatsapp.png')
const instagramLogo = withBase('insta.png')

export default function Home() {
  const quickLinks = [
    { img: githubLogo, title: 'GitHub', link: 'https://github.com/mrabhijeetkumar' },
    { img: linkedinLogo, title: 'LinkedIn', link: 'https://www.linkedin.com/in/mrabhijeetkumar/' },
    { img: gmailLogo, title: 'Email', link: 'mailto:abhijeetmehtaji@gmail.com' },
    { img: whatsappLogo, title: 'WhatsApp', link: 'https://wa.me/+917739009324' },
    { img: instagramLogo, title: 'Instagram', link: 'https://www.instagram.com/the.abhijeetji/' },
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
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '1rem',
        paddingBottom: '1rem',
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
          gap: '2rem',
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
            <span
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-muted)',
                fontWeight: 600,
                marginBottom: '0.2rem',
                letterSpacing: '0.5px',
              }}
            >
              Hi, I&apos;m
            </span>
            <h1
              style={{
                fontSize: '3rem',
                fontWeight: 900,
                color: 'var(--text)',
                margin: 0,
                lineHeight: 1.13,
                letterSpacing: '-1.5px',
              }}
            >
              Abhijeet Kumar
            </h1>

            <h2 style={{ margin: '1.05rem 0 0.9rem 0' }}>
              <span className="typing-effect">{displayText}</span>
            </h2>

            <p
              style={{
                fontSize: '1.03rem',
                color: 'var(--text-muted)',
                margin: '0 0 1.6rem 0',
                maxWidth: 520,
                fontWeight: 500,
                lineHeight: 1.7,
                letterSpacing: '0.01em',
              }}
            >
              I create fast, responsive, and user-friendly web applications with practical machine-learning features.
              My focus is writing clean code, designing smooth user experiences, and delivering reliable solutions.
            </p>

            <div className="home-cta-wrap" style={{ display: 'flex', gap: '1rem', marginBottom: '1.7rem', flexWrap: 'wrap' }}>
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
          marginBottom: '2.5rem',
          marginTop: '1.2rem',
        }}
      >
        {quickLinks.map((link) => (
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
              width: 40,
              height: 40,
              borderRadius: '50%',
              border: '1.5px solid color-mix(in srgb, var(--accent) 60%, transparent)',
              background: 'color-mix(in srgb, var(--accent) 10%, transparent)',
              boxShadow: '0 6px 14px color-mix(in srgb, var(--accent) 14%, transparent)',
              transition: 'transform 0.18s, box-shadow 0.18s, background 0.18s',
              textDecoration: 'none',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'color-mix(in srgb, var(--accent) 22%, transparent)'
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.04)'
              e.currentTarget.style.boxShadow = '0 8px 18px color-mix(in srgb, var(--accent) 24%, transparent)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'color-mix(in srgb, var(--accent) 10%, transparent)'
              e.currentTarget.style.transform = 'translateY(0) scale(1)'
              e.currentTarget.style.boxShadow = '0 6px 14px color-mix(in srgb, var(--accent) 14%, transparent)'
            }}
          >
            <img
              src={link.img}
              alt={link.title}
              style={{
                width: 18,
                height: 18,
                filter: 'brightness(0) saturate(100%) invert(88%) sepia(84%) saturate(2622%) hue-rotate(144deg) brightness(101%) contrast(106%)',
              }}
            />
          </a>
        ))}
      </div>
    </section>
  )
}
