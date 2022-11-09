// NODE_MODULES
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Rating } from "@mui/material";

// LOCAL IMPORTS 
import TextWithNumOfLines from "../TextWithNumOfLines";

const useStyles = makeStyles({
  actions: {
    display: "flex",
    marginTop: 5,
  },
  discount: {
    fontSize: 18,
    opacity: "50%",
    margin: "5px 0",
  },
  image: {
    width: 120,
    height: "100%",
    objectFit: "cover",
  },
  itemContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    borderRadius: 7,
    textDecoration: "none",
    padding: "16px 10px",
    margin: "auto",
    height: 120,
    fontFamily: "'Roboto', serif",
    border: "1px solid var(--white)",
    backgroundColor: "var(--white)",
    "&:hover": {
      border: "1px solid var(--primaryColor)",
    },
  },
  price: {
    fontWeight: 700,
    fontSize: 18,
    margin: "5px 10px 0 0",
    color: "var(--primaryColor)",
  },
  right: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: 10,
  },
  stars: {
    marginTop: 10,
  },
  title: {
    margin: 0,
    fontSize: 16,
    color: "var(--secondaryText)",
  },
  wishListIcon: {
    padding: 6,
    cursor: "pointer",
    color: "var(--primaryText)",
    fontSize: 14,
    marginLeft: 10,
    border: "1px solid var(--primaryBorder)",
    "&:hover": {
      color: "var(--white)",
      border: "1px solid var(--primaryColor)",
      backgroundColor: "var(--primaryColor)",
    },
  },
});

const Item = ({ action, image, price, stars, title, mediaQueries }) => {
  const classes = useStyles();

  return (
    <div className={classes.itemContainer}>
      <div className={classes.left}>
        <Link to="/">
          <img className={classes.image} src={image} alt="" />
        </Link>
      </div>
      <div className={classes.right}>
        <div>
          <h3 className={classes.title}>
            <TextWithNumOfLines text={title} lines={2} />
          </h3>
          <Rating
            value={stars}
            size="small"
            readOnly
            style={{
              color: "var(--primaryColor)",
            }}
            className={classes.stars}
          />
        </div>
        <div>
          <div>
            <span className={classes.price}>
              ${parseInt(price).toLocaleString()}
            </span>
            <span className={classes.discount}>-35%</span>
          </div>

          <div className={classes.actions}>
            <span>{action}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
