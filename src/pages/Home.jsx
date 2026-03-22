import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const withBase = (path) => `${import.meta.env.BASE_URL}${path}`

// 🖼️ Public assets resolved against the GitHub Pages base path
const photo = withBase('profile.png')
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

  // Animated typewriter effect for headline
  const typeStrings = [
    'Machine Learning Engineer',
    'Full Stack Developer & Machine Learning Engineer',
  ];
  const [displayText, setDisplayText] = useState('');
  const [typeIndex, setTypeIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingTimeout;
    const currentString = typeStrings[typeIndex];
    if (!isDeleting && charIndex < currentString.length) {
      typingTimeout = setTimeout(() => {
        setDisplayText(currentString.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 70);
    } else if (isDeleting && charIndex > 0) {
      typingTimeout = setTimeout(() => {
        setDisplayText(currentString.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
    } else if (!isDeleting && charIndex === currentString.length) {
      typingTimeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && charIndex === 0) {
      typingTimeout = setTimeout(() => {
        setIsDeleting(false);
        setTypeIndex((typeIndex + 1) % typeStrings.length);
      }, 500);
    }
    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, typeIndex]);

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
        background: 'radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--accent) 18%, transparent), transparent 80%)',
        color: 'var(--text)',
        boxSizing: 'border-box',
      }}
    >
      <style>
        {`
          @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
          }
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
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--accent);
            letter-spacing: 0.01em;
            animation: blink .8s infinite;
          }
        `}
      </style>

      {/* --- Top Section: Photo + Info --- */}
      <div
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
        {/* --- Left: Animated Glowing Photo --- */}
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

        {/* --- Right: Info Section --- */}
        <motion.div
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
          <h1
            style={{
              fontSize: '3.2rem',
              fontWeight: 800,
              lineHeight: 1.13,
              marginBottom: '0.2rem',
              color: 'var(--text)',
              letterSpacing: '-1px',
              background: 'linear-gradient(90deg, var(--text) 60%, var(--accent) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
            }}
          >
            Hi, I'm<br />
            <span style={{ color: 'var(--accent)', fontWeight: 900, fontSize: '3.3rem', WebkitTextFillColor: 'var(--accent)', background: 'none' }}>Abhijeet Kumar</span>
          </h1>
          <h2
            style={{
              fontSize: '1.45rem',
              fontWeight: 700,
              color: 'var(--accent)',
              margin: '0.2rem 0 1.1rem 0',
              letterSpacing: '-0.2px',
              textShadow: '0 2px 18px rgba(0,226,255,0.10)',
              minHeight: '2.2em',
            }}
          >
            <span className="typing-effect">{displayText}</span>
          </h2>
          <p
            style={{
              fontSize: '1.13rem',
              color: 'var(--text-muted)',
              margin: '0.2rem 0 1.2rem 0',
              maxWidth: '95%',
              fontWeight: 500,
              textShadow: '0 2px 16px rgba(0,0,0,0.10)',
            }}
          >
            Building scalable web applications and AI-powered systems to solve real-world problems.
            Focused on full-stack development and machine learning with clean, high-performance solutions.
            Focused on performance, clean design, and user-driven solutions.
          </p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
                color: '#fff',
                fontWeight: 700,
                padding: '0.75rem 2.2rem',
                borderRadius: '30px',
                fontSize: '1.08rem',
                boxShadow: '0 4px 24px 0 rgba(0,226,255,0.13)',
                textDecoration: 'none',
                transition: 'background 0.2s, box-shadow 0.2s',
                letterSpacing: '0.01em',
              }}
              onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg, var(--accent-2), var(--accent))'}
              onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, var(--accent), var(--accent-2))'}
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>

      {/* --- Bottom Quick Links (icons only, no heading) --- */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '22px',
          marginBottom: '2.5rem',
        }}
      >
        {quickLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            title={item.title}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 260, damping: 17 }}
          >
            <motion.img
              src={item.img}
              alt={item.title}
              whileHover={{
                filter: 'drop-shadow(0 0 11px var(--accent)) brightness(1.14)',
              }}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                objectFit: 'cover',
                filter: 'brightness(0.9)',
                transition: 'all 0.3s ease',
              }}
            />
          </motion.a>
        ))}
      </div>
    </section>
  )
}
