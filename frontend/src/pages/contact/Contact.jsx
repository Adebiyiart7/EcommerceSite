// NODE_MODULES
import { useContext } from "react";
import { Container } from "@mui/material";
// import { makeStyles } from "@mui/styles";

// LOCAL IMPORTS
import Navbar from "../../components/navbar/Navbar";
import { AppContext } from "../../App";
import PageTitle from "../../components/common/PageTitle";
import Footer from "../../components/footer/Index";
import NewsLetter from "../../components/NewsLetter";
import Address from "./Address";
import Messaging from "./Messaging";

// const useStyles = makeStyles({
//   contactUs: {

//   }
// });
const About = () => {
  const { mediaQueries } = useContext(AppContext);
  const { tabletDown } = mediaQueries;

  return (
    <div>
      <Navbar mediaQueries={mediaQueries} />
      <PageTitle
        title={"Contact Us"}
        subTitle={"Get in touch with us"}
        mediaQueries={mediaQueries}
      />
      <Container
        sx={{
          display: "flex",
          marginTop: "50px",
          flexDirection: tabletDown && "column",
        }}
      >
        <Address />
        <Messaging mediaQueries={mediaQueries} />
      </Container>
      <NewsLetter mediaQueries={mediaQueries} />
      <Footer mediaQueries={mediaQueries} />
    </div>
  );
};

export default About;
