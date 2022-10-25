// NODE_MODULES
import { BiCategory } from "react-icons/bi";
import { IoChevronDown } from "react-icons/io5";
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

// LOCAL IMPORTS
import Button from "../common/Button";
import { useState } from "react";

const useStyles = makeStyles({
  categories: {
    position: "absolute",
  },
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
      backgroundColor: "var(--lightBackground)",
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
  lists: {
    width: 198,
    border: "1px solid var(--primaryBorder)",
    borderRadius: 4,
    padding: 0,
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
    width: 200,
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

const Category = () => {
  const [showCategories, setShowCategories] = useState(false);
  const classes = useStyles();

  const handleShowCategories = () => setShowCategories(!showCategories);

  const mediaStyles = {
    categories: {
      display: showCategories ? "block" : "none",
    },
  };

  return (
    <div style={{ position: "relative", zIndex: "var(--zIndex1)" }}>
      <Button
        startIcon={<BiCategory />}
        endIcon={<IoChevronDown />}
        customStyles={categoriesButton}
        text="All Categories"
        onClick={handleShowCategories}
      />
      <div className={classes.categories} style={mediaStyles.categories}>
        <ul className={classes.lists}>
          <a className={classes.link} href="/">
            <li className={classes.list}>
              <MdGrain className={classes.listIcon} />
              Cereals
            </li>
          </a>
          <a className={classes.link} href="/">
            <li className={classes.list}>
              <GiFruitBowl className={classes.listIcon} /> Fruits
            </li>
          </a>
          <a className={classes.link} href="/">
            <li className={classes.list}>
              <GiJellyBeans className={classes.listIcon} /> Pulses
            </li>
          </a>
          <a className={classes.link} href="/">
            <li className={classes.list}>
              <RiSeedlingFill className={classes.listIcon} /> Seeds
            </li>
          </a>
          <a className={classes.link} href="/">
            <li className={classes.list}>
              <FaCarrot className={classes.listIcon} /> Vegetables
            </li>
          </a>
          <a className={classes.link} href="/">
            <li className={classes.list}>
              <GiChiliPepper className={classes.listIcon} /> Spices
            </li>
          </a>
          <a className={classes.link} href="/">
            <li className={classes.list}>
              <GiSugarCane className={classes.listIcon} /> Fibres
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Category;
