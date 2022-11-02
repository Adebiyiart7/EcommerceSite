// NODE_MODULES
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { MdSearch } from "react-icons/md";

const useStyles = makeStyles({
  search: {
    position: "absolute",
    top: 28,
    left: 30,
    fontSize: 24,
    color: "var(--primaryText)",
    cursor: "pointer"
  },
  searchBox: {
    position: "relative",
    padding: 20,
    backgroundColor: "var(--white)",
    borderTop: "4px solid var(--primaryColor)",
  },
});

const SearchBox = () => {
  const [searchInput, setSearchInput] = useState("");
  const classes = useStyles();

  const handleOnChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className={classes.searchBox}>
      <MdSearch className={classes.search} />
      <TextField
        required
        fullWidth
        size="small"
        name="search"
        type={"search"}
        value={searchInput}
        onChange={handleOnChange}
        placeholder="Search our farm"
        InputProps={{
          style: {
            paddingLeft: "25px",
          },
        }}
      />
    </div>
  );
};

export default SearchBox;
