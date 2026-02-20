import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useTheme } from "../context/ThemeContext";

const withBase = (path) => `${import.meta.env.BASE_URL}${path}`;

const githubLogo = withBase("github.png");
const linkedinLogo = withBase("linkedin.png");
const gmailLogo = withBase("gmail.png");
const whatsappLogo = withBase("whatsapp.png");
const instagramLogo = withBase("insta.png");

export default function Contact() {
  const { isDark, colors } = useTheme();
  const [form, setForm] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey ||
      serviceId === 'your_service_id_here' ||
      templateId === 'your_template_id_here' ||
      publicKey === 'your_public_key_here') {
      setStatus("⚠️ EmailJS not configured. Please check .env file and restart server.");
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
          setStatus("✅ Message sent successfully!");
          setForm({ name: "", contact: "", subject: "", message: "" });
        },
        (error) => {
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
    { img: linkedinLogo, title: "LinkedIn", link: "https://www.linkedin.com/in/mrabhijeetkumar/" },
    { img: gmailLogo, title: "Email", link: "mailto:abhijeetmehtaji@gmail.com" },
    { img: whatsappLogo, title: "WhatsApp", link: "https://wa.me/+917739009324" },
    { img: instagramLogo, title: "Instagram", link: "https://www.instagram.com/the.abhijeetji/" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: isDark 
          ? "radial-gradient(circle at 25% 25%, rgba(0,255,200,0.08), transparent 80%)" 
          : `linear-gradient(135deg, ${colors.bg}, ${colors.bgSecondary})`,
        color: colors.text,
        padding: "3rem 1.5rem",
        textAlign: "center",
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <style>{`
        .contact-input {
          background: ${isDark ? 'rgba(15, 23, 42, 0.7)' : 'rgba(255, 255, 255, 0.8)'};
          border: 2px solid ${isDark ? 'rgba(0, 102, 255, 0.2)' : 'rgba(0, 102, 255, 0.15)'};
          color: ${colors.text};
          transition: all 0.3s ease;
        }
        .contact-input::placeholder {
          color: ${colors.textSecondary};
          opacity: 0.7;
        }
        .contact-input:focus {
          background: ${isDark ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 1)'};
          border-color: rgba(0, 102, 255, 0.6);
          box-shadow: 0 0 20px rgba(0, 102, 255, 0.2);
          outline: none;
        }
        .social-icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${isDark ? 'rgba(0, 102, 255, 0.1)' : 'rgba(0, 102, 255, 0.08)'};
          border: 2px solid rgba(0, 102, 255, 0.3);
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          background: ${isDark ? 'rgba(0, 102, 255, 0.15)' : 'rgba(0, 102, 255, 0.12)'};
          border-color: rgba(0, 102, 255, 0.6);
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 102, 255, 0.2);
        }
      `}</style>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: '800px', marginBottom: '3rem' }}
      >
        <motion.h1
          style={{
            fontSize: '2.8rem',
            fontWeight: 800,
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #0066FF, #0084ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          💬 Let's Connect & Collaborate
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            fontSize: "1.15rem",
            color: colors.textSecondary,
            lineHeight: 1.7,
            fontWeight: 500
          }}
        >
          Whether it's a new project, a collaboration, or just to say hi — I'd love to hear from you!
        </motion.p>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "3.5rem"
        }}
      >
        {quickLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.08 }}
          >
            <motion.img
              src={item.img}
              alt={item.title}
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                width: "40px",
                height: "40px",
                objectFit: "contain"
              }}
              title={item.title}
            />
          </motion.a>
        ))}
      </motion.div>

      {/* Contact Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{
          background: colors.cardBg,
          border: `2px solid ${colors.border}`,
          borderRadius: 24,
          padding: '3rem',
          width: '100%',
          maxWidth: '550px',
          boxShadow: `0 20px 60px ${isDark ? 'rgba(0, 102, 255, 0.1)' : 'rgba(0, 102, 255, 0.08)'}`,
          backdropFilter: 'blur(10px)'
        }}
      >
        <motion.form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px"
          }}
        >
          {/* Name Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              aria-label="Your name"
              className="contact-input"
              style={{
                padding: "12px 16px",
                borderRadius: "12px",
                fontSize: "14px",
                width: '100%',
                fontWeight: 500
              }}
            />
          </motion.div>

          {/* Email/Phone Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55 }}
          >
            <input
              type="text"
              name="contact"
              placeholder="Your Email or Phone"
              value={form.contact}
              onChange={handleChange}
              required
              aria-label="Your contact info"
              className="contact-input"
              style={{
                padding: "12px 16px",
                borderRadius: "12px",
                fontSize: "14px",
                width: '100%',
                fontWeight: 500
              }}
            />
          </motion.div>

          {/* Subject Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
              aria-label="Subject"
              className="contact-input"
              style={{
                padding: "12px 16px",
                borderRadius: "12px",
                fontSize: "14px",
                width: '100%',
                fontWeight: 500
              }}
            />
          </motion.div>

          {/* Message Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.65 }}
          >
            <textarea
              name="message"
              placeholder="Your Message..."
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              aria-label="Your message"
              className="contact-input"
              style={{
                padding: "12px 16px",
                borderRadius: "12px",
                fontSize: "14px",
                width: '100%',
                fontWeight: 500,
                resize: "none",
                fontFamily: 'inherit'
              }}
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: "14px 28px",
              background: "linear-gradient(135deg, #0066FF, #0084ff)",
              border: "none",
              borderRadius: "12px",
              color: "#fff",
              fontWeight: "700",
              fontSize: "15px",
              cursor: "pointer",
              marginTop: '8px',
              boxShadow: "0 10px 30px rgba(0, 102, 255, 0.3)",
              transition: "all 0.3s ease"
            }}
          >
            🚀 Send Message
          </motion.button>

          {/* Status Message */}
          {status && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                marginTop: "12px",
                fontWeight: "600",
                fontSize: "14px",
                color: status.includes("✅") 
                  ? "#10b981" 
                  : status.includes("Sending") 
                  ? "#0066FF"
                  : "#ef4444",
                textAlign: 'center'
              }}
            >
              {status}
            </motion.p>
          )}
        </motion.form>
      </motion.div>
    </motion.section>
  );
}
