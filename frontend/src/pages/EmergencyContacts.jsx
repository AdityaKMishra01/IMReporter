import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Navthird from '../components/Navthird';

const EmergencyContacts = () => {
  const [activeTab, setActiveTab] = useState('police');
  const [searchTerm, setSearchTerm] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  // Emergency contact data
  const contacts = {
    police: [
      { name: "National Police Helpline", number: "100", description: "24/7 emergency response" },
      { name: "Women's Helpline", number: "1091", description: "Dedicated support for women" },
      { name: "Cyber Crime Cell", number: "1930", description: "Report online crimes" },
      { name: "Traffic Police", number: "103", description: "Road accidents and violations" }
    ],
    medical: [
      { name: "Ambulance", number: "108", description: "Medical emergency response" },
      { name: "COVID Helpline", number: "1075", description: "Coronavirus related queries" },
      { name: "Mental Health Support", number: "1800-599-0019", description: "24/7 counseling services" },
      { name: "Poison Control", number: "1800-116-117", description: "Emergency poison information" }
    ],
    disaster: [
      { name: "Disaster Management", number: "108", description: "Natural calamities response" },
      { name: "Fire Brigade", number: "101", description: "Fire emergencies" },
      { name: "Earthquake Helpline", number: "1092", description: "Seismic activity reports" },
      { name: "Flood Control Room", number: "1078", description: "Flood related emergencies" }
    ]
  };

  // Filter contacts based on search term
  const filteredContacts = contacts[activeTab].filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.number.includes(searchTerm)
  );

  // Animation styles
  const pageStyle = {
    minHeight: '100vh',
    background: '#ffffff',
    padding: '20px',
    color: '#333333',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    animation: 'fadeIn 0.8s ease-out'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '30px',
    position: 'relative'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '10px',
    color: '#e63946',
    textShadow: '0 2px 10px rgba(230, 57, 70, 0.2)'
  };

  const subtitleStyle = {
    fontSize: '1.1rem',
    color: '#666666',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6'
  };

  const tabsStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
    gap: '10px',
    flexWrap: 'wrap'
  };

  const tabStyle = (tabName) => ({
    padding: '12px 25px',
    borderRadius: '30px',
    border: 'none',
    background: activeTab === tabName ? '#e63946' : '#f5f5f5',
    color: activeTab === tabName ? 'white' : '#333333',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: activeTab === tabName ? '0 5px 15px rgba(230, 57, 70, 0.3)' : 'none',
    ':hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 5px 15px rgba(230, 57, 70, 0.2)'
    }
  });

  const searchContainerStyle = {
    maxWidth: '600px',
    margin: '0 auto 30px',
    position: 'relative'
  };

  const searchStyle = {
    width: '100%',
    padding: '15px 20px',
    borderRadius: '50px',
    border: '2px solid #e63946',
    background: 'white',
    color: '#333333',
    fontSize: '1rem',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease',
    ':focus': {
      outline: 'none',
      borderColor: '#e63946',
      boxShadow: '0 5px 20px rgba(230, 57, 70, 0.2)'
    }
  };

  const searchIconStyle = {
    position: 'absolute',
    right: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#e63946'
  };

  const contactsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const contactCardStyle = {
    background: 'white',
    borderRadius: '15px',
    padding: '25px',
    transition: 'all 0.3s ease',
    border: '1px solid #f0f0f0',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
    position: 'relative',
    overflow: 'hidden',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px rgba(230, 57, 70, 0.15)',
      borderColor: '#e63946'
    }
  };

  const contactNameStyle = {
    fontSize: '1.3rem',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#e63946'
  };

  const contactNumberStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    margin: '15px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#333333'
  };

  const contactDescStyle = {
    fontSize: '0.95rem',
    color: '#666666',
    lineHeight: '1.6'
  };

  const callButtonStyle = {
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px 20px',
    background: '#e63946',
    color: 'white',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer',
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 5px 15px rgba(230, 57, 70, 0.3)',
      background: '#d62839'
    }
  };

  const emergencyIllustrationStyle = {
    width: '150px',
    height: '150px',
    background: 'rgba(230, 57, 70, 0.1)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 30px',
    position: 'relative',
    ':before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: '2px dashed rgba(230, 57, 70, 0.3)',
      animation: 'rotate 20s linear infinite'
    }
  };

  const illustrationIconStyle = {
    fontSize: '60px',
    color: '#e63946'
  };

  const expandButtonStyle = {
    background: 'none',
    border: 'none',
    color: '#e63946',
    margin: '30px auto',
    display: 'block',
    fontSize: '1rem',
    cursor: 'pointer',
    textDecoration: 'underline',
    transition: 'all 0.3s ease',
    ':hover': {
      color: '#d62839'
    }
  };

  return (
    <>
    <Navbar />
    <Navthird />
    <div style={pageStyle}>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
          }
          *:focus {
            outline: 2px solid #e63946;
            outline-offset: 2px;
          }
        `}
      </style>

      <header style={headerStyle}>
        <div style={emergencyIllustrationStyle}>
          <span style={illustrationIconStyle} role="img" aria-label="Emergency">🚨</span>
        </div>
        <h1 style={titleStyle}>Emergency Contacts</h1>
        <p style={subtitleStyle}>
          Immediate access to critical emergency services. Save these numbers in your phone for quick access during urgent situations.
        </p>
      </header>

      <div style={tabsStyle}>
        <button 
          style={tabStyle('police')} 
          onClick={() => setActiveTab('police')}
          aria-label="Police contacts"
        >
          🚓 Police
        </button>
        <button 
          style={tabStyle('medical')} 
          onClick={() => setActiveTab('medical')}
          aria-label="Medical contacts"
        >
          🚑 Medical
        </button>
        <button 
          style={tabStyle('disaster')} 
          onClick={() => setActiveTab('disaster')}
          aria-label="Disaster contacts"
        >
          🌪️ Disaster
        </button>
      </div>

      <div style={searchContainerStyle}>
        <input
          type="text"
          placeholder={`Search ${activeTab} contacts...`}
          style={searchStyle}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search contacts"
        />
        <span style={searchIconStyle}>🔍</span>
      </div>

      <div style={contactsGridStyle}>
        {filteredContacts.slice(0, isExpanded ? filteredContacts.length : 4).map((contact, index) => (
          <div 
            key={index} 
            style={{
              ...contactCardStyle,
              animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`,
              opacity: 0
            }}
          >
            <h3 style={contactNameStyle}>{contact.name}</h3>
            <p style={contactDescStyle}>{contact.description}</p>
            <div style={contactNumberStyle}>
              <span role="img" aria-label="Phone" style={{ color: '#e63946' }}>📞</span>
              {contact.number}
            </div>
            <a 
              href={`tel:${contact.number}`} 
              style={callButtonStyle}
              aria-label={`Call ${contact.name}`}
            >
              Call Now
            </a>
          </div>
        ))}
      </div>

      {filteredContacts.length > 4 && (
        <button 
          style={expandButtonStyle}
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Show Less' : `Show All ${filteredContacts.length} Contacts`}
        </button>
      )}

      <div style={{
        background: 'rgba(230, 57, 70, 0.05)',
        padding: '20px',
        borderRadius: '15px',
        maxWidth: '800px',
        margin: '40px auto',
        textAlign: 'center',
        border: '1px dashed rgba(230, 57, 70, 0.3)',
        animation: 'pulse 3s infinite'
      }}>
        <h3 style={{ color: '#e63946', marginBottom: '10px' }}>Emergency Tips</h3>
        <p style={{ marginBottom: '10px', color: '#666666' }}>
          Stay calm and speak clearly when calling emergency services.
        </p>
        <p style={{ color: '#666666' }}>
          Provide your exact location and nature of emergency for faster response.
        </p>
      </div>
    </div>
    </>
  );
};

export default EmergencyContacts;