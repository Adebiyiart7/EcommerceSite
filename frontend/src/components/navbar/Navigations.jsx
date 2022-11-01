// NODE_MODULES
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  nav: {
    listStyle: "none",
    fontWeight: 400,
    fontSize: 14,
    padding: "6px 12px",
    marginRight: 10,
    borderRadius: 4,
  },
  navLink: {
    color: "var(--primaryText)",
    textDecoration: "none",
  },
  navs: {
    paddingLeft: 0,
    display: "flex",
  },
});

const Navigations = ({ media1000Down }) => {
  const classes = useStyles();

  const mediaStyles = {
    navLink: {
      padding: "5px 0"
    },
    navs: {
      flexDirection: media1000Down ? "column" : "row",
      margin: media1000Down && 0,
    },
  };

  return (
    <ul className={classes.navs} style={mediaStyles.navs}>
      <Link to="/" className={classes.navLink} style={mediaStyles.navLink}>
        <li className={classes.nav}>Home</li>
      </Link>
      <Link to="/about" className={classes.navLink} style={mediaStyles.navLink}>
        <li className={classes.nav}>About</li>
      </Link>
      <Link to="/contact" className={classes.navLink} style={mediaStyles.navLink}>
        <li className={classes.nav}>Contact</li>
      </Link>
      <Link to="/blog" className={classes.navLink} style={mediaStyles.navLink}>
        <li className={classes.nav}>Blog</li>
      </Link>
    </ul>
  );
};

export default Navigations;
