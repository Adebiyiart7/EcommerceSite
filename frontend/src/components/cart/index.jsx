// NODE MODULES
import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

// LOCAL IMPORT
import pluralize from "../../utils/pluralize";
import Button from "../common/Button";
import Items from "./Items";
import { cartStyles } from "./styles";

export const useStyles = makeStyles(cartStyles());

const Cart = ({ items, header, showWishlist, onToggleShowCart }) => {
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
          <Link to="/checkout" className={classes.proceedButton}>
            <Button text={"PROCEED TO CHECKOUT"} width="100%" altButton />
          </Link>
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
