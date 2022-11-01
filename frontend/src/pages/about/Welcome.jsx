// NODE_MODULES
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

// LOCAL IMPORTS
import Header from "./Header";
import aboutImage from "../../assets/images/about-img.jpg";

const useStyles = makeStyles({
  intro: {
    color: "var(--primaryText)",
  },
});

const Welcome = ({ mediaQueries }) => {
  const { tabletUp } = mediaQueries;
  const classes = useStyles();

  const inlineStyles = {
    img: {
      width: "100%",
      maxWidth: tabletUp && 300,
      height: "fit-content",
      marginRight: tabletUp && 20,
    },
    intro: {
      fontSize: 14,
    },
    welcomeNote: {
      display: tabletUp && "flex",
      maxWidth: tabletUp && 800,
    },
  };

  return (
    <Container>
      <Header title={"Welcome to FreshFarm"} />
      <div className={classes.welcomeNote} style={inlineStyles.welcomeNote}>
        <img style={inlineStyles.img} src={aboutImage} alt="" />
        <div className={classes.intro} style={inlineStyles.intro}>
          <p style={{ marginTop: tabletUp && 0 }}>
            We are dedicated to bringing <strong>fresh farm produce</strong> to
            your door step. We are just an <strong>order</strong> away from you.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            quae eveniet natus rem. Delectus ad vel cumque ducimus quibusdam ea
            necessitatibus corporis laboriosam, perspiciatis facilis molestias
            at tenetur quia quo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            atque eveniet, est debitis cumque, quo numquam nostrum explicabo
            maiores deleniti voluptas facilis delectus laboriosam sit, rerum
            itaque dignissimos architecto. Quaerat!
          </p>
        </div>
      </div>
    </Container>
  );
};

  export default Welcome;
