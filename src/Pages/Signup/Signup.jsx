

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





// import React, { useState } from "react";
// import "../../Pages/Signup/Signup.css";

// const Signup = () => {
//   const [form, setForm] = useState({ name: "", email: "", password: "" });
//   const [error, setError] = useState("");

//   const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");

//     if (!form.name || !form.email || !form.password) {
//       setError("All fields are required");
//       return;
//     }

//     if (!validateEmail(form.email)) {
//       setError("Please enter a valid email");
//       return;
//     }

//     if (form.password.length < 6) {
//       setError("Password must be at least 6 characters long");
//       return;
//     }

//     // Save user (mock localStorage for now)
//     localStorage.setItem("wiremiteUser", JSON.stringify(form));
//     alert("Account created! You can now log in.");
//   };

//   return (
//     <div className="signup-container">
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Full Name"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={(e) => setForm({ ...form, password: e.target.value })}
//         />
//         <button type="submit">Sign Up</button>
//         {error && <p className="error">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default Signup;
