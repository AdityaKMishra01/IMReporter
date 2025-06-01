import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    // Validate form
    const newErrors = {};
    if (password !== confirmpassword) {
      newErrors.password = "Passwords do not match!";
    }
    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

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
    } finally {
      setIsSubmitting(false);
    }
  };

  // White theme styles
  const formStyle = {
    maxWidth: "500px",
    margin: "30px auto",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    background: "#ffffff",
    border: "1px solid #e0e0e0",
    borderRadius: "12px",
    boxShadow: "0 5px 25px rgba(0,0,0,0.08)",
    color: "#333",
    transform: "scale(0.98)",
    opacity: 0,
    animation: "fadeIn 0.5s forwards",
    transition: "all 0.3s ease"
  };

  const inputStyle = {
    padding: "14px",
    fontSize: "16px",
    border: "2px solid #e0e0e0",
    borderRadius: "8px",
    outline: "none",
    background: "#fff",
    color: "#333",
    transition: "all 0.3s ease",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
    ":focus": {
      borderColor: "#e63946",
      boxShadow: "0 0 0 3px rgba(230, 57, 70, 0.2)"
    }
  };

  const buttonStyle = {
    padding: "16px",
    backgroundColor: "#e63946",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    letterSpacing: "0.5px",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 6px rgba(230, 57, 70, 0.15)",
    ":hover": {
      backgroundColor: "#d62839",
      transform: "translateY(-2px)",
      boxShadow: "0 6px 12px rgba(230, 57, 70, 0.2)"
    },
    ":active": {
      transform: "translateY(0)"
    }
  };

  const errorStyle = {
    color: "#e63946",
    fontSize: "14px",
    marginTop: "-8px",
    marginBottom: "5px",
    animation: "shake 0.5s",
    fontWeight: "500"
  };

  const selectStyle = {
    ...inputStyle,
    appearance: "none",
    backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23333'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 14px center",
    backgroundSize: "18px"
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-5px); }
            40%, 80% { transform: translateX(5px); }
          }
          .form-group {
            display: flex;
            flex-direction: column;
            gap: 6px;
          }
          input:focus, select:focus {
            border-color: #e63946 !important;
            box-shadow: 0 0 0 3px rgba(230, 57, 70, 0.2) !important;
          }
          body {
            background-color: #f9f9f9;
          }
        `}
      </style>
      
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={{ 
          textAlign: "center", 
          color: "#e63946", 
          marginBottom: "20px",
          fontSize: "28px",
          fontWeight: "700"
        }}>
          IMReporter Signup
        </h2>
        
        <div className="form-group">
          <input 
            name="firstname" 
            placeholder="First Name" 
            required 
            style={inputStyle} 
          />
        </div>
        
        <div className="form-group">
          <input 
            name="lastname" 
            placeholder="Last Name" 
            required 
            style={inputStyle} 
          />
        </div>
        
        <div className="form-group">
          <input 
            name="email" 
            placeholder="Email" 
            type="email" 
            required 
            style={inputStyle} 
          />
        </div>
        
        <div className="form-group">
          <input 
            name="phoneno" 
            placeholder="Phone Number" 
            type="tel" 
            required 
            style={inputStyle} 
          />
        </div>
        
        <div className="form-group">
          <select 
            name="usertype" 
            required 
            style={selectStyle}
            defaultValue=""
          >
            <option value="" disabled>Select User Type</option>
            <option value="user">user</option>
            <option value="admin">admin</option>
          </select>
        </div>
        
        <div className="form-group">
          <input 
            name="govidname" 
            placeholder="Government ID Name (e.g., Aadhaar, Driver's License)" 
            required 
            style={inputStyle} 
          />
        </div>
        
        <div className="form-group">
          <input 
            name="govidno" 
            placeholder="Government ID Number" 
            required 
            style={inputStyle} 
          />
        </div>
        
        <div className="form-group">
          <input 
            name="state" 
            placeholder="State" 
            required 
            style={inputStyle} 
          />
        </div>
        
        <div className="form-group">
          <input 
            name="city" 
            placeholder="City" 
            required 
            style={inputStyle} 
          />
        </div>
        
        <div className="form-group">
          <input 
            name="address" 
            placeholder="Address" 
            required 
            style={inputStyle} 
          />
        </div>
        
        <div className="form-group">
          <input
            placeholder="Password (min 8 characters)"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
          {errors.password && <div style={errorStyle}>{errors.password}</div>}
        </div>
        
        <div className="form-group">
          <input
            placeholder="Confirm Password"
            type="password"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        
        <button 
          type="submit" 
          style={buttonStyle}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span style={{ display: "inline-block", marginRight: "8px" }}>
                <svg style={{ animation: "spin 1s linear infinite", width: "18px", height: "18px" }} viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
                </svg>
              </span>
              Registering...
            </>
          ) : "Register as IMReporter"}
        </button>
        
        <p style={{ 
          textAlign: "center", 
          marginTop: "15px",
          color: "#666"
        }}>
          Already have an account?{' '}
          <a 
            href="/login" 
            style={{ 
              color: "#e63946", 
              textDecoration: "none",
              fontWeight: "600",
              transition: "all 0.2s ease",
              ":hover": { 
                textDecoration: "underline",
                color: "#d62839"
              }
            }}
          >
            Login here
          </a>
        </p>
      </form>

      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </>
  );
};

export default Signup;