import React from 'react';
import './Home.css'; // Correct CSS import
import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Navthird from '../components/Navthird';

const HomePage = () => {
  return (
    <>
      {/* Top Header */}
      <Navbar />

      {/* App Title Section */}
     

      {/* Navigation */}
      <Navthird />
      
      {/* Main Content */}
      <main>
        {/* Image Slider */}
        <div className="slider">
          <button className="slider-btn prev" onClick={() => { /* moveSlide(-1) logic */ }}>
            ❮
          </button>
          <div className="slides" id="slides">
            <img src="Crime1.jpg" alt="Crime Awareness Slide 1" />
            <img src="Crime2.jpg" alt="Crime Awareness Slide 2" />
          </div>
          <button className="slider-btn next" onClick={() => { /* moveSlide(1) logic */ }}>
            ❯
          </button>
        </div>

        {/* Knowledge Hub */}
        <section className="knowledge-hub">
          <div className="section-header">
            <img
              src="Knowledge Hub.webp"
              alt="Learning Icon"
              className="section-icon"
            />
            <h2 className="section-title">Knowledge Hub</h2>
          </div>
          <div className="grid-container">
            {[
              {
                title: "Crime Statistics",
                text: "Explore statistics and data on crime incidents across different regions with interactive visualizations.",
              },
              {
                title: "Crime Awareness",
                text: "Learn about different types of crimes, their indicators, and how to recognize potential threats.",
              },
              {
                title: "Safety Tips",
                text: "Discover personal, home, and digital safety tips to protect yourself and your loved ones.",
              },
              {
                title: "Citizen Manuals",
                text: "Access official manuals and guides for responsible citizen reporting and legal procedures.",
              },
            ].map((item, index) => (
              <div className="info-card" key={index}>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Report Section */}
        <section className="quick-report">
          <h2 className="section-title-center">Quick Report</h2>
          <form action="Registercomplain.html" className="report-form">
            <input type="text" placeholder="Your Name" required className="form-input" />
            <input type="email" placeholder="Email Address" required className="form-input" />
            <input type="tel" placeholder="Phone Number (Optional)" className="form-input" />
            <textarea
              placeholder="Describe the incident..."
              required
              className="form-input form-textarea"
            />
            <button type="submit" className="submit-btn">
              Submit Report
            </button>
          </form>
        </section>

        {/* FAQ Section */}
        <section id="faq-section">
          <h2 className="section-title-center">Frequently Asked Questions</h2>
          <div className="faq-container">
            {[
              {
                q: "1. How can I register a crime report?",
                a: "Go to the 'Register Complaint' section in the navigation menu and fill out the form. You'll receive a reference number for tracking.",
              },
              {
                q: "2. Can I report anonymously?",
                a: "Yes, anonymous reporting is supported. You can skip personal details, but providing more information helps in faster investigation.",
              },
              {
                q: "3. How to track my complaint status?",
                a: "Click on 'Track Report' and enter your reference ID to view updates.",
              },
              {
                q: "4. What if I entered wrong information?",
                a: "Contact support immediately through 'Contact Us' or call our helpline.",
              },
            ].map((faq, i) => (
              <div className="faq-item" key={i}>
                <h4 className="faq-question">{faq.q}</h4>
                <p className="faq-answer">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-links">
          {["Home", "About Us", "Privacy Policy", "Terms of Service", "Contact"].map((text, i) => (
            <a key={i} href={`${text.replace(/\s+/g, '')}.html`} className="footer-link">
              {text}
            </a>
          ))}
        </div>
        <div className="copyright">
          © 2023 IMReporter - National Crime Reporting Portal. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default HomePage;
