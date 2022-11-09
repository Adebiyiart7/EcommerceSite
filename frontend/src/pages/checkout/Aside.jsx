// NODE_MODULES
import { makeStyles } from "@mui/styles";
import PageSubTitle from "../../components/common/PageSubTitle";

// LOCAL IMPORTS

const useStyles = makeStyles({
  asideContainer: {
    backgroundColor: "var(--lightBackground)",
    padding: 16,
  },
  lists: {
    borderTop: "4px solid var(--primaryColor)",
    padding: 0,
  },
});

const Aside = ({ mediaQueries }) => {
  const classes = useStyles();
  const { laptopUp, laptopDown } = mediaQueries;

  const inlineStyles = {
    aside: {
      minWidth: laptopUp && 400,
      marginTop: laptopDown && 20,
    },
  };

  return (
    <aside style={inlineStyles.aside}>
      <PageSubTitle text={"Order Summary"} />
      <div className={classes.asideContainer}></div>
    </aside>
  );
};

export default Aside;
