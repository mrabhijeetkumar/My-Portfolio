import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import "./Skills.css";

const SKILLS = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Jupyter Notebook", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Java Script", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
];

const ROWS = [
  [
    { title: "Programming Languages", items: ["Python", "C/C++", "Java"] },
    { title: "Databases & Tools", items: ["MySQL", "Git", "Supabase"] },
    { title: "Frameworks & Libraries", items: ["Scikit-Learn", "TensorFlow", "React JS", "HTML", "CSS", "Matplotlib"] },
  ],
  [
    {
      title: "Core Concepts",
      items: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Computer Networks",
        "DBMS",
      ],
    },
    {
      title: "Soft Skills",
      items: ["Team Player", "Problem Solving", "Leadership", "Adaptability", "Communication"],
    },
  ],
];

export default function Skills() {
  const { isDark, colors } = useTheme();
  const stageRef = useRef();

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const circles = Array.from(stage.querySelectorAll(".skill-circle"));
    const rect = stage.getBoundingClientRect();
    const placed = [];

    const isOverlapping = (x, y, size) =>
      placed.some((p) => {
        const dx = p.x - x;
        const dy = p.y - y;
        return Math.sqrt(dx * dx + dy * dy) < p.size / 2 + size / 2 + 40;
      });

    circles.forEach((circle) => {
      const size = circle.offsetWidth;
      let x, y, tries = 0;
      do {
        x = Math.random() * (rect.width - size - 20);
        y = Math.random() * (rect.height - size - 20);
        tries++;
      } while (isOverlapping(x, y, size) && tries < 150);

      placed.push({ x, y, size });
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      const dx = (Math.random() - 0.5) * 100;
      const dy = (Math.random() - 0.5) * 100;
      circle.animate(
        [{ transform: "translate(0, 0)" }, { transform: `translate(${dx}px, ${dy}px)` }],
        {
          duration: 5000 + Math.random() * 2000,
          direction: "alternate",
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });
  }, []);

  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="skills"
    >
      <div className="card" style={{ background: colors.cardBg, borderRadius: 16, padding: 30, border: `1px solid ${colors.border}` }}>
        {/* Header */}
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-4xl font-semibold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            style={{ color: '#0066FF' }}
          >
             My Skills
          </motion.h2>
          <p style={{ color: colors.textSecondary, fontSize: '1.1rem', margin: 0, maxWidth: '600px' }}>
             Technical expertise blended with creativity — explore my core competencies below.
          </p>
        </motion.div>

        {/* Floating Orbs with page-load + hover highlight animation */}
        <motion.div
          className="skills-stage relative mx-auto mb-20"
          ref={stageRef}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            width: "100%",
            maxWidth: '1200px',
            height: "500px",
            borderRadius: "25px",
            background: isDark
              ? "radial-gradient(circle at 50% 50%, #0a0a0a, #101010)"
              : `linear-gradient(135deg, ${colors.cardBg}, ${colors.bgSecondary})`,
            overflow: "hidden",
            boxShadow: isDark
              ? "inset 0 0 60px rgba(0,255,255,0.07)"
              : `inset 0 0 40px rgba(0,180,216,0.08), 0 10px 30px ${colors.shadow}`,
            position: "relative",
            border: `1px solid ${colors.border}`,
          }}
        >
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.name}
              className="skill-circle"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
              whileHover={{
                scale: 1.3,
                boxShadow: isDark ? "0 0 35px 10px rgba(0,255,255,0.6)" : "0 0 35px 10px rgba(0,180,216,0.5)",
                background: isDark ? "rgba(0,255,255,0.12)" : "rgba(0,180,216,0.15)",
              }}
              style={{
                width: "110px",
                height: "110px",
                borderRadius: "50%",
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: isDark ? "rgba(0,255,255,0.06)" : "rgba(0,180,216,0.08)",
                border: isDark ? "1px solid rgba(0,255,255,0.25)" : "1px solid rgba(0,180,216,0.3)",
                backdropFilter: "blur(8px)",
                cursor: "pointer",
                transition: "box-shadow 0.4s ease, background 0.4s ease",
              }}
            >
              <motion.img
                src={s.logo}
                alt={s.name}
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "contain",
                  filter: isDark ? "drop-shadow(0 0 8px rgba(0,255,255,0.4)) brightness(1.2)" : "drop-shadow(0 0 8px rgba(0,180,216,0.4)) brightness(1)",
                  marginBottom: "5px",
                }}
                whileHover={{
                  filter: isDark ? "drop-shadow(0 0 12px rgba(0,255,255,0.9)) brightness(1.6)" : "drop-shadow(0 0 12px rgba(0,180,216,0.8)) brightness(1.2)",
                  rotate: [0, 6, -6, 0],
                  transition: { duration: 0.5 },
                }}
              />
              <span
                style={{
                  color: isDark ? "rgba(180,255,255,0.9)" : "rgba(0,100,150,0.95)",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.3px",
                }}
              >
                {s.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Table (Text Section) */}
        <div className="skills-table">
          {ROWS.map((row, rowIndex) => (
            <div key={rowIndex} className="skills-row">
              {row.map((col, colIndex) => (
                <motion.div
                  key={col.title}
                  className="skill-box"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    duration: 0.6,
                    delay: (rowIndex + colIndex) * 0.1,
                  }}
                  style={{
                    background: isDark
                      ? "linear-gradient(145deg, #080808 0%, #0f0f0f 100%)"
                      : `linear-gradient(145deg, ${colors.cardBg}, ${colors.bgSecondary})`,
                    border: `1px solid ${colors.border}`,
                    borderRadius: "14px",
                    padding: "24px 28px",
                    width: "320px",
                    textAlign: "left",
                    boxShadow: colors.shadow,
                  }}
                >
                  <h3 style={{ color: '#0066FF', fontSize: '1.3rem', marginBottom: '16px', fontWeight: 600 }}>{col.title}</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {col.items.map((item, i) => (
                      <motion.li
                        key={i}
                        whileHover={{ x: 6, color: "#0066FF" }}
                        style={{
                          color: colors.text,
                          fontSize: '0.95rem',
                          marginBottom: '8px',
                          padding: '6px 0',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        • {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
