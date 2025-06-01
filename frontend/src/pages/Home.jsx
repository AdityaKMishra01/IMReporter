import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Navthird from '../components/Navthird';
import { 
  FaBook, FaChartBar, FaShieldAlt, FaFileAlt, FaQuestionCircle, 
  FaChevronDown, FaExclamationTriangle, FaBullhorn, FaUserShield,
  FaMobileAlt, FaHome, FaLock, FaGlobeAmericas
} from 'react-icons/fa';
import { GiPoliceBadge, GiHandcuffs, GiCrimeSceneTape } from 'react-icons/gi';
import { RiShieldUserLine } from 'react-icons/ri';
import { motion, useAnimation, useInView } from 'framer-motion';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const slides = [
    { 
      title: "Together Against Crime", 
      subtitle: "Your voice makes our community safer",
      bgColor: "linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)"
    },
    { 
      title: "Real-Time Crime Reporting", 
      subtitle: "Report incidents instantly from anywhere",
      bgColor: "linear-gradient(135deg, #e74c3c 0%, #f39c12 100%)"
    }
  ];

  const knowledgeItems = [
    {
      title: "Crime Statistics",
      text: "Explore statistics and data on crime incidents across different regions with interactive visualizations.",
      icon: <FaChartBar className="card-icon" />,
      sticker: <GiPoliceBadge className="sticker" />
    },
    {
      title: "Crime Awareness",
      text: "Learn about different types of crimes, their indicators, and how to recognize potential threats.",
      icon: <FaShieldAlt className="card-icon" />,
      sticker: <GiHandcuffs className="sticker" />
    },
    {
      title: "Safety Tips",
      text: "Discover personal, home, and digital safety tips to protect yourself and your loved ones.",
      icon: <FaBook className="card-icon" />,
      sticker: <RiShieldUserLine className="sticker" />
    },
    {
      title: "Citizen Manuals",
      text: "Access official manuals and guides for responsible citizen reporting and legal procedures.",
      icon: <FaFileAlt className="card-icon" />,
      sticker: <GiCrimeSceneTape className="sticker" />
    }
  ];

  const safetyTips = [
    { icon: <FaMobileAlt />, text: "Always keep emergency numbers saved" },
    { icon: <FaHome />, text: "Install quality locks on doors and windows" },
    { icon: <FaLock />, text: "Use strong, unique passwords for all accounts" },
    { icon: <FaGlobeAmericas />, text: "Be aware of your surroundings in public" },
    { icon: <FaUserShield />, text: "Trust your instincts in uncomfortable situations" },
    { icon: <FaExclamationTriangle />, text: "Report suspicious activities immediately" }
  ];

  const faqs = [
    {
      q: "How can I register a crime report?",
      a: "Go to the 'Register Complaint' section in the navigation menu and fill out the form. You'll receive a reference number for tracking."
    },
    {
      q: "Can I report anonymously?",
      a: "Yes, anonymous reporting is supported. You can skip personal details, but providing more information helps in faster investigation."
    },
    {
      q: "How to track my complaint status?",
      a: "Click on 'Track Report' and enter your reference ID to view updates."
    },
    {
      q: "What if I entered wrong information?",
      a: "Contact support immediately through 'Contact Us' or call our helpline."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <Navbar />
      <Navthird />
      
      <main>
        {/* Hero Section with Animated Background */}
        <section className="hero">
          <div className="slider-container">
            {slides.map((slide, index) => (
              <motion.div 
                key={index}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
                style={{ background: slide.bgColor }}
                aria-label={`Slide ${index + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentSlide ? 1 : 0 }}
                transition={{ duration: 1 }}
              >
                <div className="slide-overlay">
                  <motion.h1 
                    className="hero-title"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p 
                    className="hero-subtitle"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <NavLink to="/report" className="hero-cta">
                      Report Incident <span className="pulse-dot"></span>
                    </NavLink>
                  </motion.div>
                </div>
                <div className="floating-shapes">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className={`shape shape-${i}`}></div>
                  ))}
                </div>
              </motion.div>
            ))}
            <div className="slider-controls">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <motion.div 
            className="stats-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
          >
            <motion.div className="stat-card" variants={item}>
              <div className="stat-number" data-count="95">0</div>
              <div className="stat-label">Crimes Prevented</div>
              <div className="stat-icon">🛡️</div>
            </motion.div>
            <motion.div className="stat-card" variants={item}>
              <div className="stat-number" data-count="1200">0</div>
              <div className="stat-label">Reports Filed</div>
              <div className="stat-icon">📝</div>
            </motion.div>
            <motion.div className="stat-card" variants={item}>
              <div className="stat-number" data-count="24">0</div>
              <div className="stat-label">Hour Support</div>
              <div className="stat-icon">⏱️</div>
            </motion.div>
            <motion.div className="stat-card" variants={item}>
              <div className="stat-number" data-count="500">0</div>
              <div className="stat-label">Safety Tips</div>
              <div className="stat-icon">💡</div>
            </motion.div>
          </motion.div>
        </section>

        {/* Knowledge Hub */}
        <section className="knowledge-hub">
          <div className="section-header">
            <div className="section-icon-container">
              <FaBook className="section-icon" />
            </div>
            <h2 className="section-title">Knowledge Hub</h2>
            <div className="section-divider"></div>
          </div>
          <motion.div 
            className="grid-container"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={container}
          >
            {knowledgeItems.map((item, index) => (
              <motion.div 
                className="info-card" 
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
              >
                <div className="card-icon-container">
                  {item.icon}
                </div>
                <div className="sticker-container">
                  {item.sticker}
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
                <div className="card-hover-effect"></div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Safety Tips Carousel */}
        <section className="safety-tips">
          <div className="section-header">
            <div className="section-icon-container">
              <FaShieldAlt className="section-icon" />
            </div>
            <h2 className="section-title">Safety Tips</h2>
            <div className="section-divider"></div>
          </div>
          <div className="tips-carousel">
            {safetyTips.map((tip, index) => (
              <motion.div 
                className="tip-card"
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="tip-icon">{tip.icon}</div>
                <p className="tip-text">{tip.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Quick Report Section */}
        <section className="quick-report">
          <div className="report-container">
            <div className="report-illustration">
              <div className="crime-scene-illustration">
                <div className="building"></div>
                <div className="police-car"></div>
                <div className="officer"></div>
                <div className="tape"></div>
              </div>
            </div>
            <div className="report-form-container">
              <h2 className="section-title-center">Quick Report</h2>
              <form className="report-form">
                <motion.div 
                  className="form-group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <input type="text" placeholder="Your Name" required className="form-input" />
                </motion.div>
                <motion.div 
                  className="form-group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <input type="email" placeholder="Email Address" required className="form-input" />
                </motion.div>
                <motion.div 
                  className="form-group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <input type="tel" placeholder="Phone Number (Optional)" className="form-input" />
                </motion.div>
                <motion.div 
                  className="form-group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <textarea
                    placeholder="Describe the incident..."
                    required
                    className="form-input form-textarea"
                  />
                </motion.div>
                <motion.button 
                  type="submit" 
                  className="submit-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit Report
                </motion.button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="faq-container">
            <h2 className="section-title-center">Frequently Asked Questions</h2>
            <div className="faq-accordion">
              {faqs.map((faq, index) => (
                <motion.div 
                  className={`faq-item ${activeFaq === index ? 'active' : ''}`} 
                  key={index}
                  onClick={() => toggleFaq(index)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="faq-question">
                    <FaQuestionCircle className="faq-icon" />
                    <h4>{faq.q}</h4>
                    <FaChevronDown className="faq-arrow" />
                  </div>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <div className="section-header">
            <div className="section-icon-container">
              <FaBullhorn className="section-icon" />
            </div>
            <h2 className="section-title">Community Voices</h2>
            <div className="section-divider"></div>
          </div>
          <div className="testimonial-carousel">
            <motion.div 
              className="testimonial-card"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="testimonial-avatar">👮</div>
              <p className="testimonial-text">
                "This platform has revolutionized how our community reports crimes. Response times have improved significantly."
              </p>
              <div className="testimonial-author">- Local Police Officer</div>
            </motion.div>
            <motion.div 
              className="testimonial-card"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="testimonial-avatar">👩</div>
              <p className="testimonial-text">
                "I was able to report a suspicious activity anonymously. The authorities responded within an hour!"
              </p>
              <div className="testimonial-author">- Community Member</div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-logo">IMReporter</div>
          <div className="footer-links">
            {["Home", "About Us", "Privacy Policy", "Terms of Service", "Contact"].map((text, i) => (
              <a key={i} href='#' className="footer-link">
                {text}
              </a>
            ))}
          </div>
          <div className="footer-social">
            <a href="#" className="social-icon" aria-label="Facebook">FB</a>
            <a href="#" className="social-icon" aria-label="Twitter">TW</a>
            <a href="#" className="social-icon" aria-label="Instagram">IG</a>
          </div>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} IMReporter - National Crime Reporting Portal. All Rights Reserved.
        </div>
        <div className="floating-stickers">
          <div className="sticker">🚔</div>
          <div className="sticker">👮</div>
          <div className="sticker">🛡️</div>
        </div>
      </footer>
    </>
  );
};

export default Home;