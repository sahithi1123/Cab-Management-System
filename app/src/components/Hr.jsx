import { Link } from "react-router-dom";
import "../App.css";

function Hr() {
  return (
    <div className="page-container">
      <h1 className="page-title">HR Dashboard</h1>

      <div className="link-box">
        <Link to="/bookingCab">Book a Cab</Link>
        <Link to="/myBookings">View Bookings</Link>
      </div>
    </div>
  );
}

export default Hr;
