// NODE_MODULES
import { makeStyles } from "@mui/styles";
import { MdPersonAddAlt, MdPersonOutline } from "react-icons/md";
import { ImSwitch } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// LOCAL IMPORTS
import { logout, reset } from "../../features/auth/authSlice";
import TextWithEllipsis from "../common/TextWithEllipsis";

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
      fontSize: 16,
      fontWeight: 600,
    },
    "&:last-child": {
      borderBottom: "none",
      color: "red",
      fontWeight: 600,
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

const MenuList = ({ user, customStyles }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // logout user
    dispatch(logout());
    // reset auth state to null
    dispatch(reset());
    // redirecte to login page
    navigate("/login");
  };

  return (
    <>
      {user && (
        <>
          <Link className={classes.link} to="/">
            <li className={classes.list}>
              <TextWithEllipsis text={user.fullname} />
            </li>
          </Link>
          <Link className={classes.link} to="/profile">
            <li className={classes.list}>
              <MdPersonOutline className={classes.listIcon} /> Profile
            </li>
          </Link>
          <Link className={classes.link} to="/register">
            <li className={classes.list}>
              <MdPersonAddAlt className={classes.listIcon} /> Register
            </li>
          </Link>
          <div onClick={handleLogout} className={classes.link}>
            <li className={classes.list}>
              <ImSwitch className={classes.listIcon} /> Logout
            </li>
          </div>
        </>
      )}
      {!user && (
        <>
          <Link
            className={classes.link}
            to="/login"
            style={{ fontWeight: 400 }}
          >
            <li className={classes.list}>
              <MdPersonOutline className={classes.listIcon} /> Login
            </li>
          </Link>
          <Link
            className={classes.link}
            to="/register"
            style={{ fontWeight: 400, color: "var(--primaryText)" }}
          >
            <li className={classes.list}>
              <MdPersonAddAlt className={classes.listIcon} /> Register
            </li>
          </Link>
        </>
      )}
    </>
  );
};

export default MenuList;
