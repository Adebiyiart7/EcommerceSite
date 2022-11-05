// NODE_MODULES
import { makeStyles } from "@mui/styles";

// LOCAL IMPORTS
import fruits from "../assets/images/fruits.jpg";
import vegetables from "../assets/images/vegetables.jpg";
import spices from "../assets/images/spices.jpg";
import pulses from "../assets/images/pulses.jpg";
import cereals from "../assets/images/cereals.jpg";
import seeds from "../assets/images/seeds.jpg";
// import fibres from "../assets/images/fibres.jpg";
import { Container, Grid } from "@mui/material";

const useStyles = makeStyles({
  image: {
    border: "1px solid var(--primaryBorder)",
    borderRadius: "50%",
    maxWidth: 150,
    width: "90%",
  },
  category: {
    width: "auto",
    textDecoration: "none",
  },
  popularCatogories: {
    textAlign: "center",
    alignItems: "center",
    marginTop: -10,
    paddingTop: 30,
    overflow: "hidden",
  },
  title: {
    color: "var(--primaryText)",
    margin: "5px 0 15px 0",
  },
});

const PopularCategories = ({ mediaQueries }) => {
  const { mediumDown } = mediaQueries;
  const classes = useStyles();

  const mediaStyles = {
    title: {
      fontSize: mediumDown && 16,
    },
  };

  return (
    <div
      style={{
        backgroundColor: "var(--lightBackground)",
      }}
    >
      <Container>
        <Grid container className={classes.popularCatogories}>
          {categories.map((category, index) => (
            <Grid key={index} item xs={4} md={2}>
              <a href={category.link} className={classes.category}>
                <img className={classes.image} src={category.image} alt="" />
                <h3 className={classes.title} style={mediaStyles.title}>
                  {category.title}
                </h3>
              </a>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

const categories = [
  {
    title: "Fruits",
    image: fruits,
    link: "fruits",
  },
  {
    title: "Pulses",
    image: pulses,
    link: "pulses",
  },
  {
    title: "Vegetables",
    image: vegetables,
    link: "vegetables",
  },
  {
    title: "Cereals",
    image: cereals,
    link: "cereals",
  },
  {
    title: "Seeds",
    image: seeds,
    link: "seeds",
  },
  {
    title: "Spices",
    image: spices,
    link: "spices",
  },
  // {
  //   title: "Fibres",
  //   image: fibres,
  //   link: "fibres",
  // },
];

export default PopularCategories;
