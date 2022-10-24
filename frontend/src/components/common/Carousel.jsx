import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTheme, useMediaQuery } from "@material-ui/core";

const chevStyles = {
  position: "absolute",
  top: "40%",
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
};

const useStyles = makeStyles({
  carouselContainer: {
    position: "relative",
  },
  chevPrev: {
    left: 0,
    ...chevStyles,
  },
  chevNext: {
    right: 0,
    ...chevStyles,
  },
  image: {
    width: "100%",
  },
});

/**
 * @slides
 * The slide param is an array of objects of 2 parameters
 * 1. image.
 * 2. children: Which is a component od what should be
 * displayed of that particular slide/image.
 *
 */
const Carousel = ({ slides }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const classes = useStyles();
  const theme = useTheme();
  const tabletUp = useMediaQuery(theme.breakpoints.up(768));

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
  
  return (
    <div className={classes.carouselContainer}>
      <img className={classes.image} src={slides[currentImage].image} alt="" />
      {tabletUp && (
        <>
          <FaChevronLeft onClick={handlePrev} className={classes.chevPrev} />
          <FaChevronRight id="landingChevronNext" onClick={handleNext} className={classes.chevNext} />
        </>
      )}
      {slides[currentImage].children}
    </div>
  );
};

export default Carousel;
