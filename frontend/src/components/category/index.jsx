// NODE_MODULES
import { BiCategory } from "react-icons/bi";
import { IoChevronDown } from "react-icons/io5";
import { makeStyles } from "@mui/styles";

// LOCAL IMPORTS
import Button from "../common/Button";
import { useState } from "react";
import MenuList from "./MenuList";

const useStyles = makeStyles({
  categories: {
    position: "absolute",
  },
  lists: {
    width: 198,
    border: "1px solid var(--primaryBorder)",
    borderTop: "4px solid var(--primaryColor)",
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
    fontFamily: "'Roboto', serif",
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
          <MenuList />
        </ul>
      </div>
    </div>
  );
};

export default Category;
