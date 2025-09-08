// import React from "react";
// import { useTheme } from "../../Context/ThemeContext";
// import "./Settings.css";

// const Settings = () => {
//   const { theme, toggleTheme } = useTheme(ThemeContext);

//   return (
//     <div className="settings-page">
//       <h2>⚙️ Settings</h2>

//       <section className="settings-section">
//         <h3>Appearance</h3>
//         <button onClick={toggleTheme}>
//           Switch to {theme === "light" ? "Dark" : "Light"} Mode
//         </button>
//       </section>

//       <section className="settings-section">
//         <h3>Account</h3>
//         <p>Manage profile, password, and security here (to be added).</p>
//       </section>

//       <section className="settings-section">
//         <h3>Notifications</h3>
//         <p>Enable/disable email or SMS alerts (to be added).</p>
//       </section>
//     </div>
//   );
// };

// export default Settings;


  





// import React from "react";
// import { useTheme } from "../../Context/ThemeContext"; // only useTheme
// import "./Settings.css";

// const Settings = () => {
//   const { theme, toggleTheme } = useTheme(); // <-- no argument here

//   return (
//     <div className="settings-page">
//       <h2>⚙️ Settings</h2>

//       <section className="settings-section">
//         <h3>Appearance</h3>
//         <button onClick={toggleTheme}>
//           Switch to {theme === "light" ? "Dark" : "Light"} Mode
//         </button>
//       </section>

//       <section className="settings-section">
//         <h3>Account</h3>
//         <p>Manage profile, password, and security here (to be added).</p>
//       </section>

//       <section className="settings-section">
//         <h3>Notifications</h3>
//         <p>Enable/disable email or SMS alerts (to be added).</p>
//       </section>
//     </div>
//   );
// };

// export default Settings;





// import React from "react";
// import { useTheme } from "../../Context/ThemeContext"; // ✅ correct
// import "./Settings.css";

// const Settings = () => {
//   const { theme, toggleTheme } = useTheme(); // ❌ remove ThemeContext argument

//   return (
//     <div className="settings-page">
//       <h2>⚙️ Settings</h2>

//       <section className="settings-section">
//         <h3>Appearance</h3>
//         <button onClick={toggleTheme}>
//           Switch to {theme === "light" ? "Dark" : "Light"} Mode
//         </button>
//       </section>

//       <section className="settings-section">
//         <h3>Account</h3>
//         <p>Manage profile, password, and security here (to be added).</p>
//       </section>

//       <section className="settings-section">
//         <h3>Notifications</h3>
//         <p>Enable/disable email or SMS alerts (to be added).</p>
//       </section>
//     </div>
//   );
// };

// export default Settings;




// import React, { useState } from "react";
// import { useTheme } from "../../Context/ThemeContext";
// import "./Settings.css";

// const Settings = () => {
//   const { theme, toggleTheme } = useTheme();

//   // Mock state for account and notifications
//   const [username, setUsername] = useState("Blessing Kusiwani");
//   const [email, setEmail] = useState("blessing@example.com");
//   const [avatar, setAvatar] = useState(null);
//   const [notifications, setNotifications] = useState({
//     email: true,
//     sms: false,
//   });

//   const handleSaveAccount = () => {
//     alert(`Account updated!\nUsername: ${username}\nEmail: ${email}`);
//   };

//   const handleToggleNotification = (type) => {
//     setNotifications(prev => ({ ...prev, [type]: !prev[type] }));
//   };

//   const handleAvatarChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setAvatar(reader.result); // stores image as base64
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="settings-page">
//       <h2>⚙️ Settings</h2>

//       {/* Appearance */}
//       <section className="settings-section">
//         <h3>Appearance</h3>
//         <button onClick={toggleTheme}>
//           Switch to {theme === "light" ? "Dark" : "Light"} Mode
//         </button>
//       </section>

//       {/* Account */}
//       <section className="settings-section">
//         <h3>Account</h3>

//         <div className="avatar-upload">
//           <img
//             src={avatar || "/default-avatar.png"} // fallback image
//             alt="avatar"
//             className="avatar-preview"
//           />
//           <input type="file" accept="image/*" onChange={handleAvatarChange} />
//         </div>

//         <label>
//           Username:
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </label>
//         <label>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </label>
//         <button onClick={handleSaveAccount}>Save Account</button>
//       </section>

//       {/* Notifications */}
//       <section className="settings-section">
//         <h3>Notifications</h3>
//         <label>
//           <input
//             type="checkbox"
//             checked={notifications.email}
//             onChange={() => handleToggleNotification("email")}
//           />
//           Email Notifications
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             checked={notifications.sms}
//             onChange={() => handleToggleNotification("sms")}
//           />
//           SMS Notifications
//         </label>
//       </section>
//     </div>
//   );
// };

// export default Settings;





// import React from "react";
// import { useTheme } from "../../Context/ThemeContext";
// import { useUser } from "../../Context/UserContext";
// import "./Settings.css";

// const Settings = () => {
//   const { theme, toggleTheme } = useTheme();
//   const { user, updateUser } = useUser();

//   const handleAvatarChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         updateUser({ avatar: reader.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="settings-page">
//       <h2>⚙️ Settings</h2>

//       <section className="settings-section">
//         <h3>Appearance</h3>
//         <button onClick={toggleTheme}>
//           Switch to {theme === "light" ? "Dark" : "Light"} Mode
//         </button>
//       </section>

//       <section className="settings-section">
//         <h3>Account</h3>
//         <p>Name: {user.name}</p>
//         <label>
//           Change Avatar:
//           <input type="file" accept="image/*" onChange={handleAvatarChange} />
//         </label>
//       </section>

//       <section className="settings-section">
//         <h3>Notifications</h3>
//         <p>Enable/disable email or SMS alerts (to be added).</p>
//       </section>
//     </div>
//   );
// };

// export default Settings;











// import React, { useState } from "react";
// import { useTheme } from "../../Context/ThemeContext";
// import "./Settings.css";

// const Settings = () => {
//   const { theme, toggleTheme } = useTheme();
//   const [avatar, setAvatar] = useState(null);
//   const [notifications, setNotifications] = useState({
//     email: true,
//     sms: false,
//   });

//   const handleAvatarChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setAvatar(URL.createObjectURL(file));
//     }
//   };

//   const toggleNotification = (type) => {
//     setNotifications((prev) => ({ ...prev, [type]: !prev[type] }));
//   };

//   return (
//     <div className="settings-page">
//       <h2>⚙️ Settings</h2>

//       {/* Appearance Section */}
//       <section className="settings-section">
//         <h3>Appearance</h3>
//         <button onClick={toggleTheme}>
//           Switch to {theme === "light" ? "Dark" : "Light"} Mode
//         </button>
//       </section>

//       {/* Account Section */}
//       <section className="settings-section">
//         <h3>Account</h3>
//         <p>Change your profile picture:</p>
//         <input type="file" accept="image/*" onChange={handleAvatarChange} />
//         {avatar && (
//           <div style={{ marginTop: "10px" }}>
//             <img
//               src={avatar}
//               alt="avatar-preview"
//               style={{ width: "80px", borderRadius: "50%" }}
//             />
//           </div>
//         )}
//         <p>Manage profile, password, and security (to be added).</p>
//       </section>

//       {/* Notifications Section */}
//       <section className="settings-section">
//         <h3>Notifications</h3>
//         <label>
//           <input
//             type="checkbox"
//             checked={notifications.email}
//             onChange={() => toggleNotification("email")}
//           />
//           Email Notifications
//         </label>
//         <br />
//         <label>
//           <input
//             type="checkbox"
//             checked={notifications.sms}
//             onChange={() => toggleNotification("sms")}
//           />
//           SMS Notifications
//         </label>
//         <p>Enable or disable alerts for email or SMS messages.</p>
//       </section>
//     </div>
//   );
// };

// export default Settings;






// import React from "react";
// import { useTheme } from "../../Context/ThemeContext";
// import { useUser } from "../../Context/UserContext";
// import "./Settings.css";

// const Settings = () => {
//   const { theme, toggleTheme } = useTheme();
//   const { user, updateAvatar, updateNotifications } = useUser();

//   const handleAvatarChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => updateAvatar(reader.result);
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleNotificationChange = (type) => {
//     updateNotifications(type, !user.notifications[type]);
//   };

//   return (
//     <div className="settings-page">
//       <h2>⚙️ Settings</h2>

//       {/* Appearance */}
//       <section className="settings-section">
//         <h3>Appearance</h3>
//         <button onClick={toggleTheme}>
//           Switch to {theme === "light" ? "Dark" : "Light"} Mode
//         </button>
//       </section>

//       {/* Profile Picture */}
//       <section className="settings-section">
//         <h3>Profile Picture</h3>
//         <input type="file" accept="image/*" onChange={handleAvatarChange} />
//         <img src={user.avatar} alt="avatar preview" className="avatar-preview" />
//       </section>

//       {/* Account */}
//       <section className="settings-section">
//         <h3>Account</h3>
//         <p>Manage profile, password, and security here (to be added).</p>
//       </section>

//       {/* Notifications */}
//       <section className="settings-section">
//         <h3>Notifications</h3>
//         <label>
//           <input
//             type="checkbox"
//             checked={user.notifications.email}
//             onChange={() => handleNotificationChange("email")}
//           />
//           Email Alerts
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             checked={user.notifications.sms}
//             onChange={() => handleNotificationChange("sms")}
//           />
//           SMS Alerts
//         </label>
//       </section>
//     </div>
//   );
// };

// export default Settings;



import React, { useState } from "react";
import { useTheme } from "../../Context/ThemeContext";
import { useUser } from "../../Context/UserContext";
import "./Settings.css";

const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, updateAvatar, updateNotifications } = useUser();

  const [username, setUsername] = useState(user.name);
  const [password, setPassword] = useState("");

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => updateAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleNotificationChange = (type) => {
    updateNotifications(type, !user.notifications[type]);
  };

  const handleAccountUpdate = (e) => {
    e.preventDefault();
    // Update username in context
    user.name = username;
    alert("Account updated successfully!");
    setPassword(""); // clear password field
  };

  return (
    <div className="settings-page">
      <h2>⚙️ Settings</h2>

      {/* Appearance */}
      <section className="settings-section">
        <h3>Appearance</h3>
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </section>

      {/* Profile Picture */}
      <section className="settings-section">
        <h3>Profile Picture</h3>
        <input type="file" accept="image/*" onChange={handleAvatarChange} />
        <img src={user.avatar} alt="avatar preview" className="avatar-preview" />
      </section>

      {/* Account */}
      <section className="settings-section">
        <h3>Account</h3>
        <form onSubmit={handleAccountUpdate} className="account-form">
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Update Account</button>
        </form>
      </section>

      {/* Notifications */}
      <section className="settings-section">
        <h3>Notifications</h3>
        <label>
          <input
            type="checkbox"
            checked={user.notifications.email}
            onChange={() => handleNotificationChange("email")}
          />
          Email Alerts
        </label>
        <label>
          <input
            type="checkbox"
            checked={user.notifications.sms}
            onChange={() => handleNotificationChange("sms")}
          />
          SMS Alerts
        </label>
      </section>
    </div>
  );
};

export default Settings;
