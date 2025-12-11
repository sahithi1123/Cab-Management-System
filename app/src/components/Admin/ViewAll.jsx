import { useEffect, useState } from "react";
import axios from "axios";

function ViewAll() {
    const [bookings, setBooking] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            const res = await axios.get(`http://localhost:8081/api/admin/vall`);
            setBooking(res.data);
            console.log(res.data);
        } catch (err) {
            console.error("Failed to fetch hr bookings", err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <p>Loading bookings...</p>;

     return (
    <div className="page-container">
      <h1 className="page-title">All Bookings</h1>

      <div className="table-box">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Employee</th>
              <th>PickUp</th>
              <th>Drop</th>
              <th>Time</th>
              <th>Cab</th>
              <th>Date</th>
              <th>Status</th>
              <th>HR Email</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map(b => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.employeeName}</td>
                <td>{b.pickUp}</td>
                <td>{b.dropLocation}</td>
                <td>{b.pickUpTime}</td>
                <td>{b.cabType}</td>
                <td>{b.bookingDate}</td>
                <td>{b.status}</td>
                <td>{b.hrEmail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewAll;
