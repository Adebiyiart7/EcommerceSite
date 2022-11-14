// NODE_MODULES
import { makeStyles } from "@mui/styles";
import { Container, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

// LOCAL IMPORTS
import Item from "../common/item/Index";
import PageTitle from "../common/PageTitle";
import carrots from "../../assets/images/carrots.jpg";
import Button from "../common/Button";
import { useEffect } from "react";
import { getProducts, reset } from "../../features/products/productsSlice";
import { addToWishlist } from "../../features/wishlist/wishlistSlice";
import { addToCart } from "../../features/cart/cartSlice";
import handleAddToCart from "../../utils/handleAddToCart";
import handleAddToWishlist from "../../utils/handleAddToWishlist";

const useStyles = makeStyles({
  popularProducts: {
    margin: "50px 0",
  },
});

export const ItemButton = ({ onAddToCart }) => (
  <Button onClick={onAddToCart} altButton text="Add to Cart" />
);

const PopularProducts = ({ mediaQueries }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // Get product state
  const { isLoading, isError, isSuccess, products, message } = useSelector(
    (state) => state.products
  );

  // Fetch product data
  useEffect(() => {
    if (isError) console.log(message); // TODO SHOW ALERT

    dispatch(getProducts(window.location.search));

    return () => dispatch(reset());
  }, [isError, isSuccess, message, dispatch]);

  return (
    <div className={classes.popularProducts}>
      <PageTitle
        title="Popular Products"
        subTitle="Products for the week"
        mediaQueries={mediaQueries}
      />
      <Container>
        <Grid container spacing={{ xs: 2 }}>
          {/* TODO Style this text */}
          {products.length === 0 && <p>No Items To Show</p>}

          {/* TODO Show spinner */}
          {isLoading ? ( // TODO ADD SPINNER
            <p>Loading...</p>
          ) : (
            products.slice(0, 8).map((item, index) => (
              <Grid key={index} item xs={12} sm={6} md={3}>
                <Item
                  action={
                    <ItemButton
                      onAddToCart={() =>
                        handleAddToCart(
                          {
                            id: item._id,
                            name: item.name,
                            price: item.price,
                            image: carrots,
                            quantity: 1,
                          },
                          dispatch,
                          addToCart
                        )
                      }
                    />
                  }
                  image={carrots}
                  price={item.price}
                  stars={item.stars}
                  title={item.name}
                  onAddToWishlist={() => {
                    handleAddToWishlist(
                      {
                        id: item._id,
                        name: item.name,
                        price: item.price,
                        image: carrots,
                      },
                      dispatch,
                      addToWishlist
                    );
                  }}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default PopularProducts;
