// NODE_MODULES
import { makeStyles } from "@mui/styles";

// LOCAL IMPORTS
import backgroundImage from "../../assets/images/landing_bg.jpg";
import Navbar from "../navbar/Navbar";

const useStyles = makeStyles({
  divider: {
    position: "relative",
    width: "100%",
    overflowX: "hidden",
    bottom: 20,
  },
  firstContent: {
    color: "var(--yellow)",
    fontSize: 65,
    lineHeight: 1.2,
    marginBottom: 0,
    marginTop: "1em",
    fontWeight: 700,
  },
  secondContent: {
    fontSize: 22,
  },
  landing: {
    background: `url(${backgroundImage})`,
    backgroundSize: "cover",
    overflowX: "hidden",
    height: 650,
    fontFamily: "'Roboto', serif",
  },
  landingContents: {
    color: "var(--white)",
    textAlign: "center",
    padding: 16,
  },
});

const LandingView = ({ mediaQueries }) => {
  const { mediumDown, largeDown, tabletDown } = mediaQueries;
  const classes = useStyles();

  const firstContentSize = () => {
    if (mediumDown) return 40;
    if (largeDown) return 45;
    if (tabletDown) return 50;
  };

  const mediaStyles = {
    divider: {
      display: tabletDown && "none",
    },
    firstContent: {
      fontSize: firstContentSize(),
    },
    landing: {
      height: tabletDown && 600,
    },
    secondContent: {
      fontSize: mediumDown && 20,
    },
  };

  return (
    <>
      <div className={classes.landing} style={mediaStyles.landing}>
        <Navbar mediaQueries={mediaQueries} color={"var(--white)"} />
        <div className={classes.landingContents}>
          <h1 className={classes.firstContent} style={mediaStyles.firstContent}>
            <span style={{ color: "var(--white)" }}>Fresh Foods</span> <br />
            100% ORGANIC
          </h1>
          <p
            className={classes.secondContent}
            style={mediaStyles.secondContent}
          >
            We Deliver Fresh Fruits, Vegetables, Spices, Cereals, etc. to your
            Door.
          </p>
        </div>
      </div>
      {/* <img
        className={classes.divider}
        style={mediaStyles.divider}
        src={divider}
        alt="divider"
      /> */}
    </>
  );
};

export default LandingView;
