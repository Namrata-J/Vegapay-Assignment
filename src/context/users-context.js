import React, { useContext, createContext, useEffect, useState } from "react";
import { TOKEN, BRANCH_ID } from "../constants/apiCallsData";
import { cards } from "../constants/tabs";
import toast from "react-hot-toast";
import axios from "axios";

const usersContext = createContext(null);

const UsersProvider = ({ children }) => {
  const [tabType, setTabType] = useState(cards[0]);
  const [searchValue, setSearchValue] = useState("");
  const [usersTable, setUsersTable] = useState([]);

  useEffect(() => {
    getDataForKitTab();
  }, []);

  const getDataForKitTab = async () => {
    try {
      const data = {
        value: searchValue,
        branchId: BRANCH_ID,
        page: 0,
        pageSize: 50,
      };

      const response = await axios.post(
        `https://prod-api.vegapay.tech/forex/account/search`,
        data,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );
      setUsersTable(response?.data?.records);
    } catch (error) {
      toast.error("An unknown error occurred");
    }
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
        getDataForKitTab,
      }}
    >
      {children}
    </usersContext.Provider>
  );
};

const useUsers = () => useContext(usersContext);

export { UsersProvider, useUsers };
