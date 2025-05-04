import React, { useState } from 'react';

const Crimecard = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleComments = () => {
    setShowMore(prev => !prev);
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
      <div
        style={{
          maxWidth: 500,
          margin: 'auto',
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
              <strong style={{ fontSize: 16 }}>IMReporter</strong>
            </div>
          </div>
        </div>

        {/* Report Text */}
        <p style={{ fontSize: 15, lineHeight: '1.5', marginTop: 10 }}>
          🚨 Suspicious activity reported. Please stay alert in your area. You
          can report incidents directly from your phone.{' '}
          <span style={{ color: '#1DA1F2' }}>#CrimeAlert</span>
        </p>

        {/* Image Placeholder */}
        <div
          style={{
            width: '100%',
            height: 200,
            backgroundColor: '#ccc',
            borderRadius: 10,
          }}
        />

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
            11:30 PM · 21/03/2030
          </div>
          <button
            onClick={() => alert('Fetching your location...')}
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
          <p style={{ marginTop: 5 }}>Theft</p>
        </div>

        {/* Add Comment */}
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

        {/* Comments */}
        <div style={{ marginTop: 20 }}>
          <h4 style={{ marginBottom: 10 }}>Comments:</h4>
          <div>
            <div style={commentStyle}>Stay safe everyone!</div>
            <div style={commentStyle}>Thanks for the alert.</div>
            {showMore && (
              <>
                <div style={commentStyle}>
                  I saw something similar last night.
                </div>
                <div style={commentStyle}>Police should patrol more here.</div>
              </>
            )}
          </div>
          <button
            onClick={toggleComments}
            style={{
              background: 'none',
              color: '#1DA1F2',
              border: 'none',
              cursor: 'pointer',
              marginTop: 5,
            }}
          >
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
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
