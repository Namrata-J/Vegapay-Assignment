import "./dropdown.css";
import React from "react";

const Dropdown = ({ id, label, list }) => {
  return (
    <div className="vp-dropdownComp">
      <label for={id}>{label}</label>

      <select
        name={id}
        id={id}
        className={Array.isArray(list) ? "" : "vp-hide-listBtn"}
      >
        {list &&
          list.map((optionVal, index) => (
            <option value={optionVal} key={index}>
              {optionVal}
            </option>
          ))}
      </select>
    </div>
  );
};

export { Dropdown };
