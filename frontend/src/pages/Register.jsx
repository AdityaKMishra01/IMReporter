import React from 'react'

const Register = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <title>Report a Crime - IMReporter</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <div
    style={{
      maxWidth: 600,
      margin: "auto",
      backgroundColor: "white",
      padding: 25,
      borderRadius: 10,
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
    }}
  >
    <h2 style={{ textAlign: "center", color: "#9a1414" }}>
      Crime Reporting Form
    </h2>
    <form
      action="/report-crime"
      method="POST"
      encType="multipart/form-data"
      style={{ display: "flex", flexDirection: "column", gap: 15 }}
    >
      <input
        type="text"
        name="crimetitle"
        placeholder="Crime Title"
        required=""
        style={{ padding: 10, border: "1px solid #ccc", borderRadius: 5 }}
      />
      <select
        name="crimecategory"
        required=""
        style={{ padding: 10, border: "1px solid #ccc", borderRadius: 5 }}
      >
        <option value="">-- Select Crime Category --</option>
        <option value="Theft">Theft</option>
        <option value="Assault">Assault</option>
        <option value="Fraud">Fraud</option>
        <option value="Cybercrime">Cybercrime</option>
        <option value="Harassment">Harassment</option>
        <option value="Other">Other</option>
      </select>
      <textarea
        name="crimedesc"
        placeholder="Describe the incident..."
        rows={5}
        style={{ padding: 10, border: "1px solid #ccc", borderRadius: 5 }}
        defaultValue={""}
      />
      <button
        type="button"
        onclick="fetchLocation()"
        style={{
          backgroundColor: "#333",
          color: "white",
          padding: 10,
          border: "none",
          borderRadius: 5,
          cursor: "pointer"
        }}
      >
        📍 Fetch My Current Location
      </button>
      {/* Location Display */}
      <div id="locationDisplay" style={{ fontSize: 14, color: "#555" }} />
      {/* Hidden Location Input */}
      <input
        type="hidden"
        name="crimelocation"
        id="crimelocation"
        required=""
      />
      {/* Upload Images */}
      <label htmlFor="images" style={{ fontSize: 14, color: "#555" }}>
        Upload Evidence Images (you can select multiple):
      </label>
      <input
        type="file"
        name="images"
        id="images"
        multiple=""
        accept="image/*"
        style={{ padding: 5 }}
      />
      {/* Submit Button */}
      <button
        type="submit"
        style={{
          backgroundColor: "#9a1414",
          color: "white",
          padding: 12,
          fontWeight: "bold",
          border: "none",
          borderRadius: 5,
          cursor: "pointer"
        }}
      >
        Submit Report
      </button>
    </form>
  </div>
  {/* JavaScript for Location Fetching */}
</>

  )
}

export default Register