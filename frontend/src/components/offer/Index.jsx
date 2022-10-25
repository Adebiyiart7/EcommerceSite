// NODE_MODULES
import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

// LOCAL IMPORTS
import PageTitle from "../common/PageTitle";
import oranges from "../../assets/images/oranges.jpg";
import Button from "../common/Button";
import Item from "../common/item2/Index";

const useStyles = makeStyles({
  offer: {
    padding: "50px 0",
    backgroundColor: "var(--lightBackground)",
  },
});

const ItemButton = ({ mediaQueries }) => {
  const { laptopUp } = mediaQueries;

  const customStyles = {
    button: {
      borderRadius: 0,
      padding: "8px 16",
      fontSize: laptopUp ? 14 : 12,
    },
  };

  return <Button text="Add to Cart" customStyles={customStyles} />;
};

const Offer = ({ mediaQueries }) => {
  const classes = useStyles();

  return (
    <div className={classes.offer}>
      <PageTitle
        title="Weekly Offer"
        subTitle="Hurry and Grab Yours"
        mediaQueries={mediaQueries}
      />
      <Container>
        <Grid container spacing={{ xs: 2 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              action={<ItemButton mediaQueries={mediaQueries} />}
              image={oranges}
              price={20}
              stars={4}
              title="Soure Fresh Lemons"
              mediaQueries={mediaQueries}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              action={<ItemButton mediaQueries={mediaQueries} />}
              image={oranges}
              price={20}
              stars={4}
              title="Soure Fresh Lemons"
              mediaQueries={mediaQueries}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              action={<ItemButton mediaQueries={mediaQueries} />}
              image={oranges}
              price={20}
              stars={4}
              title="Soure Fresh Lemons"
              mediaQueries={mediaQueries}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              action={<ItemButton mediaQueries={mediaQueries} />}
              image={oranges}
              price={20}
              stars={4}
              title="Soure Fresh Lemons"
              mediaQueries={mediaQueries}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              action={<ItemButton mediaQueries={mediaQueries} />}
              image={oranges}
              price={20}
              stars={4}
              title="Soure Fresh Lemons"
              mediaQueries={mediaQueries}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              action={<ItemButton mediaQueries={mediaQueries} />}
              image={oranges}
              price={20}
              stars={4}
              title="Soure Fresh Lemons"
              mediaQueries={mediaQueries}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Offer;
