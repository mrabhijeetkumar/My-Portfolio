import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const SKILLS = [
  // Frontend
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend" },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "Frontend" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "Frontend" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "Frontend" },
  // Backend
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Backend" },
  { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", category: "Backend" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "Backend" },
  // Machine Learning
  { name: "Scikit-learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikit-learn/scikit-learn-original.svg", category: "Machine Learning" },
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", category: "Machine Learning" },
  { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", category: "Machine Learning" },
  // Tools
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "Tools" },
  { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", category: "Tools" },
  { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", category: "Tools" },
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
    <section className="skills-container" id="skills">
      {/* Header */}
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 style={{ color: "var(--text)", marginBottom: "0.35rem" }}>Technical Skills</h2>
        <div style={{ width: "110px", height: "2px", background: "var(--accent)", marginBottom: "1rem" }}></div>
        <p style={{ color: "var(--text-muted)", fontSize: "1.04rem", maxWidth: "760px" }}>
          Frontend, backend, machine learning, and developer tools—organized for clarity and impact.
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
          height: "550px",
          borderRadius: "25px",
          overflow: "hidden",
          position: "relative",
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
              boxShadow: "0 0 35px 10px color-mix(in srgb, var(--accent) 48%, transparent)",
              background: "color-mix(in srgb, var(--accent) 24%, transparent)",
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
              background: "color-mix(in srgb, var(--accent) 14%, transparent)",
              border: "1px solid var(--border)",
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
                filter: "drop-shadow(0 0 8px color-mix(in srgb, var(--accent) 45%, transparent)) brightness(1.08)",
                marginBottom: "5px",
              }}
              whileHover={{
                filter: "drop-shadow(0 0 12px color-mix(in srgb, var(--accent) 65%, transparent)) brightness(1.2)",
                rotate: [0, 6, -6, 0],
                transition: { duration: 0.5 },
              }}
            />
            <span
              style={{
                color: "var(--text)",
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
              >
                <h3>{col.title}</h3>
                <ul>
                  {col.items.map((item, i) => (
                    <motion.li key={i} whileHover={{ x: 6, color: "var(--accent)" }}>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
