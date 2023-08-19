import "./dialog.css";
import React from "react";
import { Box, Button, Typography } from "../util";
import { CreateAccountDialogContent } from "./CreateAccountDialogContent";
import { useDialog, useUsers } from "../../context";
import { ViewDialogContent } from "./ViewDialogContent";
import { CardDetailsDialogContent } from "./CardDetailsDialogContent";

const Dialog = () => {
  const { toggleDialogDisplay, dialogType } = useDialog();
  const { tabType } = useUsers();

  return (
    <div className="vp-dialogComp">
      <Box
        height="3rem"
        bgColor="var(--grayShade)"
        style={{
          alignItems: "center",
          borderTopLeftRadius: "0.6rem",
          display: "flex",
          paddingLeft: "1rem",
        }}
      >
        <Typography
          text={
            dialogType === "CREATE_ACCOUNT"
              ? "Create Account"
              : dialogType === "VIEW"
              ? tabType === "Kit"
                ? "View"
                : "Card Details"
              : "Wallet Details"
          }
          color="var(--grayShade2)"
          weight="light"
          size="0.9"
        />
      </Box>
      <Box
        height="100%"
        style={{
          overflow: "scroll",
          position: "relative",
        }}
      >
        <div className="vp-dialogComp-content-container">
          {dialogType === "CREATE_ACCOUNT" ? (
            <CreateAccountDialogContent />
          ) : dialogType === "VIEW" ? (
            tabType === "Kit" ? (
              <ViewDialogContent />
            ) : (
              <CardDetailsDialogContent />
            )
          ) : (
            ""
          )}
        </div>
        <div className="vp-dialogComp-footer">
          <Button
            text={
              tabType === "Kit" && dialogType === "VIEW" ? "Got it" : "Cancel"
            }
            style={{
              borderRadius: "0.3rem",
              backgroundColor: "var(--white)",
              border: "1px solid var(--error)",
              color: "var(--error)",
              padding: "0.3rem 0.8rem",
              fontWeight: "bolder",
              fontSize: "0.8rem",
            }}
            onClick={toggleDialogDisplay}
          />
          {!(tabType === "Kit" && dialogType === "VIEW") && (
            <Button
              text="Submit"
              style={{
                borderRadius: "0.3rem",
                backgroundColor: "var(--action)",
                border: "1px solid var(--action)",
                boxShadow: "0px 1px 2px 0px var(--grayShade2)",
                color: "var(--white)",
                cursor: "not-allowed",
                padding: "0.3rem 0.8rem",
                fontWeight: "bolder",
                fontSize: "0.8rem",
              }}
            />
          )}
        </div>
      </Box>
    </div>
  );
};

export { Dialog };
