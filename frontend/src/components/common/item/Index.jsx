// NODE_MODULES
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Rating } from "@mui/material";
import { FaRegHeart } from "react-icons/fa";


// LOCAL IMPORTS
import TextWithEllipsis from "../../common/TextWithEllipsis";

const useStyles = makeStyles({
  image: {
    width: "100%",
    // maxWidth: 250,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  itemContainer: {
    position: "relative",
    borderRadius: 7,
    textDecoration: "none",
    textAlign: "center",
    maxWidth: 320,
    margin: "auto",
    backgroundColor: "var(--white)",
    "&:hover": {
      border: "1px solid var(--primaryColor)",
    },
    // border: "1px solid var(--primaryBorder)",
  },
  price: {
    color: "var(--secondaryText)",
    fontWeight: 700,
    fontSize: 22,
    margin: "5px 0",
  },
  stars: {},
  title: {
    color: "var(--secondaryText)",
    marginTop: 0,
  },
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
const Item = ({ action, image, price, stars, title, onAddToWishlist }) => {
  const classes = useStyles();

  return (
    <div className={classes.itemContainer}>
      <FaRegHeart onClick={onAddToWishlist} className={classes.wishListIcon} />
      <Link to="/">
        <img className={classes.image} src={image} alt="" />
      </Link>
      <div style={{ padding: 16 }}>
        
        <h3 className={classes.title}><TextWithEllipsis text={title} /></h3>
        <Rating value={stars} readOnly sx={{ color: "var(--primaryColor)" }} />
        <div className={classes.price}>${price}</div>
        <div>{action}</div>
      </div>
    </div>
  );
};

export default Item;
