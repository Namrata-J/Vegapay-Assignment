import React, { useContext, createContext, useEffect, useState } from "react";
import { UsersData } from "../constants/UsersData";

const usersContext = createContext(null);

const UsersProvider = ({ children }) => {
  const [tabType, setTabType] = useState(Object.keys({ ...UsersData })?.[0]);
  const [usersTable, setUsersTable] = useState(
    UsersData[Object.keys({ ...UsersData })?.[0]]
  );

  useEffect(() => {
    setUsersTable(UsersData[tabType]);
  }, [tabType]);

  return (
    <usersContext.Provider
      value={{ usersTable, setUsersTable, tabType, setTabType }}
    >
      {children}
    </usersContext.Provider>
  );
};

const useUsers = () => useContext(usersContext);

export { UsersProvider, useUsers };
