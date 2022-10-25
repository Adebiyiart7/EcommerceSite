// NODE_MODULES
import { makeStyles } from "@mui/styles";

// LOCAL IMPORTS
import PageTitle from "../common/PageTitle";

const useStyles = makeStyles({
  offer: {
    padding: "50px 0",
    backgroundColor: "var(--lightBackground)",
  },
});

const Offer = ({ mediaQueries }) => {
  const classes = useStyles();

  return (
    <div className={classes.offer}>
      <PageTitle
        title="Weekly Offer"
        subTitle="Hurry and Grab Yours"
        mediaQueries={mediaQueries}
      />
    </div>
  );
};

export default Offer;
