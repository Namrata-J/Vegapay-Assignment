import "./box.css";
import React from "react";

const Box = ({
  height,
  width,
  roundness,
  bgColor,
  padding,
  border,
  shadow,
  children,
}) => {
  return (
    <div
      className="vp-boxComp"
      style={{
        borderRadius: roundness,
        backgroundColor: bgColor,
        height: height,
        width: width,
        padding: padding ? padding : `0rem`,
        border: border ? border : "",
        boxShadow: shadow,
      }}
    >
      {children}
    </div>
  );
};

export { Box };
