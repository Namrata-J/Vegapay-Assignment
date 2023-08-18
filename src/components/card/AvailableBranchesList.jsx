import "./card.css";
import { Button, Typography } from "../util";
import { HiOutlineArrowSmDown, HiChevronRight, HiChevronLeft } from "react-icons/hi";

const AvailableBranchesList = () => {
  return (
    <div className="vp-availableBranchListComp">
    <table className="vp-table">
      <thead>
        <tr>
          <th>Customer Name</th>
          <th id="vp-tableHeadingWithIcon">
            Card No <HiOutlineArrowSmDown id="vp-tableheader-icon" />
          </th>
          <th>Email Id</th>
          <th>Mobile No.</th>
          <th>Card Network</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>himanshu</td>
          <td>
            <Typography
              text="-"
              color="var(--action)"
              size="0.8"
              textStyle={{
                backgroundColor: "var(--opaqueAction)",
                padding: "0rem 0.5rem",
                borderRadius: "3px",
              }}
              style={{
                display: "flex",
              }}
            />
          </td>
          <td>himanshu</td>
          <td>himanshu</td>
          <td>himanshu</td>
          <td>
            <Button
              text="Create Account"
              style={{
                borderRadius: "0.3rem",
                backgroundColor: "var(--action)",
                border: "1px solid var(--action)",
                boxShadow: "0px 1px 2px 0px var(--grayShade2)",
                color: "var(--white)",
                padding: "0.3rem 0.8rem",
                fontWeight: "bolder",
                fontSize: "0.8rem",
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Branch1</td>
          <td>
            <Typography
              text="59xxxxxxxxxxxx"
              color="var(--action)"
              size="0.8"
              textStyle={{
                backgroundColor: "var(--opaqueAction)",
                padding: "0rem 0.5rem",
                borderRadius: "3px",
              }}
              style={{
                display: "flex",
              }}
            />
          </td>
          <td>himanshu</td>
          <td>himanshu</td>
          <td>himanshu</td>
          <td>
            <Button
              text="View"
              style={{
                borderRadius: "0.3rem",
                backgroundColor: "var(--action)",
                border: "1px solid var(--action)",
                boxShadow: "0px 1px 2px 0px var(--grayShade2)",
                color: "var(--white)",
                padding: "0.3rem 0.8rem",
                fontWeight: "bolder",
                fontSize: "0.8rem",
              }}
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div className="vp-table-footer">
      <Typography 
      text="2 of 2"
      size="0.8"
      weight="bold"
      color="var(--grayShade2)"
       />
       <HiChevronLeft />
       <HiChevronRight />
    </div>
    </div>
  );
};

export { AvailableBranchesList };
