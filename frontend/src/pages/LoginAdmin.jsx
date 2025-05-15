import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const LoginAdmin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />

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
          Admin Login
        </h2>

        {/* Admin ID input (could also be email or username) */}
        <div style={{ position: "relative", marginBottom: 15 }}>
          <i
            className="fas fa-user-shield"
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
            id="adminId"
            placeholder="Enter Admin ID"
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

        {/* Password input */}
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
            id="adminPassword"
            placeholder="Enter Password"
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

        {/* Login button */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            marginTop: 10,
          }}
        >
          <button
            style={{
              padding: 12,
              backgroundColor: "#E63946",
              color: "white",
              border: "none",
              borderRadius: 5,
              fontSize: 16,
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Login as Admin
          </button>
        </div>

        {/* Navigation to User Login */}
        <NavLink
          to="/login"
          style={{
            marginTop: 15,
            display: "block",
            color: "#1E3C72",
            fontSize: 14,
            textDecoration: "none",
            transition: "0.3s",
          }}
        >
          Are you a User? Login here
        </NavLink>
      </div>
    </>
  );
};

export default LoginAdmin;
