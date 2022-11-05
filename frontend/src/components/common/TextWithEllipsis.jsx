const TextWithEllipsis = ({ text }) => {
  const inlineStyle = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "noWrap",
  };

  return <div style={inlineStyle}>{text}</div>;
};

export default TextWithEllipsis;
