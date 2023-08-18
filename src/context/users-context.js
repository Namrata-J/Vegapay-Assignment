import React, { useContext, createContext, useEffect } from "react";

const usersContext = createContext(null);

const UsersProvider = ({ children }) => {
  useEffect(() => {}, []);

  return <usersContext.Provider value={{}}>{children}</usersContext.Provider>;
};

const useUsers = () => useContext(usersContext);

export { UsersProvider, useUsers };
