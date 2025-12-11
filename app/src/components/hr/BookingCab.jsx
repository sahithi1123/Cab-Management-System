import { useState } from "react";
import axios from "axios";

function BookingCab() {
  const [form, setform] = useState({
    employeeName: "",
    pickUp: "",
    dropLocation: "",
    pickUpTime: "",
    cabType: "Cab"
  });

  const change = (e) => setform({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    const hremail = localStorage.getItem("hremail");
    try {
      const result = await axios.post(`http://localhost:8081/api/hr/bookcab/${hremail}`, form);
      alert(result.data);
    } catch (err) {
      alert(err.response.data);
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Book Cab</h1>

      <form className="form-box" onSubmit={submit}>
        <label>Employee Name</label>
        <input type="text" name="employeeName" onChange={change} />

        <label>Pick Up</label>
        <input type="text" name="pickUp" onChange={change} />

        <label>Drop Location</label>
        <input type="text" name="dropLocation" onChange={change} />

        <label>Pick Up Time</label>
        <input type="time" name="pickUpTime" onChange={change} />

        <label>Cab Type</label>
        <select name="cabType" value={form.cabType} onChange={change}>
          <option value="Cab">Cab</option>
          <option value="Van">Van</option>
        </select>

        <button className="btn" type="submit">Book</button>
      </form>
    </div>
  );
}

export default BookingCab;
