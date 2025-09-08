

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../Pages/Login/Login.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("wiremitUser"));

    if (!storedUser) {
      setError("No account found. Please sign up first.");
      return;
    }

    if (
      storedUser.email === form.email &&
      storedUser.password === form.password
    ) {
      setError("");
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-card">
        <h2>Login</h2>

        {error && <p className="login-error">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="login-input"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="login-input"
        />

        <button type="submit" className="login-btn">
          Login
        </button>

        <p>
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;






// import React, { useState } from "react";
// import "../../Pages/Login/Login.css";

// const Login = () => {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");

//   const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");

//     if (!form.email || !form.password) {
//       setError("Both fields are required");
//       return;
//     }

//     if (!validateEmail(form.email)) {
//       setError("Invalid email format");
//       return;
//     }

//     if (form.password.length < 6) {
//       setError("Password must be at least 6 characters");
//       return;
//     }

//     // Get saved user from localStorage (mock auth)
//     const savedUser = JSON.parse(localStorage.getItem("wiremiteUser"));

//     if (!savedUser) {
//       setError("No account found. Please sign up first.");
//       return;
//     }

//     if (
//       savedUser.email === form.email &&
//       savedUser.password === form.password
//     ) {
//       alert("Login successful!");
//       localStorage.setItem("isLoggedIn", "true"); // mock session
//       window.location.href = "/dashboard"; // redirect
//     } else {
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
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
//         <button type="submit">Login</button>
//         {error && <p className="error">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default Login;
