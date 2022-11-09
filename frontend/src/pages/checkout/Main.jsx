// NODE_MODULES
import { Autocomplete, Grid, TextField } from "@mui/material";
import { useState } from "react";
// import { useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
import countries from "countries-3166";

// LOCAL IMPORTS
import PageSubTitle from "../../components/common/PageSubTitle";
import Button from "../../components/common/Button";

const useStyles = makeStyles({
  label: {
    fontWeight: 500,
    marginBottom: 5,
    display: "block",
    color: "var(--secondaryText)",
    fontFamily: "'Roboto', serif",
  },
});

const Main = ({ mediaQueries }) => {
  const classes = useStyles();
  const { tabletDown } = mediaQueries;
  // const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    company: "",
    country: "",
    city_or_state: "",
    postal_code: "",
    phone_number: "",
    street_address: "",
  });

  const {
    first_name,
    last_name,
    email,
    company,
    country,
    city_or_state,
    postal_code,
    phone_number,
    street_address,
  } = formData;

  const handleOnChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const inlineStyles = {
    main: {
      marginRight: tabletDown ? 0 : 20,
    },
  };

  return (
    <div style={inlineStyles.main}>
      <PageSubTitle text={"Shipping Address"} />
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <label htmlFor="first_name" className={classes.label}>
              First Name
            </label>
            <TextField
              required
              fullWidth
              type={"text"}
              size={"small"}
              value={first_name}
              name={"first_name"}
              label={"First Name"}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <label htmlFor="last_name" className={classes.label}>
              Last Name
            </label>
            <TextField
              required
              fullWidth
              type={"text"}
              size={"small"}
              value={last_name}
              name={"last_name"}
              label={"Last Name"}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <label htmlFor="email" className={classes.label}>
              Email Address
            </label>
            <TextField
              required
              fullWidth
              type={"email"}
              size={"small"}
              value={email}
              name={"email"}
              label={"Email Address"}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <label htmlFor="company" className={classes.label}>
              Company
            </label>
            <TextField
              fullWidth
              type={"text"}
              size={"small"}
              value={company}
              name={"company"}
              label={"Company"}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <label htmlFor="country" className={classes.label}>
              Country / Region
            </label>
            <Autocomplete
              options={countries.toArray()}
              autoHighlight
              size="small"
              getOptionLabel={(option) => option.name}
              renderInput={(params) => {
                return (
                  <TextField
                    {...params}
                    required
                    fullWidth
                    type={"text"}
                    value={country}
                    name={"country"}
                    onChange={handleOnChange}
                    label={"Country / Region"}
                  />
                );
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <label htmlFor=" city_or_state" className={classes.label}>
              City / State
            </label>
            <TextField
              required
              fullWidth
              type={"text"}
              size={"small"}
              value={city_or_state}
              name={"city_or_state"}
              label={"City / State"}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <label htmlFor="postal_code" className={classes.label}>
              Postal Code
            </label>
            <TextField
              required
              fullWidth
              type={"text"}
              size={"small"}
              value={postal_code}
              name={"postal_code"}
              label={"Postal Code"}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <label htmlFor="phone_number" className={classes.label}>
              Phone Number
            </label>
            <TextField
              required
              fullWidth
              type={"text"}
              size={"small"}
              value={phone_number}
              name={"phone_number"}
              label={"Phone Number"}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12}>
            <label htmlFor="street_address" className={classes.label}>
              Street Address
            </label>
            <TextField
              required
              fullWidth
              type={"text"}
              size={"small"}
              multiline
              rows={4}
              value={street_address}
              name={"street_address"}
              label={"Street Address"}
              onChange={handleOnChange}
            />
          </Grid>
        </Grid>
        <br />
        <Button width={"100%"} text={"Place Order"} altButton />
      </form>
    </div>
  );
};

export default Main;
