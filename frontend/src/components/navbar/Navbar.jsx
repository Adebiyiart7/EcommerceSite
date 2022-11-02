// NODE_MODULES
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { IoSearch } from "react-icons/io5";
import { makeStyles } from "@mui/styles";
import { BiHeart } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
import { useTheme, useMediaQuery } from "@material-ui/core";

// LOCAL IMPORTS
import logo from "../../assets/images/logo.png";
import logo_sm from "../../assets/images/logo_sm.png";
import { Container } from "@mui/material";
import Category from "../category";
import Navigations from "./Navigations";

const useStyles = makeStyles({
  center: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: 60,
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
  },
  right: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  rightIcon: {
    padding: 7,
    color: "var(--primaryText)",
    border: "1px solid var(--primaryBorder)",
    borderRadius: "50%",
    fontSize: 18,
    cursor: "pointer",
    marginRight: 10,
    "&:hover": {
      backgroundColor: "var(--primaryColor)",
      color: "var(--white)",
    },
  },
});

const Navbar = ({ mediaQueries }) => {
  const [showMobileNavs, setShowMobileNavs] = useState(false);
  const theme = useTheme();
  const media1000Down = useMediaQuery(theme.breakpoints.down(1000));
  const media650Down = useMediaQuery(theme.breakpoints.down(650));
  const { mediumDown, largeDown } = mediaQueries;
  const classes = useStyles();

  const handleShowMobileNav = () => setShowMobileNavs(!showMobileNavs);

  const mediaStyles = {
    avatar: {
      cursor: "pointer",
    },
    logo: {
      height: largeDown && 55,
    },
    menuBar: {
      display: media1000Down ? "block" : "none",
    },
    mobileNavs: { display: showMobileNavs ? "block" : "none" },
    navbar: { padding: largeDown && "7px 0" },
  };

  return (
    <Container>
      <div className={classes.navbar} style={mediaStyles.navbar}>
        <a href="/" className={classes.logoContainer}>
          {mediumDown ? (
            <img className={classes.logo} src={logo_sm} alt="logo" />
          ) : (
            <img
              className={classes.logo}
              style={mediaStyles.logo}
              src={logo}
              alt="logo"
            />
          )}
        </a>
        <div className={classes.center}>
          {!media650Down && <Category />}
          {!media1000Down && <Navigations media1000Down={media1000Down} />}
        </div>
        <div className={classes.right}>
          <IoSearch className={classes.rightIcon} />
          <BiHeart className={classes.rightIcon} />
          <MdMenu
            className={classes.rightIcon}
            style={mediaStyles.menuBar}
            onClick={handleShowMobileNav}
          />
          <Avatar
            style={mediaStyles.avatar}
            src=""
            sx={{ width: 34, height: 34 }}
          />
        </div>
      </div>
      {media1000Down && (
        <div style={mediaStyles.mobileNavs}>
          <Navigations media1000Down={media1000Down} />
        </div>
      )}
      {media650Down && <Category />}
    </Container>
  );
};

export default Navbar;
