import "./inputBox.css";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const InputBox = ({ width, height, className }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="vp-inputBoxComp">
      <FiSearch
        style={{
          color: "var(--grayShade2)",
        }}
      />
      <input
        className={className}
        type="text"
        placeholder="Search by Mobile Number"
        style={{
          width: width,
          height: height,
        }}
      />
    </div>
  );
};

export { InputBox };
