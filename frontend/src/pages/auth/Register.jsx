// NODE_MODULES
import { useContext, useEffect, useState } from "react";
import { Container, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// LOCAL IMPORTS
import authStyles from "./authStyles";
import Navbar from "../../components/navbar/Navbar";
import { AppContext } from "../../App";
import PageTitle from "../../components/common/PageTitle";
import Footer from "../../components/footer/Index";
import NewsLetter from "../../components/NewsLetter";
import Button from "../../components/common/Button";
import { reset, register } from "../../features/auth/authSlice";

const useStyles = makeStyles(authStyles());

const Register = () => {
  const classes = useStyles();
  const { mediaQueries } = useContext(AppContext);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    password2: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { fullname, email, password, password2 } = formData;
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => { 
    // if error occure display error
    if (isError) {
      console.log(message); // TODO SHOW ALERT
    }

    // if success redirect user
    if (isSuccess) {
      navigate("/")
    }

    // reset the auth state
    dispatch(reset());
  }, [isSuccess, isError, message, navigate, dispatch]);
  
  const handleOnChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      console.log("Passwords must match"); // TODO SHOW ALERT
    } else {
      const userData = {
        fullname: fullname,
        email: email,
        password: password,
      };

      dispatch(register(userData));
    }
  };

  return (
    <div>
      <Navbar mediaQueries={mediaQueries} />
      <PageTitle
        title={"Register"}
        subTitle={"Create a new account"}
        mediaQueries={mediaQueries}
      />
      {isLoading && "Show Spinner"} {/* TODO show spinner component */}
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
          <Button text={"REGISTER"} color="var(--white)"  width={"100%"} altButton />
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
