import "./card.css";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { Button, Typography } from "../util";
import { useUsers } from "../../context/users-context";
import { useDialog } from "../../context";

const AvailableBranchesList = () => {
  const { usersTable, tabType } = useUsers();
  const { setDialogType, setShowDialog, dialogType, setDialogDropdownContent } = useDialog();

  return (
    <div className="vp-availableBranchListComp" style={{ overflowX: "scroll" }}>
      <table className="vp-table">
        <thead>
          <tr>
            {usersTable?.data?.tableHeading &&
              usersTable?.data?.tableHeading.length > 0 &&
              usersTable?.data?.tableHeading.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {usersTable?.data?.users &&
            usersTable?.data?.users.length > 0 &&
            usersTable?.data?.users.map((userInfo, index) => (
              <tr key={index}>
                {userInfo?.kitNumber && <td>{userInfo?.kitNumber}</td>}
                {userInfo?.name && <td>{userInfo?.name}</td>}
                {userInfo?.program && <td>{userInfo?.program}</td>}
                {userInfo?.customerId && <td>{userInfo?.customerId}</td>}
                {userInfo?.number && (
                  <td>
                    <Typography
                      text={userInfo?.number
                        .split("")
                        .map((int, index) =>
                          index > 1 && index < userInfo?.number.length - 2
                            ? "x"
                            : int
                        )}
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
                )}
                {userInfo?.email && <td>{userInfo?.email}</td>}
                {userInfo?.mobile && <td>{userInfo?.mobile}</td>}
                {userInfo?.cardNetwork && <td>{userInfo?.cardNetwork}</td>}
                {userInfo?.expiry &&
                  !(dialogType === "VIEW" && tabType === "Kit") && (
                    <td>{userInfo?.expiry}</td>
                  )}
                {userInfo?.activation && <td>{userInfo?.activation}</td>}
                {userInfo?.status ? (
                  <td>
                    <Button
                      text={userInfo?.status}
                      style={{
                        borderRadius: "0.3rem",
                        backgroundColor:
                          userInfo?.status.toUpperCase() === "APPROVED"
                            ? "var(--opaqueSuccess)"
                            : userInfo?.status.toUpperCase() === "REJECTED"
                            ? "var(--opaqueError)"
                            : "var(--opaqueWarning)",
                        border:
                          userInfo?.status.toUpperCase() === "APPROVED"
                            ? "0px solid var(--opaqueSuccess)"
                            : userInfo?.status.toUpperCase() === "REJECTED"
                            ? "0px solid var(--opaqueError)"
                            : "0px solid var(--opaqueWarning)",
                        color:
                          userInfo?.status.toUpperCase() === "APPROVED"
                            ? "var(--success)"
                            : userInfo?.status.toUpperCase() === "REJECTED"
                            ? "var(--error)"
                            : "var(--warning)",
                        padding: "0.3rem 0.8rem",
                        fontWeight: "bolder",
                        fontSize: "0.8rem",
                        width: "80px",
                      }}
                    />
                  </td>
                ) : null}
                {usersTable?.tabName === "Kit" ? (
                  userInfo?.isVerified ? (
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
                ) : usersTable?.tabName === "Personalised Sale" ? (
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
