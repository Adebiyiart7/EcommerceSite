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
  const { isLoading, isError, isSuccess, products, message } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (isError) console.log(message); // TODO SHOW ALERT

    if (isSuccess) dispatch(getProducts());

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
          {isLoading ? (
            // TODO ADD SPINNER
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
