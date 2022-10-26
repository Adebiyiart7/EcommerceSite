// NODE_MODULES
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Rating } from "@mui/material";
import { BiHeart } from "react-icons/bi";

const useStyles = makeStyles({
  image: {
    width: "100%",
    maxWidth: 250,
  },
  itemContainer: {
    position: "relative",
    borderRadius: 7,
    textDecoration: "none",
    textAlign: "center",
    padding: 16,
    maxWidth: 320,
    margin: "auto",
    "&:hover": {
      border: "1px solid var(--primaryColor)",
    },
    border: "1px solid var(--primaryBorder)",
  },
  price: {
    fontWeight: 700,
    fontSize: 22,
    margin: "5px 0",
  },
  stars: {},
  title: {},
  wishListIcon: {
    position: "absolute",
    top: 16,
    right: 16,
    padding: 8,
    borderRadius: 4,
    cursor: "pointer",
    color: "var(--primaryText)",
    fontSize: 20,
    border: "1px solid var(--primaryBorder)",
    "&:hover": {
      color: "var(--white)",
      border: "1px solid var(--primaryColor)",
      backgroundColor: "var(--primaryColor)",
    },
  },
});
const Item = ({ action, image, price, stars, title }) => {
  const classes = useStyles();

  return (
    <div className={classes.itemContainer}>
      <BiHeart className={classes.wishListIcon} />
      <Link to="/">
        <img className={classes.image} src={image} alt="" />
      </Link>
      <h3 className={classes.title}>{title}</h3>
      <Rating value={stars} readOnly sx={{ color: "var(--primaryColor)" }} />
      <div className={classes.price}>${price}</div>
      <div>{action}</div>
    </div>
  );
};

export default Item;
