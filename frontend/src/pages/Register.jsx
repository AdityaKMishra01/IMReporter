import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Navthird from '../components/Navthird';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    crimetitle: '',
    crimecategory: '',
    crimedesc: '',
    crimelocation: '',
    images: [],
  });

  const [userid, setUserId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userid');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      images: e.target.files,
    }));
  };

  const fetchLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const loc = `Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`;
        setFormData((prev) => ({
          ...prev,
          crimelocation: loc,
        }));
      },
      (error) => {
        alert('Failed to fetch location.');
        console.error(error);
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userid) {
      alert('User ID is required.');
      return;
    }

    const data = new FormData();
    data.append('userid', userid);
    data.append('crimetitle', formData.crimetitle);
    data.append('crimecategory', formData.crimecategory);
    data.append('crimedesc', formData.crimedesc);
    data.append('crimelocation', formData.crimelocation);
    for (let i = 0; i < formData.images.length; i++) {
      data.append('images', formData.images[i]);
    }

    try {
      setIsLoading(true);
      await axios.post('http://localhost:8000/api/crimes/registercrime', data);
      alert('Crime reported successfully!');
      setFormData({
        crimetitle: '',
        crimecategory: '',
        crimedesc: '',
        crimelocation: '',
        images: [],
      });
    } catch (err) {
      console.error(err);
      alert('Failed to submit the report');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <Navthird />
      <div
        style={{
          maxWidth: 600,
          margin: 'auto',
          backgroundColor: 'white',
          padding: 25,
          borderRadius: 10,
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          marginTop: '40px',
        }}
      >
        <h2 style={{ textAlign: 'center', color: '#9a1414' }}>
          Crime Reporting Form
        </h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: 15 }}
        >
          {/* User ID input always shown */}
          <input
            type="text"
            name="userid"
            value={userid}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter Your User ID"
            required
            style={{ padding: 10, border: '1px solid #ccc', borderRadius: 5 }}
          />

          <input
            type="text"
            name="crimetitle"
            value={formData.crimetitle}
            onChange={handleChange}
            placeholder="Crime Title"
            required
            style={{ padding: 10, border: '1px solid #ccc', borderRadius: 5 }}
          />
          <select
            name="crimecategory"
            value={formData.crimecategory}
            onChange={handleChange}
            required
            style={{ padding: 10, border: '1px solid #ccc', borderRadius: 5 }}
          >
            <option value="">-- Select Crime Category --</option>
            <option value="Theft">Theft</option>
            <option value="Assault">Assault</option>
            <option value="Fraud">Fraud</option>
            <option value="Cybercrime">Cybercrime</option>
            <option value="Harassment">Harassment</option>
            <option value="Other">Other</option>
          </select>
          <textarea
            name="crimedesc"
            value={formData.crimedesc}
            onChange={handleChange}
            placeholder="Describe the incident..."
            rows={5}
            style={{ padding: 10, border: '1px solid #ccc', borderRadius: 5 }}
          />
          <button
            type="button"
            onClick={fetchLocation}
            style={{
              backgroundColor: '#333',
              color: 'white',
              padding: 10,
              border: 'none',
              borderRadius: 5,
              cursor: 'pointer',
            }}
          >
            📍 Fetch My Current Location
          </button>
          <div style={{ fontSize: 14, color: '#555' }}>
            {formData.crimelocation}
          </div>

          <label htmlFor="images" style={{ fontSize: 14, color: '#555' }}>
            Upload Evidence Images (you can select multiple):
          </label>
          <input
            type="file"
            name="images"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            style={{ padding: 5 }}
          />

          <button
            type="submit"
            disabled={isLoading}
            style={{
              backgroundColor: isLoading ? '#ccc' : '#9a1414',
              color: 'white',
              padding: 12,
              fontWeight: 'bold',
              border: 'none',
              borderRadius: 5,
              cursor: isLoading ? 'not-allowed' : 'pointer',
            }}
          >
            {isLoading ? 'Submitting...' : 'Submit Report'}
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
