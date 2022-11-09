// NODE_MODULES
import { makeStyles } from "@mui/styles";
import Items from "../../components/cart/Items";
import PageSubTitle from "../../components/common/PageSubTitle";
import { useStyles as cartStyles } from "../../components/cart";
import { useSelector } from "react-redux";
import pluralize from "../../utils/pluralize";

// LOCAL IMPORTS

const useStyles = makeStyles({
  lists: {
    padding: "6px 0",
    borderTop: "4px solid var(--primaryColor)",
  },
  summary: {
    padding: "0 16px",
    color: "var(--primaryText)",
    fontFamily: "'Roboto', serif",
  },
});

const Aside = ({ mediaQueries }) => {
  const classes = useStyles();
  const { laptopUp, laptopDown } = mediaQueries;
  const { cart: cartItems } = useSelector((state) => state.cart);

  const inlineStyles = {
    aside: {
      minWidth: laptopUp && 350,
      marginTop: laptopDown && 20,
    },
  };

  const totalItems = () => {
    let total = 0;
    for (let item of cartItems) {
      total += item.quantity;
    }
    return total;
  };

  return (
    <aside style={inlineStyles.aside}>
      <PageSubTitle text={"Order Summary"} />
      <div className={classes.summary}>
        <strong>{totalItems()} </strong>
        {pluralize("Item", totalItems())} in Cart.
      </div>
      <Items classes={cartStyles()} header={"Cart"} items={cartItems} />
    </aside>
  );
};

export default Aside;
