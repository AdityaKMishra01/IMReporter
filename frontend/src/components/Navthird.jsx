import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navthird = () => {
  const [firstname, setFirstname] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem('firstname');
    if (storedName) {
      setFirstname(storedName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setFirstname('');
    navigate('/login');
  };

  const navContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#9a1414',
    padding: '0 20px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    position: 'fixed',
    top: '60px',
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

  const userTextStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: 'white',
    fontWeight: 600,
    fontSize: '0.9rem',
  };

  const logoutButtonStyle = {
    backgroundColor: '#f44336',
    border: 'none',
    color: 'white',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.8rem',
  };

  return (
    <>
      <nav style={navContainerStyle}>
        <div style={navLinksStyle}>
          <NavLink to="/" style={navLinkStyle}>
            {/* <img src="Home.png" alt="Home Icon" style={imgStyle} /> */}
            <span>Home</span>
          </NavLink>
          <NavLink to="/all/crime" style={navLinkStyle}>
            <i className="fas fa-folder-open" />
            <span>Cases</span>
          </NavLink>
          <NavLink to="/trackreports" style={navLinkStyle}>
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
            <span>Quick</span>
          </NavLink>
        </div>

        <div className="logs" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {firstname ? (
            <>
              <span style={userTextStyle}>
                <i className="fas fa-user-circle" />
                Welcome, {firstname}
              </span>
              <button onClick={handleLogout} style={logoutButtonStyle}>
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" style={navLinkStyle}>
                <i className="fas fa-sign-in-alt" />
                <strong>Login</strong>
              </NavLink>
              <NavLink to="/usersignup" style={navLinkStyle}>
                <i className="fas fa-user-shield" />
                <strong>Signup </strong>
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navthird;
