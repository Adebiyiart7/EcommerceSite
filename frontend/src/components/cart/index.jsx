// NODE MODULES
import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// LOCAL IMPORT
import pluralize from "../../utils/pluralize";
import AppButton from "../common/Button";
import Items from "./Items";
import { cartStyles } from "./styles";
import { reset } from "../../features/cart/cartSlice";

export const useStyles = makeStyles(cartStyles());

const Cart = ({ items, header, showWishlist, onToggleShowCart }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const totalAmount = () => {
    let total = 0;
    for (let item of items) {
      total += item.price * item.quantity;
    }
    return total;
  };

  const itemCount = () => {
    let count = 0;
    for (let item of items) {
      count += item.quantity;
    }
    return count;
  };

  const clearCart = () => {
    localStorage.removeItem("cart"); // remove item from localstorage
    dispatch(reset()); // reset cart
  };

  return (
    <div
      style={{
        backgroundColor: "var(--white)",
        height: "100vh",
        borderRight: "1px solid var(--primaryBorder)",
      }}
    >
      <div className={classes.header}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>
            <strong>{itemCount()}</strong> {pluralize("Item", itemCount())} in{" "}
            {header}.
          </span>
          <span>{header} Total:</span>
        </div>
        <strong className={classes.totalAmount}>${totalAmount()}</strong>
        {items.length > 0 && (
          <div className={classes.topButton}>
            <Link to="/checkout" className={classes.checkoutButton}>
              <AppButton text={"CHECKOUT"} altButton width={"100%"} />
            </Link>
            <button className={classes.clearButton} onClick={() => clearCart()}>
              CLEAR
            </button>
          </div>
        )}
        {!showWishlist && (
          <IconButton
            className={classes.close}
            sx={{ top: "calc(40vh - 55px)" }}
            onClick={onToggleShowCart}
          >
            <span style={{ lineHeight: 0 }}>
              {itemCount() > 0 && (
                <span className={classes.badge}>{itemCount()}</span>
              )}
              <MdOutlineShoppingCart />
            </span>
          </IconButton>
        )}
      </div>
      <Items items={items} header={header} classes={classes} />
    </div>
  );
};

export default Cart;
