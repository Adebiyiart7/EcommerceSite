// NODE_MODULES
import { makeStyles } from "@mui/styles";
import { MdPersonOutline } from "react-icons/md";
import { ImSwitch } from "react-icons/im";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  link: {
    color: "var(--primaryText)",
    textDecoration: "none",
    fontWeight: 400,
    fontSize: 15,
    display: "block",
    padding: "10px 15px",
    backgroundColor: "var(--white)",
    borderBottom: "1px solid var(--primaryBorder)",
    "&:first-child": {
      fontSize: 16, fontWeight: 600
    },
        "&:last-child": {
      borderBottom: "none",
      color: "red", fontWeight: 600
    },
    "&:hover": {
      color: "var(--white)",
      backgroundColor: "var(--primaryColor)",
    },
  },
  list: {
    listStyle: "none",
  },
  listIcon: {
    position: "relative",
    top: 3,
    right: 5,
    fontSize: 18,
  },
});

const MenuList = ({ customStyles }) => {
  const classes = useStyles();

  return (
    <>
      <Link className={classes.link} to="/">
        <li className={classes.list}>
          Adeeyo Joseph
        </li>
      </Link>
      <Link className={classes.link} to="/profile">
        <li className={classes.list}>
          <MdPersonOutline className={classes.listIcon} /> Profile
        </li>
      </Link>
            <Link className={classes.link} to="/profile">
        <li className={classes.list}>
          <MdPersonOutline className={classes.listIcon} /> Register
        </li>
      </Link>
      <Link className={classes.link} to="/logout">
        <li className={classes.list}>
          <ImSwitch className={classes.listIcon} /> Logout
        </li>
      </Link>
    </>
  );
};

export default MenuList;
