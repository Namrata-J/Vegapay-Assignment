import "./dropdown.css";
import React from "react";

const Dropdown = ({ id, label, list, show, setProgramType, disabled }) => {
  return (
    <div className="vp-dropdownComp" key={id}>
      {show && (
        <div>
          <label for={id}>{label}</label>

          <select
            name={id}
            id={id}
            className={Array.isArray(list) ? "" : "vp-hide-listBtn"}
            onChange={(e) => {
              if (e.target.id === "vp-program-type") {
                setProgramType(e.target.value.toUpperCase());
              }
            }}
            disabled={disabled ? disabled : false}
          >
            {list &&
              list.map((optionVal, index) => (
                <option value={optionVal} key={index}>
                  {optionVal}
                </option>
              ))}
          </select>
        </div>
      )}
    </div>
  );
};

export { Dropdown };
