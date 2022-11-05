// NODE_MODULES
import { makeStyles } from "@mui/styles";

// LOCAL IMPORTS
import advert from "../../../assets/images/ad1.jpg";
import MenuList from "../../../components/category/MenuList";
import SearchBox from "../../../components/common/SearchBox";

const useStyles = makeStyles({
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
      minWidth: laptopUp && 300,
      marginTop: laptopDown && 20,
    },
  };

  return (
    <aside style={inlineStyles.aside}>
      <SearchBox />
      <br />
      <ul className={classes.lists}>
        <MenuList />
      </ul>
      <div style={{ marginTop: 16 }}>
        {laptopUp && (
          <>
            <div style={{ color: "var(--lightText)", fontSize: 14 }}>
              Advertisement
            </div>
            <img src={advert} alt="" />
          </>
        )}
      </div>
    </aside>
  );
};

export default Aside;
