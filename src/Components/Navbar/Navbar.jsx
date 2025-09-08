// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import { ThemeContext } from "../../";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">Wiremite</div>
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/signup">Sign Up</Link></li>
//         <li><Link to="/login">Login</Link></li>
//         <li><Link to="/dashboard">Dashboard</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;




// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { ThemeContext } from "../../Context/ThemeContext";

// const Navbar = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <nav className="navbar">
//       <Link to="/">Wiremite</Link>
//       <div className="links">
//         <Link to="/dashboard">Dashboard</Link>
//         <Link to="/settings">Settings</Link>
//         <button onClick={toggleTheme}>
//           {theme === "light" ? "🌙" : "☀️"}
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;








// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useTheme } from "../../Context/ThemeContext";
// import { useUser } from "../../Context/UserContext";
// import "./Navbar.css";
// import avatarImg from "../../assets/avatar.jpg"

// const Navbar = () => {
//   const { theme, toggleTheme } = useTheme();
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   // Mock user
//   const user = {
//     name: "Blessing Kusiwani",
//     avatar: avatarImg,
//   };

//   const handleLogout = () => {
//     alert("Logged out!");
//     navigate("/login");
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <Link to="/dashboard" className="logo">Wiremite</Link>
//       </div>

//       {/* Hamburger for mobile */}
//       <div className="hamburger" onClick={() => setMenuOpen(prev => !prev)}>
//         <div className={menuOpen ? "bar rotate1" : "bar"}></div>
//         <div className={menuOpen ? "bar fade" : "bar"}></div>
//         <div className={menuOpen ? "bar rotate2" : "bar"}></div>
//       </div>

//       <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
//         {/* <Link to="/dashboard" className="nav-link" onClick={() => setMenuOpen(false)}>Dashboard</Link> */}
//         {/* <Link to="/settings" className="nav-link" onClick={() => setMenuOpen(false)}>Settings</Link> */}
//         <button onClick={toggleTheme} className="theme-btn">
//           {theme === "light" ? "🌙" : "☀️"}
//         </button>

//         <div className="profile-container">
//           <img
//             src={user.avatar}
//             alt="avatar"
//             className="avatar"
//             onClick={() => setDropdownOpen(prev => !prev)}
//           />
//           {dropdownOpen && (
//             <div className="dropdown">
//               <p className="dropdown-name">{user.name}</p>
//               <Link to="/settings" className="dropdown-item" onClick={() => setDropdownOpen(false)}>Settings</Link>
//               <button className="dropdown-item logout-btn" onClick={handleLogout}>Logout</button>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;








// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useTheme } from "../../Context/ThemeContext";
// import { useUser } from "../../Context/UserContext";
// import "./Navbar.css";

// const Navbar = () => {
//   const { theme, toggleTheme } = useTheme();
//   const { user } = useUser();
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     alert("Logged out!");
//     navigate("/login");
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <Link to="/dashboard" className="logo">Wiremite</Link>
//       </div>

//       <div className="hamburger" onClick={() => setMenuOpen(prev => !prev)}>
//         <div className={menuOpen ? "bar rotate1" : "bar"}></div>
//         <div className={menuOpen ? "bar fade" : "bar"}></div>
//         <div className={menuOpen ? "bar rotate2" : "bar"}></div>
//       </div>

//       <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
//         <button onClick={toggleTheme} className="theme-btn">
//           {theme === "light" ? "🌙" : "☀️"}
//         </button>

//         <div className="profile-container">
//           <img
//             src={user.avatar}
//             alt="avatar"
//             className="avatar"
//             onClick={() => setDropdownOpen(prev => !prev)}
//           />
//           {dropdownOpen && (
//             <div className="dropdown">
//               <p className="dropdown-name">{user.name}</p>
//               <Link to="/settings" className="dropdown-item" onClick={() => setDropdownOpen(false)}>Settings</Link>
//               <button className="dropdown-item logout-btn" onClick={handleLogout}>Logout</button>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;







import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../Context/ThemeContext";
import { useUser } from "../../Context/UserContext";
import "./Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user } = useUser();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged out!");
    navigate("/landing");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/dashboard" className="logo">Wiremite</Link>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(prev => !prev)}>
        <div className={menuOpen ? "bar rotate1" : "bar"}></div>
        <div className={menuOpen ? "bar fade" : "bar"}></div>
        <div className={menuOpen ? "bar rotate2" : "bar"}></div>
      </div>

      <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
        <button onClick={toggleTheme} className="theme-btn">
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <div className="profile-container">
          <img
            src={user.avatar}
            alt="avatar"
            className="avatar"
            onClick={() => setDropdownOpen(prev => !prev)}
          />
          {dropdownOpen && (
            <div className="dropdown">
              <p className="dropdown-name">{user.name}</p>
              <Link to="/settings" className="dropdown-item" onClick={() => setDropdownOpen(false)}>Settings</Link>
              <button className="dropdown-item logout-btn" onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
