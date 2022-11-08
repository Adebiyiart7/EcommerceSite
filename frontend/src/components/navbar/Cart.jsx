// NODE MODULES
import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

// LOCAL IMPORT
import pluralize from "../../utils/pluralize";
import Button from "../common/Button";
import { cartStyles } from "./navbarStyles";

export const useStyles = makeStyles(cartStyles());

const Cart = ({
  items,
  header,
  onRemove,
  showWishlist,
  onUpdateQuantity,
  onToggleShowCart,
}) => {
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

  const action = {
    border: "1px solid var(--primaryBorder)",
    borderRadius: "4px",
    marginLeft: "7px",
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
            <span style={{lineHeight: 0}}>
              {itemCount() > 0 && (
                <span className={classes.badge}>{itemCount()}</span>
              )}
              <MdOutlineShoppingCart />
            </span>
          </IconButton>
        )}
      </div>
      {items.length < 1 ? (
        <p style={{ textAlign: "center" }}>Your {header} is Empty!</p>
      ) : (
        <div className={classes.items}>
          {items.map((item, index) => (
            // TODO change the div below to a link that will lead to the item detail
            <div className={classes.item} key={index}>
              <Link to="/detail">
                <img className={classes.image} src={item.image} alt="" />
              </Link>
              <div style={{ width: "100%" }}>
                {" "}
                <Link to="/detail">
                  <div className={classes.name}>
                    {item.name.slice(0, 40)}
                    {item.name.length > 40 && "..."}
                  </div>
                </Link>
                <div className={classes.price}>
                  ${parseInt(item.price).toLocaleString()}
                </div>
                <div className={classes.itemFooter}>
                  <span className={classes.quantity}>
                    Qty: <strong>{item.quantity}</strong>
                  </span>
                  <div>
                    <IconButton
                      sx={action}
                      size="small"
                      onClick={() => onUpdateQuantity(item.id, "add")}
                    >
                      <FaPlus color="var(--lightText)" size={14} />
                    </IconButton>
                    <IconButton
                      sx={action}
                      size="small"
                      onClick={() => onUpdateQuantity(item.id, "subtract")}
                    >
                      <FaMinus color="var(--lightText)" size={14} />
                    </IconButton>
                    <IconButton
                      sx={action}
                      size="small"
                      onClick={() => onRemove(item.id)}
                    >
                      <FaTimes color="var(--lightText)" size={14} />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
