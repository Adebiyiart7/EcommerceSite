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

const useStyles = makeStyles({
  popularProducts: {
    margin: "50px 0",
  },
});

export const ItemButton = () => {
  const customStyles = {
    button: {
      textTransform: "uppercase",
      borderRadius: 0,
      padding: "10px 20px",
    },
  };

  return <Button text="Add to Cart" customStyles={customStyles} />;
};

const PopularProducts = ({ mediaQueries }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // Get product state
  const { isLoading, isError, isSuccess, products, message } = useSelector(
    (state) => state.products
  );
  // Get wishlist state
  const { isSuccess: wishlistIsSuccess, wishlist } = useSelector(
    (state) => state.wishlist
  );
  // Fetch product data
  useEffect(() => {
    if (isError) console.log(message); // TODO SHOW ALERT

    if (isSuccess) {
      dispatch(getProducts(window.location.search));
    }

    return () => dispatch(reset());
  }, [isError, isSuccess, message, dispatch]);

  // store wishlist from redux store to localstorage
  useEffect(() => {
    if (wishlistIsSuccess) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [wishlistIsSuccess, wishlist]);

  // add product to redux store
  const handleAddToWishlist = (data) => {
    // get wishlist from localstorage
    const wishlist = JSON.parse(localStorage.getItem("wishlist"));
    if (wishlist) {
      // check if data already exist
      const dataExists = wishlist.filter((item) => item.id === data.id);
      // add data if it does not exist in the localstorage
      if (dataExists.length === 0) {
        dispatch(addToWishlist(data));
      }
    } else {
      dispatch(addToWishlist(data));
    }
  };

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
            products.map((item, index) => (
              <Grid key={index} item xs={12} sm={6} md={3}>
                <Item
                  action={<ItemButton />}
                  image={carrots}
                  price={item.price}
                  stars={item.stars}
                  title={item.name}
                  onAddToWishlist={() => {
                    handleAddToWishlist({
                      id: item._id,
                      name: item.name,
                      price: item.price,
                      image: carrots
                    });
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
