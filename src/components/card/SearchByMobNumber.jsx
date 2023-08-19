import "./card.css";
import React from "react";
import { InputBox } from "../util/search/InputBox";
import { Button } from "../util";
import { useUsers } from "../../context/users-context";

const SearchByMobNumber = () => {

  const { filterUsersTableData} = useUsers();

  return (
    <div className="vp-searchByMobNumberComp">
      <div className="vp-searchByMobNumber-innerComp">
        <InputBox
          width={"15rem"}
          height={"2.5rem"}
          className="vp-searchUsingMobNumberInput"
        />
        <Button
          id="vp-searchByMobNumberBtn"
          text="Search"
          style={{
            borderRadius: "0.3rem",
            border: "1px solid var(--action)",
            backgroundColor: "var(--white)",
            color: "var(--action)",
            padding: "0.3rem 0.8rem",
            fontWeight: "bolder",
            fontSize: "0.8rem",
          }}
          onClick={filterUsersTableData}
        />
      </div>
    </div>
  );
};

export { SearchByMobNumber };
