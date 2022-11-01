// NODE_MODULES
import { useContext } from "react";

// LOCAL IMPORTS
import Navbar from "../../components/navbar/Navbar";
import { AppContext } from "../../App";
import PageTitle from "../../components/common/PageTitle";
import Footer from "../../components/footer/Index";
import NewsLetter from "../../components/NewsLetter";

const About = () => {
  const { mediaQueries } = useContext(AppContext);

  return (
    <div>
      <Navbar mediaQueries={mediaQueries} />
      <PageTitle title={"Contact Us"} mediaQueries={mediaQueries} />
      <NewsLetter mediaQueries={mediaQueries} />
      <Footer mediaQueries={mediaQueries} />
    </div>
  );
};

export default About;
