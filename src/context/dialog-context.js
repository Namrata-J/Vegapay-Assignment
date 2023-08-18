import React, { useContext, createContext, useState } from "react";

const dialogContext = createContext(null);

const DialogProvider = ({ children }) => {
  const [showDialog, setShowDialog] = useState(false);

  const toggleDialogDisplay = () => {
    setShowDialog((prev) => !prev);
  };

  return (
    <dialogContext.Provider
      value={{
        showDialog,
        setShowDialog,
        toggleDialogDisplay,
      }}
    >
      {children}
    </dialogContext.Provider>
  );
};

const useDialog = () => useContext(dialogContext);

export { DialogProvider, useDialog };
