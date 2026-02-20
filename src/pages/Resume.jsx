import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const resumePdf = `${import.meta.env.BASE_URL}resume.pdf`;

export default function Resume() {
  const { isDark, colors } = useTheme();
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: colors.cardBg,
          borderRadius: 16,
          padding: "40px 30px",
          color: colors.text,
          boxShadow: colors.shadow,
          border: `1px solid ${colors.border}`,
        }}
      >
        <motion.h2
          className="text-4xl font-semibold mb-2"
          style={{ color: "#0066FF", fontSize: "2.5rem" }}   // 👈 yahin
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: colors.textSecondary, marginBottom: 25 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
            padding: "24px 20px",
            borderRadius: 12,
            border: `1px solid ${colors.border}`,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#0066FF", marginBottom: 4 }}>
              👨‍💻 ABHIJEET KUMAR
            </h3>
            <p style={{ margintop: 10, fontSize: 15, color: colors.textSecondary }}>
              3rd Year B.Tech in Computer Science and Engineering (Specialization: Machine Learning) | Lovely Professional University
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: colors.textSecondary }}>
              📍 Phagwara, Punjab
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: colors.textSecondary }}>
              ✉️ abhijeetmehtaji@gmail.com | 📞 +91 7739009324
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: isDark ? "linear-gradient(135deg, #0066FF44, #0b0b0b)" : "linear-gradient(135deg, #0066FF22, #ffffff)",
              borderRadius: 12,
              padding: "14px 20px",
              border: `1px solid ${colors.border}`,
              maxWidth: 360,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#0066FF" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: colors.text }}>
              Third-year B.Tech student specializing in Machine Learning
              with hands-on experience in ML, Deep Learning, and Computer
              Vision. Proficient in Python, TensorFlow, PyTorch, and Scikit-learn.
              Passionate about developing innovative AI solutions and eager to
              contribute to real-world projects that create meaningful impact.
            </p>
          </motion.div>
        </motion.div>

        {/* Education Section with Border Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: `1px solid ${colors.border}`,
            borderRadius: 12,
            padding: "20px 24px",
            background: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#0066FF", marginBottom: 12 }}>
            🎓 Education
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8, color: colors.text }}>
            <li>
              <strong>B.Tech in Computer Science and Engineering (Specialization: Machine Learning)</strong> — Lovely Professional University
              , 2023–2027 <br />
              <span style={{ color: colors.textSecondary }}>CGPA: 6.5</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>12th Board — SR. Secondary School</strong> (BSEB
              Board, 2023) <br />
              <span style={{ color: colors.textSecondary }}>Percentage: 66.8%</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>10th Board — Utkramit MS</strong> (BSEB Board, 2021)
              <br />
              <span style={{ color: colors.textSecondary }}>Percentage: 82.4%</span>
            </li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#0066FF", marginBottom: 12 }}>💼 Projects</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8, color: colors.text }}>
            <li>1️⃣ AI Crop Profit Optimization System  </li>
            <li>2️⃣ Student Community Platform  </li>
            <li>3️⃣ Personalised Gift Recomendation Website</li>
            <li>4️⃣ Personal Portfolio</li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#0066FF", marginBottom: 12 }}>⚙️ Skills</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "C++",
              "Python",
              "C",
              "Java",
              "TensorFlow",
              "Scikit-learn",
              "Streamlit",
              "React",
              "MySQL",
              "Git",
              "NLP",
              "Explainable AI (XAI)",
              "Problem Solving",
              "Teamwork",
              "Adaptability",
              "Creativity",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, backgroundColor: isDark ? "rgba(0,102,255,0.3)" : "rgba(0,102,255,0.15)" }}
                style={{
                  background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,102,255,0.08)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: isDark ? "#ccc" : colors.text,
                  border: isDark ? "none" : `1px solid rgba(0,102,255,0.2)`,
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "🏆 LeetCode", link: "https://leetcode.com/u/abhijeetji/" },
            { name: "💻 GitHub", link: "https://github.com/mrabhijeetkumar" },
            { name: "💼 LinkedIn", link: "https://www.linkedin.com/in/mrabhijeetkumar/" },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#0066FF" }}
              style={{
                color: colors.text,
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <iframe
            src={resumePdf}
            title="Shubham Kumar Singh Resume"
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        {/* Download Button */}
        <motion.a
          href={resumePdf}
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "#0066FF",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: 0.3,
          }}
        >
          ⬇️ Download Resume
        </motion.a>


      </motion.div>
    </section >
  );
}
