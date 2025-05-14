import React from 'react'

const Track = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>IMReporter - Track Cases</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');\n    "
    }}
  />
  {/* Header with Clock */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#9a1414",
      color: "white",
      width: "100%",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 1000
    }}
  >
    <div>Government of India</div>
    <div id="clock" style={{ fontSize: 14, fontWeight: "bold" }}>
      🕒 00:00:00 AM
    </div>
  </div>
  {/* App Title Section */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      padding: "15px 20px",
      backgroundColor: "white",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      position: "fixed",
      top: 50,
      left: 0,
      zIndex: 999,
      height: 60
    }}
  >
    <img
      src="Satyamevjayate.png"
      alt="Satyamev Jayate Logo"
      style={{ height: 40 }}
    />
    <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "#002147" }}>
      IMReporter
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end"
      }}
    >
      <div style={{ fontSize: "1.2rem", fontWeight: 600, color: "#002147" }}>
        National Crime Reporting Portal
      </div>
      <div style={{ fontSize: "1rem", color: "#333" }}>
        राष्ट्रीय अपराध रिपोर्टिंग पोर्टल
      </div>
    </div>
  </div>
  {/* Navigation */}
  <nav
    style={{
      display: "flex",
      backgroundColor: "#9a1414",
      padding: "0 20px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      position: "fixed",
      top: 110,
      left: 0,
      width: "100%",
      zIndex: 998,
      height: 50,
      overflowX: "auto",
      whiteSpace: "nowrap"
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
      <a
        href="Home.html"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textDecoration: "none",
          color: "white",
          fontSize: "0.9rem",
          fontWeight: 500,
          padding: "10px 0",
          transition: "all 0.3s"
        }}
      >
        <i className="fas fa-home" />
        <span>Home</span>
      </a>
      <a
        href="Cases.html"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textDecoration: "none",
          color: "white",
          fontSize: "0.9rem",
          fontWeight: 500,
          padding: "10px 0",
          transition: "all 0.3s"
        }}
      >
        <i className="fas fa-folder-open" />
        <span>Cases</span>
      </a>
      <a
        href="Track.html"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textDecoration: "none",
          color: "white",
          fontSize: "0.9rem",
          fontWeight: 500,
          padding: "10px 0",
          transition: "all 0.3s",
          backgroundColor: "rgba(255,255,255,0.2)",
          borderRadius: 5
        }}
      >
        <i className="fas fa-search" />
        <span>Track</span>
      </a>
      <a
        href="Registercomplain.html"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textDecoration: "none",
          color: "white",
          fontSize: "0.9rem",
          fontWeight: 500,
          padding: "10px 0",
          transition: "all 0.3s"
        }}
      >
        <i className="fas fa-edit" />
        <span>Register</span>
      </a>
      <a
        href="Govt-support.html"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textDecoration: "none",
          color: "white",
          fontSize: "0.9rem",
          fontWeight: 500,
          padding: "10px 0",
          transition: "all 0.3s"
        }}
      >
        <i className="fas fa-handshake" />
        <span>Govt Support</span>
      </a>
    </div>
  </nav>
  {/* Main Content */}
  <main style={{ padding: 20, maxWidth: 1200, margin: "30px auto 0" }}>
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: 30,
        borderRadius: 10,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#9a1414",
          marginBottom: 20,
          fontSize: "1.8rem"
        }}
      >
        Track Your Crime Reports
      </h2>
      {/* Search Box */}
      <div
        style={{ marginBottom: 30, display: "flex", justifyContent: "center" }}
      >
        <div style={{ position: "relative", width: "100%", maxWidth: 600 }}>
          <input
            type="text"
            placeholder="Search by Report ID or Name..."
            style={{
              width: "100%",
              padding: "12px 20px",
              paddingRight: 50,
              border: "1px solid #ddd",
              borderRadius: 30,
              fontSize: "1rem"
            }}
          />
          <button
            style={{
              position: "absolute",
              right: 5,
              top: 5,
              background: "#9a1414",
              color: "white",
              border: "none",
              borderRadius: "50%",
              width: 40,
              height: 40,
              cursor: "pointer"
            }}
          >
            <i className="fas fa-search" />
          </button>
        </div>
      </div>
      {/* Report Table */}
      <div style={{ overflowX: "auto" }}>
        <table
          style={{ width: "100%", borderCollapse: "collapse", marginTop: 20 }}
        >
          <thead>
            <tr>
              <th
                style={{
                  padding: 15,
                  textAlign: "center",
                  borderBottom: "2px solid #9a1414",
                  backgroundColor: "#f5f5f5",
                  color: "#002147"
                }}
              >
                Report ID
              </th>
              <th
                style={{
                  padding: 15,
                  textAlign: "center",
                  borderBottom: "2px solid #9a1414",
                  backgroundColor: "#f5f5f5",
                  color: "#002147"
                }}
              >
                Date
              </th>
              <th
                style={{
                  padding: 15,
                  textAlign: "center",
                  borderBottom: "2px solid #9a1414",
                  backgroundColor: "#f5f5f5",
                  color: "#002147"
                }}
              >
                Crime Type
              </th>
              <th
                style={{
                  padding: 15,
                  textAlign: "center",
                  borderBottom: "2px solid #9a1414",
                  backgroundColor: "#f5f5f5",
                  color: "#002147"
                }}
              >
                Location
              </th>
              <th
                style={{
                  padding: 15,
                  textAlign: "center",
                  borderBottom: "2px solid #9a1414",
                  backgroundColor: "#f5f5f5",
                  color: "#002147"
                }}
              >
                Status
              </th>
              <th
                style={{
                  padding: 15,
                  textAlign: "center",
                  borderBottom: "2px solid #9a1414",
                  backgroundColor: "#f5f5f5",
                  color: "#002147"
                }}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  padding: 15,
                  textAlign: "center",
                  borderBottom: "1px solid #eee"
                }}
              >
                IMR-2025-0420
              </td>
              <td
                style={{
                  padding: 15,
                  textAlign: "center",
                  borderBottom: "1px solid #eee"
                }}
              >
                2025-04-20
              </td>
              <td
                style={{
                  padding: 15,
                  textAlign: "center",
                  borderBottom: "1px solid #eee"
                }}
              >
                Burglary
              </td>
              <td
                style={{
                  padding: 15,
                  textAlign: "center",
                  borderBottom: "1px solid #eee"
                }}
              >
                New Delhi
              </td>
              <td
                style={{
                  padding: 15,
                  textAlign: "center",
                  borderBottom: "1px solid #eee",
                  fontWeight: "bold",
                  color: "#e74c3c"
                }}
              >
                Pending
              </td>
              <td
                style={{
                  padding: 15,
                  textAlign: "center",
                  borderBottom: "1px solid #eee"
                }}
              >
                <button
                  style={{
                    background: "#9a1414",
                    color: "white",
                    border: "none",
                    padding: "8px 15px",
                    borderRadius: 5,
                    cursor: "pointer",
                    fontSize: "0.9rem"
                  }}
                >
                  View Details
                </button>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: 15,
                  textAlign: "center",
                  borderBottom: "1px solid #eee"
                }}
              >
                IMR-2025-0419
              </td>
              <td
                style={{
                  padding: 15,
                  textAlign: "center",
                  borderBottom: "1px solid #eee"
                }}
              >
                2025-04-19
              </td>
              <td
                style={{
                  padding: 15,
                  textAlign: "center",
                  borderBottom: "1px solid #eee"
                }}
              >
                Assault
              </td>
              <td
                style={{
                  padding: 15,
                  textAlign: "center",
                  borderBottom: "1px solid #eee"
                }}
              >
                Mumbai
              </td>
              <td
                style={{
                  padding: 15,
                  textAlign: "center",
                  borderBottom: "1px solid #eee",
                  fontWeight: "bold",
                  color: "#f39c12"
                }}
              >
                Investigating
              </td>
              <td
                style={{
                  padding: 15,
                  textAlign: "center",
                  borderBottom: "1px solid #eee"
                }}
              >
                <button
                  style={{
                    background: "#9a1414",
                    color: "white",
                    border: "none",
                    padding: "8px 15px",
                    borderRadius: 5,
                    cursor: "pointer",
                    fontSize: "0.9rem"
                  }}
                >
                  View Details
                </button>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: 15,
                  textAlign: "center",
                  borderBottom: "1px solid #eee"
                }}
              >
                IMR-2025-0418
              </td>
              <td
                style={{
                  padding: 15,
                  textAlign: "center",
                  borderBottom: "1px solid #eee"
                }}
              >
                2025-04-18
              </td>
              <td
                style={{
                  padding: 15,
                  textAlign: "center",
                  borderBottom: "1px solid #eee"
                }}
              >
                Theft
              </td>
              <td
                style={{
                  padding: 15,
                  textAlign: "center",
                  borderBottom: "1px solid #eee"
                }}
              >
                Bangalore
              </td>
              <td
                style={{
                  padding: 15,
                  textAlign: "center",
                  borderBottom: "1px solid #eee",
                  fontWeight: "bold",
                  color: "#2ecc71"
                }}
              >
                Resolved
              </td>
              <td
                style={{
                  padding: 15,
                  textAlign: "center",
                  borderBottom: "1px solid #eee"
                }}
              >
                <button
                  style={{
                    background: "#9a1414",
                    color: "white",
                    border: "none",
                    padding: "8px 15px",
                    borderRadius: 5,
                    cursor: "pointer",
                    fontSize: "0.9rem"
                  }}
                >
                  View Details
                </button>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: 15,
                  textAlign: "center",
                  borderBottom: "1px solid #eee"
                }}
              >
                IMR-2025-0417
              </td>
              <td
                style={{
                  padding: 15,
                  textAlign: "center",
                  borderBottom: "1px solid #eee"
                }}
              >
                2025-04-17
              </td>
              <td
                style={{
                  padding: 15,
                  textAlign: "center",
                  borderBottom: "1px solid #eee"
                }}
              >
                Vandalism
              </td>
              <td
                style={{
                  padding: 15,
                  textAlign: "center",
                  borderBottom: "1px solid #eee"
                }}
              >
                Chennai
              </td>
              <td
                style={{
                  padding: 15,
                  textAlign: "center",
                  borderBottom: "1px solid #eee",
                  fontWeight: "bold",
                  color: "#e74c3c"
                }}
              >
                Pending
              </td>
              <td
                style={{
                  padding: 15,
                  textAlign: "center",
                  borderBottom: "1px solid #eee"
                }}
              >
                <button
                  style={{
                    background: "#9a1414",
                    color: "white",
                    border: "none",
                    padding: "8px 15px",
                    borderRadius: 5,
                    cursor: "pointer",
                    fontSize: "0.9rem"
                  }}
                >
                  View Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
        <button
          style={{
            background: "#9a1414",
            color: "white",
            border: "none",
            padding: "8px 15px",
            borderRadius: 5,
            margin: "0 5px",
            cursor: "pointer"
          }}
        >
          Previous
        </button>
        <button
          style={{
            background: "#9a1414",
            color: "white",
            border: "none",
            padding: "8px 15px",
            borderRadius: 5,
            margin: "0 5px",
            cursor: "pointer"
          }}
        >
          1
        </button>
        <button
          style={{
            background: "#f5f5f5",
            color: "#9a1414",
            border: "1px solid #9a1414",
            padding: "8px 15px",
            borderRadius: 5,
            margin: "0 5px",
            cursor: "pointer"
          }}
        >
          2
        </button>
        <button
          style={{
            background: "#f5f5f5",
            color: "#9a1414",
            border: "1px solid #9a1414",
            padding: "8px 15px",
            borderRadius: 5,
            margin: "0 5px",
            cursor: "pointer"
          }}
        >
          3
        </button>
        <button
          style={{
            background: "#9a1414",
            color: "white",
            border: "none",
            padding: "8px 15px",
            borderRadius: 5,
            margin: "0 5px",
            cursor: "pointer"
          }}
        >
          Next
        </button>
      </div>
    </div>
  </main>
  {/* Footer */}
  <footer
    style={{
      backgroundColor: "#002147",
      color: "white",
      padding: "30px 20px",
      textAlign: "center",
      marginTop: 50
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 30,
        marginBottom: 20,
        flexWrap: "wrap"
      }}
    >
      <a href="Home.html" style={{ color: "white", textDecoration: "none" }}>
        Home
      </a>
      <a href="About.html" style={{ color: "white", textDecoration: "none" }}>
        About Us
      </a>
      <a href="Privacy.html" style={{ color: "white", textDecoration: "none" }}>
        Privacy Policy
      </a>
      <a href="Terms.html" style={{ color: "white", textDecoration: "none" }}>
        Terms of Service
      </a>
      <a href="Contact.html" style={{ color: "white", textDecoration: "none" }}>
        Contact
      </a>
    </div>
    <div style={{ fontSize: "0.9rem" }}>
      © 2025 IMReporter - National Crime Reporting Portal. All Rights Reserved.
    </div>
  </footer>
</>

  )
}

export default Track