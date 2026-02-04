import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const withBase = (path) => `${import.meta.env.BASE_URL}${path}`;

// ✅ Certificates data (added URLs for View button)
const CERTS = {
  tech: [
    {
      title: "Master Gen AI",
      org: "Udemy",
      date: "2025",
      img: withBase("certs/Master Gen AI.jpg"),
      link: withBase("certs/Master Gen AI.jpg"),
    },
    {
      title: "ChatGPT Prompt Engineering",
      org: "Infosys | Springboard",
      date: "2025",
      img: withBase("certs/ChatGPT prompt engineering.jpg"),
      link: withBase("certs/ChatGPT prompt engineering.jpg"),
    },
    {
      title: "DSA With C++",
      org: "CSE Pathshala",
      date: "2025",
      img: withBase("certs/DSA.png"),
      link: withBase("certs/DSA.png"),
    },
    {
      title: "Cloud Computing",
      org: "NPTEL",
      date: "2025",
      img: withBase("certs/Cloud.png"),
      link: withBase("certs/Cloud.png"),
    },

    {
      title: "Responsive Web Design",
      org: "FreeCodeCamp",
      date: "2023",
      img: withBase("certs/Web.png"),
      link: withBase("certs/Web.png"),
    },
    {
      title: "Build Generative AI",
      org: "Udemy",
      date: "2025",
      img: withBase("certs/Build Generative AI.jpg"),
      link: withBase("certs/Build Generative AI.jpg"),
    },
    {
      title: "Object Orinted Programing",
      org: "Neo Colab LPU",
      date: "2024",
      img: withBase("certs/OOPS.jpg"),
      link: withBase("certs/OOPS.jpg"),
    },
    {
      title: "Fundamental of Network and Communication",
      org: "Coursera",
      date: "2024",
      img: withBase("certs/Fundamnetal of Network.jpg"),
      link: withBase("certs/Fundamnetal of Network.jpg"),
    },


  ],
};

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <div className="card" style={{ background: "#111", borderRadius: 12, padding: 24 }}>
        <h2 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: 4 }}>Certificates 🏅</h2>
        <p className="lead" style={{ color: "#aaa" }}>
          Explore my certifications.
        </p>

        {/* Certificates Grid */}
        <div
          className="certs-grid"
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          <AnimatePresence mode="wait">
            {CERTS.tech.map((c, idx) => (
              <motion.div
                key={c.title}
                className="cert card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(0, 123, 255, 0.4)",
                }}
                style={{
                  background: "#1a1a1a",
                  borderRadius: 12,
                  padding: 16,
                  color: "#fff",
                }}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  style={{
                    width: "100%",
                    height: 160,
                    borderRadius: 10,
                    objectFit: "cover",
                    marginBottom: 12,
                  }}
                />
                <strong style={{ fontSize: 16 }}>{c.title}</strong>
                <div className="muted" style={{ fontSize: 13, color: "#bbb" }}>
                  {c.org} • {c.date}
                </div>

                <div style={{ marginTop: 12 }}>
                  <button
                    className="btn"
                    onClick={() => setSelectedCert(c)}
                    style={{
                      background: "#007bff",
                      border: "none",
                      color: "white",
                      borderRadius: 6,
                      padding: "6px 14px",
                      cursor: "pointer",
                    }}
                  >
                    View
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.img
              src={selectedCert.img}
              alt={selectedCert.title}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{
                maxWidth: "90%",
                maxHeight: "85%",
                borderRadius: 10,
                boxShadow: "0 0 25px rgba(255,255,255,0.2)",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
