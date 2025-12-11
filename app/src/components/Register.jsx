import { useState } from "react";
import axios from "axios";
import "../App.css";

function Register() {
  const [form, setform] = useState({
    userName: "",
    email: "",
    password: "",
    role: "Admin"
  });

  const change = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:8081/api/user/register", form);
      alert(result.data);
    } catch (err) {
      alert(err.response.data);
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Registration Page</h1>

      <form className="form-box" onSubmit={submit}>
        <label>Username</label>
        <input type="text" name="userName" onChange={change} placeholder="Enter username" />

        <label>Email</label>
        <input type="email" name="email" onChange={change} placeholder="Enter email" />

        <label>Password</label>
        <input type="password" name="password" onChange={change} placeholder="Enter password" />

        <label>Role</label>
        <select name="role" value={form.role} onChange={change}>
          <option value="">-- Select Role --</option>
          <option value="Admin">Admin</option>
          <option value="Hr">Hr</option>
          <option value="Driver">Driver</option>
        </select>

        <button className="btn" type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
