import "./card.css";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { Button, Typography } from "../util";
import { useUsers } from "../../context/users-context";
import { useDialog } from "../../context";
import { tableHeading } from "../../constants/tableHeading";

const AvailableBranchesList = () => {
  const { usersTable, tabType } = useUsers();
  const { setDialogType, setShowDialog, setDialogDropdownContent } =
    useDialog();

  return (
    <div className="vp-availableBranchListComp" style={{ overflowX: "scroll" }}>
      <table className="vp-table">
        <thead className="vp-table-headings">
          <tr>
            {tableHeading[tabType].map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {usersTable &&
            usersTable?.length > 0 &&
            usersTable.map((userInfo, index) => (
              <tr key={index}>
                {tabType === "Reissue" ? (
                  userInfo?.card?.kitId ? (
                    <td>{userInfo?.card?.kitId}</td>
                  ) : (
                    <td>-</td>
                  )
                ) : null}
                {userInfo?.customer && (
                  <td>
                    {userInfo?.customer?.firstName
                      ? userInfo?.customer?.firstName.length > 10
                        ? `${userInfo?.customer?.firstName.slice(0, 10)}...`
                        : userInfo?.customer?.firstName
                      : "-"}
                  </td>
                )}
                {tabType !== "Kit" ? (
                  userInfo?.account ? (
                    <td>
                      {userInfo?.account?.programName
                        ? userInfo?.account?.programName.length > 10
                          ? `${userInfo?.account?.programName.slice(0, 10)}...`
                          : userInfo?.account?.programName
                        : "-"}
                    </td>
                  ) : (
                    <td>-</td>
                  )
                ) : null}
                {tabType !== "Kit" ? (
                  userInfo?.customer ? (
                    <td>
                      {userInfo?.customer?.customerId
                        ? userInfo?.customer?.customerId.length > 10
                          ? `${userInfo?.customer?.customerId.slice(0, 10)}...`
                          : userInfo?.customer?.customerId
                        : "-"}
                    </td>
                  ) : (
                    <td>-</td>
                  )
                ) : null}
                <td>
                  <Typography
                    text={userInfo?.card ? userInfo?.card?.cardNumber : "-"}
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
                {tabType === "Kit" ? (
                  userInfo?.customer ? (
                    <td>{userInfo?.customer?.emailId}</td>
                  ) : (
                    <td>-</td>
                  )
                ) : null}
                {tabType === "Kit" ? (
                  userInfo?.customer ? (
                    <td>{userInfo?.customer?.mobileNumber}</td>
                  ) : (
                    <td>-</td>
                  )
                ) : null}
                {tabType === "Kit" ? (
                  userInfo?.card ? (
                    <td>
                      {userInfo?.card?.cardProcessorVendor
                        ? userInfo?.card?.cardProcessorVendor
                        : "-"}
                    </td>
                  ) : (
                    <td>-</td>
                  )
                ) : null}
                {tabType !== "Kit" ? (
                  userInfo?.card ? (
                    <td>
                      {userInfo?.card?.expiryDate
                        ? userInfo?.card?.expiryDate
                        : "-"}
                    </td>
                  ) : (
                    <td>-</td>
                  )
                ) : null}
                {tabType !== "Kit" ? (
                  userInfo?.card ? (
                    <td>
                      {userInfo?.card?.expiryDate
                        ? userInfo?.card?.expiryDate
                        : "-"}
                    </td>
                  ) : (
                    <td>-</td>
                  )
                ) : null}
                {tabType !== "Kit" ? (
                  userInfo?.customer ? (
                    <td>
                      <Button
                        text={
                          userInfo?.customer?.makerCheckerStatus
                            ? userInfo?.customer?.makerCheckerStatus.includes(
                                "PENDING"
                              )
                              ? "Pending"
                              : userInfo?.customer?.makerCheckerStatus.includes(
                                  "APPROVED"
                                )
                              ? "Approved"
                              : "Rejected"
                            : "Rejected"
                        }
                        style={{
                          borderRadius: "0.3rem",
                          backgroundColor: userInfo?.customer
                            ?.makerCheckerStatus
                            ? userInfo?.customer?.makerCheckerStatus.includes(
                                "APPROVED"
                              )
                              ? "var(--opaqueSuccess)"
                              : userInfo?.customer?.makerCheckerStatus.includes(
                                  "PENDING"
                                )
                              ? "var(--opaqueWarning)"
                              : "var(--opaqueError)"
                            : "var(--opaqueError)",
                          border: userInfo?.customer?.makerCheckerStatus
                            ? userInfo?.customer?.makerCheckerStatus.includes(
                                "APPROVED"
                              )
                              ? "0px solid var(--opaqueSuccess)"
                              : userInfo?.customer?.makerCheckerStatus.includes(
                                  "PENDING"
                                )
                              ? "0px solid var(--opaqueWarning)"
                              : "0px solid var(--opaqueError)"
                            : "0px solid var(--opaqueError)",
                          color: userInfo?.customer?.makerCheckerStatus
                            ? userInfo?.customer?.makerCheckerStatus.includes(
                                "APPROVED"
                              )
                              ? "var(--success)"
                              : userInfo?.customer?.makerCheckerStatus.includes(
                                  "PENDING"
                                )
                              ? "var(--warning)"
                              : "var(--error)"
                            : "var(--error)",
                          padding: "0.3rem 0.8rem",
                          fontWeight: "bolder",
                          fontSize: "0.8rem",
                          width: "80px",
                        }}
                      />
                    </td>
                  ) : (
                    <td>-</td>
                  )
                ) : null}
                {tabType === "Kit" ? (
                  userInfo?.account ? (
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
                        id={"VIEW"}
                        onClick={(e) => {
                          setDialogType(e.target.id);
                          setDialogDropdownContent(() => userInfo);
                          setShowDialog(true);
                        }}
                      />
                    </td>
                  ) : (
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
                        id={"CREATE_ACCOUNT"}
                        onClick={(e) => {
                          setDialogType(e.target.id);
                          setDialogDropdownContent(() => userInfo);
                          setShowDialog(true);
                        }}
                      />
                    </td>
                  )
                ) : tabType === "Personalised Sale" ? (
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
                      id={"VIEW"}
                      onClick={(e) => {
                        setDialogType(e.target.id);
                        setDialogDropdownContent(() => userInfo);
                        setShowDialog(true);
                      }}
                    />
                  </td>
                ) : (
                  <td>
                    <Button
                      text="IssueNow"
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
                      id={"ISSUE_NOW"}
                      onClick={(e) => {
                        setDialogType(e.target.id);
                        setDialogDropdownContent(() => userInfo);
                        setShowDialog(true);
                      }}
                    />
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
      <div className="vp-table-footer">
        <Typography
          text={`1 of ${usersTable.length} of ${usersTable.length}`}
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
