// import React, { createContext, useContext, useState } from "react";

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState({
//     name: "Blessing Kusiwani",
//     avatar: "/assets/default-avatar.jpg", // default image
//   });

//   const updateAvatar = (newAvatar) => {
//     setUser((prev) => ({ ...prev, avatar: newAvatar }));
//   };

//   return (
//     <UserContext.Provider value={{ user, updateAvatar }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// // Custom hook
// export const useUser = () => useContext(UserContext);








import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Blessing Kusiwani",
    avatar: "/assets/avatar.jpg", // default avatar
    notifications: { email: true, sms: false },
  });

  const updateAvatar = (newAvatar) => {
    setUser(prev => ({ ...prev, avatar: newAvatar }));
  };

  const updateNotifications = (type, value) => {
    setUser(prev => ({
      ...prev,
      notifications: { ...prev.notifications, [type]: value }
    }));
  };

  return (
    <UserContext.Provider value={{ user, updateAvatar, updateNotifications }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
