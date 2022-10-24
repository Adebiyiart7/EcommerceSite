// NODE_MODULES
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  button: {
    color: "var(--primaryText)",
    border: "1px solid var(--primaryBorder)",
    padding: "6px 12px",
    backgroundColor: "transparent",
    borderRadius: 4,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "var(--primaryColor)",
      color: "var(--white)",
      borderColor: "var(--primaryColor)",
    },
  },
});

const Button = ({ startIcon, text, endIcon, customStyles, onClick }) => {
  const classes = useStyles();

  return (
    <button
      onClick={onClick}
      className={classes.button}
      style={customStyles.button}
    >
      {startIcon && (
        <span className={classes.startIcon} style={customStyles.startIcon}>
          {startIcon}
        </span>
      )}
      {text}
      {endIcon && (
        <span className={classes.endIcon} style={customStyles.endIcon}>
          {endIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
