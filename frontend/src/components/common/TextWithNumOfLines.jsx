const TextWithNumOfLines = ({ text, lines = 2 }) => {
  const inlineStyle = {
    lineClamp: lines,
    overflow: "hidden",
    WebkitLineClamp: lines,
    display: '-webkit-box',
    textOverflow: "ellipsis",
    WebkitBoxOrient: 'vertical',
  };

  return <div style={inlineStyle}>{text}</div>;
};

export default TextWithNumOfLines;
