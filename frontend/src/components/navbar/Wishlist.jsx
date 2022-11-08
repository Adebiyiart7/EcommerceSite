// NODE MODULES
import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { BiHeart } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

// LOCAL IMPORT
import pluralize from "../../utils/pluralize";
import { cartStyles } from "./navbarStyles";

const useStyles = makeStyles({
  close: {
    position: "absolute !important",
    top: "40vh",
    right: "-35px",
    borderRadius: "0 !important",
    backgroundColor: "var(--white) !important",
    color: "var(--primaryRed) !important",
  },
  ...cartStyles()
});

const Wishlist = ({ items, header, onRemove, onClose }) => {
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
            <strong>{items.length}</strong> in {pluralize(header, items.length)}
          </span>
          <span>{header} Total:</span>
        </div>
        <strong className={classes.totalAmount}>${totalAmount()}</strong>
        <IconButton className={classes.close} onClick={onClose}>
          <BiHeart />
        </IconButton>
      </div>
      {items.length < 1 ? (
        <p style={{ textAlign: "center" }}>Your {header} is Empty!</p>
      ) : (
        <div className={classes.items}>
          {items.map((item, index) => (
            // TODO change the div below to a link that will lead to the item detail
            <Link to="/" className={classes.item} key={index}>
              <img className={classes.image} src={item.image} alt="" />
              <div style={{ width: "100%" }}>
                <div className={classes.name}>
                  {item.name.slice(0, 50)}
                  {item.name.length > 50 && "..."}
                </div>
                <div className={classes.itemFooter}>
                  <span className={classes.price}>${item.price}</span>
                  <IconButton size="small" onClick={() => onRemove(item.id)}>
                    <FaTimes color="var(--primaryRed)" />
                  </IconButton>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
