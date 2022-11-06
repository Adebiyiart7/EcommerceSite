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
      <a className={classes.link} href={`/shop?category=cereals`}>
        <li className={classes.list}>
          <MdGrain className={classes.listIcon} />
          Cereals
        </li>
      </a>
      <a className={classes.link} href={`/shop?category=fruits`}>
        <li className={classes.list}>
          <GiFruitBowl className={classes.listIcon} /> Fruits
        </li>
      </a>
      <a className={classes.link} href={`/shop?category=pulses`}>
        <li className={classes.list}>
          <GiJellyBeans className={classes.listIcon} /> Pulses
        </li>
      </a>
      <a className={classes.link} href={`/shop?category=seeds`}>
        <li className={classes.list}>
          <RiSeedlingFill className={classes.listIcon} /> Seeds
        </li>
      </a>
      <a className={classes.link} href={`/shop?category=vegetables`}>
        <li className={classes.list}>
          <FaCarrot className={classes.listIcon} /> Vegetables
        </li>
      </a>
      <a className={classes.link} href={`/shop?category=spices`}>
        <li className={classes.list}>
          <GiChiliPepper className={classes.listIcon} /> Spices
        </li>
      </a>
      <a className={classes.link} href={`/shop?category=fibres`}>
        <li className={classes.list}>
          <GiSugarCane className={classes.listIcon} /> Fibres
        </li>
      </a>
    </>
  );
};

export default MenuList;
