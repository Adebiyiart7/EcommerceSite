// NODE_MODULES
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

// LOCAL IMPORTS
import Card from "../common/Card";
import customer1 from "../../assets/images/customer1.jpg";
import customer2 from "../../assets/images/customer2.jpg";
import customer3 from "../../assets/images/customer3.jpg";
import PageTitle from "../common/PageTitle";

const useStyles = makeStyles({
    testimonies: {
      padding: "20px 0"
    },
})

const Testimonies = ({ mediaQueries }) => {
  const classes = useStyles();
  const { tabletDown } = mediaQueries;

  const mediaStyles = {
    testimoniesContainer: {
      display: tabletDown ? "block" : "flex",
      justifyContent: "space-around",
    },
  };

  return (
    <div className={classes.testimonies}>
      <PageTitle
        title={"Testimonies"}
        subTitle={"Happy Customers"}
        mediaQueries={mediaQueries}
      />
      <Container sx={mediaStyles.testimoniesContainer}>
        <Card
          title={"James Bound"}
          subTitle={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita sunt labore harum voluptates alias laborum, rem aliquam iste dignissimos numquam."
          }
          image={customer1}
        />
        <Card
          title={"Peter Pan"}
          subTitle={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita sunt labore harum voluptates alias laborum, rem aliquam iste dignissimos numquam."
          }
          image={customer2}
        />
        <Card
          title={"John Doe"}
          subTitle={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita sunt labore harum voluptates alias laborum, rem aliquam iste dignissimos numquam."
          }
          image={customer3}
        />
      </Container>
    </div>
  );
};

export default Testimonies;
