// NODE_MODULES
import { makeStyles } from "@mui/styles";
import Item from "../common/item/Index";

// LOCAL IMPORTS
import PageTitle from "../common/PageTitle";
import carrots from "../../assets/images/carrots.jpg";
import Button from "../common/Button";
import { Container, Grid } from "@mui/material";

const useStyles = makeStyles({
  popularProducts: {
    margin: "50px 0",
  },
});

const ItemButton = () => {
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

  return (
    <div className={classes.popularProducts}>
        <PageTitle
          title="Popular Products"
          subTitle="Products for the week"
          mediaQueries={mediaQueries}
        />
      <Container>
        <Grid container spacing={{ xs: 2 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Item
              action={<ItemButton />}
              image={carrots}
              price={50}
              stars={4}
              title="Fresh Organic Carrot"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Item
              action={<ItemButton />}
              image={carrots}
              price={50}
              stars={4}
              title="Fresh Organic Carrot"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Item
              action={<ItemButton />}
              image={carrots}
              price={50}
              stars={4}
              title="Fresh Organic Carrot"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Item
              action={<ItemButton />}
              image={carrots}
              price={50}
              stars={4}
              title="Fresh Organic Carrot"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Item
              action={<ItemButton />}
              image={carrots}
              price={50}
              stars={4}
              title="Fresh Organic Carrot"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Item
              action={<ItemButton />}
              image={carrots}
              price={50}
              stars={4}
              title="Fresh Organic Carrot"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Item
              action={<ItemButton />}
              image={carrots}
              price={50}
              stars={4}
              title="Fresh Organic Carrot"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Item
              action={<ItemButton />}
              image={carrots}
              price={50}
              stars={4}
              title="Fresh Organic Carrot"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PopularProducts;
