import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [role, setRole] = useState(localStorage.getItem("role") || "guest");

  const login = (newRole) => {
    localStorage.setItem("role", newRole);
    setRole(newRole);
  };

  const logout = () => {
    localStorage.removeItem("role");
    setRole("guest");
  };

  return (
    <AuthContext.Provider value={{ role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
