// NODE_MODULES
import { Container, Grid } from "@mui/material";

// LOCAL IMPORTS
import Card from "../../components/common/Card";
import farmer1 from "../../assets/images/farmer1.jpg";
import farmer2 from "../../assets/images/farmer2.jpg";
import farmer3 from "../../assets/images/farmer3.jpg";
import farmer4 from "../../assets/images/farmer4.jpg";
import PageTitle from "../../components/common/PageTitle";

const Professionals = ({ mediaQueries }) => {

  return (
    <Container sx={{marginTop: "50px"}}>
      <PageTitle
        mediaQueries={mediaQueries}
        title={"Our Professionals"}
        subTitle={"Meet Our Dedicated Team"}
      />
      <div>
        <Grid container>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              image={farmer1}
              title={"John Doe"}
              subTitle={"Chief Agriculturist"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card image={farmer2} title={"Taylor Swift"} subTitle={"Manager"} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              image={farmer3}
              title={"Mike Johnson"}
              subTitle={"Agriculturist"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              image={farmer4}
              title={"Immanuel Kant"}
              subTitle={"Technical Expert"}
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Professionals;
