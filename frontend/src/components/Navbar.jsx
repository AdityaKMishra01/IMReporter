import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const ampm = hours >= 12 ? 'PM' : 'AM';

      hours = hours % 12 || 12;

      const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
        2,
        '0'
      )}:${String(seconds).padStart(2, '0')} ${ampm}`;
      setTime(formattedTime);
    };

    const interval = setInterval(updateClock, 1000);
    updateClock(); // initialize immediately

    return () => clearInterval(interval); // cleanup
  }, []);

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    backgroundColor: '#9a1414', // your theme color
    color: 'white',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    height: '60px', // your desired height
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  };

  const clockStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  };

  return (
    <>
      <header style={headerStyle}>
        <div>Government of India</div>
        <div style={clockStyle}>
          <i className="fas fa-clock" />
          <span>{time}</span>
        </div>
      </header>
    </>
  );
};

export default Navbar;
