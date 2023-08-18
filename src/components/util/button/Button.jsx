import "./button.css";

const Button = ({ text, style, id }) => {
  return (
    <button className="vp-buttonComp" id={id} style={style ? style : {}}>
      {text}
    </button>
  );
};

export { Button };
