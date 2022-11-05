

const CarouselChildren = ({ mediaQueries }) => {
  // const { smallUp, mediumUp, largeUp, tabletUp, laptopUp } = mediaQueries;
  
  const mediaStyles = {
    children: {
      position: "absolute",
      left: "50%",
      marginLeft: -315,
      top: 90,
      textAlign: "center",
      color: "var(--primaryText)",
    },
    firstText: {
      fontSize: 40,
      margin: 0,
      fontWeight: 600,
    },
    secondText: {
      fontSize: 70,
      margin: 0,
      fontWeight: 900,
    },
    thirdText: {
      fontSize: 20,
      margin: 0,
    },
  };

  return (
    <div style={mediaStyles.children}>
      <h1 style={mediaStyles.firstText}>FRESH FOODS</h1>
      <h3 style={mediaStyles.secondText}>100% ORGANIC</h3>
      <p style={mediaStyles.thirdText}>
        We Deliver Fresh Fruits, Vegetables, Spices, Cereals, etc. to Your Door
      </p>
    </div>
  );
};

export default CarouselChildren;
