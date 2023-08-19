import "./dialog.css";
import React from "react";
import { useDialog } from "../../context";
import { DialogInput } from "../util/input/DialogInput";

const WalletDetailsDialogContent = () => {
  const { dialogDropdownContent } = useDialog();

  const dropdownsList = [
    {
      id: "vp-customer-id",
      label: "Customer ID",
      value: dialogDropdownContent?.customer ? dialogDropdownContent?.customer?.customerId : "-",
      type: "text",
      disabled: true,
    },
    {
      id: "vp-name",
      label: "Name on Card",
      value: dialogDropdownContent?.customer ? dialogDropdownContent?.customer?.fullName : "-",
      type: "text",
      disabled: false,
    },
    {
      id: "vp-oldcard-no",
      label: "Old Card Number",
      value: dialogDropdownContent?.card ? dialogDropdownContent?.customer?.cardNumber : "-",
      type: "text",
      disabled: false,
    },
    {
      id: "vp-hit number",
      label: "Kit Number",
      value: dialogDropdownContent?.card?.kitId ? dialogDropdownContent?.card?.kitId : "-",
      type: "text",
      disabled: false,
    },
  ];

  const miniDropdownsList = [
    {
      id: "vp-card-no",
      label: "Card No",
      value: dialogDropdownContent?.card ? dialogDropdownContent?.customer?.cardNumber : "-",
      type: "text",
      disabled: false,
      placeholder: "",
    },
    {
      id: "vp-expiry-date",
      label: null,
      value: dialogDropdownContent?.card
        ? dialogDropdownContent?.card?.expiryDate
        : "-",
      type: "date",
      disabled: false,
      placeholder: "Expiry Date",
    },
    {
      id: "vp-activation-date",
      label: null,
      value: dialogDropdownContent?.card
        ? dialogDropdownContent?.card?.expiryDate
        : "-",
      type: "date",
      disabled: false,
      placeholder: "Activation Date",
    },
    {
      id: "vp-reason",
      label: "Reason For Re-Issuance",
      value: "lost",
      type: "text",
      disabled: false,
      placeholder: "",
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

export { WalletDetailsDialogContent };
