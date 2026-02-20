import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const withBase = (path) => `${import.meta.env.BASE_URL}${path}`

const PROJECTS = [
  {
    title: 'AI Crop Profit Optimization System  ',
    desc: 'AI-driven crop profit optimization and recommendation system using machine learning, integrating soil parameters, real-time weather data, and live mandi market price analysis.',
    ss: withBase('AI crop.png'),
    tech: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'NumPy', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'Git', 'Render'],
    live: 'https://ai-crop-profit-optimization-system.onrender.com/',
    code: 'https://github.com/mrabhijeetkumar/AI-Crop-Profit-Optimization-System'
  },
  {
    title: 'Student Community Platform  ',
    desc: 'Interactive chatbot for personal budget planning and financial management, enabling users to track expenses and set savings goals.',
    ss: withBase('student community.png'),
    tech: ['ReactJS', 'Supabase (Auth, Database, Storage, RLS)', 'JavaScript', 'HTML', 'CSS'],
    live: 'https://studentcommunityplatform.netlify.app/',
    code: 'https://github.com/mrabhijeetkumar/Student-Community-Platform'
  },
  {
    title: 'Portfolio Website',
    desc: 'A dynamic, responsive portfolio built using React and Framer Motion that effectively showcases projects, core skills, and achievements with smooth transitions and a clean UI design.',
    ss: withBase('portfolioBlack.png'),
    tech: ['React', 'Framer Motion', 'Tailwind CSS', 'HTML'],
    live: '#',
    code: 'https://github.com/mrabhijeetkumar/My-Portfolio'
  },
  {
    title: 'Personalised Gift Recomendation Website',
    desc: 'Finding the perfect gift made easy - a Personalised Gift Recommendation system built with HTML, CSS, and JavaScript that turns user preferences into smart gift suggestions.',
    ss: withBase('Gift.png'),
    tech: ['HTML', 'CSS', 'JS'],
    live: '#',
    code: 'https://github.com/mrabhijeetkumar/Personalised-Gift-Recomendation-Website'
  },

]

export default function Projects() {
  const { isDark, colors } = useTheme()

  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
      style={{ position: 'relative' }}
    >
      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes floatingCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .project-card-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
        }
        .project-card-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(0, 132, 255, 0.05));
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .project-card-container:hover::before {
          opacity: 1;
        }
        .tech-badge {
          background: linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(0, 132, 255, 0.05));
          border: 1px solid rgba(0, 102, 255, 0.3);
          transition: all 0.3s ease;
        }
        .tech-badge:hover {
          background: linear-gradient(135deg, rgba(0, 102, 255, 0.2), rgba(0, 132, 255, 0.1));
          border: 1px solid rgba(0, 102, 255, 0.6);
          transform: translateY(-2px);
        }
        .btn-outline {
          position: relative;
          overflow: hidden;
        }
        .btn-outline::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(0, 102, 255, 0.1);
          transition: left 0.3s ease;
          z-index: -1;
        }
        .btn-outline:hover::before {
          left: 0;
        }
        .image-glow {
          position: relative;
        }
        .image-glow::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0, 102, 255, 0.2) 0%, transparent 100%);
          border-radius: 12px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .image-glow:hover::after {
          opacity: 1;
        }
      `}</style>

      <div className="card" style={{
        background: colors.cardBg,
        borderRadius: 20,
        padding: 40,
        border: `1px solid ${colors.border}`,
        position: 'relative'
      }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl font-semibold mb-2"
            style={{
              color: '#0066FF',
              background: 'linear-gradient(135deg, #0066FF, #0084ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: '2.5rem',
              fontWeight: 800
            }}
          >
            Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              color: colors.textSecondary,
              marginBottom: '3rem',
              fontSize: '1.1rem',
              fontWeight: 500
            }}
          >
            A collection of my major works — blending research, AI innovation, and modern UI design.
          </motion.p>
        </motion.div>

        <div className="projects-grid" style={{ display: 'grid', gap: 32, gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card-container"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              style={{
                background: colors.bgSecondary,
                border: `2px solid ${colors.border}`,
                borderRadius: 20,
                padding: 24,
                overflow: 'hidden',
                boxShadow: `0 10px 40px ${isDark ? 'rgba(0, 102, 255, 0.1)' : 'rgba(0, 102, 255, 0.08)'}`,
                backdropFilter: 'blur(10px)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Animated Background Gradient */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(135deg, rgba(0, 102, 255, 0.05), rgba(0, 132, 255, 0.02))`,
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }}
              />

              {/* Image Section */}
              <motion.div
                className="image-glow"
                whileHover={{ scale: 1.08 }}
                style={{
                  borderRadius: 16,
                  overflow: 'hidden',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '240px',
                    objectFit: 'cover',
                    borderRadius: 16,
                    display: 'block'
                  }}
                />
              </motion.div>

              {/* Content Section */}
              <div style={{ marginTop: 24, position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  style={{
                    fontSize: 20,
                    color: '#0066FF',
                    marginBottom: 10,
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #0066FF, #0084ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {p.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  style={{
                    fontSize: 14,
                    color: colors.textSecondary,
                    marginBottom: 14,
                    lineHeight: 1.7,
                    fontWeight: 400
                  }}
                >
                  {p.desc}
                </motion.p>

                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16, alignItems: 'center' }}
                >
                  {p.tech.map((t, techIdx) => (
                    <motion.span
                      key={t}
                      className="tech-badge"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + techIdx * 0.03 }}
                      style={{
                        padding: '3px 9px',
                        borderRadius: 6,
                        fontSize: 11,
                        color: '#0066FF',
                        fontWeight: 500,
                        cursor: 'default',
                        display: 'inline-block',
                        whiteSpace: 'nowrap',
                        lineHeight: '1.2'
                      }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}
                >
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline"
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      background: colors.cardBg,
                      color: '#0066FF',
                      padding: '8px 16px',
                      borderRadius: 10,
                      fontSize: 13,
                      border: `1.5px solid #0066FF`,
                      textDecoration: 'none',
                      fontWeight: 600,
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                  >
                    <Github size={16} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      background: 'linear-gradient(135deg, #0066FF, #0084ff)',
                      color: isDark ? '#fff' : '#000',
                      padding: '8px 16px',
                      borderRadius: 10,
                      fontSize: 13,
                      textDecoration: 'none',
                      fontWeight: 600,
                      cursor: 'pointer',
                      boxShadow: '0 4px 15px rgba(0, 102, 255, 0.3)',
                      border: 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <ExternalLink size={16} /> Live
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
