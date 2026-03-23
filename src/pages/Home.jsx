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
          <div style={{ maxWidth: 600, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', padding: '0 1rem' }}>
            <span style={{ fontSize: '1.1rem', color: '#b0bec5', fontWeight: 600, marginBottom: '0.2rem', letterSpacing: '0.5px' }}>Hi, I'm</span>
            <h1 style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', margin: 0, lineHeight: 1.13, letterSpacing: '-1.5px' }}>Abhijeet Kumar</h1>
            <h2 style={{
              fontSize: '1.45rem',
              fontWeight: 700,
              color: '#2196f3',
              margin: '1.1rem 0 1.2rem 0',
              letterSpacing: '-0.2px',
              lineHeight: 1.3
            }}>
              Full Stack Developer & Machine Learning Engineer
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#b0bec5', margin: '0 0 1.6rem 0', maxWidth: 520, fontWeight: 500, lineHeight: 1.7, letterSpacing: '0.01em' }}>
              Building scalable web applications and AI-powered systems to solve real-world problems. Focused on full-stack development and machine learning with clean, high-performance solutions. Focused on performance, clean design, and user-driven solutions.
            </p>
            <div style={{ display: 'flex', gap: '1.1rem', marginBottom: '1.7rem' }}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(90deg, #2196f3, #00e2ff)',
                  color: '#fff',
                  fontWeight: 700,
                  padding: '0.78rem 2.3rem',
                  borderRadius: '2rem',
                  fontSize: '1.08rem',
                  boxShadow: '0 4px 24px 0 rgba(33,150,243,0.13)',
                  textDecoration: 'none',
                  transition: 'background 0.2s, box-shadow 0.2s, transform 0.15s',
                  letterSpacing: '0.01em',
                  border: 'none',
                  outline: 'none',
                  display: 'inline-block',
                }}
                onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg, #00e2ff, #2196f3)'}
                onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, #2196f3, #00e2ff)'}
              >
                Download CV
              </a>
              <a
                href="#projects"
                style={{
                  background: 'none',
                  color: '#2196f3',
                  fontWeight: 700,
                  padding: '0.78rem 2.3rem',
                  borderRadius: '2rem',
                  fontSize: '1.08rem',
                  border: '2px solid #2196f3',
                  textDecoration: 'none',
                  transition: 'background 0.2s, color 0.2s, border 0.2s, transform 0.15s',
                  letterSpacing: '0.01em',
                  outline: 'none',
                  display: 'inline-block',
                }}
                onMouseOver={e => {
                  e.currentTarget.style.background = '#2196f3';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = 'none';
                  e.currentTarget.style.color = '#2196f3';
                }}
              >
                View Projects
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- Bottom Quick Links (icons only, no heading) --- */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '2.5rem',
          marginTop: '1.2rem',
        }}
      >
        {quickLinks.map((link, i) => (
          <a
            key={i}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.04)',
              boxShadow: '0 2px 8px 0 rgba(33,150,243,0.07)',
              color: '#fff',
              fontSize: 20,
              transition: 'background 0.18s, color 0.18s, transform 0.15s',
              textDecoration: 'none',
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = 'rgba(33,150,243,0.13)';
              e.currentTarget.style.color = '#2196f3';
              e.currentTarget.style.transform = 'scale(1.10)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <img src={link.img} alt={link.title} style={{ width: 18, height: 18, filter: 'brightness(1.1)' }} />
          </a>
        ))}
      </div>

    </section>
  );
}
