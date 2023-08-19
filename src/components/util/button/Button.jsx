import "./button.css";

const Button = ({ text, style, id, onClick }) => {
  return (
    <button className="vp-buttonComp" id={id} style={style ? style : {}} onClick={onClick}>
      {text}
    </button>
  );
};

export { Button };
