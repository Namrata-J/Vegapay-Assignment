import "./dialog.css";
import React from "react";
import { Box, Dropdown, Typography } from "../util";

const Dialog = () => {
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
          text="Create Account"
          color="var(--grayShade2)"
          weight="light"
          size="0.9"
        />
      </Box>
      <Box
        height="100%"
        style={{
          overflow: "scroll",
        }}
      >
        <div className="vp-dialogComp-content-container">
          <Dropdown id="cars" label="Cards" list={["volvo", "saab"]} />
        </div>
      </Box>
    </div>
  );
};

export { Dialog };
