// NODE MODULES
import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

// LOCAL IMPORT

const useStyles = makeStyles({
  close: {
    position: "absolute !important", top: "4px", right: "5px"
  },
  footer: {
    padding: "10px 16px",
    borderTop: "1px solid var(--primaryBorder)",
  },
  header: {
    fontWeight: 600,
    fontSize: 24,
    textAlign: "center",
    padding: "10px 16px",
    borderBottom: "1px solid var(--primaryBorder)",
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
    objectFit: "cover",
    border: "1px solid var(--primaryBorder)",
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: 16,
  },
  itemFooter: {
    display: "flex",
    justifyContent: "space-between",
  },
  items: {
    overflowY: "scroll",
    padding: 16,
    height: "calc(100vh - 150px)",
    "&::-webkit-scrollbar": {
      width: "0",
    },
  },
  name: {
    fontWeight: 600,
    color: "var(--secondaryText)",
  },
  price: {
    color: "var(--primaryColor)",
    fontWeight: 600,
    marginTop: 5,
  },
});

const SelectedProducts = ({ items, header, onRemove, onClose }) => {
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
      <div>
        <header className={classes.header}>{header}</header>
        <IconButton className={classes.close} onClick={onClose}>
          <FaTimes />
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
      <div className={classes.footer}>
        <div>
          Total Items: <strong>{items.length}</strong>
        </div>
        <div>
          Total Amount: <strong>${totalAmount()}</strong>
        </div>
      </div>
    </div>
  );
};

export default SelectedProducts;
