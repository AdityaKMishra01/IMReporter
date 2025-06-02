import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navthird = () => {
  const [firstname, setFirstname] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const role = localStorage.getItem('role');
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem('firstname');
    if (storedName) {
      setFirstname(storedName);
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setFirstname('');
    navigate('/login');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
    height: isMobile ? 'auto' : '50px',
    whiteSpace: 'nowrap',
    borderTop: '2px solid black',
    flexDirection: isMobile ? 'column' : 'row',
    overflow: 'hidden',
    maxHeight: isMobile && !menuOpen ? '50px' : '1000px',
    transition: 'max-height 0.3s ease-in-out',
    paddingTop:'19px',
    overflowY:'auto'
  };

  const navLinksStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    flexDirection: isMobile ? 'column' : 'row',
    padding: isMobile ? '10px 0' : 0,
  };

  const navLinkStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'white',
    fontSize: '0.9rem',
    fontWeight: 500,
    padding: isMobile ? '15px 0' : '10px 0',
    transition: 'all 0.3s',
    width: isMobile ? '100%' : 'auto',
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

  const hamburgerStyle = {
    display: isMobile ? 'flex' : 'none',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '30px',
    height: '25px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    position: 'absolute',
    right: '20px',
    top: '12px',
    zIndex: 999,
  };

  const hamburgerLineStyle = {
    width: '100%',
    height: '3px',
    backgroundColor: 'white',
    borderRadius: '10px',
    transition: 'all 0.3s linear',
    transformOrigin: '1px',
    opacity: menuOpen ? 0 : 1,
    ':first-child': {
      transform: menuOpen ? 'rotate(45deg)' : 'rotate(0)',
    },
    ':nth-child(2)': {
      opacity: menuOpen ? 0 : 1,
      transform: menuOpen ? 'translateX(20px)' : 'translateX(0)',
    },
    ':nth-child(3)': {
      transform: menuOpen ? 'rotate(-45deg)' : 'rotate(0)',
    },
  };

  return (
    <>
      <nav style={navContainerStyle}>
        {isMobile && (
          <button onClick={toggleMenu} style={hamburgerStyle}>
            <span style={{...hamburgerLineStyle, transform: menuOpen ? 'rotate(45deg)' : 'rotate(0)'}}></span>
            <span style={{...hamburgerLineStyle, opacity: menuOpen ? 0 : 1}}></span>
            <span style={{...hamburgerLineStyle, transform: menuOpen ? 'rotate(-45deg)' : 'rotate(0)'}}></span>
          </button>
        )}

        <div style={navLinksStyle}>
          <NavLink to="/" style={navLinkStyle} onClick={() => isMobile && setMenuOpen(false)}>
            <span>Home</span>
          </NavLink>
          <NavLink to="/all/crime" style={navLinkStyle} onClick={() => isMobile && setMenuOpen(false)}>
            <i className="fas fa-folder-open" />
            <span>Cases</span>
          </NavLink>
          <NavLink to="/trackreports" style={navLinkStyle} onClick={() => isMobile && setMenuOpen(false)}>
            <i className="fas fa-search" />
            <span>Track</span>
          </NavLink>
          <NavLink to="/register" style={navLinkStyle} onClick={() => isMobile && setMenuOpen(false)}>
            <i className="fas fa-edit" />
            <span>Register</span>
          </NavLink>
          <NavLink to="/news" style={navLinkStyle} onClick={() => isMobile && setMenuOpen(false)}>
            <i className="fas fa-handshake" />
            <span>News</span>
          </NavLink>
          <NavLink to="/emergency" style={navLinkStyle} onClick={() => isMobile && setMenuOpen(false)}>
            <i className="fas fa-phone-alt" />
            <span>Contact</span>
          </NavLink>
          
          {role === "admin" && (
            <>
              <NavLink to="/all/crimes" style={navLinkStyle} onClick={() => isMobile && setMenuOpen(false)}>
                <i className="fas fa-question-circle" />
                <span>All Crimes</span>
              </NavLink>
              <NavLink to="/all/users" style={navLinkStyle} onClick={() => isMobile && setMenuOpen(false)}>
                <i className="fas fa-question-circle" />
                <span>All Users</span>
              </NavLink>
            </>
          )}
        </div>

        <div className="logs" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '20px',
          flexDirection: isMobile ? 'column' : 'row',
          padding: isMobile ? '10px 0' : 0,
          marginLeft: isMobile ? 0 : 'auto',
        }}>
          {firstname ? (
            <>
              <span style={userTextStyle}>
                <i className="fas fa-user-circle" />
                Welcome, {firstname}
              </span>
              <button onClick={() => {
                handleLogout();
                isMobile && setMenuOpen(false);
              }} style={logoutButtonStyle}>
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" style={navLinkStyle} onClick={() => isMobile && setMenuOpen(false)}>
                <i className="fas fa-sign-in-alt" />
                <strong>Login</strong>
              </NavLink>
              <NavLink to="/usersignup" style={navLinkStyle} onClick={() => isMobile && setMenuOpen(false)}>
                <i className="fas fa-user-shield" />
                <strong>Signup</strong>
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navthird;