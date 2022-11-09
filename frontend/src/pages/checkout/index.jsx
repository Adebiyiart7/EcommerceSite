// NODE_MODULES
import { useContext } from "react";

// LOCAL IMPORTS
import Navbar from "../../components/navbar/Navbar";
import { AppContext } from "../../App";
import PageTitle from "../../components/common/PageTitle";
import Footer from "../../components/footer/Index";
import NewsLetter from "../../components/NewsLetter";
import Aside from "./Aside";
import { Container } from "@mui/material";
import Main from "./Main";

const Checkout = () => {
  const { mediaQueries } = useContext(AppContext);
  const { laptopDown } = mediaQueries;

  const inlineStyles = {
    shopContainer: {
      display: "flex",
      flexDirection: laptopDown && "column",
      justifyContent: "space-between",
    },
  };

  return (
    <div>
      <Navbar mediaQueries={mediaQueries} />
      <div
        style={{
          padding: "25px 0",
        }}
      >
        <PageTitle
          title={"Checkout"}
          mediaQueries={mediaQueries}
        />
        <Container style={inlineStyles.shopContainer}>
          <Main mediaQueries={mediaQueries} />
          <Aside mediaQueries={mediaQueries} />
        </Container>
      </div>
      <NewsLetter mediaQueries={mediaQueries} />
      <Footer mediaQueries={mediaQueries} />
    </div>
  );
};

export default Checkout;
