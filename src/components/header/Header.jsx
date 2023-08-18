import "./header.css";
import React from "react";
import { Typography } from "../util";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDialog, useSideBar } from "../../context";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const { toggleDialogDisplay } = useDialog();
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
          subText="Last Login"
          weight="bold"
          subTextStyle={{
            fontSize: "0.7rem",
            color: "var(--grayShade1)",
            fontWeight: "bold",
          }}
        />
        <MdOutlineKeyboardArrowDown
          className="vp-headerComp-dialogToggleBtn"
          onClick={toggleDialogDisplay}
        />
      </div>
    </div>
  );
};

export { Header };
