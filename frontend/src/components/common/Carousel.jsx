import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const useStyles = makeStyles({
  carouselContainer: {
    position: "relative",
    backgroundSize: "cover",
    overflowX: "hidden",
  },
  chevPrev: {
    position: "absolute",
    top: "45%",
    left: 0,
    margin: 20,
    width: 30,
    height: 30,
    padding: 15,
    color: "var(--white)",
    borderRadius: "50%",
    cursor: "pointer",
    backgroundColor: "#000",
    opacity: "80%",
    "&:hover": {
      opacity: "50%",
    },
  },
  chevNext: {
    position: "absolute",
    top: "45%",
    right: 0,
    margin: 20,
    width: 30,
    height: 30,
    padding: 15,
    color: "var(--white)",
    borderRadius: "50%",
    cursor: "pointer",
    backgroundColor: "#000",
    opacity: "80%",
    "&:hover": {
      opacity: "50%",
    },
  },
});

const Carousel = ({ children, slides, height }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const classes = useStyles();

  // Handle Previous
  const handlePrev = () => {
    if (currentImage >= 1) {
      setCurrentImage(currentImage - 1);
    } else if (currentImage === 0) {
      setCurrentImage(slides.length - 1);
    }
  };

  // Handle Next
  const handleNext = () => {
    if (currentImage < slides.length - 1) {
      setCurrentImage(currentImage + 1);
    } else if (currentImage === slides.length - 1) {
      setCurrentImage(0);
    }
  };

  const inlineStyles = {
    carouselContainer: {
      backgroundImage: `url(${slides[currentImage].image})`,
      height: height,
    },
  };

  return (
    <div
      className={classes.carouselContainer}
      style={inlineStyles.carouselContainer}
    >
      <FaChevronLeft onClick={handlePrev} className={classes.chevPrev} />
      {slides.children}
      <FaChevronRight onClick={handleNext} className={classes.chevNext} />
    </div>
  );
};

export default Carousel;
