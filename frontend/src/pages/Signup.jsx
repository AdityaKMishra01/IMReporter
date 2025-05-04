import React from "react";

const Signup = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Crime Report - Signup</title>
      <div
        style={{
          backgroundColor: "#fff",
          padding: 30,
          borderRadius: 12,
          boxShadow: "0 0 20px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: 500,
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 20, color: "#1E3C72" }}>
          Create Account
        </h2>
        <form id="signupForm" onsubmit="return validateForm()">
          <label
            htmlFor="firstname"
            style={{ fontWeight: "bold", marginTop: 10, display: "block" }}
          >
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            required=""
            style={{
              width: "100%",
              padding: 10,
              marginTop: 5,
              marginBottom: 15,
              border: "1px solid #ccc",
              borderRadius: 8,
            }}
          />
          <label
            htmlFor="lastname"
            style={{ fontWeight: "bold", marginTop: 10, display: "block" }}
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            required=""
            style={{
              width: "100%",
              padding: 10,
              marginTop: 5,
              marginBottom: 15,
              border: "1px solid #ccc",
              borderRadius: 8,
            }}
          />
          <label
            htmlFor="email"
            style={{ fontWeight: "bold", marginTop: 10, display: "block" }}
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required=""
            style={{
              width: "100%",
              padding: 10,
              marginTop: 5,
              marginBottom: 15,
              border: "1px solid #ccc",
              borderRadius: 8,
            }}
          />
          <label
            htmlFor="phoneno"
            style={{ fontWeight: "bold", marginTop: 10, display: "block" }}
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneno"
            name="phoneno"
            pattern="[0-9]{10}"
            placeholder="10-digit phone number"
            required=""
            style={{
              width: "100%",
              padding: 10,
              marginTop: 5,
              marginBottom: 15,
              border: "1px solid #ccc",
              borderRadius: 8,
            }}
          />
          <label
            htmlFor="password"
            style={{ fontWeight: "bold", marginTop: 10, display: "block" }}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required=""
            style={{
              width: "100%",
              padding: 10,
              marginTop: 5,
              marginBottom: 15,
              border: "1px solid #ccc",
              borderRadius: 8,
            }}
          />
          <label
            htmlFor="confirmpassword"
            style={{ fontWeight: "bold", marginTop: 10, display: "block" }}
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmpassword"
            required=""
            style={{
              width: "100%",
              padding: 10,
              marginTop: 5,
              marginBottom: 15,
              border: "1px solid #ccc",
              borderRadius: 8,
            }}
          />
          <label
            htmlFor="usertype"
            style={{ fontWeight: "bold", marginTop: 10, display: "block" }}
          >
            User Type
          </label>
          <select
            id="usertype"
            name="usertype"
            required=""
            style={{
              width: "100%",
              padding: 10,
              marginTop: 5,
              marginBottom: 15,
              border: "1px solid #ccc",
              borderRadius: 8,
            }}
          >
            <option value="">Select Type</option>
            <option value="Citizen">Citizen</option>
            <option value="Police">Police</option>
            <option value="Authority">Authority</option>
          </select>
          <label
            htmlFor="govidname"
            style={{ fontWeight: "bold", marginTop: 10, display: "block" }}
          >
            Government ID Name
          </label>
          <input
            type="text"
            id="govidname"
            name="govidname"
            placeholder="e.g., Aadhar Card, Passport"
            required=""
            style={{
              width: "100%",
              padding: 10,
              marginTop: 5,
              marginBottom: 15,
              border: "1px solid #ccc",
              borderRadius: 8,
            }}
          />
          <label
            htmlFor="govidno"
            style={{ fontWeight: "bold", marginTop: 10, display: "block" }}
          >
            Government ID Number
          </label>
          <input
            type="text"
            id="govidno"
            name="govidno"
            required=""
            style={{
              width: "100%",
              padding: 10,
              marginTop: 5,
              marginBottom: 15,
              border: "1px solid #ccc",
              borderRadius: 8,
            }}
          />
          <label
            htmlFor="state"
            style={{ fontWeight: "bold", marginTop: 10, display: "block" }}
          >
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            required=""
            style={{
              width: "100%",
              padding: 10,
              marginTop: 5,
              marginBottom: 15,
              border: "1px solid #ccc",
              borderRadius: 8,
            }}
          />
          <label
            htmlFor="city"
            style={{ fontWeight: "bold", marginTop: 10, display: "block" }}
          >
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required=""
            style={{
              width: "100%",
              padding: 10,
              marginTop: 5,
              marginBottom: 15,
              border: "1px solid #ccc",
              borderRadius: 8,
            }}
          />
          <label
            htmlFor="address"
            style={{ fontWeight: "bold", marginTop: 10, display: "block" }}
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            required=""
            style={{
              width: "100%",
              padding: 10,
              marginTop: 5,
              marginBottom: 20,
              border: "1px solid #ccc",
              borderRadius: 8,
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              backgroundColor: "#1E3C72",
              color: "white",
              padding: 12,
              border: "none",
              borderRadius: 8,
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
