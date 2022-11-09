import { badgeStyles } from "../navbar/navbarStyles";

export const cartStyles = () => {
  return {
    badge: {
      right: -10,
      ...badgeStyles,
    },
    close: {
      position: "absolute !important",
      right: "-41px",
      border: "1px solid var(--primaryBorder) !important",
      borderRadius: "0 !important",
      backgroundColor: "var(--white) !important",
      color: "var(--primaryColor) !important",
    },
    header: {
      fontSize: 14,
      padding: "10px 16px",
      borderBottom: "1px solid var(--primaryBorder)",
    },
    image: {
      width: 85,
      height: 85,
      marginRight: 10,
      borderRadius: 10,
      objectFit: "cover",
      border: "1px solid var(--primaryBorder)",
    },
    item: {
      display: "flex",
      alignItems: "center",
      padding: "10px 16px",
      borderBottom: "1px solid var(--secondaryBorder)",
    },
    itemFooter: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 5,
      alignItems: "center",
    },
    items: {
      overflowY: "scroll",
      height: "calc(100vh - 120px)",
      "&::-webkit-scrollbar": {
        width: "0",
      },
    },
    name: {
      fontWeight: 500,
      marginBottom: 5,
      fontSize: 15,
      color: "var(--primaryText)",
    },
    price: {
      color: "var(--primaryColor)",
      fontWeight: 600,
      marginTop: 5,
    },
    proceedButton: {
      display: "block",
      margin: "5px 0",
    },
    quantity: {
      color: "var(--primaryText)",
    },
    totalAmount: {
      display: "flex",
      flexDirection: "row-reverse",
      fontSize: 22,
    },
  };
};
