import React from "react";
import { motion } from "framer-motion";

const resumePdf = `${import.meta.env.BASE_URL}resume.pdf`;

const educationItems = [
    {
        degree: "B.Tech in Computer Science and Engineering (Specialization: Machine Learning)",
        institute: "Lovely Professional University",
        duration: "2023 - 2027",
        score: "CGPA: 6.5",
    },
    {
        degree: "Senior Secondary (12th)",
        institute: "SR. Secondary School (BSEB)",
        duration: "2023",
        score: "Percentage: 66.8%",
    },
    {
        degree: "Secondary (10th)",
        institute: "Utkramit M S (BSEB)",
        duration: "2021",
        score: "Percentage: 82.4%",
    },
];

export default function Resume() {
    return (
        <section className="container" style={{ padding: "60px 0" }}>
            <motion.div
                className="card"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{
                    y: -2,
                    borderColor: "color-mix(in srgb, var(--accent) 56%, var(--border))",
                    boxShadow: "var(--shadow-hard)",
                }}
                transition={{ duration: 0.8 }}
                style={{
                    background: "color-mix(in srgb, var(--surface) 90%, transparent)",
                    borderRadius: 16,
                    padding: "40px 30px",
                    color: "var(--text)",
                    boxShadow: "var(--shadow-soft)",
                    border: "1px solid var(--border)",
                    transition: "border-color 0.22s ease, box-shadow 0.22s ease",
                }}
            >
                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{ fontSize: 28, color: "var(--accent)", marginBottom: 12 }}
                >
                    Resume
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    style={{ color: "var(--text-muted)", marginBottom: 25 }}
                >
                    A focused snapshot of profile, academic background, and downloadable resume.
                </motion.p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: 16,
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{
                            y: -3,
                            borderColor: "color-mix(in srgb, var(--accent) 56%, var(--border))",
                            boxShadow: "0 12px 24px color-mix(in srgb, var(--accent) 14%, transparent)",
                        }}
                        transition={{ delay: 0.4 }}
                        style={{
                            background: "color-mix(in srgb, var(--surface) 86%, transparent)",
                            borderRadius: 12,
                            padding: "20px",
                            border: "1px solid var(--border)",
                            transition: "border-color 0.22s ease, box-shadow 0.22s ease",
                        }}
                    >
                        <h3 style={{ fontSize: 22, color: "var(--accent)", marginBottom: 8 }}>
                            Abhijeet Kumar
                        </h3>
                        <p style={{ fontSize: 15, color: "var(--text)", marginBottom: 8 }}>
                            Machine Learning Engineer | AI Enthusiast
                        </p>
                        <p style={{ margin: "4px 0", fontSize: 14, color: "var(--text-muted)" }}>
                            Phagwara, Punjab
                        </p>
                        <p style={{ margin: "4px 0", fontSize: 14, color: "var(--text-muted)" }}>
                            <a href="mailto:abhijeetmehtaji@gmail.com" style={{ color: "var(--text-muted)", textDecoration: "none" }}>
                                abhijeetmehtaji@gmail.com
                            </a>
                        </p>
                        <p style={{ margin: "4px 0", fontSize: 14, color: "var(--text-muted)" }}>
                            <a href="tel:+917739009324" style={{ color: "var(--text-muted)", textDecoration: "none" }}>
                                +91 7739009324
                            </a>
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{
                            y: -3,
                            borderColor: "color-mix(in srgb, var(--accent) 56%, var(--border))",
                            boxShadow: "0 12px 24px color-mix(in srgb, var(--accent) 14%, transparent)",
                        }}
                        transition={{ delay: 0.5 }}
                        style={{
                            background: "linear-gradient(135deg, color-mix(in srgb, var(--accent) 18%, transparent), color-mix(in srgb, var(--surface) 86%, transparent))",
                            borderRadius: 12,
                            padding: "20px",
                            border: "1px solid var(--border)",
                            lineHeight: 1.6,
                            transition: "border-color 0.22s ease, box-shadow 0.22s ease",
                        }}
                    >
                        <strong style={{ color: "var(--accent)" }}>Professional Summary</strong>
                        <p style={{ marginTop: 8, color: "var(--text)" }}>
                            Aspiring machine learning professional with hands-on project
                            experience in ML, deep learning, and computer vision. Proficient
                            in Python, TensorFlow, PyTorch, and Scikit-learn, with strong
                            interest in building practical AI solutions that deliver measurable
                            impact.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{
                        y: -2,
                        borderColor: "color-mix(in srgb, var(--accent) 54%, var(--border))",
                    }}
                    transition={{ delay: 0.6 }}
                    style={{
                        marginTop: 40,
                        border: "1px solid var(--border)",
                        borderRadius: 12,
                        padding: "20px 24px",
                        background: "color-mix(in srgb, var(--surface) 86%, transparent)",
                        transition: "border-color 0.22s ease",
                    }}
                >
                    <h4 style={{ fontSize: 20, color: "var(--accent)", marginBottom: 12 }}>
                        Education
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                        {educationItems.map((item) => (
                            <motion.div
                                key={`${item.degree}-${item.duration}`}
                                whileHover={{
                                    y: -2,
                                    borderColor: "color-mix(in srgb, var(--accent) 58%, var(--border))",
                                    background: "color-mix(in srgb, var(--surface) 96%, transparent)",
                                }}
                                style={{
                                    border: "1px solid var(--border)",
                                    borderRadius: 10,
                                    padding: "14px 16px",
                                    background: "color-mix(in srgb, var(--surface) 88%, transparent)",
                                    transition: "border-color 0.2s ease, background 0.2s ease",
                                }}
                            >
                                <h5 style={{ margin: 0, color: "var(--text)", fontSize: 16 }}>{item.degree}</h5>
                                <p style={{ margin: "6px 0 2px", color: "var(--text-muted)", fontSize: 14 }}>
                                    {item.institute}
                                </p>
                                <p style={{ margin: 0, color: "var(--text-muted)", fontSize: 14 }}>
                                    {item.duration} | {item.score}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    style={{
                        marginTop: 40,
                        borderRadius: 12,
                        overflow: "hidden",
                        border: "1px solid var(--border)",
                    }}
                >
                    <iframe
                        src={resumePdf}
                        title="Abhijeet Kumar Resume"
                        style={{
                            width: "100%",
                            height: "650px",
                            border: "none",
                            background: "var(--bg-secondary)",
                        }}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: 20,
                    }}
                >
                    <motion.a
                        href={resumePdf}
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            display: "inline-block",
                            background: "linear-gradient(120deg, var(--accent), var(--accent-2))",
                            color: "#03151d",
                            padding: "10px 22px",
                            borderRadius: 8,
                            textDecoration: "none",
                            fontWeight: 600,
                            letterSpacing: 0.3,
                        }}
                    >
                        Download Resume PDF
                    </motion.a>
                </motion.div>


            </motion.div>
        </section>
    );
}
