import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Main Button Style
  const btnStyle = {
    padding: "12px",
    fontSize: "16px",
    border: "none",
    background: "#1a73e8",  // Google Blue
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
    width: "100%",
    transition: "0.2s",
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#e8f0fe", // soft cloud blue
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ marginBottom: "20px", color: "#0b2c52" }}>
        Cab Booking System
      </h1>

      <div
        style={{
          background: "white",
          padding: "35px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          width: "300px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {/* Register */}
        <button
          style={btnStyle}
          onMouseOver={(e) => (e.target.style.background = "#174ea6")}
          onMouseOut={(e) => (e.target.style.background = "#1a73e8")}
          onClick={() => navigate("/reg")}
        >
          Register
        </button>

        {/* Login */}
        <button
          style={btnStyle}
          onMouseOver={(e) => (e.target.style.background = "#174ea6")}
          onMouseOut={(e) => (e.target.style.background = "#1a73e8")}
          onClick={() => navigate("/log")}
        >
          Login
        </button>

        {/* HR Dashboard */}
        <button
          style={{ ...btnStyle, background: "#0d47a1" }} // Deep Blue
          onMouseOver={(e) => (e.target.style.background = "#08336f")}
          onMouseOut={(e) => (e.target.style.background = "#0d47a1")}
          onClick={() => navigate("/Hr")}
        >
          HR Dashboard
        </button>

        {/* Admin Dashboard */}
        <button
          style={{ ...btnStyle, background: "#0b2c52" }} // Navy Blue
          onMouseOver={(e) => (e.target.style.background = "#061a30")}
          onMouseOut={(e) => (e.target.style.background = "#0b2c52")}
          onClick={() => navigate("/admin")}
        >
          Admin Dashboard
        </button>
      </div>
    </div>
  );
};

export default Home;
