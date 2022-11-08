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
import Wishlist from "./Wishlist";
import { removeFromWishlist } from "../../features/wishlist/wishlistSlice";
import Cart from "./Cart";
import { classStyles, inlineStyles as styles } from "./navbarStyles";
import { removeFromCart, updateItemQuantity } from "../../features/cart/cartSlice";

const useStyles = makeStyles(classStyles());

const Navbar = ({ mediaQueries, color }) => {
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [showMobileNavs, setShowMobileNavs] = useState(false);
  const [showUserMenuList, setShowUserMenuList] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const media1000Down = useMediaQuery(theme.breakpoints.down(1000));
  const media650Down = useMediaQuery(theme.breakpoints.down(650));
  const { mediumDown, largeDown } = mediaQueries;
  const { user } = useSelector((state) => state.auth);
  const handleShowMobileNav = () => setShowMobileNavs(!showMobileNavs);

  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);

  const inlineStyles = styles(
    mediumDown,
    largeDown,
    media1000Down,
    showUserMenuList,
    showMobileNavs,
    showWishlist,
    showCart,
    color
  );

  // remove item from wishlist
  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist(id));
  };

  // remove item from cart
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  // update item qantity in cart
  const handleUpdateQuantity = (id, action) => {
    dispatch(updateItemQuantity({id: id, action: action}));
  };

  // show or hide wishlist
  const handleShowWishlist = () => setShowWishlist(!showWishlist);

  // show or hide cart
  const handleShowCart = () => setShowCart(!showCart);

  return (
    <Container>
      <div style={inlineStyles.wishlistContainer}>
        <Wishlist
          header={"Wishlist"}
          items={wishlist}
          showCart={showCart}
          onRemove={(id) => handleRemoveFromWishlist(id)}
          onToggleShowWishlist={handleShowWishlist}
        />
      </div>
      <div style={inlineStyles.cartContainer}>
        <Cart
          header={"Cart"}
          items={cart}
          showWishlist={showWishlist}
          onRemove={(id) => handleRemoveFromCart(id)}
          onUpdateQuantity={(id, action) => handleUpdateQuantity(id, action)}
          onToggleShowCart={handleShowCart}
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
          <span className={classes.wishlist}>
            <span className={classes.badge}>{wishlist.length}</span>
            <BiHeart // TODO if cart is empty display an alert
              onClick={handleShowWishlist}
              className={classes.rightIcon}
            />
          </span>
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
