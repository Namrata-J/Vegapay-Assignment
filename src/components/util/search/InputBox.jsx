import "./inputBox.css";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const InputBox = ({ width, height, className, id, label }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="vp-inputBoxComp">
      <FiSearch
        style={{
          color: "var(--grayShade2)",
        }}
      />
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className={className}
        id={id}
        type="text"
        value={inputValue}
        placeholder="Search by Mobile Number"
        style={{
          width: width,
          height: height,
        }}
        onChange={(e) => setInputValue(e?.target?.value)}
      />
    </div>
  );
};

export { InputBox };
