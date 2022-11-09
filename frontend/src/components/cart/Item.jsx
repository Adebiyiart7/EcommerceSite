// NODE MODULES
import { IconButton } from "@mui/material";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

// LOCAL IMPORT
import TextWithNumOfLines from "../common/TextWithNumOfLines";

const Item = ({ item, classes, onRemove, onUpdateQuantity }) => {
  const action = {
    border: "1px solid var(--primaryBorder)",
    borderRadius: "4px",
    marginLeft: "7px",
  };

  return (
    // TODO change the div below to a link that will lead to the item detail
    <div className={classes.item}>
      <Link to="/detail">
        <img className={classes.image} src={item.image} alt="" />
      </Link>
      <div style={{ width: "100%" }}>
        {" "}
        <Link to="/detail">
          <div className={classes.name}>
            <TextWithNumOfLines text={item.name} lines={2} />
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
  );
};

export default Item;
