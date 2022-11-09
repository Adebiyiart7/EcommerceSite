// NODE MODULES
import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { BiHeart } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

// LOCAL IMPORT
import pluralize from "../../utils/pluralize";
import { cartStyles } from "../cart/styles";
import TextWithNumOfLines from "../common/TextWithNumOfLines";

const useStyles = makeStyles(cartStyles());

const Wishlist = ({
  items,
  header,
  onRemove,
  showCart,
  onToggleShowWishlist,
}) => {
  const classes = useStyles();

  const totalAmount = () => {
    let total = 0;
    for (let item of items) {
      total += item.price;
    }

    return total;
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
            <strong>{items.length}</strong> {pluralize("Item", items.length)} in
            Wishlist.
          </span>
          <span>{header} Total:</span>
        </div>
        <strong className={classes.totalAmount}>${totalAmount()}</strong>
        {!showCart && (
          <IconButton
            className={classes.close}
            sx={{ top: "40vh" }}
            onClick={onToggleShowWishlist}
          >
            <span style={{ lineHeight: 0 }}>
              {items.length > 0 && (
                <span className={classes.badge}>{items.length}</span>
              )}
              <BiHeart />
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
                <Link to="/detail">
                  <div className={classes.name}>
                    <TextWithNumOfLines text={item.name} lines={2} />
                  </div>
                </Link>
                <div className={classes.itemFooter}>
                  <span className={classes.price}>${item.price}</span>
                  <IconButton size="small" onClick={() => onRemove(item.id)}>
                    <FaTimes color="var(--primaryRed)" />
                  </IconButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
