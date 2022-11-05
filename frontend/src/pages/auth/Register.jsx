// NODE_MODULES
import { useContext, useState } from "react";
import { Container, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

// LOCAL IMPORTS
import authStyles from "./authStyles";
import Navbar from "../../components/navbar/Navbar";
import { AppContext } from "../../App";
import PageTitle from "../../components/common/PageTitle";
import Footer from "../../components/footer/Index";
import NewsLetter from "../../components/NewsLetter";
import Button from "../../components/common/Button";

const useStyles = makeStyles(authStyles());

const Register = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    password2: "",
  });
  const { fullname, email, password, password2 } = formData;
  const { mediaQueries } = useContext(AppContext);

  const handleOnChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Navbar mediaQueries={mediaQueries} />
      <PageTitle
        title={"Register"}
        subTitle={"Create a new account"}
        mediaQueries={mediaQueries}
      />
      <Container className={classes.container}>
        <form onSubmit={handleOnSubmit}>
          <div className={classes.textFieldContainer}>
            <label htmlFor="fullname" className={classes.label}>
              Full Name:
            </label>
            <TextField
              required
              autoFocus
              fullWidth
              type={"text"}
              size={"small"}
              value={fullname}
              name={"fullname"}
              label={"Full Name"}
              onChange={handleOnChange}
              placeholder={"Enter your full name"}
            />
          </div>
          <div className={classes.textFieldContainer}>
            <label htmlFor="email" className={classes.label}>
              Email:
            </label>
            <TextField
              required
              fullWidth
              type={"text"}
              size={"small"}
              value={email}
              name={"email"}
              label={"Email"}
              onChange={handleOnChange}
              placeholder={"Enter your email"}
            />
          </div>
          <div className={classes.textFieldContainer}>
            <label htmlFor="password" className={classes.label}>
              Password:
            </label>
            <TextField
              required
              fullWidth
              type={"password"}
              size={"small"}
              value={password}
              name={"password"}
              label={"Password"}
              onChange={handleOnChange}
              placeholder={"Enter your password"}
            />
          </div>
          <div className={classes.textFieldContainer}>
            <label htmlFor="password2" className={classes.label}>
              Confirm Password:
            </label>
            <TextField
              required
              fullWidth
              type={"password"}
              size={"small"}
              value={password2}
              name={"password2"}
              label={"Confirm Password"}
              onChange={handleOnChange}
              placeholder={"Confirm password"}
            />
          </div>
          <br />
          <Button text={"REGISTER"} width={"100%"} altButton />
          <p className={classes.text}>
            Already have an account?{" "}
            <Link to="/login">
              <strong>login</strong>
            </Link>
          </p>
        </form>
      </Container>
      <NewsLetter mediaQueries={mediaQueries} />
      <Footer mediaQueries={mediaQueries} />
    </div>
  );
};

export default Register;
