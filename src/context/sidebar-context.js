import React, { useContext, createContext, useState } from "react";

const sideBarContext = createContext({
  showSidebar: true,
  setShowSideBar: () => {},
});

const SideBarProvider = ({ children }) => {
  const [showSidebar, setShowSideBar] = useState(true);

  const toggleSideBar = () => {
    setShowSideBar((prev) => !prev);
  };

  return (
    <sideBarContext.Provider
      value={{
        showSidebar,
        toggleSideBar,
        setShowSideBar,
      }}
    >
      {children}
    </sideBarContext.Provider>
  );
};

const useSideBar = () => useContext(sideBarContext);

export { SideBarProvider, useSideBar };
