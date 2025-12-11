import { useEffect, useState } from "react";
import axios from "axios";

function MyBookings() {
    const [bookings, setBooking] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        const hremail = localStorage.getItem("hremail");
        if (!hremail) {
            console.error("Email is null");
            return;
        }
        try {
            const res = await axios.get(`http://localhost:8081/api/hr/myBookings/${hremail}`);
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
        <>
            <h1>Welcome to view all bookings</h1>
            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>employeeName</th>
                        <th>pickUp</th>
                        <th>dropLocation</th>
                        <th>pickUpTime</th>
                        <th>cabType</th>
                        <th>bookingDate</th>
                        <th>status</th>
                        <th>hrEmail</th>
                        <th>completed</th>
                        <th>durationMin</th>
                        <th>createdAt</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((b) => (
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
                            <td>{b.completed ? "True" : "False"}</td>
                            <td>{b.durationMin}</td>
                            <td>{b.createdAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default MyBookings;
