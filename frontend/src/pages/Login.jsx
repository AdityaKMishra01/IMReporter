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
    const response = await axios.post("http://localhost:8000/api/auth/login", {
      phoneno,
      password,
    });

    console.log("Response:", response.data); // Debug

    const { userid, role, firstname } = response.data;

    localStorage.setItem("userid", userid); // store the actual _id
    localStorage.setItem("role", role);
    localStorage.setItem("firstname", firstname);

    setFirstname(firstname);

    if (role === "admin") {
      navigate("/all/crimes");
    } else {
      navigate("/register");
    }
  } catch (err) {
    setError("Invalid credentials. Please try again.");
  }
};


  return (
    <>
      {/* FontAwesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />

      {/* Error Message */}
      {error && (
        <p style={{ color: "red", textAlign: "center", marginTop: 20 }}>{error}</p>
      )}

      <div
        style={{
          background: "white",
          padding: 30,
          borderRadius: 10,
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          textAlign: "center",
          width: 350,
          margin: "80px auto",
        }}
      >
        <h2 style={{ color: "#1E3C72", marginBottom: 20, fontSize: 22 }}>
          Login Page
        </h2>

        {/* phoneno Input */}
        <div style={{ position: "relative", marginBottom: 15 }}>
          <i
            className="fas fa-phone-alt"
            style={{
              position: "absolute",
              top: "50%",
              left: 15,
              transform: "translateY(-50%)",
              color: "#999",
            }}
          />
          <input
            type="text"
            placeholder="Enter Phone Number"
            value={phoneno}
            onChange={(e) => setphoneno(e.target.value)}
            style={{
              width: "80%",
              padding: 12,
              paddingLeft: 40,
              paddingRight: 40,
              border: "1px solid #ccc",
              borderRadius: 5,
              fontSize: 14,
            }}
          />
        </div>

        {/* Password Input */}
        <div style={{ position: "relative", marginBottom: 15 }}>
          <i
            className="fas fa-lock"
            style={{
              position: "absolute",
              top: "50%",
              left: 15,
              transform: "translateY(-50%)",
              color: "#999",
            }}
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "80%",
              padding: 12,
              paddingLeft: 40,
              paddingRight: 40,
              border: "1px solid #ccc",
              borderRadius: 5,
              fontSize: 14,
            }}
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
            }}
          />
        </div>

        {/* Login Button or Name */}
        {!firstname ? (
          <button
            onClick={handleLogin}
            style={{
              padding: 12,
              backgroundColor: "#1E3C72",
              color: "white",
              border: "none",
              borderRadius: 5,
              fontSize: 16,
              cursor: "pointer",
              width: "100%",
            }}
          >
            Login as User
          </button>
        ) : (
          <div
            style={{
              fontSize: 18,
              color: "#1E3C72",
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            Welcome, {firstname}
          </div>
        )}

        {/* Sign Up Link */}
        {!firstname && (
          <NavLink
            to="/usersignup"
            style={{
              marginTop: 15,
              display: "block",
              color: "#1E3C72",
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            New User? Sign Up
          </NavLink>
        )}
      </div>
    </>
  );
};

export default Login;
