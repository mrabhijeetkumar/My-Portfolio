import React from "react";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaGraduationCap,
  FaSchool,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

/* animations */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/* Education Card – screenshot style */
const EducationCard = ({ icon, title, school, meta, year }) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        scale: 1.02,
        boxShadow: isDark
          ? "0 0 35px rgba(0,102,255,0.25)"
          : "0 20px 40px rgba(0,0,0,0.12)",
      }}
      transition={{ duration: 0.3 }}
      style={{
        display: "flex",
        gap: "1.4rem",
        padding: "1.8rem 2rem",
        borderRadius: "18px",
        background: isDark
          ? "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.015))"
          : "#ffffff",
        border: "1px solid rgba(0,102,255,0.2)",
      }}
    >
      {/* icon */}
      <div
        style={{
          color: "#1e90ff",
          fontSize: "1.8rem",
          marginTop: "0.3rem",
          minWidth: "36px",
        }}
      >
        {icon}
      </div>

      {/* text */}
      <div>
        <h3
          style={{
            color: "#1e90ff",
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "0.4rem",
          }}
        >
          {title}
        </h3>

        <p style={{ fontWeight: 600, marginBottom: "0.3rem" }}>
          {school}
        </p>

        <p style={{ opacity: 0.75, marginBottom: "0.2rem" }}>
          {meta}
        </p>

        <p style={{ opacity: 0.6 }}>{year}</p>
      </div>
    </motion.div>
  );
};

const AboutMe = () => {
  const { isDark, colors } = useTheme();

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "4rem 1.2rem",
        display: "flex",
        justifyContent: "center",
        background: isDark
          ? `
            radial-gradient(circle at top left, rgba(0,102,255,0.15), transparent 45%),
            radial-gradient(circle at bottom right, rgba(0,198,255,0.12), transparent 45%),
            linear-gradient(135deg, #0a1020, #050914)
          `
          : "linear-gradient(135deg, #f8faff, #eef3ff)",
        color: colors.text,
      }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          padding: "3.5rem",
          borderRadius: "24px",
          background: isDark
            ? "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))"
            : "rgba(255,255,255,0.9)",
          backdropFilter: "blur(18px)",
          border: isDark
            ? "1px solid rgba(255,255,255,0.1)"
            : "1px solid rgba(0,0,0,0.06)",
          boxShadow: isDark
            ? "0 30px 90px rgba(0,0,0,0.85)"
            : "0 25px 60px rgba(0,0,0,0.12)",
        }}
      >
        {/* ================= ABOUT SECTION (UNCHANGED CONTENT) ================= */}
        <h2
          style={{
            fontSize: "2.8rem",
            fontWeight: 700,
            background: "linear-gradient(90deg, #1e90ff, #00d4ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "1.6rem",
          }}
        >
          👤 About Me
        </h2>

        <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
          Hi, I’m <strong>Abhijeet Kumar</strong> — an aspiring{" "}
          <strong>Machine Learning Engineer</strong> and{" "}
          <strong>Machine Learning enthusiast</strong> who loves turning ideas
          into intelligent systems. I’m deeply fascinated by how data and
          algorithms can shape the future of healthcare, automation, and
          creative technology.
        </p>

        <p style={{ marginTop: "1rem", fontSize: "1.1rem", lineHeight: 1.8 }}>
          Beyond code, I enjoy exploring design, experimenting with motion and
          interaction, and finding ways to blend artistic creativity with
          technical precision. My goal is to build solutions that not only
          perform — but also inspire.
        </p>

        <p style={{ marginTop: "1rem", fontSize: "1.05rem" }}>
          3rd-year B.Tech student in Machine Learning Engineering with hands-on
          experience in Machine Learning and Deep Learning projects. Proficient
          in Python, Scikit-learn, PyTorch, TensorFlow, and data preprocessing.
          Seeking internship opportunities to apply technical skills and
          contribute to impactful AI-driven solutions.
        </p>

        {/* ================= EDUCATION SECTION ================= */}
        <h3
          style={{
            marginTop: "3.5rem",
            marginBottom: "2rem",
            fontSize: "2.2rem",
            fontWeight: 600,
            color: "#1e90ff",
          }}
        >
          🎓 Education
        </h3>

        <div style={{ display: "grid", gap: "1.6rem" }}>
          <EducationCard
            icon={<FaUniversity />}
            title="B.Tech in Computer Science and Engineering (Machine Learning)"
            school="Lovely Professional University — Rohtas, Bihar"
            meta="3rd Year (Pursuing) | GPA: 6.20"
            year="2023 – 2027"
          />

          <EducationCard
            icon={<FaGraduationCap />}
            title="Higher Secondary Education (12th Grade)"
            school="SR. Secondary School — Rohtas, Bihar"
            meta="Bihar Board | Percentage: 66.8%"
            year="Completed in 2023"
          />

          <EducationCard
            icon={<FaSchool />}
            title="Secondary Education (10th Grade)"
            school="Utkramit M S — Rohtas, Bihar"
            meta="BSEB Board | Percentage: 82.4%"
            year="Completed in 2021"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;