import "./header.css";
import React from "react";
import { Typography } from "../util";
import { useSideBar } from "../../context";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {

  const { showSidebar, toggleSideBar } = useSideBar();

  return (
    <div className="vp-headerComp">
      {showSidebar ? (
        <div></div>
      ) : (
        <GiHamburgerMenu
          className="vp-headerComp-hamburger"
          onClick={toggleSideBar}
        />
      )}
      <div className="vp-headerComp-dialogToggleBtn-container">
        <Typography
          text="Alpha User"
          subText="Last Login: 20/05/2023, 12:08: 51"
          weight="light"
          color="var(--primary-color)"
          size="0.9"
          subTextStyle={{
            fontSize: "0.6rem",
            color: "var(--grayShade1)",
            fontWeight: "bold",
          }}
        />
        <MdOutlineKeyboardArrowDown
          className="vp-headerComp-dialogToggleBtn"
        />
      </div>
    </div>
  );
};

export { Header };
