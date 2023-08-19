import "./card.css";
import { useUsers } from "../../context";
import { Box, Typography } from "../util";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { UsersData } from "../../constants/UsersData";

const IssueCard = () => {

const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(() => Object.keys({...UsersData}))
  }, []);

  const { setTabType } = useUsers();

  return (
    <div className="vp-issueCardComp">
      <Typography
        text="New Card Sale"
        subText="Issue New Card"
        weight="bolder"
        subTextStyle={{
          color: "var(--grayShade2)",
          fontSize: "0.8rem",
          fontWeight: "700",
          padding: "0.3rem 0rem",
        }}
      />
      <div
        className="vp-issueCardComp-cardContainer"
        style={{
          paddingTop: "1rem",
        }}
      >
        {cards &&
          cards?.length > 0 &&
          cards.map((card, index) => (
            <Box
              width={"15rem"}
              height={"auto"}
              roundness={"0.6rem"}
              padding={"1.5rem 1rem"}
              border={"1px solid var(--grayShade0)"}
              key={index}
              onClickFn={() => setTabType(card)}
            >
              <div className="vp-issueCardComp-card" key={index}>
                <FaUserCircle className="vp-card-icon" />
                <Typography text={card} />
              </div>
            </Box>
          ))}
      </div>
    </div>
  );
};

export { IssueCard };
