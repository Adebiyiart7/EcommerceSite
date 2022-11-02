// NODE_MODULES
import { useContext } from "react";
import { Container } from "@mui/material";

// LOCAL IMPORTS
import Navbar from "../../components/navbar/Navbar";
import { AppContext } from "../../App";
import PageTitle from "../../components/common/PageTitle";
import Footer from "../../components/footer/Index";
import NewsLetter from "../../components/NewsLetter";
import Address from "./Address";
import Messaging from "./Messaging";

const Contact = () => {
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
      <Container>
        <PageTitle mediaQueries={mediaQueries} title={"Find Us"} />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.284455158546!2d7.382674214277076!3d9.12875988993327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104ddf702876a291%3A0x1e0110d0b943c773!2sAdemola%20Akintunde%20St%2C%20901101%2C%20Kubwa!5e0!3m2!1sen!2sng!4v1667354227727!5m2!1sen!2sng"
          title="FreshFarm Location"
          width="100%"
          height="500"
          style={{border: 0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Container>
      <NewsLetter mediaQueries={mediaQueries} />
      <Footer mediaQueries={mediaQueries} />
    </div>
  );
};

export default Contact;
