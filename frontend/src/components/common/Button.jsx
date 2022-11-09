// NODE_MODULES
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  button: {
    border: "1px solid var(--primaryBorder)",
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
  },
});

const Button = ({
  startIcon,
  text,
  endIcon,
  onClick,
  width,
  height,
  altButton,
  color,
  small,
  backgroundColor
}) => {
  const classes = useStyles();
  const buttonIcon = {
    position: "relative",
    top: 3,
    fontSize: small ? 18 : 20,
  };

  const inlineStyles = {
    button: {
      fontWeight: 700,
      fontSize: small ? 14 : 16,
      fontFamily: "'Roboto', serif",
      padding: small ? "4px 10px" : "10px 20px",
      width: width,
      height: height,
      color: color,
      backgroundColor: `${backgroundColor} !important`,
    },
    startIcon: {
      ...buttonIcon,
      marginRight: 8,
    },
    endIcon: {
      ...buttonIcon,
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
