import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Crimecard = () => {
  const [crimes, setCrimes] = useState([]);
  const [showMoreComments, setShowMoreComments] = useState({});

  // Fetch crimes on mount
  useEffect(() => {
    const fetchCrimes = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/crimes/getallcrimes');
        setCrimes(response.data); // Make sure backend returns an array
      } catch (error) {
        console.error('Error fetching crimes:', error);
      }
    };

    fetchCrimes();
  }, []);

  const toggleComments = (index) => {
    setShowMoreComments((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div
      style={{
        backgroundColor: '#f0f2f5',
        padding: 20,
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh',
      }}
    >
      {crimes.map((crime, index) => (
        <div
          key={crime._id}
          style={{
            maxWidth: 500,
            margin: '20px auto',
            background: 'white',
            border: '1px solid #ccc',
            borderRadius: 15,
            padding: 15,
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
                alt="profile"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  marginRight: 10,
                }}
              />
              <div>
                <strong style={{ fontSize: 16 }}>{crime.userid.firstname}</strong>
              </div>
            </div>
          </div>

          {/* Crime Title */}
          <h3 style={{ marginTop: 10 }}>{crime.crimetitle || 'No Title'}</h3>

          {/* Description */}
          <p style={{ fontSize: 15, lineHeight: '1.5', marginTop: 10 }}>
            {crime.crimedesc || 'No description provided'}
          </p>

          {/* Images */}
          {crime.images && crime.images.length > 0 ? (
            <img
              src={crime.images[0]} // Show first image
              alt="Crime"
              style={{
                width: '100%',
                height: 200,
                objectFit: 'cover',
                borderRadius: 10,
              }}
            />
          ) : (
            <div
              style={{
                width: '100%',
                height: 200,
                backgroundColor: '#ccc',
                borderRadius: 10,
              }}
            />
          )}

          {/* Time & Location */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
            }}
          >
            <div style={{ color: 'gray', fontSize: 13 }}>
              {crime.createdAt ? new Date(crime.createdAt).toLocaleString() : 'Unknown time'}
            </div>
            <button
              onClick={() => alert(`Location: ${crime.crimelocation}`)}
              style={{
                backgroundColor: '#1DA1F2',
                color: 'white',
                fontSize: 12,
                border: 'none',
                padding: '6px 10px',
                borderRadius: 20,
                cursor: 'pointer',
              }}
            >
              📍Location
            </button>
          </div>

          {/* Crime Category */}
          <div style={{ marginTop: 15 }}>
            <label
              htmlFor="crime-category"
              style={{ fontSize: 14, fontWeight: 'bold' }}
            >
              Crime Category:
            </label>
            <p style={{ marginTop: 5 }}>{crime.crimecategory}</p>
          </div>

          {/* Add Comment (Mocked) */}
          <div style={{ marginTop: 15 }}>
            <label htmlFor="comment" style={{ fontSize: 14, fontWeight: 'bold' }}>
              Add Comment:
            </label>
            <textarea
              id="comment"
              placeholder="Write a comment..."
              style={{
                width: '100%',
                padding: 10,
                borderRadius: 10,
                border: '1px solid #ccc',
                marginTop: 5,
                resize: 'vertical',
              }}
            />
            <button
              onClick={() => alert('Comment submitted')}
              style={{
                marginTop: 10,
                backgroundColor: '#1DA1F2',
                color: 'white',
                border: 'none',
                padding: '8px 15px',
                borderRadius: 20,
                cursor: 'pointer',
              }}
            >
              Submit Comment
            </button>
          </div>

          {/* Comments (Static for Now) */}
          <div style={{ marginTop: 20 }}>
            <h4 style={{ marginBottom: 10 }}>Comments:</h4>
            <div>
              <div style={commentStyle}>Stay safe everyone!</div>
              <div style={commentStyle}>Thanks for the alert.</div>
              {showMoreComments[index] && (
                <>
                  <div style={commentStyle}>
                    I saw something similar last night.
                  </div>
                  <div style={commentStyle}>Police should patrol more here.</div>
                </>
              )}
            </div>
            <button
              onClick={() => toggleComments(index)}
              style={{
                background: 'none',
                color: '#1DA1F2',
                border: 'none',
                cursor: 'pointer',
                marginTop: 5,
              }}
            >
              {showMoreComments[index] ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const commentStyle = {
  padding: 8,
  background: '#f9f9f9',
  borderRadius: 8,
  marginBottom: 8,
};

export default Crimecard;
