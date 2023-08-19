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
  onClickFn,
  id
}) => {
  return (
    <div
    id={id}
      className="vp-boxComp"
      style={{
        borderRadius: roundness,
        backgroundColor: bgColor,
        height: height,
        width: width ? width : "100%",
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
