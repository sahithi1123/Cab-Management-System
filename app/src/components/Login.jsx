import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Login() {
  const navigate = useNavigate();
  const [form, setform] = useState({
    email: "",
    password: ""
  });

  const change = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:8081/api/user/login", form, { withCredentials: true });
      const role = result.data.role;

      if (role === "Admin") navigate("/admin");
      else if (role === "Hr") navigate("/Hr");
      else if (role === "Driver") navigate("/driver");
      else navigate("/");
    } catch (err) {
      alert(err.response.data);
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Login Page</h1>

      <form className="form-box" onSubmit={submit}>
        <label>Email</label>
        <input type="email" name="email" placeholder="Enter email" onChange={change} />

        <label>Password</label>
        <input type="password" name="password" placeholder="Enter password" onChange={change} />

        <button className="btn" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
