import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    if (password !== confirmpassword) {
      alert("Passwords do not match!");
      return;
    }

    const formData = {
      firstname: form.firstname.value,
      lastname: form.lastname.value,
      email: form.email.value,
      phoneno: form.phoneno.value,
      password,
      usertype: form.usertype.value,
      govidname: form.govidname.value,
      govidno: form.govidno.value,
      state: form.state.value,
      city: form.city.value,
      address: form.address.value
    };

    try {
      const res = await axios.post("http://localhost:8000/api/auth/register", formData);
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  const formStyle = {
    maxWidth: "500px",
    margin: "30px auto",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    background: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  };

  const inputStyle = {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none"
  };

  const buttonStyle = {
    padding: "12px",
    backgroundColor: "#007BFF",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={{ textAlign: "center" }}>Signup</h2>
      <input name="firstname" placeholder="First Name" required style={inputStyle} />
      <input name="lastname" placeholder="Last Name" required style={inputStyle} />
      <input name="email" placeholder="Email" type="email" required style={inputStyle} />
      <input name="phoneno" placeholder="Phone Number" type="number" required style={inputStyle} />
      <input name="usertype" placeholder="User Type" required style={inputStyle} />
      <input name="govidname" placeholder="Govt ID Name" required style={inputStyle} />
      <input name="govidno" placeholder="Govt ID Number" required style={inputStyle} />
      <input name="state" placeholder="State" required style={inputStyle} />
      <input name="city" placeholder="City" required style={inputStyle} />
      <input name="address" placeholder="Address" required style={inputStyle} />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={inputStyle}
      />
      <input
        placeholder="Confirm Password"
        type="password"
        value={confirmpassword}
        onChange={(e) => setConfirmpassword(e.target.value)}
        required
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Register</button>
    </form>
  );
};

export default Signup;
