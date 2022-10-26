// NODE_MODULES
import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  FaShippingFast,
  FaPhoneAlt,
  FaDollarSign,
  FaExchangeAlt,
} from "react-icons/fa";

// LOCAL IMPORTS
import PageTitle from "../common/PageTitle";
import oranges from "../../assets/images/oranges.jpg";
import Button from "../common/Button";
import Item from "../common/item2/Index";
import Card from "../common/Card";

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
  const { tabletDown } = mediaQueries;
  const classes = useStyles();

  const mediaStyles = {
    cardContainer: {
      display: tabletDown ? "block" : "flex",
      flexDirection: tabletDown ?  "column" : "row",
      padding: "30px 0",
      justifyContent: "space-around",
    },
  };

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
              discount={35}
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
              discount={35}
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
              discount={35}
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
              discount={35}
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
              discount={35}
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
              discount={35}
              stars={4}
              title="Soure Fresh Lemons"
              mediaQueries={mediaQueries}
            />
          </Grid>
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
