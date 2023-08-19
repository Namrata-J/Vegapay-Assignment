import "./index.css";
import React from "react";
import {
  Box,
  Header,
  SideBar,
  IssueCard,
  SearchByMobNumber,
  AvailableBranchesList,
  Dialog,
} from "../components";
import { useDialog, useSideBar } from "../context";

const CardSale = () => {
  const boxes = [
    {
      height: "auto",
      roundness: "1.2rem",
      bgColor: "var(--white)",
      padding: "1.5rem 2.5rem",
      shadow: "0px 0px 3px 0px var(--grayShade1)",
      children: <IssueCard />,
    },
    {
      height: "auto",
      roundness: "1.2rem",
      bgColor: "var(--white)",
      padding: "1.5rem 2.5rem",
      shadow: "0px 0px 3px 0px var(--grayShade1)",
      children: <SearchByMobNumber />,
    },
    {
      height: "auto",
      roundness: "1.2rem",
      bgColor: "var(--grayShade0)",
      shadow: "0px 0px 3px 0px var(--grayShade1)",
      children: <AvailableBranchesList />,
    },
  ];

  const { showDialog } = useDialog();
  const { showSidebar } = useSideBar();

  return (
    <div className="vp-cardsalePage">
      <SideBar />
      <div
        className="vp-cardsale-main-container"
        style={{ width: showSidebar ? "85%" : "100%" }}
      >
        <Header />
        {showDialog && <div className="vp-cardSale-content-opaqueLayer"></div>}
        <div className="vp-cardsale-content">
          {boxes &&
            boxes.length > 0 &&
            boxes.map((box, index) => (
              <Box
                height={box?.height}
                width={box?.width}
                roundness={box?.roundness}
                bgColor={box?.bgColor}
                padding={box?.padding}
                shadow={box?.shadow}
                key={index}
              >
                {box?.children}
              </Box>
            ))}
        </div>
        {showDialog && <Dialog />}
      </div>
    </div>
  );
};

export { CardSale };
