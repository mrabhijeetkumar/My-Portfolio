import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const withBase = (path) => `${import.meta.env.BASE_URL}${path}`

const photo = withBase('profile.png')
const githubLogo = withBase('github.png')
const linkedinLogo = withBase('linkedin.png')
const gmailLogo = withBase('gmail.png')
const whatsappLogo = withBase('whatsapp.png')
const instagramLogo = withBase('insta.png')

export default function Home() {
  const { isDark, colors } = useTheme()
  const professions = [
    'Machine Learning Engineer',
    "AI Enthusiast",
    "Data Explorer"
  ]

  const quickLinks = [
    { img: githubLogo, title: 'GitHub', link: 'https://github.com/mrabhijeetkumar' },
    { img: linkedinLogo, title: 'LinkedIn', link: 'https://www.linkedin.com/in/mrabhijeetkumar/' },
    { img: gmailLogo, title: 'Email', link: 'mailto:abhijeetmehtaji@gmail.com' },
    { img: whatsappLogo, title: 'WhatsApp', link: 'https://wa.me/+917739009324' },
    { img: instagramLogo, title: 'Instagram', link: 'https://www.instagram.com/the.abhijeetji/' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4rem 2rem',
        background: isDark
          ? 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,30,60,0.6) 50%, rgba(0,0,0,0.9) 100%), radial-gradient(circle at 30% 30%, rgba(0,255,200,0.08), transparent 80%)'
          : 'linear-gradient(135deg, rgba(240,245,255,0.8) 0%, rgba(230,240,255,0.5) 100%)',
        color: colors.text,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <style>{`
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes typingWithHiddenCursor {
          0% {
            width: 0;
            border-right-color: #0084ff;
          }
          99.9% {
            width: 100%;
            border-right-color: #0084ff;
          }
          100% {
            width: 100%;
            border-right-color: transparent;
          }
        }
        @keyframes floatOrbit {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(90deg); }
          50% { transform: translateY(0px) rotate(180deg); }
          75% { transform: translateY(15px) rotate(270deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 40px rgba(0, 102, 255, 0.3), 0 0 80px rgba(0, 102, 255, 0.15); }
          50% { box-shadow: 0 0 60px rgba(0, 102, 255, 0.5), 0 0 120px rgba(0, 102, 255, 0.3); }
        }
        .typing-heading {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          width: 0;
          border-right: .15em solid #0084ff;
          animation: typingWithHiddenCursor 6s steps(40, end) forwards;
        }
        .profession-tag {
          background: linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(0, 132, 255, 0.05));
          border: 1.5px solid rgba(0, 102, 255, 0.3);
          transition: all 0.3s ease;
        }
        .profession-tag:hover {
          background: linear-gradient(135deg, rgba(0, 102, 255, 0.2), rgba(0, 132, 255, 0.1));
          border-color: rgba(0, 102, 255, 0.6);
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0, 102, 255, 0.2);
        }
        .info-card {
          background: ${isDark ? 'rgba(15, 23, 42, 0.6)' : 'rgba(255, 255, 255, 0.7)'};
          backdrop-filter: blur(10px);
          border: 1.5px solid rgba(0, 102, 255, 0.2);
          transition: all 0.3s ease;
        }
        .info-card:hover {
          background: ${isDark ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.95)'};
          border-color: rgba(0, 102, 255, 0.5);
          transform: translateY(-6px);
          box-shadow: 0 15px 40px rgba(0, 102, 255, 0.2);
        }
        .social-link {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(0, 132, 255, 0.05));
          border: 2px solid rgba(0, 102, 255, 0.3);
          transition: all 0.3s ease;
        }
        .social-link:hover {
          background: linear-gradient(135deg, rgba(0, 102, 255, 0.2), rgba(0, 132, 255, 0.1));
          border-color: rgba(0, 102, 255, 0.6);
          box-shadow: 0 0 30px rgba(0, 102, 255, 0.4);
        }
      `}</style>

      {/* Animated Background Elements */}
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 102, 255, 0.1), transparent)',
          filter: 'blur(40px)',
          zIndex: 0
        }}
      />
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, -10, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 132, 255, 0.08), transparent)',
          filter: 'blur(60px)',
          zIndex: 0
        }}
      />

      {/* Main Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1300px',
          gap: '4rem',
          flexWrap: 'wrap',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Left: Photo Section (UPDATED from second code) */}
        <motion.div
          variants={itemVariants}
          style={{
            flex: '0 1 380px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          {/* Rotating Dashed Border */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              width: '330px',
              height: '330px',
              borderRadius: '50%',
              border: '2px dashed #0066FF',
              opacity: 0.3,
            }}
          />

          {/* Floating Glowing Photo */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'relative',
              borderRadius: '50%',
              overflow: 'hidden',
              width: '300px',
              height: '300px',
              boxShadow:
                '0 0 45px rgba(0, 102, 255, 0.25), 15px 15px 40px rgba(0, 102, 255, 0.3), -15px -15px 40px rgba(0, 102, 255, 0.15), 0 25px 50px rgba(0, 102, 255, 0.2)',
              border: '3px solid #0066FF',
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


        {/* Right: Info Section */}
        <motion.div
          variants={itemVariants}
          style={{
            flex: 1,
            minWidth: '360px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <h1
              className="typing-heading"
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                color: colors.text,
                marginBottom: '0.5rem'
              }}
            >
              Hi, I'm{' '}
              <span style={{
                background: 'linear-gradient(135deg, #0066FF, #0084ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 900
              }}>
                Abhijeet Kumar
              </span>
            </h1>
            <p style={{
              fontSize: '1.2rem',
              color: colors.textSecondary,
              fontWeight: 500,
              lineHeight: 1.6
            }}>
              Machine Learning Engineer | AI Problem Solver | Tech Explorer
            </p>
          </motion.div>

          {/* Profession Tags */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            {professions.map((role, i) => (
              <motion.div
                key={i}
                className="profession-tag"
                whileHover={{ scale: 1.08 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                style={{
                  padding: '10px 20px',
                  borderRadius: '25px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'default',
                  color: '#0066FF'
                }}
              >
                {role}
              </motion.div>
            ))}
          </motion.div>

          {/* Info Cards Grid */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1rem',
              marginTop: '0.5rem'
            }}
          >
            {[
              { label: '📍 Location', value: 'Rohtas, Bihar, India' },
              { label: '💼 Expertise', value: 'AI/ML, Problem solving' },
              { label: '📧 Contact', value: 'abhijeetmehtaji@gmail.com' },
            ].map((info, i) => (
              <motion.div
                key={i}
                className="info-card"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                style={{
                  borderRadius: '16px',
                  padding: '16px',
                  textAlign: 'center'
                }}
              >
                <strong style={{
                  fontSize: '0.9rem',
                  color: colors.text,
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  {info.label}
                </strong>
                <p style={{
                  fontSize: '0.85rem',
                  color: colors.textSecondary,
                  margin: 0,
                  lineHeight: 1.4
                }}>
                  {info.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom: Social Links & CTA */}
      <motion.div
        variants={itemVariants}
        style={{
          textAlign: 'center',
          marginTop: '4rem',
          position: 'relative',
          zIndex: 1
        }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            fontSize: '1.3rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #0066FF, #0084ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Let's Connect
        </motion.h3>

        <motion.div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.5rem'
          }}
        >
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.15, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 + i * 0.1 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{
                  filter: 'drop-shadow(0 0 12px #0066FF)',
                  scale: 1.1
                }}
                style={{
                  width: '35px',
                  height: '35px',
                  objectFit: 'contain'
                }}
              />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
