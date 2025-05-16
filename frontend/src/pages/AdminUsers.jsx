import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/auth/users');
      setUsers(res.data);
    } catch (error) {
      alert('Failed to fetch users');
      console.error(error);
    }
  };

  const handleEditClick = (user) => {
    setEditingUserId(user._id);
    setEditFormData({ ...user });
  };

  const handleCancelClick = () => {
    setEditingUserId(null);
    setEditFormData({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveClick = async () => {
    try {
      await axios.put(`http://localhost:8000/api/auth/users/${editingUserId}`, editFormData);
      alert('User updated successfully');
      setEditingUserId(null);
      setEditFormData({});
      fetchUsers();
    } catch (error) {
      alert('Failed to update user');
      console.error(error);
    }
  };

  const handleDeleteClick = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    try {
      await axios.delete(`http://localhost:8000/api/auth/users/${userId}`);
      alert('User deleted successfully');
      fetchUsers();
    } catch (error) {
      alert('Failed to delete user');
      console.error(error);
    }
  };

  const styles = {
    container: {
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f7f7f7',
      minHeight: '100vh',
    },
    heading: {
      textAlign: 'center',
      color: '#333',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '2rem',
      backgroundColor: 'white',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    },
    th: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '10px',
      textAlign: 'left',
    },
    td: {
      padding: '10px',
      borderBottom: '1px solid #ddd',
    },
    input: {
      padding: '5px',
      width: '100%',
      boxSizing: 'border-box',
    },
    btn: {
      padding: '6px 12px',
      margin: '2px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    editBtn: {
      backgroundColor: '#2196F3',
      color: 'white',
    },
    deleteBtn: {
      backgroundColor: '#f44336',
      color: 'white',
    },
    saveBtn: {
      backgroundColor: '#4CAF50',
      color: 'white',
    },
    cancelBtn: {
      backgroundColor: '#9e9e9e',
      color: 'white',
    },
    noUsers: {
      textAlign: 'center',
      padding: '20px',
      color: '#999',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Admin Panel - Manage Users</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>First</th>
            <th style={styles.th}>Last</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Phone</th>
            <th style={styles.th}>Role</th>
            <th style={styles.th}>ID Type</th>
            <th style={styles.th}>ID No</th>
            <th style={styles.th}>State</th>
            <th style={styles.th}>City</th>
            <th style={styles.th}>Address</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="11" style={styles.noUsers}>No users found</td>
            </tr>
          ) : (
            users.map(user => (
              <tr key={user._id}>
                {editingUserId === user._id ? (
                  <>
                    <td style={styles.td}><input style={styles.input} type="text" name="firstname" value={editFormData.firstname} onChange={handleInputChange} /></td>
                    <td style={styles.td}><input style={styles.input} type="text" name="lastname" value={editFormData.lastname} onChange={handleInputChange} /></td>
                    <td style={styles.td}><input style={styles.input} type="email" name="email" value={editFormData.email} onChange={handleInputChange} /></td>
                    <td style={styles.td}><input style={styles.input} type="text" name="phoneno" value={editFormData.phoneno} onChange={handleInputChange} /></td>
                    <td style={styles.td}><input style={styles.input} type="text" name="usertype" value={editFormData.usertype} onChange={handleInputChange} /></td>
                    <td style={styles.td}><input style={styles.input} type="text" name="govidname" value={editFormData.govidname} onChange={handleInputChange} /></td>
                    <td style={styles.td}><input style={styles.input} type="text" name="govidno" value={editFormData.govidno} onChange={handleInputChange} /></td>
                    <td style={styles.td}><input style={styles.input} type="text" name="state" value={editFormData.state} onChange={handleInputChange} /></td>
                    <td style={styles.td}><input style={styles.input} type="text" name="city" value={editFormData.city} onChange={handleInputChange} /></td>
                    <td style={styles.td}><input style={styles.input} type="text" name="address" value={editFormData.address} onChange={handleInputChange} /></td>
                    <td style={styles.td}>
                      <button style={{ ...styles.btn, ...styles.saveBtn }} onClick={handleSaveClick}>Save</button>
                      <button style={{ ...styles.btn, ...styles.cancelBtn }} onClick={handleCancelClick}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td style={styles.td}>{user.firstname}</td>
                    <td style={styles.td}>{user.lastname}</td>
                    <td style={styles.td}>{user.email}</td>
                    <td style={styles.td}>{user.phoneno}</td>
                    <td style={styles.td}>{user.usertype}</td>
                    <td style={styles.td}>{user.govidname}</td>
                    <td style={styles.td}>{user.govidno}</td>
                    <td style={styles.td}>{user.state}</td>
                    <td style={styles.td}>{user.city}</td>
                    <td style={styles.td}>{user.address}</td>
                    <td style={styles.td}>
                      <button style={{ ...styles.btn, ...styles.editBtn }} onClick={() => handleEditClick(user)}>Edit</button>
                      <button style={{ ...styles.btn, ...styles.deleteBtn }} onClick={() => handleDeleteClick(user._id)}>Delete</button>
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

export default AdminUsers;
