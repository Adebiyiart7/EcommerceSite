// LOCAL IMPORTS
import landing_1 from "../../assets/images/landing1.png";
import landing_2 from "../../assets/images/landing2.png";
import Carousel from "../common/Carousel";


const Landing = ({mediaQueries}) => {
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
    </div>
  );
};

export default Landing;
