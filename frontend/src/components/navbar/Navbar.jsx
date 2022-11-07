// NODE_MODULES
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { IoSearch } from "react-icons/io5";
import { makeStyles } from "@mui/styles";
import { BiHeart } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
import { useTheme, useMediaQuery } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

// LOCAL IMPORTS
import logo from "../../assets/images/logo.png";
import logo_sm from "../../assets/images/logo_sm.png";
import { Container } from "@mui/material";
import Category from "../category";
import Navigations from "./Navigations";
import MenuList from "./MenuList";
import SelectedProducts from "../common/SelectedProducts";
import {
  removeFromWishlist,
  reset,
} from "../../features/wishlist/wishlistSlice";

const useStyles = makeStyles({
  center: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuList: {
    position: "absolute",
    top: "40px",
    right: 0,
    width: 198,
    border: "1px solid var(--primaryBorder)",
    borderTop: "4px solid var(--primaryColor)",
    borderRadius: 4,
    padding: 0,
    zIndex: "var(--zIndex2)",
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
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  rightIcon: {
    padding: 7,
    border: "1px solid var(--primaryBorder)",
    borderRadius: 4,
    fontSize: 18,
    cursor: "pointer",
    marginRight: 10,
    "&:hover": {
      backgroundColor: "var(--primaryColor)",
      borderColor: "var(--primaryColor)",
      color: "var(--white)",
    },
  },
});

const Navbar = ({ mediaQueries, color }) => {
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [showMobileNavs, setShowMobileNavs] = useState(false);
  const [showUserMenuList, setShowUserMenuList] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const media1000Down = useMediaQuery(theme.breakpoints.down(1000));
  const media650Down = useMediaQuery(theme.breakpoints.down(650));
  const { mediumDown, largeDown } = mediaQueries;
  const { user } = useSelector((state) => state.auth);
  const handleShowMobileNav = () => setShowMobileNavs(!showMobileNavs);

  const { wishlist } = useSelector((state) => state.wishlist);

  const inlineStyles = {
    avatar: {
      cursor: "pointer",
    },
    logo: {
      height: largeDown && 55,
    },
    menuBar: {
      display: media1000Down ? "block" : "none",
    },
    menuList: {
      display: showUserMenuList ? "block" : "none",
    },
    mobileNavs: {
      color: color ? color : "var(--primaryText)",
      display: showMobileNavs ? "block" : "none",
    },
    navbar: {
      color: color ? color : "var(--primaryText)",
      padding: largeDown && "7px 0",
    },
    wishlistContainer: {
      zIndex: "var(--zIndex2)",
      color: "var(--secondaryText)",
      fontFamily: "'Roboto', serif",
      position: "fixed",
      top: 0,
      left: showWishlist ? 0 : -350,
      transition: ".3s",
      width: "100%",
      maxWidth: 320,
    },
  };

  // remove item from wishlist
  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
    dispatch(reset());
  };

  // show or hide wishlist
  const handleShowWishlist = () => setShowWishlist(!showWishlist);

  return (
    <Container>
      <div style={inlineStyles.wishlistContainer}>
        <SelectedProducts
          header={"Wishlist"}
          items={wishlist}
          onRemove={(id) => handleRemove(id)}
          onClose={handleShowWishlist}
        />
      </div>
      <div className={classes.navbar} style={inlineStyles.navbar}>
        <a href="/" className={classes.logoContainer}>
          {mediumDown ? (
            <img className={classes.logo} src={logo_sm} alt="logo" />
          ) : (
            <img
              className={classes.logo}
              style={inlineStyles.logo}
              src={logo}
              alt="logo"
            />
          )}
        </a>
        <div className={classes.center}>
          {!media650Down && <Category />}
          {!media1000Down && (
            <Navigations user={user} media1000Down={media1000Down} />
          )}
        </div>
        <div className={classes.right}>
          <IoSearch className={classes.rightIcon} />
          <BiHeart onClick={handleShowWishlist} className={classes.rightIcon} />
          <MdMenu
            className={classes.rightIcon}
            style={inlineStyles.menuBar}
            onClick={handleShowMobileNav}
          />
          {(user || media1000Down) && (
            <span>
              <Avatar
                variant="rounded"
                onClick={() => setShowUserMenuList(!showUserMenuList)}
                style={inlineStyles.avatar}
                src=""
                sx={{ width: 34, height: 34, bgcolor: "var(--primaryColor)" }}
              />
              <ul className={classes.menuList} style={inlineStyles.menuList}>
                <MenuList user={user} />
              </ul>
            </span>
          )}
        </div>
      </div>
      {media1000Down && (
        <div style={inlineStyles.mobileNavs}>
          <Navigations user={user} media1000Down={media1000Down} />
        </div>
      )}
      {media650Down && <Category />}
    </Container>
  );
};

export default Navbar;
