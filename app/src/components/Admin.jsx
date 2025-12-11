import { Link } from "react-router-dom";
import "../App.css";

function Admin() {
  return (
    <div className="page-container">
      <h1 className="page-title">Admin Dashboard</h1>

      <div className="link-box">
        <Link to="/driverassign">Assign Driver</Link>
        <Link to="/vall">View All Bookings</Link>
      </div>
    </div>
  );
}

export default Admin;
