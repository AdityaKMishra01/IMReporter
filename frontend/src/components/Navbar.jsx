import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const links = ['Cases', 'Track Report', 'Register Complaint', 'Government Support', 'Contact us', 'FAQ'];

  return (
    <div style={{ backgroundColor: '#B91C1C', color: 'white', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Top Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px' }}>
        <div style={{ fontSize: '18px', fontWeight: '600' }}>Government of India</div>
        <div style={{ fontWeight: '600' }}>
          {time.toLocaleTimeString('en-US', { hour12: true })}
        </div>
      </div>

      {/* Logo and Title */}
      <div style={{ backgroundColor: '#F3F4F6', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px' }}>
        
        {/* Left: Logo and IMReporter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src="/path-to-your-logo.png" alt="Government Logo" style={{ height: '48px' }} />
          <div style={{ color: 'black', fontSize: '24px', fontWeight: 'bold' }}>IMReporter</div>
        </div>

        {/* Right: Title */}
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'black' }}>National Crime Reporting Portal</div>
          <div style={{ fontSize: '18px', color: 'black' }}>राष्ट्रीय अपराध रिपोर्टिंग पोर्टल</div>
        </div>
      </div>

      {/* Menu Links */}
      <div style={{ backgroundColor: '#B91C1C', display: 'flex', justifyContent: 'center', gap: '32px', padding: '16px' }}>
        {links.map((link, idx) => (
          <a
            key={idx}
            href="#"
            style={{ color: 'white', fontWeight: '600', textDecoration: 'none' }}
            onMouseOver={(e) => (e.target.style.textDecoration = 'underline')}
            onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
          >
            {link}
          </a>
        ))}
      </div>

<h1>hi garima</h1>
    </div>
  );
};
export default Navbar;
