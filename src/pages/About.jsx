import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <div
            style={{
                minHeight: "100vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background:
                    "radial-gradient(circle at 22% 18%, color-mix(in srgb, var(--accent) 14%, transparent), transparent 58%), linear-gradient(150deg, color-mix(in srgb, var(--surface) 30%, transparent), transparent)",
                color: "var(--text)",
                padding: "3rem 1rem",
            }}
        >
            {/* --- About Me Section --- */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                style={{
                    width: "100%",
                    maxWidth: "1100px",
                    textAlign: "left",
                    marginTop: "1rem",
                    lineHeight: 1.8,
                    background: "color-mix(in srgb, var(--surface) 90%, transparent)",
                    padding: "3rem 3.5rem",
                    borderRadius: "18px",
                    boxShadow: "var(--shadow-soft)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid var(--border)",
                }}
            >
                {/* --- Header --- */}
                <h2
                    style={{
                        fontSize: "1.9rem",
                        marginBottom: "1.2rem",
                        background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                    }}
                >
                    About Me
                </h2>

                {/* --- Description --- */}
                <p
                    style={{
                        fontSize: "1.1rem",
                        color: "var(--text)",
                        marginBottom: "1rem",
                    }}
                >
                    I'm Abhijeet Kumar, a Machine Learning enthusiast and Computer Science student focused on building intelligent,
                    data-driven applications. I enjoy working with machine learning models, data analysis, and full-stack
                    technologies to create solutions that solve real-world problems. My goal is to design practical AI systems
                    that combine strong algorithms with clean, user-friendly interfaces while continuously exploring new tools
                    and technologies in the AI ecosystem.
                </p>

                <p style={{ marginTop: "1.2rem", color: "var(--text-muted)" }}>
                    Detailed academic background is presented in the Resume section to keep
                    this About page focused on profile and mindset.
                </p>
            </motion.div>
        </div>
    );
};

export default AboutMe;
