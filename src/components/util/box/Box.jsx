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
  style,
  children,
  onClickFn
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
        ...style
      }}
      onClick={onClickFn}
    >
      {children}
    </div>
  );
};

export { Box };
