import React from "react";

const Login = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Login | MyApp</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
      <div
        id="timeDisplay"
        style={{
          position: "absolute",
          top: 10,
          right: 20,
          color: "rgb(27,27,27)",
          fontSize: 16,
          fontWeight: "bold",
        }}
      />
      <div
        style={{
          background: "white",
          padding: 30,
          borderRadius: 10,
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          textAlign: "center",
          width: 350,
        }}
      >
        <h2 style={{ color: "#1E3C72", marginBottom: 20, fontSize: 22 }}>
          Login Page
        </h2>
        <div style={{ position: "relative", marginBottom: 15 }}>
          <i
            className="fas fa-mobile-alt"
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
            id="mobile"
            placeholder="Enter Mobile Number"
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
            type="password"
            id="password"
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
            className="fas fa-eye toggle-password"
            id="toggleIcon"
            onclick="togglePassword()"
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
              backgroundColor: "#1E3C72",
              color: "white",
              border: "none",
              borderRadius: 5,
              fontSize: 16,
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Login as User
          </button>
          <button
            style={{
              padding: 12,
              backgroundColor: "#1E3C72",
              color: "white",
              border: "none",
              borderRadius: 5,
              fontSize: 16,
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Login as Authority
          </button>
        </div>
        <a
          href="Signup.html"
          style={{
            marginTop: 15,
            display: "block",
            color: "#1E3C72",
            fontSize: 14,
            textDecoration: "none",
            transition: "0.3s",
          }}
        >
          New User? Sign Up
        </a>
      </div>
    </>
  );
};

export default Login;
