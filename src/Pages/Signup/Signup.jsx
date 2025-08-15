

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../Pages/Signup/Signup.css";

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Enter a valid email address");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // Save user to localStorage (mock database)
    localStorage.setItem("wiremitUser", JSON.stringify(form));
    setError("");
    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-card">
        <h2>Create Account</h2>

        {error && <p className="signup-error">{error}</p>}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="signup-input"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="signup-input"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="signup-input"
        />

        <button type="submit" className="signup-btn">
          Sign Up
        </button>

        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
