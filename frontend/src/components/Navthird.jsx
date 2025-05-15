import React from 'react';
import { NavLink } from 'react-router-dom';

const Navthird = () => {
  const navContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#9a1414', // replace with your actual primary color
    padding: '0 20px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    position: 'fixed',
    top: '60px', // Adjust as per your header and nav height
    left: 0,
    width: '100%',
    zIndex: 998,
    height: '50px',
    whiteSpace: 'nowrap',
    borderTop: '2px solid black',
  };

  const navLinksStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
  };

  const navLinkStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'white',
    fontSize: '0.9rem',
    fontWeight: 500,
    padding: '10px 0',
    transition: 'all 0.3s',
  };

  const imgStyle = {
    width: '24px',
    height: '24px',
    marginBottom: '2px',
  };

  return (
    <>
      {/* Navigation */}
      <nav style={navContainerStyle}>
        <div style={navLinksStyle}>
          <NavLink to="/" style={navLinkStyle}>
            <img src="Home.png" alt="Home Icon" style={imgStyle} />
            <span>Home</span>
          </NavLink>
          <NavLink to="/all/crime" style={navLinkStyle}>
            <i className="fas fa-folder-open" />
            <span>Cases</span>
          </NavLink>
          <NavLink to="#" style={navLinkStyle}>
            <i className="fas fa-search" />
            <span>Track</span>
          </NavLink>
          <NavLink to="/register" style={navLinkStyle}>
            <i className="fas fa-edit" />
            <span>Register</span>
          </NavLink>
          <NavLink to="/news" style={navLinkStyle}>
            <i className="fas fa-handshake" />
            <span>News</span>
          </NavLink>
          <NavLink to="Contact.html" style={navLinkStyle}>
            <i className="fas fa-phone-alt" />
            <span>Contact</span>
          </NavLink>
          <NavLink to="#faq-section" style={navLinkStyle}>
            <i className="fas fa-question-circle" />
            <span>FAQ</span>
          </NavLink>
        </div>
      <div className="logs" style={{ display: 'flex', gap: '20px' }}>
        <NavLink to="/login" style={navLinkStyle}>
            <i className="fas fa-question-circle" />
            <strong>Login User</strong>
          </NavLink>
        <NavLink to="/adminlogin" style={navLinkStyle}>
            <i className="fas fa-question-circle" />
            <strong>Login Admin</strong>
          </NavLink>
      </div>
      </nav>
    </>
  );
};

export default Navthird;
