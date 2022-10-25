const PageTitle = ({ text, subTitle, mediaQueries }) => {
  const { mediumDown, tabletDown } = mediaQueries;

  const fontSize = () => {
    if (mediumDown) return 25;
    if (tabletDown) return 30;
    return 40;
  };

  const inlineStyles = {
    subTitle: {
      color: "var(--primaryColor)",
      margin: 0,
      fontSize: 18,
      fontWeight: 700,
    },
    title: {
      color: "var(--primaryText)",
      margin: 0,
      fontSize: fontSize(),
      fontWeight: 900,
    },
    titleContainer: {
      textAlign: "center",
      textTransform: "uppercase"
    },
  };
  return (
    <div style={inlineStyles.titleContainer}>
      <h1 style={inlineStyles.subTitle}>{subTitle}</h1>
      <h3 style={inlineStyles.title}>{text}</h3>;
    </div>
  );
};

export default PageTitle;
