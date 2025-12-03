import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [role, setRole] = useState("guest");

  useEffect(() => {
    const storedRole = localStorage.getItem("role") || "guest";
    setRole(storedRole);
  }, []);

   const signup = (newRole, userData) => {
     localStorage.setItem("role", newRole);
     console.log("Signup Data:", userData);
    setRole(newRole);
  };

  const login = (newRole) => {
    localStorage.setItem("role", newRole);
    setRole(newRole);
  };

  const logout = () => {
    localStorage.removeItem("role");
    setRole("guest");
  };

  return (
    <AuthContext.Provider value={{ role, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
