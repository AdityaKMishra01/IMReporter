import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminCrimes = () => {
  const [crimes, setCrimes] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  useEffect(() => {
    fetchCrimes();
  }, []);

  const fetchCrimes = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/crimes/getallcrimes');
      setCrimes(res.data);
    } catch (error) {
      alert('Failed to fetch crimes');
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this crime record?')) return;
    try {
      await axios.delete(`http://localhost:8000/api/crimes/${id}`);
      alert('Deleted successfully');
      fetchCrimes();
    } catch (err) {
      alert('Failed to delete');
      console.error(err);
    }
  };

  const handleEdit = (crime) => {
    setEditingId(crime._id);
    setEditFormData({ ...crime });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:8000/api/crimes/${editingId}`, editFormData);
      alert('Updated successfully');
      setEditingId(null);
      fetchCrimes();
    } catch (err) {
      alert('Failed to update');
      console.error(err);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(`http://localhost:8000/api/crimes/${id}`, { status });
      fetchCrimes();
    } catch (err) {
      alert('Failed to update status');
      console.error(err);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Admin - Manage Crimes</h2>

      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          boxShadow: '0 0 12px rgba(0,0,0,0.1)',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <thead style={{ backgroundColor: '#4CAF50', color: '#fff' }}>
          <tr>
            <th style={thStyle}>Title</th>
            <th style={thStyle}>Description</th>
            <th style={thStyle}>Location</th>
            <th style={thStyle}>Image</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {crimes.length === 0 ? (
            <tr>
              <td colSpan="7" style={{ textAlign: 'center', padding: '1rem' }}>No crimes found</td>
            </tr>
          ) : (
            crimes.map(crime => (
              <tr key={crime._id} style={{ borderBottom: '1px solid #ddd' }}>
                {editingId === crime._id ? (
                  <>
                    <td style={tdStyle}>
                      <input name="crimetitle" value={editFormData.crimetitle} onChange={handleInputChange} />
                    </td>
                    <td style={tdStyle}>
                      <input name="crimedesc" value={editFormData.crimedesc} onChange={handleInputChange} />
                    </td>
                    <td style={tdStyle}>
                      <input name="crimelocation" value={editFormData.crimelocation} onChange={handleInputChange} />
                    </td>
                    <td style={tdStyle}>
                      <input name="images" value={editFormData.images} onChange={handleInputChange} />
                    </td>
                    <td style={tdStyle}>{crime.status}</td>
                    <td style={tdStyle}>{new Date(crime.createdAt).toLocaleString()}</td>
                    <td style={tdStyle}>
                      <button style={saveBtn} onClick={handleSave}>Save</button>
                      <button style={cancelBtn} onClick={() => setEditingId(null)}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td style={tdStyle}>{crime.crimetitle}</td>
                    <td style={tdStyle}>{crime.crimedesc}</td>
                    <td style={tdStyle}>{crime.crimelocation}</td>
                    <td style={tdStyle}>
                      <img
                        src={crime.images}
                        alt="crime"
                        style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/crime-icons/default.png';
                        }}
                      />
                    </td>
                    <td style={tdStyle}>
                      <span style={{
                        padding: '5px 10px',
                        borderRadius: '4px',
                        backgroundColor:
                          crime.status === 'resolved' ? '#d4edda' :
                            crime.status === 'pending' ? '#fff3cd' : '#f8d7da',
                        color:
                          crime.status === 'resolved' ? '#155724' :
                            crime.status === 'pending' ? '#856404' : '#721c24',
                        fontWeight: 'bold',
                      }}>
                        {crime.status}
                      </span>
                    </td>
                    <td style={tdStyle}>{new Date(crime.createdAt).toLocaleString()}</td>
                    <td style={tdStyle}>
                      <button style={statusBtn} onClick={() => handleStatusChange(crime._id, 'resolved')}>Mark Solved</button>
                      <button style={editBtn} onClick={() => handleEdit(crime)}>Edit</button>
                      <button style={deleteBtn} onClick={() => handleDelete(crime._id)}>Delete</button>
                    </td>
                  </>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

// Styles
const thStyle = {
  padding: '12px',
  textAlign: 'left',
  fontWeight: 'bold',
};

const tdStyle = {
  padding: '12px',
  verticalAlign: 'top',
};

const buttonBase = {
  padding: '6px 10px',
  marginRight: '6px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '0.9rem',
};

const statusBtn = {
  ...buttonBase,
  backgroundColor: '#007bff',
  color: '#fff',
};

const editBtn = {
  ...buttonBase,
  backgroundColor: '#ffc107',
  color: '#000',
};

const deleteBtn = {
  ...buttonBase,
  backgroundColor: '#dc3545',
  color: '#fff',
};

const saveBtn = {
  ...buttonBase,
  backgroundColor: '#28a745',
  color: '#fff',
};

const cancelBtn = {
  ...buttonBase,
  backgroundColor: '#6c757d',
  color: '#fff',
};

export default AdminCrimes;
