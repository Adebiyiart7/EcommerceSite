// NODE_MODULES
import { makeStyles } from "@mui/styles";

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
      <a href="/" className={classes.navLink} style={mediaStyles.navLink}>
        <li className={classes.nav}>Home</li>
      </a>
      <a href="/about" className={classes.navLink} style={mediaStyles.navLink}>
        <li className={classes.nav}>About</li>
      </a>
      <a href="/contact" className={classes.navLink} style={mediaStyles.navLink}>
        <li className={classes.nav}>Contact</li>
      </a>
      <a href="/blog" className={classes.navLink} style={mediaStyles.navLink}>
        <li className={classes.nav}>Blog</li>
      </a>
    </ul>
  );
};

export default Navigations;
