import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const withBase = (path) => `${import.meta.env.BASE_URL}${path}`;

const links = [
  { label: "Home", to: "#home" },
  { label: "Projects", to: "#projects" },
  { label: "Skills", to: "#skills" },
  { label: "Certificates", to: "#certificates" },
  { label: "Resume", to: "#resume" },
  { label: "About me", to: "#about" },
  { label: "Contact", to: "#contact" },
];

export default function Navbar() {
  const { isDark, toggleTheme, colors } = useTheme();

  return (
    <nav
      className="nav"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.8rem 2rem",
        borderBottom: `1px solid ${colors.border}`,
        background: isDark ? "rgba(0,0,0,0.85)" : "rgba(255,255,255,0.9)",
        backdropFilter: "blur(12px)",
        color: colors.text,
      }}
    >
      {/* --- Left Logo + Name --- */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <motion.div
          className="logo"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <img src={withBase('logos/ABHIJEET_logo.svg')} alt="ABHIJEET Logo" style={{ width: 48, height: 48 }} />
        </motion.div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ margin: 0, fontSize: 14, color: colors.text }}>Abhijeet Kumar</h1>
          <div style={{ fontSize: 12, color: colors.textSecondary }}>
            AI ML Developer
          </div>
        </div>
      </div>

      {/* --- Center Navigation Links --- */}
      <div
        className="nav-links"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.8rem",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        {links.map((l) => (
          <a
            key={l.to}
            href={l.to}
            className="inactive-link"
            style={{
              position: "relative",
              fontSize: "0.95rem",
              textDecoration: "none",
              color: colors.text,
              fontWeight: 500,
              cursor: "pointer",
              transition: "color 0.3s",
            }}
            onClick={e => {
              e.preventDefault();
              const section = document.querySelector(l.to);
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <motion.div
              whileHover={{
                scale: 1.1,
                color: '#0084ff',
                textShadow: `0 0 8px #0084ff`,
              }}
              transition={{ duration: 0.3 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <motion.span>{l.label}</motion.span>
            </motion.div>
          </a>
        ))}
      </div>

      {/* --- Right Theme Toggle --- */}
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: colors.cardBg,
          border: `1px solid ${colors.border}`,
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: colors.accent,
          transition: "all 0.3s ease",
        }}
        title={isDark ? "Light Mode" : "Dark Mode"}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </motion.button>
    </nav>
  );
}
