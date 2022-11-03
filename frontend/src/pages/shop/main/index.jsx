// NODE_MODULES
import { Grid } from "@mui/material";

// LOCAL IMPORTS
import Carousel from "../../../components/common/Carousel";
import shopAd0 from "../../../assets/images/shopAd0.jpg";
import shopAd1 from "../../../assets/images/shopAd1.jpg";
import shopAd2 from "../../../assets/images/shopAd2.jpg";
import Item from "../../../components/common/item/Index";
import { ItemButton } from "../../../components/popularProducts";
import shopOranges from "../../../assets/images/shopOranges.jpg";

const slides = [{ image: shopAd0 }, { image: shopAd1 }, { image: shopAd2 }];

const Main = ({ mediaQueries }) => {
  const { tabletDown } = mediaQueries;

  const inlineStyles = {
    main: {
      marginRight: tabletDown ? 0 : 20,
    },
  };

  return (
    <div style={inlineStyles.main}>
      <Carousel slides={slides} />
      <div style={{ marginTop: "20px" }}>
        <Grid container spacing={{ xs: 2 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              action={<ItemButton />}
              image={shopOranges}
              price={50}
              stars={4}
              title="Fresh Organic Carrot"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              action={<ItemButton />}
              image={shopOranges}
              price={50}
              stars={4}
              title="Fresh Organic Carrot"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              action={<ItemButton />}
              image={shopOranges}
              price={50}
              stars={4}
              title="Fresh Organic Carrot"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              action={<ItemButton />}
              image={shopOranges}
              price={50}
              stars={4}
              title="Fresh Organic Carrot"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              action={<ItemButton />}
              image={shopOranges}
              price={50}
              stars={4}
              title="Fresh Organic Carrot"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              action={<ItemButton />}
              image={shopOranges}
              price={50}
              stars={4}
              title="Fresh Organic Carrot"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              action={<ItemButton />}
              image={shopOranges}
              price={50}
              stars={4}
              title="Fresh Organic Carrot"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              action={<ItemButton />}
              image={shopOranges}
              price={50}
              stars={4}
              title="Fresh Organic Carrot"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              action={<ItemButton />}
              image={shopOranges}
              price={50}
              stars={4}
              title="Fresh Organic Carrot"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Main;
