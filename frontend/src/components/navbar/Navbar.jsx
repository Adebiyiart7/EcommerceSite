// NODE_MODULES
import Avatar from "@mui/material/Avatar";
import { MdSearch } from "react-icons/md";
import { makeStyles } from "@mui/styles";
import { BiCategory } from "react-icons/bi";
import { IoChevronDown } from "react-icons/io5";

// LOCAL IMPORTS
import logo from "../../assets/images/logo.png";
import Button from "../common/Button";
import { Container } from "@mui/material";

const useStyles = makeStyles({
  center: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: 60,
  },
  nav: {
    listStyle: "none",
    fontWeight: 300,
    fontSize: 14,
    padding: "6px 12px",
    marginRight: 10,
    borderRadius: 4,
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 0"
  },
  navLink: {
    color: "var(--primaryText)",
    textDecoration: "none",
  },
  navs: {
    paddingLeft: 0,
    display: "flex",
    flexDirection: "row",
  },
  right: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

const categoriesIcon = {
  position: "relative",
  top: 3,
  fontSize: 20,
};

const categoriesButton = {
  button: {
    fontWeight: 700,
    fontSize: 16,
    padding: "10px 20px",
    fontFamily: "Roboto",
    marginRight: 20,
  },
  startIcon: {
    ...categoriesIcon,
    marginRight: 8,
  },
  endIcon: {
    ...categoriesIcon,
    marginLeft: 8,
  },
};

const Navbar = () => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.navbar}>
        <div className={classes.logoContainer}>
          <img className={classes.logo} src={logo} alt="logo" />
        </div>
        <div className={classes.center}>
          <Button
            startIcon={<BiCategory />}
            endIcon={<IoChevronDown />}
            customStyles={categoriesButton}
            text="All Categories"
          />
          <div className={classes.secondCenter}>
            <ul className={classes.navs}>
              <a href="/" className={classes.navLink}>
                <li className={classes.nav}>Home</li>
              </a>
              <a href="/" className={classes.navLink}>
                <li className={classes.nav}>About</li>
              </a>
              <a href="/" className={classes.navLink}>
                <li className={classes.nav}>Contact</li>
              </a>
              <a href="/" className={classes.navLink}>
                <li className={classes.nav}>Blog</li>
              </a>
            </ul>
          </div>
        </div>
        <div className={classes.right}>
          <MdSearch />
          <MdSearch />
          <Avatar src="" />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
