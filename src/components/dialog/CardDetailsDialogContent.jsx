import "./dialog.css";
import React from "react";
import { useDialog } from "../../context";
import { DialogInput } from "../util/input/DialogInput";

const CardDetailsDialogContent = () => {
  const { dialogDropdownContent } = useDialog();

  const dropdownsList = [
    {
      id: "vp-customer-id",
      label: "Customer ID",
      value: dialogDropdownContent?.customerId,
      type: "text",
      disabled: true,
    },
    {
      id: "vp-name",
      label: "Name on Card",
      value: dialogDropdownContent?.name,
      type: "text",
      disabled: false,
    },
  ];

  const miniDropdownsList = [
    {
      id: "vp-card-no",
      label: "Card No",
      value: dialogDropdownContent?.number,
      type: "text",
      disabled: true,
      placeholder: "",
    },
    {
      id: "vp-expiry-date",
      label: null,
      value: null,
      type: "date",
      disabled: false,
      placeholder: "Expiry Date",
    },
    {
      id: "vp-card-no",
      label: null,
      value: null,
      type: "date",
      disabled: false,
      placeholder: "Activation Date",
    },
  ];
  return (
    <div className="vp-createDetailsDialogContentComp">
      {dropdownsList &&
        dropdownsList.length &&
        dropdownsList.map((dropDown) => (
          <DialogInput
            id={dropDown?.id}
            label={dropDown?.label}
            type={dropDown?.type}
            inputValue={dropDown?.value}
            disabled={dropDown?.disabled}
          />
        ))}
      <div className="vp-dialog-inputsInGridView">
        {miniDropdownsList &&
          miniDropdownsList.length &&
          miniDropdownsList.map((dropDown) => (
            <DialogInput
              id={dropDown?.id}
              label={dropDown?.label}
              type={dropDown?.type}
              inputValue={dropDown?.value}
              disabled={dropDown?.disabled}
              placeholder={dropDown?.placeholder}
            />
          ))}
      </div>
    </div>
  );
};

export { CardDetailsDialogContent };
