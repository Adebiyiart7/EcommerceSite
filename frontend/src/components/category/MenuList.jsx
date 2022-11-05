// NODE_MODULES
import { makeStyles } from "@mui/styles";
import { MdGrain } from "react-icons/md";
import {
  GiFruitBowl,
  GiChiliPepper,
  GiSugarCane,
  GiJellyBeans,
} from "react-icons/gi";
import { RiSeedlingFill } from "react-icons/ri";
import { FaCarrot } from "react-icons/fa";
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
    "&:hover": {
      color: "var(--white)",
      backgroundColor: "var(--primaryColor)",
    },
    "&:last-child": {
      borderBottom: "none",
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
          <MdGrain className={classes.listIcon} />
          Cereals
        </li>
      </Link>
      <Link className={classes.link} to="/">
        <li className={classes.list}>
          <GiFruitBowl className={classes.listIcon} /> Fruits
        </li>
      </Link>
      <Link className={classes.link} to="/">
        <li className={classes.list}>
          <GiJellyBeans className={classes.listIcon} /> Pulses
        </li>
      </Link>
      <Link className={classes.link} to="/">
        <li className={classes.list}>
          <RiSeedlingFill className={classes.listIcon} /> Seeds
        </li>
      </Link>
      <Link className={classes.link} to="/">
        <li className={classes.list}>
          <FaCarrot className={classes.listIcon} /> Vegetables
        </li>
      </Link>
      <Link className={classes.link} to="/">
        <li className={classes.list}>
          <GiChiliPepper className={classes.listIcon} /> Spices
        </li>
      </Link>
      <Link className={classes.link} to="/">
        <li className={classes.list}>
          <GiSugarCane className={classes.listIcon} /> Fibres
        </li>
      </Link>
    </>
  );
};

export default MenuList;
