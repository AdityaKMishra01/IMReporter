import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar"
import Navthird from '../components/Navthird';
import axios from 'axios';

const TrackReports = () => {
  const [crimes, setCrimes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/crimes/getallcrimes')
      .then(response => {
        setCrimes(response.data);
      })
      .catch(error => {
        console.error('Error fetching crimes:', error);
      });
  }, []);

  const filteredCrimes = crimes.filter(
    crime =>
      crime._id?.toLowerCase().includes(search.toLowerCase()) ||
      crime.crimetitle?.toLowerCase().includes(search.toLowerCase()) ||
      crime.crimecategory?.toLowerCase().includes(search.toLowerCase()) ||
      crime.crimedesc?.toLowerCase().includes(search.toLowerCase()) ||
      crime.crimelocation?.toLowerCase().includes(search.toLowerCase()) ||
      crime.status?.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'pending': return '#e74c3c';
      case 'investigating': return '#f39c12';
      case 'resolved': return '#2ecc71';
      default: return '#000';
    }
  };

  return (
    <>
    <Navbar />
        <Navthird />
    <div style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#f4f4f4', paddingTop: 110 }}>
      <main style={{ padding: 20, maxWidth: 1200, margin: '30px auto 0' }}>
        <div style={{ backgroundColor: '#fff', padding: 30, borderRadius: 10, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <h2 style={{ textAlign: 'center', color: '#9a1414', marginBottom: 20, fontSize: '1.8rem' }}>
            Track Crime Reports
          </h2>

          <div style={{ marginBottom: 30, display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: 600 }}>
              <input
                type="text"
                placeholder="Search by ID, title, category, location, etc..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  paddingRight: 50,
                  border: '1px solid #ddd',
                  borderRadius: 30,
                  fontSize: '1rem'
                }}
              />
              <button
                style={{
                  position: 'absolute',
                  right: 5,
                  top: 5,
                  background: '#9a1414',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: 40,
                  height: 40,
                  cursor: 'pointer'
                }}
              >
                🔍
              </button>
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 20 }}>
              <thead>
                <tr>
                  {['ID', 'Title', 'Category', 'Description', 'Location', 'Status', 'Images', 'Reported At', 'Updated At'].map(header => (
                    <th
                      key={header}
                      style={{
                        padding: 12,
                        backgroundColor: '#f5f5f5',
                        borderBottom: '2px solid #ccc',
                        color: '#002147',
                        textAlign: 'center'
                      }}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredCrimes.length > 0 ? (
                  filteredCrimes.map((crime, index) => (
                    <tr key={index}>
                      <td style={tdStyle}>{crime._id}</td>
                      <td style={tdStyle}>{crime.crimetitle}</td>
                      <td style={tdStyle}>{crime.crimecategory}</td>
                      <td style={tdStyle}>{crime.crimedesc || 'N/A'}</td>
                      <td style={tdStyle}>{crime.crimelocation}</td>
                      <td style={{ ...tdStyle, fontWeight: 'bold', color: getStatusColor(crime.status) }}>
                        {crime.status}
                      </td>
                      <td style={tdStyle}>
                        {crime.images && crime.images.length > 0 ? (
                          crime.images.map((img, i) => (
                            <img
                              key={i}
                              src={img}
                              alt="evidence"
                              style={{ width: 50, height: 50, objectFit: 'cover', marginRight: 5 }}
                            />
                          ))
                        ) : (
                          'No Images'
                        )}
                      </td>
                      <td style={tdStyle}>{new Date(crime.createdAt).toLocaleString()}</td>
                      <td style={tdStyle}>{new Date(crime.updatedAt).toLocaleString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" style={{ ...tdStyle, textAlign: 'center' }}>No crimes found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

const tdStyle = {
  padding: 10,
  borderBottom: '1px solid #eee',
  textAlign: 'center',
  verticalAlign: 'middle'
};

export default TrackReports;
