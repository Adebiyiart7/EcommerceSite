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
  buttonAlt: {
    color: "var(--white)",
    border: "1px solid var(--primaryColor)",
    padding: "6px 12px",
    backgroundColor: "var(--primaryColor)",
    borderRadius: 4,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "transparent",
      color: "var(--primaryText)",
      borderColor: "var(--primaryBorder)",
    },
  }
});

const Button = ({ startIcon, text, endIcon, onClick, width,height, altButton }) => {
  const classes = useStyles();
  const categoriesIcon = {
    position: "relative",
    top: 3,
    fontSize: 20,
  };

  const inlineStyles = {
    button: {
      fontWeight: 700,
      fontSize: 16,
      padding: "10px 20px",
      fontFamily: "'Roboto', serif",
      marginRight: 20,
      width: width,
      height: height
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

  return (
    <button
      onClick={onClick}
      className={altButton ? classes.buttonAlt : classes.button}
      style={inlineStyles.button}
    >
      {startIcon && (
        <span className={classes.startIcon} style={inlineStyles.startIcon}>
          {startIcon}
        </span>
      )}
      {text}
      {endIcon && (
        <span className={classes.endIcon} style={inlineStyles.endIcon}>
          {endIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
