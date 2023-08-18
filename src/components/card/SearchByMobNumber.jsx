import "./card.css";
import React from "react";
import { InputBox } from "../util/search/InputBox";

const SearchByMobNumber = () => {
  return (
    <div className="vp-searchByMobNumberComp">
        <div className="vp-searchByMobNumber-innerComp">
      <InputBox
        width={"15rem"}
        height={"2.5rem"}
        className="vp-searchUsingMobNumberInput"
      />
      <button className="vp-searchByMobNumberBtn">Search</button>
      </div>
    </div>
  );
};

export { SearchByMobNumber };
