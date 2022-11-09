// NODE_MODULES
import { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid } from "@mui/material";
import {
  FaShippingFast,
  FaPhoneAlt,
  FaDollarSign,
  FaExchangeAlt,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineAddShoppingCart } from "react-icons/md";

// LOCAL IMPORTS
import Card from "../common/Card";
import Item from "../common/item2/Index";
import PageTitle from "../common/PageTitle";
import oranges from "../../assets/images/oranges.jpg";
import different_fruits from "../../assets/images/different_fruits.jpg";
import Button from "../common/Button";
import { addToCart } from "../../features/cart/cartSlice";
import handleAddToCart from "../../utils/handleAddToCart";

const useStyles = makeStyles({
  cards: {
    marginTop: 50,
    backgroundColor: "var(--primaryColor)",
  },
  icon: {
    border: "2px dashed var(--white)",
    padding: 20,
    color: "var(--white)",
    fontSize: 30,
    borderRadius: "50%",
  },
  offer: {
    padding: "50px 0 0 0",
    marginBottom: 50,
    backgroundImage: `url(${different_fruits})`,
    backgroundColor: "var(--lightBackground)",
  },
});

const Offer = ({ mediaQueries }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { tabletDown } = mediaQueries;

  const { isSuccess: cartIsSuccess, cart } = useSelector((state) => state.cart);
  const { products, isLoading } = useSelector((state) => state.products);

  // store cart from redux store to localstorage
  useEffect(() => {
    if (cartIsSuccess) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cartIsSuccess, cart]);

  const mediaStyles = {
    cardContainer: {
      display: tabletDown ? "block" : "flex",
      flexDirection: tabletDown ? "column" : "row",
      padding: "30px 0",
      justifyContent: "space-around",
    },
  };

  return (
    <div className={classes.offer}>
      <Container
        sx={{
          backgroundColor: "var(--lightBackground)",
          borderTop: "5px solid var(--primaryColor)",
          paddingTop: "24px",
          paddingBottom: "24px",
          position: "relative",
          top: "200px",
          marginBottom: "200px",
        }}
      >
        {" "}
        <PageTitle
          title="Weekly Offer"
          subTitle="Hurry and Grab Yours"
          mediaQueries={mediaQueries}
        />
        <Grid container spacing={{ xs: 2 }}>
          {/* TODO handle loading with spinner */}
          {isLoading && <p>Loading...</p>}
          {products.slice(0, 6).map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Item
                action={
                  <Button
                    onClick={() =>
                      handleAddToCart(
                        {
                          id: item._id,
                          name: item.name,
                          price: item.price,
                          image: oranges,
                          quantity: 1,
                        },
                        dispatch,
                        addToCart
                      )
                    }
                    startIcon={<MdOutlineAddShoppingCart />}
                    text={"ADD"}
                    small
                    altButton
                  />
                }
                image={oranges}
                price={item.price}
                stars={item.stars}
                title={item.name}
                mediaQueries={mediaQueries}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <div className={classes.cards}>
        <Container
          className={classes.cardContainer}
          sx={mediaStyles.cardContainer}
        >
          <Card
            title={"Free Shipping"}
            subTitle={"On all orders over $99.00"}
            icon={<FaShippingFast className={classes.icon} />}
            textColor={"var(--white)"}
          />
          <Card
            title={"Money Guarantee"}
            subTitle={"7 days money back guarantee"}
            icon={<FaDollarSign className={classes.icon} />}
            textColor={"var(--white)"}
          />
          <Card
            title={"Safe Transaction"}
            subTitle={"Safe Transaction Guarantee"}
            icon={<FaExchangeAlt className={classes.icon} />}
            textColor={"var(--white)"}
          />
          <Card
            title={"Online Support"}
            subTitle={"09029242729"}
            icon={<FaPhoneAlt className={classes.icon} />}
            textColor={"var(--white)"}
          />
        </Container>
      </div>
    </div>
  );
};

export default Offer;
