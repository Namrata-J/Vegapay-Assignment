import "./sidebar.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillCreditCardFill,
} from "react-icons/bs";
import React from "react";
import { Typography } from "../util";
import { useSideBar } from "../../context";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const SIDEBAR_WIDTH = 15;

  const sideBarList = [
    {
      icon: <BsFillCreditCardFill />,
      name: "Card Sale",
    },
  ];

  const { showSidebar, toggleSideBar } = useSideBar();

  return (
    <div
      className="vp-sidebarComp"
      style={{
        minWidth: `${SIDEBAR_WIDTH}%`,
        display: showSidebar ? 'block' : 'none'
      }}
    >
      <div className="cp-sidebar-header">
        <Typography
          text="VegaPay"
          color={`var(--white)`}
          weight="bolder"
          size={1.4}
        />
        <BsFillArrowLeftCircleFill className="vp-sidebar-toggleBtn" onClick={toggleSideBar} />
      </div>
      <ul onClick={() => toggleSideBar()}>
        {sideBarList &&
          sideBarList.length > 0 &&
          sideBarList.map((listItem, index) => (
            <NavLink key={index} to="/" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>
              {listItem?.icon}  
              <Typography
                text={listItem?.name}
                color={`var(--white)`}
                weight="light"
                size={0.8}
              />
            </NavLink>
          ))}
      </ul>
    </div>
  );
};

export { SideBar };
