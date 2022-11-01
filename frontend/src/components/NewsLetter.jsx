// NODE_MODULES
import { Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { FiSend } from "react-icons/fi";

const useStyles = makeStyles({
  multilineColor: {
    color: "var(--white) !important",
    // backgroundColor: "var(--primaryBg)",
    fontFamily: "'Roboto', serif !important",
  },
  notchedOutline: {
    borderColor: "var(--white) !important",
  },
  inputLabel: {
    color: "var(--white) !important",
    fontFamily: "'Roboto', serif !important",
  },
  input: {
    display: "flex",
    flex: 0.5,
  },
  header: {
    textTransform: "uppercase",
    fontFamily: "'Roboto', serif",
    fontWeight: 600,
    fontSize: 22,
  },
  text: {
    margin: "10px 0 0 0",
    fontWeight: 300,
  },
  texts: {
    flex: 0.5,
    textAlign: "center",
  },
});

const NewsLetter = ({ mediaQueries }) => {
  const { email, setEmail } = useState("");
  const { largeDown, tabletUp } = mediaQueries;
  const classes = useStyles();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const inlineStyles = {
    button: {
      bgcolor: "var(--white)",
      color: "var(--primaryText)",
      fontFamily: "'Roboto', serif",
      marginLeft: "10px",
    },
    newsLetter: {
      display: tabletUp && "flex",
      backgroundColor: "var(--primaryColor)",
      color: "var(--white)",
      borderRadius: 20,
      padding: 20,
      alignItems: "center",
    },
  };

  return (
    <Container sx={{ marginTop: "50px", marginBottom: "50px" }}>
      <div style={inlineStyles.newsLetter}>
        <div
          className={classes.texts}
          style={{ marginBottom: !tabletUp && 20 }}
        >
          <header className={classes.header}>Sign Up For New Letter</header>
          <p className={classes.text}>
            Get Update about our offers and services.
          </p>
        </div>
        <div className={classes.input}>
          <TextField
            InputProps={{
              className: classes.multilineColor,
              classes: {
                notchedOutline: classes.notchedOutline,
              },
            }}
            InputLabelProps={{
              classes: {
                root: classes.inputLabel,
                focused: classes.inputLabel,
              },
            }}
            type={"text"}
            placeholder={"Enter your email"}
            onChange={onChangeEmail}
            name={"email"}
            label={"Email"}
            value={email}
            fullWidth
            size={largeDown ? "small" : "medium"}
          />
          <Button sx={inlineStyles.button}><FiSend size={24}/></Button>
        </div>
      </div>
    </Container>
  );
};

export default NewsLetter;
