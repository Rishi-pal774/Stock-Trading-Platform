import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "../Signup.css"; // reuse same styling

const Login = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        { ...inputValue },
        { withCredentials: true }
      );

      const { success, message } = data;

      if (success) {
        localStorage.setItem("isLoggedIn", "true");
        handleSuccess(message);
        navigate("/");
      } else {
        handleError(message);
      }
    } catch (error) {
      handleError("Login failed");
    }

    setInputValue({
      email: "",
      password: "",
    });
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-card">

        <h2>Login to your account</h2>

        <form onSubmit={handleSubmit} autoComplete="off">

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
              autoComplete="off"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
              autoComplete="new-password"
              required
            />
          </div>

          <button className="signup-btn" type="submit">
            Login
          </button>

          <p className="login-text">
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>

        </form>

      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;