import React, { useContext, createContext, useState } from "react";

const dialogContext = createContext(null);

const DialogProvider = ({ children }) => {
  const [dialogType, setDialogType] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [dialogDropdownContent, setDialogDropdownContent] = useState({});

  const toggleDialogDisplay = () => {
    setShowDialog((prev) => !prev);
  };

  return (
    <dialogContext.Provider
      value={{
        showDialog,
        dialogType,
        setShowDialog,
        setDialogType,
        toggleDialogDisplay,
        dialogDropdownContent,
        setDialogDropdownContent,
      }}
    >
      {children}
    </dialogContext.Provider>
  );
};

const useDialog = () => useContext(dialogContext);

export { DialogProvider, useDialog };
