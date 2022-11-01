// NODE_MODULES
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FiCheckSquare } from "react-icons/fi";

// LOCAL IMPORTS
import Header from "./Header";

const useStyles = makeStyles({
  link: {
    display: "block",
    color: "var(--primaryText)",
    fontSize: 14,
    textDecoration: "none",
    borderBottom: "1px dashed var(--primaryBorder)",
    padding: "10px 0",
    "&:hover": {
      color: "var(--primaryColor)",
    },
  },
});
const OurUniqueness = ({ mediaQueries }) => {
  const { tabletUp } = mediaQueries;
  const classes = useStyles();

  const inlineStyles = {
    linkIcon: {
      position: "relative",
      top: 4,
      color: "var(--primaryColor)",
      marginRight: 10,
      fontSize: 20,
    },
    ourUniqueness: {
      marginLeft: tabletUp && "50%",
    },
  };

  const OuLink = ({ text, link }) => {
    return (
      <Link className={classes.link} to={link}>
        <FiCheckSquare style={inlineStyles.linkIcon} />
        <span>{text}</span>
      </Link>
    );
  };

  return (
    <Container sx={{marginTop: "32px"}}>
      <div style={inlineStyles.ourUniqueness}>
        <Header title={"Our Uniqueness"} />
        <OuLink link={"/"} text={"Refunds & Returns"} />
        <OuLink link={"/"} text={"Shipment"} />
        <OuLink link={"/"} text={"Secure Transactions"} />
        <OuLink link={"/"} text={"Monthly Packages"} />
        <OuLink link={"/"} text={"Affiliates"} />
      </div>
    </Container>
  );
};

export default OurUniqueness;
