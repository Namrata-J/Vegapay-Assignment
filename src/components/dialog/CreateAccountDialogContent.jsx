import "./dialog.css";
import React, { useState } from "react";
import { Dropdown } from "../util";

const CreateAccountDialogContent = () => {

    const [programType, setProgramType] = useState('');

  const dropdownsList = [
    {
      id: "vp-program-type",
      label: "Program Type",
      list: ["All", "Retail", "Corporate"],
      show: true,
    },
    {
      id: "vp-program-name",
      label: "Program Name",
      list: ["Corporate Program"],
      show: true,
    },
    {
      id: "vp-corporate-name",
      label: "Corporate Name",
      list: ["Corp1", "Corp1"],
      show: programType === "CORPORATE" ? true : false
    },
  ];

  return (
    <div className="vp-createAccountDialogContentComp">
      {dropdownsList &&
        dropdownsList.length &&
        dropdownsList.map((dropDown) => (
          <Dropdown
            id={dropDown?.id}
            label={dropDown?.label}
            list={dropDown?.list}
            show={dropDown?.show}
            setProgramType={setProgramType}
          />
        ))}
    </div>
  );
};

export { CreateAccountDialogContent };
