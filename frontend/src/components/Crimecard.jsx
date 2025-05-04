import React from 'react'

const Crimecard = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Track Report</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    body {\n      background-color: #f0f2f5;\n      padding: 20px;\n      font-family: Arial, sans-serif;\n    }\n    .card {\n      max-width: 500px;\n      margin: auto;\n      background: white;\n      border: 1px solid #ccc;\n      border-radius: 15px;\n      padding: 15px;\n      box-shadow: 0 4px 10px rgba(0,0,0,0.05);\n    }\n    .comment {\n      padding: 8px;\n      background: #f9f9f9;\n      border-radius: 8px;\n      margin-bottom: 8px;\n    }\n    .hidden {\n      display: none;\n    }\n  "
    }}
  />
  <div className="card">
    {/* Header */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            marginRight: 10
          }}
        />
        <div>
          <strong style={{ fontSize: 16 }}>IMReporter</strong>
        </div>
      </div>
    </div>
    {/* Report Text */}
    <p style={{ fontSize: 15, lineHeight: "1.5", marginTop: 10 }}>
      🚨 Suspicious activity reported. Please stay alert in your area. You can
      report incidents directly from your phone.
      <span style={{ color: "#1DA1F2" }}>#CrimeAlert</span>
    </p>
    {/* Image */}
    <div
      style={{
        width: "100%",
        height: 200,
        backgroundColor: "#ccc",
        borderRadius: 10
      }}
    />
    {/* Time & Location */}
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10
      }}
    >
      <div style={{ color: "gray", fontSize: 13 }}>11:30 PM · 21/03/2030</div>
      <button
        onclick="alert('Fetching your location...')"
        style={{
          backgroundColor: "#1DA1F2",
          color: "white",
          fontSize: 12,
          border: "none",
          padding: "6px 10px",
          borderRadius: 20,
          cursor: "pointer"
        }}
      >
        📍Location
      </button>
    </div>
    {/* Crime Category */}
    <div style={{ marginTop: 15 }}>
      <label
        htmlFor="crime-category"
        style={{ fontSize: 14, fontWeight: "bold" }}
      >
        Crime Category:
      </label>
      <br />
      <p>Theft</p>
    </div>
    {/* Add Comment */}
    <div style={{ marginTop: 15 }}>
      <label htmlFor="comment" style={{ fontSize: 14, fontWeight: "bold" }}>
        Add Comment:
      </label>
      <br />
      <textarea
        id="comment"
        placeholder="Write a comment..."
        style={{
          width: "100%",
          padding: 10,
          borderRadius: 10,
          border: "1px solid #ccc",
          marginTop: 5
        }}
        defaultValue={""}
      />
      <button
        onclick="addComment()"
        style={{
          marginTop: 10,
          backgroundColor: "#1DA1F2",
          color: "white",
          border: "none",
          padding: "8px 15px",
          borderRadius: 20,
          cursor: "pointer"
        }}
      >
        Submit Comment
      </button>
    </div>
    {/* Comments List */}
    <div style={{ marginTop: 20 }}>
      <h4 style={{ marginBottom: 10 }}>Comments:</h4>
      <div id="comments-section">
        <div className="comment">Stay safe everyone!</div>
        <div className="comment">Thanks for the alert.</div>
        <div className="comment hidden">
          I saw something similar last night.
        </div>
        <div className="comment hidden">Police should patrol more here.</div>
      </div>
      <button
        id="toggle-button"
        onclick="toggleComments()"
        style={{
          background: "none",
          color: "#1DA1F2",
          border: "none",
          cursor: "pointer",
          marginTop: 5
        }}
      >
        Show More
      </button>
    </div>
  </div>
</>

  )
}

export default Crimecard