// NODE_MODULES
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Rating } from "@mui/material";
import { BiHeart } from "react-icons/bi";

const useStyles = makeStyles({
  actions: {
    display: "flex",
    marginTop: 5,
  },
  discount: {
    fontWeight: 700,
    fontSize: 20,
    opacity: "50%",
    margin: "5px 0",
    marginRight: 10,
  },
  image: {
    width: "100%",
    maxWidth: 120,
  },
  itemContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    borderRadius: 7,
    textDecoration: "none",
    padding: 16,
    margin: "auto",
    height: 120,
    border: "1px solid var(--white)",
    backgroundColor: "var(--white)",
    "&:hover": {
      border: "1px solid var(--primaryColor)",
    },
  },
  price: {
    fontWeight: 700,
    fontSize: 20,
    margin: "5px 0",
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

const Item = ({
  action,
  discount,
  image,
  price,
  stars,
  title,
  mediaQueries,
}) => {
  const { laptopUp } = mediaQueries;
  const classes = useStyles();

  const mediaStyles = {
    wishListIcon: {
      fontSize: laptopUp ? 16 : 14,
    },
  };

  return (
    <div className={classes.itemContainer}>
      <div className={classes.left}>
        <Link to="/">
          <img className={classes.image} src={image} alt="" />
        </Link>
      </div>
      <div className={classes.right}>
        <div>
          <h3 className={classes.title}>{title}</h3>
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
            <strike className={classes.discount}>
              ${price}
            </strike>
            <span className={classes.price}>${parseInt(price * (discount / 100))}</span>
          </div>

          <div className={classes.actions}>
            <span>{action}</span>
            <BiHeart
              style={mediaStyles.wishListIcon}
              className={classes.wishListIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
