// NODE_MODULES
import { useContext } from "react";
import { makeStyles } from "@mui/styles";

// LOCAL IMPORTS
import backgroundImage from "../../assets/images/landing_bg.jpg";
import SearchBox from "../../components/reusable/SearchBox";
import { AppContext } from "../../App";
import divider from "../../assets/images/divider.png";

const useStyles = makeStyles({
  discount: {
    fontWeight: 400,
    marginTop: 50
  },
  divider: {
    position: "relative",
    width: "100%",
    overflowX: "hidden",
    bottom: 20,
  },
  firstContent: {
    fontSize: 60,
    lineHeight: 1.2,
    marginBottom: 0,
    marginTop: "1em",
    fontWeight: 700,
  },
  secondContent: {
    fontWeight: 500,
    fontSize: 22,
  },
  landing: {
    background: `url(${backgroundImage})`,
    backgroundSize: "cover",
    overflowX: "hidden",
    height: 750,
  },
  landingContents: {
    color: "var(--white)",
    textAlign: "center",
  },
});

const Landing = () => {
  const {
    mediaQueries: { mediumDown, largeDown, tabletDown },
  } = useContext(AppContext);
  const classes = useStyles();

  const firstContentSize = () => {
    if (mediumDown) return 40;
    if (largeDown) return 45;
    if (tabletDown) return 50;
  };

  const mediaStyles = {
    discount: {
      fontSize: largeDown ? 30 : 40,
    },
    divider: {
      display: tabletDown && "none",
    },
    firstContent: {
      fontSize: firstContentSize(),
    },
    landing: {
      height: tabletDown && 600
    },
    secondContent: {
      fontSize: mediumDown && 20,
    },
  };

  return (
    <>
      <div className={classes.landing} style={mediaStyles.landing}>
        <div className={classes.landingContents}>
          <h1 className={classes.firstContent} style={mediaStyles.firstContent}>
            Order Healthy Food <br />{" "}
            <span style={{ color: "var(--primaryColor)" }}>Anytime</span>
          </h1>
          <p
            className={classes.secondContent}
            style={mediaStyles.secondContent}
          >
            We typically deliver in 30 minutes
          </p>
          <SearchBox
            size={largeDown ? "small" : "medium"}
            height={largeDown ? 40 : 56}
          />
          <h2 className={classes.discount} style={mediaStyles.discount}>
            10 - 30% OFF
          </h2>
        </div>
      </div>
      <img
        className={classes.divider}
        style={mediaStyles.divider}
        src={divider}
        alt="divider"
      />
    </>
  );
};

export default Landing;
