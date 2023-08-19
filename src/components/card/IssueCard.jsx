import "./card.css";
import { useUsers } from "../../context";
import { Box, Typography } from "../util";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { UsersData } from "../../constants/UsersData";

const IssueCard = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(() => Object.keys({ ...UsersData }));
  }, []);

  const { setTabType } = useUsers();

  return (
    <div className="vp-issueCardComp">
      <Typography
        text="New Card Sale"
        subText="Issue New Card"
        weight="400"
        color="var(--primary-color)"
        subTextStyle={{
          color: "var(--grayShade2)",
          fontSize: "0.8rem",
          fontWeight: "400",
          padding: "0.4rem 0rem",
        }}
      />
      <div className="vp-issueCardComp-cardContainer">
        {cards &&
          cards?.length > 0 &&
          cards.map((card, index) => (
            <Box
              id={"vp-tabs"}
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
                <Typography
                  text={card}
                  size="0.8"
                  weight="400"
                  color="var(--primary-color)"
                />
              </div>
            </Box>
          ))}
      </div>
    </div>
  );
};

export { IssueCard };
