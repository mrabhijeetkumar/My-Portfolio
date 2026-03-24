import React from "react";
const withBase = (path) => `${import.meta.env.BASE_URL}${path}`;

function About() {
    return (
        <section
            className="content-shell unified-section-shell about-section"
            style={{
                minHeight: "80vh",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "3.5rem 1rem 2.5rem 1rem",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    maxWidth: "1100px",
                    gap: "3.5rem",
                    flexWrap: "wrap",
                }}
            >
                {/* Left: Profile Image in Bordered Box */}
                <div className="profile-image-container">
                    <img
                        src={withBase('profile.png')}
                        alt="Profile"
                        className="about-profile-img"
                    />
                </div>
                {/* Right: About Content */}
                <div
                    style={{
                        flex: 1,
                        minWidth: "320px",
                        maxWidth: "540px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "2.3rem",
                            fontWeight: 900,
                            marginBottom: "0.3rem",
                            color: "var(--text)",
                            letterSpacing: "-0.5px",
                        }}
                    >
                        About <span style={{ color: "var(--accent)", fontWeight: 900 }}>Me</span>
                    </h2>
                    <h3
                        style={{
                            fontSize: "1.25rem",
                            fontWeight: 700,
                            color: "var(--accent)",
                            marginBottom: "1.1rem",
                            letterSpacing: "-0.2px",
                        }}
                    >
                        Frontend Developer & Machine Learning Engineer
                    </h3>
                    <p
                        style={{
                            fontSize: "1.08rem",
                            color: "var(--text)",
                            marginBottom: "1.3rem",
                            lineHeight: 1.7,
                            fontWeight: 500,
                            textShadow: "0 2px 16px rgba(0,0,0,0.10)",
                        }}
                    >
                        I am a Computer Science student focused on building real-world web applications and AI-powered systems that solve practical problems. I specialize in full-stack development and machine learning, creating scalable, efficient, and user-focused solutions. From designing responsive interfaces to developing intelligent backend logic, I aim to deliver products that are both impactful and performance-driven. I am continuously learning, building, and looking for opportunities to contribute to real-world projects.
                    </p>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about-resume-btn"
                    >
                        Read more
                    </a>
                </div>
            </div>
        </section>
    )
}
export default About;
