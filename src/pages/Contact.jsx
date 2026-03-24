import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const withBase = (path) => `${import.meta.env.BASE_URL}${path}`;

// Public assets resolved with the GitHub Pages base path
const githubLogo = withBase("github.png");
const linkedinLogo = withBase("linkedin.png");
const gmailLogo = withBase("gmail.png");
const whatsappLogo = withBase("whatsapp.png");
const instagramLogo = withBase("insta.png");

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const getStatusColor = (message) => {
    if (message.startsWith("✅")) return "#2fbf71";
    if (message.startsWith("❌") || message.startsWith("⚠️")) return "#ff7a70";
    return "var(--accent)";
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.contact || !form.subject || !form.message) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const isEmail = emailPattern.test(form.contact);
    if (!isEmail && isNaN(form.contact)) {
      setStatus("⚠️ Please enter a valid email or phone number.");
      return;
    }

    // Check if EmailJS environment variables are set
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey ||
      serviceId === 'your_service_id_here' ||
      templateId === 'your_template_id_here' ||
      publicKey === 'your_public_key_here') {
      setStatus("⚠️ EmailJS not configured. Please check .env file and restart server.");
      console.error("EmailJS Configuration Missing:", {
        serviceId: serviceId ? "✓" : "✗",
        templateId: templateId ? "✓" : "✗",
        publicKey: publicKey ? "✓" : "✗"
      });
      return;
    }

    setStatus("Sending...");

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          contact_info: form.contact,
          subject: form.subject,
          message: form.message,
        },
        publicKey
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          setStatus("✅ Message sent successfully!");
          setForm({ name: "", contact: "", subject: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          console.error("Error Details:", {
            text: error.text,
            status: error.status,
            serviceId: serviceId,
            templateId: templateId
          });

          let errorMessage = "❌ Failed to send. ";
          if (error.text) {
            errorMessage += error.text;
          } else if (error.status === 0) {
            errorMessage += "Check your internet connection.";
          } else {
            errorMessage += "Please check EmailJS configuration.";
          }
          setStatus(errorMessage);
        }
      );
  };

  const quickLinks = [
    { img: githubLogo, title: "GitHub", link: "https://github.com/mrabhijeetkumar" },
    {
      img: linkedinLogo,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/mrabhijeetkumar/",
    },
    { img: gmailLogo, title: "Email", link: "mailto:abhijeetmehtaji@gmail.com" },
    { img: whatsappLogo, title: "WhatsApp", link: "https://wa.me/+917739009324" },
    { img: instagramLogo, title: "Instagram", link: "https://www.instagram.com/the.abhijeetji/" },
  ];

  return (
    <section
      className="content-shell unified-section-shell contact-section"
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        color: "var(--text)",
        padding: "2rem 1.5rem 4rem",
        textAlign: "center",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          fontSize: "2.6rem",
          margin: "1.5rem 0 0.5rem 0",
          background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Let’s Connect & Collaborate 🤝
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          fontSize: "1.1rem",
          color: "var(--text-muted)",
          maxWidth: "700px",
          marginBottom: "2rem",
          lineHeight: 1.6,
        }}
      >
        Whether it’s a new project, a collaboration, or just to say hi — I’d love to hear from you!
      </motion.p>

      {/* 🌟 Quick Links */}
      <motion.div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
          marginBottom: "2.2rem",
        }}
      >
        {quickLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <motion.img
              src={item.img}
              alt={item.title}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid var(--accent)",
                background: "color-mix(in srgb, var(--surface) 86%, transparent)",
                padding: "8px",
              }}
            />
          </motion.a>
        ))}
      </motion.div>

      {/* 💌 Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9 }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          aria-label="Your name"
          style={inputStyle}
        />
        <input
          type="text"
          name="contact"
          placeholder="Your Email or Phone"
          value={form.contact}
          onChange={handleChange}
          required
          aria-label="Your contact info"
          style={inputStyle}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
          aria-label="Subject"
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Your Message..."
          value={form.message}
          onChange={handleChange}
          required
          rows="5"
          aria-label="Your message"
          style={{ ...inputStyle, resize: "none" }}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "12px",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            border: "none",
            borderRadius: "8px",
            color: "#06141f",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          🚀 Send Message
        </motion.button>

        {/* Animated status */}
        {status && (
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ marginTop: 10, color: getStatusColor(status), fontWeight: 500 }}
          >
            {status}
          </motion.p>
        )}
      </motion.form>
    </section>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid var(--border)",
  background: "color-mix(in srgb, var(--surface) 88%, transparent)",
  color: "var(--text)",
  outline: "none",
};
