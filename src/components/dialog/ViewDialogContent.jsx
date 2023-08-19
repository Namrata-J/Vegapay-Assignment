import "./dialog.css";
import React from "react";
import { Dropdown } from "../util/dropdown/Dropdown";
import { useDialog } from "../../context";

const ViewDialogContent = () => {
  const { dialogDropdownContent } = useDialog();

  const dropdownsList = [
    {
      id: "vp-account-id",
      label: "Account ID",
      list: [dialogDropdownContent?.accId],
      show: true,
    },
    {
      id: "vp-kit-id",
      label: "Kit ID",
      list: [dialogDropdownContent?.number],
      show: true,
    },
  ];

  const minidropdownsList = [
    {
      id: "vp-card-no",
      label: "Cart No",
      list: [
        dialogDropdownContent?.number.substring(
          dialogDropdownContent?.number.length - 4,
          dialogDropdownContent?.number.length
        ),
      ],
      show: true,
    },
    {
      id: "vp-expiry-date",
      label: "Expiry Date",
      list: ["1025"],
      show: true,
    },
  ];

  return (
    <div className="vp-viewtDialogContentComp">
      {dropdownsList &&
        dropdownsList.length &&
        dropdownsList.map((dropDown) => (
          <Dropdown
            id={dropDown?.id}
            label={dropDown?.label}
            list={dropDown?.list}
            show={dropDown?.show}
            disabled={true}
          />
        ))}
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          gap: "1rem",
        }}
      >
        {minidropdownsList &&
          minidropdownsList.length &&
          minidropdownsList.map((dropDown) => (
            <Dropdown
              id={dropDown?.id}
              label={dropDown?.label}
              list={dropDown?.list}
              show={dropDown?.show}
              disabled={true}
            />
          ))}
      </div>
    </div>
  );
};

export { ViewDialogContent };
