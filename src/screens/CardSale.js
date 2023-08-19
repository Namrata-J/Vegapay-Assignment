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
      width: "100%",
      height: "auto",
      roundness: "1.2rem",
      bgColor: "var(--white)",
      padding: "1.5rem 2.5rem",
      shadow: "0px 0px 5px 1px var(--grayShade0)",
      children: <IssueCard />,
    },
    {
      width: "100%",
      height: "auto",
      roundness: "1.2rem",
      bgColor: "var(--white)",
      padding: "1.5rem 2.5rem",
      shadow: "0px 0px 5px 1px var(--grayShade0)",
      children: <SearchByMobNumber />,
    },
    {
      width: "100%",
      height: "auto",
      roundness: "1.2rem",
      bgColor: "var(--grayShade)",
      shadow: "0px 0px 5px 1px var(--grayShade0)",
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
