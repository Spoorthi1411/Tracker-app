/*import { createContext, useContext, useState } from "react";


export const AuthContext = createContext();
export const useAuthContext = () =>{
    return useContext(AuthContext);
}
export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser}}>
      {children}
    </AuthContext.Provider>
  );
};*/


import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true); // 👈 added

  useEffect(() => {
    const user = localStorage.getItem("chat-user");
    if (user) {
      setAuthUser(JSON.parse(user));
    }
    setLoading(false); // 👈 once done reading localStorage
  }, []);

  if (loading) return <div className="text-center p-4">Loading...</div>; // 👈 avoid flicker/redirects

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

