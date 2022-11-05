// LOCAL IMPORTS
import Offer from "../offer/Index";
import PopularCategories from "../PopularCategories";
import PopularProducts from "../popularProducts";
import Testimonies from "../testimonies";
import LatestNews from "../latestNews/Index";
import Footer from "../footer/Index";
import NewsLetter from "../NewsLetter";
import LandingView from "./LandingView";

const Landing = ({ mediaQueries }) => {
  return (
    <div>
      <LandingView mediaQueries={mediaQueries}  />
      <PopularCategories mediaQueries={mediaQueries} />
      <PopularProducts mediaQueries={mediaQueries} />
      <Offer mediaQueries={mediaQueries} />
      <Testimonies mediaQueries={mediaQueries} />
      <LatestNews mediaQueries={mediaQueries} />
      <NewsLetter mediaQueries={mediaQueries} />
      <Footer mediaQueries={mediaQueries} />
    </div>
  );
};

export default Landing;
