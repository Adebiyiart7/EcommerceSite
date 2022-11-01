// NODE_MODULES
import { useContext } from "react";

// LOCAL IMPORTS
import Navbar from "../../components/navbar/Navbar";
import { AppContext } from "../../App";
import PageTitle from "../../components/common/PageTitle";
import Welcome from "./Welcome";
import Footer from "../../components/footer/Index";
import Professionals from "./Professionals";
import OurUniqueness from "./OurUniqueness";
import NewsLetter from "../../components/NewsLetter";

const About = () => {
  const { mediaQueries } = useContext(AppContext);

  return (
    <div>
      <Navbar mediaQueries={mediaQueries} />
      <PageTitle title={"About Us"} mediaQueries={mediaQueries} />
      <Welcome mediaQueries={mediaQueries} />
      <OurUniqueness mediaQueries={mediaQueries} />
      <Professionals mediaQueries={mediaQueries} />
      <NewsLetter mediaQueries={mediaQueries} />
      <Footer mediaQueries={mediaQueries} />
    </div>
  );
};

export default About;
