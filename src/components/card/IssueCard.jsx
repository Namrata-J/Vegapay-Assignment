import "./card.css";
import { Box, Typography } from "../util";
import { FaUserCircle } from "react-icons/fa";

const IssueCard = () => {
  const cards = [
    {
      icon: <FaUserCircle className="vp-card-icon" />,
      text: "Kit",
    },
    {
      icon: <FaUserCircle className="vp-card-icon" />,
      text: "Personalized Sale",
    },
    {
      icon: <FaUserCircle className="vp-card-icon" />,
      text: "Reissue",
    },
  ];

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
            >
              <div className="vp-issueCardComp-card" key={index}>
                {card?.icon}
                <Typography text={card?.text} />
              </div>
            </Box>
          ))}
      </div>
    </div>
  );
};

export { IssueCard };
