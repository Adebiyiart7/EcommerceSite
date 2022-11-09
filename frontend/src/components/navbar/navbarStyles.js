export const badgeStyles = {
  position: "absolute",
  top: -10,
  minWidth: 12,
  height: 12,
  lineHeight: 1,
  textAlign: "center",
  fontSize: 14,
  padding: 5,
  borderRadius: "50%",
  color: "var(--white)",
  fontFamily: "'Roboto', serif",
  backgroundColor: "var(--primaryColor)",
};

export const classStyles = () => {
  return {
    badge: {
      right: 3,
      ...badgeStyles,
    },
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
    wishlist: {
      position: "relative",
      lineHeight: 0,
    },
  };
};

export const inlineStyles = (
  mediumDown,
  largeDown,
  media1000Down,
  showUserMenuList,
  showMobileNavs,
  showWishlist,
  showCart,
  color
) => {
  const selectedProductsContainer = {
    zIndex: "var(--zIndex2)",
    color: "var(--secondaryText)",
    fontFamily: "'Roboto', serif",
    position: "fixed",
    top: 0,
    transition: ".3s",
    width: "100%",
    maxWidth: mediumDown ? 280 : 300,
  };

  return {
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
      ...selectedProductsContainer,
      left: showWishlist ? 0 : mediumDown ? -280 : -300,
    },
    cartContainer: {
      ...selectedProductsContainer,
      left: showCart ? 0 : mediumDown ? -280 : -300,
    },
  };
};
