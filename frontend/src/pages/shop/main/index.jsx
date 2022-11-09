// NODE_MODULES
import { useEffect } from "react";
import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

// LOCAL IMPORTS
import Carousel from "../../../components/common/Carousel";
import shopAd0 from "../../../assets/images/shopAd0.jpg";
import shopAd1 from "../../../assets/images/shopAd1.jpg";
import shopAd2 from "../../../assets/images/shopAd2.jpg";
import Item from "../../../components/common/item/Index";
import { ItemButton } from "../../../components/popularProducts";
import shopOranges from "../../../assets/images/shopOranges.jpg";
import { getProducts, reset } from "../../../features/products/productsSlice";
import { addToCart } from "../../../features/cart/cartSlice";
import handleAddToCart from "../../../utils/handleAddToCart";
import handleAddToWishlist from "../../../utils/handleAddToWishlist";
import { addToWishlist } from "../../../features/wishlist/wishlistSlice";

const slides = [{ image: shopAd0 }, { image: shopAd1 }, { image: shopAd2 }];

const Main = ({ mediaQueries }) => {
  const { tabletDown } = mediaQueries;
  const dispatch = useDispatch();
  const { isLoading, isSuccess, isError, products, message } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (isError) console.log(message);

    if (isSuccess) dispatch(getProducts(window.location.search));

    return () => {
      dispatch(reset());
    };
  }, [dispatch, isSuccess, isError, message]);

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
          {/* TODO Style this text */}
          {products.length === 0 && <p>No Items To Show</p>}

          {/* TODO Show spinner */}
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            products.map((item, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <Item
                  action={
                    <ItemButton
                      onAddToCart={() =>
                        handleAddToCart(
                          {
                            id: item._id,
                            name: item.name,
                            price: item.price,
                            image: shopOranges,
                            quantity: 1,
                          },
                          dispatch,
                          addToCart
                        )
                      }
                    />
                  }
                  image={shopOranges}
                  price={item.price}
                  stars={item.stars}
                  title={item.name}
                  onAddToWishlist={() => {
                    handleAddToWishlist(
                      {
                        id: item._id,
                        name: item.name,
                        price: item.price,
                        image: shopOranges,
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
      </div>
    </div>
  );
};

export default Main;
