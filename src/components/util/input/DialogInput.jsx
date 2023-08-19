import "./dialogInput.css";
import React from "react";
import { Typography } from "../typography/Typography";

const DialogInput = ({
  label,
  type,
  id,
  className,
  inputValue,
  disabled,
  placeholder,
}) => {
  return (
    <div>
      <div className="vp-dialogInputComp">
        {label && (
          <label htmlFor={id}>
            <Typography
              color="var(--grayShade1)"
              text={label}
              size="0.6"
              weight="light"
            />
          </label>
        )}
        <input
          className={className}
          id={id}
          type={type}
          value={inputValue}
          disabled={disabled ? disabled : false}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export { DialogInput };
