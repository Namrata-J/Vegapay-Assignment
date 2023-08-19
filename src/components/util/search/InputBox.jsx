import "./inputBox.css";
import { FiSearch } from "react-icons/fi";
import { useUsers } from "../../../context/users-context";

const InputBox = ({
  width,
  height,
  className,
  id,
  label,
}) => {

  const {searchValue, setSearchValue} = useUsers();
  
  return (
    <div className="vp-inputBoxComp">
      <FiSearch
        style={{
          color: "var(--grayShade2)",
        }}
      />
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className={className}
        id={id}
        type="text"
        value={searchValue}
        placeholder="Search by Mobile Number"
        style={{
          width: width,
          height: height,
        }}
        onChange={(e) => setSearchValue(e?.target?.value)}
      />
    </div>
  );
};

export { InputBox };
