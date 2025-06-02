import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [phoneno, setphoneno] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [firstname, setFirstname] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [shake, setShake] = useState(false);

  // Load firstname from localStorage on component mount
  useEffect(() => {
    const storedName = localStorage.getItem("firstname");
    if (storedName) {
      setFirstname(storedName);
    }
  }, []);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://192.168.29.170:8000/api/auth/login", {
        phoneno,
        password,
      });

      console.log("Response:", response.data);

      const { userid, role, firstname } = response.data;

      localStorage.setItem("userid", userid);
      localStorage.setItem("role", role);
      localStorage.setItem("firstname", firstname);

      setFirstname(firstname);

      if (role === "admin") {
        navigate("/");
      } else {
        navigate("/register");
      }
    } catch (err) {
      setError("Invalid credentials. Please try again.");
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#ffffff',
      position: 'relative',
      overflow: 'hidden',
      marginTop:'-100px'
    }}>
      {/* Decorative Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        fontSize: '50px',
        transform: 'rotate(-15deg)',
        opacity: 0.1,
        animation: 'float 6s ease-in-out infinite',
        color: '#d32f2f'
      }}>🔒</div>
      
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '8%',
        fontSize: '60px',
        transform: 'rotate(15deg)',
        opacity: 0.1,
        animation: 'float 8s ease-in-out infinite 1s',
        color: '#d32f2f'
      }}>👮</div>
      
      <div style={{
        position: 'absolute',
        top: '30%',
        right: '15%',
        fontSize: '40px',
        opacity: 0.1,
        animation: 'float 7s ease-in-out infinite 0.5s',
        color: '#d32f2f'
      }}>🛡️</div>

      {/* Main Login Card */}
      <div style={{
        background: "white",
        padding: "40px 30px",
        borderRadius: "10px",
        boxShadow: "0 5px 20px rgba(211, 47, 47, 0.1)",
        textAlign: "center",
        width: "380px",
        zIndex: 1,
        position: 'relative',
        transform: shake ? 'translateX(0)' : 'translateX(0)',
        animation: shake ? 'shake 0.5s' : 'none',
        transition: 'all 0.3s ease',
        borderTop: '4px solid #d32f2f'
      }}>
        {/* Header with Illustration */}
        <div style={{
          marginBottom: '25px',
          position: 'relative'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 15px',
            boxShadow: '0 5px 15px rgba(211, 47, 47, 0.3)'
          }}>
            <div style={{
              fontSize: '35px',
              color: 'white'
            }}>👤</div>
          </div>
          <h2 style={{ 
            color: "#d32f2f", 
            marginBottom: "5px", 
            fontSize: "24px",
            fontWeight: '600'
          }}>
            Crime Reporting Portal
          </h2>
          <p style={{
            color: '#666',
            fontSize: '14px',
            marginBottom: '20px'
          }}>Sign in to access your account</p>
        </div>

        {/* Error Message */}
        {error && (
          <div style={{ 
            background: '#ffebee',
            color: '#d32f2f',
            padding: '10px',
            borderRadius: '5px',
            marginBottom: '20px',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #ef9a9a'
          }}>
            <span style={{marginRight: '8px'}}>⚠️</span>
            {error}
          </div>
        )}

        {/* Phone Number Input */}
        <div style={{ 
          position: "relative", 
          marginBottom: "20px",
          textAlign: 'left'
        }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#555',
            fontSize: '14px',
            fontWeight: '500'
          }}>Phone Number</label>
          <div style={{
            position: 'relative'
          }}>
            <i
              className="fas fa-phone-alt"
              style={{
                position: "absolute",
                top: "50%",
                left: 15,
                transform: "translateY(-50%)",
                color: "#999",
                zIndex: 1
              }}
            />
            <input
              type="text"
              placeholder="Enter Phone Number"
              value={phoneno}
              onChange={(e) => setphoneno(e.target.value)}
              style={{
                width: "100%",
                padding: "14px 14px 14px 40px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "14px",
                transition: 'all 0.3s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#d32f2f'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
          </div>
        </div>

        {/* Password Input */}
        <div style={{ 
          position: "relative", 
          marginBottom: "25px",
          textAlign: 'left'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px'
          }}>
            <label style={{
              color: '#555',
              fontSize: '14px',
              fontWeight: '500'
            }}>Password</label>
            <NavLink
              to="/forgot-password"
              style={{
                color: "#d32f2f",
                fontSize: "12px",
                textDecoration: "none",
                fontWeight: '500'
              }}
            >
              Forgot password?
            </NavLink>
          </div>
          <div style={{
            position: 'relative'
          }}>
            <i
              className="fas fa-lock"
              style={{
                position: "absolute",
                top: "50%",
                left: 15,
                transform: "translateY(-50%)",
                color: "#999",
                zIndex: 1
              }}
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "14px 14px 14px 40px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "14px",
                transition: 'all 0.3s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#d32f2f'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
            <i
              className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
              onClick={togglePassword}
              style={{
                position: "absolute",
                top: "50%",
                right: 15,
                transform: "translateY(-50%)",
                color: "#999",
                cursor: "pointer",
                zIndex: 1
              }}
            />
          </div>
        </div>

        {/* Login Button or Welcome Message */}
        {!firstname ? (
          <button
            onClick={handleLogin}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{
              padding: "14px",
              backgroundColor: isHovering ? "#b71c1c" : "#d32f2f",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
              width: "100%",
              fontWeight: '600',
              transition: 'all 0.3s ease',
              boxShadow: isHovering ? '0 5px 15px rgba(211, 47, 47, 0.4)' : '0 3px 10px rgba(211, 47, 47, 0.2)',
              transform: isHovering ? 'translateY(-2px)' : 'translateY(0)'
            }}
          >
            Login
          </button>
        ) : (
          <div
            style={{
              fontSize: "18px",
              color: "#d32f2f",
              fontWeight: "bold",
              margin: "20px 0",
              padding: '15px',
              background: '#ffebee',
              borderRadius: '8px'
            }}
          >
            Welcome back, {firstname}!
          </div>
        )}

        {/* Sign Up Link */}
        {!firstname && (
          <div style={{
            marginTop: "20px",
            fontSize: "14px",
            color: "#666"
          }}>
            Don't have an account?{" "}
            <NavLink
              to="/usersignup"
              style={{
                color: "#d32f2f",
                textDecoration: "none",
                fontWeight: '600'
              }}
            >
              Register Now
            </NavLink>
          </div>
        )}

        {/* Decorative Sticker */}
        <div style={{
          position: 'absolute',
          bottom: '-20px',
          right: '-20px',
          background: '#d32f2f',
          color: 'white',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          boxShadow: '0 5px 15px rgba(211, 47, 47, 0.3)',
          transform: 'rotate(15deg)',
          zIndex: -1
        }}>🔐</div>
      </div>

      {/* Inline CSS for animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px) rotate(-15deg); }
            50% { transform: translateY(-20px) rotate(-15deg); }
            100% { transform: translateY(0px) rotate(-15deg); }
          }
          
          @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
};

export default Login;