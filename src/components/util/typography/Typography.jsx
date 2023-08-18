import "./typography.css";

const Typography = ({ text, subText, color, weight, size, style, subTextStyle, textStyle }) => {
  return (
    <div className="vp-typographyComp" style={style ? style : {}}>
      {text && (
        <div
          style={{
            color: color ? `${color}` : `var(--black)`,
            fontWeight: weight ? weight : '100',
            fontSize: size ? `${size}rem` : '1rem',
            ...textStyle
          }}
        >
          {text}
        </div>
      )}
      {subText && (
        <div
          style={subTextStyle ? subTextStyle : {}}
        >
          {subText}
        </div>
      )}
    </div>
  );
};

export { Typography };
