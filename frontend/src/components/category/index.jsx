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
    width: "100%",
  },
  lists: {
    border: "1px solid var(--primaryBorder)",
    borderTop: "4px solid var(--primaryColor)",
    borderRadius: 4,
    padding: 0,
  },
});

// const categoriesIcon = {
//   position: "relative",
//   top: 3,
//   fontSize: 20,
// };

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
        color={
          window.location.pathname === "/"
            ? "var(--white)"
            : "var(--primaryText)"
        }
        width={"100%"}
        startIcon={<BiCategory />}
        endIcon={<IoChevronDown />}
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
