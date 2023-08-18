import "./dialog.css";
import React, { useReducer } from "react";
import { Dropdown } from "../util";

const CreateAccountDialogContent = () => {

  const initialState = {
    showProgramDropdown: true,
    showCorporateDropdown: true,
  };

  const createAccountDialogReducer = (state, action) => {
    switch(action?.type) {
        case "ALL": return {...state, showProgramDropdown: true, showCorporateDropdown: true};
        case "RETAIL": return {...state, showProgramDropdown: true, showCorporateDropdown: false};
        case "CORPORATE": return {...state, showProgramDropdown: true, showCorporateDropdown: true};
        default: return state
    }
  }

  const [stateOfCreateAccountDialog, dispatchCreateAccountDialog] = useReducer(
    createAccountDialogReducer,
    initialState
  );

  const DropdownsList = () => [
    {
      id: "vp-program-type",
      label: "Program Type",
      list: ["All", "Retail", "Corporate"],
      show: true,
    },
    {
        id: "vp-program-type",
        label: "Program Type",
        list: ["All", "Program", "Corporate"],
        show: stateOfCreateAccountDialog?.showProgramDropdown,
      },
      {
        id: "vp-program-type",
        label: "Program Type",
        list: ["All", "Program", "Corporate"],
        show: stateOfCreateAccountDialog?.showCorporateDropdown,
      },
  ];

  return (
    <div className="vp-createAccountDialogContentComp">
      <Dropdown />
    </div>
  );
};

export { CreateAccountDialogContent };
