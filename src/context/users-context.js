import React, { useContext, createContext, useEffect, useState } from "react";
import { UsersData } from "../constants/UsersData";

const usersContext = createContext(null);

const UsersProvider = ({ children }) => {
  const [tabType, setTabType] = useState(Object.keys({ ...UsersData })?.[0]);
  const [searchValue, setSearchValue] = useState("");
  const [usersTable, setUsersTable] = useState(
    UsersData[Object.keys({ ...UsersData })?.[0]]
  );

  useEffect(() => {
    setUsersTable(UsersData[tabType]);
  }, [tabType]);

  const filterUsersTableData = () => {
    setUsersTable(() => ({
      ...UsersData[tabType],
      data: {
        ...UsersData[tabType]?.data,
        users: [
          ...UsersData[tabType]?.data?.users.filter(
            (user) => user?.mobile.includes(searchValue) || searchValue === ""
          ),
        ],
      },
    }));
  };

  return (
    <usersContext.Provider
      value={{
        usersTable,
        setUsersTable,
        tabType,
        setTabType,
        searchValue,
        setSearchValue,
        filterUsersTableData,
      }}
    >
      {children}
    </usersContext.Provider>
  );
};

const useUsers = () => useContext(usersContext);

export { UsersProvider, useUsers };
