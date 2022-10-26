// LOCAL IMPORTS
import Offer from "../offer/Index";
import Carousel from "../common/Carousel";
import landing_1 from "../../assets/images/landing1.png";
import landing_2 from "../../assets/images/landing2.png";
import PopularCategories from "../PopularCategories";
import PopularProducts from "../popularProducts";
import Testimonies from "../testinonies/Index";
import LatestNews from "../latestNews/Index";
import Footer from "../footer/Index";

const Landing = ({ mediaQueries }) => {
  const slides = [
    {
      image: landing_1,
      children: "",
    },
    {
      image: landing_2,
      children: "",
    },
  ];

  return (
    <div>
      <Carousel slides={slides} />
      <PopularCategories mediaQueries={mediaQueries} />
      <PopularProducts mediaQueries={mediaQueries} />
      <Offer mediaQueries={mediaQueries} />
      <Testimonies mediaQueries={mediaQueries} />
      <LatestNews mediaQueries={mediaQueries} />
      <Footer mediaQueries={mediaQueries} />
    </div>
  );
};

export default Landing;
